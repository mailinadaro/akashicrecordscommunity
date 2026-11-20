import Image, { StaticImageData } from 'next/image';
import HeroRevealWrapper from '@/components/animations/HeroRevealWrapper';

export interface HeroFullWindowProps {
  title?: string;
  subtitle?: string;
  priceTag?: string;
  backgroundImage?: string | StaticImageData;
  ctaLabel?: string;
  ctaLink?: string;
  priority?: boolean;
}

export default function HeroFullWindow({
  title = "Iniciación Akáshica",
  subtitle = "El Camino de Regreso a tu Alma",
  priceTag = "Experiencia Guiada · Enero 2027",
  backgroundImage,
  priority = true,
}: HeroFullWindowProps) {

  const BackgroundNode = (
    <>
      {backgroundImage ? (
        <Image
          src={backgroundImage}
          alt={title}
          fill
          sizes="100vw"
          priority={priority}
          className="object-cover object-center"
        />
      ) : (
        <div className="absolute inset-0 bg-radial-[at_50%_40%] from-plum-600/40 via-plum-950 to-plum-950" />
      )}
      <div className="absolute inset-0 bg-linear-to-t from-plum-950/80 via-plum-950/20 to-transparent" />
    </>
  );

  const ContentNode = (
    <div className="flex flex-col items-center justify-center text-center gap-4">
      {priceTag && (
        <span className="hero-content-item text-sm font-bold tracking-[0.3em] uppercase opacity-90 border-b border-warm-50/30 w-fit pb-1 text-gold-300">
          {priceTag}
        </span>
      )}
      
      <h1 className="hero-content-item text-5xl md:text-7xl lg:text-7xl font-display italic text-text-on-action leading-[0.9] tracking-tighter">
        {title}
      </h1>

      {subtitle && (
        <p className="hero-content-item text-lg md:text-xl font-light tracking-wide max-w-2xl opacity-70 italic mt-2 text-gold-200">
          {subtitle}
        </p>
      )}
    </div>
  );

  return (
    <HeroRevealWrapper 
      backgroundNode={BackgroundNode} 
      contentNode={ContentNode} 
    />
  );
}
