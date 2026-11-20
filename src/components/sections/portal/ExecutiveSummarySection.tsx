import React from "react";
import HealthBadge from "@/components/ui/health-badge";
import type {
  ExecutiveSummaryData,
  BusinessHealthStatus,
  DataSourceType,
} from "@/types/portal";

interface ExecutiveSummarySectionProps {
  readonly summary: ExecutiveSummaryData;
  readonly health: BusinessHealthStatus;
  readonly dataSource?: DataSourceType;
  readonly propertyId?: string;
  readonly lastSyncedAt?: string;
  readonly className?: string;
}

const indicatorStateStyles = {
  positive: "border-state-success/40 bg-state-success/10 text-state-success",
  neutral: "border-ochre-500/40 bg-ochre-500/10 text-ochre-500",
  negative: "border-state-error/40 bg-state-error/10 text-state-error",
};

/**
 * ExecutiveSummarySection (100% Server Component)
 * Diagnóstico ejecutivo "The So What?" con lenguaje directivo
 * y tipografía editorial de Adaro Viajes (Lora + Source Sans 3).
 * Muestra explícitamente el origen de telemetría y el marco temporal comparativo.
 */
export function ExecutiveSummarySection({
  summary,
  health,
  dataSource,
  propertyId,
  lastSyncedAt,
  className = "",
}: ExecutiveSummarySectionProps) {
  const isLive = dataSource === "ga4_live";

  return (
    <section
      aria-label="Resumen Ejecutivo y Salud Comercial"
      className={`relative border border-border-default bg-surface-secondary/70 p-6 sm:p-8 lg:p-10 transition-colors ${className}`}
    >
      {/* Acento lineal superior característico en ocre metálico */}
      <div
        className="absolute top-0 left-0 w-24 h-[2px] bg-ochre-500"
        aria-hidden="true"
      />

      {/* Cabecera Técnica, Origen de Datos y Semáforo de Salud */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border-default pb-6">
        <div className="flex flex-wrap items-center gap-3">
          <span
            className="inline-block h-1.5 w-1.5 rotate-45 bg-ochre-500"
            aria-hidden="true"
          />
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-text-secondary font-medium">
            {summary.periodLabel}
            {summary.comparisonLabel ? ` · ${summary.comparisonLabel}` : ""}
          </span>

          {/* Sello de Trazabilidad de Fuente */}
          {isLive ? (
            <span className="inline-flex items-center gap-1.5 border border-state-success/40 bg-state-success/10 px-2 py-0.5 font-mono text-[9px] font-semibold uppercase tracking-wider text-state-success">
              <span
                className="inline-block h-1.5 w-1.5 rounded-full bg-state-success animate-pulse"
                aria-hidden="true"
              />
              Telemetría en Vivo · GA4 Prop. {propertyId || "560524900"}
              {lastSyncedAt ? ` (${lastSyncedAt})` : ""}
            </span>
          ) : (
            <span className="inline-flex items-center gap-1.5 border border-ochre-500/40 bg-ochre-500/10 px-2 py-0.5 font-mono text-[9px] font-semibold uppercase tracking-wider text-ochre-500">
              <span
                className="inline-block h-1.5 w-1.5 rotate-45 bg-ochre-500"
                aria-hidden="true"
              />
              Modelo Sintético de Referencia
            </span>
          )}
        </div>
        <HealthBadge status={health.status} score={health.score} />
      </div>

      {/* Titular Ejecutivo y Narrativa "The So What?" */}
      <div className="mt-8 space-y-4">
        <span className="font-sans text-[10px] font-semibold uppercase tracking-[0.25em] text-ochre-500 block">
          Diagnóstico de Rendimiento
        </span>
        <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-normal tracking-tight text-text-primary leading-[1.2]">
          {health.headline}
        </h2>
        <p className="font-display italic text-base sm:text-lg text-text-primary/90 leading-relaxed max-w-4xl">
          {summary.soWhat}
        </p>
      </div>

      {/* Recuadro de Conclusión Estratégica Monástica */}
      <div className="mt-8 border-l-2 border-ochre-500 bg-surface-tertiary/50 p-5 sm:p-6">
        <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-ochre-500 block">
          Conclusión Estratégica
        </span>
        <p className="mt-1.5 font-sans text-sm sm:text-base font-normal text-text-primary leading-relaxed">
          {summary.keyTakeaway}
        </p>
      </div>

      {/* Impulsores Clave y Lectura Operativa */}
      <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8 pt-6 border-t border-border-default">
        <div>
          <h3 className="font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-text-secondary mb-4">
            Impulsores de Crecimiento & Posicionamiento
          </h3>
          <ul className="space-y-3">
            {summary.primaryDrivers.map((driver, idx) => (
              <li
                key={idx}
                className="flex items-start gap-3 text-xs sm:text-sm text-text-primary/90 font-light leading-relaxed"
              >
                <span
                  className="mt-2 shrink-0 inline-block w-1.5 h-1.5 bg-ochre-500 rotate-45"
                  aria-hidden="true"
                />
                <span>{driver}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-text-secondary mb-4">
            Telemetría de Señales Operativas
          </h3>
          <div className="flex flex-wrap gap-2.5">
            {health.indicators.map((ind, idx) => {
              const style =
                indicatorStateStyles[ind.state] || indicatorStateStyles.neutral;
              return (
                <div
                  key={idx}
                  className={`inline-flex items-center gap-2 border px-3 py-1.5 font-mono text-[11px] ${style}`}
                >
                  <span
                    className="inline-block h-1 w-1 rotate-45 bg-current shrink-0"
                    aria-hidden="true"
                  />
                  <span className="opacity-80">{ind.label}:</span>
                  <span className="font-semibold tabular-nums">{ind.value}</span>
                  {ind.comparisonPeriod && (
                    <span className="opacity-70 text-[10px] tracking-tight">
                      ({ind.comparisonPeriod})
                    </span>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ExecutiveSummarySection;
