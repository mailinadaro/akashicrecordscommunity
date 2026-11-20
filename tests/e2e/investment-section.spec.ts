import { test, expect } from "@playwright/test";

test.describe("InvestmentSection (Sección 8: Inversión & Precios)", () => {
  test("Protocolo Desktop: Validación de estructura asimétrica, Glassmorphism, inclusiones y CTA", async ({
    page,
  }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto("/excursiones/salinas-grandes", {
      waitUntil: "networkidle",
    });

    const investmentSection = page.locator("#valor");
    await expect(investmentSection).toBeAttached();
    await expect(investmentSection).toBeVisible();

    // 1. Cabecera y Título Editorial
    await expect(
      investmentSection.getByText("Inversión de la Expedición")
    ).toBeVisible();
    await expect(
      investmentSection.getByText("EXPEDICIÓN PRIVADA // TARIFA INTEGRAL")
    ).toBeVisible();

    // 2. Columna Izquierda: Inclusiones de Alta Gama
    await expect(
      investmentSection.getByText("SERVICIOS INCLUIDOS EN LA EXPERIENCIA")
    ).toBeVisible();
    await expect(
      investmentSection.getByText("Vehículo 4x4 de alta gama exclusivo")
    ).toBeVisible();
    await expect(
      investmentSection.getByText("Guía-anfitrión especializado")
    ).toBeVisible();
    await expect(
      investmentSection.getByText("Asistencia médica y oxigenoterapia")
    ).toBeVisible();

    // 3. Columna Derecha: Tarjeta Glass de Precio y Resumen
    const glassCard = investmentSection.locator("aside").first();
    await expect(glassCard).toBeVisible();

    // Verificación de valor numérico y moneda
    await expect(glassCard.getByText("USD", { exact: true })).toBeVisible();
    await expect(glassCard.getByText("480")).toBeVisible();
    await expect(glassCard.getByText("COTIZACIÓN PRIVADA")).toBeVisible();
    await expect(glassCard.getByText("HASTA 4 PAX")).toBeVisible();

    // 4. Botón de Acción Principal (CTA)
    const ctaButton = glassCard.getByRole("link", {
      name: /Consultar Disponibilidad/i,
    });
    await expect(ctaButton).toBeVisible();
    const ctaHref = await ctaButton.getAttribute("href");
    expect(ctaHref).toContain("/contacto?interes=salinas-grandes");
  });

  test("Protocolo Mobile: Adaptación fluida sin desbordes y lectura apilada", async ({
    page,
  }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto("/excursiones/salinas-grandes", {
      waitUntil: "networkidle",
    });

    const investmentSection = page.locator("#valor");
    await expect(investmentSection).toBeAttached();
    await expect(investmentSection).toBeVisible();

    const title = investmentSection.getByText("Inversión de la Expedición");
    await expect(title).toBeVisible();

    const glassCard = investmentSection.locator("aside").first();
    await expect(glassCard).toBeVisible();

    const ctaButton = glassCard.getByRole("link", {
      name: /Consultar Disponibilidad/i,
    });
    await expect(ctaButton).toBeVisible();
  });
});
