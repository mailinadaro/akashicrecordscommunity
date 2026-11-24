"use client";

import React from "react";
import { Check, Lock, CreditCard, ShieldCheck } from "lucide-react";
import { siteConfig } from "@/config/site.config";
import PaymentMethodBadges from "@/components/ui/PaymentMethodBadges";

export interface InvestmentSectionProps {
  id?: string;
  className?: string;
  ctaHrefCard1?: string;
  ctaHrefCard2?: string;
}

const CARD_1_BULLETS = [
  "3 Encuentros en vivo por Zoom con Tamara Ciriza.",
  "Grabaciones de los encuentros disponibles durante 3 meses.",
  "Manual digital «El ABC Akáshico».",
  "Bitácora guiada de integración de 21 días.",
  "Biblioteca de 3 meditaciones guiadas en audio.",
  "Plantilla de tu Mapa de Práctica Espiritual.",
  "Masterclass exclusiva: El despertar de la conciencia en la Era de Acuario.",
  "Acceso a la comunidad privada en Circle durante todo el proceso.",
];

const CARD_2_BULLETS = [
  {
    highlight: true,
    text: "Iniciación en Vivo de Enero 100% BONIFICADA ($0 USD):",
    subtext: (
      <>
        Todo el contenido de la Iniciación en Vivo de Enero 2027 incluido en tu membresía anual,{" "}
        <strong className="font-semibold text-plum-950">
          con las grabaciones disponibles sin fecha de vencimiento.
        </strong>
      </>
    ),
  },
  {
    highlight: false,
    text: "12 Updates Akáshicos y Astrológicos en vivo (apertura de mes y clima cósmico mensual).",
  },
  {
    highlight: false,
    text: "48 Meditaciones grupales en vivo (todos los jueves para recalibrar tu frecuencia energética).",
  },
  {
    highlight: false,
    text: "12 Cuadernos de Trabajo (Workbooks descargables) con ejercicios prácticos mes a mes.",
  },
  {
    highlight: false,
    text: "12 Círculos de Integración terapéutica con dinámicas vivenciales de proceso emocional.",
  },
  {
    highlight: false,
    text: "Acceso continuo a la comunidad en Circle durante los 12 meses de tu membresía activa.",
  },
  {
    highlight: false,
    text: "Prioridad y condiciones exclusivas en futuros programas y cursos.",
  },
];

export default function InvestmentSection({
  id = "inscripcion",
  className = "",
  ctaHrefCard1 = siteConfig.bookingUrl,
  ctaHrefCard2 = siteConfig.hotmartUrl,
}: InvestmentSectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className={`relative w-full bg-surface-page text-text-primary py-20 sm:py-24 lg:py-32 overflow-hidden border-t border-border-default ${className}`}
    >
      <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* =========================================================
            1. ENCABEZADO SUPERIOR CENTRADO
            ========================================================= */}
        <div className="text-center max-w-3xl mx-auto mb-14 lg:mb-16">
          <span className="font-sans text-[11px] sm:text-xs uppercase tracking-[0.25em] text-gold-700 font-semibold mb-3 block">
            · Inscripciones abiertas · Cupos limitados ·
          </span>

          <h2
            id={`${id}-heading`}
            className="font-display italic text-3xl sm:text-4xl lg:text-5xl text-plum-950 font-normal leading-[1.15] mb-3"
          >
            Tu camino comienza acá
          </h2>

          <p className="font-sans text-xs sm:text-sm uppercase tracking-wider text-gold-700/90 font-medium mb-4">
            16, 23 y 30 de enero de 2027 · 10:00 a 13:30 h (México)
          </p>

          <p className="font-body text-sm sm:text-base text-plum-600 font-light leading-relaxed max-w-2xl mx-auto">
            Elige cómo deseas transitar tu proceso: cursar únicamente las tres semanas de iniciación, o asegurar tu práctica y acompañamiento continuo durante todo 2027 con la iniciación 100% bonificada.
          </p>
        </div>

        {/* =========================================================
            2. GRID DE 2 TARJETAS DE PRECIOS COMPARATIVAS
            ========================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-8 items-stretch">
          {/* =======================================================
              CARD 1: INICIACIÓN EN VIVO (Básica / Estándar)
              ======================================================= */}
          <div className="relative flex flex-col justify-between rounded-3xl bg-surface-page border border-border-default/80 p-7 sm:p-9 lg:p-10 transition-all duration-300 hover:shadow-lg hover:border-gold-500/40">
            <div>
              {/* Badge superior */}
              <div className="mb-4">
                <span className="inline-block px-3.5 py-1 rounded-full text-[10px] font-sans uppercase tracking-[0.2em] font-semibold bg-surface-secondary text-plum-700 border border-border-default/70">
                  ENFOQUE PUNTUAL (3 SEMANAS)
                </span>
              </div>

              {/* Títulos y Descripción */}
              <h3 className="font-display text-2xl sm:text-3xl text-plum-950 font-normal leading-tight">
                Iniciación <span className="italic font-extrabold">en Vivo</span>
              </h3>
              <p className="font-sans text-xs uppercase tracking-wider text-gold-700 font-medium mt-1 mb-3">
                El Camino de Regreso a tu Alma
              </p>
              <p className="font-body text-xs sm:text-sm text-plum-600 font-light leading-relaxed mb-5">
                Proceso vivencial guiado para abrir, leer y cerrar tus propios Registros Akáshicos con método, discernimiento y total autonomía.
              </p>

              {/* Micro-Garantía de Satisfacción */}
              <div className="flex items-center gap-1.5 text-[11px] font-sans uppercase tracking-wider text-plum-600 font-medium py-1.5 px-3 rounded-xl bg-surface-secondary/70 border border-border-default/50 mb-5">
                <ShieldCheck className="w-3.5 h-3.5 text-gold-600 shrink-0" aria-hidden="true" />
                <span>100% libre de riesgo · 7 días de garantía</span>
              </div>

              {/* Bloque de Precio con Anclaje */}
              <div className="pt-4 pb-6 border-t border-border-default/60">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-body text-xs sm:text-sm text-plum-500/70 line-through">
                    Precio regular: $180 USD
                  </span>
                </div>
                <div className="flex items-baseline gap-1.5">
                  <span className="font-sans text-2xl text-plum-600 font-light">$</span>
                  <span className="font-body text-5xl sm:text-6xl text-plum-950 font-extrabold tracking-tight">
                    150
                  </span>
                  <span className="font-sans text-xs text-plum-600/80 font-medium uppercase tracking-wider ml-1">
                    USD
                  </span>
                </div>
                <p className="font-body text-xs text-plum-500/90 font-light mt-1.5 leading-snug">
                  (o en cuotas fijas con tarjeta de crédito según tu país)
                </p>
              </div>

              {/* Bullets List con Checkmarks Circulares */}
              <div className="pt-2 pb-6">
                <p className="font-sans text-[11px] uppercase tracking-wider font-semibold text-plum-950 mb-3.5">
                  Incluye:
                </p>
                <ul className="space-y-3">
                  {CARD_1_BULLETS.map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <div className="w-5 h-5 rounded-full bg-gold-500/15 text-gold-700 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3 stroke-[2.5]" aria-hidden="true" />
                      </div>
                      <span className="text-xs sm:text-[13px] font-body text-plum-700 font-light leading-relaxed">
                        {bullet}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Callout Box */}
              <div className="my-6 p-4 rounded-2xl bg-gold-500/10 border border-gold-400/25 text-xs font-body text-plum-950 leading-relaxed">
                <strong className="font-semibold text-gold-700 flex items-center gap-1.5 mb-1">
                  <span aria-hidden="true">✦</span> Incluye Crédito a Favor:
                </strong>
                Si hasta el 31 de enero de 2027 decides sumarte a la membresía anual, se te reconoce el 100% de lo que abones hoy ($150 USD) y solo pagas la diferencia.
              </div>
            </div>

            {/* CTA y Tira de Medios de Pago al pie */}
            <div className="mt-auto pt-6 border-t border-border-default/60 flex flex-col gap-3 text-center">
              <a
                href={ctaHrefCard1}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 px-5 rounded-xl border-2 border-plum-950 text-plum-950 hover:bg-plum-950 hover:text-white font-sans text-xs font-bold uppercase tracking-[0.16em] transition-all duration-300 text-center cursor-pointer shadow-xs"
              >
                QUIERO INSCRIBIRME SOLO A LA INICIACIÓN
              </a>

              {/* Tira compacta de métodos de pago */}
              <div className="flex flex-col items-center gap-1.5 pt-1">
                <span className="text-[10px] font-sans uppercase tracking-wider text-plum-500 font-medium flex items-center gap-1">
                  <Lock className="w-3 h-3 text-gold-600" aria-hidden="true" />
                  Pago 100% seguro a través de Hotmart
                </span>
                <PaymentMethodBadges variant="compact" align="center" />
                <span className="text-[11px] font-body text-plum-500/80 font-light mt-0.5">
                  Acceso inmediato al confirmar · Tarjetas y pagos locales
                </span>
              </div>
            </div>
          </div>

          {/* =======================================================
              CARD 2: PASE ANUAL (Destacada / Hero)
              ======================================================= */}
          <div className="relative flex flex-col justify-between rounded-3xl bg-gradient-to-b from-[#fdfbf7] via-surface-page to-[#faf8f5] border-2 border-gold-500 p-7 sm:p-9 lg:p-10 shadow-xl shadow-gold-900/10 transition-all duration-300 hover:shadow-2xl hover:shadow-gold-900/20">
            {/* Badge superior llamativo flotante */}
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-20">
              <span className="inline-block px-4 py-1.5 rounded-full text-[10px] sm:text-[11px] font-sans uppercase tracking-[0.2em] font-bold bg-gold-500 text-plum-950 shadow-md whitespace-nowrap">
                · OPCIÓN MÁS ELEGIDA · MEJOR INVERSIÓN ·
              </span>
            </div>

            <div>
              {/* Espacio para el badge flotante */}
              <div className="mb-4 pt-1">
                <span className="inline-block px-3.5 py-1 rounded-full text-[10px] font-sans uppercase tracking-[0.2em] font-bold bg-gold-500/15 text-gold-700 border border-gold-400/30">
                  INICIACIÓN EN VIVO + MEMBRESÍA ANUAL 2027
                </span>
              </div>

              {/* Títulos y Descripción */}
              <h3 className="font-display text-2xl sm:text-3xl text-plum-950 font-normal leading-tight">
                Pase Anual a <span className="italic font-extrabold">Alma Presente</span>
              </h3>
              <p className="font-sans text-xs uppercase tracking-wider text-gold-700 font-semibold mt-1 mb-3">
                Todo tu 2027 Acompañada + Iniciación 100% Bonificada
              </p>
              <p className="font-body text-xs sm:text-sm text-plum-600 font-light leading-relaxed mb-5">
                Tu iniciación intensiva de enero de regalo y todo tu año de sostenimiento terapéutico, astrológico y comunitario resuelto.
              </p>

              {/* Micro-Garantía de Satisfacción */}
              <div className="flex items-center gap-1.5 text-[11px] font-sans uppercase tracking-wider text-gold-800 font-semibold py-1.5 px-3 rounded-xl bg-gold-500/15 border border-gold-400/40 mb-5">
                <ShieldCheck className="w-3.5 h-3.5 text-gold-700 shrink-0" aria-hidden="true" />
                <span>100% libre de riesgo · 7 días de garantía</span>
              </div>

              {/* Bloque de Precio con Anclaje y Ahorro */}
              <div className="pt-4 pb-6 border-t border-gold-400/30">
                <div className="flex items-center gap-2.5 mb-1.5 flex-wrap">
                  <span className="font-body text-xs sm:text-sm text-plum-500/70 line-through">
                    Valor real: más de $540 USD
                  </span>
                  <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-sans font-bold uppercase tracking-wider bg-gold-500/20 text-gold-800 border border-gold-400/50">
                    Ahorras más de $220 USD
                  </span>
                </div>
                <div className="flex items-baseline gap-1.5">
                  <span className="font-sans text-2xl text-gold-700 font-light">$</span>
                  <span className="font-body text-5xl sm:text-6xl text-plum-950 font-extrabold tracking-tight">
                    324
                  </span>
                  <span className="font-sans text-xs text-gold-700 font-bold uppercase tracking-wider ml-1">
                    USD / año
                  </span>
                </div>
                <p className="font-body text-xs text-plum-600 font-light mt-1.5 leading-snug">
                  (o hasta 12 cuotas con tarjeta de crédito de ~$27 USD / ~$540 MXN al mes)
                </p>
              </div>

              {/* Bullets List con Checkmarks Sólidos Dorados */}
              <div className="pt-2 pb-6">
                <p className="font-sans text-[11px] uppercase tracking-wider font-semibold text-plum-950 mb-3.5">
                  Incluye:
                </p>
                <ul className="space-y-3">
                  {CARD_2_BULLETS.map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <div className="w-5 h-5 rounded-full bg-gold-500 text-plum-950 flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                        <Check className="w-3 h-3 stroke-[2.5]" aria-hidden="true" />
                      </div>
                      <div className="text-xs sm:text-[13px] font-body leading-relaxed">
                        {bullet.highlight ? (
                          <>
                            <strong className="font-semibold text-gold-700 block">
                              {bullet.text}
                            </strong>
                            <span className="text-plum-600 font-light block mt-0.5">
                              {bullet.subtext}
                            </span>
                          </>
                        ) : (
                          <span className="text-plum-700 font-light">{bullet.text}</span>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Callout Box */}
              <div className="my-6 p-4 rounded-2xl bg-gold-500/15 border border-gold-400/40 text-xs font-body text-plum-950 leading-relaxed shadow-xs">
                <strong className="font-semibold text-gold-800 flex items-center gap-1.5 mb-1">
                  <span aria-hidden="true">✦</span> La opción más inteligente:
                </strong>
                Por solo $174 USD de diferencia respecto a la iniciación suelta, aseguras un año entero de práctica y contención grupal guiada.
              </div>
            </div>

            {/* CTA y Tira de Medios de Pago al pie */}
            <div className="mt-auto pt-6 border-t border-gold-400/30 flex flex-col gap-3 text-center">
              <a
                href={ctaHrefCard2}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 px-5 rounded-xl bg-gold-500 hover:bg-gold-400 text-plum-950 font-sans text-xs font-bold uppercase tracking-[0.16em] transition-all duration-300 text-center cursor-pointer shadow-md shadow-gold-500/25 hover:shadow-lg hover:scale-[1.01] active:scale-[0.99]"
              >
                QUIERO EL PASE ANUAL CON INICIACIÓN DE REGALO
              </a>

              {/* Tira compacta de métodos de pago */}
              <div className="flex flex-col items-center gap-1.5 pt-1">
                <span className="text-[10px] font-sans uppercase tracking-wider text-gold-800 font-semibold flex items-center gap-1">
                  <Lock className="w-3 h-3 text-gold-700" aria-hidden="true" />
                  Pago 100% seguro · Facturación anual garantizada
                </span>
                <PaymentMethodBadges variant="compact" align="center" />
                <span className="text-[11px] font-body text-plum-600/80 font-light mt-0.5">
                  Hasta 12 cuotas · Tarjetas, transferencias y efectivo local
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* =========================================================
            3. MINI PRUEBA SOCIAL / SOCIAL PROOF DE CIERRE
            ========================================================= */}
        <div className="mt-14 max-w-2xl mx-auto p-4 sm:p-5 rounded-2xl bg-surface-secondary/70 border border-border-default/70 flex items-center gap-4 text-left shadow-2xs">
          <div className="w-12 h-12 rounded-full overflow-hidden bg-gold-500/20 border border-gold-400/40 shrink-0 flex items-center justify-center font-display text-lg text-gold-800 font-bold">
            C
          </div>
          <div>
            <p className="font-display italic text-sm sm:text-base text-plum-950 leading-snug">
              &ldquo;Este curso me regaló la autonomía espiritual que había estado buscando toda mi vida.&rdquo;
            </p>
            <p className="font-sans text-[11px] uppercase tracking-wider text-gold-700 font-semibold mt-1">
              Carolina · Alumna de la Formación Akáshica
            </p>
          </div>
        </div>

        {/* =========================================================
            4. PIE DE SECCIÓN (ICONOS / SELLOS DE CONFIANZA)
            ========================================================= */}
        <div className="mt-14 sm:mt-16 pt-10 border-t border-border-default/60 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {/* Sello 1 */}
          <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-surface-secondary/40 border border-border-default/50">
            <div className="w-10 h-10 rounded-xl bg-gold-500/10 border border-gold-400/30 flex items-center justify-center text-gold-700 shrink-0">
              <Lock className="w-5 h-5" aria-hidden="true" />
            </div>
            <div>
              <h4 className="font-sans text-xs font-semibold uppercase tracking-wider text-plum-950 mb-1">
                Procesamiento Protegido
              </h4>
              <p className="font-body text-xs text-plum-600 font-light leading-relaxed">
                Procesamiento 100% protegido y encriptado mediante Hotmart con cifrado bancario SSL de 256 bits.
              </p>
            </div>
          </div>

          {/* Sello 2 (Con Tira Expandida de Métodos de Pago) */}
          <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-surface-secondary/40 border border-border-default/50">
            <div className="w-10 h-10 rounded-xl bg-gold-500/10 border border-gold-400/30 flex items-center justify-center text-gold-700 shrink-0">
              <CreditCard className="w-5 h-5" aria-hidden="true" />
            </div>
            <div className="w-full">
              <h4 className="font-sans text-xs font-semibold uppercase tracking-wider text-plum-950 mb-1">
                Métodos de Pago Locales
              </h4>
              <p className="font-body text-xs text-plum-600 font-light leading-relaxed mb-2.5">
                Cuotas y opciones en pantalla según tu país (tarjetas de crédito, débito, transferencias y efectivo):
              </p>
              {/* Tira completa expandida de métodos */}
              <PaymentMethodBadges variant="full" align="start" />
            </div>
          </div>

          {/* Sello 3 */}
          <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-surface-secondary/40 border border-border-default/50">
            <div className="w-10 h-10 rounded-xl bg-gold-500/10 border border-gold-400/30 flex items-center justify-center text-gold-700 shrink-0">
              <ShieldCheck className="w-5 h-5" aria-hidden="true" />
            </div>
            <div>
              <h4 className="font-sans text-xs font-semibold uppercase tracking-wider text-plum-950 mb-1">
                Garantía de Satisfacción
              </h4>
              <p className="font-body text-xs text-plum-600 font-light leading-relaxed">
                Garantía estándar de 7 días corridos desde tu fecha de compra respaldada por Hotmart sin preguntas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
