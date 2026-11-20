import React from "react";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/config/site.config";

export default function PortalLayout({
  children,
}: {
  readonly children: React.ReactNode;
}) {
  return (
    <div className="fixed inset-0 z-[100] flex flex-col overflow-y-auto bg-surface-page text-text-primary antialiased selection:bg-ochre-500 selection:text-white">
      {/* Cabecera Editorial y Soberana del Portal */}
      <header className="sticky top-0 z-50 border-b border-border-default bg-surface-page/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          {/* Identidad de Marca Adaro Viajes */}
          <div className="flex items-center gap-3">
            <Link
              href="/portal"
              className="flex items-center gap-3 transition-opacity hover:opacity-85"
            >
              {siteConfig.brand.logo.src ? (
                <Image
                  src={siteConfig.brand.logo.src}
                  alt={siteConfig.brand.logo.alt}
                  width={32}
                  height={32}
                  className="h-7 w-auto object-contain"
                  priority
                />
              ) : null}
              <div className="flex flex-col">
                <span className="font-display text-base font-normal tracking-tight text-text-primary">
                  {siteConfig.brand.name}
                </span>
                <span className="font-sans text-[9px] font-semibold uppercase tracking-[0.25em] text-ochre-500">
                  Dashboard Directivo WEB
                </span>
              </div>
            </Link>
          </div>

          {/* Estado de Sesión y Controles de Periodo */}
          <div className="flex items-center gap-3 sm:gap-6">
            {/* Indicador de Periodo */}
            <div className="hidden sm:inline-flex items-center gap-2 border border-border-default bg-surface-secondary/60 px-3 py-1.5 font-mono text-[10px] tracking-[0.15em] uppercase text-text-secondary">
              <span
                className="inline-block h-1 w-1 rotate-45 bg-ochre-500"
                aria-hidden="true"
              />
              <span>Periodo: Últimos 28 días</span>
            </div>


            {/* Salida / Ver Sitio Web Público */}
            <Link
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans text-[11px] font-medium tracking-[0.15em] uppercase text-text-secondary border-b border-border-default pb-0.5 transition-colors hover:border-ochre-500 hover:text-ochre-500"
              title="Abrir la web de expediciones en una nueva pestaña"
            >
              Ir al Sitio Web
            </Link>
          </div>
        </div>
      </header>

      {/* Contenedor Principal de Negocio */}
      <main className="flex-1">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 space-y-12">
          {children}
        </div>
      </main>

      {/* Pie de Página Editorial */}
      <footer className="border-t border-border-default py-8 text-xs text-text-secondary">
        <div className="mx-auto max-w-7xl px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span
              className="inline-block h-1 w-1 rotate-45 bg-ochre-500"
              aria-hidden="true"
            />
            <span className="font-sans tracking-wide">
              {siteConfig.brand.name } — Dashboard Directivo en base a datos de Google Analytics 4 en tiempo real y de forma privada.
            </span>
          </div>
          <span className="font-sans tracking-wide">
            © {new Date().getFullYear()}. Todos los derechos reservados.
          </span>
        </div>
      </footer>
    </div>
  );
}
