"use client";

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

interface HeroRevealWrapperProps {
  backgroundNode: React.ReactNode;
  contentNode: React.ReactNode;
}

export default function HeroRevealWrapper({ backgroundNode, contentNode }: HeroRevealWrapperProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!containerRef.current) return;

    const bgElement = containerRef.current.querySelector('.hero-bg');
    const contentElement = containerRef.current.querySelector('.hero-content');
    const contentItems = gsap.utils.toArray('.hero-content-item', containerRef.current);

    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    // 1. Animación de Entrada (Zoom in/out)
    if (bgElement) {
      tl.from(bgElement, {
        scale: 1.3,
        duration: 2.5,
      });

      // Efecto Parallax al hacer Scroll
      gsap.to(bgElement, {
        yPercent: 20,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });
    }

    // 2. Animación en cascada de los textos (Stagger)
    if (contentItems.length) {
      tl.from(contentItems, {
        y: 40,
        opacity: 0,
        stagger: 0.2,
        duration: 1.2,
      }, "-=1.5");
    }

    // 3. Desvanecimiento de todo el bloque de contenido al bajar
    if (contentElement) {
      gsap.to(contentElement, {
        opacity: 0,
        y: -50,
        scrollTrigger: {
          trigger: containerRef.current,
          start: '40% top',
          end: 'bottom 20%',
          scrub: true,
        },
      });
    }
  }, { scope: containerRef });

  return (
    <section 
      ref={containerRef}
      className="relative w-full h-screen min-h-175 flex items-center justify-center px-6 md:px-12 overflow-hidden bg-black"
    >
      <div className="hero-bg absolute inset-0 z-0 origin-center">
        {backgroundNode}
      </div>

      <div className="hero-content relative z-10 max-w-5xl w-full text-white">
        {contentNode}
      </div>
    </section>
  );
}