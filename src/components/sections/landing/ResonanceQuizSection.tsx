"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Sparkles, Check, ArrowRight, Compass } from "lucide-react";
import { Button } from "@/components/ui/atoms/button";

interface SituationItem {
  id: string;
  numeral: string;
  tag: string;
  quote: string;
  description: string;
}

const SITUATIONS: SituationItem[] = [
  {
    id: "sit-1",
    numeral: "I",
    tag: "Acceso y Comienzo",
    quote: "Me interesa el mundo espiritual, pero no sé cómo acceder a mis Registros.",
    description:
      "He escuchado hablar de los Registros Akáshicos y siento curiosidad por sus posibilidades, pero todavía no sé cómo abrirlos ni por dónde empezar.",
  },
  {
    id: "sit-2",
    numeral: "II",
    tag: "Autonomía en Lecturas",
    quote: "Quiero aprender a realizar mis propias lecturas.",
    description:
      "Quizás ya recibí lecturas de otras personas y me gustaría experimentar el proceso por mí misma, aprender el método y descubrir qué información puedo canalizar.",
  },
  {
    id: "sit-3",
    numeral: "III",
    tag: "Certeza y Confianza",
    quote: "Intenté aprender, pero todavía no logro hacerlo con confianza.",
    description:
      "He leído sobre el tema o participado en formaciones, pero al momento de practicar me invaden las dudas: ¿lo estaré haciendo bien?, ¿esto que percibo es realmente información?",
  },
  {
    id: "sit-4",
    numeral: "IV",
    tag: "Guía Paso a Paso",
    quote: "Siento que necesito una guía para dar mis primeros pasos.",
    description:
      "No quiero quedarme solo con conceptos teóricos; busco un acompañamiento ordenado con explicaciones, ejercicios y prácticas que me permitan experimentar por mí misma.",
  },
  {
    id: "sit-5",
    numeral: "V",
    tag: "Práctica Diaria",
    quote: "Quiero profundizar mi conexión espiritual desde un lugar más consciente y personal.",
    description:
      "Deseo incorporar una herramienta sagrada para explorar mis preguntas, conectar con mi alma y sostener una práctica espiritual propia en mi vida cotidiana.",
  },
];

export default function ResonanceQuizSection() {
  const [selectedIds, setSelectedIds] = useState<Record<string, boolean>>({
    "sit-1": true,
    "sit-3": false,
  });

  const toggleSituation = (id: string) => {
    setSelectedIds((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const selectedCount = Object.values(selectedIds).filter(Boolean).length;

  return (
    <section
      id="resonancia"
      aria-label="¿Esta iniciación es para ti? Diagnóstico de Resonancia"
      className="relative w-full bg-[#FAF8F5] py-16 lg:py-24 border-b border-border-default/60"
    >
      {/* Halo sutil ambiental */}
      <div
        className="absolute top-1/3 left-1/4 w-[750px] h-[350px] bg-gold-500/6 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 md:px-12 xl:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 xl:gap-16 items-start">
          
          {/* COLUMNA IZQUIERDA: Encabezado y Resolución Totalmente Integrada (Sticky) */}
          <div className="lg:col-span-5 xl:col-span-5 lg:sticky lg:top-24 flex flex-col text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-400/30 text-gold-700 text-[10px] sm:text-xs font-sans uppercase tracking-[0.2em] font-bold mb-4 w-fit backdrop-blur-xs">
              <Compass className="w-3.5 h-3.5 text-gold-600" aria-hidden="true" />
              <span>¿Esta iniciación es para ti?</span>
            </div>

            <h2 className="font-display italic text-3xl sm:text-4xl lg:text-[40px] text-plum-950 font-normal leading-[1.15] tracking-tight mb-4">
              ¿Sientes que hay algo más que quieres explorar en tu camino espiritual?
            </h2>

            <p className="font-body text-xs sm:text-sm lg:text-[14.5px] leading-relaxed text-plum-600 font-light mb-6">
              Quizás ya meditas, exploraste distintas terapias o participaste en experiencias de crecimiento personal. Sientes curiosidad por conectar con tu alma y profundizar en tu mundo interior, pero hay algo que todavía no terminas de incorporar.
            </p>

            {/* SEPARADOR EDITORIAL SUTIL */}
            <div className="w-full h-px bg-gold-400/25 mb-6" />

            {/* BLOQUE DE RESOLUCIÓN INTEGRADO (Sin caja oscura aislada) */}
            <div className="flex flex-col">
              {/* Badge dinámico de resonancia */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-none bg-gold-500/15 border border-gold-400/40 text-gold-800 text-[11px] font-sans font-semibold mb-3 w-fit">
                <Sparkles className="w-3.5 h-3.5 text-gold-600" aria-hidden="true" />
                <span>
                  {selectedCount > 0
                    ? `Te identificaste con ${selectedCount} de 5 momentos`
                    : "Toca las frases de la derecha que resuenen contigo"}
                </span>
              </div>

          

              
            </div>
          </div>

          {/* COLUMNA DERECHA: Lista Compacta de Situaciones en Primera Persona */}
          <div className="lg:col-span-7 xl:col-span-7 flex flex-col gap-3.5 sm:gap-4">
           

            {SITUATIONS.map((item) => {
              const isChecked = !!selectedIds[item.id];
              return (
                <div
                  key={item.id}
                  role="checkbox"
                  aria-checked={isChecked}
                  tabIndex={0}
                  onClick={() => toggleSituation(item.id)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      toggleSituation(item.id);
                    }
                  }}
                  className={`group relative flex items-start justify-between p-4 sm:p-5 rounded-none border transition-all duration-200 cursor-pointer select-none text-left ${
                    isChecked
                      ? "bg-white border-gold-500/90 shadow-md ring-1 ring-gold-400/40 -translate-y-0.5"
                      : "bg-[#FDFBF7] border-border-default/80 hover:bg-white hover:border-gold-400/50"
                  }`}
                >
                  <div className="pr-4 max-w-xl">
                    {/* Numeral y etiqueta */}
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="font-body text-sm font-bold text-gold-600">
                        {item.numeral}.
                      </span>
                      <span className="font-sans text-[10px] uppercase tracking-wider font-semibold text-plum-500">
                        {item.tag}
                      </span>
                    </div>

                    {/* Cita en PRIMERA PERSONA (Voz del Lector) */}
                    <h3
                      className={`font-body text-base sm:text-lg leading-snug mb-1.5 transition-colors duration-200 ${
                        isChecked ? "text-plum-950 font-medium" : "text-plum-900 font-normal"
                      }`}
                    >
                      “{item.quote}”
                    </h3>

                    {/* Bajada explicativa ágil */}
                    <p className="font-body text-xs sm:text-[13px] leading-relaxed text-plum-600 font-light">
                      {item.description}
                    </p>
                  </div>

                  {/* Casilla sagrada interactiva */}
                  <div
                    className={`w-6 h-6 rounded-none flex items-center justify-center border shrink-0 mt-1 transition-all duration-200 ${
                      isChecked
                        ? "bg-gold-500 border-gold-600 text-plum-950 scale-105"
                        : "border-gold-400/40 bg-white group-hover:border-gold-500"
                    }`}
                  >
                    {isChecked ? (
                      <Check className="w-3.5 h-3.5 stroke-[2.5]" aria-hidden="true" />
                    ) : (
                      <span className="text-[10px] text-gold-400/50 group-hover:text-gold-600 transition-colors">
                        ✦
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
