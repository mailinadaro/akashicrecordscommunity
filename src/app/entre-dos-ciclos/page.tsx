import React from "react";
import Image from "next/image";
import EntreDosCiclosOptinCard from "@/components/sections/optin/EntreDosCiclosOptinCard";

export default function EntreDosCiclosPage() {
  const videoSrc =
    "/entre%20ciclos/Crear_video_animado_de_h%C3%A9roe_c135dbfb_1080p.mp4";
  const posterSrc =
    "/entre%20ciclos/Screenshot_2026-11-20_175636.png_b58ab2ce_2K.jpg";

  return (
    <div className="relative flex flex-col justify-between items-center w-full min-h-full px-4 py-4 sm:py-6 lg:py-3 lg:px-8">
      {/* 1. Fondo Multimedia: Video Cinemático con Velo Lúcido y Tenue */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
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
      <div className="w-full shrink-0 h-1 sm:h-2" />

      {/* 2. Tarjeta Central Desahogada (Web / Mobile) */}
      <EntreDosCiclosOptinCard />

      {/* 3. Logo de Akashic Records Community Centrado Abajo por Fuera del Recuadro con Gran Presencia */}
      <div className="relative z-10 w-full flex justify-center items-center py-3 sm:py-5 shrink-0">
        <Image
          src="/logos/logo1.png"
          alt="Akashic Records Community"
          width={300}
          height={75}
          className="h-12 sm:h-16 md:h-20 w-auto object-contain brightness-125 drop-shadow-[0_4px_20px_rgba(206,139,52,0.35)] transition-transform hover:scale-105"
          priority
        />
      </div>
    </div>
  );
}
