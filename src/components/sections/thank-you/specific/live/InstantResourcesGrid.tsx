import React from "react";
import { BookOpen, Headphones, FileText, Download, Sparkles, ArrowRight } from "lucide-react";

export interface ResourceItem {
  id: string;
  type: "pdf" | "audio" | "guide";
  title: string;
  description: string;
  fileSizeOrDuration: string;
  downloadUrl?: string;
  badge?: string;
}

export interface InstantResourcesGridProps {
  title?: string;
  subtitle?: string;
  resources?: ResourceItem[];
  className?: string;
}

const DEFAULT_RESOURCES: ResourceItem[] = [
  {
    id: "manual",
    type: "pdf",
    title: "Manual «El ABC Akáshico» (PDF)",
    description: "Para familiarizarte con las oraciones, decretos y conceptos fundamentales antes del inicio.",
    fileSizeOrDuration: "PDF Descargable",
    badge: "Lectura Previa",
  },
  {
    id: "meditacion",
    type: "audio",
    title: "Audio MP3 de Sintonización Matutina",
    description: "Audio guiado por Tamara para comenzar a limpiar y calibrar tu canal de conexión con tus Guías.",
    fileSizeOrDuration: "Audio MP3 · 18 min",
    badge: "Audio Sagrado",
  },
  {
    id: "altar",
    type: "guide",
    title: "Guía de Espacio Sagrado y Altar",
    description: "Instrucciones claras para consagrar tu espacio sagrado y altar de práctica cotidiana.",
    fileSizeOrDuration: "Guía en PDF",
    badge: "Preparación",
  },
];

export default function InstantResourcesGrid({
  title = "¿Qué materiales recibirás para tu preparación?",
  subtitle = "A partir del 11 de enero de 2027 se habilitará tu acceso en Circle con estos materiales preparatorios:",
  resources = DEFAULT_RESOURCES,
  className = "",
}: InstantResourcesGridProps) {
  const getIcon = (type: ResourceItem["type"]) => {
    switch (type) {
      case "pdf":
        return <BookOpen className="w-5 h-5 text-gold-700" />;
      case "audio":
        return <Headphones className="w-5 h-5 text-gold-700" />;
      case "guide":
        return <FileText className="w-5 h-5 text-gold-700" />;
    }
  };

  return (
    <section className={`w-full max-w-4xl mx-auto py-6 sm:py-8 px-4 ${className}`}>
      <div className="text-center mb-7">
        <span className="font-sans text-[11px] uppercase tracking-[0.2em] font-semibold text-gold-700 mb-2 block">
          · Materiales de Preparación ·
        </span>
        <h3 className="font-display text-2xl sm:text-3xl text-plum-950 font-normal">
          {title}
        </h3>
        <p className="font-body text-xs sm:text-sm text-plum-600 font-light mt-1 max-w-lg mx-auto">
          {subtitle}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {resources.map((item) => (
          <div
            key={item.id}
            className="flex flex-col justify-between rounded-2xl bg-surface-page border border-border-default/80 p-5 sm:p-6 shadow-xs hover:shadow-md hover:border-gold-400/40 transition-all duration-300"
          >
            <div>
              <div className="flex items-center justify-between mb-3.5">
                <div className="w-10 h-10 rounded-xl bg-gold-500/10 border border-gold-400/20 flex items-center justify-center">
                  {getIcon(item.type)}
                </div>
                {item.badge && (
                  <span className="text-[10px] font-sans uppercase tracking-wider font-semibold px-2 py-0.5 rounded-full bg-surface-secondary text-plum-700 border border-border-default">
                    {item.badge}
                  </span>
                )}
              </div>

              <h4 className="font-sans text-sm font-semibold text-plum-950 mb-1.5 leading-snug">
                {item.title}
              </h4>
              <p className="font-body text-xs text-plum-600 font-light leading-relaxed mb-4">
                {item.description}
              </p>
            </div>

            <div className="pt-3 border-t border-border-default/60 flex items-center justify-between text-xs font-body">
              <span className="text-plum-500 text-[11px]">{item.fileSizeOrDuration}</span>
              {item.downloadUrl ? (
                <a
                  href={item.downloadUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 font-sans font-semibold text-gold-800 hover:text-gold-950 transition-colors uppercase text-[11px] tracking-wider"
                >
                  <span>Descargar</span>
                  <Download className="w-3.5 h-3.5" aria-hidden="true" />
                </a>
              ) : (
                <span className="text-gold-800 font-sans font-semibold text-[11px] uppercase tracking-wider">
                  En tu correo
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
