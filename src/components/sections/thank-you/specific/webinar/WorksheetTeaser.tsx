import React from "react";
import { FileText, Download, Sparkles, Eye } from "lucide-react";

export interface WorksheetTeaserProps {
  title?: string;
  subtitle?: string;
  worksheetTitle?: string;
  worksheetPages?: string;
  downloadUrl?: string;
  className?: string;
}

export default function WorksheetTeaser({
  title = "Cuaderno de Trabajo Práctico",
  subtitle = "Descarga o imprime esta guía de apuntes para seguir la transmisión en vivo y realizar los ejercicios.",
  worksheetTitle = "Guía Sagrada de Apuntes y Decretos para el Webinar",
  worksheetPages = "PDF Imprimible · 6 páginas",
  downloadUrl = "#",
  className = "",
}: WorksheetTeaserProps) {
  return (
    <div className={`w-full max-w-4xl mx-auto py-5 px-4 ${className}`}>
      <div className="rounded-2xl bg-surface-page border border-border-default/80 p-5 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3.5">
          <div className="w-12 h-12 rounded-xl bg-gold-500/10 border border-gold-400/20 text-gold-700 flex items-center justify-center shrink-0">
            <FileText className="w-6 h-6" aria-hidden="true" />
          </div>
          <div>
            <span className="text-[10px] font-sans uppercase tracking-wider font-semibold text-gold-700 block">
              Material de Apoyo
            </span>
            <h4 className="font-sans text-sm font-semibold text-plum-950">
              {worksheetTitle}
            </h4>
            <span className="text-[11px] font-body text-plum-500 block mt-0.5">
              {worksheetPages}
            </span>
          </div>
        </div>

        <div className="shrink-0">
          <a
            href={downloadUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border-2 border-plum-950 hover:bg-plum-950 hover:text-white text-plum-950 font-sans text-xs font-bold uppercase tracking-wider transition-colors"
          >
            <Download className="w-3.5 h-3.5" aria-hidden="true" />
            <span>Descargar Cuaderno</span>
          </a>
        </div>
      </div>
    </div>
  );
}
