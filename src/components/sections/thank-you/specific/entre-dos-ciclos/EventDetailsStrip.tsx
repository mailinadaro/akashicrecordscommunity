import React from "react";
import { Calendar, Clock, Video } from "lucide-react";

export interface EventDetailsStripProps {
  dateLabel?: string;
  timeLabel?: string;
  formatLabel?: string;
  className?: string;
}

export default function EventDetailsStrip({
  dateLabel = "Sábado 12 de diciembre de 2026",
  timeLabel = "10:00 a 12:00 hs (México)",
  formatLabel = "Encuentro online por Zoom",
  className = "",
}: EventDetailsStripProps) {
  const items = [
    { icon: Calendar, label: dateLabel },
    { icon: Clock, label: timeLabel },
    { icon: Video, label: formatLabel },
  ];

  return (
    <div
      className={`flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 mt-4 mb-2 ${className}`}
    >
      {items.map(({ icon: Icon, label }) => (
        <span
          key={label}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-gold-400/35 bg-white/[0.06] text-gold-100 font-body text-xs sm:text-sm font-medium backdrop-blur-sm"
        >
          <Icon className="w-3.5 h-3.5 text-gold-300 shrink-0" aria-hidden="true" />
          <span>{label}</span>
        </span>
      ))}
    </div>
  );
}
