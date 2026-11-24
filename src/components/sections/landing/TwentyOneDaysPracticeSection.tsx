import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Sparkles, BookOpen, Heart, Eye, Sparkle, RefreshCw, Compass } from "lucide-react";
import { TwentyOneDaysKinematicWrapper } from "@/components/animations/TwentyOneDaysKinematicWrapper";

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
    action: "Preparar tu espacio y conectar",
    description: "Dedicar momentos a conectar contigo misma, crear tu espacio sagrado y consagrar tu altar personal.",
    IconComponent: Heart,
  },
  {
    id: "pillar-percepcion",
    numeral: "02",
    name: "Percepción",
    action: "Reconocer cómo recibes información",
    description: "Explorar tus propios canales sutiles de percepción y familiarizarte con tu forma única de recibir mensajes.",
    IconComponent: Eye,
  },
  {
    id: "pillar-practica",
    numeral: "03",
    name: "Práctica",
    action: "Aplicar las herramientas aprendidas",
    description: "Llevar a la experiencia cotidiana los pasos, oraciones sagradas y métodos adquiridos durante los encuentros.",
    IconComponent: Sparkle,
  },
  {
    id: "pillar-integracion",
    numeral: "04",
    name: "Integración",
    action: "Registrar tus experiencias",
    description: "Escribir en tu bitácora lo que experimentas, observar tus aprendizajes y relacionarlos con tu camino personal.",
    IconComponent: BookOpen,
  },
  {
    id: "pillar-continuidad",
    numeral: "05",
    name: "Continuidad",
    action: "Construir una rutina propia",
    description: "Establecer un hábito espiritual consciente, sereno y sostenible que perdure mucho más allá de las tres semanas.",
    IconComponent: RefreshCw,
  },
];

/* =========================================================================
   COMPONENTE PRINCIPAL (RSC: SERVER COMPONENT PURO CON WRAPPER CINEMÁTICO)
   ========================================================================= */

export default function TwentyOneDaysPracticeSection({
  id = "practica-21-dias",
  className = "",
}: {
  id?: string;
  className?: string;
}) {
  return (
    <TwentyOneDaysKinematicWrapper>
      <section
        id={id}
        data-practice-section
        aria-label="Los 21 días de práctica: Bitácora de Integración"
        className={`relative w-full bg-[#FAF7F1] py-20 sm:py-28 lg:py-32 overflow-hidden border-b border-[#E3DAC9] ${className}`}
      >
        {/* 1. TEXTURA DE FONDO REAL DE PAPEL ARTESANAL */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-25 mix-blend-multiply">
          <Image
            src="/texturas/1.png"
            alt=""
            fill
            sizes="100vw"
            className="object-cover object-center"
            priority={false}
          />
        </div>

        {/* 2. MARCAS DE AGUA EDITORIALES */}
        <div
          className="absolute top-1/4 -right-20 w-80 h-80 z-0 pointer-events-none opacity-10 blur-[0.5px]"
          aria-hidden="true"
        >
          <Image
            src="/grabados antiguos/vector mano y pluma.png"
            alt=""
            width={320}
            height={320}
            className="object-contain"
          />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 md:px-12 xl:px-16">
          
          {/* ENCABEZADO EDITORIAL CONTEXTUAL */}
          <div data-practice-header className="mx-auto max-w-3xl text-center mb-16 lg:mb-20">
            <div className="inline-block mb-3.5">
              <span className="inline-flex items-center gap-2 bg-[#EFE8DC] border border-[#D8CCBA] px-4 py-1.5 rounded-sm shadow-xs font-mono text-[11px] sm:text-xs font-semibold uppercase tracking-[0.25em] text-[#6B5A47]">
                <Sparkles className="w-3 h-3 text-[#8C7355]" />
                SECCIÓN 06 · LA PRÁCTICA COTIDIANA
              </span>
            </div>

            <h2 className="font-display italic text-3xl sm:text-4xl md:text-5xl lg:text-[3rem] text-[#26211E] font-normal leading-[1.18] tracking-tight mb-4">
              21 días para llevar lo aprendido a tu propia experiencia
            </h2>

            <p className="font-display italic text-lg sm:text-xl text-[#7A5B1E] font-medium mb-4">
              «La conexión se aprende. La confianza se construye practicando.»
            </p>

            <p className="font-body text-sm sm:text-base leading-relaxed text-[#5A4F44] font-light max-w-2xl mx-auto mb-5">
              Entre los encuentros en vivo vas a contar con un espacio para explorar, experimentar e integrar lo que aprendiste.
              A través de la Bitácora de Integración, contarás con ejercicios diarios para profundizar tu conexión con los Registros Akáshicos.
            </p>

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EFE9DF] border border-[#DDD3C2] text-xs font-sans text-[#6B5A47]">
              <span className="w-2 h-2 rounded-full bg-[#8C7355]" />
              <span><strong>Recorrido asincrónico:</strong> avanzas a tu propio ritmo, sin encuentros en vivo adicionales todos los días.</span>
            </div>
          </div>

          {/* COMPOSICIÓN EN DOS COLUMNAS: MOCKUP A LA IZQUIERDA + EJES A LA DERECHA */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center mb-16 lg:mb-24">
            
            {/* COLUMNA IZQUIERDA: MOCKUP DE LA BITÁCORA ABIERTA (6 Columnas en Desktop) */}
            <div className="lg:col-span-6 flex flex-col items-center">
              <div
                data-journal-mockup
                className="relative w-full rounded-sm overflow-hidden bg-[#FFFDF9] border border-[#DDD3C2] p-3 sm:p-4 shadow-2xl shadow-[#26211E]/10 transition-transform duration-300"
              >
                {/* Imagen del Mockup de la Bitácora Abierta */}
                <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] overflow-hidden rounded-xs bg-[#F5F1E8]">
                  <Image
                    src="/grabados antiguos/Copia de Dossier Alma Adentro 2025.png"
                    alt="Mockup de la Bitácora de Integración abierta con ejercicios y páginas de registro"
                    fill
                    sizes="(min-width: 1024px) 45vw, 100vw"
                    className="object-cover object-center"
                    priority={false}
                  />
                </div>

                {/* Sello de formato y detalle editorial */}
                <div className="pt-4 pb-2 px-2 flex items-center justify-between border-t border-[#EDE4D5] mt-3">
                  <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.2em] text-[#7A6B5B] font-semibold">
                    ✦ Formato Digital e Imprimible
                  </span>
                  <span className="font-sans text-xs text-[#8C7355] font-medium">
                    Ejercicios guiados
                  </span>
                </div>
              </div>

              {/* Mensaje de la compañera de viaje */}
              <div className="mt-6 text-center max-w-md">
                <h3 className="font-display italic text-lg sm:text-xl text-[#26211E] font-medium mb-2">
                  Tu compañera durante el recorrido: la Bitácora
                </h3>
                <p className="font-body text-xs sm:text-sm text-[#615447] font-light leading-relaxed">
                  Un espacio íntimo para escribir, registrar tus experiencias, observar tus avances y darle lugar a todo lo que vaya surgiendo durante la práctica.
                </p>
              </div>
            </div>

            {/* COLUMNA DERECHA: LOS 5 EJES DE TRABAJO (6 Columnas en Desktop) */}
            <div className="lg:col-span-6 flex flex-col gap-4 sm:gap-4.5">
              <div className="mb-2">
                <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#7A6B5B] block mb-1">
                  ✦ CINCO EJES FUNDAMENTALES ✦
                </span>
                <h3 className="font-display italic text-2xl sm:text-3xl text-[#26211E] font-medium leading-snug">
                  Lo que vas a trabajar en estos 21 días
                </h3>
              </div>

              {PRACTICE_PILLARS.map((pillar) => {
                const Icon = pillar.IconComponent;
                return (
                  <article
                    key={pillar.id}
                    data-practice-pillar
                    className="relative bg-[#FFFDF9] border border-[#E3DAC9] p-4.5 sm:p-5 rounded-sm shadow-xs shadow-[#26211E]/5 transition-all flex items-start gap-4 hover:border-[#8C7355]/40"
                  >
                    <div className="shrink-0 w-10 h-10 rounded-sm bg-[#F6F1E6] border border-[#DFD5C3] flex items-center justify-center text-[#7A5B1E] mt-0.5">
                      <Icon className="w-4 h-4" />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-baseline justify-between gap-2 mb-1">
                        <h4 className="font-display italic text-lg text-[#26211E] font-medium leading-none">
                          {pillar.name}
                        </h4>
                        <span className="font-mono text-[10px] text-[#8C7355] font-semibold uppercase tracking-wider">
                          {pillar.numeral}
                        </span>
                      </div>

                      <p className="font-sans text-xs text-[#7A5B1E] font-semibold mb-1">
                        {pillar.action}
                      </p>

                      <p className="font-body text-xs text-[#5A4F44] font-light leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>
                  </article>
                );
              })}
            </div>

          </div>

          {/* CINTA VISUAL CONCEPTUAL DE LOS 21 DÍAS (El Calendario de Continuidad) */}
          <div
            data-calendar-ribbon
            className="relative mx-auto max-w-5xl bg-[#FFFDF8] border border-[#DDD3C2] p-7 sm:p-9 lg:p-10 rounded-sm shadow-xl shadow-[#26211E]/6"
          >
            {/* Encabezado del calendario conceptual */}
            <div className="text-center mb-8 border-b border-[#EDE4D5] pb-5">
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#7A6B5B] block mb-1.5">
                ✦ CONTINUIDAD DEL PROCESO ✦
              </span>
              <h3 className="font-display italic text-2xl sm:text-3xl text-[#26211E] font-normal leading-snug">
                El ritmo de tu práctica durante las tres semanas
              </h3>
              <p className="font-body text-xs sm:text-sm text-[#615447] font-light max-w-xl mx-auto mt-2">
                Un avance progresivo dividido en tres momentos formativos, sin exigencias diarias rígidas.
              </p>
            </div>

            {/* 3 FASES FORMATIVAS CON INDICADORES DÍA A DÍA */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-8">
              
              {/* FASE 1: DÍAS 1 AL 7 */}
              <div className="bg-[#FAF5EA] border border-[#E3DAC9] p-5 rounded-sm flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3 border-b border-[#E8DFC8] pb-2">
                    <span className="font-mono text-[11px] font-bold text-[#7A5B1E] uppercase tracking-wider">
                      Días 01 – 07
                    </span>
                    <span className="font-sans text-[11px] font-semibold text-[#8C7355] uppercase">
                      Semana 1
                    </span>
                  </div>
                  <h4 className="font-display italic text-xl text-[#26211E] font-medium mb-1.5">
                    Conectar
                  </h4>
                  <p className="font-body text-xs text-[#5A4D40] font-light leading-relaxed mb-4">
                    Preparación del espacio sagrado, consagración de tu altar personal y primeros ejercicios de sintonización con tus Guías.
                  </p>
                </div>
                <div className="flex items-center gap-1.5 pt-2 border-t border-[#E8DFC8]">
                  {[1, 2, 3, 4, 5, 6, 7].map((d) => (
                    <span
                      key={d}
                      className="flex-1 py-1 text-center font-mono text-[10px] bg-[#FFFDF9] border border-[#DDD3C2] text-[#6B5A47] rounded-2xs"
                    >
                      {d}
                    </span>
                  ))}
                </div>
              </div>

              {/* FASE 2: DÍAS 8 AL 14 */}
              <div className="bg-[#FAF5EA] border border-[#E3DAC9] p-5 rounded-sm flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3 border-b border-[#E8DFC8] pb-2">
                    <span className="font-mono text-[11px] font-bold text-[#7A5B1E] uppercase tracking-wider">
                      Días 08 – 14
                    </span>
                    <span className="font-sans text-[11px] font-semibold text-[#8C7355] uppercase">
                      Semana 2
                    </span>
                  </div>
                  <h4 className="font-display italic text-xl text-[#26211E] font-medium mb-1.5">
                    Explorar
                  </h4>
                  <p className="font-body text-xs text-[#5A4D40] font-light leading-relaxed mb-4">
                    Práctica con la oración sagrada, calibración de tus sentidos de percepción y ejercicios guiados de canalización.
                  </p>
                </div>
                <div className="flex items-center gap-1.5 pt-2 border-t border-[#E8DFC8]">
                  {[8, 9, 10, 11, 12, 13, 14].map((d) => (
                    <span
                      key={d}
                      className="flex-1 py-1 text-center font-mono text-[10px] bg-[#FFFDF9] border border-[#DDD3C2] text-[#6B5A47] rounded-2xs"
                    >
                      {d}
                    </span>
                  ))}
                </div>
              </div>

              {/* FASE 3: DÍAS 15 AL 21 */}
              <div className="bg-[#FAF5EA] border border-[#E3DAC9] p-5 rounded-sm flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3 border-b border-[#E8DFC8] pb-2">
                    <span className="font-mono text-[11px] font-bold text-[#7A5B1E] uppercase tracking-wider">
                      Días 15 – 21
                    </span>
                    <span className="font-sans text-[11px] font-semibold text-[#8C7355] uppercase">
                      Semana 3
                    </span>
                  </div>
                  <h4 className="font-display italic text-xl text-[#26211E] font-medium mb-1.5">
                    Integrar
                  </h4>
                  <p className="font-body text-xs text-[#5A4D40] font-light leading-relaxed mb-4">
                    Realización de lecturas personales completas, formulación de preguntas y diseño de tu rutina espiritual propia.
                  </p>
                </div>
                <div className="flex items-center gap-1.5 pt-2 border-t border-[#E8DFC8]">
                  {[15, 16, 17, 18, 19, 20, 21].map((d) => (
                    <span
                      key={d}
                      className="flex-1 py-1 text-center font-mono text-[10px] bg-[#FFFDF9] border border-[#DDD3C2] text-[#6B5A47] rounded-2xs"
                    >
                      {d}
                    </span>
                  ))}
                </div>
              </div>

            </div>

            {/* Cita de Cierre de la Bitácora */}
            <div className="text-center pt-2">
              <blockquote className="font-display italic text-base sm:text-lg text-[#26211E] max-w-2xl mx-auto leading-relaxed">
                «Porque aprender a abrir tus Registros es el comienzo. Darte el espacio para practicar es lo que te permite incorporar esta experiencia a tu camino.»
              </blockquote>
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
    </TwentyOneDaysKinematicWrapper>
  );
}
