import Image, { StaticImageData } from 'next/image';
import HeroRevealWrapper from '@/components/animations/HeroRevealWrapper';

interface HeroFullWindowProps {
  title: string;
  subtitle?: string;
  priceTag?: string;
  backgroundImage: string | StaticImageData;
  ctaLabel?: string;
  ctaLink?: string;
  priority?: boolean;
}

export default function HeroFullWindow({
  title,
  subtitle,
  priceTag,
  backgroundImage,
  priority = true,
}: HeroFullWindowProps) {

  const BackgroundNode = (
    <>
      <Image
        src={backgroundImage}
        alt={title}
        fill
        sizes="100vw"
        priority={priority}
        className="object-cover object-center"
      />
      {/* Corregido: bg-linear-to-t (de abajo hacia arriba) */}
      <div className="absolute inset-0 bg-linear-to-t from-earth-900/60 via-earth-900/10 to-transparent" />
    </>
  );

  const ContentNode = (
    <div className="flex flex-col items-center justify-center text-center gap-4">
      {priceTag && (
        <span className="hero-content-item text-sm font-bold tracking-[0.3em] uppercase opacity-90 border-b border-warm-50/30 w-fit pb-1">
          {priceTag}
        </span>
      )}
      
      <h1 className="hero-content-item text-5xl md:text-7xl lg:text-7xl font-serif italic text-text-on-action leading-[0.9] tracking-tighter">
        {title}
      </h1>

      {subtitle && (
        <p className="hero-content-item text-lg md:text-xl font-light tracking-wide max-w-2xl opacity-70 italic mt-2">
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