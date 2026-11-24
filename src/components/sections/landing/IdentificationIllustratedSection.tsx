import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/atoms/button";
import { IdentificationKinematicWrapper } from "@/components/animations/IdentificationKinematicWrapper";

/* =========================================================================
   DATOS DECLARATIVOS (ESPAÑOL NEUTRO PARA MÉXICO · PRIMERA PERSONA)
   ========================================================================= */

interface MotiveCard {
  id: string;
  numeral: string;
  title: string;
  subtitle: string;
  firstPersonQuote: string;
  imageSrc: string;
  imageAlt: string;
  imageWidth: number;
  imageHeight: number;
  rotationClass: string;
}

const COLLAGE_MOTIVES: MotiveCard[] = [
  {
    id: "motive-1",
    numeral: "01",
    title: "Te interesa el mundo espiritual",
    subtitle: "Pero no sabes cómo acceder a tus Registros.",
    firstPersonQuote:
      "«Escuché hablar de los Registros Akáshicos y siento curiosidad por conectar con mi alma, pero todavía no sé cómo abrirlos ni por dónde empezar.»",
    imageSrc: "/grabados antiguos/vector astrolabio.png",
    imageAlt: "Grabado antiguo de un astrolabio astronómico",
    imageWidth: 140,
    imageHeight: 140,
    rotationClass: "rotate-[-1deg] hover:rotate-0",
  },
  {
    id: "motive-2",
    numeral: "02",
    title: "Quieres hacer tus propias lecturas",
    subtitle: "Y aprender a conectar por ti misma.",
    firstPersonQuote:
      "«Recibí lecturas de otras personas y me gustaría experimentar ese proceso por mí misma, aprender el método y recibir respuestas directamente de mi alma.»",
    imageSrc: "/grabados antiguos/vector mano y pluma.png",
    imageAlt: "Grabado antiguo de mano escribiendo con pluma",
    imageWidth: 150,
    imageHeight: 150,
    rotationClass: "rotate-[1.5deg] hover:rotate-0",
  },
  {
    id: "motive-3",
    numeral: "03",
    title: "Te cuesta confiar en lo que percibes",
    subtitle: "Aunque ya hayas intentado aprender.",
    firstPersonQuote:
      "«Aparecen dudas al momento de practicar: ¿lo estaré haciendo bien?, ¿esto que percibo es real o es mi mente?, ¿cómo reconozco mi propia forma de recibir?»",
    imageSrc: "/grabados antiguos/vela.png",
    imageAlt: "Grabado antiguo de una vela encendida",
    imageWidth: 70,
    imageHeight: 140,
    rotationClass: "rotate-[-1.5deg] hover:rotate-0",
  },
  {
    id: "motive-4",
    numeral: "04",
    title: "Necesitas una guía para comenzar",
    subtitle: "Un método claro y un proceso ordenado.",
    firstPersonQuote:
      "«No busco quedarme solo con conceptos teóricos; necesito que alguien me acompañe con explicaciones claras y ejercicios prácticos que pueda experimentar.»",
    imageSrc: "/grabados antiguos/vector biblioteca.png",
    imageAlt: "Grabado antiguo de biblioteca y libros clásicos",
    imageWidth: 140,
    imageHeight: 140,
    rotationClass: "rotate-[1deg] hover:rotate-0",
  },
  {
    id: "motive-5",
    numeral: "05",
    title: "Quieres profundizar tu conexión espiritual",
    subtitle: "Desde un lugar más consciente y personal.",
    firstPersonQuote:
      "«Te gustaría incorporar una herramienta que te permita explorar tus preguntas, conectar con tu alma y desarrollar una práctica propia que puedas sostener en tu vida cotidiana.»",
    imageSrc: "/grabados antiguos/libro.png",
    imageAlt: "Grabado antiguo del libro de la vida y conexión profunda",
    imageWidth: 110,
    imageHeight: 140,
    rotationClass: "rotate-[-0.5deg] hover:rotate-0",
  },
];

/* =========================================================================
   COMPONENTE PRINCIPAL (RSC: SERVER COMPONENT PURO CON WRAPPER CINEMÁTICO)
   ========================================================================= */

export default function IdentificationIllustratedSection({
  id = "identificacion",
  className = "",
}: {
  id?: string;
  className?: string;
}) {
  return (
    <IdentificationKinematicWrapper>
      <section
        id={id}
        data-identification-section
        aria-label="Identificación: ¿Es para ti?"
        className={`relative w-full bg-[#F6F2EA] py-16 sm:py-20 lg:py-24 overflow-hidden border-b border-[#E3DAC9] ${className}`}
      >
        {/* 1. TEXTURA DE FONDO REAL DE LIBRO ANTIGUO */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-30 mix-blend-multiply">
          <Image
            src="/texturas/2.png"
            alt=""
            fill
            sizes="100vw"
            className="object-cover object-center"
            priority={false}
          />
        </div>

        {/* 2. MARCAS DE AGUA EDITORIALES FLOTANTES */}
        <div
          className="absolute top-12 -left-16 w-80 h-80 z-0 pointer-events-none opacity-10 blur-[0.5px]"
          aria-hidden="true"
        >
          <Image
            src="/grabados antiguos/vector papiro.png"
            alt=""
            width={320}
            height={320}
            className="object-contain"
          />
        </div>

        <div className="relative z-10 w-full">
          
          {/* ENCABEZADO EDITORIAL CON AIRE */}
          <div data-identification-header className="mx-auto max-w-4xl text-center px-4 sm:px-6 mb-10 sm:mb-14">
            <div className="inline-block mb-3.5">
              <span className="inline-flex items-center gap-2 bg-[#EFE8DC] border border-[#D8CCBA] px-4 py-1.5 rounded-sm shadow-xs font-mono text-[11px] sm:text-xs font-semibold uppercase tracking-[0.25em] text-[#6B5A47]">
                <Sparkles className="w-3 h-3 text-[#8C7355]" />
                SECCIÓN 02 · IDENTIFICACIÓN
              </span>
            </div>

            <h2 className="font-display italic text-3xl sm:text-4xl md:text-5xl lg:text-[3rem] text-[#26211E] font-normal leading-[1.18] tracking-tight mb-4">
              ¿Sientes que hay algo más que quieres explorar en tu camino espiritual?
            </h2>

            <p className="font-body text-sm sm:text-base md:text-lg leading-relaxed text-[#5A4F44] font-light max-w-2xl mx-auto">
              Quizás ya meditas, exploraste distintas terapias o participaste en experiencias de crecimiento personal.
              Sientes curiosidad por conectar con tu alma, pero hay algo que todavía no terminas de incorporar.
            </p>
          </div>

          {/* VIEWPORT DEL TREN EDITORIAL HORIZONTAL (GSAP PINNED SCRUB) */}
          <div
            data-identification-viewport
            className="w-full overflow-x-auto lg:overflow-hidden scrollbar-none py-4"
          >
            <div
              data-identification-track
              className="flex items-center gap-6 sm:gap-8 lg:gap-10 pl-4 sm:pl-8 lg:pl-16 pr-8 lg:pr-24 w-max"
            >
              {COLLAGE_MOTIVES.map((motive) => (
                <article
                  key={motive.id}
                  data-identification-card
                  className={`w-[82vw] sm:w-[48vw] lg:w-[32vw] h-[58vh] sm:h-[62vh] lg:h-[66vh] shrink-0 relative bg-[#FFFDF9] border border-[#E3DAC9] p-7 sm:p-9 lg:p-10 rounded-sm shadow-xl shadow-[#26211E]/6 transition-all duration-300 ${motive.rotationClass} flex flex-col justify-between`}
                >
                  {/* Textura de papel interior */}
                  <div className="absolute inset-0 z-0 pointer-events-none opacity-20 mix-blend-multiply rounded-sm overflow-hidden">
                    <Image
                      src="/texturas/1.png"
                      alt=""
                      fill
                      sizes="33vw"
                      className="object-cover"
                    />
                  </div>

                  {/* Cabecera de la Lámina */}
                  <div className="relative z-10 flex items-start justify-between gap-4">
                    <div>
                      <span className="font-serif italic text-3xl sm:text-4xl text-[#8C7355] block font-light leading-none mb-2">
                        {motive.numeral}
                      </span>
                      <h3 className="font-display italic text-xl sm:text-2xl text-[#26211E] font-medium leading-snug">
                        {motive.title}
                      </h3>
                      <p className="font-sans text-xs sm:text-sm text-[#736353] font-medium mt-1">
                        {motive.subtitle}
                      </p>
                    </div>

                    {/* Grabado con parallax dinámico */}
                    <div
                      data-parallax-engraving
                      className="relative shrink-0 -mt-2 -mr-2 drop-shadow-md transition-transform"
                    >
                      <Image
                        src={motive.imageSrc}
                        alt={motive.imageAlt}
                        width={motive.imageWidth}
                        height={motive.imageHeight}
                        className="object-contain"
                      />
                    </div>
                  </div>

                  {/* Cita en primera persona */}
                  <div className="relative z-10 mt-auto pt-6 border-t border-[#EDE4D5]">
                    <blockquote className="font-body text-sm sm:text-[15px] italic text-[#42382F] leading-relaxed">
                      {motive.firstPersonQuote}
                    </blockquote>
                  </div>
                </article>
              ))}

              {/* LÁMINA TERMINAL: SELLO DE CIERRE EDITORIAL */}
              <article
                data-identification-seal
                className="w-[82vw] sm:w-[48vw] lg:w-[32vw] h-[58vh] sm:h-[62vh] lg:h-[66vh] shrink-0 relative bg-[#FFFDF8] border-2 border-[#C5A86B]/70 p-8 sm:p-10 rounded-sm shadow-2xl shadow-[#26211E]/10 flex flex-col justify-between text-center"
              >
                {/* Textura de pergamino iluminado */}
                <div className="absolute inset-0 z-0 pointer-events-none opacity-25 mix-blend-multiply rounded-sm overflow-hidden">
                  <Image
                    src="/texturas/1.png"
                    alt=""
                    fill
                    sizes="33vw"
                    className="object-cover"
                  />
                </div>

                <div className="relative z-10 my-auto space-y-5">
                  <div className="inline-block">
                    <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#8C7355] block mb-2">
                      ✦ RESONANCIA ✦
                    </span>
                  </div>

                  <h3 className="font-display italic text-2xl sm:text-3xl text-[#26211E] font-medium leading-snug">
                    Si te reconoces en alguna de estas situaciones, esta iniciación es para ti.
                  </h3>

                  <p className="font-body text-xs sm:text-sm text-[#615447] font-light leading-relaxed max-w-xs mx-auto">
                    No necesitas saber canalizar ni haber tenido experiencias previas. Solo necesitas la disposición de aprender y darte el espacio para conectar.
                  </p>

                  <div className="pt-4">
                    <Link href="#itinerarios" className="inline-block">
                      <Button
                        variant="primary"
                        size="default"
                        className="rounded-full bg-[#331E45] hover:bg-[#43275A] text-[#FAF8F5] px-7 py-3 shadow-md shadow-[#331E45]/20 font-medium tracking-wide flex items-center gap-2 group transition-all text-xs"
                      >
                        <span>Conoce el camino</span>
                        <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </Link>
                  </div>
                </div>

                <div className="relative z-10 pt-4 border-t border-[#E8DEC8] text-[11px] font-mono text-[#8C7355] uppercase tracking-widest">
                  Tres semanas · Tres encuentros
                </div>
              </article>
            </div>
          </div>

        </div>

        {/* TRANSICIÓN PAPER-TEAR INFERIOR */}
        <div
          className="absolute -bottom-3 left-0 w-full h-10 sm:h-14 z-30 pointer-events-none opacity-80"
          aria-hidden="true"
        >
          <Image
            src="/texturas/PNG_FONDO_TRANSPARENTE (1).png"
            alt=""
            fill
            sizes="100vw"
            className="object-cover object-bottom"
          />
        </div>
      </section>
    </IdentificationKinematicWrapper>
  );
}
