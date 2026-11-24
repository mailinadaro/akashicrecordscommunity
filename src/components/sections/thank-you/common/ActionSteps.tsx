import React from "react";
import { Mail, Calendar, MessageSquare, Check, ArrowRight } from "lucide-react";

export interface ActionStep {
  number: string;
  title: string;
  description: string;
  bullets?: string[];
  actionText?: string;
  actionHref?: string;
  actionVariant?: "primary" | "secondary" | "link";
  icon?: React.ReactNode;
  extraContent?: React.ReactNode;
}

export interface ActionStepsProps {
  title?: string;
  subtitle?: string;
  steps?: ActionStep[];
  layout?: "grid" | "stacked";
  showProgressHeader?: boolean;
  className?: string;
}

const DEFAULT_STEPS: ActionStep[] = [
  {
    number: "01",
    title: "Revisa tu bandeja de entrada",
    description: "En los próximos 5 minutos recibirás tu confirmación de compra y enlace de activación (recuerda chequear spam o promociones).",
    icon: <Mail className="w-5 h-5 text-gold-700" />,
  },
  {
    number: "02",
    title: "Únete al espacio comunitario",
    description: "Accede al santuario privado en Circle o al grupo de avisos para recibir recordatorios directos y material preliminar.",
    icon: <MessageSquare className="w-5 h-5 text-gold-700" />,
  },
  {
    number: "03",
    title: "Agenda los encuentros",
    description: "Bloquea los horarios en tu calendario personal para asegurar tu presencia sincrónica y espacio de silencio.",
    icon: <Calendar className="w-5 h-5 text-gold-700" />,
  },
];

export default function ActionSteps({
  title = "Siguientes pasos esenciales",
  subtitle = "Sigue estos 3 pasos para comenzar tu experiencia con serenidad y orden.",
  steps = DEFAULT_STEPS,
  layout = "grid",
  showProgressHeader = true,
  className = "",
}: ActionStepsProps) {
  const isStacked = layout === "stacked";

  // Estilos de degradé evolutivo para transmitir avance y jerarquía
  const getStepBackground = (idx: number) => {
    if (!isStacked) return "bg-surface-page border border-border-default/80";
    switch (idx) {
      case 0:
        return "bg-gradient-to-br from-surface-secondary/95 via-surface-page to-gold-500/5 border border-border-default/90 shadow-xs hover:border-gold-400/40";
      case 1:
        return "bg-gradient-to-br from-gold-500/12 via-surface-page to-gold-500/6 border-2 border-gold-400/50 shadow-md ring-4 ring-gold-500/10 hover:border-gold-500/70";
      case 2:
      default:
        return "bg-gradient-to-br from-surface-secondary/70 via-surface-page to-plum-950/5 border border-border-default/90 shadow-xs hover:border-gold-400/40";
    }
  };

  return (
    <section className={`w-full max-w-4xl mx-auto py-8 sm:py-10 px-4 ${className}`}>
      <div className="text-center mb-6">
        <h2 className="font-display text-2xl sm:text-3xl text-plum-950 font-normal mb-2">
          {title}
        </h2>
        {subtitle && (
          <p className="font-body text-xs sm:text-sm text-plum-600 font-light max-w-xl mx-auto">
            {subtitle}
          </p>
        )}
      </div>

      {/* Barra de progreso de 3 fases */}
      {showProgressHeader && isStacked && (
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-8 text-[11px] sm:text-xs font-sans">
          <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold-500/15 text-gold-950 font-semibold border border-gold-400/35 shadow-2xs">
            <span className="w-1.5 h-1.5 rounded-full bg-gold-600"></span>
            1. Correo
          </span>
          <span className="text-gold-400 font-bold hidden sm:inline">───</span>
          <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold-500/20 text-gold-950 font-bold border border-gold-400/50 shadow-xs ring-2 ring-gold-500/20">
            <span className="w-1.5 h-1.5 rounded-full bg-gold-700 animate-pulse"></span>
            2. Circle (Principal)
          </span>
          <span className="text-gold-400 font-bold hidden sm:inline">───</span>
          <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-secondary/80 text-plum-700 font-medium border border-border-default">
            <span className="w-1.5 h-1.5 rounded-full bg-plum-400"></span>
            3. Calendario
          </span>
        </div>
      )}

      <div className={isStacked ? "space-y-6" : "grid grid-cols-1 md:grid-cols-3 gap-6"}>
        {steps.map((step, idx) => (
          <div
            key={idx}
            className={`relative flex flex-col justify-between rounded-3xl p-6 sm:p-8 transition-all duration-300 ${getStepBackground(
              idx
            )}`}
          >
            <div>
              {/* Header de la tarjeta de paso */}
              <div className="flex items-center justify-between mb-4">
                <span className="font-sans text-xs font-bold text-gold-900 uppercase tracking-widest px-3.5 py-1 rounded-full bg-gold-500/20 border border-gold-400/40 shadow-2xs">
                  Paso {step.number}
                </span>
                <div className="w-10 h-10 rounded-xl bg-surface-page/90 flex items-center justify-center text-gold-700 border border-border-default/80 shadow-2xs">
                  {step.icon || <Check className="w-4 h-4" />}
                </div>
              </div>

              {/* Título y descripción */}
              <h3 className="font-sans text-base sm:text-lg font-semibold text-plum-950 mb-2.5 leading-snug">
                {step.title}
              </h3>
              <p className="font-body text-xs sm:text-sm text-plum-600 font-light leading-relaxed">
                {step.description}
              </p>

              {/* Bullets opcionales */}
              {step.bullets && step.bullets.length > 0 && (
                <ul className="mt-3.5 space-y-2 text-xs sm:text-sm font-body text-plum-700 font-light">
                  {step.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold-600 shrink-0 mt-1.5" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Acción o CTA personalizado */}
            {step.actionText && step.actionHref && (
              <div className={`mt-6 pt-5 border-t border-border-default/70 ${step.actionVariant === "primary" ? "text-center" : ""}`}>
                {step.actionVariant === "primary" ? (
                  <div className="flex flex-col items-center">
                    <a
                      href={step.actionHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex w-full sm:w-auto items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-plum-950 hover:bg-plum-900 text-gold-300 hover:text-white font-sans text-xs sm:text-sm font-bold uppercase tracking-[0.18em] transition-all duration-300 shadow-md hover:shadow-xl hover:scale-[1.01] cursor-pointer"
                    >
                      <span>{step.actionText}</span>
                      <ArrowRight className="w-4 h-4 text-gold-400" aria-hidden="true" />
                    </a>
                    <span className="text-[11px] font-body text-plum-500 mt-2">
                      ✦ Activación inmediata de tu espacio privado de estudio
                    </span>
                  </div>
                ) : (
                  <a
                    href={step.actionHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-sans font-semibold text-gold-800 hover:text-gold-950 transition-colors uppercase tracking-wider"
                  >
                    <span>{step.actionText}</span>
                    <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                  </a>
                )}
              </div>
            )}

            {/* Extra content (ej. botones de calendario) */}
            {step.extraContent && (
              <div className="mt-5 pt-4 border-t border-border-default/70">
                {step.extraContent}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
