import React from "react";
import Image from "next/image";
import OtherTripsIntroWrapper from "@/components/animations/OtherTripsIntroWrapper";

export interface OtherTripsIntroProps {
  title?: string;
  images?: string[];
  className?: string;
}

export const DEFAULT_COMMUNITY_IMAGES = [
  "/comunidad/0H6A5949.jpg",
  "/comunidad/0H6A6016_edited.jpg",
  "/comunidad/0H6A5988.jpg",
];

export default function OtherTripsIntro({
  title = "Otras Experiencias",
  images = DEFAULT_COMMUNITY_IMAGES,
  className = "",
}: OtherTripsIntroProps) {
  return (
    <OtherTripsIntroWrapper className={className}>
      <div className="relative w-full h-screen overflow-hidden flex items-center justify-center bg-plum-950">
        <div className="flex items-center justify-center w-full h-full px-0 lg:px-12 gap-0 lg:gap-3 overflow-hidden">
          {/* Columna Izquierda */}
          <div
            data-intro-left
            className="lg:block relative w-1/3 h-[72vh] mt-16 overflow-hidden shrink-0 will-change-transform z-1 bg-plum-900 "
          >
            {images[0] ? (
              <Image
                src={images[0]}
                alt="Experiencia 1"
                fill
                priority
                sizes="33vw"
                className="object-cover object-center"
              />
            ) : (
              <div className="w-full h-full bg-linear-to-b from-plum-600/30 to-plum-950 flex items-center justify-center p-6 text-center">
                <span className="font-display italic text-2xl text-gold-300/40">Conexión</span>
              </div>
            )}
            <div className="absolute inset-0 bg-plum-950/20" />
          </div>

          {/* Columna Central */}
          <div
            data-intro-center
            className="relative w-full lg:w-1/3 h-full lg:h-[88vh] overflow-hidden shrink-0 will-change-transform z-2 flex items-center justify-center bg-plum-900 "
          >
            {images[1] ? (
              <Image
                src={images[1]}
                alt="Experiencia Central"
                fill
                priority
                sizes="100vw"
                className="object-cover object-center"
              />
            ) : (
              <div className="w-full h-full bg-linear-to-b from-plum-600/40 via-plum-900 to-plum-950 flex items-center justify-center p-8 text-center" />
            )}
            <div className="absolute inset-0 bg-plum-950/40" />

            {/* Título superpuesto */}
            <div
              data-intro-title
              className="relative z-10 px-6 max-w-4xl mx-auto text-center flex flex-col items-center select-none will-change-transform"
            >
              <h2 className="font-display italic tracking-tight text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-gold-200 text-center select-none drop-shadow-md leading-tight">
                {title}
              </h2>
            </div>
          </div>

          {/* Columna Derecha */}
          <div
            data-intro-right
            className="lg:block relative w-1/3 h-[78vh] mt-8 overflow-hidden shrink-0 will-change-transform z-1 bg-plum-900"
          >
            {images[2] ? (
              <Image
                src={images[2]}
                alt="Experiencia 3"
                fill
                priority
                sizes="33vw"
                className="object-cover object-center"
              />
            ) : (
              <div className="w-full h-full bg-linear-to-b from-plum-600/30 to-plum-950 flex items-center justify-center p-6 text-center">
                <span className="font-display italic text-2xl text-gold-300/40">Integración</span>
              </div>
            )}
            <div className="absolute inset-0 bg-plum-950/20" />
          </div>
        </div>

        {/* Gradiente de niebla */}
        <div
          data-intro-mist
          className="absolute inset-x-0 bottom-0 h-64 bg-linear-to-t from-plum-950 via-plum-950/80 to-transparent pointer-events-none z-5"
          aria-hidden="true"
        />
      </div>
    </OtherTripsIntroWrapper>
  );
}
