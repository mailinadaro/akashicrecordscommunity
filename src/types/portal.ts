/**
 * Portal de Métricas & Storytelling Narrative-Driven (GA4)
 * Contratos de Dominio Fuertemente Tipados.
 *
 * Desacopla las respuestas crudas de Google Analytics Data API
 * hacia entidades semánticas orientadas a valor comercial y toma de decisiones.
 */

export type BusinessHealthLevel = "healthy" | "attention" | "critical";

export type DataSourceType = "ga4_live" | "synthetic_demo";

export interface BusinessHealthIndicator {
  readonly label: string;
  readonly value: string;
  readonly state: "positive" | "neutral" | "negative";
  readonly comparisonPeriod?: string;
}

export interface BusinessHealthStatus {
  readonly status: BusinessHealthLevel;
  readonly headline: string;
  readonly score: number;
  readonly indicators: readonly BusinessHealthIndicator[];
}

export interface ExecutiveSummaryData {
  readonly periodLabel: string;
  readonly comparisonLabel: string;
  readonly soWhat: string;
  readonly keyTakeaway: string;
  readonly primaryDrivers: readonly string[];
}

export interface ValueTranslationMetric {
  readonly commercialLabel: string;
  readonly technicalMetric: string;
  readonly currentValue: number | string;
  readonly projectedRevenue: string;
  readonly conversionRate: string;
  readonly comparisonPeriod?: string;
}

export interface ActionableStep {
  readonly id: string;
  readonly priority: "high" | "medium" | "low";
  readonly title: string;
  readonly rationale: string;
  readonly recommendedAction: string;
  readonly expectedImpact: string;
}

export interface CommercialIntentMetric {
  readonly name: string;
  readonly value: string;
  readonly trend: string;
  readonly comparisonPeriod?: string;
}

export interface CommercialIntentGroup {
  readonly intent: "captacion" | "conversion" | "alta_gama";
  readonly label: string;
  readonly description: string;
  readonly metrics: readonly CommercialIntentMetric[];
}

export interface PortalMetricsData {
  readonly health: BusinessHealthStatus;
  readonly summary: ExecutiveSummaryData;
  readonly valueTranslation: readonly ValueTranslationMetric[];
  readonly nextSteps: readonly ActionableStep[];
  readonly intentGroups: readonly CommercialIntentGroup[];
  readonly isDemoFallback?: boolean;
  readonly dataSource: DataSourceType;
  readonly propertyId?: string;
  readonly comparisonLabel: string;
  readonly lastSyncedAt: string;
}
