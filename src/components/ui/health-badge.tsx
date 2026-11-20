import React from "react";
import type { BusinessHealthLevel } from "@/types/portal";

interface HealthBadgeProps {
  readonly status: BusinessHealthLevel;
  readonly score?: number;
  readonly className?: string;
}

const statusConfig: Record<
  BusinessHealthLevel,
  {
    readonly label: string;
    readonly containerClass: string;
    readonly dotClass: string;
  }
> = {
  healthy: {
    label: "SALUD COMERCIAL: ÓPTIMA",
    containerClass:
      "border-state-success/30 bg-state-success/10 text-state-success",
    dotClass: "bg-state-success",
  },
  attention: {
    label: "SALUD COMERCIAL: EN OBSERVACIÓN",
    containerClass:
      "border-ochre-500/30 bg-ochre-500/10 text-ochre-500",
    dotClass: "bg-ochre-500",
  },
  critical: {
    label: "SALUD COMERCIAL: ATENCIÓN REQUERIDA",
    containerClass:
      "border-state-error/30 bg-state-error/10 text-state-error",
    dotClass: "bg-state-error",
  },
};

/**
 * HealthBadge (100% Server Component)
 * Átomo visual de semáforo de negocio con estética editorial y tokens de Adaro Viajes.
 */
export function HealthBadge({ status, score, className = "" }: HealthBadgeProps) {
  const config = statusConfig[status] || statusConfig.healthy;

  return (
    <div
      className={`inline-flex items-center gap-2.5 border px-3 py-1.5 font-mono text-[10px] tracking-[0.15em] uppercase font-medium transition-colors ${config.containerClass} ${className}`}
    >
      <span className="relative flex h-2 w-2 items-center justify-center">
        <span
          className={`absolute inline-flex h-full w-full animate-ping opacity-75 ${config.dotClass}`}
        />
        <span
          className={`relative inline-block h-1.5 w-1.5 rotate-45 ${config.dotClass}`}
        />
      </span>
      <span>{config.label}</span>
      {typeof score === "number" && (
        <span className="border-l border-current/30 pl-2 font-mono font-semibold tabular-nums">
          {score}/100
        </span>
      )}
    </div>
  );
}

export default HealthBadge;
