import React from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import { siteConfig } from "@/config/site.config";
import { ScrollytellingCanvasWrapper } from "@/components/animations/ScrollytellingCanvasWrapper";
import gifFrames from "@/data/gifFrames.json";

export default function ScrollytellingDemoSection({
  id = "hero-scrollytelling-v2",
  className = "",
}: {
  id?: string;
  className?: string;
}) {
  return (
    <section
      id={id}
      aria-label="Versión 02: Hero con Scrollytelling por Actos Narrativos (Giff 1)"
      className={`w-full relative border-t-2 border-dashed border-gold-500/40 ${className}`}
    >
      <ScrollytellingCanvasWrapper
        folder="giff"
        frames={gifFrames}
        scrollHeight="h-[320vh]"
      >
        <div className="relative w-full h-full flex items-center justify-center pointer-events-auto">
          <div className="grid grid-cols-1 grid-rows-1 items-center justify-center w-full max-w-4xl mx-auto px-4 sm:px-6">
            
            {/* ACTO 1: Apertura y Título (Visible 0% - 25% del scroll) */}
            <div
              data-scrolly-act="1"
              className="col-start-1 row-start-1 flex flex-col items-center justify-center text-center py-6"
            >
              {/* Indicador de Versión */}
              <div className="mb-3">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold-500/20 border border-gold-400/60 text-gold-300 font-mono text-[10px] uppercase tracking-widest font-semibold backdrop-blur-md">
                  <Sparkles className="w-3 h-3 text-gold-300" />
                  VERSIÓN 02 · ACTO 1: APERTURA (GIFF 1 · 190 CUADROS)
                </span>
              </div>

              {/* Badge de Fechas y Formato */}
              <div className="mb-4 sm:mb-5">
                <span className="inline-flex items-center gap-1.5 sm:gap-2 px-3.5 sm:px-4 py-1.5 rounded-full bg-black/40 border border-gold-400/40 text-gold-300 font-sans text-[10px] sm:text-xs uppercase tracking-[0.14em] sm:tracking-[0.2em] font-semibold backdrop-blur-md shadow-md">
                  <span className="text-center">16, 23 y 30 de enero de 2027 · 10:00 a 13:30 h (horario de México)</span>
                </span>
              </div>

              {/* Título Principal */}
              <h2 className="flex flex-col items-center gap-1.5 sm:gap-2.5 mb-4 sm:mb-6">
                <span className="font-sans text-xs sm:text-sm md:text-base uppercase tracking-[0.25em] sm:tracking-[0.3em] text-gold-300 font-semibold drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
                  Iniciación Akáshica
                </span>
                <span className="whitespace-nowrap font-display italic text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-normal leading-[1.08] tracking-tight drop-shadow-[0_4px_12px_rgba(0,0,0,0.95)]">
                  El Camino de Regreso a tu Alma
                </span>
              </h2>

              {/* Síntesis Inmediata */}
              <p className="font-body font-extrabold text-sm sm:text-base md:text-lg text-gold-100 max-w-2xl mx-auto leading-relaxed drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]">
                Aprende a abrir y leer tus propios Registros Akáshicos en una experiencia guiada de 3 semanas.
              </p>

              {/* Guía de interacción con el scroll */}
              <div className="mt-8 text-[11px] font-mono text-gold-300/80 tracking-widest uppercase flex items-center gap-2">
                <span>Haz scroll para adentrarte en el portal</span>
                <span className="animate-bounce">↓</span>
              </div>
            </div>

            {/* ACTO 2: El Recorrido y Filosofía (Visible 30% - 65% del scroll) */}
            <div
              data-scrolly-act="2"
              className="col-start-1 row-start-1 flex flex-col items-center justify-center text-center py-6 opacity-0"
            >
              {/* Indicador de Versión */}
              <div className="mb-3">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold-500/20 border border-gold-400/60 text-gold-300 font-mono text-[10px] uppercase tracking-widest font-semibold backdrop-blur-md">
                  <Sparkles className="w-3 h-3 text-gold-300" />
                  VERSIÓN 02 · ACTO 2: LA EXPERIENCIA
                </span>
              </div>

              <div className="mb-4">
                <span className="inline-flex items-center px-3.5 py-1 rounded-full bg-black/50 border border-gold-400/40 text-gold-200 font-sans text-[10px] sm:text-xs uppercase tracking-[0.2em] font-semibold">
                  3 ENCUENTROS EN VIVO + 21 DÍAS DE PRÁCTICA
                </span>
              </div>

              {/* Gran Cita de Contenido */}
              <div className="max-w-2xl mx-auto mb-6">
                <p className="font-display italic text-2xl sm:text-3xl md:text-4xl text-white font-normal leading-relaxed drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)] mb-4">
                  “Un recorrido de aprendizaje, conexión y práctica para descubrir cómo acceder a tus Registros y conectar con tus Maestros y Guías espirituales.”
                </p>
                <p className="font-body text-sm sm:text-base md:text-lg text-gold-200/90 leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
                  La conexión se aprende. La confianza se construye practicando paso a paso.
                </p>
              </div>

              <div className="text-[11px] font-mono text-gold-300/70 tracking-widest uppercase flex items-center gap-2">
                <span>Continúa el scroll hacia el clímax</span>
                <span className="animate-bounce">↓</span>
              </div>
            </div>

            {/* ACTO 3: El Clímax y Llamado a la Acción (Visible 70% - 100% del scroll) */}
            <div
              data-scrolly-act="3"
              className="col-start-1 row-start-1 flex flex-col items-center justify-center text-center py-6 opacity-0"
            >
              {/* Indicador de Versión */}
              <div className="mb-3">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold-500/20 border border-gold-400/60 text-gold-300 font-mono text-[10px] uppercase tracking-widest font-semibold backdrop-blur-md">
                  <Sparkles className="w-3 h-3 text-gold-300" />
                  VERSIÓN 02 · ACTO 3: EL CLÍMAX (CTA)
                </span>
              </div>

              <div className="mb-4">
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-500/20 border border-gold-400/50 text-gold-200 font-sans text-[10px] sm:text-xs uppercase tracking-[0.2em] font-bold">
                  INICIO: 16 DE ENERO DE 2027 · CUPOS LIMITADOS
                </span>
              </div>

              {/* Título de Cierre */}
              <h3 className="whitespace-nowrap font-display italic text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-normal leading-[1.08] tracking-tight drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)] mb-4">
                El Camino de Regreso a tu Alma
              </h3>

              <p className="font-body text-sm sm:text-base text-gold-100 max-w-xl mx-auto leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] mb-8">
                Atrévete a realizar tus primeras lecturas personales y habitar tu vida con mayor dirección, discernimiento y soberanía interior.
              </p>

              {/* Botón CTA Directo a Hotmart */}
              <div className="flex flex-col items-center gap-2.5">
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
            </div>

          </div>
        </div>
      </ScrollytellingCanvasWrapper>
    </section>
  );
}
