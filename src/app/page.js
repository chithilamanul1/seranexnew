// src/app/page.js
'use client';

import dynamic from 'next/dynamic';
import Link from 'next/link';
import { useEffect, useRef } from 'react';
const ParticlesComponent = dynamic(() => import('../components/ParticlesComponent'), { ssr: false });

const useScrollReveal = (ref) => {
  useEffect(() => {
    if (!ref?.current) return;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('is-visible');
      });
    }, { threshold: 0.12 });
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref]);
};

const Service = ({ title, text }) => (
  <div className="card p-6 rounded-2xl">
    <h3 className="text-lg font-semibold text-white">{title}</h3>
    <p className="mt-2 text-white/70 text-sm">{text}</p>
  </div>
);

export default function Home() {
  const servicesRef = useRef(null);
  useScrollReveal(servicesRef);

  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <ParticlesComponent />
      </div>

      <section className="relative z-10 min-h-screen flex items-center">
        <div className="container mx-auto px-6 py-28">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight text-white">
                Clean. Professional. Fast.
              </h1>
              <p className="mt-6 text-lg text-white/70 max-w-xl">
                We design and build modern digital experiences — websites, mobile apps and brand systems — with performance and clarity in mind.
              </p>

              <div className="mt-8 flex gap-4">
                <Link href="/services" className="rounded-md bg-gradient-to-r from-theme-blue to-theme-indigo px-6 py-3 font-semibold text-black shadow-lg">Our Services</Link>
                <Link href="/contact" className="rounded-md border border-white/10 px-6 py-3 text-white">Contact Us</Link>
              </div>
            </div>

            <div ref={servicesRef} className="space-y-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <Service title="Custom Web Apps" text="Scalable, secure, and fast web applications tailored to your business needs." />
                <Service title="Mobile Solutions" text="Native & cross-platform mobile apps with smooth UX and real performance." />
                <Service title="Design Systems" text="Clean, reusable UI systems to speed development and maintain brand consistency." />
                <Service title="Optimization" text="Performance tuning, SEO best practices and accessibility improvements." />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 container mx-auto px-6 py-24">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white">Featured Work</h2>
          <p className="mt-3 text-white/70">Selected projects showcasing design, engineering, and product thinking.</p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="card overflow-hidden rounded-2xl p-0">
            <img src="https://images.unsplash.com/photo-1522199755839-a2bacb67c546?q=80&w=1400&auto=format&fit=crop" alt="project" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-white">E-commerce Platform</h3>
              <p className="mt-1 text-white/70 text-sm">Fast checkout and modular architecture.</p>
            </div>
          </div>

          <div className="card overflow-hidden rounded-2xl p-0">
            <img src="https://images.unsplash.com/photo-1556742400-b5d3fef511c9?q=80&w=1400&auto=format&fit=crop" alt="project" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-white">Analytics Dashboard</h3>
              <p className="mt-1 text-white/70 text-sm">Data-driven insights with crisp visuals.</p>
            </div>
          </div>

          <div className="card overflow-hidden rounded-2xl p-0">
            <img src="https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1400&auto=format&fit=crop" alt="project" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-white">Mobile Health App</h3>
              <p className="mt-1 text-white/70 text-sm">Secure, reliable, and delightful UX.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 container mx-auto px-6 py-24">
        <div className="rounded-2xl border border-white/6 bg-black/30 p-12 text-center">
          <h3 className="text-2xl font-semibold text-white">Ready to start?</h3>
          <p className="mt-3 text-white/70">Let's discuss your project and build something exceptional together.</p>
          <div className="mt-6">
            <Link href="/contact" className="rounded-md bg-gradient-to-r from-theme-blue to-theme-indigo px-6 py-3 font-semibold text-black">Get a Quote</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
