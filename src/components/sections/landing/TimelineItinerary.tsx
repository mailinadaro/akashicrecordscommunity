import React from "react";
import Image, { StaticImageData } from "next/image";
import { TimelineItineraryCinematicWrapper } from "@/components/animations/TimelineItineraryCinematicWrapper";

export interface ItineraryStep {
  dayNumber: string | number;
  title: string;
  description: string;
  image?: string | StaticImageData;
  imageAlt?: string;
}

interface TimelineItineraryProps {
  heading?: string;
  subheading?: string;
  noteTitle?: string;
  noteText?: string;
  steps?: ItineraryStep[];
}

const DEFAULT_STEPS: ItineraryStep[] = [
  {
    dayNumber: "01",
    title: "Sábado 1 — Recordar y Conectar",
    description:
      "Comprensión del campo akáshico, autonomía espiritual, meditación guiada de conexión con tus Maestros y Guías, y consagración de tu espacio sagrado y altar.",
  },
  {
    dayNumber: "02",
    title: "Sábado 2 — Escuchar y Calibrar",
    description:
      "Trabajo sobre resistencias y dudas de la mente, oración sagrada de apertura y cierre, sintonización con el mantra ANAHIÚ y tu primera lectura personal guiada.",
  },
  {
    dayNumber: "03",
    title: "Sábado 3 — Integrar y Sostener",
    description:
      "Formulación de preguntas profundas, interpretación y bajada a la vida diaria, lectura personal completa y diseño de tu Mapa de Práctica Espiritual.",
  },
];

export default function TimelineItinerary({
  heading = "Las Tres Jornadas en Vivo",
  subheading = "Formación vivencial por Zoom · Sábados 16, 23 y 30 de Enero",
  noteTitle = "10.5 Horas de Práctica y Acompañamiento",
  noteText = "Cada encuentro dura 3 horas y media. Si no puedes asistir en vivo, todas las clases quedan grabadas en la plataforma Circle con acceso durante 3 meses.",
  steps = DEFAULT_STEPS,
}: TimelineItineraryProps) {
  if (!steps || steps.length === 0) return null;

  return (
    <TimelineItineraryCinematicWrapper>
      <section
        id="itinerario"
        data-itinerary-section
        className="w-full bg-plum-950 text-gold-200 relative selection:bg-gold-500 selection:text-plum-950"
      >
        <div
          data-itinerary-layout
          style={{ height: `calc(75svh * ${steps.length})` }}
          className="w-full grid grid-cols-1 lg:grid-cols-12 relative"
        >
          {/* Pilar 1: Columna Lateral Sticky en Desktop */}
          <aside className="lg:col-span-4 p-8 lg:p-12 lg:sticky lg:top-0 lg:h-screen flex flex-col justify-between z-20">
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display italic tracking-tight text-gold-200 leading-[1.15]">
                {heading}
              </h2>
              {subheading && (
                <p className="mt-4 text-xs uppercase tracking-widest font-sans font-medium text-gold-400">
                  {subheading}
                </p>
              )}
            </div>

            {(noteTitle || noteText) && (
              <div className="mt-10 lg:mt-0 pt-8 border-t border-gold-400/20">
                {noteTitle && (
                  <h4 className="text-sm font-display italic text-gold-200 mb-2">
                    {noteTitle}
                  </h4>
                )}
                {noteText && (
                  <p className="text-xs sm:text-sm text-gold-200/70 leading-relaxed font-light font-body">
                    {noteText}
                  </p>
                )}
              </div>
            )}
          </aside>

          {/* Pilar 2: Marco Unificado Sticky en Desktop */}
          <div className="lg:col-span-8 lg:sticky lg:top-0 lg:h-screen flex items-center z-10">
            <div
              data-itinerary-frame
              className="w-full overflow-hidden flex flex-col lg:flex-row lg:h-screen relative"
            >
              {/* Sub-columna 1: Riel de Narrativa de Texto */}
              <div
                data-itinerary-text-column
                className="w-full lg:w-1/2 h-auto lg:h-full relative overflow-hidden flex flex-col"
              >
                <div
                  data-itinerary-track
                  className="m-2 w-full flex flex-col gap-2"
                >
                  {steps.map((step, idx) => {
                    const formattedDay = String(step.dayNumber).padStart(2, "0");

                    return (
                      <article
                        key={`step-${step.dayNumber}-${idx}`}
                        data-itinerary-item={idx}
                        className="w-full p-6 sm:p-8 lg:p-10 flex flex-col justify-center min-h-auto lg:min-h-[39vh] relative bg-plum-950/80 border border-gold-400/10"
                      >
                        <span
                          data-step-number
                          className="text-4xl lg:text-6xl font-display italic select-none block mb-3 tracking-tight text-gold-500"
                        >
                          {formattedDay}
                        </span>

                        <h3 className="text-lg lg:text-xl font-display italic text-gold-200 pb-2 leading-snug">
                          {step.title}
                        </h3>

                        <p className="text-xs sm:text-sm text-gold-200/70 font-light leading-relaxed max-w-[45ch] font-body">
                          {step.description}
                        </p>
                      </article>
                    );
                  })}
                </div>
              </div>

              {/* Sub-columna 2: Stack de Panel Visual */}
              <div
                data-itinerary-media-column
                className="lg:block lg:w-1/2 h-full relative overflow-hidden bg-plum-950"
              >
                {steps.map((step, idx) => {
                  return (
                    <div
                      key={`media-${step.dayNumber}-${idx}`}
                      data-media-card={idx}
                      className="absolute inset-0 w-full h-full overflow-hidden flex items-center justify-center p-8 bg-linear-to-br from-plum-950 via-plum-900 to-plum-950 border-l border-gold-400/10"
                      style={{ clipPath: "inset(0% 0px)" }}
                    >
                      {step.image ? (
                        <Image
                          src={step.image}
                          alt={step.imageAlt || step.title}
                          fill
                          sizes="(min-width: 1024px) 38vw, 100vw"
                          priority={idx === 0}
                          className="object-cover"
                        />
                      ) : (
                        <div className="flex flex-col items-center justify-center text-center p-8 border border-gold-400/20 max-w-sm">
                          <span className="font-display italic text-5xl text-gold-400/40 mb-4">
                            {String(step.dayNumber).padStart(2, "0")}
                          </span>
                          <p className="font-display italic text-xl text-gold-200 leading-snug">
                            {step.title}
                          </p>
                        </div>
                      )}
                      <div
                        data-media-overlay
                        className="absolute inset-0 bg-plum-950/60 pointer-events-none opacity-0"
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </TimelineItineraryCinematicWrapper>
  );
}
