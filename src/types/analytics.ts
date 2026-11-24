/**
 * Adaro Analytics Engine — Strict Contracts
 * Domain: excursiones.adaroviajes.com
 *
 * Directrices Arquitectónicas:
 * 1. Cero E-Commerce Tradicional: Enfoque exclusivo en Lead Generation de alta gama y embudo consultivo.
 * 2. Diferenciación de Oferta: Distinción entre excursiones privadas estandarizadas ('private_excursion')
 *    y viajes a medida ('bespoke_trip').
 * 3. Aislamiento Estricto: adaro_container_scope = 'excursiones' y adaro_business_unit = 'private_expeditions'.
 * 4. Tipado Estricto: Cero 'any', uniones discriminadas y propiedades de solo lectura (readonly).
 */

export type AdaroContainerScope = 'excursiones';
export type AdaroBusinessUnit = 'private_expeditions';

export type OfferType = 'private_excursion' | 'bespoke_trip';

export type LeadIntent = 'excursion-privada' | 'viaje-a-medida' | 'explorando-opciones';

export type PaxCount = '1-2' | '3' | '4';

export type LeadFormId =
  | 'hud_multistep_contact'
  | 'trip_bespoke_inquiry'
  | 'quick_modal_contact'
  | 'newsletter_footer';

export type ContactChannel = 'whatsapp' | 'phone' | 'email' | 'social';

export type AnalyticsClickLocation =
  | 'success_screen'
  | 'footer'
  | 'sticky_nav'
  | 'header'
  | 'hero'
  | 'investment_section'
  | 'final_cta'
  | 'about_cta'
  | 'floating_whatsapp';

export interface BaseAnalyticsPayload {
  readonly adaro_container_scope: AdaroContainerScope;
  readonly adaro_business_unit: AdaroBusinessUnit;
  readonly timestamp: number;
}

// =============================================================================
// MACRO-CONVERSIONES (Cualificación de Leads de Alta Gama)
// =============================================================================

export interface GenerateLeadEvent extends BaseAnalyticsPayload {
  readonly event: 'generate_lead';
  readonly form_id: LeadFormId;
  readonly offer_type: OfferType | 'exploratory';
  readonly lead_intent: LeadIntent;
  readonly pax_count: PaxCount;
  readonly city_origin: string;
  readonly excursion_interest?: string;
  readonly has_custom_details: boolean;
  readonly has_travel_dates: boolean;
}

export interface ContactChannelClickEvent extends BaseAnalyticsPayload {
  readonly event: 'contact_channel_click';
  readonly channel: ContactChannel;
  readonly click_location: AnalyticsClickLocation;
  readonly inquiry_context:
    | 'post_lead_followup'
    | 'direct_inquiry'
    | 'bespoke_consultation'
    | 'general';
  readonly target_url: string;
  readonly offer_type?: OfferType;
}

// =============================================================================
// MICRO-CONVERSIONES: Embudo de Formularios de Captación
// =============================================================================

export interface LeadFormStartEvent extends BaseAnalyticsPayload {
  readonly event: 'lead_form_start';
  readonly form_id: LeadFormId;
  readonly initial_intent?: LeadIntent;
}

export interface LeadFormStepCompleteEvent extends BaseAnalyticsPayload {
  readonly event: 'lead_form_step_complete';
  readonly form_id: LeadFormId;
  readonly step_number: number;
  readonly step_name: string;
  readonly offer_type?: OfferType | 'exploratory';
  readonly step_data?: {
    readonly selected_intent?: LeadIntent;
    readonly pax_count?: PaxCount;
    readonly has_dates?: boolean;
    readonly city_provided?: boolean;
  };
}

export interface LeadFormStepBackEvent extends BaseAnalyticsPayload {
  readonly event: 'lead_form_step_back';
  readonly form_id: LeadFormId;
  readonly from_step: number;
  readonly to_step: number;
}

export interface LeadFormValidationErrorEvent extends BaseAnalyticsPayload {
  readonly event: 'lead_form_validation_error';
  readonly form_id: LeadFormId;
  readonly step_number: number;
  readonly invalid_fields: readonly string[];
}

/**
 * Alias semántico para compatibilidad con nomenclatura alternativa de especificación.
 */
export type LeadFormValidationFailedEvent = LeadFormValidationErrorEvent;

// =============================================================================
// MICRO-CONVERSIONES: Exploración de Oferta (Estandarizada vs A Medida)
// =============================================================================

export interface ExperienceCatalogViewEvent extends BaseAnalyticsPayload {
  readonly event: 'experience_catalog_view';
  readonly catalog_id: 'catalogo_excursiones';
  readonly active_season_filter?: string;
  readonly total_experiences: number;
}

export interface ExperienceCardClickEvent extends BaseAnalyticsPayload {
  readonly event: 'experience_card_click';
  readonly offer_type: 'private_excursion';
  readonly experience_slug: string;
  readonly experience_title: string;
  readonly card_position: number;
  readonly season_key?: string;
}

export interface ExperienceDetailViewEvent extends BaseAnalyticsPayload {
  readonly event: 'experience_detail_view';
  readonly offer_type: 'private_excursion';
  readonly experience_slug: string;
  readonly experience_title: string;
  readonly duration?: string;
  readonly modality?: string;
  readonly indicative_price_usd?: number;
}

export interface BespokePageViewEvent extends BaseAnalyticsPayload {
  readonly event: 'bespoke_page_view';
  readonly offer_type: 'bespoke_trip';
  readonly section_name?: string;
}

export interface InquireExperienceClickEvent extends BaseAnalyticsPayload {
  readonly event: 'inquire_experience_click';
  readonly offer_type: OfferType;
  readonly experience_slug?: string;
  readonly source_section: 'investment_section' | 'final_cta' | 'hero' | 'about_cta';
  readonly cta_text: string;
  readonly destination_url: string;
}

// =============================================================================
// MICRO-CONVERSIONES: Cartografía, Contenido y Navegación
// =============================================================================

export interface CartographyMilestoneViewEvent extends BaseAnalyticsPayload {
  readonly event: 'cartography_milestone_view';
  readonly experience_slug: string;
  readonly milestone_id: string;
  readonly milestone_name: string;
  readonly altitude_meters: number;
}

export interface FaqAccordionToggleEvent extends BaseAnalyticsPayload {
  readonly event: 'faq_accordion_toggle';
  readonly faq_id: string;
  readonly question: string;
  readonly action: 'expand' | 'collapse';
  readonly section_id?: string;
}

export interface StickyNavClickEvent extends BaseAnalyticsPayload {
  readonly event: 'sticky_nav_click';
  readonly target_anchor: string;
  readonly device_mode: 'desktop' | 'mobile';
}

// =============================================================================
// UNIÓN DISCRIMINADA DE EVENTOS
// =============================================================================

export type AdaroAnalyticsEvent =
  | GenerateLeadEvent
  | ContactChannelClickEvent
  | LeadFormStartEvent
  | LeadFormStepCompleteEvent
  | LeadFormStepBackEvent
  | LeadFormValidationErrorEvent
  | ExperienceCatalogViewEvent
  | ExperienceCardClickEvent
  | ExperienceDetailViewEvent
  | BespokePageViewEvent
  | InquireExperienceClickEvent
  | CartographyMilestoneViewEvent
  | FaqAccordionToggleEvent
  | StickyNavClickEvent;

/**
 * Tipo helper distributivo para construir la entrada de eventos omitiendo los campos
 * inyectados de forma fija por el despachador.
 */
export type AnalyticsEventInput<T extends AdaroAnalyticsEvent = AdaroAnalyticsEvent> =
  T extends unknown
    ? Omit<T, 'adaro_container_scope' | 'adaro_business_unit' | 'timestamp'>
    : never;
