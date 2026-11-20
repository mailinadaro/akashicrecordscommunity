'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

interface ParallaxRevealWrapperProps {
  children: React.ReactNode;
  insetEffect?: boolean;
  animateTitle?: boolean;
}

export default function ParallaxRevealWrapper({
  children,
  insetEffect = true,
  animateTitle = true
}: ParallaxRevealWrapperProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!containerRef.current) return;

    // 1. Efecto Parallax de la imagen (busca la clase .parallax-img)
    const img = containerRef.current.querySelector('.parallax-img');
    if (img) {
      gsap.to(img, {
        yPercent: 15,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        }
      });
    }

    // 2. Efecto de "Revelado" del marco (busca la clase .parallax-frame)
    const frame = containerRef.current.querySelector('.parallax-frame') as HTMLElement;
    if (frame && insetEffect) {
      gsap.fromTo(frame, 
        { 
          clipPath: "inset(10% 10% 10% 10%)",
          scale: 0.95 
        },
        { 
          clipPath: "inset(0% 0% 0% 0%)", 
          scale: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            end: "top 20%",
            scrub: 1,
          }
        }
      );
    }

    // 3. Animación del Título Flotante (busca la clase .parallax-title)
    const title = containerRef.current.querySelector('.parallax-title');
    if (title && animateTitle) {
      gsap.to(title, {
        y: -100,
        opacity: 1,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top center",
          end: "bottom top",
          scrub: 2
        }
      });
    }

  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="relative w-full h-full">
      {children}
    </div>
  );
}