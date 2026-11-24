"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export interface InvestmentKinematicWrapperProps {
  readonly children: React.ReactNode;
  readonly className?: string;
}

export default function InvestmentKinematicWrapper({
  children,
  className = "",
}: InvestmentKinematicWrapperProps) {
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

      // =========================================================
      // Desktop (>= 1024px): Entrada combinada con elevación hero
      // =========================================================
      mm.add("(min-width: 1024px)", () => {
        // 1. Encabezado editorial superior
        const header = root.querySelector<HTMLElement>("[data-investment-header]");
        if (header) {
          gsap.fromTo(
            header,
            { opacity: 0, y: 28 },
            {
              opacity: 1,
              y: 0,
              duration: 0.75,
              ease: "power2.out",
              scrollTrigger: {
                trigger: header,
                start: "top 88%",
                once: true,
              },
            }
          );
        }

        // 2. Tarjetas comparativas (Card Standard vs Card Hero destacada)
        const cardStandard = root.querySelector<HTMLElement>('[data-investment-card="standard"]');
        const cardHero = root.querySelector<HTMLElement>('[data-investment-card="hero"]');

        if (cardStandard) {
          gsap.fromTo(
            cardStandard,
            { opacity: 0, y: 40 },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              ease: "power3.out",
              scrollTrigger: {
                trigger: cardStandard,
                start: "top 85%",
                once: true,
              },
            }
          );
        }

        if (cardHero) {
          gsap.fromTo(
            cardHero,
            { opacity: 0, y: 52, scale: 0.96 },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.9,
              delay: 0.12,
              ease: "power3.out",
              scrollTrigger: {
                trigger: cardHero,
                start: "top 85%",
                once: true,
              },
            }
          );

          // Badge flotante superior · MEJOR INVERSIÓN ·
          const badge = cardHero.querySelector<HTMLElement>("[data-investment-badge]");
          if (badge) {
            gsap.fromTo(
              badge,
              { opacity: 0, scale: 0.7, y: -8 },
              {
                opacity: 1,
                scale: 1,
                y: 0,
                duration: 0.6,
                delay: 0.35,
                ease: "back.out(1.8)",
                scrollTrigger: {
                  trigger: cardHero,
                  start: "top 85%",
                  once: true,
                },
              }
            );
          }
        }

        // 3. Bloques temáticos de valor (stagger sutil para dosificación)
        const valueBlocks = gsap.utils.toArray<HTMLElement>("[data-investment-block]", root);
        if (valueBlocks.length) {
          gsap.fromTo(
            valueBlocks,
            { opacity: 0, y: 14 },
            {
              opacity: 1,
              y: 0,
              duration: 0.5,
              stagger: 0.05,
              delay: 0.2,
              ease: "power2.out",
              scrollTrigger: {
                trigger: cardStandard || cardHero,
                start: "top 85%",
                once: true,
              },
            }
          );
        }

        // 4. Sellos de seguridad y métodos de pago
        const footers = gsap.utils.toArray<HTMLElement>("[data-investment-footer]", root);
        if (footers.length) {
          gsap.fromTo(
            footers,
            { opacity: 0, y: 12 },
            {
              opacity: 1,
              y: 0,
              duration: 0.6,
              delay: 0.4,
              stagger: 0.1,
              ease: "power2.out",
              scrollTrigger: {
                trigger: footers[0],
                start: "top 92%",
                once: true,
              },
            }
          );
        }
      });

      // =========================================================
      // Mobile & Tablet (< 1024px): Entrada secuencial vertical
      // =========================================================
      mm.add("(max-width: 1023px)", () => {
        const header = root.querySelector<HTMLElement>("[data-investment-header]");
        if (header) {
          gsap.fromTo(
            header,
            { opacity: 0, y: 20 },
            {
              opacity: 1,
              y: 0,
              duration: 0.65,
              ease: "power2.out",
              scrollTrigger: {
                trigger: header,
                start: "top 90%",
                once: true,
              },
            }
          );
        }

        // En mobile: Card Standard primero
        const cardStandard = root.querySelector<HTMLElement>('[data-investment-card="standard"]');
        if (cardStandard) {
          gsap.fromTo(
            cardStandard,
            { opacity: 0, y: 35 },
            {
              opacity: 1,
              y: 0,
              duration: 0.75,
              ease: "power3.out",
              scrollTrigger: {
                trigger: cardStandard,
                start: "top 88%",
                once: true,
              },
            }
          );
        }

        // Card Hero al final con su badge
        const cardHero = root.querySelector<HTMLElement>('[data-investment-card="hero"]');
        if (cardHero) {
          gsap.fromTo(
            cardHero,
            { opacity: 0, y: 40, scale: 0.97 },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.8,
              ease: "power3.out",
              scrollTrigger: {
                trigger: cardHero,
                start: "top 88%",
                once: true,
              },
            }
          );

          const badge = cardHero.querySelector<HTMLElement>("[data-investment-badge]");
          if (badge) {
            gsap.fromTo(
              badge,
              { opacity: 0, scale: 0.75 },
              {
                opacity: 1,
                scale: 1,
                duration: 0.5,
                delay: 0.25,
                ease: "back.out(1.6)",
                scrollTrigger: {
                  trigger: cardHero,
                  start: "top 88%",
                  once: true,
                },
              }
            );
          }
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
