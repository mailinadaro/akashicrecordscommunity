import React from "react";
import { Calendar, Download, ExternalLink } from "lucide-react";

export interface AddToCalendarWidgetProps {
  badge?: string;
  title?: string;
  description?: string;
  eventName?: string;
  eventDate?: string;
  eventTime?: string;
  googleCalendarUrl?: string;
  iCalUrl?: string;
  outlookUrl?: string;
  downloadFilename?: string;
  theme?: "light" | "dark";
  className?: string;
}

export default function AddToCalendarWidget({
  badge,
  title = "Añade la transmisión a tu calendario",
  description,
  eventName = "Webinar Exclusivo: Iniciación a los Registros Akáshicos",
  eventDate = "Sábado 16 de enero de 2027",
  eventTime = "10:00 a 13:30 h (México)",
  googleCalendarUrl = "#",
  iCalUrl = "#",
  outlookUrl = "#",
  downloadFilename = "evento.ics",
  theme = "light",
  className = "",
}: AddToCalendarWidgetProps) {
  const isDark = theme === "dark";
  const isIcsDataUri = iCalUrl.startsWith("data:text/calendar");

  return (
    <div className={`w-full max-w-4xl mx-auto py-5 px-4 ${className}`}>
      <div
        className={`rounded-2xl border p-5 sm:p-6 flex flex-col md:flex-row items-center justify-between gap-4 ${
          isDark
            ? "bg-white/[0.04] border-gold-400/25 backdrop-blur-md"
            : "bg-surface-secondary/60 border-border-default/80"
        }`}
      >
        <div className="flex items-start sm:items-center gap-3.5 text-center sm:text-left flex-col sm:flex-row">
          <div
            className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 mx-auto sm:mx-0 ${
              isDark
                ? "bg-gold-500/20 border border-gold-400/35 text-gold-300"
                : "bg-gold-500/15 text-gold-700"
            }`}
          >
            <Calendar className="w-5 h-5" aria-hidden="true" />
          </div>
          <div>
            {badge && (
              <span
                className={`inline-block text-[10px] sm:text-[11px] font-sans uppercase tracking-[0.18em] font-semibold mb-1 ${
                  isDark ? "text-gold-300" : "text-gold-700"
                }`}
              >
                {badge}
              </span>
            )}
            <h4
              className={`font-sans text-sm sm:text-base font-semibold ${
                isDark ? "text-white" : "text-plum-950"
              }`}
            >
              {title}
            </h4>
            {description && (
              <p
                className={`font-body text-xs sm:text-sm font-light mt-0.5 ${
                  isDark ? "text-white/80" : "text-plum-600"
                }`}
              >
                {description}
              </p>
            )}
            <p
              className={`font-body text-xs font-medium mt-1 ${
                isDark ? "text-gold-200" : "text-plum-600 font-light"
              }`}
            >
              {eventDate} · {eventTime}
            </p>
          </div>
        </div>

        {/* Botones de calendario */}
        <div className="flex flex-wrap items-center justify-center gap-2 shrink-0">
          <a
            href={googleCalendarUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Agregar ${eventName} a Google Calendar`}
            className={`inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl font-sans text-xs font-semibold transition-all whitespace-nowrap ${
              isDark
                ? "bg-gradient-to-r from-gold-500/25 to-gold-400/20 border border-gold-400/50 hover:border-gold-300 hover:bg-gold-500/35 text-gold-100 shadow-sm"
                : "bg-surface-page border border-border-default hover:border-gold-400 text-plum-900 shadow-2xs"
            }`}
          >
            <span>Google Calendar</span>
            <ExternalLink className={`w-3.5 h-3.5 ${isDark ? "text-gold-300" : "text-gold-700"}`} />
          </a>
          <a
            href={iCalUrl}
            {...(isIcsDataUri
              ? { download: downloadFilename }
              : { target: "_blank", rel: "noopener noreferrer" })}
            aria-label={`Agregar ${eventName} a Apple / iCal`}
            className={`inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl font-sans text-xs font-medium transition-all whitespace-nowrap ${
              isDark
                ? "bg-plum-950/75 border border-gold-400/30 hover:border-gold-300/70 text-gold-200 hover:text-white"
                : "bg-surface-page border border-border-default hover:border-gold-400 text-plum-900 shadow-2xs"
            }`}
          >
            <span>Apple / iCal</span>
            {isIcsDataUri ? (
              <Download className={`w-3.5 h-3.5 ${isDark ? "text-gold-300" : "text-gold-700"}`} />
            ) : (
              <ExternalLink className={`w-3 h-3 ${isDark ? "text-gold-300" : "text-gold-700"}`} />
            )}
          </a>
          <a
            href={outlookUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Agregar ${eventName} a Outlook`}
            className={`inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl font-sans text-xs font-medium transition-all whitespace-nowrap ${
              isDark
                ? "bg-plum-950/75 border border-gold-400/30 hover:border-gold-300/70 text-gold-200 hover:text-white"
                : "bg-surface-page border border-border-default hover:border-gold-400 text-plum-900 shadow-2xs"
            }`}
          >
            <span>Outlook</span>
            <ExternalLink className={`w-3 h-3 ${isDark ? "text-gold-300" : "text-gold-700"}`} />
          </a>
        </div>
      </div>
    </div>
  );
}
