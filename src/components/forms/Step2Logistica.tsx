'use client';

import { useFormContext } from 'react-hook-form';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { ContactFormData } from '@/lib/schemas/contact';

interface Step2LogisticaProps {
  onNext: () => void;
  onBack: () => void;
}

export default function Step2Logistica({ onNext, onBack }: Step2LogisticaProps) {
  const {
    register,
    watch,
    setValue,
    formState: { errors },
  } = useFormContext<ContactFormData>();

  const viajerosActual = watch('cantidadViajeros');

  return (
    <div className="space-y-10">
      {/* CABECERA DEL PASO */}
      <div data-step-header className="space-y-3">
        <h3 className="text-3xl sm:text-4xl font-serif italic text-warm-50 font-normal tracking-wide leading-tight">
          Logística del Viaje
        </h3>
        <p className="text-sm sm:text-base text-warm-50/70 font-light leading-relaxed max-w-lg">
          Cuéntanos cuándo planeas estar en Jujuy y cuántas personas integran tu grupo.
        </p>
      </div>

      {/* CAMPO DE FECHAS ESTIMADAS: SUBRAYADO EDITORIAL FINO */}
      <div data-step-item className="space-y-2">
        <div className="relative pt-2 pb-3 border-b border-white/20 focus-within:border-b-ochre-400 transition-colors duration-300">
          <label className="font-mono text-[10px] uppercase tracking-[0.25em] text-ochre-400/80 mb-2 block select-none">
            Fechas o época estimada *
          </label>
          <input
            type="text"
            placeholder="Ej.: del 7 al 10 de octubre, o primera quincena de noviembre"
            {...register('fechaViaje')}
            className="w-full bg-transparent text-warm-50 placeholder:text-warm-50/25 text-base sm:text-lg font-light focus:outline-none py-1"
          />
        </div>
        {errors.fechaViaje && (
          <span className="text-xs text-state-error font-mono">{errors.fechaViaje.message}</span>
        )}
      </div>

      {/* SELECTOR DE CANTIDAD DE VIAJEROS: TILES CON SERIF ITÁLICA */}
      <div data-step-item className="space-y-4 pt-2">
        <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-ochre-400/80 block select-none">
          Cantidad de Pasajeros *
        </span>
        <div className="grid grid-cols-3 gap-3">
          {(['1-2', '3', '4'] as const).map((num) => {
            const isSelected = viajerosActual === num;
            return (
              <button
                key={num}
                type="button"
                onClick={() => setValue('cantidadViajeros', num)}
                className={`h-[92px] text-center transition-all duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] cursor-pointer flex flex-col items-center justify-center p-3 rounded-none relative border ${
                  isSelected
                    ? 'border-ochre-400 bg-ochre-500/15 text-warm-50 ring-1 ring-ochre-500/60 shadow-lg'
                    : 'border-white/15 bg-white/[0.02] text-warm-50 hover:bg-white/[0.06] hover:border-white/30'
                }`}
              >
                <span className="text-2xl sm:text-3xl font-serif italic text-warm-50 font-normal mb-1">
                  {num}
                </span>
                <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-ochre-400/80">
                  pasajeros
                </span>
              </button>
            );
          })}
        </div>
        {errors.cantidadViajeros && (
          <span className="text-xs text-state-error font-mono">{errors.cantidadViajeros.message}</span>
        )}
      </div>

      {/* BARRA DE NAVEGACIÓN */}
      <div data-step-footer className="border-t border-white/10 pt-8 flex items-center justify-between">
        <button
          type="button"
          onClick={onBack}
          className="px-2 py-3 text-warm-50/60 hover:text-warm-50 font-mono text-xs uppercase tracking-[0.2em] font-semibold flex items-center gap-2 transition-colors cursor-pointer rounded-none"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Atrás</span>
        </button>

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
