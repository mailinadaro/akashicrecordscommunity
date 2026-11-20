import React from "react";
import { JUJUY_PROVINCE_BOUNDARY_PATH } from "@/lib/cartography-constants";

interface CarnavalMapSvgProps {
  className?: string;
}

const CARNAVAL_ROUTE_PATH =
  "M 492.58 628.88 480.78 623.63 474.03 614.8 468.97 595.69 462.96 586.73 459.36 576.05 460.53 570.44 455.84 567.41 457.53 563.2 456.39 558.75 457.97 547.75 455.7 534.6 453.4 519.54 454.87 512.77 446.87 513.46 454.79 512.75 458.3 506.37 461.02 497.38 464.83 489.59 470.93 481.51 472.2 476.8 470.73 473.91 473.34 467.73 475.98 466.41 478.62 459.15 480.74 450.48 486.34 432.38 486.29 424.58 489.74 417.45 486.88 408.03 487.17 403.05 485.37 397.64 483.01 391.67 484.33 385.27 485.1 372.14 481.22 364.59 479.75 357.85 482.02 350.97 476.19 333.26 481.54 322.67 481.9 319.23 480.92 317.04 477.18 315.49 476.6 309.15 470.73 304.83 466.91 307.2 463.91 310.3 453.72 313.54 446.1 307.87 443.24 303.55 438.25 300.18 432.9 298.96 429.45 297.14 421.56 297.88 419.29 296.19 419.51 293.02 416.29 290.38 406.9 284.71 405.73 281.87 402.58 279.98 397.52 277.08 396.42 272.35 395.94 245.61";

export default function CarnavalMapSvg({ className = "w-full h-full" }: CarnavalMapSvgProps) {
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
      aria-label="Mapa cartográfico del recorrido del Carnaval de la Quebrada"
    >
      <defs>
        <filter id="carnaval-glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>

        {/* Máscara territorial de la silueta provincial de Jujuy */}
        <clipPath id="carnaval-boundary-clip">
          <path d={JUJUY_PROVINCE_BOUNDARY_PATH} />
        </clipPath>
        <clipPath id="jujuy-boundary-clip">
          <path d={JUJUY_PROVINCE_BOUNDARY_PATH} />
        </clipPath>
      </defs>

      {/* Capa 1: Relleno base del territorio provincial */}
      <g id="OSMB-carnaval-boundary">
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
        d={CARNAVAL_ROUTE_PATH}
        fill="none"
        stroke="var(--color-warm-50, #f5f0e7)"
        strokeOpacity="0.2"
        strokeWidth="2"
        strokeDasharray="4 6"
      />

      {/* Capa 4: Trayectoria interactiva trazada por GSAP */}
      <g id="carnaval2" fill="none" stroke="var(--color-ochre-500, #b68a4a)" strokeWidth="3" opacity="0.95">
        <path
          data-route-path
          d={CARNAVAL_ROUTE_PATH}
        />
      </g>

      {/* Capa 5: Baliza Cinemática Dinámica (Beacon) */}
      <g data-route-beacon className="pointer-events-none will-change-transform">
        <circle cx="0" cy="0" r="14" fill="var(--color-ochre-500, #b68a4a)" opacity="0.3" filter="url(#carnaval-glow)" />
        <circle cx="0" cy="0" r="5" fill="#f5f0e7" stroke="var(--color-ochre-500, #b68a4a)" strokeWidth="2" />
        <circle cx="0" cy="0" r="2" fill="var(--color-ochre-500, #b68a4a)" />
      </g>

      {/* Capa 6: Hitos Geográficos de la Ruta Calibrados GIS */}
      {/* 1. San Salvador de Jujuy */}
      <g data-marker="ss-jujuy">
        <circle cx="492.58" cy="628.88" r="5" fill="var(--color-ochre-500, #b68a4a)" stroke="#292621" strokeWidth="2" />
        <text x="506" y="632" fill="#f5f0e7" className="font-mono text-[11px] uppercase tracking-wider font-semibold fill-warm-50">
          San Salvador de Jujuy
        </text>
      </g>

      {/* 2. Purmamarca */}
      <g data-marker="purmamarca" className="opacity-30">
        <circle cx="446.87" cy="513.46" r="4.5" fill="var(--color-ochre-500, #b68a4a)" stroke="#292621" strokeWidth="2" />
        <text x="435" y="517" textAnchor="end" fill="#f5f0e7" className="font-mono text-[10px] uppercase tracking-wider font-medium fill-warm-50/80">
          Purmamarca (2.324 m)
        </text>
      </g>

      {/* 3. Maimará */}
      <g data-marker="maimara" className="opacity-30">
        <circle cx="458.3" cy="506.37" r="4.5" fill="var(--color-ochre-500, #b68a4a)" stroke="#292621" strokeWidth="2" />
        <text x="470" y="510" textAnchor="start" fill="#f5f0e7" className="font-mono text-[10px] uppercase tracking-wider font-medium fill-warm-50/80">
          Maimará (2.383 m)
        </text>
      </g>

      {/* 4. Tilcara */}
      <g data-marker="tilcara" className="opacity-30">
        <circle cx="473.34" cy="467.73" r="5" fill="var(--color-ochre-500, #b68a4a)" stroke="#292621" strokeWidth="2" />
        <text x="487" y="471" fill="#f5f0e7" className="font-mono text-[11px] uppercase tracking-wider font-semibold fill-warm-50">
          Tilcara (2.465 m)
        </text>
      </g>

      {/* 5. Uquía */}
      <g data-marker="uquia" className="opacity-30">
        <circle cx="483.01" cy="391.67" r="4.5" fill="var(--color-ochre-500, #b68a4a)" stroke="#292621" strokeWidth="2" />
        <text x="496" y="395" fill="#f5f0e7" className="font-mono text-[10px] uppercase tracking-wider font-medium fill-warm-50/80">
          Uquía (2.824 m)
        </text>
      </g>

      {/* 6. Humahuaca */}
      <g data-marker="humahuaca" className="opacity-30">
        <circle cx="485.1" cy="372.14" r="5" fill="var(--color-ochre-500, #b68a4a)" stroke="#292621" strokeWidth="2" />
        <text x="498" y="375" fill="#f5f0e7" className="font-mono text-[11px] uppercase tracking-wider font-semibold fill-warm-50">
          Humahuaca (3.012 m)
        </text>
      </g>

      {/* 7. Abra Pampa */}
      <g data-marker="abra-pampa" className="opacity-30">
        <circle cx="395.94" cy="245.61" r="6" fill="#f5f0e7" stroke="var(--color-ochre-500, #b68a4a)" strokeWidth="2.5" />
        <text x="395.94" y="228" textAnchor="middle" fill="#f5f0e7" className="font-display italic text-[15px] fill-warm-50">
          Abra Pampa · Puna (3.484 m)
        </text>
      </g>
    </svg>
  );
}
