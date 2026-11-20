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
    badge: "🌟 12 de Diciembre · Online Gratuito",
    subtitle: "10 a 12 h (México)",
    title: "Entre Dos Ciclos",
    summary:
      "Un regalo para nuestra comunidad: meditación para integrar el 2026, panorama astrológico del 2027 y canalización para el nuevo ciclo.",
    href: siteConfig.contact.whatsapp,
    image: "/otras%20experiencias/otrasExperienciasEntreCiclos.jpg",
    imageAlt: "Entre Dos Ciclos - Encuentro Online Gratuito",
  },
  {
    id: "cierre-de-ano",
    badge: "🌿 20 de Diciembre · Presencial",
    subtitle: "Tepoztlán · 10 a 17 hrs",
    title: "Cierre de Año en Comunidad",
    summary:
      "¡Un día para soltar, descansar y renovarnos juntos! Limpieza energética, meditación, Registros Akáshicos y visualización del 2027.",
    href: siteConfig.contact.whatsapp,
    image: "/otras%20experiencias/otrasExperienciasCierre.jpg",
    imageAlt: "Cierre de Año en Comunidad en Tepoztlán",
  },
  {
    id: "sesiones-individuales",
    badge: "🔮 Sesiones Personalizadas",
    subtitle: "Espacios Limitados de Diciembre",
    title: "Últimas Sesiones Individuales",
    summary:
      "Abrimos espacios para lecturas de Registros Akáshicos. Una oportunidad para comprender lo que estás atravesando, integrar tus aprendizajes y recibir claridad para las decisiones y caminos que vienen.",
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
    <div className={`w-full bg-plum-950 px-6 md:px-12 lg:px-16 py-24 md:py-32 ${className}`}>
      <OtherTripsGridWrapper>
        <div
          className={`grid grid-cols-1 ${
            trips.length === 3 ? "md:grid-cols-3" : "md:grid-cols-2 lg:grid-cols-4"
          } gap-6 overflow-hidden w-full`}
        >
          {trips.map((trip) => (
            <article
              key={trip.id}
              data-trip-card
              className="trip-card group relative block w-full h-[60vh] lg:h-[70vh] overflow-hidden bg-plum-900 border border-gold-400/20 hover:border-gold-400 transition-colors duration-300"
            >
              <Link
                href={trip.href}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 z-30"
                aria-label={`Ver ${trip.title}`}
              />

              {trip.image && (
                <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
                  <Image
                    src={trip.image}
                    alt={trip.imageAlt || trip.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-all duration-700 ease-out group-hover:scale-105 opacity-35 group-hover:opacity-55"
                  />
                </div>
              )}

              <div className="absolute inset-0 bg-linear-to-b from-plum-950/80 via-plum-900/60 to-plum-950 z-10 pointer-events-none" />

              <div className="trip-card-content absolute inset-0 p-6 sm:p-8 flex flex-col justify-between text-center z-20 pointer-events-none">
                {/* Header: Badge & Subtitle */}
                <div className="flex flex-col items-center">
                  {trip.badge && (
                    <span className="font-sans text-[11px] uppercase tracking-[0.2em] text-gold-300 font-semibold mb-1.5 bg-plum-950/85 px-3 py-1 border border-gold-400/30">
                      {trip.badge}
                    </span>
                  )}
                  {trip.subtitle && (
                    <span className="font-sans text-[10px] uppercase tracking-widest text-gold-200/70">
                      {trip.subtitle}
                    </span>
                  )}
                </div>

                {/* Body: Title & Summary */}
                <div className="my-auto py-4">
                  <h3 className="font-display italic text-2xl lg:text-3xl text-gold-200 mb-3 leading-snug drop-shadow-sm">
                    {trip.title}
                  </h3>

                  <p className="font-body text-xs sm:text-sm text-gold-100/90 font-light max-w-[34ch] mx-auto leading-relaxed">
                    {trip.summary}
                  </p>
                </div>

                {/* Footer: Action button */}
                <div>
                  <Button
                    variant="outline"
                    size="default"
                    className="pointer-events-none px-6 py-2.5 text-xs font-sans tracking-widest uppercase border-gold-400 text-gold-200 bg-plum-950/60 group-hover:bg-gold-500 group-hover:text-plum-950 transition-colors duration-300"
                  >
                    <span>Consultar por WhatsApp</span>
                    <span aria-hidden="true">→</span>
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
