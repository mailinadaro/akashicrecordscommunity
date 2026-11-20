import React from 'react';

export default function HostRole() {
  return (
    <section className="py-24 lg:py-32 px-6 lg:px-12 max-w-6xl mx-auto">
      <div className="text-center mb-16 lg:mb-20">
        <span className="w-1.5 h-1.5 bg-ochre-500 rotate-45 block mx-auto mb-4" aria-hidden="true" />
        <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-ochre-500 font-semibold block mb-3">
          05. Hospitalidad
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif italic font-light text-earth-950 tracking-tight">
          Estar presente durante el recorrido.
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-0">
        <div className="md:pr-10">
          <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-ochre-500 font-semibold block mb-3">
            01 //
          </span>
          <h3 className="text-xl font-serif italic font-light text-earth-950 mb-3">
            Escucha activa
          </h3>
          <p className="text-sm sm:text-base text-earth-800 font-light leading-relaxed">
            Escuchar qué espera cada viajero, orientar cuando hace falta y prestar atención a los detalles del día.
          </p>
        </div>

        <div className="border-t border-earth-900/15 pt-8 md:pt-0 md:border-t-0 md:border-l md:px-10">
          <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-ochre-500 font-semibold block mb-3">
            02 //
          </span>
          <h3 className="text-xl font-serif italic font-light text-earth-950 mb-3">
            Ritmo propio
          </h3>
          <p className="text-sm sm:text-base text-earth-800 font-light leading-relaxed">
            Saber cuándo compartir una historia, cuándo dar espacio para recorrer por cuenta propia y cuándo hacer una pausa.
          </p>
        </div>

        <div className="border-t border-earth-900/15 pt-8 md:pt-0 md:border-t-0 md:border-l md:pl-10">
          <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-ochre-500 font-semibold block mb-3">
            03 //
          </span>
          <h3 className="text-xl font-serif italic font-light text-earth-950 mb-3">
            Cercanía
          </h3>
          <p className="text-sm sm:text-base text-earth-800 font-light leading-relaxed">
            Un trato humano y cercano, permitiendo que disfrutes de tu propia experiencia con absoluta tranquilidad.
          </p>
        </div>
      </div>
    </section>
  );
}