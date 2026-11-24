import React from "react";
import Image, { StaticImageData } from "next/image";
import { Sparkles, ArrowRight, ShieldCheck } from "lucide-react";
import HeroRevealWrapper from "@/components/animations/HeroRevealWrapper";
import { siteConfig } from "@/config/site.config";

export interface HeroFullWindowProps {
  titleLine1?: string;
  titleLine2?: string;
  subtitlePrimary?: string;
  subtitleSecondary?: string;
  datesBadge?: string;
  ctaLabel?: string;
  ctaHref?: string;
  backgroundImage?: string | StaticImageData;
  videoSrc?: string;
  priority?: boolean;
}

export default function HeroFullWindow({
  titleLine1 = "Iniciación Akáshica",
  titleLine2 = "El Camino de Regreso a tu Alma",
  subtitlePrimary = "Aprendé a abrir y leer tus propios Registros Akáshicos en una experiencia guiada de 3 semanas.",
  subtitleSecondary = "Un recorrido de aprendizaje, conexión y práctica para descubrir cómo acceder a tus Registros, conectar con tus Maestros y Guías espirituales y animarte a realizar tus primeras lecturas personales.",
  datesBadge = "16, 23 y 30 de enero de 2027 · De 10 a 13 hs (Mx)",
  ctaLabel = "QUIERO INICIAR MI CAMINO",
  ctaHref = siteConfig.hotmartUrl,
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
          alt={`${titleLine1} — ${titleLine2}`}
          fill
          sizes="100vw"
          priority={priority}
          className="object-cover object-center"
        />
      ) : (
        <div className="absolute inset-0 bg-radial-[at_50%_40%] from-plum-900/60 via-black to-black" />
      )}

      {/* Capa 1: Scrim neutral que atenúa el destello sin teñir de morado ni apagar los dorados del video */}
      <div className="absolute inset-0 bg-black/40 pointer-events-none" />

      {/* Capa 2: Gradiente vertical cinematográfico para fundir la base y elevar contraste del texto */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/55 pointer-events-none" />

      {/* Capa 3: Viñeta perimetral suave para focalizar el ojo en el centro */}
      <div className="absolute inset-0 bg-radial-[at_50%_50%] from-transparent via-black/15 to-black/65 pointer-events-none" />
    </>
  );

  const ContentNode = (
    <div className="flex flex-col items-center justify-center text-center px-4 sm:px-6 max-w-4xl mx-auto py-8">
      {/* 1. Badge de Fechas y Formato */}
      {datesBadge && (
        <div className="hero-content-item mb-4 sm:mb-5">
          <span className="inline-flex items-center gap-1.5 sm:gap-2 px-3.5 sm:px-4 py-1.5 rounded-full bg-black/40 border border-gold-400/40 text-gold-300 font-sans text-[10px] sm:text-xs uppercase tracking-[0.14em] sm:tracking-[0.2em] font-semibold backdrop-blur-md shadow-md">
            <span className="text-center">{datesBadge}</span>
          </span>
        </div>
      )}

      {/* 2. Título Principal en Dos Líneas con Diferente Jerarquía */}
      <h1 className="hero-content-item flex flex-col items-center gap-1.5 sm:gap-2.5 mb-4 sm:mb-6">
        <span className="font-sans text-xs sm:text-sm md:text-base uppercase tracking-[0.25em] sm:tracking-[0.3em] text-gold-300 font-semibold drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
          {titleLine1}
        </span>
        <span className="whitespace-nowrap font-display italic text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-normal leading-[1.08] tracking-tight drop-shadow-[0_4px_12px_rgba(0,0,0,0.95)]">
          {titleLine2}
        </span>
      </h1>

      {/* 3. Subtítulos y Copys Descriptivos */}
      <div className="hero-content-item flex flex-col gap-2 max-w-2xl mx-auto mb-7 sm:mb-8">
        {subtitlePrimary && (
          <p className="font-body font-extrabold text-sm sm:text-base md:text-lg text-gold-100  leading-relaxed drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]">
            {subtitlePrimary}
          </p>
        )}
        {subtitleSecondary && (
          <p
            className="font-body text-xs sm:text-sm md:text-base text-gold-100/95 font-normal leading-relaxed [text-shadow:0_2px_3px_rgba(0,0,0,1),0_6px_18px_rgba(0,0,0,0.95)]"
          >
            {subtitleSecondary}
          </p>
        )}
      </div>

      {/* 4. Botón CTA Directo a Hotmart */}
      <div className="hero-content-item flex flex-col items-center gap-2.5">
        <a
          href={ctaHref}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2.5 px-8 sm:px-10 py-4 rounded-full bg-gold-500 hover:bg-gold-400 text-plum-950 font-sans text-xs sm:text-sm font-bold uppercase tracking-[0.18em] shadow-xl shadow-gold-950/50 hover:shadow-2xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 cursor-pointer"
        >
          <span>{ctaLabel}</span>
          <ArrowRight className="w-4 h-4 stroke-[2.5]" aria-hidden="true" />
        </a>

       
      </div>
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
