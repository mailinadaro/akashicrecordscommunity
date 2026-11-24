import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles, Calendar, Clock, Compass } from "lucide-react";
import { Button } from "@/components/ui/atoms/button";

/* =========================================================================
   DATOS DECLARATIVOS (ESPAÑOL NEUTRO PARA MÉXICO · RECORRIDO EN 3 ETAPAS)
   ========================================================================= */

interface StageItem {
  id: string;
  stageNumber: string;
  stageName: string;
  actionTitle: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  imageWidth: number;
  imageHeight: number;
  rotationClass: string;
}

const THREE_STAGES: StageItem[] = [
  {
    id: "stage-1",
    stageNumber: "ETAPA 01",
    stageName: "El Umbral",
    actionTitle: "Aprende el método y prepara tu conexión",
    description:
      "En el primer encuentro vas a conocer los fundamentos de los Registros Akáshicos, preparar tu espacio sagrado y comenzar a conectar con tus Maestros y Guías.",
    imageSrc: "/grabados antiguos/vector papiro.png",
    imageAlt: "Grabado antiguo de un papiro sagrado y fundamentos",
    imageWidth: 100,
    imageHeight: 100,
    rotationClass: "rotate-[-1deg] hover:rotate-0",
  },
  {
    id: "stage-2",
    stageNumber: "ETAPA 02",
    stageName: "La Exploración",
    actionTitle: "Practica y reconoce tu forma de recibir",
    description:
      "En el segundo encuentro vas a aprender la oración de apertura y cierre, explorar tus formas de percepción y realizar ejercicios de conexión y canalización.",
    imageSrc: "/grabados antiguos/vector mano y pluma.png",
    imageAlt: "Grabado antiguo de mano y pluma canalizando información",
    imageWidth: 110,
    imageHeight: 110,
    rotationClass: "rotate-[1deg] hover:rotate-0",
  },
  {
    id: "stage-3",
    stageNumber: "ETAPA 03",
    stageName: "La Integración",
    actionTitle: "Integra lo aprendido y realiza tus lecturas",
    description:
      "En el tercer encuentro vas a trabajar con preguntas, interpretación de mensajes y una práctica de lectura personal completa, para comenzar a incorporar esta herramienta a tu camino espiritual.",
    imageSrc: "/grabados antiguos/libro.png",
    imageAlt: "Grabado antiguo del libro de lecturas personales",
    imageWidth: 90,
    imageHeight: 120,
    rotationClass: "rotate-[-0.5deg] hover:rotate-0",
  },
];

/* =========================================================================
   COMPONENTE PRINCIPAL (RSC: SERVER COMPONENT PURO)
   ========================================================================= */

export default function ThreeWeeksMethodSection({
  id = "propuesta",
  className = "",
}: {
  id?: string;
  className?: string;
}) {
  return (
    <section
      id={id}
      aria-label="La propuesta: Un proceso de tres semanas"
      className={`relative w-full bg-[#EFE9DF] py-24 sm:py-32 lg:py-36 overflow-hidden border-b border-[#D8CCBA] ${className}`}
    >
      {/* 1. TEXTURA DE FONDO REAL DE PAPEL ARTESANAL */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-30 mix-blend-multiply">
        <Image
          src="/texturas/3.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center"
          priority={false}
        />
      </div>

      {/* 2. MARCA DE AGUA EDITORIAL FLOTANTE */}
      <div
        className="absolute top-12 -left-20 w-80 h-80 z-0 pointer-events-none opacity-10 blur-[0.5px]"
        aria-hidden="true"
      >
        <Image
          src="/grabados antiguos/vector astrolabio.png"
          alt=""
          width={320}
          height={320}
          className="object-contain"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 md:px-12 xl:px-16">
        
        {/* ENCABEZADO EDITORIAL CON AIRE */}
        <div className="mx-auto max-w-3xl text-center mb-16 lg:mb-24">
          <div className="inline-block mb-4">
            <span className="inline-flex items-center gap-2 bg-[#E5DCB] border border-[#CBBFA9] px-4 py-1.5 rounded-sm shadow-xs font-mono text-[11px] sm:text-xs font-semibold uppercase tracking-[0.25em] text-[#6B5A47] rotate-[-0.5deg]">
              <Sparkles className="w-3 h-3 text-[#8C7355]" />
              SECCIÓN 04 · LA PROPUESTA
            </span>
          </div>

          <h2 className="font-display italic text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] text-[#26211E] font-normal leading-[1.18] tracking-tight mb-6">
            No se trata solo de aprender una oración. Se trata de incorporar una práctica.
          </h2>

          <p className="font-body text-base sm:text-lg leading-relaxed text-[#4A3F35] font-normal max-w-2xl mx-auto mb-4">
            Aprender a abrir tus Registros Akáshicos es un proceso que merece tiempo, guía y práctica.
          </p>

          <p className="font-body text-sm sm:text-base leading-relaxed text-[#6E5F50] font-light max-w-2xl mx-auto">
            Por eso diseñamos esta iniciación como una experiencia de <strong className="font-medium text-[#26211E]">tres semanas</strong>, con tres encuentros en vivo y ejercicios para realizar entre una jornada y otra.
          </p>
        </div>

        {/* SECUENCIA DE TRES ESTACIONES (Conectadas por línea de encuadernación) */}
        <div className="relative mx-auto max-w-6xl mb-20 lg:mb-28 z-10">
          
          {/* Línea horizontal de encuadernación (solo visible en escritorio) */}
          <div
            className="hidden lg:block absolute top-1/2 left-8 right-8 -translate-y-8 h-px border-t border-dashed border-[#8C7355]/35 z-0"
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-8 items-stretch relative z-10">
            {THREE_STAGES.map((stage) => (
              <article
                key={stage.id}
                className={`relative bg-[#FFFDF9] border border-[#DDD3C2] p-7 sm:p-9 rounded-sm shadow-xl shadow-[#26211E]/5 transition-all duration-300 ${stage.rotationClass} flex flex-col justify-between`}
              >
                {/* Textura de papel interior */}
                <div className="absolute inset-0 z-0 pointer-events-none opacity-20 mix-blend-multiply rounded-sm overflow-hidden">
                  <Image
                    src="/texturas/1.png"
                    alt=""
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover"
                  />
                </div>

                <div className="relative z-10">
                  {/* Encabezado de la estación: Número, Etiqueta y Grabado */}
                  <div className="flex items-start justify-between gap-3 mb-6">
                    <div>
                      <span className="font-mono text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.25em] text-[#8C7355] block mb-1">
                        {stage.stageNumber}
                      </span>
                      <h3 className="font-display italic text-2xl text-[#26211E] font-medium leading-none">
                        {stage.stageName}
                      </h3>
                    </div>

                    <div className="relative shrink-0 -mt-2 -mr-2 drop-shadow-md">
                      <Image
                        src={stage.imageSrc}
                        alt={stage.imageAlt}
                        width={stage.imageWidth}
                        height={stage.imageHeight}
                        className="object-contain"
                      />
                    </div>
                  </div>

                  {/* Acción y Descripción */}
                  <div className="border-t border-[#EDE4D5] pt-4">
                    <h4 className="font-sans text-sm sm:text-[15px] font-semibold text-[#26211E] leading-snug mb-2.5">
                      {stage.actionTitle}
                    </h4>
                    <p className="font-body text-xs sm:text-sm text-[#5A4D40] font-light leading-relaxed">
                      {stage.description}
                    </p>
                  </div>
                </div>

                <div className="relative z-10 mt-6 pt-3 border-t border-[#EDE4D5]/60 flex items-center gap-2 text-xs font-sans text-[#7A6B5B]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#8C7355]" />
                  <span>Proceso progresivo guiado</span>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* BLOQUE DIFERENCIAL: ¿POR QUÉ TRES SEMANAS? */}
        <div className="relative mx-auto max-w-4xl z-10">
          <div className="relative bg-[#FFFDF8] border-2 border-[#C5A86B]/60 p-8 sm:p-12 lg:p-14 rounded-sm shadow-2xl shadow-[#26211E]/8 rotate-[-0.5deg]">
            {/* Textura de papel iluminado */}
            <div className="absolute inset-0 z-0 pointer-events-none opacity-25 mix-blend-multiply rounded-sm overflow-hidden">
              <Image
                src="/texturas/1.png"
                alt=""
                fill
                sizes="(max-width: 1024px) 100vw, 896px"
                className="object-cover"
              />
            </div>

            <div className="relative z-10">
              
              {/* Título de la pregunta central */}
              <div className="text-center mb-8">
                <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#7A5B1E] block mb-2">
                  ✦ EL FORMATO DIFERENCIAL ✦
                </span>
                <h3 className="font-display italic text-3xl sm:text-4xl text-[#26211E] font-normal">
                  ¿Por qué tres semanas?
                </h3>
              </div>

              {/* Cápsulas de métricas tangibles */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                <div className="bg-[#FAF5EA] border border-[#E3DAC9] p-4 text-center rounded-sm">
                  <span className="font-serif italic text-3xl sm:text-4xl text-[#7A5B1E] font-medium block leading-none mb-1">
                    3
                  </span>
                  <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#7A6B5B] font-semibold">
                    Semanas de recorrido
                  </span>
                </div>

                <div className="bg-[#FAF5EA] border border-[#E3DAC9] p-4 text-center rounded-sm">
                  <span className="font-serif italic text-3xl sm:text-4xl text-[#7A5B1E] font-medium block leading-none mb-1">
                    3
                  </span>
                  <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#7A6B5B] font-semibold">
                    Encuentros en vivo
                  </span>
                </div>

                <div className="bg-[#FAF5EA] border border-[#E3DAC9] p-4 text-center rounded-sm">
                  <span className="font-serif italic text-3xl sm:text-4xl text-[#7A5B1E] font-medium block leading-none mb-1">
                    9
                  </span>
                  <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#7A6B5B] font-semibold">
                    Horas de práctica guiada
                  </span>
                </div>
              </div>

              {/* Manifiesto y Cierre */}
              <div className="text-center max-w-2xl mx-auto space-y-4">
                <blockquote className="p-4 sm:p-5 bg-[#FAF7F0] border-l-2 border-[#8C7355] font-body text-base sm:text-lg italic text-[#3B2C1A] leading-relaxed text-left">
                  «Porque no queremos que te lleves solamente información. Queremos que tengas la oportunidad de experimentar lo aprendido, practicar entre encuentros y llegar a cada nueva etapa con una experiencia propia para integrar.»
                </blockquote>

                <p className="font-sans text-sm sm:text-base font-semibold text-[#26211E] pt-2">
                  Tres encuentros en vivo. Tres semanas de recorrido. Una práctica que comienza a tomar forma en ti.
                </p>

                <p className="font-body text-xs sm:text-sm text-[#615447] font-light leading-relaxed">
                  La propuesta combina la guía de Tamara con ejercicios y materiales para que puedas avanzar a tu propio ritmo entre cada encuentro.
                </p>

                <div className="pt-6">
                  <Link href="#itinerarios" className="inline-block">
                    <Button
                      variant="primary"
                      size="default"
                      className="rounded-full bg-[#331E45] hover:bg-[#43275A] text-[#FAF8F5] px-8 py-3.5 shadow-md shadow-[#331E45]/20 font-medium tracking-wide flex items-center gap-2 group transition-all"
                    >
                      <span>Conoce el programa detallado</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>

      {/* TRANSICIÓN PAPER-TEAR INFERIOR (BORDE RASGADO HACIA ITINERARIOS) */}
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
  );
}
