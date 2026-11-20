/**
 * Adaro Analytics Engine — Safe GTM Dispatcher
 * Domain: excursiones.adaroviajes.com
 *
 * Características:
 * - Aislamiento innegociable: inyecta 'adaro_container_scope: excursiones' y 'adaro_business_unit: private_expeditions'.
 * - Tipado estricto sin 'any': aserciones locales basadas en 'unknown' sin contaminar Window global.
 * - Soporte isomórfico con verificación SSR y fallback resiliente.
 */

import { sendGTMEvent } from '@next/third-parties/google';
import type {
  AdaroBusinessUnit,
  AdaroContainerScope,
  AnalyticsClickLocation,
  AnalyticsEventInput,
  ContactChannel,
  LeadFormId,
  LeadIntent,
  OfferType,
  PaxCount,
} from '@/types/analytics';

export const ADARO_CONTAINER_SCOPE: AdaroContainerScope = 'excursiones';
export const ADARO_BUSINESS_UNIT: AdaroBusinessUnit = 'private_expeditions';

/**
 * Lista de claves restringidas para el dataLayer para asegurar Cero PII.
 */
const SENSITIVE_PII_KEYS = new Set([
  'nombre',
  'name',
  'fullname',
  'full_name',
  'first_name',
  'last_name',
  'apellido',
  'email',
  'mail',
  'correo',
  'telefono',
  'telephone',
  'phone',
  'whatsapp',
  'celular',
  'cellphone',
  'password',
  'token',
  'dni',
  'cuit',
  'cuil',
  'tarjeta',
  'credit_card',
  'card_number',
]);

function isPlainObject(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}

/**
 * Sanitizador defensivo en runtime: elimina recursivamente cualquier clave
 * que sugiera PII para garantizar privacidad estricta en el dataLayer.
 */
function purgeSensitivePII(record: Record<string, unknown>): Record<string, unknown> {
  const sanitized: Record<string, unknown> = {};

  for (const [key, value] of Object.entries(record)) {
    if (SENSITIVE_PII_KEYS.has(key.toLowerCase())) {
      if (process.env.NODE_ENV === 'development') {
        console.warn(`[Adaro Analytics] Clave sensible bloqueada por Zero-PII Sanitizer: "${key}"`);
      }
      continue;
    }

    if (isPlainObject(value)) {
      sanitized[key] = purgeSensitivePII(value);
    } else if (Array.isArray(value)) {
      sanitized[key] = value.map((item) =>
        isPlainObject(item) ? purgeSensitivePII(item) : item
      );
    } else {
      sanitized[key] = value;
    }
  }

  return sanitized;
}

/**
 * Contrato local para la ventana del navegador.
 * Aislado estrictamente mediante unknown para evitar conflictos con otros paquetes.
 */
interface WindowWithDataLayer {
  dataLayer?: unknown[];
}

/**
 * Acceso seguro y local al dataLayer mediante narrowing.
 */
function pushToLocalDataLayer(payload: Record<string, unknown>): void {
  if (typeof window === 'undefined') return;

  const localWindow = window as unknown as WindowWithDataLayer;

  if (!Array.isArray(localWindow.dataLayer)) {
    localWindow.dataLayer = [];
  }

  localWindow.dataLayer.push(payload);
}

/**
 * Despacha un evento tipado garantizando la inyección de los tokens de aislamiento
 * y la purga preventiva de PII en tiempo de ejecución.
 */
export function trackAnalyticsEvent(
  eventInput: AnalyticsEventInput
): void {
  if (typeof window === 'undefined') return;

  const rawPayload: Record<string, unknown> = {
    ...(eventInput as unknown as Record<string, unknown>),
    adaro_container_scope: ADARO_CONTAINER_SCOPE,
    adaro_business_unit: ADARO_BUSINESS_UNIT,
    timestamp: Date.now(),
  };

  const fullPayload = purgeSensitivePII(rawPayload);

  try {
    // 1. Vía oficial de Next.js @next/third-parties/google
    sendGTMEvent(fullPayload);
  } catch {
    // 2. Fallback de contingencia directa sobre el array dataLayer
    pushToLocalDataLayer(fullPayload);
  }

  if (process.env.NODE_ENV === 'development') {
    console.debug('[Adaro Analytics Dispatcher]', eventInput.event, fullPayload);
  }
}

// =============================================================================
// HELPERS TIPADOS DE ALTO NIVEL PARA COMPONENTES
// =============================================================================

/**
 * Macro: Captura de lead cualificado tras validación y envío exitoso en Server Action.
 */
export function trackLeadGenerated(params: {
  lead_intent: LeadIntent;
  pax_count: PaxCount;
  city_origin: string;
  excursion_interest?: string;
  has_custom_details: boolean;
  has_travel_dates: boolean;
  form_id?: LeadFormId;
}): void {
  const offer_type: OfferType | 'exploratory' =
    params.lead_intent === 'excursion-privada'
      ? 'private_excursion'
      : params.lead_intent === 'viaje-a-medida'
      ? 'bespoke_trip'
      : 'exploratory';

  trackAnalyticsEvent({
    event: 'generate_lead',
    form_id: params.form_id ?? 'hud_multistep_contact',
    offer_type,
    lead_intent: params.lead_intent,
    pax_count: params.pax_count,
    city_origin: params.city_origin,
    excursion_interest: params.excursion_interest,
    has_custom_details: params.has_custom_details,
    has_travel_dates: params.has_travel_dates,
  });
}

/**
 * Macro / Micro: Clic en canales directos de contacto (WhatsApp, teléfono, email).
 */
export function trackContactChannelClick(params: {
  channel: ContactChannel;
  click_location: AnalyticsClickLocation;
  inquiry_context:
    | 'post_lead_followup'
    | 'direct_inquiry'
    | 'bespoke_consultation'
    | 'general';
  target_url: string;
  offer_type?: OfferType;
}): void {
  trackAnalyticsEvent({
    event: 'contact_channel_click',
    channel: params.channel,
    click_location: params.click_location,
    inquiry_context: params.inquiry_context,
    target_url: params.target_url,
    offer_type: params.offer_type,
  });
}

/**
 * Micro: Inicio de interacción con el formulario.
 */
export function trackLeadFormStart(
  initial_intent?: LeadIntent,
  form_id: LeadFormId = 'hud_multistep_contact'
): void {
  trackAnalyticsEvent({
    event: 'lead_form_start',
    form_id,
    initial_intent,
  });
}

/**
 * Micro: Progreso entre pasos del formulario.
 */
export function trackLeadFormStepComplete(params: {
  step_number: number;
  step_name: string;
  offer_type?: OfferType | 'exploratory';
  step_data?: {
    readonly selected_intent?: LeadIntent;
    readonly pax_count?: PaxCount;
    readonly has_dates?: boolean;
    readonly city_provided?: boolean;
  };
  form_id?: LeadFormId;
}): void {
  trackAnalyticsEvent({
    event: 'lead_form_step_complete',
    form_id: params.form_id ?? 'hud_multistep_contact',
    step_number: params.step_number,
    step_name: params.step_name,
    offer_type: params.offer_type,
    step_data: params.step_data,
  });
}

/**
 * Micro: Navegación de retroceso en el formulario.
 */
export function trackLeadFormStepBack(params: {
  from_step: number;
  to_step: number;
  form_id?: LeadFormId;
}): void {
  trackAnalyticsEvent({
    event: 'lead_form_step_back',
    form_id: params.form_id ?? 'hud_multistep_contact',
    from_step: params.from_step,
    to_step: params.to_step,
  });
}

/**
 * Micro: Intento fallido de avanzar de paso por error de validación Zod.
 */
export function trackLeadFormValidationError(params: {
  step_number: number;
  invalid_fields: readonly string[];
  form_id?: LeadFormId;
}): void {
  trackAnalyticsEvent({
    event: 'lead_form_validation_error',
    form_id: params.form_id ?? 'hud_multistep_contact',
    step_number: params.step_number,
    invalid_fields: params.invalid_fields,
  });
}

/**
 * Micro: Visualización de ficha de excursión estandarizada.
 */
export function trackExperienceDetailView(params: {
  experience_slug: string;
  experience_title: string;
  duration?: string;
  modality?: string;
  indicative_price_usd?: number;
}): void {
  trackAnalyticsEvent({
    event: 'experience_detail_view',
    offer_type: 'private_excursion',
    experience_slug: params.experience_slug,
    experience_title: params.experience_title,
    duration: params.duration,
    modality: params.modality,
    indicative_price_usd: params.indicative_price_usd,
  });
}

/**
 * Micro: Solicitud de consulta / disponibilidad desde CTAs de sección.
 */
export function trackInquireExperienceClick(params: {
  offer_type: OfferType;
  experience_slug?: string;
  source_section: 'investment_section' | 'final_cta' | 'hero' | 'about_cta';
  cta_text: string;
  destination_url: string;
}): void {
  trackAnalyticsEvent({
    event: 'inquire_experience_click',
    offer_type: params.offer_type,
    experience_slug: params.experience_slug,
    source_section: params.source_section,
    cta_text: params.cta_text,
    destination_url: params.destination_url,
  });
}

/**
 * Micro: Visualización de hito cartográfico y altimetría por scroll.
 */
export function trackCartographyMilestoneView(params: {
  experience_slug: string;
  milestone_id: string;
  milestone_name: string;
  altitude_meters: number;
}): void {
  trackAnalyticsEvent({
    event: 'cartography_milestone_view',
    experience_slug: params.experience_slug,
    milestone_id: params.milestone_id,
    milestone_name: params.milestone_name,
    altitude_meters: params.altitude_meters,
  });
}

/**
 * Micro: Interacción de apertura/cierre de acordeón FAQ.
 */
export function trackFaqAccordionToggle(params: {
  faq_id: string;
  question: string;
  action: 'expand' | 'collapse';
  section_id?: string;
}): void {
  trackAnalyticsEvent({
    event: 'faq_accordion_toggle',
    faq_id: params.faq_id,
    question: params.question,
    action: params.action,
    section_id: params.section_id,
  });
}

/**
 * Micro: Clic en enlace ancla de la barra flotante de navegación.
 */
export function trackStickyNavClick(params: {
  target_anchor: string;
  device_mode: 'desktop' | 'mobile';
}): void {
  trackAnalyticsEvent({
    event: 'sticky_nav_click',
    target_anchor: params.target_anchor,
    device_mode: params.device_mode,
  });
}

