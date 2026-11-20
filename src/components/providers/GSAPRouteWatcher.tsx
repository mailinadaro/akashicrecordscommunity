"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type Lenis from "lenis";

export default function GSAPRouteWatcher() {
  const pathname = usePathname();

  useEffect(() => {
    const now = performance.now().toFixed(2);
    console.log(`[${now}ms] 🧭 [GSAPRouteWatcher] Navegación a: ${pathname} | Triggers activos preservados: ${ScrollTrigger.getAll().length}`);

    // 1. Resetear scroll a la parte superior de inmediato
    if (typeof window !== "undefined") {
      const lenisInstance = (window as unknown as { lenis?: Lenis }).lenis;
      if (lenisInstance && typeof lenisInstance.scrollTo === "function") {
        lenisInstance.scrollTo(0, { immediate: true });
      } else {
        window.scrollTo(0, 0);
      }
    }

    // 2. Refrescar coordenadas de ScrollTrigger para el nuevo layout sin matar instancias
    const rafId = requestAnimationFrame(() => {
      ScrollTrigger.refresh();
    });

    return () => cancelAnimationFrame(rafId);
  }, [pathname]);

  return null;
}
