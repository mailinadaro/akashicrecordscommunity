"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

interface TransformationKinematicWrapperProps {
  children: React.ReactNode;
  className?: string;
}

export function TransformationKinematicWrapper({
  children,
  className = "",
}: TransformationKinematicWrapperProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const root = containerRef.current;
      if (!root) return;

      const section = root.querySelector("[data-transformation-section]") as HTMLElement | null;
      const layout = root.querySelector("[data-transformation-layout]") as HTMLElement | null;
      const cardBefore = root.querySelector("[data-diptych-before]") as HTMLElement | null;
      const cardAfter = root.querySelector("[data-diptych-after]") as HTMLElement | null;
      const milestoneCards = gsap.utils.toArray<HTMLElement>("[data-milestone-card]", root);
      const seal = root.querySelector("[data-transformation-seal]") as HTMLElement | null;

      if (!section) return;

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
            gsap.set([cardBefore, cardAfter, ...milestoneCards], { clearProps: "all" });
            return;
          }

          if (isDesktop) {
            // 1. Transición y resplandor del Díptico Alquímico (Antes vs Después)
            if (cardBefore && cardAfter) {
              gsap.fromTo(
                cardAfter,
                { opacity: 0.85, scale: 0.98, y: 15 },
                {
                  opacity: 1,
                  scale: 1,
                  y: 0,
                  duration: 1,
                  ease: "power2.out",
                  scrollTrigger: {
                    trigger: cardBefore,
                    start: "top 70%",
                    end: "bottom 40%",
                    scrub: true,
                  },
                }
              );
            }

            // 2. Revelación escalonada cinematográfica de los 6 Hitos de Aprendizaje
            if (milestoneCards.length) {
              milestoneCards.forEach((card, idx) => {
                const numeral = card.querySelector("[data-milestone-numeral]");
                
                gsap.fromTo(
                  card,
                  { y: 35, opacity: 0.6 },
                  {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    ease: "power2.out",
                    scrollTrigger: {
                      trigger: card,
                      start: "top 85%",
                      toggleActions: "play none none reverse",
                    },
                  }
                );

                if (numeral) {
                  gsap.fromTo(
                    numeral,
                    { scale: 0.9, opacity: 0.5 },
                    {
                      scale: 1,
                      opacity: 1,
                      duration: 0.6,
                      ease: "back.out(1.5)",
                      scrollTrigger: {
                        trigger: card,
                        start: "top 80%",
                        toggleActions: "play none none reverse",
                      },
                    }
                  );
                }
              });
            }
          }

          if (!isDesktop && milestoneCards.length) {
            milestoneCards.forEach((card) => {
              gsap.fromTo(
                card,
                { y: 20, opacity: 0.7 },
                {
                  y: 0,
                  opacity: 1,
                  duration: 0.5,
                  ease: "power2.out",
                  scrollTrigger: {
                    trigger: card,
                    start: "top 90%",
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

export default TransformationKinematicWrapper;
