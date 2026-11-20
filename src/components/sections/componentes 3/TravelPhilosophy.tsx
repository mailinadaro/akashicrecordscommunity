import React from 'react';

export default function TravelPhilosophy() {
  return (
    <section className="py-28 lg:py-36 px-6 lg:px-12 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
        <div className="lg:col-span-7">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-5 h-px bg-ochre-500 inline-block" aria-hidden="true" />
            <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-ochre-500 font-semibold">
              04. Filosofía
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif italic font-light text-earth-950 mb-8 leading-tight tracking-tight">
            Dejar espacio para mirar.
          </h2>

          <div className="space-y-6 text-earth-800 text-base md:text-lg font-light leading-relaxed">
            <p>
              Viajar no tiene por qué ser una sucesión de lugares visitados y fotografías tomadas. También puede ser el tiempo que nos damos para observar cómo cambia la montaña, recorrer las calles de un pueblo o detenernos ante un paisaje que nos sorprende.
            </p>
            <p>
              Por eso, los recorridos buscan combinar los lugares que vale la pena visitar con tiempo para contemplar el entorno y disfrutar de cada tramo, sin convertir el día en una carrera contra el reloj.
            </p>
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="relative bg-white/70 backdrop-blur-xs border border-earth-900/15 p-8 sm:p-10 shadow-lg rounded-none">
            <div className="absolute top-0 left-0 w-20 h-0.5 bg-ochre-500" aria-hidden="true" />
            
            <h3 className="font-serif italic text-xl md:text-2xl font-light text-earth-950 mb-4">
              El tiempo como prioridad
            </h3>
            <p className="text-earth-800 text-sm md:text-base font-light leading-relaxed">
              El camino no es un intervalo entre dos destinos; es una parte fundamental de lo que venimos a conocer. Disfrutarlo requiere pausa, atención y flexibilidad.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}