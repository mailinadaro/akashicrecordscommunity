"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

interface SplitContentWrapperProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
}

export default function SplitContentWrapper({
  children,
  id,
  className = "",
}: SplitContentWrapperProps) {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const root = sectionRef.current;
      if (!root) return;

      // Busca el contenedor de la imagen o la imagen misma
      const imgTarget =
        root.querySelector("[data-split-image]") ||
        root.querySelector("img");

      if (!imgTarget) return;

      const mm = gsap.matchMedia();

      mm.add("(min-width: 1024px)", () => {
        // Le damos un scale sutil para tener margen de recorrido vertical sin bordes vacíos
        gsap.set(imgTarget, {
          scale: 1.15,
          transformOrigin: "center center",
          willChange: "transform",
        });

        // Parallax notable: viaja de -60px a +60px vinculado estrictamente al scrub del scroll
        gsap.fromTo(
          imgTarget,
          { y: -60 },
          {
            y: 60,
            ease: "none",
            scrollTrigger: {
              trigger: root,
              start: "top bottom",
              end: "bottom top",
              scrub: 0.5,
              invalidateOnRefresh: true,
            },
          }
        );
      });

      return () => mm.revert();
    },
    { scope: sectionRef }
  );

  return (
    <section ref={sectionRef} id={id} className={className}>
      {children}
    </section>
  );
}