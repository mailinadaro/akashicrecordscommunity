"use client";

import React from "react";
import Link from "next/link";
import { trackInquireExperienceClick } from "@/lib/analytics";

export interface InclusionItem {
  id: string;
  title: string;
  description?: string;
}

export interface InvestmentSectionProps {
  id?: string;
  className?: string;
  tagline?: string;
  title?: string;
  description?: string;
  currency?: string;
  price?: string;
  priceSuffix?: string;
  priceDetail?: string;
  perPersonNote?: string;
  inclusionsTitle?: string;
  inclusions?: InclusionItem[];
  conditionsNote?: string;
  ctaLabel?: string;
  ctaHref?: string;
  secondaryCtaLabel?: string;
  secondaryCtaHref?: string;
}

export const DEFAULT_INCLUSIONS: InclusionItem[] = [
  {
    id: "vehiculo",
    title: "Vehículo 4x4 de alta gama exclusivo",
    description:
      "Camioneta 4WD preparada para geografía de altura y caminos de ripio, con combustible y peajes incluidos.",
  },
  {
    id: "guia",
    title: "Guía-anfitrión especializado",
    description:
      "Conductor y baqueano profesional con profundo conocimiento de la historia, geografía y cosmovisión puneña.",
  },
  {
    id: "oxigeno",
    title: "Asistencia médica y oxigenoterapia",
    description:
      "Oximetría de pulso y tubo de oxígeno medicinal a bordo para prevención y respuesta inmediata al soroche.",
  },
  {
    id: "logistica",
    title: "Logística y tiempos a medida",
    description:
      "Flexibilidad absoluta para descansos, tomas fotográficas panorámicas y ritmo adaptado a los pasajeros.",
  },
  {
    id: "traslado",
    title: "Pick-up y drop-off privado",
    description:
      "Recepción y retorno directo en su alojamiento en San Salvador de Jujuy o puntos acordados de la Quebrada.",
  },
];

export default function InvestmentSection({
  id = "valor",
  className = "",
  tagline = "EXPEDICIÓN PRIVADA // TARIFA INTEGRAL",
  title = "Inversión de la Expedición",
  description = "Una travesía privada diseñada para viajar a su propio ritmo, con la privacidad, el confort y la asistencia técnica que exige la alta montaña jujeña.",
  currency = "USD",
  price = "480",
  priceSuffix = "/ grupo",
  priceDetail = "Tarifa integral por vehículo privado · Hasta 4 pasajeros",
  perPersonNote = "Equivalente a ~$120 USD por pasajero en base a 4 personas",
  inclusionsTitle = "SERVICIOS INCLUIDOS EN LA EXPERIENCIA",
  inclusions = DEFAULT_INCLUSIONS,
  conditionsNote = "* Tarifa cerrada por vehículo privado (hasta 4 pasajeros). No incluye almuerzos no especificados ni tasas de ingreso a comunidades locales abonadas directamente en destino.",
  ctaLabel = "Consultar Disponibilidad",
  ctaHref = "/contacto",
  secondaryCtaLabel = "¿Dudas sobre la expedición? Conversar con un asesor →",
  secondaryCtaHref = "/contacto",
}: InvestmentSectionProps) {
  return (
    <section
      id={id}
      aria-label={title}
      className={`relative w-full bg-earth-950 text-warm-50 py-20 sm:py-24 lg:py-28 overflow-hidden select-none border-t border-b border-white/10 ${className}`}
    >
      {/* Resplandores ambientales sutiles de fondo (Luxury Glow) */}
      <div
        className="absolute -top-32 -left-32 w-80 h-80 bg-ochre-500/5 blur-[120px] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-32 -right-32 w-80 h-80 bg-ochre-500/5 blur-[140px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-[1280px] mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-stretch">
          {/* =========================================================================
              COLUMNA IZQUIERDA: Propuesta de Valor, Contexto Editorial & Inclusiones
             ========================================================================= */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div>
              {/* Telemetría editorial */}
              <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.25em] text-ochre-500 font-semibold mb-3 block">
                {tagline}
              </span>

              {/* Título de sección en Serif Itálica */}
              <h2 className="font-display italic text-3xl sm:text-4xl lg:text-5xl text-warm-50 font-normal leading-tight tracking-normal">
                {title}
              </h2>

              {/* Descripción de servicio privado exclusivo */}
              <p className="font-sans text-sm sm:text-base text-warm-50/75 leading-relaxed mt-4 max-w-2xl font-light">
                {description}
              </p>

              {/* Separador editorial sutil */}
              <div className="border-t border-white/10 my-8" />

              {/* Listado de Inclusiones de Alta Gama */}
              <div>
                <h3 className="font-sans text-xs uppercase tracking-[0.2em] text-warm-50/60 font-medium mb-6">
                  {inclusionsTitle}
                </h3>

                <ul className="space-y-4">
                  {inclusions.map((item) => (
                    <li key={item.id} className="flex items-start gap-3.5">
                      {/* Distintivo romboide en ocre metálico */}
                      <span
                        className="mt-2 shrink-0 inline-block w-1.5 h-1.5 bg-ochre-500 rotate-45"
                        aria-hidden="true"
                      />
                      <div>
                        <span className="font-sans text-sm sm:text-base text-warm-50 font-medium block">
                          {item.title}
                        </span>
                        {item.description && (
                          <span className="font-sans text-xs sm:text-sm text-warm-50/60 font-light mt-0.5 block leading-relaxed">
                            {item.description}
                          </span>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Cláusula / Nota al pie editorial */}
            {conditionsNote && (
              <p className="mt-8 pt-6 border-t border-white/10 text-xs text-warm-50/40 font-sans font-light leading-relaxed">
                {conditionsNote}
              </p>
            )}
          </div>

          {/* =========================================================================
              COLUMNA DERECHA: Tarjeta Glassmorphism de Precio, Métricas & CTA
             ========================================================================= */}
          <div className="lg:col-span-5 flex">
            <aside
              aria-label="Resumen de tarifa y reserva"
              className="w-full bg-earth-950/40 backdrop-blur-2xl border border-white/15 p-8 sm:p-10 lg:p-12 flex flex-col justify-between shadow-2xl relative rounded-none"
            >
              {/* Acento lineal superior en ocre */}
              <div
                className="absolute top-0 left-0 w-24 h-[2px] bg-ochre-500"
                aria-hidden="true"
              />

              <div>
                {/* Cabecera técnica de la tarjeta */}
                <div className="flex items-center justify-between pb-5 border-b border-white/10">
                  <span className="font-mono text-[10px] tracking-[0.2em] text-ochre-400 font-semibold uppercase">
                    COTIZACIÓN PRIVADA
                  </span>
                  <span className="font-mono text-[10px] tracking-[0.15em] text-warm-50/50 uppercase">
                    HASTA 4 PAX
                  </span>
                </div>

                {/* Bloque de Precio Prominente */}
                <div className="my-8">
                  <span className="font-display italic text-xs sm:text-sm text-warm-50/60 block mb-1.5">
                    Tarifa final por expedición
                  </span>
                  <div className="flex items-baseline gap-2">
                    <span className="font-sans text-xl sm:text-2xl font-light text-ochre-400">
                      {currency}
                    </span>
                    <span className="font-sans tabular-nums text-5xl sm:text-6xl font-medium tracking-tight text-warm-50">
                      {price}
                    </span>
                    {priceSuffix && (
                      <span className="font-sans text-xs sm:text-sm text-warm-50/50 font-light">
                        {priceSuffix}
                      </span>
                    )}
                  </div>

                  <p className="font-sans text-xs text-warm-50/70 mt-2.5 font-light leading-relaxed">
                    {priceDetail}
                  </p>

                  {perPersonNote && (
                    <div className="mt-4 inline-flex items-center gap-2 bg-white/5 border border-white/10 px-3.5 py-1.5 text-[11px] font-sans text-warm-50/90 font-light">
                      {perPersonNote}
                    </div>
                  )}
                </div>

                {/* Métricas y Condiciones de Operación */}
                <dl className="border-t border-b border-white/10 py-5 space-y-3">
                  <div className="flex items-center justify-between text-xs">
                    <dt className="text-warm-50/60 font-light">Capacidad máxima</dt>
                    <dd className="text-warm-50 font-medium font-sans">
                      4 pasajeros por vehículo
                    </dd>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <dt className="text-warm-50/60 font-light">Modalidad de viaje</dt>
                    <dd className="text-warm-50 font-medium font-sans">
                      Exclusivo y personalizado
                    </dd>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <dt className="text-warm-50/60 font-light">Reserva sugerida</dt>
                    <dd className="text-warm-50 font-medium font-sans">
                      48 – 72 hs previas
                    </dd>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <dt className="text-warm-50/60 font-light">Garantía climática</dt>
                    <dd className="text-ochre-400 font-medium font-sans">
                      Reprogramación flexible
                    </dd>
                  </div>
                </dl>
              </div>

              {/* Botón de Acción Principal y Enlace Secundario */}
              <div className="mt-8 pt-2 flex flex-col gap-3.5">
                <Link
                  href={ctaHref}
                  onClick={() => {
                    const slugMatch = ctaHref.match(/[?&]interes=([^&]+)/);
                    const slug = slugMatch ? decodeURIComponent(slugMatch[1]) : undefined;
                    trackInquireExperienceClick({
                      offer_type: 'private_excursion',
                      experience_slug: slug,
                      source_section: 'investment_section',
                      cta_text: ctaLabel,
                      destination_url: ctaHref,
                    });
                  }}
                  className="w-full group/btn bg-ochre-500 hover:bg-warm-50 text-earth-950 transition-all duration-300 py-4 px-6 text-xs font-semibold tracking-[0.25em] uppercase text-center flex items-center justify-center gap-3 shadow-xl rounded-none"
                >
                  <span>{ctaLabel}</span>
                  <span
                    className="transform transition-transform duration-300 group-hover/btn:translate-x-1"
                    aria-hidden="true"
                  >
                    →
                  </span>
                </Link>

                {secondaryCtaLabel && (
                  <Link
                    href={secondaryCtaHref}
                    onClick={() => {
                      trackInquireExperienceClick({
                        offer_type: 'private_excursion',
                        source_section: 'investment_section',
                        cta_text: secondaryCtaLabel,
                        destination_url: secondaryCtaHref,
                      });
                    }}
                    className="text-center font-sans text-[11px] tracking-wider uppercase text-warm-50/60 hover:text-ochre-400 transition-colors duration-200 py-1"
                  >
                    {secondaryCtaLabel}
                  </Link>
                )}
              </div>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
}
