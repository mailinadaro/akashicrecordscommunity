"use client";

import React from "react";
import Image from "next/image";
import BrevoOptinForm from "@/components/forms/BrevoOptinForm";

export default function EntreDosCiclosOptinCard() {
  const videoSrc =
    "/entre%20ciclos/Crear_video_animado_de_h%C3%A9roe_c135dbfb_1080p.mp4";
  const posterSrc =
    "/entre%20ciclos/Screenshot_2026-11-20_175636.png_b58ab2ce_2K.jpg";

  return (
    <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col justify-center my-auto">
      {/* En Desktop: Tarjeta Frosted Glass unificada. En Mobile: bloques limpios sobre ciruela oscuro con cabecera visual en video */}
      <div className="relative flex flex-col gap-4 lg:block lg:overflow-hidden lg:rounded-3xl lg:border lg:border-gold-400/30 lg:bg-plum-950/75 lg:p-6 lg:shadow-2xl lg:shadow-plum-950/95 lg:backdrop-blur-2xl">
        {/* Destello sutil superior en desktop */}
        <div className="hidden lg:block pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[32rem] h-40 bg-gold-500/15 rounded-full blur-3xl" />

        {/* 1. Encabezado: En Mobile es una Cabecera Visual con el Video Animado (manos + cosmos); en Desktop es el header de la tarjeta */}
        <header className="relative overflow-hidden rounded-2xl border border-gold-300/40 shadow-xl shadow-black/50 min-h-[360px] sm:min-h-[400px] flex flex-col items-center justify-start text-center gap-2.5 px-4 pt-5 pb-32 sm:px-6 sm:pt-7 sm:pb-36 lg:min-h-0 lg:justify-center lg:overflow-visible lg:rounded-none lg:border-0 lg:border-b lg:border-gold-400/20 lg:shadow-none lg:px-0 lg:py-0 lg:pb-4 lg:mb-4 lg:gap-2">
          {/* Video visual exclusivo de la cabecera Mobile / Tablet */}
          <div className="lg:hidden absolute inset-0 z-0 pointer-events-none overflow-hidden">
            <video
              autoPlay
              loop
              muted
              playsInline
              poster={posterSrc}
              className="w-full h-full object-cover object-bottom"
            >
              <source src={videoSrc} type="video/mp4" />
            </video>
            {/* Scrim fuerte en la mitad superior (detrás del texto) y totalmente transparente abajo para lucir las manos */}
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(16,4,26,0.92)_0%,rgba(22,6,34,0.82)_46%,rgba(24,7,36,0.32)_68%,transparent_88%)]" />
          </div>

          {/* Contenido del Encabezado */}
          <div className="relative z-10 flex flex-col items-center text-center gap-2 sm:gap-2.5 lg:gap-2">
            {/* Badge Informativo Completo */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gold-300/70 lg:border-gold-400/45 bg-[#160522]/90 lg:bg-gold-500/20 text-[#FFF0D6] lg:text-gold-200 font-sans text-[10.5px] sm:text-xs font-semibold tracking-wider uppercase shadow-md backdrop-blur-sm">
              <span>ENCUENTRO ONLINE EN VIVO Y GRATUITO  <br /> 12 DE DICIEMBRE </span>
            </div>

            {/* Titular Principal H1 Destacado */}
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-white leading-none drop-shadow-[0_2px_12px_rgba(10,2,18,0.98)] lg:drop-shadow-none">
              Entre Dos Ciclos
            </h1>

            {/* Subtítulo H2 con peso y contraste reforzado en mobile */}
            <h2 className="font-display text-lg sm:text-xl lg:text-2xl text-[#FFEBD0] lg:text-gold-200 font-medium lg:font-light italic leading-[1.2] pb-0.5 max-w-3xl drop-shadow-[0_2px_10px_rgba(10,2,18,0.98)] lg:drop-shadow-none">
              Cómo integrar lo vivido este año y abrirte con claridad al 2027.
            </h2>

            {/* Horario de México y Modalidad destacada */}
            <div className="inline-flex flex-col sm:flex-row flex-wrap justify-center items-center gap-1 sm:gap-2 px-3.5 py-1.5 rounded-full bg-[#160522]/80 border border-gold-300/35 lg:bg-transparent lg:px-0 lg:py-0 lg:border-0 text-xs sm:text-sm font-body text-[#FFE4BE] lg:text-gold-300 font-semibold lg:font-medium shadow-sm lg:shadow-none">
              <span className="inline-flex items-center gap-2">
          
                <span>De 10:00 a 12:00 hs (Horario de México)</span>
              </span>
      
            </div>
          </div>
        </header>

        {/* 2. Cuerpo en 2 Columnas (Mobile: Formulario primero, luego Tamara + Bullets; Web: Info + Foto izquierda, Formulario derecha) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-5 lg:gap-7 items-center">
          {/* Columna Formulario Brevo — primera en mobile (order-1), derecha en web (lg:order-2) */}
          <div className="order-1 lg:order-2 lg:col-span-5 w-full">
            <div className="rounded-2xl border border-gold-400/30 bg-plum-950/85 lg:bg-plum-950/60 p-4 sm:p-5 shadow-xl backdrop-blur-md">
              <BrevoOptinForm redirectTo="/thank-you/entre-dos-ciclos" />
            </div>
          </div>

          {/* Columna Info (Foto de Tamara + Párrafo + Bullets) — segunda en mobile (order-2), izquierda en web (lg:order-1) */}
          <div className="order-2 lg:order-1 lg:col-span-7 flex flex-col justify-center text-left gap-3 sm:gap-3.5 rounded-2xl border border-gold-400/20 bg-plum-950/70 p-4 sm:p-5 lg:rounded-none lg:border-0 lg:bg-transparent lg:p-0">
            {/* Bloque superior: Foto transparente de Tamara + Párrafo de la promesa */}
            <div className="flex flex-col sm:flex-row items-center gap-3.5 sm:gap-4">
              <div className="relative w-32 h-40 sm:w-36 sm:h-44 shrink-0 flex items-end justify-center">
                {/* Halo dorado suave detrás del retrato sin fondo */}
                <div className="pointer-events-none absolute inset-2 rounded-full bg-gold-400/20 blur-xl" />
                <Image
                  src="/tamara/tamara_cutout_adapted.png"
                  alt="Tamara Ciriza — Akashic Records Community"
                  width={581}
                  height={709}
                  className="relative z-10 w-full h-full object-contain object-bottom drop-shadow-[0_6px_18px_rgba(0,0,0,0.45)]"
                  priority
                />
              </div>

              <p className="font-body text-xs sm:text-sm text-white/95 leading-relaxed text-center sm:text-left">
                Un espacio guiado por{" "}
                <strong className="text-white font-semibold">Tamara Ciriza</strong> de{" "}
                <strong className="text-white font-semibold">Akashic Records Community</strong>{" "}
                para detener la prisa, ordenar tu energía y recibir dirección clara antes de que
                termine el año. Sin costo.
              </p>
            </div>

            {/* Qué vas a vivir en estas 2 horas */}
            <div className="rounded-xl border border-gold-400/25 bg-white/[0.05] p-3.5 sm:p-4 backdrop-blur-md">
              <p className="text-xs sm:text-sm font-bold lg:font-semibold uppercase tracking-wider text-[#F5D7AD] lg:text-gold-300 mb-2 flex items-center gap-2">
                <span className="text-gold-200 lg:text-gold-400">✦</span>
                <span>Qué vas a vivir en estas 2 horas:</span>
              </p>
              <ul className="space-y-1.5 sm:space-y-2 font-body text-xs sm:text-sm text-white/95 leading-relaxed">
                <li className="flex items-start gap-2">
                  <span className="text-gold-200 lg:text-gold-400 text-sm shrink-0 select-none mt-0.5">✦</span>
                  <span>
                    <strong className="text-white font-semibold">
                      Meditación guiada de integración y enfoque:
                    </strong>{" "}
                    Integra y cierra el 2026 con liviandad, y recibe guía y foco para visualizar tu 2027.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold-200 lg:text-gold-400 text-sm shrink-0 select-none mt-0.5">✦</span>
                  <span>
                    <strong className="text-white font-semibold">
                      Panorama astrológico 2027:
                    </strong>{" "}
                    Entiende los movimientos clave que vienen para tomar mejores decisiones.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold-200 lg:text-gold-400 text-sm shrink-0 select-none mt-0.5">✦</span>
                  <span>
                    <strong className="text-white font-semibold">Canalización en vivo:</strong>{" "}
                    Recibe el mensaje central para alinear tus próximos pasos en el nuevo ciclo.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
