import React from 'react';

export default function Testimonials() {
  return (
    <section className="py-24 lg:py-32 px-6 bg-warm-100 border-y border-earth-900/10">
      <div className="max-w-4xl mx-auto text-center">
        <span className="w-1.5 h-1.5 bg-ochre-500 rotate-45 block mx-auto mb-4" aria-hidden="true" />
        <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-ochre-500 font-semibold block mb-3">
          08. Experiencias
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif italic font-light text-earth-950 mb-10 tracking-tight">
          Lo que dicen quienes ya viajaron
        </h2>
        
        {/* Bloque de Testimonio (Placeholder listo para conectar con datos reales) */}
        <span className="text-5xl sm:text-6xl font-serif text-ochre-500/40 select-none block leading-none mb-6" aria-hidden="true">
          &ldquo;
        </span>
        <blockquote className="text-xl sm:text-2xl md:text-3xl font-serif italic font-light text-earth-950 leading-relaxed max-w-3xl mx-auto mb-8">
          Recorrer Jujuy con Sergio cambió por completo nuestra perspectiva. La tranquilidad de no manejar y el valor de sus relatos hicieron que cada parada fuera única.
        </blockquote>
        
        <div className="flex items-center justify-center gap-4">
          <div className="w-8 h-px bg-earth-900/20" aria-hidden="true" />
          <cite className="text-[11px] md:text-xs font-mono uppercase tracking-[0.25em] not-italic text-earth-700 font-medium">
            — Carlos y Marta (Buenos Aires)
          </cite>
          <div className="w-8 h-px bg-earth-900/20" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}