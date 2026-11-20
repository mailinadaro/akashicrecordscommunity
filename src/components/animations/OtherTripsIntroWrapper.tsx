"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

interface OtherTripsIntroWrapperProps {
  children: React.ReactNode;
  className?: string;
}

export default function OtherTripsIntroWrapper({
  children,
  className = "",
}: OtherTripsIntroWrapperProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const root = containerRef.current;
      if (!root) return;

      const leftCol = root.querySelector("[data-intro-left]");
      const centerCol = root.querySelector("[data-intro-center]");
      const rightCol = root.querySelector("[data-intro-right]");
      const title = root.querySelector("[data-intro-title]");
      const mist = root.querySelector("[data-intro-mist]");
      const flexRow = root.querySelector(".flex.items-center");

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
            if (leftCol) gsap.set(leftCol, { xPercent: 0, opacity: 1 });
            if (centerCol) gsap.set(centerCol, { width: "100%", height: "100vh", borderRadius: 0 });
            if (rightCol) gsap.set(rightCol, { xPercent: 0, opacity: 1 });
            if (title) gsap.set(title, { scale: 1, opacity: 1, y: 0 });
            return;
          }

          if (isDesktop) {
            // Timeline de ScrollTrigger con Pin y scrub sincronizado
            const tl = gsap.timeline({
              scrollTrigger: {
                trigger: root,
                start: "top top",
                end: "+=120%",
                pin: true,
                scrub: 1,
                anticipatePin: 1,
              },
            });

            // 1. Expulsión de columnas laterales a xPercent: ±120
            if (leftCol) {
              tl.to(
                leftCol,
                {
                  xPercent: -120,
                  opacity: 0,
                  ease: "power1.inOut",
                },
                0
              );
            }

            if (rightCol) {
              tl.to(
                rightCol,
                {
                  xPercent: 120,
                  opacity: 0,
                  ease: "power1.inOut",
                },
                0
              );
            }

            // 2. Colapso de padding y gaps del riel flex para entrada limpia a 100vw
            if (flexRow) {
              tl.to(
                flexRow,
                {
                  paddingLeft: "0px",
                  paddingRight: "0px",
                  gap: "0px",
                  ease: "power1.inOut",
                },
                0
              );
            }

            // 3. Expansión proporcional de la columna central de 33.333% a 100vw y 100vh
            if (centerCol) {
              tl.fromTo(
                centerCol,
                {
                  width: "33.333%",
                  height: "88vh",
                  borderRadius: "0.375rem",
                },
                {
                  width: "100vw",
                  height: "100vh",
                  borderRadius: "0rem",
                  ease: "power1.inOut",
                },
                0
              );
            }

            // 4. Título se magnifica y revela centrado sobre la imagen dominante
            if (title) {
              tl.fromTo(
                title,
                { scale: 0.85, opacity: 0, y: 30 },
                { scale: 1.0, opacity: 1, y: 0, ease: "power2.out" },
                0.2
              );
            }

            // 5. Niebla inferior disipa suavemente conectando con la grilla
            if (mist) {
              tl.fromTo(
                mist,
                { opacity: 0.3 },
                { opacity: 1, ease: "none" },
                0.3
              );
            }
          } else {
            // Mobile: entrada suave sin pin
            if (title) {
              gsap.fromTo(
                title,
                { opacity: 0, y: 20 },
                {
                  opacity: 1,
                  y: 0,
                  duration: 0.8,
                  ease: "power2.out",
                  scrollTrigger: {
                    trigger: root,
                    start: "top 80%",
                  },
                }
              );
            }
          }
        }
      );

      return () => mm.revert();
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef} className={`relative w-full ${className}`}>
      {children}
    </div>
  );
}
