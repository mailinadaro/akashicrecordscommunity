"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import defaultFrames from "@/data/gifFrames.json";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

interface ScrollytellingCanvasWrapperProps {
  children?: React.ReactNode;
  className?: string;
  folder?: string;
  frames?: string[];
  scrollHeight?: string;
  theme?: "dark" | "light";
}

export function ScrollytellingCanvasWrapper({
  children,
  className = "",
  folder = "giff",
  frames = defaultFrames,
  scrollHeight = "h-[350vh]",
  theme = "dark",
}: ScrollytellingCanvasWrapperProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<(HTMLImageElement | null)[]>([]);
  const [loadProgress, setLoadProgress] = useState(0);

  // Precarga progresiva de los fotogramas
  useEffect(() => {
    let isMounted = true;
    const totalFrames = frames.length;
    imagesRef.current = new Array(totalFrames).fill(null);

    // 1. Precargar cuadro 0 inmediatamente para render inicial
    const firstImg = new Image();
    firstImg.src = `/${folder}/${frames[0]}`;
    firstImg.onload = () => {
      if (!isMounted) return;
      imagesRef.current[0] = firstImg;
      setLoadProgress(1);
      drawFrame(0);
    };

    // 2. Cargar el resto de cuadros en segundo plano
    let loadedCount = 1;
    const loadRemaining = () => {
      for (let i = 1; i < totalFrames; i++) {
        const img = new Image();
        img.src = `/${folder}/${frames[i]}`;
        img.onload = () => {
          if (!isMounted) return;
          imagesRef.current[i] = img;
          loadedCount++;
          if (loadedCount % 15 === 0 || loadedCount === totalFrames) {
            setLoadProgress(Math.round((loadedCount / totalFrames) * 100));
            if (loadedCount === totalFrames) {
              ScrollTrigger.refresh();
            }
          }
        };
      }
    };

    if (typeof window !== "undefined" && "requestIdleCallback" in window) {
      window.requestIdleCallback(() => loadRemaining());
    } else {
      setTimeout(loadRemaining, 100);
    }

    return () => {
      isMounted = false;
    };
  }, [folder, frames]);

  // Función matemática de dibujo con object-fit: cover y DPR
  const drawFrame = (frameIndex: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let img = imagesRef.current[frameIndex];
    if (!img || !img.complete) {
      for (let i = frameIndex - 1; i >= 0; i--) {
        if (imagesRef.current[i] && imagesRef.current[i]?.complete) {
          img = imagesRef.current[i];
          break;
        }
      }
    }
    if (!img) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const width = canvas.clientWidth || (typeof window !== "undefined" ? window.innerWidth : 1280);
    const height = canvas.clientHeight || (typeof window !== "undefined" ? window.innerHeight : 720);

    if (canvas.width !== width * dpr || canvas.height !== height * dpr) {
      canvas.width = width * dpr;
      canvas.height = height * dpr;
    }

    ctx.save();
    ctx.scale(dpr, dpr);

    const hRatio = width / img.width;
    const vRatio = height / img.height;
    const ratio = Math.max(hRatio, vRatio);
    const centerShiftX = (width - img.width * ratio) / 2;
    const centerShiftY = (height - img.height * ratio) / 2;

    ctx.clearRect(0, 0, width, height);
    ctx.drawImage(
      img,
      0,
      0,
      img.width,
      img.height,
      centerShiftX,
      centerShiftY,
      img.width * ratio,
      img.height * ratio
    );
    ctx.restore();
  };

  useEffect(() => {
    const handleResize = () => {
      drawFrame(0);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // GSAP ScrollTrigger Scrubbing
  useGSAP(
    () => {
      const root = containerRef.current;
      if (!root) return;

      const triggerArea = root.querySelector("[data-scrolly-track]") as HTMLElement | null;
      const beats = gsap.utils.toArray<HTMLElement>("[data-scrolly-beat]", root);
      if (!triggerArea) return;

      const totalFrames = frames.length - 1;
      const playhead = { frame: 0 };

      const mm = gsap.matchMedia();

      mm.add(
        {
          reduceMotion: "(prefers-reduced-motion: reduce)",
          all: "(min-width: 0px)",
        },
        (context) => {
          const { reduceMotion } = context.conditions as { reduceMotion: boolean };

          if (reduceMotion) {
            drawFrame(0);
            return;
          }

          // 1. Timeline Maestro (Canvas + Copy sincronizados en el mismo Scrub)
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: triggerArea,
              start: "top top",
              end: "bottom bottom",
              scrub: 0.6,
              onUpdate: (self) => {
                const targetFrame = Math.round(self.progress * totalFrames);
                drawFrame(targetFrame);
              },
            },
          });

          // Animación de fotogramas del Canvas a lo largo de duration: 1.0
          tl.to(playhead, {
            frame: totalFrames,
            ease: "none",
            duration: 1,
          }, 0);

          // 2. Sincronización de Actos Narrativos sobre el mismo Timeline Maestro
          const act1 = root.querySelector<HTMLElement>('[data-scrolly-act="1"]');
          const act2 = root.querySelector<HTMLElement>('[data-scrolly-act="2"]');
          const act3 = root.querySelector<HTMLElement>('[data-scrolly-act="3"]');

          if (act1 && act2 && act3) {
            // Estados iniciales asegurados
            gsap.set(act1, { opacity: 1, y: 0, autoAlpha: 1 });
            gsap.set(act2, { opacity: 0, y: 25, autoAlpha: 0, filter: "blur(4px)" });
            gsap.set(act3, { opacity: 0, y: 25, autoAlpha: 0, filter: "blur(4px)" });

            // Acto 1: visible de 0 a 0.20, desvanece de 0.20 a 0.32
            tl.to(act1, { y: -25, autoAlpha: 0, filter: "blur(4px)", duration: 0.12, ease: "power1.inOut" }, 0.20);

            // Acto 2: entra de 0.25 a 0.37, visible hasta 0.58, desvanece de 0.58 a 0.68
            tl.to(act2, { y: 0, autoAlpha: 1, filter: "blur(0px)", duration: 0.12, ease: "power1.inOut" }, 0.25);
            tl.to(act2, { y: -25, autoAlpha: 0, filter: "blur(4px)", duration: 0.10, ease: "power1.inOut" }, 0.58);

            // Acto 3: entra de 0.62 a 0.74, se mantiene plenamente activo de 0.74 a 1.00
            tl.to(act3, { y: 0, autoAlpha: 1, filter: "blur(0px)", duration: 0.12, ease: "power1.inOut" }, 0.62);
          }

          // B. Modo Cinético Parallax Continuo (data-scrolly-kinetic)
          const kineticElems = root.querySelectorAll<HTMLElement>("[data-scrolly-kinetic]");
          if (kineticElems.length > 0) {
            const hint = root.querySelector<HTMLElement>('[data-scrolly-kinetic="hint"]');
            const badge = root.querySelector<HTMLElement>('[data-scrolly-kinetic="badge"]');
            const eyebrow = root.querySelector<HTMLElement>('[data-scrolly-kinetic="eyebrow"]');
            const title = root.querySelector<HTMLElement>('[data-scrolly-kinetic="title"]');
            const sub1 = root.querySelector<HTMLElement>('[data-scrolly-kinetic="sub1"]');
            const sub2 = root.querySelector<HTMLElement>('[data-scrolly-kinetic="sub2"]');
            const cta = root.querySelector<HTMLElement>('[data-scrolly-kinetic="cta"]');

            if (hint) {
              gsap.to(hint, {
                autoAlpha: 0,
                y: -15,
                scrollTrigger: {
                  trigger: triggerArea,
                  start: "top top",
                  end: "12% top",
                  scrub: true,
                },
              });
            }

            if (badge) {
              gsap.to(badge, {
                y: -30,
                opacity: 0.35,
                scrollTrigger: {
                  trigger: triggerArea,
                  start: "10% top",
                  end: "60% top",
                  scrub: true,
                },
              });
            }

            if (eyebrow) {
              gsap.to(eyebrow, {
                letterSpacing: "0.4em",
                y: -18,
                scrollTrigger: {
                  trigger: triggerArea,
                  start: "top top",
                  end: "80% top",
                  scrub: true,
                },
              });
            }

            if (title) {
              gsap.to(title, {
                scale: 1.1,
                y: -12,
                filter: "drop-shadow(0 8px 30px rgba(212,175,55,0.45))",
                scrollTrigger: {
                  trigger: triggerArea,
                  start: "top top",
                  end: "75% top",
                  scrub: true,
                },
              });
            }

            if (sub1) {
              gsap.fromTo(
                sub1,
                { y: 0, opacity: 0.85 },
                {
                  y: -8,
                  opacity: 1,
                  scrollTrigger: {
                    trigger: triggerArea,
                    start: "15% top",
                    end: "65% top",
                    scrub: true,
                  },
                }
              );
            }

            if (sub2) {
              gsap.fromTo(
                sub2,
                { y: 0, opacity: 0.75 },
                {
                  y: -15,
                  opacity: 0.95,
                  scrollTrigger: {
                    trigger: triggerArea,
                    start: "25% top",
                    end: "75% top",
                    scrub: true,
                  },
                }
              );
            }

            if (cta) {
              gsap.fromTo(
                cta,
                { scale: 0.96 },
                {
                  scale: 1.06,
                  boxShadow: "0 20px 45px -10px rgba(212,175,55,0.65)",
                  scrollTrigger: {
                    trigger: triggerArea,
                    start: "35% top",
                    end: "90% top",
                    scrub: true,
                  },
                }
              );
            }
          }

          // C. Compatibilidad con Beats editoriales anteriores (si existen)
          if (beats.length >= 4) {
            // Beat 1: Izquierda (0% a 25%)
            gsap.fromTo(
              beats[0],
              { opacity: 1, x: 0 },
              {
                opacity: 0,
                x: -35,
                scrollTrigger: {
                  trigger: triggerArea,
                  start: "15% top",
                  end: "25% top",
                  scrub: true,
                },
              }
            );

            // Beat 2: Derecha (25% a 55%)
            gsap.fromTo(
              beats[1],
              { opacity: 0, x: 40 },
              {
                opacity: 1,
                x: 0,
                scrollTrigger: {
                  trigger: triggerArea,
                  start: "25% top",
                  end: "35% top",
                  scrub: true,
                },
              }
            );
            gsap.to(beats[1], {
              opacity: 0,
              x: 40,
              scrollTrigger: {
                trigger: triggerArea,
                start: "45% top",
                end: "55% top",
                scrub: true,
              },
            });

            // Beat 3: Izquierda (50% a 78%)
            gsap.fromTo(
              beats[2],
              { opacity: 0, x: -40 },
              {
                opacity: 1,
                x: 0,
                scrollTrigger: {
                  trigger: triggerArea,
                  start: "52% top",
                  end: "62% top",
                  scrub: true,
                },
              }
            );
            gsap.to(beats[2], {
              opacity: 0,
              x: -40,
              scrollTrigger: {
                trigger: triggerArea,
                start: "70% top",
                end: "80% top",
                scrub: true,
              },
            });

            // Beat 4: Derecha (78% a 100%)
            gsap.fromTo(
              beats[3],
              { opacity: 0, x: 40 },
              {
                opacity: 1,
                x: 0,
                scrollTrigger: {
                  trigger: triggerArea,
                  start: "78% top",
                  end: "88% top",
                  scrub: true,
                },
              }
            );
          }
        }
      );
    },
    { scope: containerRef, dependencies: [frames, folder] }
  );

  return (
    <div ref={containerRef} className={`w-full relative ${className}`}>
      <div data-scrolly-track className={`w-full relative ${scrollHeight}`}>
        <div
          className={`sticky top-0 left-0 w-full h-screen overflow-hidden flex items-center justify-center ${
            theme === "light" ? "bg-[#FAF7F1]" : "bg-[#150D1C]"
          }`}
        >
          <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full object-cover z-0"
          />

          <div
            className={`absolute inset-0 pointer-events-none z-10 ${
              theme === "light"
                ? "bg-gradient-to-t from-[#FAF7F1]/45 via-transparent to-[#FAF7F1]/30"
                : "bg-gradient-to-t from-[#150D1C]/90 via-[#150D1C]/30 to-[#150D1C]/75"
            }`}
            aria-hidden="true"
          />

          {loadProgress < 100 && (
            <div
              className={`absolute top-6 right-6 z-30 font-mono text-[10px] tracking-widest uppercase px-3 py-1 rounded-full backdrop-blur-md ${
                theme === "light"
                  ? "bg-[#FAF7F1]/80 border border-[#DDD3C2] text-[#7A5B1E]"
                  : "bg-black/60 border border-white/10 text-gold-300"
              }`}
            >
              Cargando {loadProgress}%
            </div>
          )}

          <div className="relative z-20 w-full h-full pointer-events-none">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ScrollytellingCanvasWrapper;
