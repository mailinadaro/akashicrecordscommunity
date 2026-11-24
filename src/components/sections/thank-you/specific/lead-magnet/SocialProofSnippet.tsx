import React from "react";
import { Star, Quote } from "lucide-react";

export interface SocialProofSnippetProps {
  title?: string;
  testimonials?: Array<{
    author: string;
    quote: string;
    role?: string;
  }>;
  className?: string;
}

const DEFAULT_SNIPPETS = [
  {
    author: "Coco Siles",
    quote: "Gracias a este hermoso proceso pude materializar la sabiduría que se encuentra en lo más profundo de mi ser.",
    role: "Iniciada en 2026",
  },
  {
    author: "Rubén",
    quote: "Solía ser muy escéptico y pensar en conectarme con cosas que para mí eran difíciles de creer. Hoy tengo método y claridad.",
    role: "Iniciado en 2026",
  },
];

export default function SocialProofSnippet({
  title = "Lo que comparten quienes ya transitaron el método",
  testimonials = DEFAULT_SNIPPETS,
  className = "",
}: SocialProofSnippetProps) {
  return (
    <div className={`w-full max-w-4xl mx-auto py-6 px-4 ${className}`}>
      <div className="text-center mb-6">
        <h4 className="font-sans text-xs uppercase tracking-widest font-semibold text-gold-700">
          {title}
        </h4>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {testimonials.map((t, idx) => (
          <div
            key={idx}
            className="rounded-2xl bg-surface-page border border-border-default/70 p-5 shadow-2xs flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-1 text-gold-500 mb-2.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-gold-500" />
                ))}
              </div>
              <p className="font-body text-xs text-plum-700 font-light italic leading-relaxed mb-3">
                "{t.quote}"
              </p>
            </div>
            <div className="pt-2 border-t border-border-default/50 text-[11px] font-sans">
              <span className="font-semibold text-plum-950">{t.author}</span>
              {t.role && <span className="text-plum-500 ml-1.5">· {t.role}</span>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
