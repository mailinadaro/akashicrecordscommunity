import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/atoms/button";
import OtherTripsGridWrapper from "@/components/animations/OtherTripsGridWrapper";
import { siteConfig } from "@/config/site.config";

export interface OtherTripItem {
  id: string;
  badge?: string;
  subtitle?: string;
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
    id: "entre-dos-ciclos",
    badge: " 12 DE DICIEMBRE  | · 10 a 12 hs (México)",
    subtitle: "Encuentro Online Gratuito",
    title: "Entre Dos Ciclos",
    summary:
      "Un regalo para nuestra comunidad: meditación para integrar el 2026, panorama astrológico del 2027 y canalización para el nuevo ciclo.",
    href: siteConfig.contact.whatsapp,
    image: "/otras%20experiencias/otrasExperienciasEntreCiclos.jpg",
    imageAlt: "Entre Dos Ciclos - Encuentro Online Gratuito",
  },
  {
    id: "cierre-de-ano",
    badge: "20 DE DICIEMBRE | · 10 a 17 hs (México)",
    subtitle: "Encuentro Presencial en Tepoztlán",
    title: "Cierre de Año en Comunidad",
    summary:
      "¡Un día para soltar, descansar y renovarnos juntos! Limpieza energética, meditación, Registros Akáshicos y visualización del 2027.",
    href: siteConfig.contact.whatsapp,
    image: "/otras%20experiencias/otrasExperienciasCierre.jpg",
    imageAlt: "Cierre de Año en Comunidad en Tepoztlán",
  },
  {
    id: "sesiones-individuales",
    badge: "Últimas del año",
    subtitle: "Lecturas de Registros Akáshicos",
    title: "Sesiones Individuales",
    summary:
      "Una oportunidad para comprender lo que estás atravesando, integrar tus aprendizajes y recibir claridad para las decisiones y caminos que vienen.",
    href: siteConfig.contact.whatsapp,
    image: "/otras%20experiencias/otrasExperienciasLecturasSesiones.jpg",
    imageAlt: "Lecturas Individuales de Registros Akáshicos",
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
        <div
          className={`grid grid-cols-1 ${
            trips.length === 3 ? "md:grid-cols-3" : "md:grid-cols-2 lg:grid-cols-4"
          } gap-4 overflow-hidden w-full shadow-2xl`}
        >
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
                {...(trip.href.startsWith("http")
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
              />

              {trip.image && (
                <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
                  <Image
                    src={trip.image}
                    alt={trip.imageAlt || trip.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-100 opacity-60"
                  />
                </div>
              )}

              <div
                className="trip-card-overlay absolute inset-0 bg-linear-to-b from-plum-950/40 via-plum-900/60 to-plum-950 pointer-events-none z-10"
                aria-hidden="true"
              />

              <div className="trip-card-content absolute inset-0 p-8 flex flex-col items-center justify-center text-center z-20 pointer-events-none">
                {trip.badge && (
                  <span className="mb-3 block text-[10px] font-sans font-semibold uppercase tracking-[0.18em] text-gold-400 drop-shadow-sm">
                    {trip.badge}
                  </span>
                )}

                {trip.subtitle && (
                  <p className="mb-4 text-xs font-body uppercase tracking-[0.12em] text-gold-200/80 drop-shadow-sm">
                    {trip.subtitle}
                  </p>
                )}

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
