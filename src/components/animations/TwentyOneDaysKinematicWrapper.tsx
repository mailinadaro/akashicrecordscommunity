"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

interface TwentyOneDaysKinematicWrapperProps {
  children: React.ReactNode;
  className?: string;
}

export function TwentyOneDaysKinematicWrapper({
  children,
  className = "",
}: TwentyOneDaysKinematicWrapperProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const root = containerRef.current;
      if (!root) return;

      const mockup = root.querySelector("[data-journal-mockup]") as HTMLElement | null;
      const pillars = gsap.utils.toArray<HTMLElement>("[data-practice-pillar]", root);
      const ribbon = root.querySelector("[data-calendar-ribbon]") as HTMLElement | null;
      const header = root.querySelector("[data-practice-header]") as HTMLElement | null;

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
            gsap.set([mockup, ...pillars, ribbon], { clearProps: "all" });
            return;
          }

          if (isDesktop) {
            // 1. Parallax sutil sobre el mockup de la bitácora abierta
            if (mockup) {
              gsap.fromTo(
                mockup,
                { y: 30, rotate: -0.5 },
                {
                  y: -30,
                  rotate: 0.5,
                  ease: "none",
                  scrollTrigger: {
                    trigger: mockup,
                    start: "top 80%",
                    end: "bottom 20%",
                    scrub: 1.2,
                  },
                }
              );
            }

            // 2. Revelación escalonada de los 5 pilares de práctica
            if (pillars.length) {
              gsap.fromTo(
                pillars,
                { opacity: 0.7, y: 20 },
                {
                  opacity: 1,
                  y: 0,
                  duration: 0.6,
                  stagger: 0.12,
                  ease: "power2.out",
                  scrollTrigger: {
                    trigger: pillars[0],
                    start: "top 85%",
                    toggleActions: "play none none reverse",
                  },
                }
              );
            }

            // 3. Revelación de la cinta de 21 días
            if (ribbon) {
              gsap.fromTo(
                ribbon,
                { opacity: 0.7, y: 25 },
                {
                  opacity: 1,
                  y: 0,
                  duration: 0.8,
                  ease: "power2.out",
                  scrollTrigger: {
                    trigger: ribbon,
                    start: "top 88%",
                    toggleActions: "play none none reverse",
                  },
                }
              );
            }
          }

          if (!isDesktop) {
            // Móvil: animación suave en cascada
            if (pillars.length) {
              pillars.forEach((p) => {
                gsap.fromTo(
                  p,
                  { opacity: 0.7, y: 15 },
                  {
                    opacity: 1,
                    y: 0,
                    duration: 0.4,
                    ease: "power2.out",
                    scrollTrigger: {
                      trigger: p,
                      start: "top 90%",
                      toggleActions: "play none none reverse",
                    },
                  }
                );
              });
            }
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

export default TwentyOneDaysKinematicWrapper;
