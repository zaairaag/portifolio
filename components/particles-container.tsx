'use client';

import { useCallback } from "react";
import { Particles } from "@tsparticles/react";
import type { Engine } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";

export default function ParticlesContainer() {
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
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: ["#00ff00", "#00ffff", "#ff00ff", "#ff0000", "#ffff00"],
          },
          links: {
            color: "#00ff00",
            distance: 150,
            enable: true,
            opacity: 1,
            width: 6,
            triangles: {
              enable: true,
              opacity: 0.5,
            }
          },
          collisions: {
            enable: true,
          },
          move: {
            directions: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: false,
            speed: 3,
            straight: false,
            attract: {
              enable: true,
              rotateX: 600,
              rotateY: 1200
            }
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 100,
          },
          opacity: {
            value: 1,
            animation: {
              enable: true,
              speed: 1,
              minimumValue: 0.9,
              sync: false
            }
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 10, max: 20 },
            animation: {
              enable: true,
              speed: 3,
              minimumValue: 8,
              sync: false
            }
          },
          twinkle: {
            particles: {
              enable: true,
              color: "#00ff00",
              frequency: 1,
              opacity: 1
            },
            lines: {
              enable: true,
              frequency: 1,
              opacity: 1
            }
          },
          zIndex: {
            value: 30,
            opacityRate: 1
          },
          life: {
            duration: {
              sync: false,
              value: 5
            },
            count: 1,
            delay: {
              random: {
                enable: true,
                minimumValue: 0.2
              }
            }
          },
          rotate: {
            random: {
              enable: true,
              minimumValue: 0
            },
            animation: {
              enable: true,
              speed: 5,
              sync: false
            },
            direction: "random"
          },
          shadow: {
            enable: true,
            color: "#000",
            blur: 5,
            offset: {
              x: 3,
              y: 3
            }
          }
        },
        detectRetina: true,
      }}
      className="w-full h-full"
    />
  );
}
