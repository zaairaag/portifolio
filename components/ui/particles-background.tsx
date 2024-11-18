'use client';

import { useCallback } from "react";
import Particles from "react-tsparticles";
import type { Engine } from "tsparticles-engine";
import { loadFull } from "tsparticles";
import type { ISourceOptions } from "tsparticles-engine";

const particlesOptions: ISourceOptions = {
  fullScreen: {
    enable: false,
    zIndex: -1
  },
  background: {
    color: {
      value: "transparent",
    },
  },
  fpsLimit: 120,
  particles: {
    color: {
      value: "#64ffda",
    },
    links: {
      color: "#64ffda",
      distance: 150,
      enable: true,
      opacity: 0.4,
      width: 1,
    },
    move: {
      direction: "none",
      enable: true,
      outModes: {
        default: "bounce",
      },
      random: false,
      speed: 2,
      straight: false,
    },
    number: {
      density: {
        enable: true,
        area: 800,
      },
      value: 100,
    },
    opacity: {
      value: 0.5,
      animation: {
        enable: true,
        speed: 3,
        minimumValue: 0.1,
        sync: false,
      },
    },
    shape: {
      type: "circle",
    },
    size: {
      value: { min: 1, max: 5 },
      animation: {
        enable: true,
        speed: 20,
        minimumValue: 0.1,
        sync: false,
      },
    },
  },
  detectRetina: true,
  interactivity: {
    events: {
      onClick: {
        enable: true,
        mode: "push",
      },
      onHover: {
        enable: true,
        mode: "grab",
      },
      resize: true,
    },
    modes: {
      push: {
        quantity: 4,
      },
      grab: {
        distance: 140,
        links: {
          opacity: 1,
        },
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
    },
  },
};

export function ParticlesBackground() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      className="absolute inset-0 -z-10"
      init={particlesInit}
      options={particlesOptions}
    />
  );
}
