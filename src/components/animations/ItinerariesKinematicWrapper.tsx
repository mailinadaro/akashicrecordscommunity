"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { trackAnalyticsEvent } from "@/lib/analytics";

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

  useEffect(() => {
    trackAnalyticsEvent({
      event: 'experience_catalog_view',
      catalog_id: 'catalogo_excursiones',
      total_experiences: 6,
    });
  }, []);

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
        const labels = {
          "todo-el-ano": root.querySelector<HTMLElement>('[data-season-label="todo-el-ano"]'),
          "febrero-2027": root.querySelector<HTMLElement>('[data-season-label="febrero-2027"]'),
          "marzo-2027": root.querySelector<HTMLElement>('[data-season-label="marzo-2027"]'),
        };

        const updateSeasonActive = (activeKey: string) => {
          Object.entries(labels).forEach(([key, el]) => {
            if (!el) return;
            if (key === activeKey) {
              gsap.to(el, { opacity: 1, fontWeight: "600", x: 4, duration: 0.25, overwrite: "auto" });
            } else {
              gsap.to(el, { opacity: 0.3, fontWeight: "400", x: 0, duration: 0.25, overwrite: "auto" });
            }
          });
        };

        // ScrollTrigger por cada tarjeta para sincronizar la temporada activa
        cards.forEach((card) => {
          const seasonKey = card.getAttribute("data-season-key");
          if (!seasonKey) return;

          ScrollTrigger.create({
            trigger: card,
            start: "top 35%",
            end: "bottom 35%",
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