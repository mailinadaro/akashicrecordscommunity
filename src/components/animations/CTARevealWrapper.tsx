"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

interface CTARevealWrapperProps {
  children: React.ReactNode;
  bgImageNode: React.ReactNode;
  className?: string;
}

export default function CTARevealWrapper({
  children,
  bgImageNode,
  className = "",
}: CTARevealWrapperProps) {
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const root = sectionRef.current;
      if (!root) return;

      const bgImage = root.querySelector("[data-cta-bg]");
      const revealItems = root.querySelectorAll("[data-cta-reveal]");

      const mm = gsap.matchMedia();

      mm.add(
        {
          isDesktop: "(min-width: 1024px)",
          isMobile: "(max-width: 1023px)",
          reduceMotion: "(prefers-reduced-motion: reduce)",
        },
        (context) => {
          const { reduceMotion } = context.conditions as {
            isDesktop: boolean;
            isMobile: boolean;
            reduceMotion: boolean;
          };

          if (reduceMotion) {
            if (bgImage) gsap.set(bgImage, { yPercent: 0 });
            if (revealItems.length) gsap.set(revealItems, { opacity: 1, y: 0 });
            return;
          }

          // 1. Parallax suave en imagen de fondo (-6% a +6%) dentro de sangrado seguro
          if (bgImage) {
            gsap.fromTo(
              bgImage,
              { yPercent: -6 },
              {
                yPercent: 6,
                ease: "none",
                scrollTrigger: {
                  trigger: root,
                  start: "top bottom",
                  end: "bottom top",
                  scrub: true,
                },
              }
            );
          }

          // 2. Revelado escalonado del contenido editorial
          if (revealItems.length) {
            gsap.fromTo(
              revealItems,
              { y: 30, opacity: 0 },
              {
                y: 0,
                opacity: 1,
                duration: 0.8,
                stagger: 0.12,
                ease: "power2.out",
                scrollTrigger: {
                  trigger: root,
                  start: "top 75%",
                  toggleActions: "play none none reverse",
                },
              }
            );
          }
        }
      );

      return () => mm.revert();
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className={`relative w-full min-h-[80vh] lg:h-screen overflow-hidden flex items-center justify-center text-center px-6 md:px-12 bg-plum-950 ${className}`}
    >
      {/* Contenedor de imagen con sangrado vertical para absorber el parallax sin generar gaps */}
      <div
        data-cta-bg
        className="absolute inset-x-0 -top-[15%] w-full h-[130%] pointer-events-none will-change-transform z-0"
      >
        {bgImageNode}
      </div>

      {/* 1. Capa base de tinte plum translúcido */}
      <div
        className="absolute inset-0 bg-linear-to-b from-plum-950/5 via-plum-950/10 to-plum-950/80 pointer-events-none z-10"
        aria-hidden="true"
      />

      {/* 2. Viñeta radial para concentrar contraste en el texto sin tapar la foto comunitaria */}
      <div
        className="absolute inset-0 bg-radial-[at_50%_50%] from-plum-950/70 via-plum-950/50 to-plum-950/80 pointer-events-none z-10"
        aria-hidden="true"
      />

      {/* 3. Suavizado en bordes superior e inferior */}
      <div
        className="absolute inset-0 bg-linear-to-b from-plum-950/40 via-transparent to-plum-950/60 pointer-events-none z-10"
        aria-hidden="true"
      />

      <div className="relative z-20 max-w-4xl mx-auto flex flex-col items-center text-center">
        {children}
      </div>

      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none bg-[url('/grain.png')] z-30"
        aria-hidden="true"
      />
    </section>
  );
}