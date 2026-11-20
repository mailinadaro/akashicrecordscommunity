"use client";

import React from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site.config";

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
    id: "clases",
    title: "3 Encuentros en vivo con Tamara (10.5 horas)",
    description: "Formación interactiva por Zoom los sábados 16, 23 y 30 de enero de 2027.",
  },
  {
    id: "grabaciones",
    title: "Grabaciones completas con acceso por 3 meses",
    description: "Para repasar las clases a tu propio ritmo dentro de la plataforma Circle.",
  },
  {
    id: "manual",
    title: "Manual digital «El ABC Akáshico» (22 páginas)",
    description: "Protocolos, oraciones sagradas, decretos de sellado y ejemplos de preguntas.",
  },
  {
    id: "bitacora",
    title: "Bitácora de integración de 21 días imprimible",
    description: "Ejercicios diarios para asentar el método y registrar tus experiencias.",
  },
  {
    id: "meditaciones",
    title: "3 Meditaciones guiadas en audio de alta fidelidad",
    description: "Sintonización matutina, encuentro con tus Guías y mantra ANAHIÚ.",
  },
  {
    id: "masterclass",
    title: "Masterclass «El Despertar de la Conciencia en la Era de Acuario»",
    description: "Clase magistral para comprender el momento evolutivo actual.",
  },
];

export default function InvestmentSection({
  id = "inscripcion",
  className = "",
  tagline = "INICIACIÓN AKÁSHICA // ENERO 2027",
  title = "Inversión de la Iniciación",
  description = "Una formación vivencial paso a paso diseñada para aprender a consultar tus propios Registros Akáshicos con autonomía y discernimiento.",
  currency = "USD",
  price = "150",
  priceSuffix = "/ pago único",
  priceDetail = "Acceso completo a las 3 jornadas en vivo + materiales + grabaciones en Circle",
  perPersonNote = "Crédito a Favor: 100% de este importe es transferible a tu membresía anual hasta el 31/01/2027",
  inclusionsTitle = "SERVICIOS Y MATERIALES INCLUIDOS",
  inclusions = DEFAULT_INCLUSIONS,
  conditionsNote = "* Pago seguro procesado a través de Hotmart. Garantía de reembolso de 7 días corridos desde tu inscripción.",
  ctaLabel = "Inscribirme Ahora",
  ctaHref = siteConfig.contact.whatsapp,
  secondaryCtaLabel = "¿Dudas sobre la iniciación? Consultar por WhatsApp →",
  secondaryCtaHref = siteConfig.contact.whatsapp,
}: InvestmentSectionProps) {
  return (
    <section
      id={id}
      aria-label={title}
      className={`relative w-full bg-plum-950 text-gold-200 py-20 sm:py-24 lg:py-28 overflow-hidden select-none border-t border-b border-gold-400/20 ${className}`}
    >
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-stretch">
          {/* COLUMNA IZQUIERDA */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div>
              <span className="font-sans text-[10px] sm:text-[11px] uppercase tracking-[0.25em] text-gold-400 font-semibold mb-3 block">
                {tagline}
              </span>

              <h2 className="font-display italic text-3xl sm:text-4xl lg:text-5xl text-gold-200 font-normal leading-tight tracking-normal">
                {title}
              </h2>

              <p className="font-body text-sm sm:text-base text-gold-200/80 leading-relaxed mt-4 max-w-2xl font-light">
                {description}
              </p>

              <div className="border-t border-gold-400/20 my-8" />

              <div>
                <h3 className="font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-gold-400 mb-6">
                  {inclusionsTitle}
                </h3>

                <ul className="space-y-4">
                  {inclusions.map((item) => (
                    <li key={item.id} className="flex items-start gap-3.5">
                      <span className="w-1.5 h-1.5 bg-gold-400 rotate-45 shrink-0 mt-2" aria-hidden="true" />
                      <div>
                        <span className="font-body font-medium text-sm sm:text-base text-gold-100 block">
                          {item.title}
                        </span>
                        {item.description && (
                          <span className="font-body text-xs sm:text-sm text-gold-200/70 font-light leading-relaxed block mt-0.5">
                            {item.description}
                          </span>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {conditionsNote && (
              <p className="font-body text-xs text-gold-200/60 font-light leading-relaxed mt-8 border-t border-gold-400/10 pt-4">
                {conditionsNote}
              </p>
            )}
          </div>

          {/* COLUMNA DERECHA: TARJETA DE PRECIO */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <aside className="relative bg-plum-900 border border-gold-400/30 p-8 sm:p-10 shadow-2xl flex flex-col justify-between">
              <div>
                <span className="font-sans text-[10px] uppercase tracking-widest text-gold-400 font-semibold block mb-2">
                  Tarifa Oficial de Inscripción
                </span>

                <div className="flex items-baseline gap-2 mb-2">
                  <span className="font-sans text-2xl text-gold-400 font-light">{currency}</span>
                  <span className="font-display italic text-5xl sm:text-6xl text-gold-200 font-medium tracking-tight">
                    {price}
                  </span>
                  {priceSuffix && (
                    <span className="font-sans text-xs text-gold-300/60 font-light">
                      {priceSuffix}
                    </span>
                  )}
                </div>

                <p className="font-body text-xs text-gold-200/70 leading-relaxed mb-6">
                  {priceDetail}
                </p>

                {perPersonNote && (
                  <div className="mb-6 p-3.5 bg-gold-500/10 border border-gold-500/20 text-xs font-body text-gold-200 leading-relaxed">
                    {perPersonNote}
                  </div>
                )}

                <dl className="border-t border-b border-gold-400/20 py-4 space-y-2.5 text-xs font-body">
                  <div className="flex items-center justify-between">
                    <dt className="text-gold-200/60 font-light">Formato</dt>
                    <dd className="text-gold-200 font-medium">3 Encuentros en Vivo por Zoom</dd>
                  </div>
                  <div className="flex items-center justify-between">
                    <dt className="text-gold-200/60 font-light">Plataforma</dt>
                    <dd className="text-gold-200 font-medium">Comunidad privada en Circle</dd>
                  </div>
                  <div className="flex items-center justify-between">
                    <dt className="text-gold-200/60 font-light">Garantía</dt>
                    <dd className="text-gold-300 font-medium">7 días vía Hotmart</dd>
                  </div>
                </dl>
              </div>

              <div className="mt-8 flex flex-col gap-3">
                <Link
                  href={ctaHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-gold-500 hover:bg-gold-400 text-plum-950 transition-all duration-300 py-4 px-6 text-xs font-sans font-semibold tracking-[0.2em] uppercase text-center flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>{ctaLabel}</span>
                  <span aria-hidden="true">→</span>
                </Link>

                {secondaryCtaLabel && (
                  <Link
                    href={secondaryCtaHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-center font-sans text-xs tracking-wider uppercase text-gold-300/70 hover:text-gold-300 transition-colors py-2"
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
