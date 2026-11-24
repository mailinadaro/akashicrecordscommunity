import React from "react";
import { Compass, Sparkles, MessageCircle, Video, BookOpen, ArrowRight } from "lucide-react";

export interface TourStep {
  title: string;
  description: string;
  channel: string;
  icon: React.ReactNode;
}

export interface WelcomeCommunityTourProps {
  title?: string;
  subtitle?: string;
  steps?: TourStep[];
  className?: string;
}

const DEFAULT_TOUR_STEPS: TourStep[] = [
  {
    title: "1. Preséntate a la Tribu",
    description: "Pasa por el canal de bienvenidas para que Tamara y tus compañeras conozcan tu nombre y desde dónde te conectas.",
    channel: "#bienvenidas-y-presentaciones",
    icon: <MessageCircle className="w-5 h-5 text-gold-700" />,
  },
  {
    title: "2. Meditaciones en Vivo (Jueves)",
    description: "Cada jueves a las 19 h nos encontramos en la sala sincrónica para recalibrar energía y canalizar en grupo.",
    channel: "#sala-de-meditaciones-en-vivo",
    icon: <Video className="w-5 h-5 text-gold-700" />,
  },
  {
    title: "3. Descarga tus Workbooks",
    description: "Encuentra tus cuadernos de trabajo interactivos y los updates astrológicos del mes actual.",
    channel: "#biblioteca-de-materiales",
    icon: <BookOpen className="w-5 h-5 text-gold-700" />,
  },
];

export default function WelcomeCommunityTour({
  title = "Tu Tour de Bienvenida al Círculo Akáshico",
  subtitle = "Estos son los 3 espacios clave donde se vivirá tu acompañamiento durante todo el año.",
  steps = DEFAULT_TOUR_STEPS,
  className = "",
}: WelcomeCommunityTourProps) {
  return (
    <div className={`w-full max-w-4xl mx-auto py-6 px-4 ${className}`}>
      <div className="rounded-3xl bg-surface-page border border-border-default/90 p-6 sm:p-9 shadow-sm">
        <div className="text-center sm:text-left mb-7">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold-500/10 text-gold-800 text-[10px] font-sans uppercase tracking-widest font-semibold mb-2">
            <Compass className="w-3.5 h-3.5 text-gold-600" />
            <span>Primeros Pasos en Circle</span>
          </div>
          <h3 className="font-display text-2xl sm:text-3xl text-plum-950 font-normal">
            {title}
          </h3>
          <p className="font-body text-xs sm:text-sm text-plum-600 font-light mt-1">
            {subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-surface-secondary/50 border border-border-default/70 flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-gold-500/15 flex items-center justify-center mb-3">
                  {step.icon}
                </div>
                <h4 className="font-sans text-sm font-semibold text-plum-950 mb-1.5">
                  {step.title}
                </h4>
                <p className="font-body text-xs text-plum-600 font-light leading-relaxed mb-3">
                  {step.description}
                </p>
              </div>

              <span className="text-[10px] font-sans font-semibold text-gold-800 uppercase tracking-wider block pt-2 border-t border-border-default/50">
                Canal: {step.channel}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
