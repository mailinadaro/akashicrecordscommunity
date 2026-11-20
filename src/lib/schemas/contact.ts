import { z } from "zod";

const disposableDomains = ["mailinator.com", "tempmail.com", "10minutemail.com", "guerrillamail.com"];

export const contactSchema = z.object({
  intencion: z.enum(
    ["excursion-privada", "viaje-a-medida", "explorando-opciones"],
    { message: "Selecciona una intención para continuar." },
  ),

  fechaViaje: z
    .string()
    .trim()
    .min(3, { message: "Indica cuándo te gustaría viajar." })
    .max(120, { message: "La fecha estimada no puede superar los 120 caracteres." }),

  cantidadViajeros: z.enum(["1-2", "3", "4"], {
    message: "Selecciona la cantidad de viajeros (máximo 4 pasajeros).",
  }),

  nombre: z.string().min(2, { message: "Ingresa tu nombre completo." }),
  
  email: z
    .string()
    .email({ message: "Ingresa un correo electrónico válido." })
    .refine((val) => {
      const domain = val.split("@")[1]?.toLowerCase();
      return !domain || !disposableDomains.includes(domain);
    }, { message: "No se permiten correos temporales o desechables." }),
  
  telefono: z
    .string()
    .min(1, { message: "Ingresa un número de WhatsApp." })
    .regex(/^[0-9+\s()-]+$/, { message: "El teléfono contiene caracteres inválidos." })
    .refine((val) => {
      const digits = val.replace(/\D/g, '');
      return digits.length >= 7 && digits.length <= 15;
    }, { message: "Ingresa un número de teléfono válido (mínimo 7 dígitos)." }),

  ciudad: z.string().min(2, { message: "Ingresa la ciudad desde donde nos visitas." }),

  excursionInteres: z.string().optional(),

  detallesAdicionales: z
    .string()
    .max(1000, { message: "El mensaje no puede superar los 1000 caracteres." })
    .optional(),
    
  // Campo trampa invisible para bots (Honeypot)
  websiteTrap: z.string().optional(),
});

export type ContactFormData = z.infer<typeof contactSchema>;
