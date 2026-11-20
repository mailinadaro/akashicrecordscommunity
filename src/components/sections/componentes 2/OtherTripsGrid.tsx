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
  image?: string;
  imageAlt?: string;
}

export interface OtherTripsGridProps {
  trips?: OtherTripItem[];
  className?: string;
}

const DEFAULT_TRIPS: OtherTripItem[] = [
  {
    id: "trip-1",
    title: "El ABC Akáshico",
    summary: "Manual integral de 22 páginas con fundamentos, oraciones y decretos de sellado.",
    href: "#inscripcion",
  },
  {
    id: "trip-2",
    title: "Bitácora de 21 Días",
    summary: "Cuaderno de ejercicios progresivos diarios para consolidar tu discernimiento.",
    href: "#inscripcion",
  },
  {
    id: "trip-3",
    title: "Meditaciones en Audio",
    summary: "Sintonización matutina, encuentro con tus Guías y frecuencia de sellado ANAHIÚ.",
    href: "#inscripcion",
  },
  {
    id: "trip-4",
    title: "Comunidad Circle",
    summary: "Espacio privado para compartir lecturas, resolver dudas y acompañar el proceso.",
    href: "#inscripcion",
  },
];

export default function OtherTripsGrid({
  trips = DEFAULT_TRIPS,
  className = "",
}: OtherTripsGridProps) {
  if (!trips || trips.length === 0) {
    return null;
  }

  return (
    <div
      className={`w-full bg-plum-950 px-6 md:px-12 lg:px-16 py-24 md:py-32 ${className}`}
    >
      <OtherTripsGridWrapper>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 overflow-hidden w-full shadow-2xl">
          {trips.map((trip) => (
            <article
              key={trip.id}
              data-trip-card
              className="trip-card group relative block w-full h-[55vh] lg:h-[65vh] overflow-hidden bg-plum-900 border border-gold-400/20 hover:border-gold-400 transition-colors duration-300"
            >
              <Link
                href={trip.href}
                className="absolute inset-0 z-30"
                aria-label={`Ver ${trip.title}`}
              />

              {trip.image && (
                <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
                  <Image
                    src={trip.image}
                    alt={trip.imageAlt || trip.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 opacity-30"
                  />
                </div>
              )}

              <div
                className="trip-card-overlay absolute inset-0 bg-linear-to-b from-plum-950/40 via-plum-900/60 to-plum-950 pointer-events-none z-10"
                aria-hidden="true"
              />

              <div className="trip-card-content absolute inset-0 p-8 flex flex-col items-center justify-center text-center z-20 pointer-events-none">
                <span className="w-1.5 h-1.5 bg-gold-400 rotate-45 block mb-4" aria-hidden="true" />

                <h3 className="font-display italic text-2xl lg:text-3xl text-gold-200 mb-4 leading-snug drop-shadow-sm">
                  {trip.title}
                </h3>

                <p className="font-body text-xs lg:text-sm text-gold-200/80 font-light max-w-[28ch] mb-6 leading-relaxed">
                  {trip.summary}
                </p>

                <div>
                  <Button
                    variant="glass"
                    size="default"
                    className="pointer-events-none px-6 py-2.5 text-xs font-sans tracking-widest uppercase border border-gold-400/40 text-gold-200 bg-plum-950/50"
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
