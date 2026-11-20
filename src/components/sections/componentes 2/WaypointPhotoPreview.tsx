import React from "react";
import Image from "next/image";
import type { RouteWaypointPhoto } from "@/types/cartography";

export type WaypointPhoto = RouteWaypointPhoto;

export const WAYPOINT_PHOTOS: RouteWaypointPhoto[] = [
  {
    id: "ss-jujuy",
    title: "San Salvador de Jujuy",
    subtitle: "Valle de partida · 1.259 msnm",
    src: "/excursiones/city-tour/DSC_6639-scaled.jpg",
  },
  {
    id: "purmamarca",
    title: "Purmamarca",
    subtitle: "Cerro de los Siete Colores · 2.324 msnm",
    src: "/excursiones/maimara-tilcara/Hill-Of-Seven-Colors-Purmamarca-Argentina_th-767x512.jpg",
  },
  {
    id: "cuesta-lipan",
    title: "Cuesta de Lipán",
    subtitle: "Paso de alta montaña · 4.170 msnm",
    src: "/excursiones/salinas/cuesta-de-lipan-mountain-road-2400x1400-f50_50.avif",
  },
  {
    id: "salinas-grandes",
    title: "Salinas Grandes",
    subtitle: "Altiplano de sal · 3.450 msnm",
    src: "/excursiones/salinas/salinas-hero.avif",
  },
];

export interface WaypointPhotoPreviewProps {
  className?: string;
  waypoints?: RouteWaypointPhoto[];
  photos?: RouteWaypointPhoto[];
}

export default function WaypointPhotoPreview({
  className = "",
  waypoints,
  photos,
}: WaypointPhotoPreviewProps) {
  const activeWaypoints = waypoints || photos || WAYPOINT_PHOTOS;

  return (
    <aside
      data-waypoint-preview
      aria-label="Visor fotográfico contextual de la ruta"
      className={`relative lg:absolute lg:right-8 xl:right-14 lg:bottom-8 z-20 lg:z-30 w-full max-w-xl sm:max-w-md lg:max-w-none lg:w-80 aspect-16/10 border border-white/15 bg-earth-950/80 backdrop-blur-md overflow-hidden p-1 rounded-none shadow-2xl select-none pointer-events-auto ${className}`}
    >
      <div className="relative w-full h-full overflow-hidden rounded-none bg-earth-950">
        {activeWaypoints.map((item, index) => (
          <div
            key={item.id}
            data-waypoint-photo={item.id}
            style={{ opacity: index === 0 ? 1 : 0 }}
            className="absolute inset-0 will-change-[opacity]"
          >
            <Image
              src={item.src}
              alt={item.alt || item.title}
              fill
              sizes="(max-width: 768px) 256px, 320px"
              className="object-cover transition-transform duration-700 hover:scale-105"
              priority={index === 0}
            />

            {/* Micro-distintivo superior dinámico */}
            <div className="absolute top-2 left-2 z-10">
              <span className="font-sans font-medium text-[9px] uppercase tracking-widest text-ochre-400 bg-earth-950/80 backdrop-blur-sm px-1.5 py-0.5 border border-white/10">
                ETAPA · {index + 1}/{activeWaypoints.length}
              </span>
            </div>

            {/* Pie de foto editorial superpuesto */}
            <div
              data-waypoint-caption
              className="absolute inset-x-0 bottom-0 z-10 bg-linear-to-t from-earth-950/95 via-earth-950/70 to-transparent p-3 pt-6"
            >
              <div className="font-display italic text-sm text-warm-50 leading-tight">
                {item.title}
              </div>
              <div className="font-sans text-[10px] text-ochre-400/90 tracking-wider mt-0.5">
                {item.subtitle}
              </div>
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
}
