import React from "react";
import type { ValueTranslationMetric } from "@/types/portal";

interface ValueTranslatorSectionProps {
  readonly metrics: readonly ValueTranslationMetric[];
  readonly className?: string;
}

/**
 * ValueTranslatorSection (100% Server Component)
 * Traduce telemetría técnica a volumen monetario y pipeline comercial
 * con el lenguaje estético y sobrio de Adaro Viajes.
 */
export function ValueTranslatorSection({
  metrics,
  className = "",
}: ValueTranslatorSectionProps) {
  return (
    <section
      aria-label="Traductor de Métricas a Valor Comercial"
      className={`space-y-6 ${className}`}
    >
      {/* Cabecera Editorial */}
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 border-b border-border-default pb-4">
        <div>
          <span className="font-sans text-[10px] font-semibold uppercase tracking-[0.25em] text-ochre-500 block mb-1">
            Monetización & Proyección
          </span>
          <h2 className="font-display text-2xl sm:text-3xl font-normal text-text-primary tracking-tight">
            Traductor a Valor Comercial
          </h2>
        </div>
        <p className="font-sans text-xs text-text-secondary max-w-md font-light leading-relaxed">
          Conversión de interacciones digitales a valor económico estimado en pipeline (ciclo de 28 días vs. periodo previo).
        </p>
      </div>

      {/* Rejilla de Tarjetas Arquitectónicas */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {metrics.map((metric, idx) => (
          <article
            key={idx}
            className="relative border border-border-default bg-surface-secondary/70 p-6 sm:p-8 flex flex-col justify-between transition-colors hover:border-ochre-500/50"
          >
            {/* Acento lineal ocre */}
            <div
              className="absolute top-0 left-0 w-12 h-[2px] bg-ochre-500"
              aria-hidden="true"
            />

            <div>
              {/* Trazabilidad técnica y tasa de conversión con período comparativo */}
              <div className="flex items-center justify-between gap-2 pb-4 border-b border-border-default/60">
                <span className="font-mono text-[10px] tracking-[0.15em] uppercase text-text-secondary border border-border-default/80 bg-surface-page/60 px-2 py-0.5">
                  {metric.technicalMetric}
                </span>
                <div className="flex flex-col items-end">
                  <span className="font-mono text-xs font-semibold text-state-success tabular-nums">
                    {metric.conversionRate}
                  </span>
                  {metric.comparisonPeriod && (
                    <span className="font-mono text-[9px] text-text-secondary/80">
                      {metric.comparisonPeriod}
                    </span>
                  )}
                </div>
              </div>

              {/* Etiqueta comercial */}
              <h3 className="mt-4 font-sans text-sm sm:text-base font-medium text-text-primary leading-snug">
                {metric.commercialLabel}
              </h3>
            </div>

            {/* Cifra de Ingreso Proyectado */}
            <div className="mt-8 pt-4 border-t border-border-default/60">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-text-secondary">
                  Impacto Proyectado
                </span>
                {metric.comparisonPeriod && (
                  <span className="font-mono text-[9px] text-text-secondary/70">
                    {metric.comparisonPeriod}
                  </span>
                )}
              </div>
              <div className="mt-1 flex items-baseline justify-between gap-2">
                <span className="font-display tabular-nums text-3xl sm:text-4xl font-normal tracking-tight text-text-primary">
                  {metric.projectedRevenue}
                </span>
                <span className="font-mono text-xs text-text-secondary tabular-nums">
                  {metric.currentValue} vol.
                </span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default ValueTranslatorSection;
