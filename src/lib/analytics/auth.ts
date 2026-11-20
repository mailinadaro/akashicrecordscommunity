import { jwtVerify, SignJWT } from "jose";

export const PORTAL_COOKIE_NAME = "portal_session";

/**
 * Clave secreta para firma criptográfica HS256.
 * En producción se configura mediante la variable de entorno PORTAL_JWT_SECRET.
 */
function getSecretKey(): Uint8Array {
  const secret =
    process.env.PORTAL_JWT_SECRET ||
    "portal_jwt_secret_sovereign_access_key_min32chars";
  return new TextEncoder().encode(secret);
}

export interface PortalTokenPayload {
  readonly authorized: boolean;
  readonly issuedFor: string;
}

/**
 * Valida criptográficamente el token JWT (compatible con Edge Runtime).
 *
 * @param token Token JWT recibido por parámetro o cookie
 * @returns boolean indicando si la firma es válida y el token no ha expirado
 */
export async function verifyPortalToken(token: string): Promise<boolean> {
  if (!token || typeof token !== "string") {
    return false;
  }

  try {
    const { payload } = await jwtVerify(token.trim(), getSecretKey());
    return Boolean(payload?.authorized);
  } catch {
    return false;
  }
}

/**
 * Genera un Magic Link firmado con expiración configurable (por defecto 30 días).
 *
 * @param issuedFor Destinatario o motivo de la emisión (ej: "directorio")
 * @param duration Duración válida del token (formato 'jose', ej: "30d")
 * @returns Token JWT firmado con algoritmo HS256
 */
export async function createPortalToken(
  issuedFor = "directorio",
  duration = "30d"
): Promise<string> {
  return await new SignJWT({ authorized: true, issuedFor })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime(duration)
    .sign(getSecretKey());
}
