"use client";

import React, { useState } from "react";
import { HelpCircle, Check, Send } from "lucide-react";

export interface PreEventSurveyProps {
  title?: string;
  subtitle?: string;
  className?: string;
}

const SURVEY_OPTIONS = [
  "Nunca he abierto registros pero siento un llamado muy fuerte.",
  "He tomado sesiones individuales y quiero aprender a hacerlo por mí misma.",
  "Ya conozco el método pero dudo si la información viene de mi ego o de mis Guías.",
  "Busco herramientas espirituales para sostener mi año con mayor serenidad.",
];

export default function PreEventSurvey({
  title = "Ayúdanos a calibrar el encuentro",
  subtitle = "¿Cuál es tu principal inquietud o momento actual respecto a los Registros Akáshicos?",
  className = "",
}: PreEventSurveyProps) {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedOption !== null) {
      setIsSubmitted(true);
    }
  };

  return (
    <div className={`w-full max-w-4xl mx-auto py-6 px-4 ${className}`}>
      <div className="rounded-3xl bg-surface-page border border-border-default/80 p-6 sm:p-8 shadow-xs">
        <div className="text-center sm:text-left mb-6">
          <div className="inline-flex items-center gap-1.5 text-gold-700 font-sans text-xs uppercase tracking-wider font-semibold mb-1">
            <HelpCircle className="w-3.5 h-3.5 text-gold-600" aria-hidden="true" />
            <span>Calibración Previa</span>
          </div>
          <h4 className="font-display text-xl sm:text-2xl text-plum-950 font-normal">
            {title}
          </h4>
          <p className="font-body text-xs sm:text-sm text-plum-600 font-light mt-1">
            {subtitle}
          </p>
        </div>

        {isSubmitted ? (
          <div className="p-5 rounded-2xl bg-gold-500/10 border border-gold-400/30 text-center">
            <div className="w-8 h-8 rounded-full bg-gold-500 text-plum-950 flex items-center justify-center mx-auto mb-2">
              <Check className="w-4 h-4 stroke-[2.5]" />
            </div>
            <p className="font-sans text-xs font-semibold uppercase tracking-wider text-plum-950">
              ¡Gracias por compartir!
            </p>
            <p className="font-body text-xs text-plum-600 font-light mt-0.5">
              Tamara tendrá en cuenta tus respuestas para abordar estas inquietudes en vivo.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-3">
            {SURVEY_OPTIONS.map((option, idx) => (
              <label
                key={idx}
                className={`flex items-start gap-3 p-3.5 rounded-xl border text-xs font-body cursor-pointer transition-colors ${
                  selectedOption === idx
                    ? "bg-gold-500/10 border-gold-400 text-plum-950"
                    : "bg-surface-secondary/40 border-border-default/70 hover:bg-surface-secondary text-plum-700"
                }`}
              >
                <input
                  type="radio"
                  name="surveyOption"
                  checked={selectedOption === idx}
                  onChange={() => setSelectedOption(idx)}
                  className="mt-0.5 text-gold-600 focus:ring-gold-500"
                />
                <span className="leading-relaxed">{option}</span>
              </label>
            ))}

            <div className="pt-3 text-right">
              <button
                type="submit"
                disabled={selectedOption === null}
                className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-plum-950 hover:bg-plum-900 disabled:opacity-50 text-gold-200 font-sans text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
              >
                <span>Enviar Respuesta</span>
                <Send className="w-3.5 h-3.5 text-gold-400" />
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
