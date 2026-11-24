"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

interface IdentificationKinematicWrapperProps {
  children: React.ReactNode;
  className?: string;
}

export function IdentificationKinematicWrapper({
  children,
  className = "",
}: IdentificationKinematicWrapperProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const root = containerRef.current;
      if (!root) return;

      const section = root.querySelector("[data-identification-section]") as HTMLElement | null;
      const track = root.querySelector("[data-identification-track]") as HTMLElement | null;
      const viewport = root.querySelector("[data-identification-viewport]") as HTMLElement | null;
      const cards = gsap.utils.toArray<HTMLElement>("[data-identification-card]", root);
      const engravings = gsap.utils.toArray<HTMLElement>("[data-parallax-engraving]", root);
      const seal = root.querySelector("[data-identification-seal]") as HTMLElement | null;
      const header = root.querySelector("[data-identification-header]") as HTMLElement | null;

      if (!section || !track || !cards.length) return;

      const mm = gsap.matchMedia();

      mm.add(
        {
          isDesktop: "(min-width: 1024px)",
          isMobile: "(max-width: 1023px)",
          reduceMotion: "(prefers-reduced-motion: reduce)",
        },
        (context) => {
          const { isDesktop, reduceMotion } = context.conditions as {
            isDesktop: boolean;
            isMobile: boolean;
            reduceMotion: boolean;
          };

          if (reduceMotion) {
            gsap.set([track, ...cards, ...engravings], { clearProps: "all" });
            return;
          }

          if (isDesktop && viewport) {
            // Calcular la distancia total horizontal que debe recorrer el riel
            const getScrollDistance = () => {
              const trackWidth = track.scrollWidth;
              const viewportWidth = window.innerWidth;
              return Math.max(0, trackWidth - viewportWidth + 120);
            };

            const scrollDistance = getScrollDistance();

            // Timeline horizontal con pinning del viewport
            const tl = gsap.timeline({
              defaults: { ease: "none" },
              scrollTrigger: {
                trigger: section,
                start: "top top",
                end: () => `+=${Math.max(window.innerHeight * 1.8, scrollDistance)}`,
                pin: true,
                scrub: 1.1,
                anticipatePin: 1,
                invalidateOnRefresh: true,
              },
            });

            // 1. Desplazamiento horizontal del riel continuo
            tl.to(track, {
              x: () => -getScrollDistance(),
              ease: "none",
            });

            // 2. Parallax independiente en los grabados flotantes dentro de las láminas
            engravings.forEach((engraving, idx) => {
              tl.to(
                engraving,
                {
                  x: idx % 2 === 0 ? -35 : 35,
                  rotate: idx % 2 === 0 ? -4 : 4,
                  ease: "none",
                },
                0
              );
            });

            // 3. Sello de cierre al final del recorrido
            if (seal) {
              tl.fromTo(
                seal,
                { opacity: 0.6, scale: 0.95 },
                { opacity: 1, scale: 1, ease: "power2.out", duration: 0.3 },
                "> -0.4"
              );
            }
          }

          if (!isDesktop) {
            // En móvil: Animación de entrada suave con ScrollTrigger escalonado
            cards.forEach((card) => {
              gsap.fromTo(
                card,
                { y: 30, opacity: 0.8 },
                {
                  y: 0,
                  opacity: 1,
                  duration: 0.6,
                  ease: "power2.out",
                  scrollTrigger: {
                    trigger: card,
                    start: "top 85%",
                    toggleActions: "play none none reverse",
                  },
                }
              );
            });
          }
        }
      );
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef} className={`w-full relative ${className}`}>
      {children}
    </div>
  );
}

export default IdentificationKinematicWrapper;
