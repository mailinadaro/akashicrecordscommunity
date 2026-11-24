import React from "react";
import { Compass, CheckCircle2, Circle } from "lucide-react";

export interface RoadmapModule {
  number: number;
  title: string;
  duration: string;
  lessons: string;
}

export interface ProgressRoadmapProps {
  title?: string;
  subtitle?: string;
  modules?: RoadmapModule[];
  className?: string;
}

const DEFAULT_MODULES: RoadmapModule[] = [
  {
    number: 1,
    title: "Fundamentos y Sintonización Sagrada",
    duration: "Semana 1",
    lessons: "3 lecciones · Meditación matutina · Oraciones de apertura",
  },
  {
    number: 2,
    title: "El Método de Apertura y Discernimiento",
    duration: "Semana 2",
    lessons: "4 lecciones · Protocolo de preguntas · Filtrado del ego",
  },
  {
    number: 3,
    title: "Lecturas Personales y Práctica Guiada",
    duration: "Semana 3",
    lessons: "3 lecciones · Bitácora de 21 días · Casos de calibración",
  },
  {
    number: 4,
    title: "Sellado Energético y Mapa Espiritual",
    duration: "Integración",
    lessons: "2 lecciones · Decreto final · Comunidad continua",
  },
];

export default function ProgressRoadmap({
  title = "Tu Hoja de Ruta de Aprendizaje",
  subtitle = "El curso está organizado de forma progresiva para que avances paso a paso sin saturación.",
  modules = DEFAULT_MODULES,
  className = "",
}: ProgressRoadmapProps) {
  return (
    <div className={`w-full max-w-4xl mx-auto py-6 px-4 ${className}`}>
      <div className="rounded-3xl bg-surface-page border border-border-default/80 p-6 sm:p-8">
        <div className="text-center sm:text-left mb-6">
          <div className="inline-flex items-center gap-1.5 text-gold-700 font-sans text-xs uppercase tracking-wider font-semibold mb-1">
            <Compass className="w-3.5 h-3.5 text-gold-600" />
            <span>Plan de Estudio</span>
          </div>
          <h4 className="font-display text-xl sm:text-2xl text-plum-950 font-normal">
            {title}
          </h4>
          <p className="font-body text-xs sm:text-sm text-plum-600 font-light mt-1">
            {subtitle}
          </p>
        </div>

        <div className="space-y-4">
          {modules.map((m) => (
            <div
              key={m.number}
              className="flex items-start sm:items-center justify-between gap-4 p-4 rounded-xl bg-surface-secondary/50 border border-border-default/60"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-7 h-7 rounded-full bg-gold-500/20 text-gold-800 font-sans text-xs font-bold flex items-center justify-center shrink-0">
                  {m.number}
                </div>
                <div>
                  <h5 className="font-sans text-xs sm:text-sm font-semibold text-plum-950">
                    {m.title}
                  </h5>
                  <span className="text-[11px] font-body text-plum-500 block mt-0.5">
                    {m.lessons}
                  </span>
                </div>
              </div>

              <span className="shrink-0 text-[11px] font-sans font-semibold uppercase tracking-wider px-2.5 py-1 rounded-md bg-surface-page border border-border-default text-plum-700">
                {m.duration}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
