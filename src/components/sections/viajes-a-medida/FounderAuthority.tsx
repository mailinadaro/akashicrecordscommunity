import React from 'react';
import Image from 'next/image';
import  SplitSection  from '@/components/sections/globales/SplitContentSection';

export const FounderAuthority = () => {
  const left = (
    <div>
      <span className="text-xs uppercase tracking-widest text-neutral-500 block mb-3">08. Anfitrión</span>
      <h2 className="text-3xl font-light mb-6 text-neutral-900">Experiencia local y conocimiento de territorio.</h2>
      <p className="text-neutral-700 font-light leading-relaxed">
        Sergio está vinculado a Jujuy desde hace más de cuatro décadas. Su recorrido personal y su formación como trabajador social aportan una mirada atenta a las personas, las historias y el contexto cultural de la región, ofreciendo un acompañamiento sereno y respetuoso de los tiempos de cada viajero.
      </p>
    </div>
  );

  const right = (
    <div className="relative h-95 w-full rounded-sm overflow-hidden shadow-sm">
      <Image 
        src="/images/sergio-territorio.jpg" 
        alt="Sergio en el territorio de Jujuy" 
        fill 
        className="object-cover"
      />
    </div>
  );

  return <SplitSection imagePosition="right"
  heading="Experiencia local y conocimiento de territorio."
  description="Sergio está vinculado a Jujuy desde hace más de cuatro décadas. Su recorrido personal y su formación como trabajador social aportan una mirada atenta a las personas, las historias y el contexto cultural de la región, ofreciendo un acompañamiento sereno y respetuoso de los tiempos de cada viajero."
   />;
};