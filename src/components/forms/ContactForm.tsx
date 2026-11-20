'use client';

import { useState, useEffect, useRef } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { AlertCircle } from 'lucide-react';

import { contactSchema, ContactFormData } from '@/lib/schemas/contact';
import { sendContactAction } from '@/app/actions/contact';
import ContactFormKinematicWrapper from '@/components/animations/ContactFormKinematicWrapper';
import {
  trackLeadGenerated,
  trackLeadFormStart,
  trackLeadFormStepComplete,
  trackLeadFormStepBack,
  trackLeadFormValidationError,
  type LeadFormId,
} from '@/lib/analytics';

import Step1Intencion from './Step1Intencion';
import Step2Logistica from './Step2Logistica';
import Step3Contacto from './Step3Contacto';
import Step4Detalles from './Step4Detalles';
import FormSuccessScreen from './FormSuccessScreen';

interface ContactFormProps {
  formId?: LeadFormId;
}

export default function ContactForm({
  formId = 'hud_multistep_contact',
}: ContactFormProps = {}) {
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const hasTrackedStart = useRef(false);

  const methods = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      intencion: 'excursion-privada',
      cantidadViajeros: '1-2',
      fechaViaje: '',
      nombre: '',
      ciudad: '',
      email: '',
      telefono: '+54 ',
      excursionInteres: 'Salinas Grandes',
      detallesAdicionales: '',
      websiteTrap: '',
    },
  });

  const { trigger, reset, register, handleSubmit } = methods;

  // Trackeo de inicio del formulario (solo una vez al montar)
  useEffect(() => {
    if (!hasTrackedStart.current) {
      hasTrackedStart.current = true;
      trackLeadFormStart(methods.getValues('intencion'), formId);
    }
  }, [methods, formId]);

  // Validadores de transición por pasos con telemetría analítica
  const goToStep2 = async () => {
    const isValid = await trigger('intencion');
    if (isValid) {
      const intencion = methods.getValues('intencion');
      trackLeadFormStepComplete({
        form_id: formId,
        step_number: 1,
        step_name: 'intencion',
        offer_type:
          intencion === 'excursion-privada'
            ? 'private_excursion'
            : intencion === 'viaje-a-medida'
            ? 'bespoke_trip'
            : 'exploratory',
        step_data: { selected_intent: intencion },
      });
      setStep(2);
    } else {
      trackLeadFormValidationError({
        form_id: formId,
        step_number: 1,
        invalid_fields: ['intencion'],
      });
    }
  };

  const goToStep3 = async () => {
    const isValid = await trigger(['fechaViaje', 'cantidadViajeros']);
    if (isValid) {
      const [cantidadViajeros, fechaViaje] = methods.getValues(['cantidadViajeros', 'fechaViaje']);
      trackLeadFormStepComplete({
        form_id: formId,
        step_number: 2,
        step_name: 'logistica',
        step_data: {
          pax_count: cantidadViajeros,
          has_dates: Boolean(fechaViaje && fechaViaje.trim().length > 0),
        },
      });
      setStep(3);
    } else {
      const errors = methods.formState.errors;
      const invalidFields: string[] = [];
      if (errors.fechaViaje) invalidFields.push('fechaViaje');
      if (errors.cantidadViajeros) invalidFields.push('cantidadViajeros');
      trackLeadFormValidationError({
        form_id: formId,
        step_number: 2,
        invalid_fields: invalidFields.length > 0 ? invalidFields : ['fechaViaje', 'cantidadViajeros'],
      });
    }
  };

  const goToStep4 = async () => {
    const isValid = await trigger(['nombre', 'ciudad', 'email', 'telefono']);
    if (isValid) {
      trackLeadFormStepComplete({
        form_id: formId,
        step_number: 3,
        step_name: 'contacto',
        step_data: {
          city_provided: Boolean(methods.getValues('ciudad')),
        },
      });
      setStep(4);
    } else {
      const errors = methods.formState.errors;
      const invalidFields: string[] = [];
      if (errors.nombre) invalidFields.push('nombre');
      if (errors.ciudad) invalidFields.push('ciudad');
      if (errors.email) invalidFields.push('email');
      if (errors.telefono) invalidFields.push('telefono');
      trackLeadFormValidationError({
        form_id: formId,
        step_number: 3,
        invalid_fields: invalidFields.length > 0 ? invalidFields : ['contacto'],
      });
    }
  };

  const handleStepBack = (fromStep: 2 | 3 | 4, toStep: 1 | 2 | 3) => {
    trackLeadFormStepBack({ form_id: formId, from_step: fromStep, to_step: toStep });
    setStep(toStep);
  };

  const onSubmit = async (data: ContactFormData) => {
    setStatus('loading');
    setErrorMessage('');

    try {
      const result = await sendContactAction(data);

      if (!result.success) {
        setStatus('error');
        setErrorMessage(result.error || 'Ocurrió un problema al procesar tu solicitud.');
      } else {
        setStatus('success');

        // Macro-conversión Lead Cualificado (Zero PII garantizado)
        trackLeadGenerated({
          form_id: formId,
          lead_intent: data.intencion,
          pax_count: data.cantidadViajeros,
          city_origin: data.ciudad,
          excursion_interest: data.excursionInteres,
          has_custom_details: Boolean(data.detallesAdicionales && data.detallesAdicionales.trim().length > 0),
          has_travel_dates: Boolean(data.fechaViaje && data.fechaViaje.trim().length > 0),
        });

        reset();
      }
    } catch (err: unknown) {
      console.error('[ContactForm] Error enviando formulario:', err);
      setStatus('error');

      const rawMsg = err instanceof Error ? err.message : '';
      const isInternalReactError =
        rawMsg.includes('Minified React error') ||
        rawMsg.includes('Server Components') ||
        rawMsg.includes('digest');

      setErrorMessage(
        isInternalReactError || !rawMsg
          ? 'No pudimos procesar tu solicitud en este momento por un problema de conexión con el servicio de correo. Por favor contáctanos directamente vía WhatsApp.'
          : rawMsg
      );
    }
  };

  return (
    <ContactFormKinematicWrapper
      step={step}
      isSuccess={status === 'success'}
      className="w-full bg-earth-950/30 backdrop-blur-2xl border border-white/15 p-6 sm:p-10 lg:p-18 shadow-2xl relative rounded-none select-none"
    >
      {/* Honeypot Anti-Spam */}
      <div className="hidden" aria-hidden="true">
        <input type="text" tabIndex={-1} autoComplete="off" {...register('websiteTrap')} />
      </div>

      {/* TELEMETRÍA EDITORIAL DE PASOS */}
      {status !== 'success' && (
        <div className="mb-12">
          <div className="flex justify-between items-baseline mb-4">
            <div className="flex items-baseline gap-2">
              <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.3em] text-ochre-400 font-semibold">
                {step === 1 ? 'MODALIDAD DE VIAJE' :
                 step === 2 ? 'LOGÍSTICA & GRUPO' :
                 step === 3 ? 'CONTACTO PRIVADO' :
                 'DETALLES DE EXPEDICIÓN'
                }
              </span>
            </div>
            <div className="font-serif italic text-warm-50/70 text-sm tracking-widest select-none">
              <span className="text-warm-50 font-medium text-base">0{step}</span>
              <span className="opacity-40 mx-1">/</span>
              <span className="opacity-40">04</span>
            </div>
          </div>
          <div className="w-full h-[1px] bg-white/10 overflow-hidden rounded-none relative">
            <div
              data-progress-bar
              className="h-full bg-accent-foreground rounded-none will-change-[width]"
              style={{ width: `${(step / 4) * 100}%` }}
            />
          </div>
        </div>
      )}

      {/* ESTADO DE ÉXITO */}
      {status === 'success' && (
        <div>
          <FormSuccessScreen />
        </div>
      )}

      {/* FLUJO MULTIPASO CON TRANSICIÓN FLOTANTE */}
      {status !== 'success' && (
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
            {status === 'error' && (
              <div className="p-4 bg-state-error/20 border border-state-error/50 rounded-none flex items-center gap-3 text-state-error text-xs font-mono">
                <AlertCircle className="w-5 h-5 shrink-0" />
                <span>{errorMessage}</span>
              </div>
            )}

            <div key={step}>
              {step === 1 && <Step1Intencion onNext={goToStep2} />}
              {step === 2 && <Step2Logistica onNext={goToStep3} onBack={() => handleStepBack(2, 1)} />}
              {step === 3 && <Step3Contacto onNext={goToStep4} onBack={() => handleStepBack(3, 2)} />}
              {step === 4 && (
                <Step4Detalles onBack={() => handleStepBack(4, 3)} isLoading={status === 'loading'} />
              )}
            </div>
          </form>
        </FormProvider>
      )}
    </ContactFormKinematicWrapper>
  );
}