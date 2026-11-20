// scripts/generate-portal-link.mjs
import { SignJWT } from "jose";
import fs from "fs";
import path from "path";

let secret = "portal_jwt_secret_sovereign_access_key_min32chars";

// Intentar leer la clave secreta desde .env.local
const envPath = path.resolve(process.cwd(), ".env.local");
if (fs.existsSync(envPath)) {
  const envContent = fs.readFileSync(envPath, "utf-8");
  const match = envContent.match(/PORTAL_JWT_SECRET=(.*)/);
  if (match && match[1]) {
    secret = match[1].trim();
  }
}

const key = new TextEncoder().encode(secret);
const token = await new SignJWT({ authorized: true, issuedFor: "directorio" })
  .setProtectedHeader({ alg: "HS256" })
  .setIssuedAt()
  .setExpirationTime("30d")
  .sign(key);

// Detectar si se pasó el argumento '--prod' o 'prod' por consola
const args = process.argv.slice(2);
const isProd = args.includes("--prod") || args.includes("prod");

// Definir la URL base dinámicamente según el entorno deseado
const baseUrl = isProd 
  ? "https://excursiones.adaroviajes.com" 
  : (process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000");

const url = `${baseUrl}/portal?token=${token}`;

console.log("\n==================================================");
console.log(`✨ MAGIC LINK GENERADO (${isProd ? "PRODUCCIÓN 🌐" : "LOCAL 🏠"})`);
console.log("==================================================");
console.log(`🔗 \x1b[36m${url}\x1b[0m`);
console.log("==================================================\n");