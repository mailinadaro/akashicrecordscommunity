"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(useGSAP);
}

interface ContactFormKinematicWrapperProps {
  step: number;
  isSuccess?: boolean;
  children: React.ReactNode;
  className?: string;
}

export default function ContactFormKinematicWrapper({
  step,
  isSuccess = false,
  children,
  className = "",
}: ContactFormKinematicWrapperProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isFirstRender = useRef(true);

  useGSAP(
    () => {
      const root = containerRef.current;
      if (!root) return;

      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      // 1. ANIMACIÓN DE ENTRADA INICIAL AL CARGAR LA PÁGINA
      if (isFirstRender.current) {
        isFirstRender.current = false;

        if (prefersReducedMotion) {
          gsap.set(root, { opacity: 1, y: 0 });
        } else {
          gsap.fromTo(
            root,
            { opacity: 0, y: 25 },
            { opacity: 1, y: 0, duration: 0.9, ease: "power3.out" }
          );
        }
      }

      // 2. SINCRONIZACIÓN DE LA BARRA DE TELEMETRÍA (PROGRESS BAR)
      const progressBar = root.querySelector<HTMLElement>("[data-progress-bar]");
      if (progressBar) {
        const targetWidth = isSuccess ? "100%" : `${(step / 4) * 100}%`;
        if (prefersReducedMotion) {
          progressBar.style.width = targetWidth;
        } else {
          gsap.to(progressBar, {
            width: targetWidth,
            duration: 0.6,
            ease: "power2.out",
          });
        }
      }

      // 3. TRANSICIÓN CINEMÁTICA ESCALONADA (STAGGER) DE ELEMENTOS DEL PASO
      const headers = root.querySelectorAll("[data-step-header]");
      const items = root.querySelectorAll("[data-step-item]");
      const footers = root.querySelectorAll("[data-step-footer]");

      if (prefersReducedMotion) {
        gsap.set([headers, items, footers], { opacity: 1, y: 0 });
        return;
      }

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      if (headers.length) {
        tl.fromTo(
          headers,
          { opacity: 0, y: 16 },
          { opacity: 1, y: 0, duration: 0.45, ease: "power3.out" }
        );
      }

      if (items.length) {
        tl.fromTo(
          items,
          { opacity: 0, y: 12 },
          {
            opacity: 1,
            y: 0,
            duration: 0.4,
            stagger: 0.07,
            ease: "power2.out",
          },
          headers.length ? "-=0.3" : 0
        );
      }

      if (footers.length) {
        tl.fromTo(
          footers,
          { opacity: 0, y: 8 },
          { opacity: 1, y: 0, duration: 0.35, ease: "power2.out" },
          items.length ? "-=0.25" : 0
        );
      }
    },
    { dependencies: [step, isSuccess], scope: containerRef }
  );

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  );
}
