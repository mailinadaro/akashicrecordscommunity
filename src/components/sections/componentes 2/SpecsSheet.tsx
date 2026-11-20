import React from "react";
import type { SpecItem } from "@/types/cartography";

export type { SpecItem };

export const DEFAULT_EXPEDITION_SPECS: SpecItem[] = [
  { id: "duracion", label: "Duración", value: "9,5 – 10 horas" },
  { id: "recorrido", label: "Salida y regreso", value: "San Salvador de Jujuy" },
  { id: "modalidad", label: "Modalidad", value: "Excursión privada" },
  { id: "pasajeros", label: "Pasajeros", value: "Hasta 4 personas" },
  {
    id: "altitud",
    label: "Altitud actual",
    value: "1.259 m",
    isDynamicAltitude: true,
  },
  { id: "km", label: "Km Recorridos", value: "260 km" },
  { id: "horario", label: "Horario Excursión", value: "08:00 – 18:00 hs" },
];

export interface SpecsSheetProps {
  className?: string;
  items?: SpecItem[];
  specs?: SpecItem[];
  altitude?: string | number;
}

export default function SpecsSheet({
  className = "",
  items,
  specs,
  altitude,
}: SpecsSheetProps) {
  const baseItems = specs || items || DEFAULT_EXPEDITION_SPECS;

  const resolvedItems = baseItems.map((item) => {
    if (item.isDynamicAltitude && altitude !== undefined) {
      return {
        ...item,
        value:
          typeof altitude === "number"
            ? `${altitude.toLocaleString("es-AR")} m`
            : altitude,
      };
    }
    return item;
  });

  return (
    <aside
      data-specs-hud
      aria-label="Ficha técnica de expedición"
      className={`relative lg:absolute lg:left-8 xl:left-12 lg:inset-y-0 lg:my-auto h-fit z-20 lg:z-30 w-full max-w-xl lg:max-w-none lg:w-[440px] bg-earth-900/1 backdrop-blur-2xl border border-white/15 p-6 lg:p-8 rounded-none shadow-2xl select-none pointer-events-auto ${className}`}
    >
      <dl className="flex flex-col">
        {resolvedItems.map((item) => (
          <div
            key={item.id}
            className="border-b border-white/10 pb-4 mb-2.5 last:border-0 last:pb-0 last:mb-0"
          >
            {item.isDynamicAltitude ? (
              <>
                <dt className="font-display italic text-[11px] lg:text-xs tracking-wider uppercase text-warm-50/60 font-light block leading-normal">
                  {item.label}
                </dt>
                <dd
                  data-altitude-value
                  className="font-sans tabular-nums text-xl lg:text-3xl font-medium tracking-tight text-surface-action-hover"
                >
                  {item.value}
                </dd>
              </>
            ) : (
              <>
                <dt className="font-display italic text-[11px] lg:text-xs tracking-wider uppercase text-warm-50/60 font-light block leading-normal">
                  {item.label}
                </dt>
                <dd className="font-sans text-sm lg:text-xl text-warm-50 font-normal leading-snug tracking-normal">
                  {item.value}
                </dd>
              </>
            )}
          </div>
        ))}
      </dl>
    </aside>
  );
}
