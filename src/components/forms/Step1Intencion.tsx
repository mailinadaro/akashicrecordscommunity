'use client';

import { useFormContext } from 'react-hook-form';
import { ArrowRight } from 'lucide-react';
import { ContactFormData } from '@/lib/schemas/contact';

interface Step1IntencionProps {
  onNext: () => void;
}

export default function Step1Intencion({ onNext }: Step1IntencionProps) {
  const { watch, setValue } = useFormContext<ContactFormData>();
  const intencionActual = watch('intencion');

  const opciones: {
    id: ContactFormData['intencion'];
    label: string;
    desc: string;
  }[] = [
    {
      id: 'excursion-privada',
      label: 'Una excursión privada',
      desc: 'Salidas exclusivas de un día completo o medio día con guía dedicado y vehículo privado.',
    },
    {
      id: 'viaje-a-medida',
      label: 'Un viaje a medida',
      desc: 'Itinerario integral de varios días diseñado desde cero según tus intereses y ritmo.',
    },
    {
      id: 'explorando-opciones',
      label: 'Todavía estoy explorando opciones',
      desc: 'Orientación inicial para definir qué zonas y paisajes de Jujuy conocer.',
    },
  ];

  return (
    <div className="space-y-10">
      {/* CABECERA DEL PASO */}
      <div data-step-header className="space-y-3">
        <h3 className="text-3xl sm:text-4xl font-serif italic text-warm-50 font-normal tracking-wide leading-tight">
          ¿Qué estás buscando?
        </h3>
        <p className="text-sm sm:text-base text-warm-50/70 font-light leading-relaxed max-w-lg">
          Selecciona la modalidad de viaje que mejor se ajuste a tus expectativas.
        </p>
      </div>

      {/* SELECTORES EDITORIALES GLASS CON LÍNEAS DE SUBRAYADO */}
      <div className="grid grid-cols-1 gap-4">
        {opciones.map(({ id, label, desc }) => {
          const isSelected = intencionActual === id;
          return (
            <button
              key={id}
              data-step-item
              type="button"
              onClick={() => setValue('intencion', id)}
              className={`group w-full min-h-23 p-6 text-left transition-all duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] cursor-pointer flex flex-col justify-center rounded-none relative border-b ${
                isSelected
                  ? 'border-b-ochre-400 bg-ochre-500/10 text-warm-50 shadow-lg'
                  : 'border-b-white/15 bg-white/2 text-warm-50 hover:bg-white/06 hover:border-b-ochre-400/50'
              }`}
            >
              {/* Indicador de acento vertical al seleccionarse */}
              {isSelected && (
                <div
                  className="absolute top-0 left-0 bottom-0 w-1"
                  aria-hidden="true"
                />
              )}

              <span className="text-lg md:text-xl font-serif tracking-wide text-warm-50 mb-1.5 font-normal">
                {label}
              </span>
              <span className="text-xs md:text-sm font-light text-warm-50/65 leading-relaxed font-sans">
                {desc}
              </span>
            </button>
          );
        })}
      </div>

      {/* BOTÓN SIGUIENTE */}
      <div data-step-footer className="flex justify-end pt-4">
        <button
          type="button"
          onClick={onNext}
          className="bg-ochre-500 hover:bg-warm-50 text-earth-950 transition-all duration-300 py-4 px-8 text-xs font-semibold tracking-[0.25em] uppercase text-center flex items-center justify-center gap-3 shadow-xl rounded-none cursor-pointer active:scale-[0.99]"
        >
          <span>Siguiente</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
