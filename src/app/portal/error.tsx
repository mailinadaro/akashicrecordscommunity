'use client';

import React, { useEffect } from "react";
import Link from "next/link";

interface PortalErrorProps {
  readonly error: Error & { digest?: string };
  readonly reset: () => void;
}

/**
 * PortalError (Client Component)
 * Error boundary del Centro de Mando Directivo con diseño editorial de Adaro Viajes.
 */
export default function PortalError({ error, reset }: PortalErrorProps) {
  useEffect(() => {
    console.error("[Portal Error Boundary]:", error);
  }, [error]);

  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center p-6 text-center">
      <div className="relative w-full max-w-lg border border-border-default bg-surface-secondary/80 p-8 sm:p-10">
        {/* Acento lineal mineral */}
        <div
          className="absolute top-0 left-0 w-16 h-[2px] bg-state-error"
          aria-hidden="true"
        />

        <div className="flex items-center justify-center gap-2 mb-4">
          <span
            className="inline-block h-2 w-2 rotate-45 bg-state-error"
            aria-hidden="true"
          />
          <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-state-error font-semibold">
            Interrupción de Telemetría
          </span>
        </div>

        <h2 className="font-display text-2xl font-normal text-text-primary tracking-tight">
          Error al Cargar Métricas Directivas
        </h2>

        <p className="mt-3 font-sans text-xs sm:text-sm text-text-secondary leading-relaxed font-light">
          {error.message ||
            "Ocurrió un problema de conectividad o formato al consultar la capa de datos de Google Analytics."}
        </p>

        {error.digest && (
          <p className="mt-3 font-mono text-[10px] text-text-secondary/60">
            ID de Referencia: {error.digest}
          </p>
        )}

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            type="button"
            onClick={() => reset()}
            className="w-full sm:w-auto bg-surface-action text-text-on-action px-6 py-2.5 font-sans text-xs uppercase tracking-[0.15em] font-medium transition-colors hover:bg-surface-action-hover"
          >
            Reintentar Conexión
          </button>

          <Link
            href="/"
            className="w-full sm:w-auto border border-border-default bg-surface-page px-6 py-2.5 font-sans text-xs uppercase tracking-[0.15em] font-medium text-text-primary transition-colors hover:border-ochre-500 hover:text-ochre-500"
          >
            Volver a la Web
          </Link>
        </div>
      </div>
    </div>
  );
}
