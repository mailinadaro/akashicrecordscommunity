"use client";

import React from "react";
import Image from "next/image";
import BrevoOptinForm from "@/components/forms/BrevoOptinForm";

export default function EntreCiclosOptinCard() {
  return (
    <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col justify-center my-auto">
      {/* Tarjeta de Cristal Esmerilado (Frosted Glass) de Alta Gama */}
      <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl border border-gold-400/25 bg-plum-950/85 sm:bg-plum-950/75 p-3 sm:p-5 lg:p-8 shadow-2xl shadow-plum-950/90 backdrop-blur-xl">
        {/* Destello decorativo superior */}
        <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-36 bg-gold-500/10 rounded-full blur-3xl" />

        {/* Layout en 2 columnas en Desktop / Flujo vertical compacto en Móvil */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-2.5 sm:gap-5 lg:gap-8 items-center">
          {/* Columna Izquierda: Copy Editorial & Valor */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left gap-1.5 sm:gap-2.5 lg:gap-3.5">
            {/* Header: Logo + Badge */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2">
              <div className="relative h-5 sm:h-7 w-20 sm:w-28 shrink-0">
                <Image
                  src="/logos/logo1.png"
                  alt="Akashic Records Community"
                  fill
                  className="object-contain object-center lg:object-left brightness-110"
                  priority
                />
              </div>

              {/* Pre-encabezado / Filtro Rápido */}
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full border border-gold-400/40 bg-gold-500/15 text-gold-300 font-sans text-[8.5px] sm:text-[10px] font-semibold tracking-wider uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-gold-400 animate-pulse" />
                ENCUENTRO GRATUITO • 12 DIC (10 A 12 HS)
              </span>
            </div>

            {/* Titular Principal (El Gancho - Opción B) */}
            <h1 className="font-display text-lg sm:text-2xl lg:text-3xl xl:text-4xl font-normal tracking-tight text-gold-100 leading-[1.12]">
              Entre Dos Ciclos:{" "}
              <span className="italic text-gold-300 font-light">
                Cómo integrar lo vivido este año y abrirte con claridad al 2027.
              </span>
            </h1>

            {/* Subtítulo (La Promesa en 2 líneas) */}
            <p className="font-body text-[10.5px] sm:text-xs lg:text-sm text-gold-200/85 leading-snug sm:leading-relaxed max-w-xl">
              Un espacio guiado junto a{" "}
              <strong className="text-gold-200 font-medium">Akashic Records Community</strong> para
              detener la prisa, ordenar tu energía y recibir dirección clara antes de que termine el
              año. Sin costo.
            </p>

            {/* Qué vas a vivir en estas 2 horas (3 Bullets directos al resultado) */}
            <div className="w-full pt-1 sm:pt-2 border-t border-gold-400/15">
              <p className="text-[9.5px] sm:text-xs font-semibold uppercase tracking-wider text-gold-300/90 mb-1 text-center lg:text-left">
                Qué vas a vivir en estas 2 horas:
              </p>
              <ul className="grid grid-cols-1 gap-1 text-left font-body text-[10px] sm:text-xs text-gold-100/90 leading-tight">
                <li className="flex items-start gap-1.5">
                  <span className="text-gold-400 text-[10px] sm:text-xs shrink-0 select-none">✦</span>
                  <span>
                    <strong className="text-gold-200 font-semibold">
                      Meditación guiada de integración:
                    </strong>{" "}
                    Suelta el peso y el ruido mental del 2026 para cerrar el año liviano.
                  </span>
                </li>
                <li className="flex items-start gap-1.5">
                  <span className="text-gold-400 text-[10px] sm:text-xs shrink-0 select-none">✦</span>
                  <span>
                    <strong className="text-gold-200 font-semibold">
                      Panorama astrológico 2027:
                    </strong>{" "}
                    Entiende los movimientos clave que vienen para tomar mejores decisiones.
                  </span>
                </li>
                <li className="flex items-start gap-1.5">
                  <span className="text-gold-400 text-[10px] sm:text-xs shrink-0 select-none">✦</span>
                  <span>
                    <strong className="text-gold-200 font-semibold">Canalización en vivo:</strong>{" "}
                    Recibe el mensaje central para alinear tus próximos pasos en el nuevo ciclo.
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Columna Derecha: Formulario Brevo Estilizado */}
          <div className="lg:col-span-5 w-full">
            <div className="rounded-xl border border-gold-400/20 bg-plum-900/50 p-2.5 sm:p-4 shadow-inner backdrop-blur-md">
              <BrevoOptinForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
