import { test, expect } from "@playwright/test";

test.describe("RouteMapSection Full Canvas Immersive Composition (200vh Sticky + Topo Clip)", () => {
  test.beforeEach(async ({ page }) => {
    // Viewport estricto de escritorio 1440x900
    await page.setViewportSize({ width: 1440, height: 900 });
  });

  test("Protocolo de validación 200vh Sticky, Topo Clip, Altimetría reactiva, HUD y Visor fotográfico", async ({
    page,
  }) => {
    await page.goto("/excursiones/salinas-grandes", {
      waitUntil: "networkidle",
    });

    const infoSection = page.locator("#info");
    await expect(infoSection).toBeAttached();

    // -------------------------------------------------------------------------
    // 1. Altura expandida de 200vh (>= 1800px en viewport 900px) y control overflow
    // -------------------------------------------------------------------------
    const sectionBox = await infoSection.boundingBox();
    expect(sectionBox).not.toBeNull();
    expect(sectionBox?.height ?? 0).toBeGreaterThanOrEqual(1800);

    const overflowCheck = await infoSection.evaluate((el) => {
      const style = window.getComputedStyle(el);
      return {
        overflowX: style.overflowX,
        overflowY: style.overflowY,
      };
    });
    // overflowX debe ser clip o hidden para evitar scroll horizontal
    expect(["clip", "hidden"]).toContain(overflowCheck.overflowX);

    // -------------------------------------------------------------------------
    // 2. Contenedor Sticky Viewport (100vh locked at top: 0)
    // -------------------------------------------------------------------------
    const stickyViewport = infoSection.locator("[data-sticky-viewport], .lg\\:sticky, .sticky").first();
    await expect(stickyViewport).toBeVisible();

    const stickyStyles = await stickyViewport.evaluate((el) => {
      const style = window.getComputedStyle(el);
      return {
        position: style.position,
        top: style.top,
        height: el.clientHeight,
        overflowY: style.overflowY,
      };
    });
    expect(stickyStyles.position).toBe("sticky");
    expect(stickyStyles.top).toBe("0px");
    expect(stickyStyles.height).toBe(900); // 100vh en viewport 900px
    expect(stickyStyles.overflowY).toBe("hidden");

    // Scroll inicial hasta el tope de la sección (targetY)
    const targetY = await page.evaluate(() => {
      const info = document.querySelector("#info") as HTMLElement;
      const y = info.getBoundingClientRect().top + window.scrollY;
      const win = window as any;
      if (win.lenis && typeof win.lenis.scrollTo === "function") {
        win.lenis.scrollTo(y, { immediate: true });
      } else {
        window.scrollTo({ top: y, behavior: "instant" });
      }
      return y;
    });
    await page.waitForTimeout(600); // Estabilización ScrollTrigger

    // -------------------------------------------------------------------------
    // 3. Fondo Escénico Total SVG, Máscara Topográfica y Cámara 2D
    // -------------------------------------------------------------------------
    const cameraEl = page.locator("[data-map-camera]");
    await expect(cameraEl).toBeVisible();

    const svgMap = infoSection.locator("svg").first();
    await expect(svgMap).toBeVisible();

    // Verificación de la máscara topográfica en el SVG
    const clipPathEl = svgMap.locator("#jujuy-boundary-clip");
    await expect(clipPathEl).toBeAttached();

    const topoImg = svgMap.locator("image").first();
    await expect(topoImg).toBeAttached();
    const imgSrc = await topoImg.getAttribute("href");
    expect(imgSrc).toContain("jujuy-topo-relief.webp");

    const imgClipPath = await topoImg.getAttribute("clip-path");
    expect(imgClipPath).toContain("jujuy-boundary-clip");

    // Verificación de estado inicial de la cámara 2D
    const initialCameraTransform = await cameraEl.evaluate((el) => {
      return window.getComputedStyle(el).transform;
    });
    expect(initialCameraTransform).not.toBe("none");

    // -------------------------------------------------------------------------
    // 4. Ficha Técnica HUD Flotante (Glass White Desert) con Tipografía Refinada
    // -------------------------------------------------------------------------
    const hud = page.locator("[data-specs-hud]");
    await expect(hud).toBeVisible();

    const hudBox = await hud.boundingBox();
    expect(hudBox).not.toBeNull();
    // Anclado a la izquierda con ancho ampliado de alta gama (440px)
    expect(hudBox?.x ?? 0).toBeLessThanOrEqual(140);
    expect(hudBox?.width ?? 0).toBeGreaterThanOrEqual(420);
    expect(hudBox?.width ?? 0).toBeLessThanOrEqual(460);

    // Cero presencia de "LIVE"
    await expect(hud.getByText("LIVE")).toHaveCount(0);

    // Verificación de los 7 bloques de metadatos
    await expect(hud.getByText("Duración", { exact: true })).toBeVisible();
    await expect(hud.getByText("9,5 – 10 horas")).toBeVisible();
    await expect(hud.getByText("Salida y regreso", { exact: true })).toBeVisible();
    await expect(hud.getByText("San Salvador de Jujuy")).toBeVisible();
    await expect(hud.getByText("Modalidad", { exact: true })).toBeVisible();
    await expect(hud.getByText("Excursión privada")).toBeVisible();
    await expect(hud.getByText("Pasajeros", { exact: true })).toBeVisible();
    await expect(hud.getByText("Hasta 4 personas")).toBeVisible();
    await expect(hud.getByText("Altitud actual", { exact: true })).toBeVisible();
    await expect(hud.getByText("Km Recorridos", { exact: true })).toBeVisible();
    await expect(hud.getByText("260 km")).toBeVisible();
    await expect(hud.getByText("Horario Excursión", { exact: true })).toBeVisible();
    await expect(hud.getByText("08:00 – 18:00 hs")).toBeVisible();

    // Verificación del contador de altitud inicial (1.259 m en SS Jujuy) y color ochre
    const altitudeEl = page.locator("[data-altitude-value]");
    await expect(altitudeEl).toBeVisible();
    const initialAltText = await altitudeEl.innerText();
    expect(initialAltText).toContain("1.259");

    const altitudeColor = await altitudeEl.evaluate((el) => {
      return window.getComputedStyle(el).color;
    });
    expect(altitudeColor).not.toBe("rgb(255, 255, 255)");

    // -------------------------------------------------------------------------
    // 5. Visor Fotográfico Flotante (Contextual Waypoint Preview)
    // -------------------------------------------------------------------------
    const photoPreview = page.locator("[data-waypoint-preview]");
    await expect(photoPreview).toBeVisible();

    const photoBox = await photoPreview.boundingBox();
    expect(photoBox).not.toBeNull();
    // Anclado a la derecha
    expect(photoBox?.x ?? 0).toBeGreaterThanOrEqual(950);

    // Foto inicial: San Salvador de Jujuy activa (opacity: 1), Salinas oculta (opacity: 0)
    const photoSS = page.locator('[data-waypoint-photo="ss-jujuy"]');
    const photoSalinas = page.locator('[data-waypoint-photo="salinas-grandes"]');
    await expect(photoSS).toBeVisible();

    const initialSSOpacity = await photoSS.evaluate((el) => {
      return parseFloat(window.getComputedStyle(el).opacity || "0");
    });
    expect(initialSSOpacity).toBeGreaterThanOrEqual(0.9);

    const initialSalinasOpacity = await photoSalinas.evaluate((el) => {
      return parseFloat(window.getComputedStyle(el).opacity || "0");
    });
    expect(initialSalinasOpacity).toBeLessThanOrEqual(0.1);

    // Hito de San Salvador de Jujuy visible desde frame 0
    const ssJujuyMarker = page.locator('[data-marker="ss-jujuy"]');
    await expect(ssJujuyMarker).toBeVisible();

    // Snapshot 1: Frame 0 (Inicio de la expedición en San Salvador de Jujuy)
    await page.screenshot({
      path: "C:/Users/maili/.gemini/antigravity-cli/brain/a382b447-90ca-49fa-a429-4e779a36e2a5/route_map_frame_0.png",
    });

    // -------------------------------------------------------------------------
    // 6. Cinemática: Trazo y Baliza inicial en San Salvador
    // -------------------------------------------------------------------------
    const routePath = page.locator("[data-route-path]");
    await expect(routePath).toBeAttached();

    const initialMetrics = await routePath.evaluate((pathEl: SVGPathElement) => {
      const length = pathEl.getTotalLength();
      const style = window.getComputedStyle(pathEl);
      return {
        length,
        strokeDashoffset: parseFloat(style.strokeDashoffset || "0"),
      };
    });
    expect(initialMetrics.length).toBeGreaterThan(200);
    expect(
      Math.abs(initialMetrics.strokeDashoffset - initialMetrics.length)
    ).toBeLessThanOrEqual(5);

    const beacon = page.locator("[data-route-beacon]");
    await expect(beacon).toBeAttached();
    const initialBeaconTransform = await beacon.evaluate((el) => {
      return el.getAttribute("transform") || "";
    });
    expect(initialBeaconTransform).toContain("translate(499.13");
    expect(initialBeaconTransform).toContain("632.58");

    // -------------------------------------------------------------------------
    // 7. Scroll Intermedio: Ascenso a Cuesta de Lipán (Scroll a 50% de 200vh)
    // -------------------------------------------------------------------------
    await page.evaluate((startY) => {
      const win = window as any;
      const midScrollY = startY + 500;
      if (win.lenis && typeof win.lenis.scrollTo === "function") {
        win.lenis.scrollTo(midScrollY, { immediate: true });
      } else {
        window.scrollTo({ top: midScrollY, behavior: "instant" });
      }
    }, targetY);
    await page.waitForTimeout(600);

    // Snapshot 2: Mid-scroll (Cuesta de Lipán / Alta Montaña)
    await page.screenshot({
      path: "C:/Users/maili/.gemini/antigravity-cli/brain/a382b447-90ca-49fa-a429-4e779a36e2a5/route_map_frame_mid.png",
    });

    const midMetrics = await routePath.evaluate((pathEl: SVGPathElement) => {
      const style = window.getComputedStyle(pathEl);
      return {
        strokeDashoffset: parseFloat(style.strokeDashoffset || "0"),
      };
    });
    expect(midMetrics.strokeDashoffset).toBeLessThan(
      initialMetrics.strokeDashoffset
    );

    const midBeaconTransform = await beacon.evaluate((el) => {
      return el.getAttribute("transform") || "";
    });
    expect(midBeaconTransform).not.toBe(initialBeaconTransform);

    // La altitud debe haber aumentado significativamente (> 2.000 msnm)
    const midAltText = await altitudeEl.innerText();
    const midAltMeters = parseInt(midAltText.replace(/\D/g, ""), 10);
    expect(midAltMeters).toBeGreaterThan(2000);

    // La cámara debe haberse desplazado respecto a la posición inicial
    const midCameraTransform = await cameraEl.evaluate((el) => {
      return window.getComputedStyle(el).transform;
    });
    expect(midCameraTransform).not.toBe(initialCameraTransform);

    // -------------------------------------------------------------------------
    // 8. Scroll Final: Llegada a Salinas Grandes (Scroll al final de 200vh)
    // -------------------------------------------------------------------------
    await page.evaluate((startY) => {
      const win = window as any;
      const endScrollY = startY + 950;
      if (win.lenis && typeof win.lenis.scrollTo === "function") {
        win.lenis.scrollTo(endScrollY, { immediate: true });
      } else {
        window.scrollTo({ top: endScrollY, behavior: "instant" });
      }
    }, targetY);
    await page.waitForTimeout(700);

    // Snapshot 3: Final frame (Salinas Grandes)
    await page.screenshot({
      path: "C:/Users/maili/.gemini/antigravity-cli/brain/a382b447-90ca-49fa-a429-4e779a36e2a5/route_map_frame_end.png",
    });

    const endMetrics = await routePath.evaluate((pathEl: SVGPathElement) => {
      const style = window.getComputedStyle(pathEl);
      return {
        strokeDashoffset: parseFloat(style.strokeDashoffset || "0"),
      };
    });
    expect(endMetrics.strokeDashoffset).toBeLessThan(midMetrics.strokeDashoffset);
    expect(endMetrics.strokeDashoffset).toBeLessThan(50);

    const endBeaconTransform = await beacon.evaluate((el) => {
      return el.getAttribute("transform") || "";
    });
    expect(endBeaconTransform).toContain("translate(340.");
    expect(endBeaconTransform).toContain("470.");

    // Altitud final debe reflejar el altiplano de Salinas (~3.450 m)
    const endAltText = await altitudeEl.innerText();
    const endAltMeters = parseInt(endAltText.replace(/\D/g, ""), 10);
    expect(endAltMeters).toBeGreaterThanOrEqual(3400);
    expect(endAltMeters).toBeLessThanOrEqual(3600);

    // Visor fotográfico final: la foto de Salinas Grandes debe estar activa
    const endSalinasOpacity = await photoSalinas.evaluate((el) => {
      return parseFloat(window.getComputedStyle(el).opacity || "0");
    });
    expect(endSalinasOpacity).toBeGreaterThanOrEqual(0.7);

    // Hito de Salinas Grandes activo
    const salinasMarker = page.locator('[data-marker="salinas-grandes"]');
    await expect(salinasMarker).toBeVisible();
    const salinasOpacity = await salinasMarker.evaluate((el) => {
      return parseFloat(window.getComputedStyle(el).opacity || "0");
    });
    expect(salinasOpacity).toBeGreaterThanOrEqual(0.9);
  });

  test("Protocolo mobile: navegación fluida sin scroll-trap y componentes apilados sin oclusión", async ({
    page,
  }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto("/excursiones/salinas-grandes", {
      waitUntil: "networkidle",
    });

    const infoSection = page.locator("#info");
    await expect(infoSection).toBeAttached();

    const hud = page.locator("[data-specs-hud]");
    await expect(hud).toBeVisible();

    const photoPreview = page.locator("[data-waypoint-preview]");
    await expect(photoPreview).toBeVisible();

    const mapCamera = page.locator("[data-map-camera]");
    await expect(mapCamera).toBeVisible();

    // Verificamos que el contenedor en mobile NO use pin sticky de pantalla completa
    const viewportWrapper = infoSection.locator("[data-sticky-viewport]");
    const mobilePos = await viewportWrapper.evaluate(
      (el) => window.getComputedStyle(el).position
    );
    expect(mobilePos).toBe("relative");
  });

  test("Protocolo multi-excursión dinámico: resuelve mapas, hitos y telemetría según slug", async ({
    page,
  }) => {
    // 1. Verificar Maimará y Tilcara
    await page.goto("/excursiones/maimara-tilcara", {
      waitUntil: "networkidle",
    });
    const maimaraInfo = page.locator("#info");
    await expect(maimaraInfo).toBeAttached();
    await expect(maimaraInfo.locator("[data-specs-hud]")).toBeVisible();
    await expect(maimaraInfo.getByText("175 km")).toBeVisible();
    await expect(
      maimaraInfo.locator('[data-waypoint-photo="tilcara"]')
    ).toBeAttached();

    // 2. Verificar Humahuaca y Hornocal
    await page.goto("/excursiones/humahuaca-hornocal", {
      waitUntil: "networkidle",
    });
    const hornocalInfo = page.locator("#info");
    await expect(hornocalInfo).toBeAttached();
    await expect(hornocalInfo.locator("[data-specs-hud]")).toBeVisible();
    await expect(hornocalInfo.getByText("440 km")).toBeVisible();
    await expect(
      hornocalInfo.locator('[data-waypoint-photo="hornocal"]')
    ).toBeAttached();

    // 3. Verificar Carnaval de Jujuy 2027 (calibración Purmamarca -> Abra Pampa)
    await page.goto("/excursiones/carnaval-2027", {
      waitUntil: "networkidle",
    });
    const carnavalInfo = page.locator("#info");
    await expect(carnavalInfo).toBeAttached();
    await expect(carnavalInfo.locator("[data-specs-hud]")).toBeVisible();
    await expect(carnavalInfo.getByText("250 km")).toBeVisible();
    await expect(
      carnavalInfo.locator('[data-waypoint-photo="abra-pampa"]')
    ).toBeAttached();
    await expect(
      carnavalInfo.locator('[data-waypoint-photo="maimara"]')
    ).toBeAttached();
  });
});
