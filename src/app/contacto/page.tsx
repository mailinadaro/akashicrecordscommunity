import Image from 'next/image';
import ContactForm from '@/components/forms/ContactForm';

export default function ContactoPage() {
  return (
    <div className="relative w-full min-h-screen bg-earth-950 text-warm-50 overflow-hidden">
      {/* 1. IMAGEN CINEMATOGRÁFICA DE FONDO (Alineada con Excursiones y White Desert) */}
      <div className="fixed inset-0 w-full h-full z-0 pointer-events-none select-none">
        <Image
          src="/generales/salta-and-jujuy-beauties-1-1200x700.webp"
          alt="Paisaje de las montañas de Jujuy"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Veladura de degradado editorial para máxima legibilidad y misterio */}
        <div className="absolute inset-0 bg-linear-to-b from-earth-950/85 via-earth-950/75 to-earth-950" />
      </div>

      {/* 2. FLUJO PRINCIPAL */}
      <div className="relative z-10 w-full flex flex-col items-center pt-36 pb-28 px-4 sm:px-6">
        
        {/* CABECERA EDITORIAL (Tipografía e identidad de Jujuy Adentro) */}
        <div className="w-full max-w-240 flex flex-col items-center text-center mb-10">
          <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.3em] font-semibold mb-3 block">
            DISEÑA TU EXPEDICIÓN 
          </span>
          <h1 className="font-serif italic text-4xl sm:text-5xl md:text-6xl text-warm-50 font-normal leading-tight tracking-tight mb-4">
            Comienza a planificar tu viaje
          </h1>
          <p className="font-sans text-sm sm:text-base text-warm-50/75 max-w-xl font-light leading-relaxed">
            Por favor, compartenos tus detalles de viaje y preferencias para que podamos ofrecerte una propuesta personalizada. 
          </p>
        </div>

        {/* CONTENEDOR DEL FORMULARIO HUD */}
        <div className="w-full max-w-240">
          <ContactForm />
        </div>

      </div>
    </div>
  );
}