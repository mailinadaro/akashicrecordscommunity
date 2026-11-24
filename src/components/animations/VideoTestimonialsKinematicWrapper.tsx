"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export interface VideoTestimonialsKinematicWrapperProps {
  readonly children: React.ReactNode;
  readonly className?: string;
}

export default function VideoTestimonialsKinematicWrapper({
  children,
  className = "",
}: VideoTestimonialsKinematicWrapperProps) {
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

      // Desktop & Tablet: Efecto vertical en abanico escalonado
      mm.add("(min-width: 640px)", () => {
        // 1. Encabezado editorial
        const header = root.querySelector<HTMLElement>("[data-testimonial-header]");
        if (header) {
          gsap.fromTo(
            header,
            { opacity: 0, y: 24 },
            {
              opacity: 1,
              y: 0,
              duration: 0.7,
              ease: "power2.out",
              scrollTrigger: {
                trigger: header,
                start: "top 88%",
                once: true,
              },
            }
          );
        }

        // 2. Tarjetas en abanico escalonado
        const cards = gsap.utils.toArray<HTMLElement>("[data-testimonial-card]", root);
        if (cards.length) {
          gsap.fromTo(
            cards,
            { opacity: 0, y: 45, scale: 0.94 },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.85,
              stagger: 0.12,
              ease: "power3.out",
              scrollTrigger: {
                trigger: cards[0],
                start: "top 85%",
                once: true,
              },
            }
          );
        }

        // 3. Flechas de navegación laterales
        const navButtons = gsap.utils.toArray<HTMLElement>("[data-testimonial-nav]", root);
        if (navButtons.length) {
          gsap.fromTo(
            navButtons,
            { opacity: 0, scale: 0.8 },
            {
              opacity: 1,
              scale: 1,
              duration: 0.5,
              delay: 0.25,
              ease: "back.out(1.5)",
              scrollTrigger: {
                trigger: cards[0] || header,
                start: "top 85%",
                once: true,
              },
            }
          );
        }

        // 4. Indicación de pie
        const footer = root.querySelector<HTMLElement>("[data-testimonial-footer]");
        if (footer) {
          gsap.fromTo(
            footer,
            { opacity: 0, y: 12 },
            {
              opacity: 1,
              y: 0,
              duration: 0.5,
              delay: 0.4,
              ease: "power2.out",
              scrollTrigger: {
                trigger: cards[0] || header,
                start: "top 85%",
                once: true,
              },
            }
          );
        }
      });

      // Mobile: Abanico vertical y sutil entrada para scroll táctil
      mm.add("(max-width: 639px)", () => {
        const header = root.querySelector<HTMLElement>("[data-testimonial-header]");
        if (header) {
          gsap.fromTo(
            header,
            { opacity: 0, y: 20 },
            {
              opacity: 1,
              y: 0,
              duration: 0.6,
              ease: "power2.out",
              scrollTrigger: {
                trigger: header,
                start: "top 90%",
                once: true,
              },
            }
          );
        }

        const cards = gsap.utils.toArray<HTMLElement>("[data-testimonial-card]", root);
        if (cards.length) {
          gsap.fromTo(
            cards,
            { opacity: 0, y: 35, scale: 0.95 },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.75,
              stagger: 0.1,
              ease: "power3.out",
              scrollTrigger: {
                trigger: cards[0],
                start: "top 88%",
                once: true,
              },
            }
          );
        }
      });

      ScrollTrigger.refresh();

      return () => mm.revert();
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef} className={`w-full ${className}`}>
      {children}
    </div>
  );
}
