import React from "react";
import Image from "next/image";
import OtherTripsIntroWrapper from "@/components/animations/OtherTripsIntroWrapper";

export interface OtherTripsIntroProps {
  title?: string;
  images?: [string, string, string];
  className?: string;
}

const DEFAULT_INTRO_IMAGES: [string, string, string] = [
  "/generales/norte-Slide-01_1.jpg",
  "/generales/quebrada_yacoraite_contexto.jpg",
  "/generales/salta-and-jujuy-beauties-1-1200x700.webp",
];

export default function OtherTripsIntro({
  title = "Otras Expediciones",
  images = DEFAULT_INTRO_IMAGES,
  className = "",
}: OtherTripsIntroProps) {
  return (
    <OtherTripsIntroWrapper className={className}>
      <div className="relative w-full h-screen overflow-hidden flex items-center justify-center bg-earth-900">
        {/* Riel de 3 columnas horizontales con gaps en reposo y alturas asimétricas */}
        <div className="flex items-center justify-center w-full h-full px-0 lg:px-12 gap-0 lg:gap-3 overflow-hidden">
          {/* Columna Izquierda (Más baja con mt-16, oculta en mobile) */}
          <div
            data-intro-left
            className="lg:block relative w-1/3 h-[72vh] mt-16 overflow-hidden shrink-0 will-change-transform z-1"
          >
            <Image
              src={images[0]}
              alt="Expedición paisaje lateral 1"
              fill
              priority
              sizes="33vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-earth-900/20" />
          </div>

          {/* Columna Central (Dominante y alta en desktop, pantalla completa en mobile) */}
          <div
            data-intro-center
            className="relative w-full lg:w-1/3 h-full lg:h-[88vh] overflow-hidden shrink-0 will-change-transform z-2 flex items-center justify-center"
          >
            <Image
              src={images[1]}
              alt="Expedición paisaje central"
              fill
              priority
              sizes="100vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-earth-900/35" />

            {/* Título superpuesto en el centro exacto sobre la foto */}
            <div
              data-intro-title
              className="relative z-10 px-6 max-w-4xl mx-auto text-center flex flex-col items-center select-none will-change-transform"
            >
          
              <h2 className="font-serif tracking-widest text-4xl sm:text-5xl md:text-6xl lg:text-7xl uppercase text-warm-50 text-center select-none drop-shadow-md leading-tight">
                {title}
              </h2>
             
            </div>
          </div>

          {/* Columna Derecha (Altura intermedia con mt-8, oculta en mobile) */}
          <div
            data-intro-right
            className="lg:block relative w-1/3 h-[78vh] mt-8 overflow-hidden shrink-0 will-change-transform z-1"
          >
            <Image
              src={images[2]}
              alt="Expedición paisaje lateral 2"
              fill
              priority
              sizes="33vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-earth-900/20" />
          </div>
        </div>

        {/* Gradiente de niebla / desvanecimiento inferior */}
        <div
          data-intro-mist
          className="absolute inset-x-0 bottom-0 h-88 bg-linear-to-t from-earth-900 via-earth-900/90 to-transparent pointer-events-none z-5"
          aria-hidden="true"
        />
      </div>
    </OtherTripsIntroWrapper>
  );
}
