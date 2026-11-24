import React from "react";
import { Users, Sparkles, ArrowRight, ShieldCheck } from "lucide-react";

export interface CommunityOrBridgeActionProps {
  badge?: string;
  title?: string;
  description?: string;
  ctaText?: string;
  ctaHref?: string;
  communityName?: string;
  platform?: string;
  features?: string[];
  className?: string;
}

export default function CommunityOrBridgeAction({
  badge = "Espacio Comunitario Exclusivo",
  title = "Únete al Santuario Privado en Circle",
  description = "Este proceso no se transita en soledad. En nuestro espacio comunitario encontrarás a tus compañeras de camino, dinámicas de integración, respuestas a tus preguntas y contención continua.",
  ctaText = "ENTRAR AHORA A LA COMUNIDAD EN CIRCLE",
  ctaHref = "https://circle.so",
  communityName = "Círculo Akáshico",
  platform = "Circle",
  features = [
    "Presentaciones y conexiones con almas afines",
    "Acceso a la biblioteca de grabaciones y manuales descargables",
    "Espacio de preguntas directas para calibrar tus lecturas",
  ],
  className = "",
}: CommunityOrBridgeActionProps) {
  return (
    <section className={`w-full max-w-4xl mx-auto py-8 sm:py-10 px-4 ${className}`}>
      <div className="relative rounded-3xl bg-gradient-to-b from-[#fdfbf7] via-surface-page to-[#faf8f5] border-2 border-gold-400/40 p-7 sm:p-10 shadow-lg shadow-gold-900/5 overflow-hidden">
        {/* Glow de acento superior */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-radial from-gold-500/10 to-transparent pointer-events-none blur-2xl" />

        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex-1 text-center md:text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold-500/15 border border-gold-400/30 text-[10px] sm:text-[11px] font-sans uppercase tracking-[0.2em] font-bold text-gold-800 mb-3">
              <Users className="w-3.5 h-3.5 text-gold-700" aria-hidden="true" />
              <span>{badge}</span>
            </div>

            <h3 className="font-display text-2xl sm:text-3xl text-plum-950 font-normal leading-tight mb-3">
              {title}
            </h3>

            <p className="font-body text-xs sm:text-sm text-plum-600 font-light leading-relaxed mb-5 max-w-xl">
              {description}
            </p>

            {/* Bullets de características */}
            <ul className="space-y-2 mb-6">
              {features.map((feature, idx) => (
                <li key={idx} className="flex items-center gap-2.5 text-xs font-body text-plum-800">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold-600 shrink-0" aria-hidden="true" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-2 text-[11px] font-sans text-plum-500">
              <ShieldCheck className="w-3.5 h-3.5 text-gold-600" aria-hidden="true" />
              <span>Comunidad protegida y moderada en {platform}</span>
            </div>
          </div>

          {/* CTA Box lateral */}
          <div className="w-full md:w-auto shrink-0 flex flex-col items-center">
            <a
              href={ctaHref}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gold-500 hover:bg-gold-400 text-plum-950 font-sans text-xs font-bold uppercase tracking-[0.16em] shadow-md shadow-gold-500/20 hover:scale-[1.01] active:scale-[0.99] transition-all duration-300 text-center cursor-pointer"
            >
              <span>{ctaText}</span>
              <ArrowRight className="w-4 h-4 stroke-[2.5]" aria-hidden="true" />
            </a>
            <span className="text-[10px] font-body text-plum-500 mt-2 text-center">
              Acceso inmediato con el correo de tu compra
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
