import React from "react";
import Image from "next/image";
import Link from "next/link";
import ItinerariesKinematicWrapper from "@/components/animations/ItinerariesKinematicWrapper";
import { Button } from "@/components/ui/atoms/button";

export interface ItineraryItem {
  id: string;
  slug?: string;
  href?: string;
  title: string;
  subtitle?: string;
  description: string;
  image?: string;
  imageAlt?: string;
  duration?: string;
  modality?: string;
  seasonKey?: string;
}

const DEFAULT_ITEMS: ItineraryItem[] = [
  {
    id: "fase-1",
    title: "Sábado 1 — Recordar y Conectar",
    subtitle: "Apertura del Campo",
    description:
      "Un primer acercamiento al universo de los Registros Akáshicos y a la conexión con tu propia dimensión espiritual. Aprenderás el rol de los Guías y la preparación de tu espacio sagrado.",
    duration: "3.5 hs en vivo",
    modality: "Zoom + Grabación",
    seasonKey: "fase-1",
  },
  {
    id: "fase-2",
    title: "Sábado 2 — Escuchar y Calibrar",
    subtitle: "Apertura y Oración Sagrada",
    description:
      "Aprenderás a reconocer tu forma única de percibir, trascendiendo las dudas mentales. Incorporarás la oración sagrada y realizarás tu primera lectura personal de Registros.",
    duration: "3.5 hs en vivo",
    modality: "Zoom + Grabación",
    seasonKey: "fase-2",
  },
  {
    id: "fase-3",
    title: "Sábado 3 — Integrar y Sostener",
    subtitle: "Lectura Profunda y Rutina Diaria",
    description:
      "Profundización en la formulación de preguntas, canalización de respuestas y elaboración de tu Mapa de Práctica Espiritual para sostener el hábito en la vida cotidiana.",
    duration: "3.5 hs en vivo",
    modality: "Zoom + Grabación",
    seasonKey: "fase-3",
  },
];

export default function ItinerariesListing({
  id = "itineraries-listing",
  className = "",
  items = DEFAULT_ITEMS,
  sectionEyebrow = "El Recorrido",
  sectionTitle = "Las Etapas de la Iniciación",
  sectionDescription = "Tres semanas de inmersión progresiva diseñadas para que pases de la curiosidad teórica a la práctica autónoma de lectura de tus propios Registros.",
}: {
  id?: string;
  className?: string;
  items?: ItineraryItem[];
  sectionEyebrow?: string;
  sectionTitle?: string;
  sectionDescription?: string;
}) {
  return (
    <section
      id={id}
      aria-label="Listado de Etapas de la Iniciación"
      className={`relative w-full bg-surface-page py-16 lg:py-24 ${className}`}
    >
      {(sectionEyebrow || sectionTitle || sectionDescription) && (
        <div className="mx-auto mb-14 max-w-7xl px-6 md:px-12">
          {sectionEyebrow && (
            <span className="font-sans text-[11px] font-medium uppercase tracking-[0.25em] text-gold-600 block mb-2">
              {sectionEyebrow}
            </span>
          )}
          {sectionTitle && (
            <h2 className="max-w-3xl font-display italic text-3xl leading-tight text-text-primary md:text-5xl">
              {sectionTitle}
            </h2>
          )}
          {sectionDescription && (
            <p className="mt-4 max-w-2xl text-base md:text-lg leading-relaxed text-text-secondary">
              {sectionDescription}
            </p>
          )}
        </div>
      )}

      <div className="mx-auto w-full px-4 lg:px-12 max-w-7xl">
        <ItinerariesKinematicWrapper>
          <div className="flex flex-col gap-8 lg:gap-12 w-full">
            {items.map((item, index) => (
              <article
                key={item.id}
                data-itinerary-card
                data-season-key={item.seasonKey}
                className="relative w-full overflow-hidden border border-border-default bg-plum-950 text-gold-200 p-8 md:p-12 shadow-xl"
              >
                {item.image && (
                  <div className="absolute inset-0 w-full h-full">
                    <Image
                      src={item.image}
                      alt={item.imageAlt || item.title}
                      fill
                      priority={index === 0}
                      sizes="(max-width: 1024px) 100vw, 85vw"
                      className="object-cover object-center opacity-25"
                    />
                  </div>
                )}

                <div className="relative z-10 flex flex-col justify-between min-h-[300px]">
                  <div>
                    <div className="flex flex-wrap items-center gap-3 font-sans text-xs uppercase tracking-[0.2em] text-gold-400 mb-4">
                      {item.duration && <span>{item.duration}</span>}
                      {item.duration && item.modality && <span className="opacity-40">|</span>}
                      {item.modality && <span>{item.modality}</span>}
                    </div>

                    <h3 className="font-display italic text-2xl sm:text-4xl lg:text-5xl text-gold-200 leading-tight mb-4">
                      {item.title}
                    </h3>

                    {item.subtitle && (
                      <p className="font-sans text-xs uppercase tracking-widest text-gold-300 font-semibold mb-4">
                        {item.subtitle}
                      </p>
                    )}

                    <p className="font-body text-sm sm:text-base text-gold-200/80 leading-relaxed max-w-3xl font-light">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-8">
                    <Link href="#inscripcion" tabIndex={-1}>
                      <Button
                        variant="outline"
                        size="default"
                        className="border-gold-400 text-gold-200 hover:bg-gold-500 hover:text-plum-950 uppercase tracking-widest text-xs px-6 py-3 cursor-pointer"
                      >
                        <span>Más detalles</span>
                        <span aria-hidden="true">→</span>
                      </Button>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </ItinerariesKinematicWrapper>
      </div>
    </section>
  );
}
