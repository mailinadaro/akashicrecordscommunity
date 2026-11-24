
import Image from "next/image";
import Link from "next/link";
import CTARevealWrapper from "@/components/animations/CTARevealWrapper";
import { Button } from "@/components/ui/atoms/button";
import { siteConfig } from "@/config/site.config";

export interface FinalCTAProps {
  title?: string;
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
  tagline = "Iniciación Akáshica · Enero 2027",
  buttonLabel = "Inscribirme a la Iniciación",
  buttonHref = siteConfig.bookingUrl,
  secondaryButtonLabel = "Consultar por WhatsApp",
  secondaryButtonHref = siteConfig.contact.whatsapp,
  bgImage = "/comunidad/0H6A9602.jpg",
  className = "",
}: FinalCTAProps) {
  const BackgroundNode = bgImage ? (
    <Image
      src={bgImage}
      alt={title}
      fill
      sizes="100vw"
      className="object-cover object-center"
      priority={false}
    />
  ) : (
    <div className="absolute inset-0 bg-radial-[at_50%_50%] from-plum-600/30 via-plum-950 to-plum-950" />
  );

  return (
    <CTARevealWrapper bgImageNode={BackgroundNode} className={className}>
      {tagline && (
        <span
          data-cta-reveal
          className="text-[11px] font-sans uppercase tracking-[0.28em] text-gold-300 mb-6 inline-block font-semibold bg-plum-950/70 px-5 py-2 border border-gold-400/40 rounded-full backdrop-blur-xs shadow-md select-none"
        >
          {tagline}
        </span>
      )}
      <h2
        data-cta-reveal
        className="text-3xl sm:text-5xl md:text-6xl font-display italic tracking-tight text-gold-200 leading-[1.15] drop-shadow-md max-w-3xl"
      >
        {title}
      </h2>

      {subtitle && (
        <p
          data-cta-reveal
          className="mt-6 max-w-2xl text-base sm:text-lg text-gold-200/80 font-body font-light leading-relaxed drop-shadow-sm"
        >
          {subtitle}
        </p>
      )}

      <div data-cta-reveal className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-5 w-full sm:w-auto">
        {buttonLabel && buttonHref && (
          <Link
            href={buttonHref}
            target="_blank"
            rel="noopener noreferrer"
            tabIndex={-1}
            className="w-full sm:w-auto"
          >
            <Button
              variant="gold"
              size="lg"
              className="w-full sm:w-auto cursor-pointer hover:scale-102 gap-2"
            >
              <span>{buttonLabel}</span>
              <span aria-hidden="true">→</span>
            </Button>
          </Link>
        )}

        {secondaryButtonLabel && secondaryButtonHref && (
          <Link
            href={secondaryButtonHref}
            target="_blank"
            rel="noopener noreferrer"
            tabIndex={-1}
            className="w-full sm:w-auto"
          >
            <Button
              variant="outline-gold"
              size="lg"
              className="w-full sm:w-auto cursor-pointer hover:scale-102"
            >
              <span>{secondaryButtonLabel}</span>
            </Button>
          </Link>
        )}
      </div>
    </CTARevealWrapper>
  );
}
