"use client";

import React, { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerContactInBrevo } from "@/app/actions/brevo";
import {
  brevoOptinSchema,
  COUNTRY_OPTIONS,
  DEFAULT_EVENTO,
  DEFAULT_ORIGEN_REGISTRO,
  type BrevoOptinField,
  type BrevoOptinInput,
  type BrevoOptinParsed,
} from "@/lib/schemas/brevo-optin";

export interface BrevoOptinFormProps {
  redirectTo?: string;
  origenRegistro?: string;
  evento?: string;
}

export default function BrevoOptinForm({
  redirectTo = "/thank-you/entre-dos-ciclos",
  origenRegistro = DEFAULT_ORIGEN_REGISTRO,
  evento = DEFAULT_EVENTO,
}: BrevoOptinFormProps = {}) {
  const router = useRouter();
  const hasSucceededRef = useRef(false);
  const [serverError, setServerError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<BrevoOptinInput, unknown, BrevoOptinParsed>({
    resolver: zodResolver(brevoOptinSchema),
    defaultValues: {
      fullName: "",
      email: "",
      countryCode: "+52",
      whatsapp: "",
      origenRegistro,
      evento,
      honeypot: "",
    },
  });

  const validationError =
    errors.fullName?.message ||
    errors.email?.message ||
    errors.countryCode?.message ||
    errors.whatsapp?.message ||
    null;

  const errorMessage = serverError || validationError;

  const onSubmit = async (data: BrevoOptinParsed) => {
    if (hasSucceededRef.current) return;

    setServerError(null);

    try {
      const result = await registerContactInBrevo({
        ...data,
        origenRegistro,
        evento,
      });

      if (!result.success) {
        if (result.fieldErrors) {
          for (const [field, message] of Object.entries(result.fieldErrors)) {
            if (message) {
              setError(field as BrevoOptinField, { type: "server", message });
            }
          }
        }
        setServerError(
          result.message ||
            "No se pudo guardar tu registro. Por favor revisa los datos e intenta de nuevo."
        );
        return;
      }

      hasSucceededRef.current = true;
      const targetUrl = data.email
        ? `${redirectTo}?email=${encodeURIComponent(data.email)}`
        : redirectTo;
      router.push(targetUrl);
    } catch {
      setServerError(
        "Ocurrió un error de conexión al enviar tu registro. Intenta nuevamente."
      );
    }
  };

  return (
    <div className="w-full">
      <div id="sib-form-container" className="sib-form-container w-full">
        {/* Panel de Error */}
        {errorMessage && (
          <div
            id="error-message"
            className="mb-3 p-3 rounded-xl bg-red-950/90 border border-red-500/50 text-red-100 text-xs sm:text-sm text-left shadow-lg"
            role="alert"
          >
            <div className="flex items-center gap-2">
              <svg
                className="w-4 h-4 text-red-400 shrink-0"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="font-medium">{errorMessage}</span>
            </div>
          </div>
        )}

        {/* Formulario conectado al Server Action seguro de Brevo */}
        <div id="sib-container">
          <form
            id="sib-form"
            noValidate
            className="flex flex-col gap-3 sm:gap-4"
            onSubmit={handleSubmit(onSubmit)}
          >
            {/* Campo 1: Nombre Completo */}
            <div className="sib-input sib-form-block form__entry text-left">
              <label
                htmlFor="NOMBRE_COMPLETO"
                className="entry__label block text-xs sm:text-sm font-semibold text-[#F7E3C6] lg:text-gold-200 mb-1"
                data-required="*"
              >
                Tu Nombre
              </label>
              <div className="entry__field">
                <input
                  id="NOMBRE_COMPLETO"
                  type="text"
                  maxLength={200}
                  autoComplete="name"
                  data-required="true"
                  aria-invalid={Boolean(errors.fullName)}
                  placeholder="Escribe tu nombre y apellido"
                  className="input w-full h-11 sm:h-12 bg-plum-950/80 border border-gold-400/45 text-white placeholder:text-gold-200/75 text-xs sm:text-sm rounded-xl px-3.5 py-2 sm:py-3 transition-all duration-200 focus:outline-none focus:border-gold-300 focus:ring-2 focus:ring-gold-400/50 shadow-inner"
                  {...register("fullName")}
                />
              </div>
            </div>

            {/* Campo 2: Email */}
            <div className="sib-input sib-form-block form__entry text-left">
              <label
                htmlFor="EMAIL"
                className="entry__label block text-xs sm:text-sm font-semibold text-[#F7E3C6] lg:text-gold-200 mb-1"
                data-required="*"
              >
                Tu Mejor Email
              </label>
              <div className="entry__field">
                <input
                  id="EMAIL"
                  type="email"
                  autoComplete="email"
                  data-required="true"
                  aria-invalid={Boolean(errors.email)}
                  placeholder="ejemplo@correo.com"
                  className="input w-full h-11 sm:h-12 bg-plum-950/80 border border-gold-400/45 text-white placeholder:text-gold-200/75 text-xs sm:text-sm rounded-xl px-3.5 py-2 sm:py-3 transition-all duration-200 focus:outline-none focus:border-gold-300 focus:ring-2 focus:ring-gold-400/50 shadow-inner"
                  {...register("email")}
                />
              </div>
            </div>

            {/* Campo 3: WhatsApp con selector de país */}
            <div className="sib-sms-field sib-form-block form__entry text-left">
              <label
                htmlFor="WHATSAPP"
                className="entry__label block text-xs sm:text-sm font-semibold text-[#F7E3C6] lg:text-gold-200 mb-1"
                data-required="*"
              >
                Tu WhatsApp{" "}
                <span className="text-xs text-[#F5D7AD] lg:text-gold-300/90 font-normal">
                  (para el recordatorio de Zoom)
                </span>
              </label>
              <div className="flex w-full gap-2" style={{ direction: "ltr" }}>
                <div className="entry__field w-28 sm:w-36 shrink-0">
                  <select
                    aria-label="Código de país"
                    data-required="true"
                    className="input w-full h-11 sm:h-12 bg-plum-950/90 border border-gold-400/45 text-[#FCE8CA] lg:text-gold-100 font-medium text-xs sm:text-sm rounded-xl px-2.5 transition-all duration-200 focus:outline-none focus:border-gold-300 focus:ring-2 focus:ring-gold-400/50 cursor-pointer shadow-inner"
                    {...register("countryCode")}
                  >
                    {COUNTRY_OPTIONS.map((c) => (
                      <option key={c.code} value={c.code} className="bg-plum-950 text-gold-100">
                        {c.label}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="entry__field flex-1">
                  <input
                    id="WHATSAPP"
                    type="tel"
                    autoComplete="tel"
                    data-required="true"
                    aria-invalid={Boolean(errors.whatsapp)}
                    placeholder="10 dígitos de tu móvil"
                    className="input w-full h-11 sm:h-12 bg-plum-950/80 border border-gold-400/45 text-white placeholder:text-gold-200/75 text-xs sm:text-sm rounded-xl px-3.5 py-2 sm:py-3 transition-all duration-200 focus:outline-none focus:border-gold-300 focus:ring-2 focus:ring-gold-400/50 shadow-inner"
                    {...register("whatsapp")}
                  />
                </div>
              </div>
            </div>

            {/* Honeypot Anti-Spam */}
            <input
              type="text"
              className="input--hidden hidden"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              {...register("honeypot")}
            />

            {/* Botón de Envío */}
            <div className="sib-form-block pt-1.5">
              <button
                type="submit"
                disabled={isSubmitting || hasSucceededRef.current}
                className="w-full h-11 sm:h-12 group relative overflow-hidden rounded-xl bg-gradient-to-r from-gold-500 via-gold-300 to-gold-500 px-4 sm:px-6 font-body text-xs sm:text-sm font-bold uppercase tracking-wider text-plum-950 shadow-lg shadow-gold-500/30 transition-all duration-300 hover:brightness-110 hover:shadow-gold-500/45 active:scale-[0.98] disabled:opacity-60 cursor-pointer whitespace-nowrap"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <span>
                    {isSubmitting ? "RESERVANDO TU LUGAR..." : "RESERVAR MI LUGAR GRATIS"}
                  </span>
                  <svg
                    className="w-4 h-4 shrink-0 transition-transform duration-200 group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </span>
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              </button>
            </div>

            {/* Micro-texto */}
            <p className="text-center font-body text-xs sm:text-sm text-[#F7E3C6] lg:text-gold-200/90 font-medium lg:font-normal leading-relaxed pt-0.5">
              100% gratuito. Te enviaremos el enlace de Zoom directo a tu correo.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
