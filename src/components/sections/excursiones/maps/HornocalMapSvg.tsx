import React from "react";
import { JUJUY_PROVINCE_BOUNDARY_PATH } from "@/lib/cartography-constants";

interface HornocalMapSvgProps {
  className?: string;
}

const HORNOCAL_ROUTE_PATH =
  "M 497.24 627.73 493.51 628.41 487.42 626.35 477.7 621.78 472.4 612.74 471.63 604.66 470.55 598.39 466.04 590.77 462.7 585.93 460.93 579.69 460.05 571.89 456.02 568.21 457.79 562.94 456.02 558.44 458.66 549.88 456.69 545.03 456.6 538.57 453.62 532.48 452.97 520.89 456.5 507.95 462.1 494.74 468.48 484.76 471.78 476.68 470.47 474.29 471.03 471.56 477.05 460.36 486.6 436.32 486.32 426.86 488.64 418.45 488.92 412.9 486.61 407.44 487.37 404.63 487.14 402.28 484.92 397.96 483.03 391.08 484.24 385.68 485.8 373.22 484.8 370.5 485.13 370.29 485.55 370.36 486.27 370.73 486.81 370.55 486.86 370.03 487.07 369.79 487.28 369.75 488.32 368.98 488.86 368.97 489.35 369.14 489.48 369.06 490.23 369.53 490.55 369.49 491.32 370.03 492.41 370.26 493.71 370.94 494.41 371.14 495.22 371.09 497.46 371.86 498.92 372.19 499.78 372.12 500.66 371.97 501.98 371.9 502.95 372 505.32 372.14 507.65 371.96 510.7 372.97 512.53 373.3 513.18 373.08 513.74 372.61 514.34 372.42 514.26 372.52 514.46 372.86 514.57 373.1 514.77 373.07 514.91 372.95 515.44 373.14 516.28 373.46 516.18 373.61 516.18 373.75 516.38 373.67 516.61 373.73 517.5 374.42 517.82 374.59 518.06 374.79 518.49 374.88 518.65 374.84 519.03 374.96 519.24 374.93 519.32 374.8 519.83 374.81 520.49 374.94 521.64 375.6 522.41 376 522.42 376.19 522.62 376.33 523.02 376.45 523.37 376.81 523.53 376.82 523.7 376.94 523.98 377.29 524.14 377.52";

export default function HornocalMapSvg({ className = "w-full h-full" }: HornocalMapSvgProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.2"
      baseProfile="tiny"
      width="800"
      height="740"
      viewBox="0 0 800 740"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-label="Mapa cartográfico del recorrido a la Serranía del Hornocal"
    >
      <defs>
        <filter id="hornocal-glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>

        {/* Máscara territorial de la silueta provincial de Jujuy */}
        <clipPath id="hornocal-boundary-clip">
          <path d={JUJUY_PROVINCE_BOUNDARY_PATH} />
        </clipPath>
        <clipPath id="jujuy-boundary-clip">
          <path d={JUJUY_PROVINCE_BOUNDARY_PATH} />
        </clipPath>
      </defs>

      {/* Capa 1: Relleno base del territorio provincial */}
      <g id="OSMB-hornocal-boundary">
        <path
          d={JUJUY_PROVINCE_BOUNDARY_PATH}
          fill="#1c1a17"
          stroke="rgba(255, 255, 255, 0.08)"
          strokeWidth="1.2"
        />
      </g>

      {/* Capa 2: Textura de relieve topográfico raster con máscara territorial */}
      <image
        href="/excursiones/salinas/jujuy-topo-relief.webp"
        x="0"
        y="0"
        width="800"
        height="740"
        preserveAspectRatio="xMidYMid slice"
        clipPath="url(#jujuy-boundary-clip)"
        style={{
          mixBlendMode: "screen",
          opacity: 0.18,
          filter: "contrast(140%) brightness(80%) grayscale(100%)",
        }}
      />

      {/* Capa 3: Traza cartográfica base punteada (caminos vectoriales interiores) */}
      <path
        d={HORNOCAL_ROUTE_PATH}
        fill="none"
        stroke="var(--color-warm-50, #f5f0e7)"
        strokeOpacity="0.2"
        strokeWidth="2"
        strokeDasharray="4 6"
      />

      {/* Capa 4: Senderos y trazo interactivo del Hornocal trazado por GSAP */}
      <g id="hornocal2" fill="none" stroke="var(--color-ochre-500, #b68a4a)" strokeWidth="3" opacity="0.95">
        <path
          data-route-path
          d={HORNOCAL_ROUTE_PATH}
        />
      </g>

      {/* Capa 5: Baliza Cinemática Dinámica (Beacon) */}
      <g data-route-beacon className="pointer-events-none will-change-transform">
        <circle cx="0" cy="0" r="14" fill="var(--color-ochre-500, #b68a4a)" opacity="0.3" filter="url(#hornocal-glow)" />
        <circle cx="0" cy="0" r="5" fill="#f5f0e7" stroke="var(--color-ochre-500, #b68a4a)" strokeWidth="2" />
        <circle cx="0" cy="0" r="2" fill="var(--color-ochre-500, #b68a4a)" />
      </g>

      {/* Capa 6: Hitos Geográficos de la Ruta */}
      <g data-marker="ss-jujuy">
        <circle cx="497.24" cy="627.73" r="5" fill="var(--color-ochre-500, #b68a4a)" stroke="#292621" strokeWidth="2" />
        <text x="512" y="632" fill="#f5f0e7" className="font-mono text-[11px] uppercase tracking-wider font-semibold fill-warm-50">
          San Salvador de Jujuy
        </text>
      </g>

      <g data-marker="tilcara" className="opacity-30">
        <circle cx="462.1" cy="494.74" r="5" fill="var(--color-ochre-500, #b68a4a)" stroke="#292621" strokeWidth="2" />
        <text x="475" y="497" fill="#f5f0e7" className="font-mono text-[11px] uppercase tracking-wider font-semibold fill-warm-50">
          Tilcara (2.465 m)
        </text>
      </g>

      <g data-marker="humahuaca" className="opacity-30">
        <circle cx="485.8" cy="373.22" r="5" fill="var(--color-ochre-500, #b68a4a)" stroke="#292621" strokeWidth="2" />
        <text x="500" y="375" fill="#f5f0e7" className="font-mono text-[11px] uppercase tracking-wider font-semibold fill-warm-50">
          Humahuaca (3.012 m)
        </text>
      </g>

      <g data-marker="hornocal" className="opacity-30">
        <circle cx="524.14" cy="377.52" r="6" fill="#f5f0e7" stroke="var(--color-ochre-500, #b68a4a)" strokeWidth="2.5" />
        <text x="524.14" y="358" textAnchor="middle" fill="#f5f0e7" className="font-display italic text-[15px] fill-warm-50">
          Serranía del Hornocal (4.350 m)
        </text>
      </g>
    </svg>
  );
}
