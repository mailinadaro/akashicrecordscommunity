import React from "react";
import Image from "next/image";
import { Sparkles, BookOpen, Heart, Eye, Sparkle, RefreshCw, Compass } from "lucide-react";
import { ScrollytellingCanvasWrapper } from "@/components/animations/ScrollytellingCanvasWrapper";
import gifFrames3 from "@/data/gifFrames3.json";

/* =========================================================================
   DATOS DECLARATIVOS (ESPAÑOL NEUTRO PARA MÉXICO · 5 EJES DE PRÁCTICA)
   ========================================================================= */

interface PracticePillar {
  id: string;
  numeral: string;
  name: string;
  action: string;
  description: string;
  IconComponent: React.ComponentType<{ className?: string }>;
}

const PRACTICE_PILLARS: PracticePillar[] = [
  {
    id: "pillar-conexion",
    numeral: "01",
    name: "Conexión",
    action: "Preparar tu espacio y altar",
    description: "Dedicar momentos a conectar contigo misma, crear tu espacio sagrado y consagrar tu altar personal.",
    IconComponent: Heart,
  },
  {
    id: "pillar-percepcion",
    numeral: "02",
    name: "Percepción",
    action: "Reconocer cómo recibes información",
    description: "Explorar tus canales sutiles y familiarizarte con tu forma única de percibir mensajes.",
    IconComponent: Eye,
  },
  {
    id: "pillar-practica",
    numeral: "03",
    name: "Práctica",
    action: "Aplicar las herramientas aprendidas",
    description: "Llevar a la experiencia cotidiana los pasos, oraciones sagradas y métodos adquiridos.",
    IconComponent: Sparkle,
  },
  {
    id: "pillar-integracion",
    numeral: "04",
    name: "Integración",
    action: "Registrar tus experiencias",
    description: "Escribir en tu bitácora lo que experimentas, observar tus avances y relacionarlos con tu camino.",
    IconComponent: BookOpen,
  },
  {
    id: "pillar-continuidad",
    numeral: "05",
    name: "Continuidad",
    action: "Construir una rutina propia",
    description: "Establecer un hábito espiritual consciente, sereno y sostenible que perdure en el tiempo.",
    IconComponent: RefreshCw,
  },
];

/* =========================================================================
   COMPONENTE PRINCIPAL (SCROLLYTELLING UNIFICADO CON GIFF 3 · 300 FOTOGRAMAS)
   ========================================================================= */

export default function TwentyOneDaysPracticeSection({
  id = "practica-21-dias",
  className = "",
}: {
  id?: string;
  className?: string;
}) {
  return (
    <section
      id={id}
      aria-label="Los 21 días de práctica: Bitácora de Integración"
      className={`relative w-full bg-[#FAF7F1] overflow-x-clip overflow-y-visible border-b border-[#E3DAC9] ${className}`}
    >
      {/* 1. MOTOR DE SCROLLYTELLING CONTEXTUAL Y COMPACTO (h-[260vh] para evitar gaps muertos) */}
      <ScrollytellingCanvasWrapper
        folder="giff 3"
        frames={gifFrames3}
        theme="light"
        scrollHeight="h-[260vh]"
      >
        <div className="relative w-full h-full flex items-center justify-center pointer-events-auto">
          <div className="grid grid-cols-1 grid-rows-1 items-center justify-center w-full max-w-4xl mx-auto px-4 sm:px-6">

            {/* ACTO 1: Apertura & Filosofía (Visible 0% - 25% del scroll) */}
            <div
              data-scrolly-act="1"
              className="col-start-1 row-start-1 flex flex-col items-center justify-center text-center py-6"
            >
              <div className="bg-[#FFFDF8]/92 backdrop-blur-md border border-[#DDD3C2] p-7 sm:p-9 rounded-sm shadow-xl shadow-[#26211E]/8 max-w-2xl mx-auto">
                <div className="inline-block mb-3">
                  <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#EFE8DC]/90 border border-[#D8CCBA] text-[#6B5A47] font-mono text-[11px] uppercase tracking-[0.22em] font-semibold shadow-xs">
                    <Sparkles className="w-3 h-3 text-[#8C7355]" />
                    SECCIÓN 06 · LA PRÁCTICA COTIDIANA
                  </span>
                </div>

                <h2 className="font-display italic text-2xl sm:text-3xl md:text-4xl text-[#26211E] font-normal leading-[1.18] tracking-tight mb-3">
                  21 días para llevar lo aprendido a tu propia experiencia
                </h2>

                <p className="font-display italic text-base sm:text-lg text-[#7A5B1E] font-medium mb-3">
                  «La conexión se aprende. La confianza se construye practicando.»
                </p>

                <p className="font-body text-xs sm:text-sm leading-relaxed text-[#5A4F44] font-light mb-5">
                  Entre los encuentros en vivo vas a contar con un espacio asincrónico para explorar, experimentar e integrar a tu propio ritmo, sin clases diarias adicionales.
                </p>

                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EFE9DF]/90 border border-[#DDD3C2] text-xs font-sans text-[#6B5A47] shadow-xs">
                  <span className="w-2 h-2 rounded-full bg-[#8C7355]" />
                  <span><strong>Recorrido asincrónico:</strong> avanzas a tu ritmo sin encuentros adicionales.</span>
                </div>

                <div className="mt-6 text-[10px] font-mono text-[#8C7355] tracking-widest uppercase flex items-center justify-center gap-1.5">
                  <span>Haz scroll para abrir la bitácora</span>
                  <span className="animate-bounce">↓</span>
                </div>
              </div>
            </div>

            {/* ACTO 2: Los 5 Ejes de Trabajo (Visible 30% - 65% del scroll) */}
            <div
              data-scrolly-act="2"
              className="col-start-1 row-start-1 flex flex-col items-center justify-center text-center py-6"
            >
              <div className="inline-block bg-[#FFFDF8]/90 backdrop-blur-md px-5 py-1.5 rounded-full border border-[#DDD3C2] shadow-sm mb-4">
                <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-[#7A6B5B] block font-semibold">
                  ✦ CINCO EJES FUNDAMENTALES ✦
                </span>
              </div>

              <div className="inline-block bg-[#FFFDF8]/90 backdrop-blur-md px-6 py-2 rounded-full border border-[#DDD3C2] shadow-sm mb-6">
                <h3 className="font-display italic text-xl sm:text-2xl md:text-3xl text-[#26211E] font-medium leading-none">
                  Lo que vas a trabajar en estos 21 días
                </h3>
              </div>

              {/* Grid Compacta de los 5 Pilares */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 w-full max-w-3xl text-left mb-4">
                {PRACTICE_PILLARS.map((pillar) => {
                  const Icon = pillar.IconComponent;
                  return (
                    <article
                      key={pillar.id}
                      className="bg-[#FFFDF9]/95 backdrop-blur-md border border-[#E3DAC9] p-3.5 rounded-sm shadow-sm flex items-start gap-3"
                    >
                      <div className="shrink-0 w-8 h-8 rounded-sm bg-[#F6F1E6] border border-[#DFD5C3] flex items-center justify-center text-[#7A5B1E] mt-0.5">
                        <Icon className="w-3.5 h-3.5" />
                      </div>
                      <div className="min-w-0">
                        <div className="flex items-baseline justify-between gap-1 mb-0.5">
                          <h4 className="font-display italic text-base text-[#26211E] font-medium">
                            {pillar.name}
                          </h4>
                          <span className="font-mono text-[9px] text-[#8C7355] font-semibold">
                            {pillar.numeral}
                          </span>
                        </div>
                        <p className="font-sans text-[11px] text-[#7A5B1E] font-semibold mb-0.5 leading-tight">
                          {pillar.action}
                        </p>
                        <p className="font-body text-[11px] text-[#5A4F44] font-light leading-snug">
                          {pillar.description}
                        </p>
                      </div>
                    </article>
                  );
                })}
              </div>

              <div className="inline-block bg-[#FFFDF8]/90 backdrop-blur-md px-4 py-1 rounded-full border border-[#DDD3C2] text-[10px] font-mono text-[#8C7355] tracking-widest uppercase flex items-center justify-center gap-1.5 mx-auto">
                <span>Continúa explorando la bitácora</span>
                <span className="animate-bounce">↓</span>
              </div>
            </div>

            {/* ACTO 3: La Bitácora & Fases de Recorrido (Visible 70% - 100% del scroll) */}
            <div
              data-scrolly-act="3"
              className="col-start-1 row-start-1 flex flex-col items-center justify-center text-center py-6"
            >
              <div className="bg-[#FFFDF8]/92 backdrop-blur-md border border-[#DDD3C2] p-7 sm:p-9 rounded-sm shadow-xl shadow-[#26211E]/8 max-w-2xl mx-auto">
                <div className="inline-block mb-2">
                  <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#EFE8DC]/90 border border-[#D8CCBA] text-[#6B5A47] font-mono text-[11px] uppercase tracking-[0.22em] font-semibold shadow-xs">
                    ✦ FORMATO DIGITAL E IMPRIMIBLE ✦
                  </span>
                </div>

                <h3 className="font-display italic text-2xl sm:text-3xl text-[#26211E] font-normal leading-tight mb-2.5">
                  Tu compañera durante el recorrido: la Bitácora de Integración
                </h3>

                <p className="font-body text-xs sm:text-sm text-[#5A4F44] font-light max-w-xl mx-auto leading-relaxed mb-4">
                  Vas a recibir una bitácora digital e imprimible con ejercicios diarios para acompañar tu proceso. Un espacio íntimo para escribir, registrar tus experiencias y avances.
                </p>

                {/* Síntesis Visual de las 3 Semanas */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 w-full mb-4 text-left">
                  <div className="bg-[#FAF5EA] border border-[#E3DAC9] p-2.5 rounded-xs">
                    <span className="font-mono text-[9px] text-[#7A5B1E] font-bold block uppercase mb-0.5">
                      Días 01 – 07
                    </span>
                    <h4 className="font-display italic text-xs text-[#26211E] font-medium">
                      Conectar
                    </h4>
                    <p className="font-body text-[10px] text-[#615447] font-light">
                      Altar y sintonización inicial.
                    </p>
                  </div>
                  <div className="bg-[#FAF5EA] border border-[#E3DAC9] p-2.5 rounded-xs">
                    <span className="font-mono text-[9px] text-[#7A5B1E] font-bold block uppercase mb-0.5">
                      Días 08 – 14
                    </span>
                    <h4 className="font-display italic text-xs text-[#26211E] font-medium">
                      Explorar
                    </h4>
                    <p className="font-body text-[10px] text-[#615447] font-light">
                      Percepción y oración sagrada.
                    </p>
                  </div>
                  <div className="bg-[#FAF5EA] border border-[#E3DAC9] p-2.5 rounded-xs">
                    <span className="font-mono text-[9px] text-[#7A5B1E] font-bold block uppercase mb-0.5">
                      Días 15 – 21
                    </span>
                    <h4 className="font-display italic text-xs text-[#26211E] font-medium">
                      Integrar
                    </h4>
                    <p className="font-body text-[10px] text-[#615447] font-light">
                      Lecturas y rutina propia.
                    </p>
                  </div>
                </div>

                <blockquote className="font-display italic text-xs sm:text-sm text-[#7A5B1E] max-w-md mx-auto leading-relaxed border-t border-[#DDD3C2] pt-2.5">
                  «Porque aprender a abrir tus Registros es el comienzo. Darte el espacio para practicar es lo que te permite incorporar esta experiencia a tu camino.»
                </blockquote>
              </div>
            </div>

          </div>
        </div>
      </ScrollytellingCanvasWrapper>

      
    </section>
  );
}
