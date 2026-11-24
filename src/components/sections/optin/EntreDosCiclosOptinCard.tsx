"use client";

import React from "react";
import BrevoOptinForm from "@/components/forms/BrevoOptinForm";

export default function EntreDosCiclosOptinCard() {
  return (
    <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col justify-center my-auto">
      {/* Tarjeta de Cristal Esmerilado (Frosted Glass) Amplia y Luminosa */}
      <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl border border-gold-400/30 bg-plum-950/75 p-4 sm:p-6 lg:p-8 shadow-2xl shadow-plum-950/95 backdrop-blur-2xl">
        {/* Destello sutil superior */}
        <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[32rem] h-40 bg-gold-500/15 rounded-full blur-3xl" />

        {/* 1. Encabezado de la Tarjeta: Badge + Título Principal H1 + Subtítulo H2 */}
        <div className="flex flex-col items-center text-center gap-2 sm:gap-2.5 mb-4 sm:mb-6 border-b border-gold-400/20 pb-3.5 sm:pb-5">
          {/* Badge Informativo Completo */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gold-400/45 bg-gold-500/20 text-gold-200 font-sans text-[10px] sm:text-xs font-semibold tracking-wider uppercase shadow-sm">
            <span className="w-2 h-2 rounded-full bg-gold-400 animate-pulse" />
            <span>ENCUENTRO ONLINE EN VIVO Y GRATUITO • 12 DE DICIEMBRE • VÍA ZOOM</span>
          </div>

          {/* Titular Principal H1 Destacado, Grande y Separado */}
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-white leading-none">
            Entre Dos Ciclos
          </h1>

          {/* Subtítulo H2 (Sub-tagline claro y destacado) */}
          <h2 className="font-display text-base sm:text-xl lg:text-2xl text-gold-200 font-light italic leading-snug max-w-3xl">
            Cómo integrar lo vivido este año y abrirte con claridad al 2027.
          </h2>

          {/* Horario de México y Modalidad destacada */}
          <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-body text-gold-300 font-medium">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-gold-400" />
            <span>De 10:00 a 12:00 h (Horario de México)</span>
            <span className="text-gold-400/60">•</span>
            <span>2 Horas de Formación en Vivo</span>
          </div>
        </div>

        {/* 2. Cuerpo en 2 Columnas Descomprimidas para Versión Web */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 lg:gap-8 items-center">
          {/* Columna Izquierda: Promesa de Valor & Los 3 Bullets de Transformación */}
          <div className="lg:col-span-6 flex flex-col justify-center text-left gap-3.5 sm:gap-4">
            {/* Párrafo de la promesa */}
            <p className="font-body text-xs sm:text-sm text-gold-100/90 leading-relaxed">
              Un espacio guiado junto a{" "}
              <strong className="text-white font-semibold">Akashic Records Community</strong> para
              detener la prisa, ordenar tu energía y recibir dirección clara antes de que termine el
              año. Sin costo.
            </p>

            {/* Qué vas a vivir en estas 2 horas */}
            <div className="rounded-xl border border-gold-400/20 bg-plum-900/40 p-3.5 sm:p-4 backdrop-blur-md">
              <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-gold-300 mb-2.5 flex items-center gap-2">
                <span className="text-gold-400">✦</span>
                <span>Qué vas a vivir en estas 2 horas:</span>
              </p>
              <ul className="space-y-2.5 font-body text-xs sm:text-sm text-gold-100/95 leading-relaxed">
                <li className="flex items-start gap-2">
                  <span className="text-gold-400 text-sm shrink-0 select-none mt-0.5">✦</span>
                  <span>
                    <strong className="text-white font-semibold">
                      Meditación guiada de integración:
                    </strong>{" "}
                    Suelta el peso y el ruido mental del 2026 para cerrar el año liviano.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold-400 text-sm shrink-0 select-none mt-0.5">✦</span>
                  <span>
                    <strong className="text-white font-semibold">
                      Panorama astrológico 2027:
                    </strong>{" "}
                    Entiende los movimientos clave que vienen para tomar mejores decisiones.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold-400 text-sm shrink-0 select-none mt-0.5">✦</span>
                  <span>
                    <strong className="text-white font-semibold">Canalización en vivo:</strong>{" "}
                    Recibe el mensaje central para alinear tus próximos pasos en el nuevo ciclo.
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Columna Derecha: Formulario Brevo Espacioso y Confortable */}
          <div className="lg:col-span-6 w-full">
            <div className="rounded-2xl border border-gold-400/25 bg-plum-900/60 p-4 sm:p-6 shadow-xl backdrop-blur-md">
              <BrevoOptinForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
