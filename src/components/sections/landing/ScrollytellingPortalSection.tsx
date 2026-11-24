import React from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import { siteConfig } from "@/config/site.config";
import { ScrollytellingCanvasWrapper } from "@/components/animations/ScrollytellingCanvasWrapper";
import gifFrames2 from "@/data/gifFrames2.json";

export default function ScrollytellingPortalSection({
  id = "hero-scrollytelling-v3",
  className = "",
}: {
  id?: string;
  className?: string;
}) {
  return (
    <section
      id={id}
      aria-label="Versión 03: Hero con Scrollytelling y Parallax Cinético (Giff 2)"
      className={`w-full relative border-t-2 border-dashed border-gold-500/40 ${className}`}
    >
      <ScrollytellingCanvasWrapper
        folder="giff 2"
        frames={gifFrames2}
        scrollHeight="h-[320vh]"
      >
        <div className="flex flex-col items-center justify-center text-center px-4 sm:px-6 max-w-4xl mx-auto py-8 relative pointer-events-auto">
          {/* Indicador de Comparación de Versión */}
          <div data-scrolly-kinetic="version" className="mb-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold-500/20 border border-gold-400/60 text-gold-300 font-mono text-[10px] uppercase tracking-widest font-semibold backdrop-blur-md">
              <Sparkles className="w-3 h-3 text-gold-300" />
              VERSIÓN 03 · PARALLAX CINÉTICO (GIFF 2 · 240 CUADROS)
            </span>
          </div>

          {/* 1. Badge de Fechas y Formato */}
          <div data-scrolly-kinetic="badge" className="mb-4 sm:mb-5">
            <span className="inline-flex items-center gap-1.5 sm:gap-2 px-3.5 sm:px-4 py-1.5 rounded-full bg-black/40 border border-gold-400/40 text-gold-300 font-sans text-[10px] sm:text-xs uppercase tracking-[0.14em] sm:tracking-[0.2em] font-semibold backdrop-blur-md shadow-md">
              <span className="text-center">16, 23 y 30 de enero de 2027 · 10:00 a 13:30 h (horario de México)</span>
            </span>
          </div>

          {/* 2. Título Principal en Dos Líneas */}
          <h2 className="flex flex-col items-center gap-1.5 sm:gap-2.5 mb-4 sm:mb-6">
            <span
              data-scrolly-kinetic="eyebrow"
              className="font-sans text-xs sm:text-sm md:text-base uppercase tracking-[0.25em] sm:tracking-[0.3em] text-gold-300 font-semibold drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]"
            >
              Iniciación Akáshica
            </span>
            <span
              data-scrolly-kinetic="title"
              className="whitespace-nowrap font-display italic text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-normal leading-[1.08] tracking-tight drop-shadow-[0_4px_12px_rgba(0,0,0,0.95)]"
            >
              El Camino de Regreso a tu Alma
            </span>
          </h2>

          {/* 3. Subtítulos y Copys Descriptivos con Parallax Diferencial */}
          <div className="flex flex-col gap-2 max-w-2xl mx-auto mb-7 sm:mb-8">
            <p
              data-scrolly-kinetic="sub1"
              className="font-body font-extrabold text-sm sm:text-base md:text-lg text-gold-100 leading-relaxed drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]"
            >
              Aprende a abrir y leer tus propios Registros Akáshicos en una experiencia guiada de 3 semanas.
            </p>
            <p
              data-scrolly-kinetic="sub2"
              className="font-body text-xs sm:text-sm md:text-base text-gold-100/95 font-normal leading-relaxed [text-shadow:0_2px_3px_rgba(0,0,0,1),0_6px_18px_rgba(0,0,0,0.95)]"
            >
              Un recorrido de aprendizaje, conexión y práctica para descubrir cómo acceder a tus Registros, conectar con tus Maestros y Guías espirituales y animarte a realizar tus primeras lecturas personales.
            </p>
          </div>

          {/* 4. Botón CTA Directo a Hotmart que Pulsa y Resalta al Scrollear */}
          <div data-scrolly-kinetic="cta" className="flex flex-col items-center gap-2.5">
            <a
              href={siteConfig.hotmartUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 px-8 sm:px-10 py-4 rounded-full bg-gold-500 hover:bg-gold-400 text-plum-950 font-sans text-xs sm:text-sm font-bold uppercase tracking-[0.18em] shadow-xl shadow-gold-950/50 hover:shadow-2xl hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 cursor-pointer"
            >
              <span>QUIERO INICIAR MI CAMINO</span>
              <ArrowRight className="w-4 h-4 stroke-[2.5]" aria-hidden="true" />
            </a>
          </div>

          {/* Guía de interacción con el scroll */}
          <div data-scrolly-kinetic="hint" className="mt-8 text-[11px] font-mono text-gold-300/80 tracking-widest uppercase flex items-center gap-2">
            <span>Haz scroll para animar los fotogramas y el texto</span>
            <span className="animate-bounce">↓</span>
          </div>
        </div>
      </ScrollytellingCanvasWrapper>
    </section>
  );
}
