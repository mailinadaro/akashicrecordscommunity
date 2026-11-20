import React from 'react';

export default function TravelFormat() {
  return (
    <section className="py-24 lg:py-32 px-6 lg:px-12 max-w-6xl mx-auto">
      <div className="text-center mb-16 lg:mb-20">
        <span className="w-1.5 h-1.5 bg-ochre-500 rotate-45 block mx-auto mb-4" aria-hidden="true" />
        <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-ochre-500 font-semibold block mb-3">
          07. Modalidad
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif italic font-light text-earth-950 tracking-tight mb-4">
          Una experiencia privada, a tu propio ritmo.
        </h2>
        <p className="text-sm sm:text-base text-earth-800 font-light max-w-xl mx-auto">
          Excursiones para un máximo de cuatro pasajeros.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
        <div className="border-t border-earth-900/15 pt-8">
          <span className="w-1.5 h-1.5 bg-ochre-500 rotate-45 block mb-4" aria-hidden="true" />
          <h3 className="text-xl font-serif italic font-light text-earth-950 mb-3">
            Un espacio exclusivo
          </h3>
          <p className="text-sm sm:text-base text-earth-800 font-light leading-relaxed">
            No compartís el vehículo con desconocidos. Pensado para disfrutar en pareja, familia o amigos.
          </p>
        </div>

        <div className="border-t border-earth-900/15 pt-8">
          <span className="w-1.5 h-1.5 bg-ochre-500 rotate-45 block mb-4" aria-hidden="true" />
          <h3 className="text-xl font-serif italic font-light text-earth-950 mb-3">
            Pausas conscientes
          </h3>
          <p className="text-sm sm:text-base text-earth-800 font-light leading-relaxed">
            Tiempo para contemplar el paisaje, tomar fotografías o conocer un lugar con calma según las condiciones de la ruta.
          </p>
        </div>

        <div className="border-t border-earth-900/15 pt-8">
          <span className="w-1.5 h-1.5 bg-ochre-500 rotate-45 block mb-4" aria-hidden="true" />
          <h3 className="text-xl font-serif italic font-light text-earth-950 mb-3">
            Comunicación directa
          </h3>
          <p className="text-sm sm:text-base text-earth-800 font-light leading-relaxed">
            Desde la consulta hasta la excursión, conversás directamente sobre lo que necesitás antes de salir.
          </p>
        </div>
      </div>
    </section>
  );
}