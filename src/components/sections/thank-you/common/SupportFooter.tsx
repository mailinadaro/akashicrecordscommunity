import React from "react";
import { MessageCircle, Mail, HelpCircle, Clock, Heart } from "lucide-react";
import { siteConfig } from "@/config/site.config";

export interface SupportFooterProps {
  title?: string;
  subtitle?: string;
  whatsappUrl?: string;
  email?: string;
  supportHours?: string;
  className?: string;
}

export default function SupportFooter({
  title = "¿Tienes algún inconveniente con tu acceso o no encuentras tu correo?",
  subtitle = "Estamos aquí para acompañarte en cada momento. Si tienes cualquier inconveniente técnico o duda, escríbenos directamente y nuestro equipo te ayudará a resolverlo a la brevedad.",
  whatsappUrl,
  email = "soporte@tamaraciriza.com",
  supportHours = "Lunes a Viernes de 9:00 a 18:00 h (México) · Respuesta promedio en menos de 2 horas",
  className = "",
}: SupportFooterProps) {
  return (
    <footer className={`w-full max-w-4xl mx-auto py-12 px-4 border-t border-border-default/80 mt-12 ${className}`}>
      <div className="text-center max-w-2xl mx-auto">
        {/* Icono de contención y ayuda */}
        <div className="w-12 h-12 rounded-full bg-gold-500/15 border border-gold-400/35 text-gold-800 flex items-center justify-center mx-auto mb-4 shadow-2xs">
          <HelpCircle className="w-6 h-6 text-gold-700" aria-hidden="true" />
        </div>

        {/* Título de contención */}
        <h4 className="font-display italic text-2xl sm:text-3xl text-plum-950 font-normal mb-3">
          {title}
        </h4>

        {/* Bajada */}
        <p className="font-body text-sm sm:text-base text-plum-600 font-light leading-relaxed mb-6">
          {subtitle}
        </p>

        {/* Botón de contacto directo por email, centrado y fluido */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-6">
          <a
            href={`mailto:${email}`}
            className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-surface-page border border-border-default hover:border-gold-400/80 text-plum-950 font-sans text-xs sm:text-sm font-semibold uppercase tracking-wider transition-all duration-300 shadow-xs hover:shadow-md hover:bg-surface-secondary/70"
          >
            <Mail className="w-4 h-4 text-gold-700" aria-hidden="true" />
            <span>Escribir a {email}</span>
          </a>
        </div>

        {/* Horarios de atención y aviso */}
        <div className="inline-flex items-center justify-center gap-2 text-xs font-body text-plum-500 mb-8 px-4 py-1.5 rounded-full bg-surface-secondary/60 border border-border-default/60">
          <Clock className="w-3.5 h-3.5 text-gold-600" aria-hidden="true" />
          <span>{supportHours}</span>
        </div>

        {/* Copyright y firma amorosa */}
        <div className="pt-6 border-t border-border-default/50 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] font-body text-plum-500 text-center sm:text-left">
          <p>© {new Date().getFullYear()} {siteConfig.brand.name}. Todos los derechos reservados.</p>
          <p className="flex items-center justify-center gap-1.5">
            <span>Sostenido con amor por el equipo de Tamara Ciriza</span>
            <Heart className="w-3 h-3 text-gold-600 fill-gold-600" aria-hidden="true" />
          </p>
        </div>
      </div>
    </footer>
  );
}
