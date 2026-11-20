import React from "react";
import Image from "next/image";
import Link from "next/link";
import CTARevealWrapper from "@/components/animations/CTARevealWrapper";
import { Button } from "@/components/ui/atoms/button";

export interface FinalCTAProps {
  title?: string;
  description?: string;
  subtitle?: string;
  tagline?: string;
  buttonLabel?: string;
  buttonHref?: string;
  secondaryButtonLabel?: string;
  secondaryButtonHref?: string;
  bgImage?: string;
  className?: string;
}

export default function FinalCTA({
  title = "Comienza a Planear Tu Viaje",
  subtitle = "Te ayudamos a diseñar una travesía privada a la medida de tu ritmo y curiosidad por el norte argentino.",
  tagline = "Expediciones Privadas",
  buttonLabel = "Consulta Ahora",
  buttonHref = "/contacto",
  secondaryButtonLabel,
  secondaryButtonHref,
  bgImage = "/excursiones/salinas/salinas-hero.avif",
  className = "",
}: FinalCTAProps) {
  const BackgroundImage = (
    <Image
      src={bgImage}
      alt={title}
      fill
      sizes="100vw"
      className="object-cover object-center"
      priority={false}
    />
  );

  return (
    <CTARevealWrapper bgImageNode={BackgroundImage} className={className}>
      {tagline && (
        <span
          data-cta-reveal
          className="text-[11px] font-mono uppercase tracking-[0.35em] text-ochre-500 mb-4 block select-none font-semibold drop-shadow-sm"
        >
          {tagline}
        </span>
      )}

      <h2
        data-cta-reveal
        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif uppercase tracking-widest text-warm-50 leading-tight drop-shadow-md max-w-3xl"
      >
        {title}
      </h2>

      {subtitle && (
        <p
          data-cta-reveal
          className="mt-5 max-w-xl text-sm sm:text-base md:text-lg text-warm-50/80 font-light leading-relaxed"
        >
          {subtitle}
        </p>
      )}

      <div data-cta-reveal className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
        {buttonLabel && buttonHref && (
          <Link href={buttonHref} tabIndex={-1} className="w-full sm:w-auto">
            <Button
              variant="glass"
              size="default"
              className="group/cta w-full sm:w-auto px-8 py-3.5 h-auto text-xs font-medium tracking-widest uppercase hover:bg-warm-50 hover:text-earth-900 transition-all duration-300 shadow-xl gap-2 rounded-none"
            >
              <span>{buttonLabel}</span>
              <span
                className="transform transition-transform duration-300 group-hover/cta:translate-x-1"
                aria-hidden="true"
              >
                →
              </span>
            </Button>
          </Link>
        )}

        {secondaryButtonLabel && secondaryButtonHref && (
          <Link href={secondaryButtonHref} tabIndex={-1} className="w-full sm:w-auto">
            <Button
              variant="outline"
              size="default"
              className="w-full sm:w-auto px-8 py-3.5 h-auto text-xs font-medium tracking-widest uppercase border border-white/20 text-warm-50 hover:border-ochre-400 hover:text-warm-50 transition-all duration-300 rounded-none bg-transparent"
            >
              <span>{secondaryButtonLabel}</span>
            </Button>
          </Link>
        )}
      </div>
    </CTARevealWrapper>
  );
}