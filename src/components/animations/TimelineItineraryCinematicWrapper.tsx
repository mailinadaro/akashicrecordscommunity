"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

interface TimelineItineraryCinematicWrapperProps {
  children: React.ReactNode;
}

export function TimelineItineraryCinematicWrapper({
  children,
}: TimelineItineraryCinematicWrapperProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const root = containerRef.current;
      if (!root) return;

      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;
      if (prefersReducedMotion) return;

      const mm = gsap.matchMedia();

      mm.add("(min-width: 1024px)", () => {
        const layout = root.querySelector("[data-itinerary-layout]") as HTMLElement | null;
        const track = root.querySelector("[data-itinerary-track]") as HTMLElement | null;
        const items = gsap.utils.toArray<HTMLElement>("[data-itinerary-item]", root);
        const mediaCards = gsap.utils.toArray<HTMLElement>("[data-media-card]", root);

        if (!layout || !track || !items.length || !mediaCards.length) return;

        const totalSteps = items.length;
        const lastItem = items[totalSteps - 1];

        // 1. Asignar z-index decreciente a las tarjetas fotográficas (primera arriba, última al fondo)
        mediaCards.forEach((card, idx) => {
          gsap.set(card, {
            zIndex: totalSteps - idx,
            clipPath: "inset(0% 0 0% 0)",
          });
        });

        // Duración uniforme por paso en el timeline
        const durationPerStep = 1;
        const totalDuration = Math.max(1, totalSteps - 1) * durationPerStep;

        // 2. Timeline Maestro con ScrollTrigger
        const tl = gsap.timeline({
          defaults: { ease: "none" },
          scrollTrigger: {
            trigger: layout,
            start: "top top",
            end: "bottom bottom",
            scrub: true,
            invalidateOnRefresh: true,
          },
        });

        // 3. Desplazamiento progresivo del riel de textos a lo largo de todo el scroll
        tl.to(
          track,
          {
            y: () => {
              const parentH = track.parentElement?.offsetHeight || 0;
              return -Math.max(
                0,
                lastItem.offsetTop + lastItem.offsetHeight - parentH
              );
            },
            duration: totalDuration,
          },
          0
        );

        // 4. Wipe vertical exacto con clip-path y atenuación de opacidad paso a paso
        if (totalSteps > 1) {
          mediaCards.forEach((card, idx) => {
            if (idx === totalSteps - 1) return;

            const overlay = card.querySelector("[data-media-overlay]");
            const textItem = items[idx];
            const startTime = idx * durationPerStep;

            // Barrido vertical de abajo hacia arriba que desvela la foto subyacente
            tl.fromTo(
              card,
              { clipPath: "inset(0% 0 0% 0)" },
              {
                clipPath: "inset(0% 0 100% 0)",
                duration: durationPerStep,
              },
              startTime
            );

            // Oscurecimiento suave de la foto saliente
            if (overlay) {
              tl.fromTo(
                overlay,
                { opacity: 0 },
                {
                  opacity: 0.6,
                  duration: durationPerStep,
                },
                startTime
              );
            }

            // Atenuación del texto del día que queda superado
            if (textItem) {
              tl.fromTo(
                textItem,
                { opacity: 1 },
                {
                  opacity: 0.25,
                  duration: durationPerStep,
                },
                startTime
              );
            }
          });
        }
      });

      return () => {
        mm.revert();
      };
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef} className="relative w-full">
      {children}
    </div>
  );
}
