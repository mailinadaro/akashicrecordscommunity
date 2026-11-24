import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles, Check } from "lucide-react";
import { Button } from "@/components/ui/atoms/button";
import { TransformationKinematicWrapper } from "@/components/animations/TransformationKinematicWrapper";

/* =========================================================================
   DATOS DECLARATIVOS (ESPAÑOL NEUTRO PARA MÉXICO · APRENDIZAJES CONCRETOS)
   ========================================================================= */

interface LearningMilestone {
  roman: string;
  action: string;
  title: string;
  description: string;
}

const LEARNING_MILESTONES: LearningMilestone[] = [
  {
    roman: "I",
    action: "Comprender",
    title: "Qué son los Registros Akáshicos",
    description: "Conocer sus fundamentos y el sentido profundo de esta práctica en tu camino de evolución personal.",
  },
  {
    roman: "II",
    action: "Prepararte",
    title: "Abrir y cerrar tus Registros",
    description: "Aprender el método estructurado, la preparación del espacio sagrado y la oración sagrada de apertura y cierre.",
  },
  {
    roman: "III",
    action: "Conectar",
    title: "Vínculo con tus Maestros y Guías",
    description: "Explorar una conexión consciente, cercana y personal con tu equipo espiritual y tu propia alma.",
  },
  {
    roman: "IV",
    action: "Reconocer",
    title: "Cómo recibes información",
    description: "Identificar tus propios canales de percepción y trabajar con las dudas o resistencias mentales al canalizar.",
  },
  {
    roman: "V",
    action: "Preguntar",
    title: "Formular preguntas y recibir respuestas",
    description: "Aprender a orientar tus lecturas hacia temas cotidianos y decisiones concretas de tu vida con total claridad.",
  },
  {
    roman: "VI",
    action: "Leer",
    title: "Realizar tus propias lecturas",
    description: "Poner en práctica el método e integrar la experiencia para sostener una práctica autónoma y confiable.",
  },
];

/* =========================================================================
   COMPONENTE PRINCIPAL (RSC: SERVER COMPONENT PURO CON WRAPPER CINEMÁTICO)
   ========================================================================= */

export default function TransformationSection({
  id = "transformacion",
  className = "",
}: {
  id?: string;
  className?: string;
}) {
  return (
    <TransformationKinematicWrapper>
      <section
        id={id}
        data-transformation-section
        aria-label="Transformación: De la curiosidad a la experiencia"
        className={`relative w-full bg-[#F3EFE7] py-20 sm:py-28 lg:py-32 overflow-hidden border-b border-[#DFD6C5] ${className}`}
      >
        {/* 1. TEXTURA DE FONDO REAL DE PERGAMINO ARTESANAL */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-30 mix-blend-multiply">
          <Image
            src="/texturas/5.png"
            alt=""
            fill
            sizes="100vw"
            className="object-cover object-center"
            priority={false}
          />
        </div>

        {/* 2. MARCAS DE AGUA EDITORIALES */}
        <div
          className="absolute top-1/4 -right-24 w-96 h-96 z-0 pointer-events-none opacity-10 blur-[0.5px]"
          aria-hidden="true"
        >
          <Image
            src="/grabados antiguos/vector flores.png"
            alt=""
            width={380}
            height={380}
            className="object-contain"
          />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 md:px-12 xl:px-16">
          
          <div
            data-transformation-layout
            className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start"
          >
            {/* COLUMNA IZQUIERDA: STICKY SIDEBAR EDITORIAL (5 Columnas en Desktop) */}
            <aside
              data-transformation-sticky
              className="lg:col-span-5 lg:sticky lg:top-24 flex flex-col justify-between z-20"
            >
              <div>
                <div className="inline-block mb-3.5">
                  <span className="inline-flex items-center gap-2 bg-[#EAE2D2] border border-[#D5C9B4] px-4 py-1.5 rounded-sm shadow-xs font-mono text-[11px] font-semibold uppercase tracking-[0.25em] text-[#6B5A47]">
                    <Sparkles className="w-3 h-3 text-[#8C7355]" />
                    SECCIÓN 03 · TRANSFORMACIÓN
                  </span>
                </div>

                <h2 className="font-display italic text-3xl sm:text-4xl lg:text-[2.75rem] text-[#26211E] font-normal leading-[1.18] tracking-tight mb-5">
                  De la curiosidad a la experiencia: aprende a abrir tus propios Registros Akáshicos
                </h2>

                <p className="font-body text-base sm:text-lg leading-relaxed text-[#4A3F35] font-normal mb-4">
                  No necesitas tener un don especial ni saber canalizar. Necesitas aprender el método, contar con una guía y darte el espacio para practicar.
                </p>

                <p className="font-body text-xs sm:text-sm leading-relaxed text-[#6E5F50] font-light mb-8">
                  Durante esta iniciación recorrerás un proceso progresivo para acercarte a tus Registros Akáshicos, reconocer tus formas de percepción y ganar confianza en la información que recibes.
                </p>
              </div>

              {/* Sello de acompañamiento */}
              <div className="pt-6 border-t border-[#DFD6C5]">
                <span className="font-mono text-[11px] uppercase tracking-widest text-[#8C7355] block mb-2">
                  ✦ AUTONOMÍA ESPIRITUAL ✦
                </span>
                <p className="font-body text-xs text-[#5A4D40] leading-relaxed">
                  Aprenderás a abrir y cerrar tus propios Registros para consultar tu propia alma con total soberanía y confianza personal.
                </p>
              </div>
            </aside>

            {/* COLUMNA DERECHA: RIEL DE TRANSFORMACIÓN (7 Columnas en Desktop) */}
            <div className="lg:col-span-7 flex flex-col gap-12 lg:gap-16 z-10">
              
              {/* BLOQUE A: DÍPTICO ALQUÍMICO (Antes vs Después) */}
              <div className="flex flex-col gap-6">
                
                {/* LÁMINA 1: ANTES (Curiosidad e Incertidumbre) */}
                <div
                  data-diptych-before
                  className="relative bg-[#FAF6EE] border border-[#DDD3C2] p-7 sm:p-9 rounded-sm shadow-lg shadow-[#26211E]/5 transition-all"
                >
                  <div className="flex items-center justify-between mb-3 border-b border-[#E3DAC9] pb-2.5">
                    <span className="font-mono text-[11px] font-bold uppercase tracking-[0.25em] text-[#8C7355]">
                      ANTES
                    </span>
                    <span className="font-sans text-xs text-[#7A6B5B] font-medium">
                      Punto de partida
                    </span>
                  </div>

                  <h3 className="font-display italic text-2xl text-[#26211E] font-medium leading-snug mb-3">
                    Curiosidad e Incertidumbre
                  </h3>

                  <blockquote className="p-4 bg-[#F2EDE1] border-l-2 border-[#8C7355] text-sm font-body italic text-[#42382F] leading-relaxed mb-3">
                    «Quiero aprender, pero no sé cómo acceder a mis Registros ni cómo reconocer lo que percibo.»
                  </blockquote>

                  <p className="font-body text-xs sm:text-sm text-[#615447] font-light leading-relaxed">
                    Dependes de que terceros realicen lecturas por ti y aparecen dudas e inseguridades cada vez que intentas sintonizar por tu cuenta.
                  </p>
                </div>

                {/* LÁMINA 2: DESPUÉS (Autonomía y Conexión Propia) */}
                <div
                  data-diptych-after
                  className="relative bg-[#FFFDF8] border-2 border-[#C5A86B]/70 p-7 sm:p-9 rounded-sm shadow-xl shadow-[#26211E]/8 transition-all"
                >
                  <div className="flex items-center justify-between mb-3 border-b border-[#EADFCB] pb-2.5">
                    <span className="font-mono text-[11px] font-bold uppercase tracking-[0.25em] text-[#7A5B1E] flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-[#B88E3E]" />
                      DESPUÉS
                    </span>
                    <span className="font-sans text-xs text-[#7A5B1E] font-semibold">
                      Resultado central
                    </span>
                  </div>

                  <h3 className="font-display italic text-2xl text-[#26211E] font-medium leading-snug mb-3">
                    Autonomía y Conexión Propia
                  </h3>

                  <blockquote className="p-4 bg-[#FBF6EA] border-l-2 border-[#B88E3E] text-sm font-body italic text-[#3B2C1A] leading-relaxed mb-3">
                    «Conozco el método, aprendí a abrir mis Registros y puedo comenzar a realizar mis propias lecturas.»
                  </blockquote>

                  <p className="font-body text-xs sm:text-sm text-[#5C4A33] font-light leading-relaxed mb-4">
                    Cuentas con las herramientas, las oraciones sagradas y la práctica para sintonizar con tu alma cuando lo necesites, con total soberanía.
                  </p>

                  <div className="flex items-center gap-2 text-xs font-sans text-[#7A5B1E] font-medium pt-2 border-t border-[#EADFCB]">
                    <Check className="w-4 h-4 text-[#8C7355]" />
                    <span>Método, claridad y autonomía propia</span>
                  </div>
                </div>

              </div>

              {/* BLOQUE B: LOS 6 HITOS DE APRENDIZAJE (Archival Cards Scrub) */}
              <div>
                <div className="mb-6">
                  <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#7A6B5B] block mb-1">
                    ✦ AL FINALIZAR LAS TRES SEMANAS ✦
                  </span>
                  <h3 className="font-display italic text-2xl sm:text-3xl text-[#26211E] font-normal">
                    Habrás incorporado seis capacidades concretas
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                  {LEARNING_MILESTONES.map((milestone) => (
                    <article
                      key={milestone.roman}
                      data-milestone-card
                      className="relative bg-[#FFFDF9] border border-[#E0D7C6] p-6 rounded-sm shadow-md shadow-[#26211E]/5 transition-all flex flex-col justify-between"
                    >
                      {/* Textura interior */}
                      <div className="absolute inset-0 z-0 pointer-events-none opacity-20 mix-blend-multiply rounded-sm overflow-hidden">
                        <Image
                          src="/texturas/1.png"
                          alt=""
                          fill
                          sizes="33vw"
                          className="object-cover"
                        />
                      </div>

                      <div className="relative z-10">
                        <div className="flex items-baseline justify-between mb-2 border-b border-[#EFE7D8] pb-1.5">
                          <span
                            data-milestone-numeral
                            className="font-serif italic text-2xl text-[#8C7355] font-light"
                          >
                            {milestone.roman}.
                          </span>
                          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#8C7355] font-semibold">
                            {milestone.action}
                          </span>
                        </div>

                        <h4 className="font-display italic text-base sm:text-lg text-[#26211E] font-medium leading-snug mb-1.5">
                          {milestone.title}
                        </h4>

                        <p className="font-body text-xs text-[#5A4D40] font-light leading-relaxed">
                          {milestone.description}
                        </p>
                      </div>
                    </article>
                  ))}
                </div>
              </div>

              {/* CIERRE EDITORIAL CON ACCIÓN */}
              <div
                data-transformation-seal
                className="border-t border-b border-[#D5C9B4] py-8 bg-[#FAF7F0]/80 backdrop-blur-xs px-6 sm:px-8 rounded-sm text-center"
              >
                <p className="font-display italic text-xl sm:text-2xl text-[#26211E] font-medium leading-snug mb-2">
                  Descubre el camino paso a paso en los tres capítulos
                </p>
                <p className="font-body text-xs sm:text-sm text-[#615447] font-light max-w-lg mx-auto mb-5">
                  Avanzarás progresivamente, incorporando herramientas y llevando lo aprendido a tu propia experiencia.
                </p>

                <Link href="#itinerarios" className="inline-block">
                  <Button
                    variant="primary"
                    size="default"
                    className="rounded-full bg-[#331E45] hover:bg-[#43275A] text-[#FAF8F5] px-7 py-3 shadow-md shadow-[#331E45]/20 font-medium tracking-wide flex items-center gap-2 group transition-all text-xs"
                  >
                    <span>Explorar Capítulos</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>

            </div>
          </div>

        </div>

        {/* TRANSICIÓN PAPER-TEAR INFERIOR */}
        <div
          className="absolute -bottom-3 left-0 w-full h-10 sm:h-14 z-30 pointer-events-none opacity-85"
          aria-hidden="true"
        >
          <Image
            src="/texturas/PNG_FONDO_TRANSPARENTE (2).png"
            alt=""
            fill
            sizes="100vw"
            className="object-cover object-bottom"
          />
        </div>
      </section>
    </TransformationKinematicWrapper>
  );
}
