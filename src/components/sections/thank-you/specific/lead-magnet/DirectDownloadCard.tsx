import React from "react";
import { Download, FileText, CheckCircle2, ArrowRight } from "lucide-react";

export interface DirectDownloadCardProps {
  badge?: string;
  title?: string;
  description?: string;
  fileName?: string;
  fileDetails?: string;
  downloadUrl?: string;
  className?: string;
}

export default function DirectDownloadCard({
  badge = "Descarga Lista",
  title = "Tu Guía Akáshica está lista para abrir",
  description = "También enviamos una copia de respaldo a tu correo electrónico. Puedes descargar el documento directamente aquí abajo.",
  fileName = "Guia_Esencial_Registros_Akashicos.pdf",
  fileDetails = "Formato PDF · 18 páginas · Edición Especial 2027",
  downloadUrl = "#",
  className = "",
}: DirectDownloadCardProps) {
  return (
    <div className={`w-full max-w-4xl mx-auto py-6 px-4 ${className}`}>
      <div className="rounded-3xl bg-gradient-to-b from-surface-page to-surface-secondary/40 border border-border-default/90 p-6 sm:p-8 shadow-sm">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-start gap-4 text-center sm:text-left">
            <div className="w-14 h-14 rounded-2xl bg-gold-500/15 border border-gold-400/30 text-gold-700 flex items-center justify-center shrink-0 mx-auto sm:mx-0">
              <FileText className="w-7 h-7" aria-hidden="true" />
            </div>

            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-gold-500/10 text-gold-800 text-[10px] font-sans uppercase tracking-wider font-semibold mb-1.5">
                <CheckCircle2 className="w-3 h-3 text-gold-600" />
                <span>{badge}</span>
              </div>
              <h3 className="font-display text-2xl text-plum-950 font-normal">
                {title}
              </h3>
              <p className="font-body text-xs sm:text-sm text-plum-600 font-light mt-1 max-w-md">
                {description}
              </p>
              <div className="mt-2 text-[11px] font-sans text-plum-500">
                <span className="font-medium text-plum-900">{fileName}</span> · {fileDetails}
              </div>
            </div>
          </div>

          <div className="shrink-0 w-full sm:w-auto">
            <a
              href={downloadUrl}
              download
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gold-500 hover:bg-gold-400 text-plum-950 font-sans text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-md shadow-gold-500/20 cursor-pointer"
            >
              <Download className="w-4 h-4 stroke-[2.5]" aria-hidden="true" />
              <span>DESCARGAR AHORA</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
