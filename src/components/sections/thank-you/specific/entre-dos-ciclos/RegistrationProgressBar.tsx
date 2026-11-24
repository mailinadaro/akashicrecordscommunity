import React from "react";

export interface RegistrationProgressBarProps {
  percentage?: number;
  label?: string;
  helperText?: string;
  className?: string;
}

export default function RegistrationProgressBar({
  percentage = 70,
  label = "Progreso de tu registro",
  helperText = "Falta 1 paso obligatorio para completarlo al 100%",
  className = "",
}: RegistrationProgressBarProps) {
  const clamped = Math.max(0, Math.min(100, percentage));

  return (
    <div
      className={`w-full max-w-lg mx-auto rounded-2xl border border-gold-400/30 bg-plum-950/80 px-4 py-3 sm:px-5 sm:py-3.5 shadow-inner ${className}`}
    >
      <div className="flex items-center justify-between gap-2 text-xs sm:text-sm font-sans mb-2">
        <span className="font-semibold text-[#F7E3C6] lg:text-gold-200">{label}</span>
        <span className="font-bold text-[#FCE8CA] lg:text-gold-300 tabular-nums">{clamped}%</span>
      </div>

      <div
        role="progressbar"
        aria-valuenow={clamped}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={`${label}: ${clamped}%`}
        className="w-full h-2.5 sm:h-3 rounded-full bg-white/10 border border-gold-400/20 overflow-hidden"
      >
        <div
          className="h-full rounded-full bg-gradient-to-r from-gold-500 via-gold-300 to-emerald-400 shadow-[0_0_12px_rgba(206,139,52,0.55)]"
          style={{ width: `${clamped}%` }}
        />
      </div>

      <p className="mt-2 text-[11px] sm:text-xs font-body text-[#F5D7AD] lg:text-gold-200/90 font-medium lg:font-normal text-center">
        {helperText}
      </p>
    </div>
  );
}
