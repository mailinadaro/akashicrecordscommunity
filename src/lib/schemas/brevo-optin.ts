import { z } from "zod";

export const COUNTRY_OPTIONS = [
  { code: "+52", label: "+52 MX (México)" },
  { code: "+54", label: "+54 AR (Argentina)" },
  { code: "+57", label: "+57 CO (Colombia)" },
  { code: "+56", label: "+56 CL (Chile)" },
  { code: "+51", label: "+51 PE (Perú)" },
  { code: "+34", label: "+34 ES (España)" },
  { code: "+1", label: "+1 US / CA" },
  { code: "+598", label: "+598 UY (Uruguay)" },
  { code: "+593", label: "+593 EC (Ecuador)" },
  { code: "+506", label: "+506 CR (Costa Rica)" },
  { code: "+502", label: "+502 GT (Guatemala)" },
  { code: "+507", label: "+507 PA (Panamá)" },
  { code: "+591", label: "+591 BO (Bolivia)" },
  { code: "+595", label: "+595 PY (Paraguay)" },
  { code: "+58", label: "+58 VE (Venezuela)" },
] as const;

export const DEFAULT_ORIGEN_REGISTRO = "landing-entre-dos-ciclos";
export const DEFAULT_EVENTO = "EVENTO_ENTRE_DOS_CICLOS_DIC_2026";

export const brevoOptinSchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(2, "Por favor ingresa tu nombre completo.")
    .max(200, "El nombre no puede superar los 200 caracteres."),
  email: z
    .string()
    .trim()
    .min(1, "Por favor ingresa tu correo electrónico.")
    .email("Por favor ingresa un correo electrónico válido.")
    .max(254, "El correo electrónico es demasiado largo.")
    .transform((value) => value.toLowerCase()),
  countryCode: z
    .string()
    .trim()
    .regex(/^\+\d{1,4}$/, "Selecciona un código de país válido."),
  whatsapp: z
    .string()
    .trim()
    .transform((value) => value.replace(/[\s\-().]/g, ""))
    .pipe(
      z
        .string()
        .regex(
          /^\d{6,15}$/,
          "Ingresa un número de WhatsApp válido (entre 6 y 15 dígitos)."
        )
    ),
  origenRegistro: z
    .string()
    .trim()
    .min(1)
    .max(100)
    .default(DEFAULT_ORIGEN_REGISTRO),
  evento: z.string().trim().min(1).max(100).default(DEFAULT_EVENTO),
  honeypot: z.string().optional().default(""),
});

export type BrevoOptinInput = z.input<typeof brevoOptinSchema>;
export type BrevoOptinParsed = z.output<typeof brevoOptinSchema>;

export type BrevoOptinField = "fullName" | "email" | "countryCode" | "whatsapp";

export interface BrevoOptinActionResult {
  success: boolean;
  message?: string;
  fieldErrors?: Partial<Record<BrevoOptinField, string>>;
}
