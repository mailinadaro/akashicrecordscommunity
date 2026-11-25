import React from "react";
import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { getCachedPortalMetrics } from "@/lib/analytics/ga4";
import ExecutiveSummarySection from "@/components/sections/portal/ExecutiveSummarySection";
import ValueTranslatorSection from "@/components/sections/portal/ValueTranslatorSection";
import IntentTabsSection from "@/components/sections/portal/IntentTabsSection";
import ActionableNextStepsSection from "@/components/sections/portal/ActionableNextStepsSection";

export const metadata: Metadata = buildPageMetadata({
  title: "Dashboard Directivo WEB | Iniciación Akáshica",
  absoluteTitle: true,
  description:
    "Storytelling de métricas de negocio, salud comercial y toma de decisiones tácticas para el negocio.",
  path: "/portal",
  noIndex: true,
});

interface PortalPageProps {
  readonly searchParams: Promise<{ intent?: string }>;
}

/**
 * PortalPage (100% Server Component)
 * Orquestador principal del Centro de Mando Directivo.
 * Consume métricas cacheadas de GA4 en servidor (unstable_cache 15m)
 * y distribuye los contratos de dominio a las secciones narrativas.
 */
export default async function PortalPage({ searchParams }: PortalPageProps) {
  // En Next.js 16, searchParams es una Promesa asíncrona que debe resolverse
  const resolvedParams = await searchParams;
  const currentIntent = resolvedParams?.intent;

  const data = await getCachedPortalMetrics();
  const isDemo = data.dataSource === "synthetic_demo" || data.isDemoFallback;

  return (
    <div className="space-y-12">
      {/* Banner Informativo de Transparencia de Fuente */}
      {isDemo ? (
        <aside
          role="status"
          className="border-l-2 border-ochre-500 bg-surface-tertiary/60 p-4 flex items-start gap-3"
        >
          <span
            className="mt-1.5 shrink-0 inline-block w-1.5 h-1.5 bg-ochre-500 rotate-45"
            aria-hidden="true"
          />
          <div className="space-y-0.5">
            <p className="font-sans text-xs text-text-primary leading-relaxed font-light">
              <span className="font-semibold text-ochre-500 uppercase tracking-wider font-mono text-[10px]">
                Modo Demostración Directiva:
              </span>{" "}
              Visualizando modelo de datos sintético estructurado de referencia hasta registrar tráfico en la propiedad de Google Analytics 4 (Propiedad: {data.propertyId || "560524900"}).
            </p>
            <p className="font-mono text-[10px] text-text-secondary">
              Marco de referencia comparativo: {data.comparisonLabel} · Sincronizado a las {data.lastSyncedAt}.
            </p>
          </div>
        </aside>
      ) : (
        <aside
          role="status"
          className="border-l-2 border-state-success bg-surface-tertiary/60 p-4 flex items-start gap-3"
        >
          <span
            className="mt-1.5 shrink-0 inline-block w-1.5 h-1.5 bg-state-success rounded-full animate-pulse"
            aria-hidden="true"
          />
          <div className="space-y-0.5">
            <p className="font-sans text-xs text-text-primary leading-relaxed font-light">
              <span className="font-semibold text-state-success uppercase tracking-wider font-mono text-[10px]">
                Telemetría en Vivo Conectada:
              </span>{" "}
              Datos extraídos en tiempo real vía Google Analytics Data API (Propiedad ID: {data.propertyId || "560524900"}).
            </p>
            <p className="font-mono text-[10px] text-text-secondary">
              Marco comparativo activo: {data.comparisonLabel} · Caché en servidor: 15 minutos (última sync: {data.lastSyncedAt}).
            </p>
          </div>
        </aside>
      )}

      {/* 1. Diagnóstico Ejecutivo "The So What?" y Semáforo de Salud */}
      <ExecutiveSummarySection
        summary={data.summary}
        health={data.health}
        dataSource={data.dataSource}
        propertyId={data.propertyId}
        lastSyncedAt={data.lastSyncedAt}
      />

      {/* 2. Traductor de Métricas a Valor Comercial y Pipeline */}
      <ValueTranslatorSection metrics={data.valueTranslation} />

      {/* 3. Pestañas de Métricas por Intención Comercial (RSC URL SearchParams) */}
      <IntentTabsSection
        intentGroups={data.intentGroups}
        activeIntent={currentIntent}
      />

      {/* 4. Panel de Próximos Pasos Tácticos y Operativos */}
      <ActionableNextStepsSection steps={data.nextSteps} />
    </div>
  );
}
