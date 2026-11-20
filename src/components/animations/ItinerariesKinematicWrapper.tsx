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

        // Fade out total de los textos cuando la tarjeta siguiente comienza a solaparla
        cards.forEach((card, index) => {
          const nextCard = cards[index + 1];
          if (!nextCard) return;

          const textLayer = card.querySelector<HTMLElement>("[data-card-layer]");
          if (!textLayer) return;

          gsap.to(textLayer.children, {
            opacity: 0,
            y: -25,
            ease: "none",
            scrollTrigger: {
              trigger: nextCard,
              start: "top 85%",
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
