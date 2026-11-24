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
  icon?: React.ReactNode;
  theme?: "light" | "dark";
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
  icon,
  theme = "light",
  className = "",
  children,
}: HeaderConfirmationProps) {
  const isDark = theme === "dark";

  return (
    <header className={`text-center max-w-3xl mx-auto py-8 sm:py-12 px-4 ${className}`}>
      {/* Icono de Estado con Halo Doble Celestial */}
      <div
        className={`relative w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-5 ${
          isDark
            ? "bg-gold-500/20 border border-gold-400/50 text-gold-300 shadow-lg shadow-gold-500/20 ring-8 ring-gold-500/10"
            : "bg-gold-500/20 border border-gold-400/40 text-gold-700 shadow-lg shadow-gold-500/15 ring-8 ring-gold-500/10"
        }`}
      >
        {icon ?? (
          <CheckCircle2
            className={`w-7 h-7 sm:w-8 sm:h-8 stroke-[2.2] ${isDark ? "text-gold-300" : "text-gold-800"}`}
            aria-hidden="true"
          />
        )}
      </div>

      {/* Kicker superior */}
      <div
        className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] sm:text-xs font-sans uppercase tracking-[0.22em] font-bold mb-4 ${
          isDark
            ? "bg-gold-500/20 text-gold-200 border border-gold-400/45 shadow-sm"
            : "bg-gold-500/15 text-gold-900 border border-gold-400/40 shadow-2xs"
        }`}
      >
        <Sparkles className={`w-3.5 h-3.5 ${isDark ? "text-gold-300" : "text-gold-700"}`} aria-hidden="true" />
        <span>{kicker}</span>
      </div>

      {/* Título Principal */}
      <h1
        className={`font-display italic text-3xl sm:text-5xl lg:text-[52px] font-normal leading-[1.15] tracking-tight mb-4 ${
          isDark ? "text-white" : "text-plum-950"
        }`}
      >
        {title}
      </h1>

      {/* Bajada opcional o Párrafos Editoriales */}
      {subtitle && (
        <p
          className={`font-body text-sm sm:text-base md:text-lg font-light leading-relaxed max-w-2xl mx-auto mb-4 ${
            isDark ? "text-white/90" : "text-plum-600"
          }`}
        >
          {subtitle}
        </p>
      )}

      {paragraphs && paragraphs.length > 0 && (
        <div
          className={`space-y-2.5 font-body text-sm sm:text-base font-light leading-relaxed max-w-2xl mx-auto mb-5 ${
            isDark ? "text-white/90" : "text-plum-700"
          }`}
        >
          {paragraphs.map((p, idx) => (
            <p key={idx}>{p}</p>
          ))}
        </div>
      )}

      {/* Frase / Callout Destacado (Tu experiencia comienza aquí) */}
      {calloutText && (
        <div
          className={`my-5 inline-flex items-center gap-2 px-5 py-2 rounded-full font-display italic text-base sm:text-lg ${
            isDark
              ? "bg-gold-500/20 border border-gold-400/45 text-gold-200 shadow-sm"
              : "bg-gold-500/15 border border-gold-400/40 text-gold-950 shadow-2xs"
          }`}
        >
          <Sparkles className={`w-4 h-4 shrink-0 ${isDark ? "text-gold-300" : "text-gold-700"}`} aria-hidden="true" />
          <span>{calloutText}</span>
        </div>
      )}

      {children}

      {/* Texto de transición a pasos */}
      {conclusionText && (
        <p
          className={`font-sans text-xs sm:text-sm font-semibold uppercase tracking-wider mt-4 mb-1 ${
            isDark ? "text-gold-300" : "text-plum-700/90"
          }`}
        >
          {conclusionText}
        </p>
      )}

      {/* Caja de Metadatos de Orden (si aplica) */}
      {(userEmail || orderNumber) && (
        <div
          className={`mt-4 inline-flex flex-wrap items-center justify-center gap-3 sm:gap-6 px-4 py-2 rounded-xl text-xs font-body ${
            isDark
              ? "bg-plum-950/60 border border-gold-400/25 text-gold-200"
              : "bg-surface-secondary/80 border border-border-default/90 text-plum-700 shadow-2xs"
          }`}
        >
          {userEmail && (
            <span className="flex items-center gap-1.5">
              <Mail className={`w-3.5 h-3.5 ${isDark ? "text-gold-300" : "text-gold-700"}`} aria-hidden="true" />
              <span>
                Enviado a:{" "}
                <strong className={`font-semibold ${isDark ? "text-white" : "text-plum-950"}`}>
                  {userEmail}
                </strong>
              </span>
            </span>
          )}
          {orderNumber && (
            <span className={isDark ? "text-gold-200/80" : "text-plum-500"}>
              ID de Orden:{" "}
              <strong className={`font-semibold ${isDark ? "text-white" : "text-plum-900"}`}>
                {orderNumber}
              </strong>
            </span>
          )}
        </div>
      )}
    </header>
  );
}
