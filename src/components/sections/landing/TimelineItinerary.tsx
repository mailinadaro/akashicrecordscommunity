import React from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/atoms/button";
import { TimelineItineraryCinematicWrapper } from "@/components/animations/TimelineItineraryCinematicWrapper";

export interface ItineraryStep {
  dayNumber: string | number;
  eyebrow?: string;
  title: string;
  description: string;
  image?: string | StaticImageData;
  imageAlt?: string;
}

interface TimelineItineraryProps {
  id?: string;
  heading?: string;
  subheading?: string;
  noteTitle?: string;
  noteText?: string;
  steps?: ItineraryStep[];
}

const DEFAULT_STEPS: ItineraryStep[] = [
  {
    dayNumber: "01",
    eyebrow: "ETAPA 01 · EL UMBRAL",
    title: "Aprende el método y prepara tu conexión",
    description:
      "En el primer encuentro vas a conocer los fundamentos de los Registros Akáshicos, preparar tu espacio sagrado y comenzar a conectar con tus Maestros y Guías.",
    image: "/timeline/umbral.jpg",
    imageAlt: "El Umbral — Preparación del espacio sagrado y fundamentos",
  },
  {
    dayNumber: "02",
    eyebrow: "ETAPA 02 · LA EXPLORACIÓN",
    title: "Practica y reconoce tu forma de recibir",
    description:
      "En el segundo encuentro vas a aprender la oración de apertura y cierre, explorar tus formas de percepción y realizar ejercicios de conexión y canalización.",
    image: "/timeline/astrolabio.jpg",
    imageAlt: "La Exploración — Calibración de la percepción y oración sagrada",
  },
  {
    dayNumber: "03",
    eyebrow: "ETAPA 03 · LA INTEGRACIÓN",
    title: "Integra lo aprendido y realiza tus lecturas",
    description:
      "En el tercer encuentro vas a trabajar con preguntas, interpretación de mensajes y una práctica de lectura personal completa, para comenzar a incorporar esta herramienta a tu camino espiritual.",
    image: "/timeline/libro.jpg",
    imageAlt: "La Integración — Lecturas personales completas y mapa de práctica",
  },
];

export default function TimelineItinerary({
  id = "propuesta",
  heading = "No se trata solo de aprender una oración. Se trata de incorporar una práctica.",
  subheading = "Aprender a abrir tus Registros Akáshicos es un proceso que merece tiempo, guía y práctica. Por eso diseñamos esta iniciación como una experiencia de tres semanas, con tres encuentros en vivo y ejercicios para realizar entre una jornada y otra.",
  noteTitle = "¿Por qué tres semanas?",
  noteText = "Porque no queremos que te lleves solamente información. Queremos que tengas la oportunidad de experimentar lo aprendido, practicar entre encuentros y llegar a cada nueva etapa con una experiencia propia para integrar.",
  steps = DEFAULT_STEPS,
}: TimelineItineraryProps) {
  if (!steps || steps.length === 0) return null;

  return (
    <TimelineItineraryCinematicWrapper>
      <section
        id={id}
        data-itinerary-section
        aria-label="La propuesta: Un proceso de tres semanas"
        className="w-full bg-[#FAF7F0] text-[#26211E] relative selection:bg-[#8C7355] selection:text-[#FAF8F5] border-t border-b border-[#E3DAC9]"
      >
        <div
          data-itinerary-layout
          style={{ height: `calc(75svh * ${steps.length})` }}
          className="w-full grid grid-cols-1 lg:grid-cols-12 relative"
        >
          {/* Pilar 1: Columna Lateral Sticky en Desktop (4 Columnas) */}
          <aside className="lg:col-span-4 p-8 sm:p-10 lg:p-12 lg:sticky lg:top-0 lg:h-screen flex flex-col justify-between z-20 bg-[#FAF7F0] lg:border-r border-[#E3DAC9]">
            <div>
              <span className="font-mono text-[11px] font-bold uppercase tracking-[0.25em] text-[#8C7355] block mb-3">
                ✦ SECCIÓN 04 · LA PROPUESTA ✦
              </span>

              <h2 className="text-2xl sm:text-3xl lg:text-[2.35rem] font-display italic tracking-tight text-[#26211E] leading-[1.18]">
                {heading}
              </h2>

              {subheading && (
                <p className="mt-4 text-xs sm:text-sm text-[#5A4F44] leading-relaxed font-light font-body">
                  {subheading}
                </p>
              )}
            </div>

            {/* Módulo Diferencial Inferior con Métricas */}
            <div className="mt-8 lg:mt-0 pt-6 border-t border-[#E3DAC9]">
              {noteTitle && (
                <h4 className="text-base sm:text-lg font-display italic text-[#26211E] mb-2 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#8C7355]" />
                  {noteTitle}
                </h4>
              )}

              {/* Cápsulas de métricas */}
              <div className="flex flex-wrap gap-2 mb-3">
                <span className="inline-flex items-center px-2.5 py-1 rounded-xs bg-[#EFE8DC] border border-[#DDD3C2] text-[10px] font-mono uppercase tracking-wider text-[#6B5A47]">
                  3 semanas
                </span>
                <span className="inline-flex items-center px-2.5 py-1 rounded-xs bg-[#EFE8DC] border border-[#DDD3C2] text-[10px] font-mono uppercase tracking-wider text-[#6B5A47]">
                  3 encuentros
                </span>
                <span className="inline-flex items-center px-2.5 py-1 rounded-xs bg-[#EFE8DC] border border-[#DDD3C2] text-[10px] font-mono uppercase tracking-wider text-[#6B5A47]">
                  10 horas y 30 minutos
                </span>
              </div>

              {noteText && (
                <p className="text-xs text-[#615447] leading-relaxed font-light font-body mb-4">
                  {noteText}
                </p>
              )}

              <p className="text-xs font-sans font-medium text-[#26211E] mb-4">
                Tres encuentros en vivo. Tres semanas de recorrido. Una práctica que comienza a tomar forma en ti.
              </p>

              <Link href="#itinerarios" className="inline-block">
                <Button
                  variant="primary"
                  size="default"
                  className="rounded-full bg-[#331E45] hover:bg-[#43275A] text-[#FAF8F5] text-xs px-5 py-2.5 shadow-sm shadow-[#331E45]/20 font-medium tracking-wide flex items-center gap-2 group transition-all"
                >
                  <span>Conoce los capítulos</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          </aside>

          {/* Pilar 2: Marco Unificado Sticky en Desktop (8 Columnas) */}
          <div className="lg:col-span-8 lg:sticky lg:top-0 lg:h-screen flex items-center z-10">
            <div
              data-itinerary-frame
              className="w-full overflow-hidden flex flex-col lg:flex-row lg:h-screen relative"
            >
              {/* Sub-columna 1: Riel de Narrativa de Texto */}
              <div
                data-itinerary-text-column
                className="w-full lg:w-1/2 h-auto lg:h-full relative overflow-hidden flex flex-col bg-[#F6F2EA]"
              >
                <div
                  data-itinerary-track
                  className="p-4 sm:p-6 lg:p-8 w-full flex flex-col gap-4 sm:gap-6"
                >
                  {steps.map((step, idx) => {
                    const formattedDay = String(step.dayNumber).padStart(2, "0");

                    return (
                      <article
                        key={`step-${step.dayNumber}-${idx}`}
                        data-itinerary-item={idx}
                        className="w-full p-6 sm:p-8 lg:p-10 flex flex-col justify-center min-h-auto lg:min-h-[42vh] relative bg-[#FFFDF9] border border-[#E3DAC9] shadow-sm rounded-sm transition-all"
                      >
                        {step.eyebrow && (
                          <span className="font-mono text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.25em] text-[#8C7355] block mb-2">
                            {step.eyebrow}
                          </span>
                        )}

                        <span
                          data-step-number
                          className="text-4xl lg:text-5xl font-serif italic select-none block mb-2 tracking-tight text-[#8C7355] font-light leading-none"
                        >
                          {formattedDay}
                        </span>

                        <h3 className="text-lg lg:text-xl font-display italic text-[#26211E] pb-2 font-medium leading-snug">
                          {step.title}
                        </h3>

                        <p className="text-xs sm:text-sm text-[#5A4F44] font-light leading-relaxed max-w-[45ch] font-body">
                          {step.description}
                        </p>
                      </article>
                    );
                  })}
                </div>
              </div>

              {/* Sub-columna 2: Stack de Panel Visual Fotográfico */}
              <div
                data-itinerary-media-column
                className="lg:block lg:w-1/2 h-72 sm:h-96 lg:h-full relative overflow-hidden bg-[#26211E]"
              >
                {steps.map((step, idx) => {
                  return (
                    <div
                      key={`media-${step.dayNumber}-${idx}`}
                      data-media-card={idx}
                      className="absolute inset-0 w-full h-full overflow-hidden flex items-center justify-center bg-[#1A0F24] border-l border-[#E3DAC9]"
                      style={{ clipPath: "inset(0% 0px)" }}
                    >
                      {step.image ? (
                        <div className="relative w-full h-full">
                          <Image
                            src={step.image}
                            alt={step.imageAlt || step.title}
                            fill
                            sizes="(min-width: 1024px) 38vw, 100vw"
                            priority={idx === 0}
                            className="object-cover object-center"
                          />
                          {/* Scrim ambiental sutil para integrar el tono editorial */}
                          <div className="absolute inset-0 bg-gradient-to-t from-[#26211E]/40 via-transparent to-transparent pointer-events-none" />
                        </div>
                      ) : (
                        <div className="flex flex-col items-center justify-center text-center p-8 border border-[#E3DAC9] bg-[#FFFDF9] max-w-sm shadow-xs">
                          <span className="font-serif italic text-5xl text-[#8C7355]/40 mb-4">
                            {String(step.dayNumber).padStart(2, "0")}
                          </span>
                          <p className="font-display italic text-xl text-[#26211E] leading-snug">
                            {step.title}
                          </p>
                        </div>
                      )}
                      <div
                        data-media-overlay
                        className="absolute inset-0 bg-[#26211E]/15 pointer-events-none opacity-0"
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
