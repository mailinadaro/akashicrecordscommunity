'use server';

import { Resend } from 'resend';
import { contactSchema, type ContactFormData } from '@/lib/schemas/contact';
import { renderLeadNotificationHtml } from '@/emails/lead-notification';
import { siteConfig } from '@/config/site.config';

/**
 * Inicializador defensivo (lazy) del cliente Resend.
 * Evita excepciones no controladas en el scope global del módulo si la variable
 * de entorno RESEND_API_KEY no está configurada en producción (evitando React Error #441).
 */
function getResendClient(): Resend | null {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey || apiKey.trim().length === 0) {
    console.error('[Server Action contact] Variable RESEND_API_KEY no configurada en el servidor.');
    return null;
  }
  return new Resend(apiKey);
}

const INTENCION_MAP: Record<string, { label: string; emoji: string }> = {
  'excursion-privada': { label: 'Excursión Privada', emoji: '🚗' },
  'viaje-a-medida': { label: 'Viaje a Medida', emoji: '✨' },
  'explorando-opciones': { label: 'Explorando Opciones', emoji: '🔍' },
};

export async function sendContactAction(data: ContactFormData) {
  try {
    // 1. Detección de Bot (Honeypot)
    // Si el campo trampa 'websiteTrap' viene lleno, es un bot. 
    // Retornamos éxito simulado (true) para engañarlo sin malgastar recursos ni enviar correos.
    if (data.websiteTrap && data.websiteTrap.trim().length > 0) {
      console.warn('[Anti-Spam] Intento de bot bloqueado mediante campo trampa honeypot.');
      return { success: true };
    }

    // 2. Validamos en el servidor con el esquema Zod
    const validationResult = await contactSchema.safeParseAsync(data);

    if (!validationResult.success) {
      return {
        success: false,
        error: 'Los datos del formulario no son válidos.',
        details: validationResult.error.flatten().fieldErrors,
      };
    }

    const resend = getResendClient();
    if (!resend) {
      return {
        success: false,
        error: 'El servicio de mensajería no está disponible temporalmente. Por favor contáctanos vía WhatsApp.',
      };
    }

    const {
      intencion,
      nombre,
      email,
    } = validationResult.data;

    const intencionInfo = INTENCION_MAP[intencion] || { label: intencion, emoji: '📌' };

    const fechaEnvio = `${new Date().toLocaleDateString('es-AR')} a las ${new Date().toLocaleTimeString('es-AR')}`;

    // 3. Renderizamos el correo desde la plantilla modular
    const htmlEmail = renderLeadNotificationHtml({
      data: validationResult.data,
      intencionLabel: intencionInfo.label,
      intencionEmoji: intencionInfo.emoji,
      fechaEnvio,
    });

    // 4. Enviamos el correo con Resend
    const { error } = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev',
      to: [process.env.CONTACT_EMAIL_TO || siteConfig.contact.email],
      replyTo: email,
      subject: `${intencionInfo.emoji} [NUEVA CONSULTA] ${nombre} - ${intencionInfo.label}`,
      html: htmlEmail,
    });

    if (error) {
      console.error('Error enviando correo con Resend:', error);
      return {
        success: false,
        error: 'Ocurrió un error al despachar el correo. Por favor contáctanos vía WhatsApp.',
      };
    }

    return { success: true };

  } catch (err) {
    console.error('Error crítico en Server Action de contacto:', err);
    return {
      success: false,
      error: 'Error inesperado en el servidor. Por favor contáctanos vía WhatsApp.',
    };
  }
}
