import type { ContactFormData } from "@/lib/schemas/contact";

export interface LeadNotificationEmailProps {
  data: ContactFormData;
  intencionLabel: string;
  intencionEmoji: string;
  fechaEnvio: string;
}

export function renderLeadNotificationHtml({
  data,
  intencionLabel,
  intencionEmoji,
  fechaEnvio,
}: LeadNotificationEmailProps): string {
  const {
    nombre,
    ciudad,
    email,
    telefono,
    fechaViaje,
    cantidadViajeros,
    excursionInteres,
    detallesAdicionales,
  } = data;

  const cleanPhone = telefono ? telefono.replace(/\D/g, "") : "";

  return `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Nueva consulta - Jujuy Adentro</title>
</head>
<body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f5f0e7; color: #292621; margin: 0; padding: 24px 12px; -webkit-font-smoothing: antialiased;">
  <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" style="max-width: 600px; background-color: #ffffff; border-radius: 8px; border: 1px solid #e4d9c8; overflow: hidden; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.04);" border="0" cellspacing="0" cellpadding="0">
          
          <!-- Header de marca -->
          <tr>
            <td style="background-color: #292621; padding: 28px 32px; border-bottom: 3px solid #b68a4a;">
              <span style="font-family: monospace; font-size: 11px; text-transform: uppercase; letter-spacing: 0.25em; color: #b68a4a; display: block; margin-bottom: 6px; font-weight: 600;">
                JUJUY ADENTRO · EXPEDICIONES PRIVADAS
              </span>
              <h1 style="color: #f5f0e7; font-size: 22px; font-weight: 400; font-family: Georgia, serif; margin: 0; font-style: italic;">
                ${intencionEmoji} Nueva Solicitud: ${intencionLabel}
              </h1>
              <p style="color: rgba(245, 240, 231, 0.65); font-size: 12px; margin: 8px 0 0 0;">
                Recibida el ${fechaEnvio} (Hora local de Jujuy)
              </p>
            </td>
          </tr>

          <!-- Contenido Principal -->
          <tr>
            <td style="padding: 32px;">

              <!-- Bloque 1: Datos de Contacto -->
              <h2 style="font-size: 11px; font-family: monospace; text-transform: uppercase; letter-spacing: 0.2em; color: #b68a4a; margin: 0 0 12px 0; font-weight: 600;">
                01. Datos del Viajero
              </h2>
              <table role="presentation" width="100%" style="background-color: #fafaf9; border-radius: 6px; border: 1px solid #e7e5e4; margin-bottom: 24px;" cellpadding="14" cellspacing="0">
                <tr>
                  <td>
                    <p style="margin: 3px 0; font-size: 14px; line-height: 1.5;">
                      <strong style="color: #4a382d;">Nombre completo:</strong> ${nombre}
                    </p>
                    ${ciudad ? `
                    <p style="margin: 3px 0; font-size: 14px; line-height: 1.5;">
                      <strong style="color: #4a382d;">Ciudad de procedencia:</strong> ${ciudad}
                    </p>` : ""}
                    <p style="margin: 3px 0; font-size: 14px; line-height: 1.5;">
                      <strong style="color: #4a382d;">Email:</strong> 
                      <a href="mailto:${email}" style="color: #b68a4a; text-decoration: none; font-weight: 500;">${email}</a>
                    </p>
                    <p style="margin: 3px 0; font-size: 14px; line-height: 1.5;">
                      <strong style="color: #4a382d;">WhatsApp:</strong> 
                      <a href="https://wa.me/${cleanPhone}" target="_blank" style="color: #16a34a; font-weight: 600; text-decoration: none;">
                        ${telefono} ↗
                      </a>
                    </p>
                  </td>
                </tr>
              </table>

              <!-- Bloque 2: Logística y Experiencia -->
              <h2 style="font-size: 11px; font-family: monospace; text-transform: uppercase; letter-spacing: 0.2em; color: #b68a4a; margin: 0 0 12px 0; font-weight: 600;">
                02. Logística & Modalidad
              </h2>
              <table role="presentation" width="100%" style="background-color: #fafaf9; border-radius: 6px; border: 1px solid #e7e5e4; margin-bottom: 24px;" cellpadding="14" cellspacing="0">
                <tr>
                  <td>
                    <p style="margin: 3px 0; font-size: 14px; line-height: 1.5;">
                      <strong style="color: #4a382d;">Modalidad solicitada:</strong> ${intencionLabel}
                    </p>
                    <p style="margin: 3px 0; font-size: 14px; line-height: 1.5;">
                      <strong style="color: #4a382d;">Fecha estimada de viaje:</strong> ${fechaViaje}
                    </p>
                    <p style="margin: 3px 0; font-size: 14px; line-height: 1.5;">
                      <strong style="color: #4a382d;">Cantidad de viajeros:</strong> ${cantidadViajeros} persona(s)
                    </p>
                    ${excursionInteres ? `
                    <p style="margin: 3px 0; font-size: 14px; line-height: 1.5;">
                      <strong style="color: #4a382d;">Excursión de interés:</strong> 
                      <span style="color: #b68a4a; font-weight: 600;">${excursionInteres}</span>
                    </p>` : ""}
                  </td>
                </tr>
              </table>

              <!-- Bloque 3: Notas Adicionales -->
              ${detallesAdicionales ? `
              <h2 style="font-size: 11px; font-family: monospace; text-transform: uppercase; letter-spacing: 0.2em; color: #b68a4a; margin: 0 0 12px 0; font-weight: 600;">
                03. Preferencias & Comentarios
              </h2>
              <table role="presentation" width="100%" style="background-color: #fdfbf7; border-left: 3px solid #b68a4a; border-radius: 4px; margin-bottom: 24px;" cellpadding="14" cellspacing="0">
                <tr>
                  <td style="font-style: italic; color: #38332b; font-size: 14px; line-height: 1.6;">
                    "${detallesAdicionales.replace(/\n/g, '<br />')}"
                  </td>
                </tr>
              </table>
              ` : ""}

              <!-- Footer interno -->
              <p style="font-size: 12px; color: #8c827a; text-align: center; margin: 32px 0 0 0; padding-top: 20px; border-top: 1px solid #f0ebe1; line-height: 1.5;">
                Mensaje generado automáticamente por el formulario de <strong>Jujuy Adentro</strong>.<br>
                Podés responder directamente a este correo para comunicarte con el remitente.
              </p>

            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}
