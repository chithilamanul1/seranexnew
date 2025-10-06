"use client";

import { useEffect, useRef } from "react";

const ParticlesComponent = ({ id = "tsparticles" }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    // Dynamically load tsparticles via CDN
    const script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/npm/tsparticles@2.11.1/tsparticles.min.js";
    script.async = true;
    script.onload = () => {
      if (window.tsParticles) {
        window.tsParticles.load(id, {
          fullScreen: { enable: true, zIndex: -1 },
          particles: {
            number: { value: 60 },
            color: { value: "#3B82F6" },
            shape: { type: "circle" },
            opacity: { value: 0.5 },
            size: { value: { min: 1, max: 3 } },
            move: { enable: true, speed: 1, direction: "none", outModes: "out" },
          },
          interactivity: {
            events: {
              onHover: { enable: true, mode: "repulse" },
              onClick: { enable: true, mode: "push" },
            },
            modes: {
              repulse: { distance: 100 },
              push: { quantity: 4 },
            },
          },
        });
      }
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [id]);

  return <div ref={containerRef} id={id}></div>;
};

export default ParticlesComponent;
