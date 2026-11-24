import React from "react";

export interface PaymentMethodBadgesProps {
  className?: string;
  variant?: "compact" | "full";
  align?: "center" | "start" | "end";
}

/**
 * High-fidelity vector logos for official payment methods
 * Supported by Hotmart: Visa, Mastercard, AMEX, PayPal, Mercado Pago, OXXO, SPEI.
 */
function VisaLogo({ className = "h-3.5 w-auto" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 16"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Visa"
    >
      <path
        d="M18.814 1.157L12.33 15.114H8.082L4.937 3.971c-.19-.743-.37-1.014-.963-1.33C3.011 2.129 1.408 1.657 0 1.343l.095-.443h6.866c.883 0 1.674.586 1.865 1.6l1.706 8.786 4.225-10.129h4.057zm16.54 9.171c.016-3.343-4.832-3.528-4.8-5.014.016-.457.458-.943 1.442-1.071.49-.072 1.848-.129 3.407.571l.608-2.714c-.833-.286-1.9-.557-3.232-.557-3.42 0-5.828 1.743-5.844 4.243-.032 1.857 1.72 2.886 3.036 3.5 1.353.629 1.812 1.043 1.812 1.6 0 .872-1.078 1.257-2.074 1.272-1.742.014-2.738-.257-4.21-.886l-.608 2.743c.883.386 2.502.729 4.195.743 3.63 0 6.02-1.729 6.036-4.429zM42.27 15.114h3.737L42.766 1.157h-3.468c-.779 0-1.443.443-1.737 1.114L31.33 15.114h4.088l.817-2.214h4.992l.473 2.214zm-4.32-4.371l2.057-5.429 1.185 5.429H37.95zm-14.77-9.586l-3.28 13.957h-3.9l3.28-13.957h3.9z"
        fill="#1A1F71"
      />
    </svg>
  );
}

function MastercardLogo({ className = "h-4 w-auto" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 36 24"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Mastercard"
    >
      <circle cx="12" cy="12" r="10" fill="#EB001B" />
      <circle cx="24" cy="12" r="10" fill="#F79E1B" fillOpacity="0.9" />
      <path
        d="M18 5.764a9.96 9.96 0 00-3.6 6.236 9.96 9.96 0 003.6 6.236 9.96 9.96 0 003.6-6.236 9.96 9.96 0 00-3.6-6.236z"
        fill="#FF5F00"
      />
    </svg>
  );
}

function AmexLogo({ className = "h-3.5 w-auto" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 36 20"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="American Express"
    >
      <rect width="36" height="20" rx="3" fill="#006FCF" />
      <path
        d="M5 14.5l3.2-9h3.6l3.2 9H12.6l-.6-2H8l-.6 2H5zm3.6-3.8h2.8L10 6.8 8.6 10.7zm8.4 3.8V5.5h3.4l2 4 2-4h3.4v9h-2.8V9.8l-1.8 3.5h-1.6l-1.8-3.5v4.7H17zm11.8 0V5.5h6.2v2.4h-3.6v1h3.4v2.3h-3.4v1h3.7v2.3h-6.3z"
        fill="#FFFFFF"
      />
    </svg>
  );
}

function PaypalLogo({ className = "h-3.5 w-auto" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 36 20"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="PayPal"
    >
      <path
        d="M13.2 3.5H7.5c-.5 0-.9.4-1 .9L4 16.8c-.1.3.2.6.5.6h2.9l.8-5c.1-.4.4-.7.9-.7h1.8c3.2 0 5.4-1.5 6-4.6.3-1.4 0-2.4-.7-3-.9-.8-2.3-1.1-4-1.1z"
        fill="#003087"
      />
      <path
        d="M18.8 8.8c-.5 2.8-2.6 4.2-5.4 4.2h-1.8c-.4 0-.7.3-.8.7l-.9 5.5c-.1.3.2.6.5.6h3.2c.4 0 .8-.3.9-.7l.7-4.3c.1-.4.4-.7.9-.7h1.2c2.6 0 4.6-1.1 5.2-3.8.3-1.2.1-2.2-.5-2.8-.2-.3-.5-.5-.8-.7.2.5.1 1.1-.3 1.7z"
        fill="#0079C1"
      />
    </svg>
  );
}

function MercadoPagoLogo({ className = "h-3.5 w-auto" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 38 20"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Mercado Pago"
    >
      <rect width="38" height="20" rx="3" fill="#009EE3" />
      {/* Handshake icon stylized */}
      <path
        d="M12 9.5c.8-.8 2.1-.8 2.9 0l1.3 1.3 3.6-3.6c.8-.8 2.1-.8 2.9 0l3.3 3.3c.8.8.8 2.1 0 2.9l-4.5 4.5c-.8.8-2.1.8-2.9 0l-1.3-1.3-1.3 1.3c-.8.8-2.1.8-2.9 0L9 13.9c-.8-.8-.8-2.1 0-2.9L12 9.5z"
        fill="#FFFFFF"
      />
      <circle cx="14" cy="11.5" r="1.2" fill="#009EE3" />
      <circle cx="24" cy="11.5" r="1.2" fill="#009EE3" />
    </svg>
  );
}

function OxxoLogo({ className = "h-3.5 w-auto" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 18"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="OXXO"
    >
      <rect width="40" height="18" rx="3" fill="#E21836" />
      <rect x="2" y="7" width="36" height="4" fill="#F9A01B" />
      <text
        x="20"
        y="13"
        fill="#FFFFFF"
        fontFamily="sans-serif"
        fontWeight="900"
        fontSize="10"
        letterSpacing="0.8"
        textAnchor="middle"
      >
        OXXO
      </text>
    </svg>
  );
}

function SpeiLogo({ className = "h-3.5 w-auto" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 38 18"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="SPEI"
    >
      <rect width="38" height="18" rx="3" fill="#1B365D" />
      <text
        x="19"
        y="12.5"
        fill="#FFFFFF"
        fontFamily="sans-serif"
        fontWeight="800"
        fontSize="8.5"
        letterSpacing="0.6"
        textAnchor="middle"
      >
        SPEI
      </text>
      <path
        d="M6 14.5c4-1.2 9-1.2 13 0"
        stroke="#00C48C"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function PaymentMethodBadges({
  className = "",
  variant = "compact",
  align = "center",
}: PaymentMethodBadgesProps) {
  const alignClass =
    align === "center"
      ? "justify-center"
      : align === "start"
      ? "justify-start"
      : "justify-end";

  if (variant === "compact") {
    return (
      <div
        className={`flex items-center flex-wrap gap-1.5 ${alignClass} ${className}`}
        aria-label="Métodos de pago admitidos por Hotmart"
      >
        {/* Visa */}
        <div className="h-6 px-1.5 py-0.5 rounded bg-white border border-border-default/60 shadow-2xs flex items-center justify-center hover:border-gold-500/50 transition-colors">
          <VisaLogo className="h-3 w-auto" />
        </div>
        {/* Mastercard */}
        <div className="h-6 px-1.5 py-0.5 rounded bg-white border border-border-default/60 shadow-2xs flex items-center justify-center hover:border-gold-500/50 transition-colors">
          <MastercardLogo className="h-3.5 w-auto" />
        </div>
        {/* AMEX */}
        <div className="h-6 px-1.5 py-0.5 rounded bg-white border border-border-default/60 shadow-2xs flex items-center justify-center hover:border-gold-500/50 transition-colors">
          <AmexLogo className="h-3.5 w-auto" />
        </div>
        {/* PayPal */}
        <div className="h-6 px-1.5 py-0.5 rounded bg-white border border-border-default/60 shadow-2xs flex items-center justify-center hover:border-gold-500/50 transition-colors">
          <PaypalLogo className="h-3.5 w-auto" />
        </div>
        {/* Mercado Pago */}
        <div className="h-6 px-1.5 py-0.5 rounded bg-white border border-border-default/60 shadow-2xs flex items-center justify-center hover:border-gold-500/50 transition-colors">
          <MercadoPagoLogo className="h-3.5 w-auto" />
        </div>
        {/* OXXO */}
        <div className="h-6 px-1.5 py-0.5 rounded bg-white border border-border-default/60 shadow-2xs flex items-center justify-center hover:border-gold-500/50 transition-colors">
          <OxxoLogo className="h-3 w-auto" />
        </div>
        {/* SPEI */}
        <div className="h-6 px-1.5 py-0.5 rounded bg-white border border-border-default/60 shadow-2xs flex items-center justify-center hover:border-gold-500/50 transition-colors">
          <SpeiLogo className="h-3 w-auto" />
        </div>
      </div>
    );
  }

  // Full / showcase variant (for trust footer card)
  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      <div className={`flex items-center flex-wrap gap-2 ${alignClass}`}>
        {/* Visa */}
        <div className="h-7 px-2 py-1 rounded-md bg-white border border-border-default/70 shadow-2xs flex items-center justify-center gap-1 hover:border-gold-500 transition-colors">
          <VisaLogo className="h-3.5 w-auto" />
        </div>
        {/* Mastercard */}
        <div className="h-7 px-2 py-1 rounded-md bg-white border border-border-default/70 shadow-2xs flex items-center justify-center gap-1 hover:border-gold-500 transition-colors">
          <MastercardLogo className="h-4 w-auto" />
        </div>
        {/* AMEX */}
        <div className="h-7 px-2 py-1 rounded-md bg-white border border-border-default/70 shadow-2xs flex items-center justify-center gap-1 hover:border-gold-500 transition-colors">
          <AmexLogo className="h-4 w-auto" />
        </div>
        {/* PayPal */}
        <div className="h-7 px-2 py-1 rounded-md bg-white border border-border-default/70 shadow-2xs flex items-center justify-center gap-1 hover:border-gold-500 transition-colors">
          <PaypalLogo className="h-4 w-auto" />
        </div>
        {/* Mercado Pago */}
        <div className="h-7 px-2 py-1 rounded-md bg-white border border-border-default/70 shadow-2xs flex items-center justify-center gap-1 hover:border-gold-500 transition-colors">
          <MercadoPagoLogo className="h-4 w-auto" />
        </div>
        {/* OXXO */}
        <div className="h-7 px-2 py-1 rounded-md bg-white border border-border-default/70 shadow-2xs flex items-center justify-center gap-1 hover:border-gold-500 transition-colors">
          <OxxoLogo className="h-3.5 w-auto" />
        </div>
        {/* SPEI */}
        <div className="h-7 px-2 py-1 rounded-md bg-white border border-border-default/70 shadow-2xs flex items-center justify-center gap-1 hover:border-gold-500 transition-colors">
          <SpeiLogo className="h-3.5 w-auto" />
        </div>
      </div>
      <p className="text-[11px] font-body text-plum-600/80 font-light">
        Tarjetas internacionales y métodos locales en efectivo y transferencia bancaria directa.
      </p>
    </div>
  );
}
