import React from "react";
import { CheckCircle2, Sparkles, Mail } from "lucide-react";

export interface HeaderConfirmationProps {
  kicker?: string;
  title?: string;
  subtitle?: string;
  paragraphs?: string[];
  calloutText?: string;
  conclusionText?: string;
  userEmail?: string;
  orderNumber?: string;
  className?: string;
  children?: React.ReactNode;
}

export default function HeaderConfirmation({
  kicker = "¡Inscripción confirmada con éxito!",
  title = "Tu portal se ha abierto",
  subtitle,
  paragraphs,
  calloutText,
  conclusionText,
  userEmail,
  orderNumber,
  className = "",
  children,
}: HeaderConfirmationProps) {
  return (
    <header className={`text-center max-w-3xl mx-auto py-8 sm:py-12 px-4 ${className}`}>
      {/* Icono de Checkmark Sagrado con Halo Doble Celestial */}
      <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gold-500/20 border border-gold-400/40 text-gold-700 flex items-center justify-center mx-auto mb-6 shadow-lg shadow-gold-500/15 ring-8 ring-gold-500/10">
        <CheckCircle2 className="w-8 h-8 sm:w-10 sm:h-10 stroke-[2.2] text-gold-800" aria-hidden="true" />
      </div>

      {/* Kicker superior */}
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-500/15 text-gold-900 border border-gold-400/40 text-[11px] sm:text-xs font-sans uppercase tracking-[0.22em] font-bold mb-4 shadow-2xs">
        <Sparkles className="w-3.5 h-3.5 text-gold-700" aria-hidden="true" />
        <span>{kicker}</span>
      </div>

      {/* Título Principal */}
      <h1 className="font-display italic text-3xl sm:text-5xl lg:text-[52px] text-plum-950 font-normal leading-[1.15] tracking-tight mb-5">
        {title}
      </h1>

      {/* Bajada opcional o Párrafos Editoriales */}
      {subtitle && (
        <p className="font-body text-sm sm:text-base md:text-lg text-plum-600 font-light leading-relaxed max-w-2xl mx-auto mb-4">
          {subtitle}
        </p>
      )}

      {paragraphs && paragraphs.length > 0 && (
        <div className="space-y-3.5 font-body text-sm sm:text-base text-plum-700 font-light leading-relaxed max-w-2xl mx-auto mb-5">
          {paragraphs.map((p, idx) => (
            <p key={idx}>{p}</p>
          ))}
        </div>
      )}

      {/* Frase / Callout Destacado (Tu experiencia comienza aquí) */}
      {calloutText && (
        <div className="my-5 inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gold-500/15 border border-gold-400/40 text-gold-950 font-display italic text-base sm:text-lg shadow-2xs">
          <Sparkles className="w-4 h-4 text-gold-700 shrink-0" aria-hidden="true" />
          <span>{calloutText}</span>
        </div>
      )}

      {/* Texto de transición a pasos */}
      {conclusionText && (
        <p className="font-sans text-xs sm:text-sm font-semibold uppercase tracking-wider text-plum-700/90 mt-2 mb-4">
          {conclusionText}
        </p>
      )}

      {children}

      {/* Caja de Metadatos de Orden (si aplica) */}
      {(userEmail || orderNumber) && (
        <div className="mt-4 inline-flex flex-wrap items-center justify-center gap-3 sm:gap-6 px-4 py-2 rounded-xl bg-surface-secondary/80 border border-border-default/90 text-xs font-body text-plum-700 shadow-2xs">
          {userEmail && (
            <span className="flex items-center gap-1.5">
              <Mail className="w-3.5 h-3.5 text-gold-700" aria-hidden="true" />
              <span>Enviado a: <strong className="font-semibold text-plum-950">{userEmail}</strong></span>
            </span>
          )}
          {orderNumber && (
            <span className="text-plum-500">
              ID de Orden: <strong className="font-semibold text-plum-900">{orderNumber}</strong>
            </span>
          )}
        </div>
      )}
    </header>
  );
}
