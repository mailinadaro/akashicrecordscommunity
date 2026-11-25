import React from "react";
import { MessageCircle, Bell, Shield, ArrowRight } from "lucide-react";
import { siteConfig } from "@/config/site.config";

export interface WhatsAppVipGroupCalloutProps {
  badge?: string;
  title?: string;
  description?: string;
  trustText?: string;
  ctaText?: string;
  whatsappGroupUrl?: string;
  theme?: "light" | "dark";
  layout?: "row" | "stacked";
  className?: string;
}

export default function WhatsAppVipGroupCallout({
  badge = "Canal Exclusivo de Avisos",
  title = "Súmate al Grupo Exclusivo de WhatsApp",
  description = "No enviamos spam ni abrimos chat masivo. Es un canal privado administrado por el equipo donde compartiremos el enlace de acceso directo 15 minutos antes, audios exclusivos y el PDF complementario.",
  trustText = "Grupo silencioso · Solo administradores · Privacidad protegida",
  ctaText = "UNIRME AL GRUPO EXCLUSIVO DE WHATSAPP",
  whatsappGroupUrl = siteConfig.contact.whatsapp,
  theme = "light",
  layout = "row",
  className = "",
}: WhatsAppVipGroupCalloutProps) {
  const isDark = theme === "dark";
  const isStacked = layout === "stacked";

  return (
    <div className={`w-full max-w-4xl mx-auto py-6 px-4 ${className}`}>
      <div
        className={`rounded-2xl sm:rounded-3xl border-2 p-5 sm:p-7 flex flex-col items-center gap-5 ${
          isStacked ? "text-center" : "md:flex-row justify-between sm:gap-6"
        } ${
          isDark
            ? "bg-emerald-950/40 border-emerald-400/45 shadow-xl shadow-emerald-950/50 backdrop-blur-md"
            : "bg-emerald-950/5 border-emerald-600/30 shadow-xs"
        }`}
      >
        <div className={isStacked ? "w-full max-w-2xl mx-auto text-center" : "flex-1 text-center md:text-left"}>
          <div
            className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] sm:text-[11px] font-sans uppercase tracking-[0.18em] font-bold mb-2.5 ${
              isDark
                ? "bg-emerald-500/20 text-emerald-200 border border-emerald-400/35"
                : "bg-emerald-600/15 text-emerald-800"
            }`}
          >
            <Bell className={`w-3.5 h-3.5 ${isDark ? "text-emerald-300" : "text-emerald-700"}`} aria-hidden="true" />
            <span>{badge}</span>
          </div>

          <h3
            className={`font-display text-2xl sm:text-3xl font-normal mb-2 ${
              isDark ? "text-white" : "text-plum-950"
            }`}
          >
            {title}
          </h3>

          <p
            className={`font-body text-xs sm:text-sm font-light leading-relaxed mb-3 ${
              isStacked ? "max-w-2xl mx-auto" : "max-w-xl"
            } ${isDark ? "text-white/90" : "text-plum-700"}`}
          >
            {description}
          </p>

          <div
            className={`flex items-center justify-center gap-1.5 text-[11px] font-body font-medium ${
              isStacked ? "" : "md:justify-start"
            } ${isDark ? "text-emerald-300" : "text-emerald-800"}`}
          >
            <Shield className={`w-3.5 h-3.5 ${isDark ? "text-emerald-300" : "text-emerald-700"}`} aria-hidden="true" />
            <span>{trustText}</span>
          </div>
        </div>

        <div className={isStacked ? "w-full sm:w-auto pt-1 min-w-0" : "shrink-0 w-full md:w-auto min-w-0"}>
          <a
            href={whatsappGroupUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`w-full max-w-full inline-flex items-center justify-center gap-2 sm:gap-2.5 rounded-xl font-sans text-[11px] sm:text-sm font-bold uppercase tracking-[0.06em] sm:tracking-[0.12em] leading-snug text-center transition-all duration-300 active:scale-[0.98] cursor-pointer whitespace-normal sm:whitespace-nowrap ${
              isStacked ? "sm:w-auto px-4 py-3.5 sm:px-8 sm:py-4" : "md:w-auto px-4 py-3.5 sm:px-7 sm:py-4"
            } ${
              isDark
                ? "bg-emerald-500 hover:bg-emerald-400 text-emerald-950 shadow-lg shadow-emerald-500/30 hover:shadow-emerald-400/45"
                : "bg-emerald-600 hover:bg-emerald-700 text-white shadow-md shadow-emerald-700/20"
            }`}
          >
            <MessageCircle
              className={`w-4 h-4 shrink-0 ${isDark ? "fill-emerald-950" : "fill-white"}`}
              aria-hidden="true"
            />
            <span className="min-w-0">{ctaText}</span>
            <ArrowRight className="w-4 h-4 shrink-0" aria-hidden="true" />
          </a>
        </div>
      </div>
    </div>
  );
}
