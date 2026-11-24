"use client";

import React from "react";
import { Check, Lock, Sparkles, Clock, Calendar, Users, BookOpen } from "lucide-react";
import { siteConfig } from "@/config/site.config";
import PaymentMethodBadges from "@/components/ui/PaymentMethodBadges";
import InvestmentKinematicWrapper from "@/components/animations/InvestmentKinematicWrapper";

export interface InvestmentSectionProps {
  id?: string;
  className?: string;
  ctaHrefCard1?: string;
  ctaHrefCard2?: string;
}

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
      <InvestmentKinematicWrapper>
        <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* =========================================================
              1. ENCABEZADO SUPERIOR CENTRADO
              ========================================================= */}
          <div data-investment-header className="text-center max-w-3xl mx-auto mb-14 lg:mb-16">
            <span className="font-sans text-[11px] sm:text-xs uppercase tracking-[0.25em] text-gold-700 font-semibold mb-3 block">
              Inscripciones abiertas · Cupos limitados
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
              Elige cómo deseas transitar tu proceso.
            </p>
          </div>

          {/* =========================================================
              2. GRID DE 2 TARJETAS DE PRECIOS COMPARATIVAS
              (Mobile: Card 1 primero, Card Anual Hero al final)
              ========================================================= */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-8 items-stretch">
            {/* =======================================================
                CARD 1: INICIACIÓN EN VIVO (Básica / Estándar)
                ======================================================= */}
            <div
              data-investment-card="standard"
              className="relative flex flex-col justify-between rounded-3xl bg-surface-page border border-border-default/80 p-7 sm:p-9 lg:p-10 transition-all duration-300 hover:shadow-lg hover:border-gold-500/40"
            >
              <div>
                {/* Badge superior */}
                <div className="mb-4">
                  <span className="inline-block px-3.5 py-1 rounded-full text-[10px] font-sans uppercase tracking-[0.2em] font-semibold bg-surface-secondary text-plum-700 border border-border-default/70">
                  PROCESO DE 3 SEMANAS
                  </span>
                </div>

                {/* Títulos y Descripción */}
                <h3 className="font-display text-2xl sm:text-3xl text-plum-950 font-normal leading-tight">
                  Iniciación <span className="italic font-extrabold">en Vivo</span>
                </h3>
                <p className="font-sans text-xs uppercase tracking-wider text-gold-700 font-medium mt-1 mb-3">
                  El Camino de Regreso a tu Alma
                </p>
                <p className="font-body text-xs sm:text-sm text-plum-600 font-light leading-relaxed mb-6">
                  Proceso vivencial guiado para abrir, leer y cerrar tus propios Registros Akáshicos con método, discernimiento y total autonomía.
                </p>

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
                    (o en cuotas fijas con tarjeta de crédito) 
                  </p>
                </div>

                {/* ===================================================
                    DOSIFICACIÓN EN 3 BLOQUES TEMÁTICOS (Card 1)
                    =================================================== */}
                <div className="space-y-5 pt-2 pb-6 border-t border-border-default/60">
                  {/* Bloque A: Formación Sincrónica */}
                  <div data-investment-block className="space-y-2.5">
                    <div className="flex items-center gap-2 text-gold-700">
                      <Clock className="w-3.5 h-3.5 text-gold-600" aria-hidden="true" />
                      <span className="font-sans text-[11px] uppercase tracking-[0.16em] font-bold text-plum-900">
                        1. Formación Sincrónica
                      </span>
                    </div>
                    <ul className="space-y-2 pl-1">
                      <li className="flex items-start gap-2.5">
                        <div className="w-4 h-4 rounded-full bg-gold-500/15 text-gold-700 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-2.5 h-2.5 stroke-[2.5]" aria-hidden="true" />
                        </div>
                        <span className="text-xs font-body text-plum-700 font-light leading-relaxed">
                          3 Encuentros en vivo por Zoom con Tamara Ciriza (10.5 horas de facilitación directa y calibración).
                        </span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <div className="w-4 h-4 rounded-full bg-gold-500/15 text-gold-700 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-2.5 h-2.5 stroke-[2.5]" aria-hidden="true" />
                        </div>
                        <span className="text-xs font-body text-plum-700 font-light leading-relaxed">
                          Grabaciones completas de todos los encuentros disponibles durante <strong className="font-medium text-plum-900">3 meses</strong> en Circle.
                        </span>
                      </li>
                    </ul>
                  </div>

                  {/* Bloque B: Herramientas y Protocolos */}
                  <div data-investment-block className="space-y-2.5 pt-2 border-t border-border-default/40">
                    <div className="flex items-center gap-2 text-gold-700">
                      <BookOpen className="w-3.5 h-3.5 text-gold-600" aria-hidden="true" />
                      <span className="font-sans text-[11px] uppercase tracking-[0.16em] font-bold text-plum-900">
                        2. Protocolos y Práctica
                      </span>
                    </div>
                    <ul className="space-y-2 pl-1">
                      <li className="flex items-start gap-2.5">
                        <div className="w-4 h-4 rounded-full bg-gold-500/15 text-gold-700 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-2.5 h-2.5 stroke-[2.5]" aria-hidden="true" />
                        </div>
                        <span className="text-xs font-body text-plum-700 font-light leading-relaxed">
                          Manual digital «El ABC Akáshico» (PDF descargable con protocolos y oraciones sagradas).
                        </span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <div className="w-4 h-4 rounded-full bg-gold-500/15 text-gold-700 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-2.5 h-2.5 stroke-[2.5]" aria-hidden="true" />
                        </div>
                        <span className="text-xs font-body text-plum-700 font-light leading-relaxed">
                          Bitácora guiada de integración de 21 días para asentar la práctica cotidiana.
                        </span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <div className="w-4 h-4 rounded-full bg-gold-500/15 text-gold-700 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-2.5 h-2.5 stroke-[2.5]" aria-hidden="true" />
                        </div>
                        <span className="text-xs font-body text-plum-700 font-light leading-relaxed">
                          Biblioteca de 3 meditaciones guiadas en audio (Sintonización matutina, encuentro con guías y frecuencia de sellado).
                        </span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <div className="w-4 h-4 rounded-full bg-gold-500/15 text-gold-700 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-2.5 h-2.5 stroke-[2.5]" aria-hidden="true" />
                        </div>
                        <span className="text-xs font-body text-plum-700 font-light leading-relaxed">
                          Plantilla de tu Mapa de Práctica Espiritual para sostener tu rutina.
                        </span>
                      </li>
                    </ul>
                  </div>

                  {/* Bloque C: Comunidad del Proceso */}
                  <div data-investment-block className="space-y-2.5 pt-2 border-t border-border-default/40">
                    <div className="flex items-center gap-2 text-gold-700">
                      <Users className="w-3.5 h-3.5 text-gold-600" aria-hidden="true" />
                      <span className="font-sans text-[11px] uppercase tracking-[0.16em] font-bold text-plum-900">
                        3. Comunidad del Proceso
                      </span>
                    </div>
                    <ul className="space-y-2 pl-1">
                      <li className="flex items-start gap-2.5">
                        <div className="w-4 h-4 rounded-full bg-gold-500/15 text-gold-700 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-2.5 h-2.5 stroke-[2.5]" aria-hidden="true" />
                        </div>
                        <span className="text-xs font-body text-plum-700 font-light leading-relaxed">
                          Masterclass exclusiva: El despertar de la conciencia en la Era de Acuario.
                        </span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <div className="w-4 h-4 rounded-full bg-gold-500/15 text-gold-700 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-2.5 h-2.5 stroke-[2.5]" aria-hidden="true" />
                        </div>
                        <span className="text-xs font-body text-plum-700 font-light leading-relaxed">
                          Acceso al espacio comunitario privado en Circle durante todo el proceso.
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Callout Box con Crédito a Favor */}
                <div className="my-6 p-4 rounded-2xl bg-gold-500/10 border border-gold-400/25 text-xs font-body text-plum-950 leading-relaxed">
                  <strong className="font-semibold text-gold-800 flex items-center gap-1.5 mb-1">
                    <span aria-hidden="true">✦</span> Incluye Crédito a Favor:
                  </strong>
                  Si hasta el 31 de enero de 2027 decides sumarte a la membresía anual, se te reconoce el 100% de lo que abones hoy ($150 USD) y solo pagas la diferencia.
                </div>
              </div>

              {/* CTA y Tira de Medios de Pago al pie */}
              <div
                data-investment-footer
                className="mt-auto pt-6 border-t border-border-default/60 flex flex-col gap-3 text-center"
              >
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
                    Pago seguro a través de Hotmart · Acceso inmediato al confirmar
                  </span>
                  <PaymentMethodBadges variant="compact" align="center" />
                  <span className="text-[11px] font-body text-plum-500/80 font-light mt-0.5">
                    Tarjetas de crédito, débito y pagos locales según tu país
                  </span>
                </div>
              </div>
            </div>

            {/* =======================================================
                CARD 2: PASE ANUAL (Hero Destacada · Mejor Inversión)
                (En mobile queda al final del grid)
                ======================================================= */}
            <div
              data-investment-card="hero"
              className="relative flex flex-col justify-between rounded-3xl bg-gradient-to-b from-[#fdfbf7] via-surface-page to-[#faf8f5] border-2 border-gold-500 p-7 sm:p-9 lg:p-10 shadow-xl shadow-gold-900/10 lg:scale-[1.02] z-20 transition-all duration-300 hover:shadow-2xl hover:shadow-gold-900/20"
            >
              {/* Badge superior flotante · MEJOR INVERSIÓN · */}
              <div
                data-investment-badge
                className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-30"
              >
                <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-[10px] sm:text-[11px] font-sans uppercase tracking-[0.2em] font-bold bg-gold-500 text-plum-950 shadow-md shadow-gold-500/30 whitespace-nowrap">
                  <Sparkles className="w-3 h-3 text-plum-950" aria-hidden="true" />
                   MEJOR INVERSIÓN
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
                  Pase Anual <span className="italic font-extrabold">Alma Presente</span>
                </h3>
                <p className="font-sans text-xs uppercase tracking-wider text-gold-700 font-semibold mt-1 mb-3">
                  Todo tu 2027 Acompañada + Iniciación 100% Bonificada
                </p>
                <p className="font-body text-xs sm:text-sm text-plum-600 font-light leading-relaxed mb-6">
                  Tu iniciación intensiva de enero de regalo y todo tu año de sostenimiento terapéutico, astrológico y comunitario resuelto.
                </p>

                {/* Bloque de Precio con Desglose de Inversión y Ahorro */}
                <div className="pt-4 pb-6 border-t border-gold-400/30">
                  <div className="flex items-center gap-2.5 mb-2 flex-wrap">
                    <span className="font-body text-xs sm:text-sm text-plum-500/70 line-through">
                      Valor real del paquete: más de $540 USD
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

                  {/* Desglose visual de inversión mensual */}
                  <div className="mt-2 flex items-center gap-2 flex-wrap">
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md bg-gold-500/15 text-gold-800 font-sans text-xs font-bold tracking-tight">
                      ~$27 USD al mes
                    </span>
                    <span className="text-xs font-body text-plum-600 font-light">
                      (o hasta 12 cuotas con tarjeta de crédito de ~$27 USD al mes)
                    </span>
                  </div>
                </div>

                {/* ===================================================
                    DOSIFICACIÓN EN 3 BLOQUES TEMÁTICOS (Card 2)
                    =================================================== */}
                <div className="space-y-5 pt-2 pb-6 border-t border-gold-400/30">
                  {/* Bloque A: Iniciación 100% Bonificada */}
                  <div data-investment-block className="space-y-2.5 p-3 rounded-2xl bg-gold-500/10 border border-gold-400/30">
                    <div className="flex items-center gap-2 text-gold-800">
                      <Sparkles className="w-3.5 h-3.5 text-gold-700" aria-hidden="true" />
                      <span className="font-sans text-[11px] uppercase tracking-[0.16em] font-bold text-plum-950">
                        1. Iniciación de Enero 100% Bonificada ($0 USD)
                      </span>
                    </div>
                    <ul className="space-y-2 pl-1">
                      <li className="flex items-start gap-2.5">
                        <div className="w-4 h-4 rounded-full bg-gold-500 text-plum-950 flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                          <Check className="w-2.5 h-2.5 stroke-[2.5]" aria-hidden="true" />
                        </div>
                        <span className="text-xs font-body text-plum-900 leading-relaxed">
                          <strong className="font-semibold text-plum-950">Iniciación en Vivo de Enero 100% BONIFICADA ($0 USD):</strong> Los 3 encuentros sincrónicos con Tamara, grabaciones, bitácora y todos los manuales incluidos.
                        </span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <div className="w-4 h-4 rounded-full bg-gold-500 text-plum-950 flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                          <Check className="w-2.5 h-2.5 stroke-[2.5]" aria-hidden="true" />
                        </div>
                        <span className="text-xs font-body text-plum-900 leading-relaxed">
                          <strong className="font-semibold text-gold-800">Grabaciones disponibles sin fecha de vencimiento</strong> (acceso ilimitado de por vida vs. 3 meses).
                        </span>
                      </li>
                    </ul>
                  </div>

                  {/* Bloque B: Sostenimiento Mensual & Práctica Anual */}
                  <div data-investment-block className="space-y-2.5 pt-2 border-t border-gold-400/20">
                    <div className="flex items-center gap-2 text-gold-700">
                      <Calendar className="w-3.5 h-3.5 text-gold-600" aria-hidden="true" />
                      <span className="font-sans text-[11px] uppercase tracking-[0.16em] font-bold text-plum-950">
                        2. Sostenimiento Guiado Durante Todo 2027
                      </span>
                    </div>
                    <ul className="space-y-2 pl-1">
                      <li className="flex items-start gap-2.5">
                        <div className="w-4 h-4 rounded-full bg-gold-500 text-plum-950 flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                          <Check className="w-2.5 h-2.5 stroke-[2.5]" aria-hidden="true" />
                        </div>
                        <span className="text-xs font-body text-plum-700 font-light leading-relaxed">
                          <strong className="font-medium text-plum-950">12 Updates Akáshicos y Astrológicos en vivo</strong> (apertura de mes y clima cósmico mensual).
                        </span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <div className="w-4 h-4 rounded-full bg-gold-500 text-plum-950 flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                          <Check className="w-2.5 h-2.5 stroke-[2.5]" aria-hidden="true" />
                        </div>
                        <span className="text-xs font-body text-plum-700 font-light leading-relaxed">
                          <strong className="font-medium text-plum-950">48 Meditaciones grupales en vivo</strong> (todos los jueves para recalibrar tu frecuencia energética).
                        </span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <div className="w-4 h-4 rounded-full bg-gold-500 text-plum-950 flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                          <Check className="w-2.5 h-2.5 stroke-[2.5]" aria-hidden="true" />
                        </div>
                        <span className="text-xs font-body text-plum-700 font-light leading-relaxed">
                          <strong className="font-medium text-plum-950">12 Cuadernos de Trabajo (Workbooks descargables)</strong> con ejercicios prácticos mes a mes.
                        </span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <div className="w-4 h-4 rounded-full bg-gold-500 text-plum-950 flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                          <Check className="w-2.5 h-2.5 stroke-[2.5]" aria-hidden="true" />
                        </div>
                        <span className="text-xs font-body text-plum-700 font-light leading-relaxed">
                          <strong className="font-medium text-plum-950">12 Círculos de Integración terapéutica</strong> con dinámicas vivenciales de proceso emocional.
                        </span>
                      </li>
                    </ul>
                  </div>

                  {/* Bloque C: Comunidad Anual & Prioridad */}
                  <div data-investment-block className="space-y-2.5 pt-2 border-t border-gold-400/20">
                    <div className="flex items-center gap-2 text-gold-700">
                      <Users className="w-3.5 h-3.5 text-gold-600" aria-hidden="true" />
                      <span className="font-sans text-[11px] uppercase tracking-[0.16em] font-bold text-plum-950">
                        3. Comunidad Privada & Beneficios Exclusivos
                      </span>
                    </div>
                    <ul className="space-y-2 pl-1">
                      <li className="flex items-start gap-2.5">
                        <div className="w-4 h-4 rounded-full bg-gold-500 text-plum-950 flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                          <Check className="w-2.5 h-2.5 stroke-[2.5]" aria-hidden="true" />
                        </div>
                        <span className="text-xs font-body text-plum-700 font-light leading-relaxed">
                          Acceso continuo a la comunidad en Circle durante los 12 meses de tu membresía activa.
                        </span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <div className="w-4 h-4 rounded-full bg-gold-500 text-plum-950 flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                          <Check className="w-2.5 h-2.5 stroke-[2.5]" aria-hidden="true" />
                        </div>
                        <span className="text-xs font-body text-plum-700 font-light leading-relaxed">
                          Prioridad y condiciones exclusivas en futuras actividades y programas.
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Callout Box de Valor Inteligente */}
                <div className="my-6 p-4 rounded-2xl bg-gold-500/15 border border-gold-400/40 text-xs font-body text-plum-950 leading-relaxed shadow-xs">
                  <strong className="font-semibold text-gold-800 flex items-center gap-1.5 mb-1">
                    <span aria-hidden="true">✦</span> La opción más inteligente:
                  </strong>
                  Por solo $174 USD de diferencia respecto a la iniciación suelta, aseguras un año entero de práctica y contención grupal guiada.
                </div>
              </div>

              {/* CTA y Tira de Medios de Pago al pie */}
              <div
                data-investment-footer
                className="mt-auto pt-6 border-t border-gold-400/30 flex flex-col gap-3 text-center"
              >
                <a
                  href={ctaHrefCard2}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 px-5 rounded-xl bg-gold-500 hover:bg-gold-400 text-plum-950 font-sans text-xs font-bold uppercase tracking-[0.16em] transition-all duration-300 text-center cursor-pointer shadow-md shadow-gold-500/25 hover:shadow-lg hover:scale-[1.01] active:scale-[0.99]"
                >
                  QUIERO EL PASE ANUAL CON LA INICIACIÓN DE REGALO
                </a>

                {/* Tira compacta de métodos de pago */}
                <div className="flex flex-col items-center gap-1.5 pt-1">
                  <span className="text-[10px] font-sans uppercase tracking-wider text-gold-800 font-semibold flex items-center gap-1">
                    <Lock className="w-3 h-3 text-gold-700" aria-hidden="true" />
                    Pago seguro a través de Hotmart · Facturación anual garantizada
                  </span>
                  <PaymentMethodBadges variant="compact" align="center" />
                  <span className="text-[11px] font-body text-plum-600/80 font-light mt-0.5">
                    Tarjetas de crédito, débito y pagos locales según tu país
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </InvestmentKinematicWrapper>
    </section>
  );
}
