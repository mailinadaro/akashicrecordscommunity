import Image, { StaticImageData } from 'next/image';

interface ImageFeatureParallaxProps {
  id?: string;
  image: string | StaticImageData;
  alt: string;
  insetEffect?: boolean;
}

export default function ImageFeatureParallax({ 
  id, 
  image, 
  alt,
}: ImageFeatureParallaxProps) {
  
  const displayTitle = id ? id.replace('-', ' ') : '';

  // VALIDACIÓN DE SEGURIDAD: Si la imagen no existe, está vacía o es un string inválido de una sola letra (como "e")
  const isValidSrc = 
    typeof image === 'object' || 
    (typeof image === 'string' && image.trim().length > 1 && image.startsWith('/'));

  if (!isValidSrc) {
    console.error(`[ImageFeatureParallax] Error crítico en sección "${id}": Se recibió un src de imagen inválido:`, image);
    return null; // Evita que Next.js crashee la ejecución
  }

  return (
    <section
      id={id}
      className="relative flex h-screen w-full items-center justify-center overflow-hidden bg-earth-950"
    >
      <div className="parallax-frame relative h-full w-full overflow-hidden transition-all duration-300">
        <Image
          src={image}
          alt={alt}
          fill
          className="parallax-img scale-125 object-cover"
          sizes="100vw"
          priority={id === 'hero'}
        />

        <div className="absolute inset-0 z-10 bg-black/20" />
      </div>

      {id && (
        <div className="pointer-events-none absolute inset-0 z-20 flex items-center justify-center">
          <h3 className="parallax-title translate-y-20 text-5xl font-serif uppercase tracking-tighter text-white opacity-0 md:text-8xl lg:text-9xl">
            {displayTitle}
          </h3>
        </div>
      )}
    </section>
  );
}