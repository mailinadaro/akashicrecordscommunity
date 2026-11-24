"use client";

import React, { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Play, Pause, Volume2, VolumeX, RotateCcw } from "lucide-react";
import VideoTestimonialsKinematicWrapper from "@/components/animations/VideoTestimonialsKinematicWrapper";

export interface TestimonialItem {
  id: string;
  name: string;

  quote: string;
  videoSrc: string;
  posterSrc: string;
  objectPosition?: string;
  startTime?: number;
}

const TESTIMONIALS: TestimonialItem[] = [
  {
    id: "ruben",
    name: "Rubén",
    quote:
      "Solía ser muy escéptico y pensar en desarrollarme hacia dentro, ver adentro y conectarme con cosas que para mí eran muy difíciles de creer, como tener acceso a la lectura de mis propios registros akásicos...",
    videoSrc: "/testimonios/testimonioRuben.mp4",
    posterSrc: "/testimonios/poster-ruben.jpg",
    objectPosition: "object-[48%_center]",
    startTime: 1.8,
  },
  {
    id: "coco",
    name: "Coco Siles",
    quote:
      "Gracias a este hermoso proceso pude materializar la sabiduría que se encuentra en lo más profundo de mi ser, poderlo canalizar a través de una práctica constante y diaria.",
    videoSrc: "/testimonios/testimonioCoco.mp4",
    posterSrc: "/testimonios/poster-coco.jpg",
    objectPosition: "object-center",
    startTime: 0,
  },
  {
    id: "luzan",
    name: "Luzan",
    quote:
      "Para mí la comunidad ha sido parte fundamental de mi proceso. Se siente la calidez del grupo, me he sentido acompañada desde el principio...",
    videoSrc: "/testimonios/testimonioLuzan.mp4",
    posterSrc: "/testimonios/poster-luzan.jpg",
    objectPosition: "object-center",
    startTime: 0,
  },
  {
    id: "karina",
    name: "Karina",
    quote:
      "Antes me sentía perdida y sin dirección porque todo lo estaba haciendo a nivel más ego que desde mi alma... Después, ahora me siento en mayor conexión con mi propio camino del alma, con mi propia alma, con mis guías y con mis maestros.",
    videoSrc: "/testimonios/testimonioKarina.mp4",
    posterSrc: "/testimonios/poster-karina.jpg",
    objectPosition: "object-center",
    startTime: 0.6,
  },
];

export default function VideoTestimonials() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [playingId, setPlayingId] = useState<string | null>(null);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const videoRefs = useRef<Record<string, HTMLVideoElement | null>>({});

  const handleScroll = (direction: "left" | "right") => {
    if (!scrollContainerRef.current) return;
    const scrollAmount = 320;
    scrollContainerRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  const handleTogglePlay = (id: string) => {
    const currentVideo = videoRefs.current[id];
    if (!currentVideo) return;

    if (playingId === id) {
      currentVideo.pause();
      setPlayingId(null);
    } else {
      // Pausar cualquier otro video activo
      if (playingId && videoRefs.current[playingId]) {
        videoRefs.current[playingId]?.pause();
      }

      const item = TESTIMONIALS.find((t) => t.id === id);
      // Saltar el fade-in negro inicial y arrancar cuando empieza a hablar
      if (item && item.startTime && currentVideo.currentTime < item.startTime) {
        currentVideo.currentTime = item.startTime;
      }

      currentVideo.muted = isMuted;
      currentVideo.play().catch((err) => {
        console.warn("Autoplay bloqueado:", err);
      });
      setPlayingId(id);
    }
  };

  const handleToggleMute = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    const currentVideo = videoRefs.current[id];
    const newMuted = !isMuted;
    setIsMuted(newMuted);
    if (currentVideo) {
      currentVideo.muted = newMuted;
    }
  };

  const handleResetVideo = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    const currentVideo = videoRefs.current[id];
    const item = TESTIMONIALS.find((t) => t.id === id);
    if (currentVideo) {
      currentVideo.currentTime = item?.startTime || 0;
      currentVideo.play().catch(() => {});
      setPlayingId(id);
    }
  };

  return (
    <section
      id="testimonios"
      aria-labelledby="testimonios-heading"
      className="relative w-full bg-surface-secondary/40 text-text-primary py-20 sm:py-24 lg:py-32 overflow-hidden border-t border-border-default/60"
    >
      <VideoTestimonialsKinematicWrapper>
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* =========================================================
              1. ENCABEZADO EDITORIAL CENTRADO
              ========================================================= */}
          <div data-testimonial-header className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <span className="font-sans text-[11px] sm:text-xs uppercase tracking-[0.25em] text-gold-700 font-semibold mb-3 block">
              · Experiencias Compartidas ·
            </span>

            <h2
              id="testimonios-heading"
              className="font-display text-3xl sm:text-4xl lg:text-5xl text-plum-950 font-normal leading-[1.15] mb-3"
            >
              Lo que viven <span className="italic">quienes ya se iniciaron</span>
            </h2>

            <p className="font-body text-sm sm:text-base text-plum-600 font-light leading-relaxed max-w-2xl mx-auto">
            Historias de transformación en primera persona.
            </p>
          </div>

          {/* =========================================================
              2. CARRUSEL CON FLECHAS DE NAVEGACIÓN
              ========================================================= */}
          <div className="relative group/carousel">
            {/* Flecha Izquierda */}
            <button
              type="button"
              data-testimonial-nav
              onClick={() => handleScroll("left")}
              aria-label="Testimonio anterior"
              className="hidden sm:flex absolute -left-3 lg:-left-6 top-1/2 -translate-y-1/2 z-30 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-gold-500 hover:bg-gold-400 text-plum-950 items-center justify-center shadow-lg shadow-gold-900/15 cursor-pointer transition-all duration-300 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-gold-500"
            >
              <ChevronLeft className="w-6 h-6 stroke-[2.5]" aria-hidden="true" />
            </button>

            {/* Flecha Derecha */}
            <button
              type="button"
              data-testimonial-nav
              onClick={() => handleScroll("right")}
              aria-label="Siguiente testimonio"
              className="hidden sm:flex absolute -right-3 lg:-right-6 top-1/2 -translate-y-1/2 z-30 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-gold-500 hover:bg-gold-400 text-plum-950 items-center justify-center shadow-lg shadow-gold-900/15 cursor-pointer transition-all duration-300 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-gold-500"
            >
              <ChevronRight className="w-6 h-6 stroke-[2.5]" aria-hidden="true" />
            </button>

            {/* Track de Tarjetas */}
            <div
              ref={scrollContainerRef}
              className="flex items-stretch gap-5 sm:gap-6 overflow-x-auto scrollbar-none snap-x snap-mandatory py-4 px-2 sm:px-1 justify-start lg:justify-center"
            >
              {TESTIMONIALS.map((item) => {
                const isPlaying = playingId === item.id;

                return (
                  <div
                    key={item.id}
                    data-testimonial-card
                    onClick={() => handleTogglePlay(item.id)}
                    className="relative shrink-0 w-[260px] sm:w-[275px] aspect-[9/16] rounded-2xl sm:rounded-3xl overflow-hidden bg-plum-950 shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer snap-center group border border-border-default/60 hover:border-gold-500/70 select-none"
                  >
                  {/* Video Nativo con Adaptación Vertical y Poster Oficial */}
                  <video
                    ref={(el) => {
                      videoRefs.current[item.id] = el;
                    }}
                    src={item.videoSrc}
                    poster={item.posterSrc}
                    preload="metadata"
                    playsInline
                    loop
                    className={`w-full h-full object-cover transition-transform duration-500 ${
                      item.objectPosition || "object-center"
                    } ${!isPlaying ? "group-hover:scale-105" : ""}`}
                    onEnded={() => setPlayingId(null)}
                  />

                  {/* Gradiente Superior Protector */}
                  <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/50 via-black/10 to-transparent pointer-events-none z-10" />

                  {/* Gradiente Inferior para Cita y Datos */}
                  <div
                    className={`absolute inset-x-0 bottom-0 bg-gradient-to-t from-plum-950/95 via-plum-950/70 to-transparent px-4 sm:px-5 pt-20 pb-4 sm:pb-5 z-10 transition-opacity duration-300 ${
                      isPlaying ? "opacity-0 hover:opacity-100" : "opacity-100"
                    }`}
                  >
                    <p className="font-display italic text-xs leading-snug line-clamp-4 text-white/95 mb-2.5 drop-shadow-xs">
                      &ldquo;{item.quote}&rdquo;
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="font-sans text-[10px] sm:text-[11px] uppercase tracking-wider text-gold-300 font-semibold drop-shadow-xs">
                        {item.name}
                      </span>
                     
                    </div>
                  </div>

                  {/* Controles Flotantes Superiores cuando se está reproduciendo */}
                  {isPlaying && (
                    <div className="absolute top-3 right-3 z-20 flex items-center gap-1.5">
                      <button
                        type="button"
                        onClick={(e) => handleToggleMute(e, item.id)}
                        aria-label={isMuted ? "Activar sonido" : "Silenciar"}
                        className="w-8 h-8 rounded-full bg-black/60 hover:bg-black/80 backdrop-blur-md text-white flex items-center justify-center transition-colors shadow-xs"
                      >
                        {isMuted ? (
                          <VolumeX className="w-4 h-4 text-white/80" />
                        ) : (
                          <Volume2 className="w-4 h-4 text-gold-400" />
                        )}
                      </button>
                      <button
                        type="button"
                        onClick={(e) => handleResetVideo(e, item.id)}
                        aria-label="Reiniciar video"
                        className="w-8 h-8 rounded-full bg-black/60 hover:bg-black/80 backdrop-blur-md text-white flex items-center justify-center transition-colors shadow-xs"
                      >
                        <RotateCcw className="w-3.5 h-3.5 text-white/80" />
                      </button>
                    </div>
                  )}

                  {/* Botón Central de Play / Pause (Estilo Reel de la Referencia) */}
                  <div
                    className={`absolute inset-0 z-20 flex items-center justify-center transition-all duration-300 pointer-events-none ${
                      isPlaying ? "opacity-0 hover:opacity-100" : "opacity-100"
                    }`}
                  >
                    <div className="w-14 h-9 sm:w-16 sm:h-10 rounded-xl bg-white/95 text-plum-950 flex items-center justify-center shadow-lg shadow-black/30 group-hover:scale-110 group-hover:bg-gold-500 transition-all duration-300 backdrop-blur-xs">
                      {isPlaying ? (
                        <Pause className="w-5 h-5 fill-current" aria-hidden="true" />
                      ) : (
                        <Play className="w-5 h-5 fill-current translate-x-0.5" aria-hidden="true" />
                      )}
                    </div>
                  </div>

    
                </div>
              );
            })}
          </div>
        </div>

    
      </div>
    </VideoTestimonialsKinematicWrapper>
  </section>
);
}
