"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import type {
  RouteMilestone,
  RouteWaypointPhoto,
  CameraKeyframe,
} from "@/types/cartography";
import {
  interpolateElevation,
  formatAltitude,
} from "@/lib/cartography-registry";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export { formatAltitude };

export interface RouteMapKinematicWrapperProps {
  children: React.ReactNode;
  milestones: RouteMilestone[];
  waypoints: RouteWaypointPhoto[];
  cameraKeyframes?: CameraKeyframe[];
  initialAltitude?: number;
}

export default function RouteMapKinematicWrapper({
  children,
  milestones,
  waypoints,
  cameraKeyframes = [],
  initialAltitude,
}: RouteMapKinematicWrapperProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const container = containerRef.current;
      if (!container) return;

      const root = container.closest<HTMLElement>("section") || container;
      const path = root.querySelector<SVGPathElement>("[data-route-path]");
      const beacon = root.querySelector<SVGGElement>("[data-route-beacon]");
      const camera = root.querySelector<HTMLElement>("[data-map-camera]");
      const altitudeEl = root.querySelector<HTMLElement>("[data-altitude-value]");

      if (!path) return;

      const totalLength = path.getTotalLength() || 286.6;
      const mm = gsap.matchMedia();

      const activeMilestones = milestones;
      const activeWaypoints = waypoints;
      const activeKeyframes = cameraKeyframes;
      const baseAltitude = initialAltitude ?? activeMilestones[0]?.altitude ?? 0;

      /**
       * Calcula de forma adaptativa el rango de progreso [start, start + duration]
       * en el que se ejecuta el crossfade suave de la foto index-1 a index.
       */
      function getWaypointTriggerProgress(index: number): { start: number; duration: number } {
        if (index <= 0) return { start: 0, duration: 0.07 };
        const currWp = activeWaypoints[index];
        const matchedMilestone = activeMilestones.find((m) => m.id === currWp.id);
        const currP = matchedMilestone
          ? matchedMilestone.progress
          : index / (activeWaypoints.length - 1);

        const prevWp = activeWaypoints[index - 1];
        const prevMilestone = activeMilestones.find((m) => m.id === prevWp.id);
        const prevP = prevMilestone
          ? prevMilestone.progress
          : (index - 1) / (activeWaypoints.length - 1);

        const span = currP - prevP;
        const isLast = index === activeWaypoints.length - 1;
        const duration = Math.min(0.08, Math.max(0.06, span * 0.25));
        const leadTime = isLast ? Math.min(0.18, span * 0.5) : Math.min(0.11, span * 0.4);
        const start = Math.max(prevP + 0.02, currP - leadTime);
        return { start, duration };
      }

      // =========================================================================
      // 1. DESKTOP KINEMATICS (>= 1024px)
      // Cámara 2D + Altimetría viva + Crossfades fotográficos + Trazado milimétrico
      // =========================================================================
      mm.add("(min-width: 1024px)", () => {
        // Inicializar trazado
        gsap.set(path, {
          strokeDasharray: totalLength,
          strokeDashoffset: totalLength,
        });

        // Inicializar cámara 2D con el primer keyframe
        if (camera && activeKeyframes.length > 0) {
          const kf0 = activeKeyframes[0];
          gsap.set(camera, {
            scale: kf0.scale,
            xPercent: kf0.xPercent,
            yPercent: kf0.yPercent,
            transformOrigin: "center center",
          });
        }

        // Posición inicial del beacon en el hito 0
        if (beacon) {
          const startPoint = path.getPointAtLength(0);
          beacon.setAttribute(
            "transform",
            `translate(${startPoint.x}, ${startPoint.y})`
          );
        }

        // Inicializar altímetro
        if (altitudeEl) {
          altitudeEl.textContent = formatAltitude(baseAltitude);
        }

        // Inicializar visor fotográfico (primera foto activa, resto opacas)
        activeWaypoints.forEach((wp, index) => {
          const photoEl = root.querySelector<HTMLElement>(
            `[data-waypoint-photo="${wp.id}"]`
          );
          if (photoEl) {
            gsap.set(photoEl, { opacity: index === 0 ? 1 : 0 });
          }
        });

        // Estado inicial de los hitos
        activeMilestones.forEach(({ id, progress }) => {
          const markerEl = root.querySelector(`[data-marker="${id}"]`);
          if (markerEl) {
            gsap.set(markerEl, {
              opacity: progress === 0 ? 1 : 0.3,
              scale: 1,
            });
          }
        });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: root,
            start: "top top",
            end: "bottom bottom",
            scrub: 0.6,
            invalidateOnRefresh: true,
          },
        });

        // 1. Keyframes de cámara 2D dinámicos
        if (camera && activeKeyframes.length > 1) {
          for (let i = 1; i < activeKeyframes.length; i++) {
            const prevKf = activeKeyframes[i - 1];
            const kf = activeKeyframes[i];
            const dur = kf.duration ?? Math.max(0.01, kf.progress - prevKf.progress);
            tl.to(
              camera,
              {
                scale: kf.scale,
                xPercent: kf.xPercent,
                yPercent: kf.yPercent,
                ease: "power1.inOut",
                duration: dur,
              },
              prevKf.progress
            );
          }
        }

        // 2. Trazo continuo de la ruta
        tl.to(
          path,
          {
            strokeDashoffset: 0,
            ease: "none",
            duration: 1,
          },
          0
        );

        // 3. Baliza viva + Altimetría reactiva interpolada en tiempo real
        const proxy = { length: 0 };
        tl.to(
          proxy,
          {
            length: totalLength,
            ease: "none",
            duration: 1,
            onUpdate: () => {
              const currentLength = proxy.length;
              if (beacon) {
                const pt = path.getPointAtLength(currentLength);
                beacon.setAttribute("transform", `translate(${pt.x}, ${pt.y})`);
              }
              if (altitudeEl) {
                const progress = totalLength > 0 ? currentLength / totalLength : 0;
                altitudeEl.textContent = formatAltitude(
                  interpolateElevation(activeMilestones, progress)
                );
              }
            },
          },
          0
        );

        // 4. Crossfade dinámico de fotos contextuales
        for (let i = 1; i < activeWaypoints.length; i++) {
          const prevWp = activeWaypoints[i - 1];
          const currWp = activeWaypoints[i];
          const prevEl = root.querySelector<HTMLElement>(
            `[data-waypoint-photo="${prevWp.id}"]`
          );
          const currEl = root.querySelector<HTMLElement>(
            `[data-waypoint-photo="${currWp.id}"]`
          );

          if (prevEl && currEl) {
            const { start, duration } = getWaypointTriggerProgress(i);
            tl.to(prevEl, { opacity: 0, duration, ease: "power1.inOut" }, start);
            tl.to(currEl, { opacity: 1, duration, ease: "power1.inOut" }, start);
          }
        }

        // 5. Destellos de activación de hitos geográficos dinámicos
        activeMilestones.forEach(({ id, progress }) => {
          const markerEl = root.querySelector(`[data-marker="${id}"]`);
          if (!markerEl || progress === 0) return;

          tl.to(
            markerEl,
            {
              opacity: 1,
              scale: 1.25,
              duration: 0.08,
              transformOrigin: "center",
              ease: "power2.out",
            },
            Math.max(0, progress - 0.04)
          );

          tl.to(
            markerEl,
            {
              scale: 1,
              duration: 0.08,
              transformOrigin: "center",
              ease: "power2.inOut",
            },
            Math.min(0.99, progress + 0.04)
          );
        });

        ScrollTrigger.refresh();
      });

      // =========================================================================
      // 2. MOBILE KINEMATICS (< 1024px)
      // Adaptado a pantalla vertical con paneo suave sin atrapamiento de scroll
      // =========================================================================
      mm.add("(max-width: 1023px)", () => {
        gsap.set(path, {
          strokeDasharray: totalLength,
          strokeDashoffset: totalLength,
        });

        if (camera) {
          gsap.set(camera, {
            scale: 1,
            xPercent: 0,
            yPercent: 0,
            transformOrigin: "center center",
          });
        }

        if (beacon) {
          const startPoint = path.getPointAtLength(0);
          beacon.setAttribute(
            "transform",
            `translate(${startPoint.x}, ${startPoint.y})`
          );
        }

        if (altitudeEl) {
          altitudeEl.textContent = formatAltitude(baseAltitude);
        }

        activeWaypoints.forEach((wp, index) => {
          const photoEl = root.querySelector<HTMLElement>(
            `[data-waypoint-photo="${wp.id}"]`
          );
          if (photoEl) {
            gsap.set(photoEl, { opacity: index === 0 ? 1 : 0 });
          }
        });

        activeMilestones.forEach(({ id, progress }) => {
          const markerEl = root.querySelector(`[data-marker="${id}"]`);
          if (markerEl) {
            gsap.set(markerEl, {
              opacity: progress === 0 ? 1 : 0.3,
              scale: 1,
            });
          }
        });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: root,
            start: "top 75%",
            end: "bottom 25%",
            scrub: 0.6,
            invalidateOnRefresh: true,
          },
        });

        if (camera) {
          tl.to(
            camera,
            {
              scale: 1.08,
              xPercent: 2,
              yPercent: -2,
              ease: "power1.inOut",
              duration: 1,
            },
            0
          );
        }

        tl.to(
          path,
          {
            strokeDashoffset: 0,
            ease: "none",
            duration: 1,
          },
          0
        );

        const proxy = { length: 0 };
        tl.to(
          proxy,
          {
            length: totalLength,
            ease: "none",
            duration: 1,
            onUpdate: () => {
              if (beacon) {
                const pt = path.getPointAtLength(proxy.length);
                beacon.setAttribute("transform", `translate(${pt.x}, ${pt.y})`);
              }
              if (altitudeEl) {
                const progress = totalLength > 0 ? proxy.length / totalLength : 0;
                altitudeEl.textContent = formatAltitude(
                  interpolateElevation(activeMilestones, progress)
                );
              }
            },
          },
          0
        );

        // Crossfade fotos mobile dinámicas
        for (let i = 1; i < activeWaypoints.length; i++) {
          const prevWp = activeWaypoints[i - 1];
          const currWp = activeWaypoints[i];
          const prevEl = root.querySelector<HTMLElement>(
            `[data-waypoint-photo="${prevWp.id}"]`
          );
          const currEl = root.querySelector<HTMLElement>(
            `[data-waypoint-photo="${currWp.id}"]`
          );

          if (prevEl && currEl) {
            const { start, duration } = getWaypointTriggerProgress(i);
            tl.to(prevEl, { opacity: 0, duration: Math.max(0.08, duration) }, start);
            tl.to(currEl, { opacity: 1, duration: Math.max(0.08, duration) }, start);
          }
        }

        activeMilestones.forEach(({ id, progress }) => {
          const markerEl = root.querySelector(`[data-marker="${id}"]`);
          if (!markerEl || progress === 0) return;

          tl.to(
            markerEl,
            {
              opacity: 1,
              scale: 1.2,
              duration: 0.1,
              transformOrigin: "center",
            },
            Math.max(0, progress - 0.05)
          );
        });

        ScrollTrigger.refresh();
      });

      return () => {
        mm.revert();
      };
    },
    { scope: containerRef, dependencies: [milestones, waypoints, cameraKeyframes, initialAltitude] }
  );

  return (
    <div
      ref={containerRef}
      data-sticky-viewport
      className="relative lg:sticky top-0 w-full h-auto lg:h-[100vh] overflow-visible lg:overflow-hidden flex flex-col lg:flex-row items-center justify-center select-none gap-6 sm:gap-8 lg:gap-0 px-4 sm:px-6 lg:px-0"
    >
      {children}
    </div>
  );
}