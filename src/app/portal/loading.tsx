import React from "react";

/**
 * PortalLoading (Skeleton Cinemático Editorial)
 * Estado de carga que replica fielmente la composición del Centro de Mando
 * con los tonos tierra y calidez de Adaro Viajes.
 */
export default function PortalLoading() {
  return (
    <div
      aria-label="Cargando Centro de Mando Directivo"
      className="space-y-12 animate-pulse"
    >
      {/* Banner Skeleton */}
      <div className="h-12 w-full border-l-2 border-border-default bg-surface-secondary/60" />

      {/* Executive Summary Skeleton */}
      <div className="border border-border-default bg-surface-secondary/60 p-6 sm:p-8 lg:p-10 space-y-8">
        <div className="flex items-center justify-between border-b border-border-default pb-6">
          <div className="h-4 w-48 bg-surface-tertiary" />
          <div className="h-6 w-36 bg-surface-tertiary" />
        </div>
        <div className="space-y-3">
          <div className="h-3 w-32 bg-surface-tertiary/70" />
          <div className="h-8 w-3/4 bg-surface-tertiary" />
          <div className="h-5 w-full bg-surface-tertiary/70" />
          <div className="h-5 w-5/6 bg-surface-tertiary/70" />
        </div>
        <div className="h-20 w-full border-l-2 border-border-default bg-surface-tertiary/40" />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-6 border-t border-border-default">
          <div className="h-28 bg-surface-tertiary/40" />
          <div className="h-28 bg-surface-tertiary/40" />
        </div>
      </div>

      {/* Value Translator Skeleton */}
      <div className="space-y-6">
        <div className="h-6 w-56 bg-surface-tertiary" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="h-44 border border-border-default bg-surface-secondary/60" />
          <div className="h-44 border border-border-default bg-surface-secondary/60" />
          <div className="h-44 border border-border-default bg-surface-secondary/60" />
        </div>
      </div>

      {/* Intent Tabs Skeleton */}
      <div className="space-y-6">
        <div className="h-8 w-80 bg-surface-secondary/80 border-b border-border-default" />
        <div className="h-52 border border-border-default bg-surface-secondary/50" />
      </div>

      {/* Next Steps Skeleton */}
      <div className="space-y-6">
        <div className="h-6 w-48 bg-surface-tertiary" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="h-56 border border-border-default bg-surface-secondary/60" />
          <div className="h-56 border border-border-default bg-surface-secondary/60" />
          <div className="h-56 border border-border-default bg-surface-secondary/60" />
        </div>
      </div>
    </div>
  );
}
