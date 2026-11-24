"use client";

import React, { useEffect, useRef, useState } from "react";
import Script from "next/script";

const COUNTRY_OPTIONS = [
  { code: "+52", label: "+52 MX (México)" },
  { code: "+54", label: "+54 AR (Argentina)" },
  { code: "+57", label: "+57 CO (Colombia)" },
  { code: "+56", label: "+56 CL (Chile)" },
  { code: "+51", label: "+51 PE (Perú)" },
  { code: "+34", label: "+34 ES (España)" },
  { code: "+1", label: "+1 US / CA" },
  { code: "+598", label: "+598 UY (Uruguay)" },
  { code: "+593", label: "+593 EC (Ecuador)" },
  { code: "+506", label: "+506 CR (Costa Rica)" },
  { code: "+502", label: "+502 GT (Guatemala)" },
  { code: "+507", label: "+507 PA (Panamá)" },
  { code: "+591", label: "+591 BO (Bolivia)" },
  { code: "+595", label: "+595 PY (Paraguay)" },
  { code: "+58", label: "+58 VE (Venezuela)" },
];

export default function BrevoOptinForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    // Configuración global requerida por Brevo
    if (typeof window !== "undefined") {
      (window as unknown as Record<string, unknown>).REQUIRED_CODE_ERROR_MESSAGE =
        "Por favor selecciona el código de país";
      (window as unknown as Record<string, unknown>).LOCALE = "es";
      (window as unknown as Record<string, unknown>).EMAIL_INVALID_MESSAGE =
        (window as unknown as Record<string, unknown>).SMS_INVALID_MESSAGE =
        "El dato ingresado no es válido. Revisa el formato e intenta nuevamente.";
      (window as unknown as Record<string, unknown>).REQUIRED_ERROR_MESSAGE =
        "Este campo no puede quedar vacío.";
      (window as unknown as Record<string, unknown>).GENERIC_INVALID_MESSAGE =
        "El dato ingresado no es válido. Revisa el formato e intenta nuevamente.";
      (window as unknown as Record<string, unknown>).INVALID_NUMBER =
        "El número telefónico no es válido.";
      (window as unknown as Record<string, unknown>).AUTOHIDE = false;
    }
  }, []);

  return (
    <div className="w-full">
      {/* Contenedor del Formulario Brevo con IDs requeridos por su script */}
      <div id="sib-form-container" className="sib-form-container w-full">
        {/* Panel de Error (gestionado por Brevo JS) */}
        <div
          id="error-message"
          className="sib-form-message-panel hidden mb-3 p-3 rounded-xl bg-red-950/90 border border-red-500/50 text-red-100 text-xs sm:text-sm text-left shadow-lg"
          role="alert"
        >
          <div className="flex items-center gap-2">
            <svg
              className="w-4 h-4 text-red-400 shrink-0"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                clipRule="evenodd"
              />
            </svg>
            <span className="sib-form-message-panel__inner-text font-medium">
              No se pudo guardar tu registro. Por favor revisa los datos e intenta de nuevo.
            </span>
          </div>
        </div>

        {/* Panel de Éxito (gestionado por Brevo JS) */}
        <div
          id="success-message"
          className="sib-form-message-panel hidden mb-3 p-4 rounded-xl bg-emerald-950/90 border border-emerald-400/50 text-emerald-50 text-xs sm:text-sm text-left shadow-lg"
          role="alert"
        >
          <div className="flex items-center gap-3">
            <svg
              className="w-6 h-6 text-emerald-400 shrink-0"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <div>
              <p className="font-semibold text-emerald-200 text-sm sm:text-base">¡Tu lugar está reservado!</p>
              <p className="text-emerald-100/90 text-xs sm:text-sm mt-0.5">
                Te enviamos el enlace de Zoom directo a tu correo electrónico.
              </p>
            </div>
          </div>
        </div>

        {/* Formulario HTML oficial conectado al endpoint de Brevo */}
        <div id="sib-container">
          <form
            id="sib-form"
            ref={formRef}
            method="POST"
            action="https://58e376cb.sibforms.com/serve/MUIFAGTP5VmY3-tKtuD8Uk9fgnu2VakEbNrXG2YWeVg9AFawNsfeLRpVeLJT3LM3D5G1GRFPD6bgW5EG25ainOJHr50uTckdVtOM1oFh4Ut4StMq71DGp2zuHJxEfPjgnDn-vTW9n27pL9iJRRMx8JTmnLNDcW6taei1ANV6G_kVNlTE2rE2gDHUbIxjcuFUn5FgrZCE5eJwoF9MMA=="
            data-type="subscription"
            className="flex flex-col gap-3 sm:gap-4"
            onSubmit={() => setIsSubmitting(true)}
          >
            {/* Campo 1: Nombre Completo */}
            <div className="sib-input sib-form-block text-left">
              <label
                htmlFor="NOMBRE_COMPLETO"
                className="entry__label block text-xs sm:text-sm font-semibold text-gold-200 mb-1"
                data-required="*"
              >
                Tu Nombre
              </label>
              <div className="entry__field">
                <input
                  id="NOMBRE_COMPLETO"
                  name="NOMBRE_COMPLETO"
                  type="text"
                  maxLength={200}
                  autoComplete="name"
                  data-required="true"
                  required
                  placeholder="Escribe tu nombre y apellido"
                  className="input w-full h-11 sm:h-12 bg-plum-950/80 border border-gold-400/40 text-white placeholder:text-gold-200/50 text-xs sm:text-sm rounded-xl px-3.5 py-2 sm:py-3 transition-all duration-200 focus:outline-none focus:border-gold-300 focus:ring-2 focus:ring-gold-400/50 shadow-inner"
                />
              </div>
              <label
                className="entry__error entry__error--primary text-xs text-red-300 mt-1 block"
                style={{ display: "none" }}
              />
            </div>

            {/* Campo 2: Email */}
            <div className="sib-input sib-form-block text-left">
              <label
                htmlFor="EMAIL"
                className="entry__label block text-xs sm:text-sm font-semibold text-gold-200 mb-1"
                data-required="*"
              >
                Tu Mejor Email
              </label>
              <div className="entry__field">
                <input
                  id="EMAIL"
                  name="EMAIL"
                  type="email"
                  autoComplete="email"
                  data-required="true"
                  required
                  placeholder="ejemplo@correo.com"
                  className="input w-full h-11 sm:h-12 bg-plum-950/80 border border-gold-400/40 text-white placeholder:text-gold-200/50 text-xs sm:text-sm rounded-xl px-3.5 py-2 sm:py-3 transition-all duration-200 focus:outline-none focus:border-gold-300 focus:ring-2 focus:ring-gold-400/50 shadow-inner"
                />
              </div>
              <label
                className="entry__error entry__error--primary text-xs text-red-300 mt-1 block"
                style={{ display: "none" }}
              />
            </div>

            {/* Campo 3: WhatsApp con selector de país */}
            <div className="sib-sms-field sib-form-block text-left">
              <label
                htmlFor="WHATSAPP"
                className="entry__label block text-xs sm:text-sm font-semibold text-gold-200 mb-1"
                data-required="*"
              >
                Tu WhatsApp <span className="text-xs text-gold-300/80 font-normal">(para el recordatorio de Zoom)</span>
              </label>
              <div
                className="sib-sms-input-wrapper flex gap-2"
                style={{ direction: "ltr" }}
              >
                <div
                  className="sib-sms-input flex w-full gap-2"
                  data-placeholder="WHATSAPP"
                  data-required="true"
                  data-country-code="MX"
                  data-value=""
                  data-attributename="WHATSAPP"
                >
                  <div className="entry__field w-28 sm:w-36 shrink-0">
                    <select
                      name="WHATSAPP__COUNTRY_CODE"
                      data-required="true"
                      defaultValue="+52"
                      className="input w-full h-11 sm:h-12 bg-plum-950/90 border border-gold-400/40 text-gold-100 text-xs sm:text-sm rounded-xl px-2.5 transition-all duration-200 focus:outline-none focus:border-gold-300 focus:ring-2 focus:ring-gold-400/50 cursor-pointer shadow-inner"
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
                      name="WHATSAPP"
                      type="tel"
                      autoComplete="tel"
                      data-required="true"
                      required
                      placeholder="10 dígitos de tu móvil"
                      className="input w-full h-11 sm:h-12 bg-plum-950/80 border border-gold-400/40 text-white placeholder:text-gold-200/50 text-xs sm:text-sm rounded-xl px-3.5 transition-all duration-200 focus:outline-none focus:border-gold-300 focus:ring-2 focus:ring-gold-400/50 shadow-inner"
                    />
                  </div>
                </div>
              </div>
              <label
                className="entry__error entry__error--primary text-xs text-red-300 mt-1 block"
                style={{ display: "none" }}
              />
            </div>

            {/* Inputs Ocultos de Brevo */}
            <input
              type="text"
              name="email_address_check"
              value=""
              className="input--hidden hidden"
              tabIndex={-1}
              autoComplete="off"
              readOnly
            />
            <input type="hidden" name="locale" value="es" />

            {/* Botón de Envío (CTA de Alto Impacto) */}
            <div className="sib-form-block pt-1.5">
              <button
                type="submit"
                form="sib-form"
                disabled={isSubmitting}
                className="sib-form-block__button sib-form-block__button-with-loader w-full h-11 sm:h-12 group relative overflow-hidden rounded-xl bg-gradient-to-r from-gold-500 via-gold-300 to-gold-500 px-4 sm:px-6 font-body text-xs sm:text-sm font-bold uppercase tracking-wider text-plum-950 shadow-lg shadow-gold-500/30 transition-all duration-300 hover:brightness-110 hover:shadow-gold-500/45 active:scale-[0.98] disabled:opacity-60 cursor-pointer whitespace-nowrap"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <span>RESERVAR MI LUGAR GRATIS</span>
                  <svg
                    className="w-4 h-4 shrink-0 transition-transform duration-200 group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
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

            {/* Micro-texto de Fricción Cero en Alto Contraste */}
            <p className="text-center font-body text-xs sm:text-sm text-gold-200/90 leading-relaxed pt-0.5">
              100% gratuito. Te enviaremos el enlace de Zoom directo a tu correo.
            </p>
          </form>
        </div>
      </div>

      {/* Script oficial de Brevo cargado de forma asíncrona */}
      <Script
        src="https://sibforms.com/forms/end-form/build/main.js"
        strategy="afterInteractive"
      />

      {/* Reglas de estilo para el widget y dropdown de países generado por Brevo */}
      <style jsx global>{`
        .sib-sms-select {
          position: relative;
          display: flex !important;
          align-items: center !important;
          gap: 0.5rem !important;
          width: 100% !important;
        }
        .sib-sms-select__title {
          display: inline-flex !important;
          align-items: center !important;
          justify-content: space-between !important;
          gap: 0.45rem !important;
          height: 2.75rem !important;
          padding: 0 0.75rem !important;
          background: rgba(51, 30, 69, 0.85) !important;
          border: 1px solid rgba(175, 139, 91, 0.4) !important;
          border-radius: 0.75rem !important;
          color: #dfb084 !important;
          font-size: 0.8125rem !important;
          font-weight: 500 !important;
          cursor: pointer !important;
          white-space: nowrap !important;
          shrink: 0 !important;
          transition: border-color 0.2s ease !important;
        }
        .sib-sms-select__title:hover {
          border-color: rgba(197, 152, 106, 0.75) !important;
        }
        .sib-sms-select__title::after {
          content: "▾";
          font-size: 0.7rem;
          opacity: 0.85;
          margin-left: 0.15rem;
        }
        .sib-sms-select__number-input {
          position: relative !important;
          flex: 1 1 0% !important;
          min-width: 0 !important;
          display: flex !important;
          align-items: center !important;
          gap: 0.25rem !important;
          height: 2.75rem !important;
          padding: 0 0.75rem !important;
          background: rgba(51, 30, 69, 0.85) !important;
          border: 1px solid rgba(175, 139, 91, 0.4) !important;
          border-radius: 0.75rem !important;
          box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.18) !important;
        }
        .sib-sms-select__number-input:focus-within {
          border-color: #c5986a !important;
          box-shadow: 0 0 0 2px rgba(175, 139, 91, 0.45) !important;
        }
        .sib-sms-select__calling-code {
          width: 3rem !important;
          flex-shrink: 0 !important;
          background: transparent !important;
          border: none !important;
          color: #dfb084 !important;
          font-size: 0.8125rem !important;
          font-weight: 600 !important;
          outline: none !important;
          padding: 0 !important;
        }
        .sib-sms-select__phone-number {
          flex: 1 1 0% !important;
          min-width: 0 !important;
          width: 100% !important;
          background: transparent !important;
          border: none !important;
          color: #ffffff !important;
          font-size: 0.875rem !important;
          outline: none !important;
          padding: 0 !important;
        }
        .sib-sms-select__phone-number::placeholder {
          color: rgba(223, 176, 132, 0.5) !important;
        }
        @media (min-width: 640px) {
          .sib-sms-select__title,
          .sib-sms-select__number-input {
            height: 3rem !important;
          }
        }
        .sib-sms-select__list {
          background: #1c0824 !important;
          border: 1px solid rgba(206, 139, 52, 0.45) !important;
          border-radius: 12px !important;
          box-sizing: border-box !important;
          display: none !important;
          height: 0 !important;
          list-style: none !important;
          margin: 8px 0 0 0 !important;
          opacity: 0 !important;
          padding: 6px !important;
          position: absolute !important;
          width: 260px !important;
          z-index: 99999 !important;
          color: #dfb084 !important;
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.65) !important;
        }
        .sib-sms-select__list.sib-is-open {
          display: block !important;
          height: auto !important;
          max-height: 240px !important;
          overflow-y: auto !important;
          opacity: 1 !important;
        }
        .sib-sms-select__list li {
          padding: 8px 12px !important;
          cursor: pointer !important;
          font-size: 13px !important;
          border-radius: 8px !important;
        }
        .sib-sms-select__list li:hover {
          background: rgba(206, 139, 52, 0.22) !important;
          color: #ffffff !important;
        }
      `}</style>
    </div>
  );
}
