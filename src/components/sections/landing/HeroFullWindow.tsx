import React from "react";
import Image, { StaticImageData } from "next/image";
import HeroRevealWrapper from "@/components/animations/HeroRevealWrapper";

export interface HeroFullWindowProps {
  title?: string;
  subtitle?: string;
  priceTag?: string;
  backgroundImage?: string | StaticImageData;
  videoSrc?: string;
  priority?: boolean;
}

export default function HeroFullWindow({
  title = "Iniciación Akáshica: El Camino de Regreso a tu Alma",
  subtitle = "Aprendé a abrir y leer tus propios Registros Akáshicos a través de una experiencia guiada de 3 semanas.",
  priceTag = "Experiencia Guiada · Enero 2027",
  backgroundImage,
  videoSrc = "/hero/HeroVideo.mp4",
  priority = true,
}: HeroFullWindowProps) {
  const BackgroundNode = (
    <>
      {videoSrc ? (
        <video
          src={videoSrc}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
      ) : backgroundImage ? (
        <Image
          src={backgroundImage}
          alt={title}
          fill
          sizes="100vw"
          priority={priority}
          className="object-cover object-center"
        />
      ) : (
        <div className="absolute inset-0 bg-radial-[at_50%_40%] from-plum-600/40 via-plum-950 to-plum-950" />
      )}
      <div className="absolute inset-0 bg-plum-950/50 backdrop-brightness-75 pointer-events-none" />
      <div className="absolute inset-0 bg-linear-to-t from-plum-950 via-plum-950/30 to-transparent pointer-events-none" />
    </>
  );

  const ContentNode = (
    <div className="flex flex-col items-center justify-center text-center gap-4 px-6 max-w-4xl mx-auto">
      {priceTag && (
        <span className="hero-content-item text-xs sm:text-sm font-sans font-bold tracking-[0.3em] uppercase text-gold-300 border-b border-gold-300/30 pb-1">
          {priceTag}
        </span>
      )}

      <h1 className="hero-content-item text-4xl sm:text-6xl md:text-7xl font-display italic text-text-on-action leading-[1.05] tracking-tight">
        {title}
      </h1>

      {subtitle && (
        <p className="hero-content-item text-base sm:text-lg md:text-xl font-body font-light tracking-wide max-w-2xl text-gold-200/90 leading-relaxed mt-2">
          {subtitle}
        </p>
      )}
    </div>
  );

  return (
    <HeroFullWindowWrapper backgroundNode={BackgroundNode} contentNode={ContentNode} />
  );
}

function HeroFullWindowWrapper({
  backgroundNode,
  contentNode,
}: {
  backgroundNode: React.ReactNode;
  contentNode: React.ReactNode;
}) {
  return (
    <HeroRevealWrapper
      backgroundNode={backgroundNode}
      contentNode={contentNode}
    />
  );
}
