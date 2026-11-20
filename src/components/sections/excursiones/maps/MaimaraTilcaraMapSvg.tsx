import React from "react";
import { JUJUY_PROVINCE_BOUNDARY_PATH } from "@/lib/cartography-constants";

interface MaimaraTilcaraMapSvgProps {
  className?: string;
}

const MAIMARA_ROUTE_PATH =
  "M 499.6 633.33 494.54 630.54 494.01 628.11 490.19 627.37 486.6 626 482.1 624.1 479.87 621.86 476.89 619.92 473.95 614.21 472.34 611.87 471.58 607.39 471.32 600.32 467.35 592.98 462.27 584.76 461.76 583.57 461.69 582.32 461.13 581.83 461.41 580.92 461.28 579.88 460.44 577.51 459.22 576.7 459.23 575.66 459.99 574.56 460.17 572.51 460.07 571.11 459.58 571.27 459.1 570.71 458.34 570.67 458.18 569.25 457.13 569.51 457.08 568.69 456.4 568.79 455.69 567.9 457.37 563.19 457.27 560.84 456.35 559.32 455.74 558.36 456.22 556.85 457.47 553.48 458.61 547.66 457.31 546.78 455.94 543.71 456.48 539.32 455.72 538.16 455.73 536.65 455.2 535.58 453.36 532.09 453.24 529.39 453.58 526.52 453.21 524.19 452.59 522.99 452.72 520.69 453.15 518.34 454.1 516 456.91 507.06 458.87 505.18 459.66 501.71 460.94 495.92 464.92 489.29 468.25 485.84 470.14 481.97 471.41 479.03 471.85 476.99 471.32 475.12 470.22 473.57 471.04 471.84 471.75 471.33 472.51 469.88 473.17 468.51";

export default function MaimaraTilcaraMapSvg({
  className = "w-full h-full",
}: MaimaraTilcaraMapSvgProps) {
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
      aria-label="Mapa cartográfico de Maimará y Tilcara"
    >
      <defs>
        <filter id="maimara-glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>

        {/* Máscara territorial de la silueta provincial de Jujuy */}
        <clipPath id="maimara-boundary-clip">
          <path d={JUJUY_PROVINCE_BOUNDARY_PATH} />
        </clipPath>
        <clipPath id="jujuy-boundary-clip">
          <path d={JUJUY_PROVINCE_BOUNDARY_PATH} />
        </clipPath>
      </defs>

      {/* Capa 1: Relleno base del territorio provincial */}
      <g id="OSMB-maimara-boundary">
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
        d={MAIMARA_ROUTE_PATH}
        fill="none"
        stroke="var(--color-warm-50, #f5f0e7)"
        strokeOpacity="0.2"
        strokeWidth="2"
        strokeDasharray="4 6"
      />

      {/* Capa 4: Trazo vectorial interactivo de la ruta a Maimará y Tilcara por RN 9 */}
      <g id="MaimaraTilcara2" fill="none" stroke="var(--color-ochre-500, #b68a4a)" strokeWidth="3" opacity="0.95">
        <path
          data-route-path
          d={MAIMARA_ROUTE_PATH}
        />
      </g>

      {/* Capa 5: Baliza Cinemática Dinámica (Beacon) */}
      <g data-route-beacon className="pointer-events-none will-change-transform">
        <circle cx="0" cy="0" r="14" fill="var(--color-ochre-500, #b68a4a)" opacity="0.3" filter="url(#maimara-glow)" />
        <circle cx="0" cy="0" r="5" fill="#f5f0e7" stroke="var(--color-ochre-500, #b68a4a)" strokeWidth="2" />
        <circle cx="0" cy="0" r="2" fill="var(--color-ochre-500, #b68a4a)" />
      </g>

      {/* Capa 6: Hitos Geográficos de la Ruta */}
      <g data-marker="ss-jujuy">
        <circle cx="499.6" cy="633.33" r="5" fill="var(--color-ochre-500, #b68a4a)" stroke="#292621" strokeWidth="2" />
        <text x="514" y="637" fill="#f5f0e7" className="font-mono text-[11px] uppercase tracking-wider font-semibold fill-warm-50">
          San Salvador de Jujuy
        </text>
      </g>

      <g data-marker="volcan" className="opacity-30">
        <circle cx="467.35" cy="592.98" r="4.5" fill="var(--color-ochre-500, #b68a4a)" stroke="#292621" strokeWidth="2" />
        <text x="482" y="596" fill="#f5f0e7" className="font-mono text-[10px] uppercase tracking-wider font-medium fill-warm-50/80">
          Volcán (2.078 m)
        </text>
      </g>

      <g data-marker="maimara" className="opacity-30">
        <circle cx="454.1" cy="516" r="5" fill="var(--color-ochre-500, #b68a4a)" stroke="#292621" strokeWidth="2" />
        <text x="468" y="519" fill="#f5f0e7" className="font-mono text-[11px] uppercase tracking-wider font-semibold fill-warm-50">
          Maimará (2.383 m)
        </text>
      </g>

      <g data-marker="tilcara" className="opacity-30">
        <circle cx="473.17" cy="468.51" r="6" fill="#f5f0e7" stroke="var(--color-ochre-500, #b68a4a)" strokeWidth="2.5" />
        <text x="473.17" y="450" textAnchor="middle" fill="#f5f0e7" className="font-display italic text-[15px] fill-warm-50">
          Tilcara (2.465 m)
        </text>
      </g>
    </svg>
  );
}
