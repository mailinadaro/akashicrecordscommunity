import React from "react";
import { Calendar, Check, ExternalLink } from "lucide-react";

export interface AddToCalendarWidgetProps {
  eventName?: string;
  eventDate?: string;
  eventTime?: string;
  googleCalendarUrl?: string;
  iCalUrl?: string;
  outlookUrl?: string;
  className?: string;
}

export default function AddToCalendarWidget({
  eventName = "Webinar Exclusivo: Iniciación a los Registros Akáshicos",
  eventDate = "Sábado 16 de enero de 2027",
  eventTime = "10:00 a 13:30 h (México)",
  googleCalendarUrl = "#",
  iCalUrl = "#",
  outlookUrl = "#",
  className = "",
}: AddToCalendarWidgetProps) {
  return (
    <div className={`w-full max-w-4xl mx-auto py-5 px-4 ${className}`}>
      <div className="rounded-2xl bg-surface-secondary/60 border border-border-default/80 p-5 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3.5 text-center sm:text-left">
          <div className="w-10 h-10 rounded-xl bg-gold-500/15 text-gold-700 flex items-center justify-center shrink-0">
            <Calendar className="w-5 h-5" aria-hidden="true" />
          </div>
          <div>
            <h4 className="font-sans text-sm font-semibold text-plum-950">
              Añade la transmisión a tu calendario
            </h4>
            <p className="font-body text-xs text-plum-600 font-light mt-0.5">
              {eventDate} · {eventTime}
            </p>
          </div>
        </div>

        {/* Botones de calendario */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          <a
            href={googleCalendarUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-surface-page border border-border-default hover:border-gold-400 text-plum-900 font-sans text-xs font-medium transition-colors shadow-2xs"
          >
            <span>Google Calendar</span>
            <ExternalLink className="w-3 h-3 text-gold-700" />
          </a>
          <a
            href={iCalUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-surface-page border border-border-default hover:border-gold-400 text-plum-900 font-sans text-xs font-medium transition-colors shadow-2xs"
          >
            <span>Apple / iCal</span>
            <ExternalLink className="w-3 h-3 text-gold-700" />
          </a>
          <a
            href={outlookUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-surface-page border border-border-default hover:border-gold-400 text-plum-900 font-sans text-xs font-medium transition-colors shadow-2xs"
          >
            <span>Outlook</span>
            <ExternalLink className="w-3 h-3 text-gold-700" />
          </a>
        </div>
      </div>
    </div>
  );
}
