import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/atoms/button";
import OtherTripsGridWrapper from "@/components/animations/OtherTripsGridWrapper";

export interface OtherTripItem {
  id: string;
  title: string;
  summary: string;
  href: string;
  image: string;
  imageAlt?: string;
}

export interface OtherTripsGridProps {
  trips: OtherTripItem[];
  className?: string;
}

export default function OtherTripsGrid({
  trips,
  className = "",
}: OtherTripsGridProps) {
  if (!trips || trips.length === 0) {
    return null;
  }

  return (
    <div
      className={`w-full bg-earth-900 px-6 md:px-12 lg:px-17 py-38 md:py-85 ${className}`}
    >
      <style>{`
        .trip-card .trip-card-overlay,
        .trip-card .trip-card-content {
          transition: opacity 0.35s ease-out, transform 0.35s ease-out;
        }
        @media (min-width: 1024px) {
          .trip-card .trip-card-overlay,
          .trip-card .trip-card-content {
            opacity: 0;
          }
          .trip-card:hover .trip-card-overlay,
          .trip-card:hover .trip-card-content {
            opacity: 1 !important;
          }
        }
        @media (max-width: 1023px) {
          .trip-card .trip-card-overlay,
          .trip-card .trip-card-content {
            opacity: 1 !important;
          }
        }
      `}</style>

      <OtherTripsGridWrapper>
        {/* Riel contiguo de 4 tarjetas con gap-0 en bloque enmarcado rounded-md */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 overflow-hidden w-full shadow-2xl">
          {trips.map((trip) => (
            <article
              key={trip.id}
              data-trip-card
              className="trip-card group relative block w-full h-[65vh] lg:h-[72vh] overflow-hidden bg-earth-900 focus-within:ring-2 focus-within:ring-ochre-500"
            >
              {/* Enlace accesible que cubre toda la tarjeta */}
              <Link
                href={trip.href}
                className="absolute inset-0 z-30"
                aria-label={`Explorar expedición ${trip.title}`}
              />

              {/* Medio visual de fondo */}
              <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
                <Image
                  src={trip.image}
                  alt={trip.imageAlt || trip.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>

              {/* Overlay oscuro total (bg-black/75 en hover) */}
              <div
                className="trip-card-overlay absolute inset-0 bg-black/60 lg:bg-black/75 pointer-events-none z-10"
                aria-hidden="true"
              />

              {/* Contenido textual rigurosamente CENTRADO VERTICAL Y HORIZONTALMENTE */}
              <div className="trip-card-content absolute inset-0 p-8 flex flex-col items-center justify-center text-center z-20 pointer-events-none">
                <h3 className="font-serif uppercase text-xl lg:text-2xl text-warm-50 tracking-wider mb-4 leading-snug drop-shadow-sm">
                  {trip.title}
                </h3>

                <p className="text-xs lg:text-sm text-warm-50/85 font-light max-w-[28ch] mb-6 leading-relaxed">
                  {trip.summary}
                </p>

                {/* Componente UI Oficial: Button variant="glass" */}
                <div>
                  <Button
                    variant="glass"
                    size="default"
                    className="pointer-events-none px-6 py-2.5 text-xs font-medium tracking-widest uppercase h-auto shadow-lg"
                  >
                    <span>Descubrir</span>
                    <span
                      className="transform transition-transform duration-300 group-hover:translate-x-1"
                      aria-hidden="true"
                    >
                      →
                    </span>
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </OtherTripsGridWrapper>
    </div>
  );
}