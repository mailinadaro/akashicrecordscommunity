import React from "react";
import { Sparkles, Clock, ArrowRight, ShieldCheck } from "lucide-react";
import { siteConfig } from "@/config/site.config";

export interface TripwireOfferBannerProps {
  badge?: string;
  title?: string;
  subtitle?: string;
  originalPrice?: string;
  offerPrice?: string;
  offerText?: string;
  ctaText?: string;
  ctaHref?: string;
  className?: string;
}

export default function TripwireOfferBanner({
  badge = "Oportunidad Especial por Tiempo Limitado",
  title = "Da el siguiente paso: Iniciación en Vivo con Tamara",
  subtitle = "Aprovecha una bonificación única disponible solo en esta página de descarga para sumarte a la formación sincrónica de enero.",
  originalPrice = "$180 USD",
  offerPrice = "$150 USD",
  offerText = "Acceso a los 3 encuentros en vivo, grabaciones y manual ABC Akáshico completo",
  ctaText = "APROVECHAR OFERTA EXCLUSIVA",
  ctaHref = siteConfig.hotmartUrl,
  className = "",
}: TripwireOfferBannerProps) {
  return (
    <div className={`w-full max-w-4xl mx-auto py-6 px-4 ${className}`}>
      <div className="relative rounded-3xl bg-gradient-to-br from-[#fdfbf7] via-surface-page to-[#faf8f5] border-2 border-gold-500/50 p-6 sm:p-9 shadow-lg shadow-gold-900/10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex-1 text-center md:text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold-500 text-plum-950 text-[10px] sm:text-[11px] font-sans uppercase tracking-[0.2em] font-bold mb-3 shadow-xs">
              <Sparkles className="w-3.5 h-3.5" aria-hidden="true" />
              <span>{badge}</span>
            </div>

            <h3 className="font-display text-2xl sm:text-3xl text-plum-950 font-normal leading-tight mb-2">
              {title}
            </h3>

            <p className="font-body text-xs sm:text-sm text-plum-600 font-light leading-relaxed max-w-lg mb-4">
              {subtitle}
            </p>

            <div className="flex items-center justify-center md:justify-start gap-3">
              <span className="font-body text-xs text-plum-500/70 line-through">
                {originalPrice}
              </span>
              <span className="font-body text-3xl font-extrabold text-plum-950">
                {offerPrice}
              </span>
              <span className="text-xs font-sans uppercase font-bold text-gold-700 bg-gold-500/15 px-2 py-0.5 rounded-md">
                Ahorras $30 USD
              </span>
            </div>
            <p className="text-[11px] font-body text-plum-500 mt-1">
              {offerText}
            </p>
          </div>

          <div className="shrink-0 flex flex-col items-center">
            <a
              href={ctaHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gold-500 hover:bg-gold-400 text-plum-950 font-sans text-xs font-bold uppercase tracking-[0.16em] transition-all duration-300 shadow-md shadow-gold-500/25 cursor-pointer"
            >
              <span>{ctaText}</span>
              <ArrowRight className="w-4 h-4 stroke-[2.5]" aria-hidden="true" />
            </a>
            <span className="text-[10px] font-body text-plum-500 mt-2">
              Garantía de satisfacción de 7 días
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
