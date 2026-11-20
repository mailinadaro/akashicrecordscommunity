"use client";

import { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Menu, XIcon } from "lucide-react";

gsap.registerPlugin(useGSAP);

interface MenuRevealWrapperProps {
  brandNode: React.ReactNode;
  menuItemsNode: React.ReactNode;
  socialLinksNode: React.ReactNode;
  imagesNode: React.ReactNode;
}

export default function MenuRevealWrapper({
  brandNode,
  menuItemsNode,
  socialLinksNode,
  imagesNode,
}: MenuRevealWrapperProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isNavVisible, setIsNavVisible] = useState(true);

  const containerRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const lastScrollY = useRef(0);
  const previousBodyOverflow = useRef<string | null>(null);
  const tl = useRef<gsap.core.Timeline | null>(null);

  // Animación principal de apertura/cierre
  useGSAP(() => {
    const content = document.getElementById("site-content");
    const menuItems = gsap.utils.toArray(".menu-item", containerRef.current);

    if (!content || !menuItems.length) return;

    tl.current = gsap.timeline({ paused: true })
      .to(content, {
        y: "40vh",
        scale: 0.95,
        borderRadius: "24px",
        boxShadow: "0 20px 50px rgba(0, 0, 0, 0.3)",
        overflow: "hidden",
        pointerEvents: "none",
        duration: 0.85,
        ease: "power4.inOut",
      }, 0)
      .fromTo(overlayRef.current,
        { clipPath: "inset(0% 0% 100% 0%)" },
        { clipPath: "inset(0% 0% 0% 0%)", duration: 0.85, ease: "power4.inOut" },
        0
      )
      .from(menuItems, {
        y: 30,
        opacity: 0,
        duration: 0.4,
        stagger: -0.05,
        ease: "power3.out",
      }, "-=0.4");
  }, { scope: containerRef });

  // Lógica de Hover para las imágenes (Event Listeners nativos inyectados por GSAP)
  useGSAP(() => {
    const links = gsap.utils.toArray<HTMLElement>(".menu-item", containerRef.current);
    const images = gsap.utils.toArray<HTMLElement>(".menu-bg-image", containerRef.current);

    const handleHover = (id: string) => {
      const activeImage = images.find(img => img.dataset.imageId === id);
      
      gsap.to(images, {
        opacity: 0,
        clipPath: "inset(100% 0% 0% 0%)",
        scale: 1.04,
        duration: 1.2,
        ease: "power2.inOut",
        overwrite: "auto",
      });

      if (activeImage) {
        gsap.fromTo(activeImage,
          { opacity: 0, clipPath: "inset(100% 0% 0% 0%)", scale: 1.04 },
          { opacity: 1, clipPath: "inset(0% 0% 0% 0%)", scale: 1, duration: 2, ease: "expo.out", overwrite: "auto" }
        );
      }
    };

    links.forEach(link => {
      link.addEventListener("mouseenter", () => handleHover(link.dataset.hoverId || ""));
    });

    return () => {
      links.forEach(link => {
        link.removeEventListener("mouseenter", () => handleHover(link.dataset.hoverId || ""));
      });
    };
  }, { scope: containerRef });

  // Lógica de visibilidad al hacer scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (isOpen) {
        setIsNavVisible(true);
        lastScrollY.current = currentScrollY;
        return;
      }
      setIsNavVisible(currentScrollY <= 8 || currentScrollY < lastScrollY.current);
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isOpen]);

  // Bloqueo de scroll en body al abrir el menú
  useEffect(() => {
    if (isOpen) {
      previousBodyOverflow.current = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      tl.current?.play();
    } else {
      tl.current?.reverse();
      document.body.style.overflow = previousBodyOverflow.current ?? "";
      previousBodyOverflow.current = null;
    }
    return () => {
      if (previousBodyOverflow.current !== null) {
        document.body.style.overflow = previousBodyOverflow.current;
      }
    };
  }, [isOpen]);

  return (
    <div ref={containerRef} className="pointer-events-none fixed inset-0 z-50">
      <nav
        className={`pointer-events-none fixed left-0 top-0 z-50 flex w-full items-center justify-between bg-transparent p-4 transition-transform duration-500 md:p-6 ${
          isNavVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="pointer-events-auto flex items-center gap-4">
          {brandNode}
        </div>
        
        <button
          onClick={() => {
            setIsOpen(!isOpen);
            setIsNavVisible(true);
          }}
          className="text-text-on-action pointer-events-auto flex items-center gap-2 uppercase text-xs md:text-sm font-medium hover:opacity-70 transition-opacity"
        >
          <span className="overflow-hidden h-4 md:h-5 block">
            <span className="block transition-transform duration-300">
              {isOpen ? "Cerrar" : "Menú"}
            </span>
          </span>
          {isOpen ? <XIcon size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      <div
        ref={overlayRef}
        onClick={(e) => e.target === e.currentTarget && setIsOpen(false)}
        className={`fixed inset-0 z-40 flex flex-col justify-end bg-surface-action p-0 text-text-on-action ${
          isOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
        style={{ clipPath: "inset(0% 0% 100% 0%)" }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 h-full w-full max-w-[1920px] mx-auto overflow-hidden">
          <div className="relative h-full w-full md:block">
            <div className="relative w-full h-full overflow-hidden">
              {imagesNode}
            </div>
          </div>
          
          <div className="relative flex flex-col justify-between p-8 md:p-12 lg:p-16 h-full bg-surface-action">
            <div className="flex flex-col justify-center grow pt-24 md:pt-32 gap-6 md:gap-4 text-4xl sm:text-5xl md:text-6xl font-display tracking-display overflow-hidden" onClick={() => setIsOpen(false)}>
              {menuItemsNode}
            </div>
            <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-text-on-action/50 border-t border-text-on-action/10 pt-6 mt-12">
              {socialLinksNode}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}