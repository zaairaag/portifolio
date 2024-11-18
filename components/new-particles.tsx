'use client';

import { useCallback } from "react";
import { Particles } from "@tsparticles/react";
import type { Engine } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";

export default function NewParticles() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: false },
        background: {
          color: {
            value: "transparent",
          },
        },
        fpsLimit: 120,
        particles: {
          color: {
            value: "#ff0000",
          },
          links: {
            color: "#ff0000",
            distance: 150,
            enable: true,
            opacity: 1,
            width: 10,
          },
          move: {
            enable: true,
            speed: 3,
          },
          size: {
            value: { min: 15, max: 30 },
          },
          opacity: {
            value: 1
          }
        }
      }}
      className="w-full h-full"
    />
  );
}
