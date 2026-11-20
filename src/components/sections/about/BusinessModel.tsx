import React from 'react';

export default function BusinessModel() {
  return (
    <section className="py-28 lg:py-36 px-6 max-w-4xl mx-auto text-center">
      <span className="w-1.5 h-1.5 bg-ochre-500 rotate-45 block mx-auto mb-4" aria-hidden="true" />
      <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-ochre-500 font-semibold block mb-3">
        09. Convicción
      </span>
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif italic font-light text-earth-950 mb-10 tracking-tight">
        Menos pasajeros. Más atención a cada recorrido.
      </h2>
      <div className="space-y-6 text-earth-800 font-light text-base md:text-lg leading-relaxed text-left md:text-center max-w-2xl mx-auto">
        <p>
          Elegimos trabajar con grupos pequeños porque es la forma de viajar que queremos ofrecer y el tipo de atención que podemos sostener personalmente. Limitar cada excursión a cuatro pasajeros permite mantener comunicación directa y cuidar cada detalle del recorrido.
        </p>
        <p>
          No se trata de hacer las cosas de manera compleja, sino de priorizar el tiempo, el cuidado y la posibilidad de conocer Jujuy con verdadera atención.
        </p>
      </div>
    </section>
  );
}