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
  const sectionRef = useRef<HTMLDivElement>(null);

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
          scale: 1.05,
          transformOrigin: "center center",
          willChange: "transform",
        });

        // Parallax notable: viaja de -25px a +25px vinculado estrictamente al scrub del scroll
        gsap.fromTo(
          imgTarget,
          { y: -25 },
          {
            y: 25,
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
    <div ref={sectionRef} id={id} className={`w-full ${className}`}>
      {children}
    </div>
  );
}