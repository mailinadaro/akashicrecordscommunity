import React from "react";
import Image from "next/image";
import EntreDosCiclosOptinCard from "@/components/sections/optin/EntreDosCiclosOptinCard";

export default function EntreDosCiclosPage() {
  const videoSrc =
    "/entre%20ciclos/Crear_video_animado_de_h%C3%A9roe_c135dbfb_1080p.mp4";
  const posterSrc =
    "/entre%20ciclos/Screenshot_2026-11-20_175636.png_b58ab2ce_2K.jpg";

  return (
    <div className="relative flex flex-col justify-between items-center w-full min-h-full px-3.5 py-3 sm:px-5 sm:py-4 lg:py-2 lg:px-8 bg-gradient-to-b from-[#1a0824] via-plum-950 to-[#180722] lg:bg-none">
      {/* 1. Fondo Multimedia en Desktop (en mobile el video vive en la cabecera visual superior) */}
      <div className="hidden lg:block absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster={posterSrc}
          className="w-full h-full object-cover object-center transform scale-[1.01]"
        >
          <source src={videoSrc} type="video/mp4" />
        </video>

        {/* Fallback semántico */}
        <div className="hidden">
          <Image
            src={posterSrc}
            alt="Entre Dos Ciclos Fondo"
            fill
            sizes="100vw"
            priority
          />
        </div>

        {/* Scrim atenuado para que el video luzca con claridad sin perder contraste */}
        <div className="absolute inset-0 bg-gradient-to-b from-plum-950/45 via-plum-950/25 to-plum-950/55" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_30%,_rgba(15,3,20,0.65)_100%)]" />
      </div>

      {/* Espaciador superior flexible */}
      <div className="w-full shrink-0 h-1 hidden sm:block lg:hidden" />

      {/* 2. Tarjeta Central Desahogada (Web / Mobile) */}
      <EntreDosCiclosOptinCard />

      {/* 3. Logo de Akashic Records Community Centrado Abajo por Fuera del Recuadro con Gran Presencia */}
      <div className="relative z-10 w-full flex justify-center items-center py-2.5 sm:py-3 lg:py-2 shrink-0">
        <Image
          src="/logos/logo1-trimmed.png"
          alt="Akashic Records Community"
          width={361}
          height={57}
          className="h-11 sm:h-12 md:h-14 w-auto object-contain brightness-125 drop-shadow-[0_4px_24px_rgba(206,139,52,0.5)] transition-transform hover:scale-105"
          priority
        />
      </div>
    </div>
  );
}
