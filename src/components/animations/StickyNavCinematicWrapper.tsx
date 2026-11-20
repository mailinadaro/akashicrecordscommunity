"use client";

import {  useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

interface NavLink {
  label: string;
  target: string;
}

interface RenderProps {
  navRef: React.RefObject<HTMLElement | null>;
  fullLinksRef: React.RefObject<HTMLDivElement | null>;
  collapsedPillRef: React.RefObject<HTMLDivElement | null>;
  activeLabelRef: React.RefObject<HTMLSpanElement | null>;
}

interface StickyNavCinematicWrapperProps {
  links: NavLink[];
  children: (props: RenderProps) => React.ReactNode;
}

const cleanId = (id: string) => id.replace(/^#/, "").trim();

export default function StickyNavCinematicWrapper({
  links,
  children,
}: StickyNavCinematicWrapperProps) {
  const navRef = useRef<HTMLElement>(null);
  const fullLinksRef = useRef<HTMLDivElement>(null);
  const collapsedPillRef = useRef<HTMLDivElement>(null);
  const activeLabelRef = useRef<HTMLSpanElement>(null);

  const isScrolledRef = useRef(false);
  const isHoveredRef = useRef(false);
  const currentLabelRef = useRef(links?.[0]?.label || "");

  useGSAP(() => {
    if (!navRef.current || !links || links.length === 0) return;

    const globalTriggers: ScrollTrigger[] = [];
    const now = performance.now().toFixed(2);
    console.log(`[${now}ms] 🚀 StickyNavCinematicWrapper registrando triggers en: ${window.location.pathname}`);

    // Asegurar visibilidad inicial del contenedor nav
    gsap.set(navRef.current, { autoAlpha: 1 });

    // =========================================================================
    // FUENTE ÚNICA DE VERDAD: setNavState
    // Decide la visibilidad y el display de fullLinksRef y collapsedPillRef
    // =========================================================================
    const setNavState = (
      isDesktop: boolean,
      scrolled: boolean,
      hovered: boolean,
      animate = true
    ) => {
      if (!navRef.current || !fullLinksRef.current || !collapsedPillRef.current) return;

      // Matar cualquier animación en curso para evitar colisiones
      gsap.killTweensOf([fullLinksRef.current, collapsedPillRef.current]);

      if (!isDesktop) {
        // En mobile (< 768px):
        // fullLinksRef SIEMPRE oculto (display: none, autoAlpha: 0)
        // collapsedPillRef SIEMPRE visible (display: flex, autoAlpha: 1)
        gsap.set(fullLinksRef.current, { autoAlpha: 0, display: "none" });
        gsap.set(collapsedPillRef.current, { autoAlpha: 1, display: "flex" });
        return;
      }

      // En desktop (>= 768px):
      // Si scroll <= 100 O hovered -> Expandir fullLinks, ocultar pill
      // Si scroll > 100 Y no hovered -> Ocultar fullLinks, mostrar pill
      const shouldExpand = !scrolled || hovered;

      if (shouldExpand) {
        // Ocultar inmediatamente collapsedPill para evitar duplicación o convivencia
        gsap.set(collapsedPillRef.current, { autoAlpha: 0, display: "none" });

        if (animate) {
          gsap.set(fullLinksRef.current, { display: "flex" });
          gsap.fromTo(
            fullLinksRef.current,
            { autoAlpha: 0 },
            { autoAlpha: 1, duration: 0.25, ease: "power2.out" }
          );
        } else {
          gsap.set(fullLinksRef.current, { autoAlpha: 1, display: "flex" });
        }
      } else {
        // Ocultar inmediatamente fullLinks
        gsap.set(fullLinksRef.current, { autoAlpha: 0, display: "none" });

        if (animate) {
          gsap.set(collapsedPillRef.current, { display: "flex" });
          gsap.fromTo(
            collapsedPillRef.current,
            { autoAlpha: 0 },
            { autoAlpha: 1, duration: 0.25, ease: "power2.out" }
          );
        } else {
          gsap.set(collapsedPillRef.current, { autoAlpha: 1, display: "flex" });
        }
      }
    };

    // =========================================================================
    // RESPONSIVE MATCHMEDIA: (min-width: 768px) vs (max-width: 767px)
    // =========================================================================
    const mm = gsap.matchMedia();

    // 1. DESKTOP (>= 768px)
    mm.add("(min-width: 768px)", () => {
      const navEl = navRef.current;
      if (!navEl || !fullLinksRef.current || !collapsedPillRef.current) return;

      isScrolledRef.current = typeof window !== "undefined" && window.scrollY > 100;
      isHoveredRef.current = false;

      // Estado inicial desktop según scroll actual sin animación
      setNavState(true, isScrolledRef.current, isHoveredRef.current, false);

      // ScrollTrigger para scroll > 100px en desktop
      const scrollTrigger = ScrollTrigger.create({
        trigger: document.body,
        start: "100px top",
        onToggle: (self) => {
          isScrolledRef.current = self.isActive;
          setNavState(true, isScrolledRef.current, isHoveredRef.current, true);
        },
      });

      // Hover listeners exclusivos de desktop
      const onMouseEnter = () => {
        isHoveredRef.current = true;
        if (isScrolledRef.current) {
          setNavState(true, isScrolledRef.current, true, true);
        }
      };

      const onMouseLeave = () => {
        isHoveredRef.current = false;
        if (isScrolledRef.current) {
          setNavState(true, isScrolledRef.current, false, true);
        }
      };

      navEl.addEventListener("mouseenter", onMouseEnter);
      navEl.addEventListener("mouseleave", onMouseLeave);

      return () => {
        scrollTrigger.kill();
        navEl.removeEventListener("mouseenter", onMouseEnter);
        navEl.removeEventListener("mouseleave", onMouseLeave);
      };
    });

    // 2. MOBILE (< 768px)
    mm.add("(max-width: 767px)", () => {
      if (!navRef.current || !fullLinksRef.current || !collapsedPillRef.current) return;

      isHoveredRef.current = false;
      // En mobile, fullLinksRef siempre oculto y collapsedPillRef siempre visible
      setNavState(false, isScrolledRef.current, false, false);

      return () => {};
    });

    // =========================================================================
    // ACCIÓN 3: Cross-Fade Cinemático de Texto a 60fps (Sin React Re-renders)
    // =========================================================================
    const updateActiveItemStyles = (activeTargetId: string) => {
      if (!navRef.current) return;
      const allLinks = navRef.current.querySelectorAll<HTMLAnchorElement>("a");
      allLinks.forEach((a) => {
        const targetAttr = a.getAttribute("href") || "";
        const matches = cleanId(targetAttr) === activeTargetId;
        if (matches) {
          a.classList.remove("text-warm-50/70", "text-warm-50/80");
          a.classList.add("text-ochre-500", "font-bold");
        } else {
          a.classList.remove("text-ochre-500", "font-bold");
          a.classList.add("text-warm-50/70");
        }
      });
    };

    const switchLabelCinematic = (newLabel: string, targetId: string) => {
      updateActiveItemStyles(targetId);

      if (!activeLabelRef.current || currentLabelRef.current === newLabel) return;
      currentLabelRef.current = newLabel;

      console.log(`🎬 [CINEMATIC FADE] Cross-fade a: "${newLabel}"`);
      gsap.timeline()
        .to(activeLabelRef.current, {
          autoAlpha: 0,
          y: -4,
          duration: 0.15,
          ease: "power1.in",
        })
        .call(() => {
          if (activeLabelRef.current) {
            activeLabelRef.current.textContent = newLabel;
          }
        })
        .fromTo(
          activeLabelRef.current,
          { y: 4, autoAlpha: 0 },
          { y: 0, autoAlpha: 1, duration: 0.25, ease: "power2.out" }
        );
    };

    // Registrar ScrollSpy para cada sección (Desktop y Mobile)
    links.forEach((link) => {
      const targetId = cleanId(link.target);
      const section = document.getElementById(targetId) || document.querySelector(link.target);
      if (!section) return;

      globalTriggers.push(
        ScrollTrigger.create({
          trigger: section,
          start: "top 50%",
          end: "bottom 50%",
          onEnter: () => switchLabelCinematic(link.label, targetId),
          onEnterBack: () => switchLabelCinematic(link.label, targetId),
        })
      );
    });

    // =========================================================================
    // CIERRE ESTÁTICO (Fade Out in-situ con end: "max")
    // =========================================================================
    const footerTrigger =
      document.querySelector(".hide-nav-trigger") ||
      document.querySelector("footer") ||
      document.querySelector("#final-cta");

    if (footerTrigger) {
      globalTriggers.push(
        ScrollTrigger.create({
          trigger: footerTrigger,
          start: "top 85%",
          end: "max",
          onToggle: (self) => {
            console.log(`--> TRIGGER CIERRE: isActive = [${self.isActive}]`);
            gsap.to(navRef.current, {
              autoAlpha: self.isActive ? 0 : 1,
              duration: 0.5,
              ease: "power2.out",
            });
          },
        })
      );
    }

    // Recalcular posiciones
    const timer = setTimeout(() => ScrollTrigger.refresh(), 400);
    const timer2 = setTimeout(() => ScrollTrigger.refresh(), 1200);

    return () => {
      mm.revert();
      globalTriggers.forEach((t) => t.kill());
      clearTimeout(timer);
      clearTimeout(timer2);
    };
  }, { scope: navRef, dependencies: [] });

  return <>{children({ navRef, fullLinksRef, collapsedPillRef, activeLabelRef })}</>;
}