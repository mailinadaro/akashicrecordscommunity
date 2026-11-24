"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/config/site.config";
import { trackContactChannelClick } from "@/lib/analytics";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="24"
      height="24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.888 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  );
}

export interface FloatingWhatsAppProps {
  readonly phoneNumber?: string;
  readonly defaultMessage?: string;
  readonly label?: string;
  readonly sublabel?: string;
}

export default function FloatingWhatsApp({
  phoneNumber,
  defaultMessage,
  label = "¿Tienes dudas?",
  sublabel = "Escríbenos en tiempo real",
}: FloatingWhatsAppProps) {
  const pathname = usePathname();

  // Aislamiento del Portal administrativo y Opt-in Entre Dos Ciclos
  if (
    pathname?.startsWith("/portal") ||
    pathname?.startsWith("/entre-ciclos") ||
    pathname?.startsWith("/entre-dos-ciclos")
  ) {
    return null;
  }

  const baseHref = phoneNumber
    ? `https://wa.me/${phoneNumber.replace(/[^0-9]/g, "")}`
    : siteConfig.contact.whatsapp;

  const href = defaultMessage
    ? `${baseHref}${baseHref.includes("?") ? "&" : "?"}text=${encodeURIComponent(
        defaultMessage
      )}`
    : baseHref;

  const handleClick = () => {
    trackContactChannelClick({
      channel: "whatsapp",
      click_location: "floating_whatsapp",
      inquiry_context: "general",
      target_url: href,
    });
  };

  return (
    <aside
      aria-label="Botón flotante de contacto directo por WhatsApp"
      className="fixed bottom-5 right-5 sm:bottom-7 sm:right-7 z-40"
    >
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleClick}
        aria-label="Contactar por WhatsApp para resolver dudas"
        className="group flex items-center gap-3 rounded-full bg-surface-page/95 backdrop-blur-md border border-border-default/80 p-2 sm:py-2.5 sm:px-4 shadow-xl shadow-plum-950/10 hover:shadow-2xl hover:border-gold-500/80 hover:scale-105 active:scale-95 transition-all duration-300 select-none"
      >
        {/* Contenedor del Icono de WhatsApp con indicador de disponibilidad en vivo */}
        <div className="relative flex items-center justify-center w-11 h-11 rounded-full bg-[#25D366] text-white shadow-md shadow-[#25D366]/30 group-hover:bg-[#20ba5a] transition-colors shrink-0">
          <WhatsAppIcon className="w-6 h-6 fill-current" />
          <span
            className="absolute -top-0.5 -right-0.5 flex h-3.5 w-3.5"
            aria-hidden="true"
          >
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500 border-2 border-white"></span>
          </span>
        </div>

        {/* Etiqueta editorial visible en desktop / tablet */}
        <div className="hidden sm:flex flex-col text-left pr-1.5">
          <span className="font-sans text-xs font-semibold text-text-primary leading-tight group-hover:text-gold-700 transition-colors">
            {label}
          </span>
          <span className="font-body text-[11px] text-text-secondary leading-tight font-light">
            {sublabel}
          </span>
        </div>
      </a>
    </aside>
  );
}
