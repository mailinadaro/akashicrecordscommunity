"use server";

import {
  brevoOptinSchema,
  type BrevoOptinActionResult,
  type BrevoOptinField,
  type BrevoOptinInput,
  type BrevoOptinParsed,
} from "@/lib/schemas/brevo-optin";

const BREVO_CONTACTS_ENDPOINT = "https://api.brevo.com/v3/contacts";
const BREVO_EVENT_LIST_ID = 79;
const BREVO_TIMEOUT_MS = 10_000;

/**
 * Deduplicates concurrent identical submissions in the same Node process
 * so rapid double-submits do not issue redundant Brevo API requests.
 */
const inFlightRequests = new Map<string, Promise<BrevoOptinActionResult>>();

interface BrevoApiErrorBody {
  code?: string;
  message?: string;
}

function getRegistrationDateIso(): string {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: "America/Mexico_City",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(new Date());
}

function extractFieldErrors(
  issues: ReadonlyArray<{ path: PropertyKey[]; message: string }>
): Partial<Record<BrevoOptinField, string>> {
  const fieldErrors: Partial<Record<BrevoOptinField, string>> = {};
  const validFields = new Set<BrevoOptinField>([
    "fullName",
    "email",
    "countryCode",
    "whatsapp",
  ]);

  for (const issue of issues) {
    const key = issue.path[0];
    if (typeof key === "string" && validFields.has(key as BrevoOptinField)) {
      const field = key as BrevoOptinField;
      if (!fieldErrors[field]) {
        fieldErrors[field] = issue.message;
      }
    }
  }

  return fieldErrors;
}

async function upsertBrevoContact(
  data: BrevoOptinParsed,
  apiKey: string
): Promise<BrevoOptinActionResult> {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), BREVO_TIMEOUT_MS);

  try {
    // Do not send emailBlacklisted, smsBlacklisted, or OPT_IN so existing
    // communication consent preferences in Brevo remain untouched.
    const payload = {
      email: data.email,
      attributes: {
        FIRSTNAME: data.fullName,
        NOMBRE_COMPLETO: data.fullName,
        WHATSAPP: `${data.countryCode}${data.whatsapp}`,
        FECHA_REGISTRO: getRegistrationDateIso(),
        ORIGEN_REGISTRO: data.origenRegistro,
        EVENTO: data.evento,
        WHATSAPP_VIP: false,
      },
      listIds: [BREVO_EVENT_LIST_ID],
      updateEnabled: true,
    };

    const response = await fetch(BREVO_CONTACTS_ENDPOINT, {
      method: "POST",
      headers: {
        "api-key": apiKey,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(payload),
      cache: "no-store",
      signal: controller.signal,
    });

    if (response.status === 201 || response.status === 204 || response.ok) {
      return { success: true };
    }

    let errorBody: BrevoApiErrorBody | null = null;
    try {
      const rawText = await response.text();
      if (rawText) {
        errorBody = JSON.parse(rawText) as BrevoApiErrorBody;
      }
    } catch {
      errorBody = null;
    }

    if (response.status === 400) {
      const isEmailError =
        errorBody?.message?.toLowerCase().includes("email") ?? false;
      return {
        success: false,
        message: isEmailError
          ? "Por favor verifica que tu correo electrónico sea válido."
          : "No se pudo validar tu registro. Revisa los datos e intenta nuevamente.",
      };
    }

    if (response.status === 429) {
      return {
        success: false,
        message:
          "Estamos recibiendo muchas solicitudes en este momento. Espera unos segundos e intenta nuevamente.",
      };
    }

    console.error(
      `[Brevo] Contact upsert failed with HTTP ${response.status} (${errorBody?.code ?? "unknown"})`
    );
    return {
      success: false,
      message:
        "No se pudo completar tu registro en este momento. Por favor intenta nuevamente.",
    };
  } catch (error) {
    const isAbort = error instanceof Error && error.name === "AbortError";
    console.error(
      isAbort
        ? "[Brevo] Request timed out"
        : "[Brevo] Network error during contact upsert"
    );
    return {
      success: false,
      message:
        "Ocurrió un error de conexión al guardar tu registro. Intenta nuevamente.",
    };
  } finally {
    clearTimeout(timeoutId);
  }
}

/**
 * Registers or updates a lead in Brevo list 79 via server-side REST API.
 */
export async function registerContactInBrevo(
  rawInput: BrevoOptinInput
): Promise<BrevoOptinActionResult> {
  const parsed = brevoOptinSchema.safeParse(rawInput);

  if (!parsed.success) {
    const fieldErrors = extractFieldErrors(parsed.error.issues);
    const firstMessage =
      parsed.error.issues[0]?.message ??
      "Por favor completa tu nombre, email y número de WhatsApp.";
    return {
      success: false,
      message: firstMessage,
      fieldErrors,
    };
  }

  // Honeypot anti-spam check: silently accept without calling Brevo.
  if (parsed.data.honeypot && parsed.data.honeypot.trim().length > 0) {
    return { success: true };
  }

  const apiKey = process.env.BREVO_AKASHIC_API_KEY?.trim();
  if (!apiKey) {
    console.error("[Brevo] Missing BREVO_AKASHIC_API_KEY environment variable");
    return {
      success: false,
      message:
        "El servicio de registro no está disponible temporalmente. Intenta más tarde.",
    };
  }

  const dedupeKey = `${parsed.data.email}::${parsed.data.evento}`;
  const existingRequest = inFlightRequests.get(dedupeKey);
  if (existingRequest) {
    return existingRequest;
  }

  const requestPromise = upsertBrevoContact(parsed.data, apiKey).finally(() => {
    inFlightRequests.delete(dedupeKey);
  });

  inFlightRequests.set(dedupeKey, requestPromise);
  return requestPromise;
}
