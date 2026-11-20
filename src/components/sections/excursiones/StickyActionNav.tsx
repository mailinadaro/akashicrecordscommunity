"use client";

import { useState, useEffect } from "react";
import StickyNavCinematicWrapper from "@/components/animations/StickyNavCinematicWrapper";
import { trackStickyNavClick } from "@/lib/analytics";

export default function StickyActionNav() {
  const links = [
  { label: 'Itinerario', target: '#itinerario' },
  { label: 'Modalidad', target: '#modalidad' },
  { label: 'Valor', target: '#valor' },
  { label: 'Información', target: '#info' },
  { label: 'Consultar', target: '#consultar' },
];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Cerrar menú mobile inmediatamente al hacer scroll
  useEffect(() => {
    if (!isMobileMenuOpen) return;
    const handleScroll = () => {
      setIsMobileMenuOpen(false);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMobileMenuOpen]);

  const cleanId = (str: string) => str.replace(/^#/, "").trim();

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, target: string) => {
    trackStickyNavClick({
      target_anchor: target,
      device_mode: typeof window !== "undefined" && window.innerWidth < 768 ? "mobile" : "desktop",
    });
    e.preventDefault();
    const element =
      document.getElementById(cleanId(target)) || document.querySelector(target);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  const handlePillClick = () => {
    if (typeof window !== "undefined" && window.innerWidth < 768) {
      setIsMobileMenuOpen((prev) => !prev);
    }
  };

  return (
    <StickyNavCinematicWrapper links={links}>
      {({ navRef, fullLinksRef, collapsedPillRef, activeLabelRef }) => (
        <>
          {/* Backdrop para cerrar menú mobile al tocar afuera */}
          {isMobileMenuOpen && (
            <div
              className="fixed inset-0 z-40 bg-black/20 backdrop-blur-[2px] md:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
              aria-hidden="true"
            />
          )}

          <nav
            ref={navRef}
            aria-label="Navegación de secciones"
            className="fixed bottom-[calc(1rem+env(safe-area-inset-bottom,0px))] md:bottom-8 left-1/2 -translate-x-1/2 z-50 flex items-center rounded-md bg-earth-900/30 border border-white/10 backdrop-blur-md shadow-xl px-3 py-1.5 md:px-4 md:py-2 min-h-11 pointer-events-auto transition-colors overflow-visible"
          >
            {/* 1. CONTENEDOR EXPANDIDO (Desktop Hero y Hover) */}
            <div
              ref={fullLinksRef}
              className="items-center gap-1 overflow-hidden"
            >
              {links.map((link, index) => (
                <a
                  key={link.target}
                  href={link.target}
                  onClick={(e) => handleScrollTo(e, link.target)}
                  className={`px-3 py-1 text-[10px] md:text-xs uppercase tracking-[0.18em] transition-colors duration-200 whitespace-nowrap ${
                    index === 0
                      ? "text-warm-50/70 font-bold"
                      : "text-warm-50/70 hover:text-warm-50"
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* 2. CONTENEDOR CONTRAÍDO (Mobile permanente + Desktop scroll mode) */}
            <div
              ref={collapsedPillRef}
              onClick={handlePillClick}
              role="button"
              tabIndex={0}
              aria-expanded={isMobileMenuOpen}
              aria-haspopup="true"
              aria-label="Alternar menú de secciones"
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  handlePillClick();
                }
              }}
              className="items-center gap-2 px-2.5 py-1 min-h-9 md:min-h-0 cursor-pointer md:cursor-default select-none overflow-hidden whitespace-nowrap"
            >
              <span
                ref={activeLabelRef}
                className="text-[10px] md:text-xs font-bold uppercase tracking-[0.18em] text-text-on-action inline-block"
              >
                {links[0]?.label}
              </span>

              {/* Indicador chevron exclusivo mobile */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className={`w-3.5 h-3.5 text-warm-50/70 transition-transform duration-200 md:hidden ${
                  isMobileMenuOpen ? "rotate-180 text-ochre-500" : ""
                }`}
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M14.77 12.79a.75.75 0 01-1.06-.02L10 8.832 6.29 12.77a.75.75 0 11-1.08-1.04l4.25-4.5a.75.75 0 011.08 0l4.25 4.5a.75.75 0 01-.02 1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </div>

            {/* 3. MENÚ VERTICAL MOBILE COMPACTO */}
            {isMobileMenuOpen && (
              <div
                className="md:hidden absolute bottom-[calc(100%+0.625rem)] left-1/2 -translate-x-1/2 w-55 max-w-[calc(100vw-2rem)] rounded-md bg-earth-900/95 border border-white/10 backdrop-blur-xl shadow-2xl p-1 flex flex-col divide-y divide-white/5 z-50 animate-in fade-in zoom-in-95 duration-150"
                role="menu"
                aria-label="Menú de secciones de la excursión"
              >
                {links.map((link) => {
                  const currentActiveLabel =
                    activeLabelRef.current?.textContent?.trim().toUpperCase();
                  const isActive =
                    currentActiveLabel === link.label.trim().toUpperCase();

                  return (
                    <a
                      key={`mobile-${link.target}`}
                      href={link.target}
                      role="menuitem"
                      onClick={(e) => handleScrollTo(e, link.target)}
                      className={`flex items-center justify-center min-h-11 px-3 py-2 text-[11px] uppercase tracking-[0.18em] transition-colors rounded-sm ${
                        isActive
                          ? "text-ochre-500 font-bold bg-white/5"
                          : "text-warm-50/70 hover:text-warm-50 active:text-ochre-500 hover:bg-white/5"
                      }`}
                    >
                      {link.label}
                    </a>
                  );
                })}
              </div>
            )}
          </nav>
        </>
      )}
    </StickyNavCinematicWrapper>
  );
}