"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export interface FAQKinematicWrapperProps {
  readonly children: React.ReactNode;
  readonly className?: string;
}

export default function FAQKinematicWrapper({
  children,
  className = "",
}: FAQKinematicWrapperProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const root = containerRef.current;
      if (!root) return;

      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;
      if (prefersReducedMotion) return;

      // Seleccionar todas las filas de preguntas dentro del contenedor
      const faqItems = gsap.utils.toArray<HTMLElement>("[data-faq-item]", root);
      if (!faqItems.length) return;

      // Fade-in cinematográfico con elevación suave para cada fila de preguntas
      faqItems.forEach((item) => {
        gsap.fromTo(
          item,
          {
            opacity: 0,
            y: 18,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            ease: "power2.out",
            scrollTrigger: {
              trigger: item,
              start: "top 90%",
              toggleActions: "play none none none",
              once: true,
            },
          }
        );
      });

      // Animación suave de los encabezados de bloques temáticos
      const faqGroups = gsap.utils.toArray<HTMLElement>("[data-faq-group]", root);
      faqGroups.forEach((group) => {
        gsap.fromTo(
          group,
          {
            opacity: 0,
            y: 12,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.45,
            ease: "power2.out",
            scrollTrigger: {
              trigger: group,
              start: "top 92%",
              toggleActions: "play none none none",
              once: true,
            },
          }
        );
      });
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef} className={`w-full ${className}`}>
      {children}
    </div>
  );
}
