import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Sparkles, ArrowRight, Check, BookOpen } from "lucide-react";
import ItinerariesKinematicWrapper from "@/components/animations/ItinerariesKinematicWrapper";
import { Button } from "@/components/ui/atoms/button";

export interface ChapterItem {
  id: string;
  chapter: string;
  numeral: string;
  title: string;
  subtitle: string;
  date: string;
  description: string;
  topics: string[];
  takeaway: string;
  image: string;
  imageAlt: string;
  seasonKey: string;
}

const CHAPTERS: ChapterItem[] = [
  {
    id: "capitulo-1",
    chapter: "CAPÍTULO I",
    numeral: "I",
    title: "Capítulo I — Recordar y conectar",
    subtitle: "Abre el espacio para conectar con tus Registros",
    date: "Sábado 16 de enero | 10:00 a 13:00 h (México)",
    description:
      "En este primer encuentro vas a conocer qué son los Registros Akáshicos, comprender sus fundamentos y preparar el espacio interno y externo para comenzar esta experiencia.",
    topics: [
      "Qué son los Registros Akáshicos y cómo acercarte a este campo de información.",
      "La autonomía espiritual y la conexión con tu propia alma.",
      "El reconocimiento de tus Maestros y Guías espirituales.",
      "La preparación para acceder a tus Registros.",
      "Una meditación guiada de conexión.",
      "Un viaje de conexión con tus Maestros y Guías.",
      "La creación y consagración de tu espacio sagrado y altar.",
    ],
    takeaway: "Una primera experiencia de conexión y las bases para continuar tu aprendizaje.",
    image: "/jornadas/jornada1.jpg",
    imageAlt: "Capítulo I — Recordar y conectar",
    seasonKey: "capitulo-1",
  },
  {
    id: "capitulo-2",
    chapter: "CAPÍTULO II",
    numeral: "II",
    title: "Capítulo II — Escuchar y calibrar",
    subtitle: "Aprende a reconocer cómo recibes la información",
    date: "Sábado 23 de enero | 10:00 a 13:00 h (México)",
    description:
      "En este capítulo vas a profundizar en el proceso de apertura y explorar tus propias formas de percepción. También trabajarás con las dudas, los miedos y las resistencias que pueden aparecer al comenzar a canalizar.",
    topics: [
      "Las resistencias mentales, los miedos y las dudas al canalizar.",
      "Las distintas formas de percepción y recepción de información.",
      "La oración sagrada de apertura y cierre de los Registros.",
      "La sintonización con el mantra ANAHIÚ.",
      "Ejercicios de percepción y conexión.",
      "Escritura automática.",
      "Prácticas guiadas de canalización.",
      "Tu primera lectura personal.",
    ],
    takeaway: "Herramientas para comenzar a reconocer tu manera de recibir información y dar tus primeros pasos en la lectura de tus propios Registros.",
    image: "/jornadas/jornada2.jpg",
    imageAlt: "Capítulo II — Escuchar y calibrar",
    seasonKey: "capitulo-2",
  },
  {
    id: "capitulo-3",
    chapter: "CAPÍTULO III",
    numeral: "III",
    title: "Capítulo III — Integrar y sostener",
    subtitle: "Lleva lo aprendido a tu propia experiencia",
    date: "Sábado 30 de enero | 10:00 a 13:00 h (México)",
    description:
      "En el último encuentro vas a profundizar en la práctica de lectura, aprender a formular preguntas y explorar cómo relacionar la información recibida con situaciones concretas de tu vida.",
    topics: [
      "Cómo formular preguntas profundas y significativas.",
      "Cómo recibir, interpretar y relacionar los mensajes.",
      "Cómo explorar la información recibida y conectarla con tu vida cotidiana.",
      "Una práctica de lectura personal completa.",
      "La integración de tu experiencia.",
      "El diseño de tu propia rutina espiritual.",
      "La creación de tu Mapa de Práctica Espiritual.",
      "Un cierre grupal de integración.",
    ],
    takeaway: "Una experiencia de lectura personal completa y herramientas para continuar desarrollando tu práctica.",
    image: "/jornadas/jornada3.jpg",
    imageAlt: "Capítulo III — Integrar y sostener",
    seasonKey: "capitulo-3",
  },
];

export default function ItinerariesListing({
  id = "itinerarios",
  className = "",
  items = CHAPTERS,
  sectionEyebrow = "✦ TU FORMACIÓN PASO A PASO ✦",
  sectionTitle = "Tu camino de iniciación, paso a paso",
  sectionSubtitle = "Tres encuentros en vivo para aprender, experimentar y comenzar a realizar tus propias lecturas de Registros Akáshicos.",
  sectionDescription = "Cada capítulo tiene un propósito dentro del recorrido. Avanzarás progresivamente, incorporando herramientas y llevando lo aprendido a tu propia experiencia.",
  outroHeading = "Tres encuentros para comprender, experimentar y practicar.",
  outroText = "Un recorrido guiado para que no te quedes solamente con la teoría: puedas aprender el método y comenzar a abrir tus propios Registros Akáshicos.",
}: {
  id?: string;
  className?: string;
  items?: ChapterItem[];
  sectionEyebrow?: string;
  sectionTitle?: string;
  sectionSubtitle?: string;
  sectionDescription?: string;
  outroHeading?: string;
  outroText?: string;
}) {
  return (
    <section
      id={id}
      aria-label="Capítulos de la Iniciación: Tu camino paso a paso"
      className={`relative w-full bg-[#FAF8F5] pt-20 lg:pt-28 pb-20 lg:pb-28 ${className}`}
    >
      {/* Halo ambiental áureo sutil */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[950px] h-[400px] bg-gold-500/8 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      {/* ENCABEZADO CENTRADO EDITORIAL */}
      <div className="relative z-10 mx-auto mb-16 lg:mb-20 max-w-4xl px-6 text-center">
        {sectionEyebrow && (
          <span className="font-sans text-[11px] sm:text-xs font-semibold uppercase tracking-[0.25em] text-gold-700 block mb-3.5">
            {sectionEyebrow}
          </span>
        )}

        <h2 className="font-display italic text-3xl sm:text-5xl lg:text-6xl text-plum-950 font-normal leading-[1.12] tracking-tight mb-5">
          {sectionTitle}
        </h2>

        {sectionSubtitle && (
          <p className="font-display italic text-lg sm:text-xl md:text-2xl text-plum-900 font-normal leading-relaxed mb-4 max-w-3xl mx-auto">
            {sectionSubtitle}
          </p>
        )}

        {sectionDescription && (
          <p className="font-body text-sm sm:text-base lg:text-lg leading-relaxed text-plum-600 font-light max-w-2xl mx-auto">
            {sectionDescription}
          </p>
        )}
      </div>

      {/* CONTENEDOR CINEMÁTICO FULL WIDTH (Sin sidebar, imágenes a pantalla completa de borde a borde) */}
      <div className="relative z-10 w-full px-0">
        <ItinerariesKinematicWrapper>
          <div className="relative w-full flex flex-col gap-0">
            {items.map((item, index) => (
              <article
                key={item.id}
                data-itinerary-card
                data-season-key={item.seasonKey}
                className="relative w-full h-screen min-h-screen lg:sticky lg:top-0"
                style={{ zIndex: index + 1 }}
              >
                <div className="group block relative w-full h-full min-h-screen overflow-hidden rounded-none bg-plum-950 border-y border-gold-500/20 shadow-2xl">
                  {/* Imagen de fondo a pantalla completa (Full Width / 100vw) */}
                  <div className="absolute inset-0 w-full h-full">
                    <Image
                      src={item.image}
                      alt={item.imageAlt}
                      fill
                      priority={index === 0}
                      sizes="100vw"
                      className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>

                  {/* Gradiente cinemático de alto contraste editorial */}
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-plum-950 via-plum-950/85 via-50% to-plum-950/45 pointer-events-none"
                    aria-hidden="true"
                  />
                  <div
                    className="absolute inset-0 bg-black/25 pointer-events-none"
                    aria-hidden="true"
                  />

                  {/* Capa de textos sincronizada con GSAP */}
                  <div data-card-layer className="contents">
                    {/* BLOQUE SUPERIOR: Capítulo en números romanos, Fecha y Títulos */}
                    <div className="absolute top-8 left-6 sm:top-10 sm:left-12 lg:top-12 lg:left-16 xl:left-20 max-w-3xl z-10 pointer-events-none">
                      <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-plum-950/85 border border-gold-400/50 text-gold-300 text-[10px] sm:text-xs font-sans uppercase tracking-[0.25em] font-bold mb-3.5 shadow-lg backdrop-blur-md">
                        <BookOpen className="w-3.5 h-3.5 text-gold-400" aria-hidden="true" />
                        <span>{item.chapter} · {item.date}</span>
                      </div>

                      <h3 className="font-display italic text-3xl sm:text-4xl lg:text-5xl text-white font-normal leading-[1.08] tracking-tight drop-shadow-xl">
                        {item.title}
                      </h3>

                      {item.subtitle && (
                        <p className="font-display italic text-base sm:text-lg lg:text-xl text-gold-200 font-normal mt-2.5 drop-shadow-md">
                          {item.subtitle}
                        </p>
                      )}
                    </div>

                    {/* BLOQUE INFERIOR: Distribución en 2 Columnas con margen seguro respecto a WhatsApp */}
                    <div
                      data-card-content
                      className="absolute bottom-8 left-6 right-6 sm:bottom-10 sm:left-12 sm:right-12 lg:bottom-12 lg:left-16 lg:right-28 xl:left-20 xl:right-36 z-10"
                    >
                      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 xl:gap-14 items-end">
                        
                        {/* Columna Izquierda: Descripción narrativa, "Te llevas" y Botón CTA */}
                        <div className="lg:col-span-6 flex flex-col justify-end text-left max-w-xl">
                          <p className="font-body text-xs sm:text-sm lg:text-[14.5px] text-white font-light leading-relaxed mb-4 drop-shadow-md">
                            {item.description}
                          </p>

                          {/* Recuadro "Te llevas:" */}
                          <div className="p-3.5 sm:p-4 bg-plum-950/85 border-l-2 border-gold-400 text-xs sm:text-[13px] text-white/95 font-body leading-relaxed backdrop-blur-md mb-6 shadow-xl">
                            <span className="font-sans font-bold text-gold-400 uppercase tracking-wider text-[10.5px] block mb-1">
                              ✦ Te llevas:
                            </span>
                            <p className="text-white/90 font-light">
                              {item.takeaway}
                            </p>
                          </div>

                          <div>
                            <Link href="#inscripcion" className="inline-block">
                              <Button
                                variant="glass"
                                size="default"
                                className="group/cta w-fit px-8 py-4 h-auto text-xs font-bold tracking-widest uppercase bg-gold-500 hover:bg-gold-400 text-plum-950 border border-gold-400/60 transition-all duration-300 shadow-2xl gap-2 cursor-pointer rounded-none"
                              >
                                <span>Quiero formar parte</span>
                                <ArrowRight
                                  className="w-3.5 h-3.5 transform transition-transform duration-300 group-hover/cta:translate-x-1 text-plum-950"
                                  aria-hidden="true"
                                />
                              </Button>
                            </Link>
                          </div>
                        </div>

                        {/* Columna Derecha: Panel "Vamos a trabajar en:" */}
                        <div className="lg:col-span-6 bg-plum-950/85 backdrop-blur-md border border-gold-400/40 p-5 sm:p-6 rounded-none shadow-2xl max-w-xl">
                          <span className="text-[10px] sm:text-[11px] font-sans font-bold text-gold-300 uppercase tracking-wider block mb-3">
                            Vamos a trabajar en:
                          </span>
                          <ul className="space-y-1.5 text-xs sm:text-[12.5px] font-body text-white font-light max-h-[220px] sm:max-h-[260px] overflow-y-auto pr-2 custom-scrollbar">
                            {item.topics.map((topic, tIdx) => (
                              <li key={tIdx} className="flex items-start gap-2.5">
                                <Check className="w-3.5 h-3.5 text-gold-400 shrink-0 mt-0.5" aria-hidden="true" />
                                <span className="leading-snug">{topic}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </ItinerariesKinematicWrapper>

        {/* CIERRE Y TRANSICIÓN EDITORIAL DE LA SECCIÓN */}
        <div className="relative z-10 mt-20 lg:mt-28 max-w-4xl mx-auto px-6 text-center">
          <div className="p-8 sm:p-12 bg-white border border-gold-400/30 rounded-none shadow-xl">
            <span className="font-sans text-[11px] uppercase tracking-[0.25em] text-gold-700 font-bold block mb-3">
              ✦ TRES ENCUENTROS EN VIVO ✦
            </span>

            <h3 className="font-display italic text-2xl sm:text-3xl lg:text-4xl text-plum-950 font-normal leading-tight mb-4">
              {outroHeading}
            </h3>

            <p className="font-body text-sm sm:text-base text-plum-600 font-light leading-relaxed max-w-2xl mx-auto mb-8">
              {outroText}
            </p>

            <Link href="#inscripcion" className="inline-block">
              <Button
                variant="glass"
                size="default"
                className="group/cta px-9 py-4 h-auto text-xs font-bold tracking-widest uppercase bg-gold-500 hover:bg-gold-400 text-plum-950 border border-gold-400/60 transition-all duration-300 shadow-2xl gap-2.5 cursor-pointer rounded-none"
              >
                <span>Inscribirme a la iniciación</span>
                <ArrowRight
                  className="w-4 h-4 transform transition-transform duration-300 group-hover/cta:translate-x-1 text-plum-950"
                  aria-hidden="true"
                />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
