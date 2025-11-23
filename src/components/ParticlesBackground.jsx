import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

export default function ParticlesBackground() {
  const customInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={customInit}
      options={{
        fullScreen: { enable: false },
        style: { position: "fixed", inset: 0, zIndex: -9 },
        particles: {
          number: { value: 45 },
          size: { value: 2.2 },
          opacity: { value: 0.35 },
          color: { value: ["#b47bff", "#73ddff", "#ffffff"] },
          shape: { type: "circle" },
          move: { enable: true, speed: 0.7 },
          links: {
            enable: true,
            color: "#8a5bff",
            distance: 135,
            opacity: 0.37,
            width: 1,
          },
        },
        detectRetina: true,
      }}
    />
  );
}
