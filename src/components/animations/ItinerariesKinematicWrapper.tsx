"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

interface ItinerariesKinematicWrapperProps {
  children: React.ReactNode;
  className?: string;
}

export default function ItinerariesKinematicWrapper({
  children,
  className = "",
}: ItinerariesKinematicWrapperProps) {
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
        const cards = gsap.utils.toArray<HTMLElement>("[data-itinerary-card]", root);
        const labels = gsap.utils.toArray<HTMLElement>("[data-season-label]", root);

        const updateSeasonActive = (activeKey: string) => {
          labels.forEach((el) => {
            const key = el.getAttribute("data-season-label");
            const isActive = key === activeKey;
            gsap.to(el, {
              opacity: isActive ? 1 : 0.35,
              x: isActive ? 8 : 0,
              duration: 0.3,
              overwrite: "auto",
            });
            const titleEl = el.querySelector<HTMLElement>("[data-season-title]");
            if (titleEl) {
              gsap.to(titleEl, {
                color: isActive ? "#331e45" : "#735d8b",
                fontWeight: isActive ? "600" : "400",
                duration: 0.3,
                overwrite: "auto",
              });
            }
          });
        };

        // Sincronización del sidebar mediante ScrollTrigger en cada tarjeta al 50% del viewport
        cards.forEach((card, index) => {
          const seasonKey = card.getAttribute("data-season-key");
          if (!seasonKey) return;

          ScrollTrigger.create({
            trigger: card,
            start: index === 0 ? "top 80%" : "top 50%",
            end: "bottom 50%",
            onEnter: () => updateSeasonActive(seasonKey),
            onEnterBack: () => updateSeasonActive(seasonKey),
          });
        });

        // Fade out total de los textos cuando la tarjeta siguiente comienza a solaparla
        cards.forEach((card, index) => {
          const nextCard = cards[index + 1];
          if (!nextCard) return;

          const textLayer = card.querySelector<HTMLElement>("[data-card-layer]");
          if (!textLayer) return;

          gsap.to(textLayer.children, {
            opacity: 0,
            y: -30,
            ease: "none",
            scrollTrigger: {
              trigger: nextCard,
              start: "top 90%",
              end: "top 25%",
              scrub: true,
            },
          });
        });

        ScrollTrigger.refresh();
      });

      return () => mm.revert();
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  );
}
