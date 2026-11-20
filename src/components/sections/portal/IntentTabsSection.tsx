import React from "react";
import Link from "next/link";
import type { CommercialIntentGroup } from "@/types/portal";

interface IntentTabsSectionProps {
  readonly intentGroups: readonly CommercialIntentGroup[];
  readonly activeIntent?: string;
  readonly className?: string;
}

/**
 * IntentTabsSection (100% Server Component)
 * Navegación directiva por intención comercial mediante URL searchParams.
 * Implementada con la tipografía editorial y proporciones arquitectónicas de Adaro Viajes.
 */
export function IntentTabsSection({
  intentGroups,
  activeIntent,
  className = "",
}: IntentTabsSectionProps) {
  const currentIntent =
    activeIntent && intentGroups.some((g) => g.intent === activeIntent)
      ? activeIntent
      : intentGroups[0]?.intent || "captacion";

  const selectedGroup =
    intentGroups.find((g) => g.intent === currentIntent) || intentGroups[0];

  return (
    <section
      aria-label="Pestañas por Intención Comercial"
      className={`space-y-6 ${className}`}
    >
      {/* Cabecera Editorial */}
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 border-b border-border-default pb-4">
        <div>
          <span className="font-sans text-[10px] font-semibold uppercase tracking-[0.25em] text-ochre-500 block mb-1">
            Segmentación Estratégica
          </span>
          <h2 className="font-display text-2xl sm:text-3xl font-normal text-text-primary tracking-tight">
            Métricas por Intención Comercial
          </h2>
        </div>
        <p className="font-sans text-xs text-text-secondary max-w-md font-light leading-relaxed">
          Lectura diferenciada según el ciclo de decisión del viajero premium.
        </p>
      </div>

      {/* Navegación por Pestañas Editoriales con subrayado en ocre */}
      <nav
        aria-label="Selector de Intención"
        className="flex flex-wrap gap-8 border-b border-border-default"
      >
        {intentGroups.map((group) => {
          const isActive = group.intent === currentIntent;
          return (
            <Link
              key={group.intent}
              href={`?intent=${group.intent}`}
              scroll={false}
              className={`inline-flex items-center gap-2.5 pb-3 font-sans text-xs tracking-[0.2em] uppercase transition-colors relative ${
                isActive
                  ? "border-b-2 border-ochre-500 text-text-primary font-semibold"
                  : "border-b-2 border-transparent text-text-secondary/70 hover:text-text-primary font-normal"
              }`}
            >
              <span
                className={`inline-block h-1.5 w-1.5 rotate-45 ${
                  isActive ? "bg-ochre-500" : "bg-text-secondary/30"
                }`}
                aria-hidden="true"
              />
              <span>{group.label}</span>
            </Link>
          );
        })}
      </nav>

      {/* Contenedor de la Pestaña Activa */}
      {selectedGroup && (
        <div className="relative border border-border-default bg-surface-secondary/70 p-6 sm:p-8 space-y-6">
          <div
            className="absolute top-0 left-0 w-12 h-[2px] bg-ochre-500"
            aria-hidden="true"
          />

          <div className="border-b border-border-default/60 pb-4">
            <h3 className="font-display text-xl font-normal text-text-primary tracking-tight">
              {selectedGroup.label}
            </h3>
            <p className="mt-1 font-sans text-xs sm:text-sm text-text-secondary font-light">
              {selectedGroup.description}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {selectedGroup.metrics.map((metric, idx) => {
              const isPositive =
                metric.trend.startsWith("+") ||
                (metric.name.toLowerCase().includes("rebote") &&
                  metric.trend.startsWith("-"));

              return (
                <div
                  key={idx}
                  className="border border-border-default bg-surface-page p-5 flex flex-col justify-between"
                >
                  <span className="font-sans text-[11px] uppercase tracking-[0.15em] text-text-secondary font-medium">
                    {metric.name}
                  </span>

                  <div className="mt-4 flex items-baseline justify-between gap-3">
                    <span className="font-display tabular-nums text-3xl font-normal text-text-primary">
                      {metric.value}
                    </span>
                    <div className="flex flex-col items-end">
                      <span
                        className={`font-mono text-xs font-semibold tabular-nums tracking-wider ${
                          isPositive ? "text-state-success" : "text-state-error"
                        }`}
                      >
                        {metric.trend}
                      </span>
                      <span className="font-mono text-[9px] text-text-secondary/70 tracking-tight">
                        {metric.comparisonPeriod || "vs. 28d previos"}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </section>
  );
}

export default IntentTabsSection;
