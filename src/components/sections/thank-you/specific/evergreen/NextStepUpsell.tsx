import React from "react";
import { Sparkles, ArrowRight, ShieldCheck } from "lucide-react";
import { siteConfig } from "@/config/site.config";

export interface NextStepUpsellProps {
  badge?: string;
  title?: string;
  description?: string;
  ctaText?: string;
  ctaHref?: string;
  priceNote?: string;
  className?: string;
}

export default function NextStepUpsell({
  badge = "Acompañamiento Avanzado",
  title = "Pase Anual Círculo Akáshico",
  description = "No te quedes con la teoría básica. Asegura todo tu año con 48 meditaciones en vivo, 12 círculos terapéuticos, 12 updates astrológicos y el santuario privado activo durante 12 meses.",
  ctaText = "UNIRME AL PASE ANUAL 2027",
  ctaHref = siteConfig.hotmartUrl,
  priceNote = "Cuotas disponibles · Acceso inmediato al santuario",
  className = "",
}: NextStepUpsellProps) {
  return (
    <div className={`w-full max-w-4xl mx-auto py-6 px-4 ${className}`}>
      <div className="rounded-3xl bg-gradient-to-r from-gold-500/15 via-gold-500/10 to-gold-500/5 border-2 border-gold-400/40 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xs">
        <div className="flex-1 text-center md:text-left">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold-500 text-plum-950 text-[10px] sm:text-[11px] font-sans uppercase tracking-[0.2em] font-bold mb-3 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5" aria-hidden="true" />
            <span>{badge}</span>
          </div>

          <h4 className="font-display text-2xl sm:text-3xl text-plum-950 font-normal leading-tight mb-2">
            {title}
          </h4>

          <p className="font-body text-xs sm:text-sm text-plum-700 font-light leading-relaxed max-w-lg mb-2">
            {description}
          </p>

          <span className="text-[11px] font-sans text-gold-800 font-semibold">
            {priceNote}
          </span>
        </div>

        <div className="shrink-0 w-full sm:w-auto text-center">
          <a
            href={ctaHref}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-gold-500 hover:bg-gold-400 text-plum-950 font-sans text-xs font-bold uppercase tracking-[0.16em] transition-all duration-300 shadow-md shadow-gold-500/25 cursor-pointer"
          >
            <span>{ctaText}</span>
            <ArrowRight className="w-4 h-4 stroke-[2.5]" aria-hidden="true" />
          </a>
        </div>
      </div>
    </div>
  );
}
