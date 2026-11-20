import { NextRequest, NextResponse } from "next/server";
import { verifyPortalToken, PORTAL_COOKIE_NAME } from "@/lib/analytics/auth";

/**
 * Middleware Edge-Safe para la protección de rutas /portal/*
 * Implementa el protocolo de autenticación Magic Link soberano (Zero-Friction).
 */
export async function middleware(req: NextRequest) {
  const { searchParams } = req.nextUrl;
  const tokenFromUrl = searchParams.get("token");
  const cookieToken = req.cookies.get(PORTAL_COOKIE_NAME)?.value;

  // CASO 1: Acceso mediante Magic Link por URL (?token=eyJ...)
  if (tokenFromUrl) {
    const isValid = await verifyPortalToken(tokenFromUrl);

    if (isValid) {
      // Sanitización de URL: eliminamos ?token= de la barra del navegador
      const cleanUrl = req.nextUrl.clone();
      cleanUrl.searchParams.delete("token");

      // Redirección 307 para registrar cookie httpOnly y limpiar URL
      const response = NextResponse.redirect(cleanUrl, 307);
      response.cookies.set({
        name: PORTAL_COOKIE_NAME,
        value: tokenFromUrl,
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        path: "/portal",
        maxAge: 60 * 60 * 24 * 30, // 30 días
      });

      return response;
    }

    // Token en URL inválido o expirado
    return NextResponse.redirect(new URL("/?auth=invalid_token", req.url));
  }

  // CASO 2: Navegación estándar respaldada por cookie de sesión httpOnly
  if (cookieToken) {
    const isSessionValid = await verifyPortalToken(cookieToken);
    if (isSessionValid) {
      return NextResponse.next();
    }
  }

  // CASO 3: Acceso no autorizado (sin token ni sesión válida)
  return NextResponse.redirect(new URL("/?auth=unauthorized_portal", req.url));
}

export const config = {
  matcher: ["/portal/:path*"],
};
