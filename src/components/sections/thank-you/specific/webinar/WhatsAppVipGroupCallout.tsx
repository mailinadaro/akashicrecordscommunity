import React from "react";
import { MessageCircle, Bell, Shield, ArrowRight } from "lucide-react";
import { siteConfig } from "@/config/site.config";

export interface WhatsAppVipGroupCalloutProps {
  badge?: string;
  title?: string;
  description?: string;
  ctaText?: string;
  whatsappGroupUrl?: string;
  className?: string;
}

export default function WhatsAppVipGroupCallout({
  badge = "Canal Exclusivo de Avisos",
  title = "Súmate al Grupo VIP de WhatsApp",
  description = "No enviamos spam ni abrimos chat masivo. Es un canal privado administrado por el equipo donde compartiremos el enlace de acceso directo 15 minutos antes, audios exclusivos y el PDF complementario.",
  ctaText = "UNIRME AL GRUPO VIP DE WHATSAPP",
  whatsappGroupUrl = siteConfig.contact.whatsapp,
  className = "",
}: WhatsAppVipGroupCalloutProps) {
  return (
    <div className={`w-full max-w-4xl mx-auto py-6 px-4 ${className}`}>
      <div className="rounded-3xl bg-emerald-950/5 border-2 border-emerald-600/30 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xs">
        <div className="flex-1 text-center md:text-left">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-600/15 text-emerald-800 text-[10px] sm:text-[11px] font-sans uppercase tracking-[0.18em] font-bold mb-2.5">
            <Bell className="w-3.5 h-3.5 text-emerald-700" aria-hidden="true" />
            <span>{badge}</span>
          </div>

          <h3 className="font-display text-2xl text-plum-950 font-normal mb-2">
            {title}
          </h3>

          <p className="font-body text-xs sm:text-sm text-plum-700 font-light leading-relaxed max-w-xl mb-3">
            {description}
          </p>

          <div className="flex items-center justify-center md:justify-start gap-1.5 text-[11px] font-body text-emerald-800 font-medium">
            <Shield className="w-3.5 h-3.5 text-emerald-700" aria-hidden="true" />
            <span>Grupo silencioso · Solo administradores · Privacidad protegida</span>
          </div>
        </div>

        <div className="shrink-0 w-full sm:w-auto">
          <a
            href={whatsappGroupUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-sans text-xs font-bold uppercase tracking-[0.16em] transition-all duration-300 shadow-md shadow-emerald-700/20 cursor-pointer"
          >
            <MessageCircle className="w-4 h-4 fill-white" aria-hidden="true" />
            <span>{ctaText}</span>
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </div>
  );
}
