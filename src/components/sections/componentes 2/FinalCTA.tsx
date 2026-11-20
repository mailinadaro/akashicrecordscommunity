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
  title = "El camino de regreso a tu alma comienza aquí",
  subtitle = "Si sientes el llamado, no lo dudes. Cuando atiendes a tu voz interior y a tu ser, las respuestas son siempre luminosas.",
  tagline = "Iniciación Akáshica",
  buttonLabel = "Inscribirme a la Iniciación",
  buttonHref = "https://wa.me/525559465126",
  secondaryButtonLabel,
  secondaryButtonHref,
  bgImage,
  className = "",
}: FinalCTAProps) {
  const BackgroundImage = bgImage ? (
    <Image
      src={bgImage}
      alt={title}
      fill
      sizes="100vw"
      className="object-cover object-center"
      priority={false}
    />
  ) : (
    <div className="absolute inset-0 bg-radial-[at_50%_50%] from-plum-600/130 via-plum-950 to-plum-950" />
  );

  return (
    <CTARevealWrapper bgImageNode={BackgroundImage} className={className}>
      {tagline && (
        <span
          data-cta-reveal
          className="text-[11px] font-sans uppercase tracking-[0.35em] text-gold-400 mb-4 block select-none font-semibold drop-shadow-sm"
        >
          {tagline}
        </span>
      )}

      <h2
        data-cta-reveal
        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display italic tracking-tight text-gold-200 leading-tight drop-shadow-md max-w-3xl"
      >
        {title}
      </h2>

      {subtitle && (
        <p
          data-cta-reveal
          className="mt-5 max-w-xl text-sm sm:text-base md:text-lg text-gold-200/80 font-body font-light leading-relaxed"
        >
          {subtitle}
        </p>
      )}

      <div data-cta-reveal className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
        {buttonLabel && buttonHref && (
          <Link href={buttonHref} target="_blank" rel="noopener noreferrer" tabIndex={-1} className="w-full sm:w-auto">
            <Button
              variant="glass"
              size="default"
              className="group/cta w-full sm:w-auto px-8 py-3.5 h-auto text-xs font-sans font-medium tracking-widest uppercase bg-gold-500 text-plum-950 hover:bg-gold-400 transition-all duration-300 shadow-xl gap-2 rounded-none cursor-pointer"
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
          <Link href={secondaryButtonHref} target="_blank" rel="noopener noreferrer" tabIndex={-1} className="w-full sm:w-auto">
            <Button
              variant="outline"
              size="default"
              className="w-full sm:w-auto px-8 py-3.5 h-auto text-xs font-sans font-medium tracking-widest uppercase border border-gold-400/40 text-gold-200 hover:border-gold-300 transition-all duration-300 rounded-none bg-transparent cursor-pointer"
            >
              <span>{secondaryButtonLabel}</span>
            </Button>
          </Link>
        )}
      </div>
    </CTARevealWrapper>
  );
}
