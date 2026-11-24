import React from "react";
import { Sparkles, ArrowRight, ShieldCheck } from "lucide-react";
import { siteConfig } from "@/config/site.config";

export interface RolloverCreditNoticeProps {
  creditAmount?: string;
  deadlineDate?: string;
  membershipPrice?: string;
  upgradeUrl?: string;
  className?: string;
}

export default function RolloverCreditNotice({
  creditAmount = "$150 USD",
  deadlineDate = "31 de enero de 2027",
  membershipPrice = "$324 USD / año",
  upgradeUrl = siteConfig.hotmartUrl,
  className = "",
}: RolloverCreditNoticeProps) {
  return (
    <section className={`w-full max-w-4xl mx-auto py-8 px-4 ${className}`}>
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-b from-gold-500/12 via-surface-secondary/80 to-gold-500/5 border-2 border-gold-400/35 p-8 sm:p-12 text-center shadow-sm">
        {/* Halo decorativo de luz dorada superior */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-24 bg-gold-500/10 rounded-full blur-2xl pointer-events-none" />

        {/* Badge superior */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-500/15 text-gold-950 border border-gold-400/40 text-[10px] sm:text-xs font-sans uppercase tracking-[0.22em] font-bold mb-4 shadow-2xs">
          <Sparkles className="w-3.5 h-3.5 text-gold-700" aria-hidden="true" />
          <span>✦ Tu beneficio exclusivo de continuidad ✦</span>
        </div>

        {/* Título editorial serifa */}
        <h4 className="font-display italic text-2xl sm:text-3xl lg:text-4xl text-plum-950 font-normal leading-tight mb-4 max-w-xl mx-auto">
          ¿Deseas asegurar todo tu 2027 acompañada?
        </h4>

        {/* Párrafo explicativo fluido y aireado */}
        <p className="font-body text-sm sm:text-base text-plum-700 font-light leading-relaxed max-w-2xl mx-auto mb-8">
          Queremos que transites esta iniciación con total presencia y sin presiones. Recuerda que cuentas con nuestro <strong className="font-semibold text-plum-950">Crédito a Favor</strong>: si hasta el <strong className="font-semibold text-plum-950">{deadlineDate}</strong> decides que deseas continuar acompañada durante todo el año en la Membresía del Círculo Akáshico, se te reconocerá el <strong className="font-semibold text-gold-800">100% de lo que acabas de pagar ({creditAmount})</strong> y únicamente abonarás la diferencia para activar tus 12 meses de membresía.
        </p>

        {/* Botón CTA centralizado con respiración natural */}
        <div className="flex flex-col items-center justify-center">
          <a
            href={upgradeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-plum-950 hover:bg-plum-900 text-gold-300 hover:text-white font-sans text-xs sm:text-sm font-bold uppercase tracking-[0.18em] transition-all duration-300 shadow-md hover:shadow-xl hover:scale-[1.01] cursor-pointer"
          >
            <span>APLICAR MI CRÉDITO A FAVOR</span>
            <ArrowRight className="w-4 h-4 text-gold-400" aria-hidden="true" />
          </a>
          <span className="text-xs font-body text-plum-500 mt-2.5">
            ✦ Beneficio válido hasta el {deadlineDate}
          </span>
        </div>
      </div>
    </section>
  );
}
