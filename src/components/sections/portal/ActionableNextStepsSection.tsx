import React from "react";
import type { ActionableStep } from "@/types/portal";

interface ActionableNextStepsSectionProps {
  readonly steps: readonly ActionableStep[];
  readonly className?: string;
}

const priorityConfig = {
  high: {
    label: "PRIORIDAD ALTA",
    accentClass: "bg-state-error",
    tagClass: "border-state-error/30 bg-state-error/10 text-state-error",
  },
  medium: {
    label: "PRIORIDAD MEDIA",
    accentClass: "bg-ochre-500",
    tagClass: "border-ochre-500/30 bg-ochre-500/10 text-ochre-500",
  },
  low: {
    label: "OPTIMIZACIÓN",
    accentClass: "bg-border-default",
    tagClass: "border-border-default bg-surface-tertiary/60 text-text-secondary",
  },
};

/**
 * ActionableNextStepsSection (100% Server Component)
 * Panel de recomendaciones tácticas y decisiones directivas
 * estilizadas con la sobriedad editorial de Adaro Viajes.
 */
export function ActionableNextStepsSection({
  steps,
  className = "",
}: ActionableNextStepsSectionProps) {
  return (
    <section
      aria-label="Próximos Pasos Sugeridos"
      className={`space-y-6 ${className}`}
    >
      {/* Cabecera Editorial */}
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 border-b border-border-default pb-4">
        <div>
          <span className="font-sans text-[10px] font-semibold uppercase tracking-[0.25em] text-ochre-500 block mb-1">
            Decisiones Tácticas
          </span>
          <h2 className="font-display text-2xl sm:text-3xl font-normal text-text-primary tracking-tight">
            Próximos Pasos Sugeridos
          </h2>
        </div>
        <p className="font-sans text-xs text-text-secondary max-w-md font-light leading-relaxed">
          Recomendaciones operativas con impacto directo en conversión y ticket promedio.
        </p>
      </div>

      {/* Rejilla de Tarjetas Arquitectónicas */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {steps.map((step) => {
          const config = priorityConfig[step.priority] || priorityConfig.low;
          return (
            <article
              key={step.id}
              className="relative border border-border-default bg-surface-secondary/70 p-6 sm:p-8 flex flex-col justify-between transition-colors hover:border-ochre-500/50"
            >
              {/* Acento lineal superior según nivel de prioridad */}
              <div
                className={`absolute top-0 left-0 w-12 h-[2px] ${config.accentClass}`}
                aria-hidden="true"
              />

              <div>
                {/* Badge de prioridad */}
                <div className="flex items-center justify-between pb-3 border-b border-border-default/60">
                  <span
                    className={`font-mono text-[10px] tracking-[0.15em] uppercase font-medium border px-2 py-0.5 ${config.tagClass}`}
                  >
                    {config.label}
                  </span>
                </div>

                {/* Título de la acción */}
                <h3 className="mt-4 font-display text-lg sm:text-xl font-normal text-text-primary leading-snug">
                  {step.title}
                </h3>

                {/* Diagnóstico */}
                <p className="mt-2.5 font-sans text-xs sm:text-sm text-text-secondary leading-relaxed font-light">
                  <span className="font-medium text-text-primary">Diagnóstico: </span>
                  {step.rationale}
                </p>

                {/* Acción Táctica Sugerida */}
                <div className="mt-4 border-l-2 border-ochre-500 bg-surface-tertiary/60 p-4">
                  <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.15em] text-ochre-500 block mb-1">
                    Acción Táctica
                  </span>
                  <p className="font-sans text-xs text-text-primary leading-relaxed font-normal">
                    {step.recommendedAction}
                  </p>
                </div>
              </div>

              {/* Pie con Impacto Esperado */}
              <div className="mt-6 pt-4 border-t border-border-default/60 flex items-center justify-between gap-2">
                <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-text-secondary">
                  Impacto:
                </span>
                <span className="font-mono text-xs font-semibold text-state-success tracking-wide">
                  {step.expectedImpact}
                </span>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default ActionableNextStepsSection;
