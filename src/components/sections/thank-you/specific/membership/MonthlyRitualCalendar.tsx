import React from "react";
import { Calendar, Moon, Sun, Sparkles, Clock } from "lucide-react";

export interface RitualEvent {
  dayOrFrequency: string;
  name: string;
  description: string;
  badge: string;
}

export interface MonthlyRitualCalendarProps {
  title?: string;
  subtitle?: string;
  events?: RitualEvent[];
  className?: string;
}

const DEFAULT_RITUALS: RitualEvent[] = [
  {
    dayOrFrequency: "Todos los Jueves",
    name: "Meditación Grupal en Vivo",
    description: "48 encuentros anuales para recalibrar tu frecuencia y canalizar en grupo.",
    badge: "Semanal",
  },
  {
    dayOrFrequency: "Primer Lunes del Mes",
    name: "Update Akáshico y Astrológico",
    description: "12 lecturas de clima cósmico y mapa energético para el mes que inicia.",
    badge: "Mensual",
  },
  {
    dayOrFrequency: "Tercer Miércoles del Mes",
    name: "Círculo de Integración Terapéutica",
    description: "12 dinámicas vivenciales para procesar emociones y consultas de lectura.",
    badge: "Comunitario",
  },
];

export default function MonthlyRitualCalendar({
  title = "Ritmo Sagrado de tu Membresía 2027",
  subtitle = "Un sostén continuo para que tu práctica espiritual no quede en un taller aislado.",
  events = DEFAULT_RITUALS,
  className = "",
}: MonthlyRitualCalendarProps) {
  return (
    <div className={`w-full max-w-4xl mx-auto py-6 px-4 ${className}`}>
      <div className="rounded-3xl bg-surface-page border border-border-default/80 p-6 sm:p-8">
        <div className="text-center sm:text-left mb-6">
          <div className="inline-flex items-center gap-1.5 text-gold-700 font-sans text-xs uppercase tracking-wider font-semibold mb-1">
            <Moon className="w-3.5 h-3.5 text-gold-600" />
            <span>Rituales y Encuentros</span>
          </div>
          <h4 className="font-display text-xl sm:text-2xl text-plum-950 font-normal">
            {title}
          </h4>
          <p className="font-body text-xs sm:text-sm text-plum-600 font-light mt-1">
            {subtitle}
          </p>
        </div>

        <div className="space-y-3.5">
          {events.map((evt, idx) => (
            <div
              key={idx}
              className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 p-4 rounded-xl bg-surface-secondary/40 border border-border-default/60"
            >
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-gold-600 mt-2 shrink-0" />
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-sans text-xs font-semibold text-plum-950">
                      {evt.name}
                    </span>
                    <span className="text-[10px] font-sans font-semibold uppercase tracking-wider px-2 py-0.2 rounded-full bg-gold-500/15 text-gold-800">
                      {evt.badge}
                    </span>
                  </div>
                  <p className="font-body text-xs text-plum-600 font-light mt-0.5">
                    {evt.description}
                  </p>
                </div>
              </div>

              <div className="shrink-0 pl-5 sm:pl-0 text-left sm:text-right">
                <span className="text-xs font-sans font-medium text-gold-800 flex items-center gap-1">
                  <Clock className="w-3 h-3 text-gold-600" />
                  {evt.dayOrFrequency}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
