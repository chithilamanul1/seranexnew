// src/components/ParticlesComponent.js
import React from 'react';
import { Particles } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';

const options = {
  fpsLimit: 60,
  interactivity: {
    detectsOn: 'canvas',
    events: {
      onHover: { enable: true, mode: 'repulse' },
      resize: true
    },
    modes: { repulse: { distance: 120 } }
  },
  particles: {
    number: { value: 40, density: { enable: true, area: 800 } },
    color: { value: ['#60A5FA', '#38BDF8', '#7C3AED'] },
    shape: { type: 'circle' },
    opacity: { value: 0.75, random: { enable: true, minimumValue: 0.3 } },
    size: { value: { min: 1, max: 6 }, random: true },
    move: { enable: true, speed: 0.8, outModes: 'bounce' },
    links: { enable: true, distance: 150, color: '#2dd4bf', opacity: 0.12, width: 1 }
  }
};

export default function ParticlesComponent(props) {
  const init = async (engine) => {
    await loadSlim(engine);
  };

  return (
    <Particles
      id={props.id || 'tsparticles'}
      init={init}
      options={options}
      style={{ position: 'absolute', inset: 0, zIndex: 0 }}
    />
  );
}
