'use client';

import dynamic from 'next/dynamic';
import Link from 'next/link';
import { useEffect, useRef } from 'react';
const ParticlesComponent = dynamic(() => import('../components/ParticlesComponent'), { ssr: false });

// ------------------ Scroll Animation Hook ------------------
const useScrollAnimation = (ref) => {
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    if (ref.current) observer.observe(ref.current);
    return () => ref.current && observer.unobserve(ref.current);
  }, [ref]);
};

// ------------------ Card Components ------------------
const ServiceCard = ({ icon, title, description, delay }) => (
  <div
    className="fade-in-section group relative flex flex-col items-start gap-4 rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-transparent p-8 text-left backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-theme-blue/60 hover:shadow-[0_0_25px_rgba(59,130,246,0.2)]"
    style={{ transitionDelay: delay }}
  >
    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-theme-blue/20 text-theme-blue group-hover:bg-theme-blue/40 group-hover:text-white transition-all">
      <span className="material-symbols-outlined text-3xl">{icon}</span>
    </div>
    <h3 className="text-xl font-semibold text-white">{title}</h3>
    <p className="text-sm text-white/70">{description}</p>
  </div>
);

const PortfolioCard = ({ title, category, imageSrc, delay }) => (
  <div
    className="fade-in-section group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-tr from-black/30 via-black/20 to-transparent shadow-xl backdrop-blur-sm transition-all duration-500 hover:scale-[1.02]"
    style={{ transitionDelay: delay }}
  >
    <img
      src={imageSrc}
      alt={title}
      className="h-full w-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-110"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
    <div className="absolute bottom-0 left-0 p-6">
      <p className="text-sm text-theme-blue font-semibold uppercase tracking-wider">{category}</p>
      <h3 className="text-2xl font-bold text-white mt-1">{title}</h3>
    </div>
  </div>
);

// ------------------ Main Home Component ------------------
export default function Home() {
  const servicesRef = useRef(null);
  const processRef = useRef(null);
  const portfolioRef = useRef(null);
  const ctaRef = useRef(null);

  useScrollAnimation(servicesRef);
  useScrollAnimation(processRef);
  useScrollAnimation(portfolioRef);
  useScrollAnimation(ctaRef);

  return (
    <>
      {/* --- HERO SECTION --- */}
      <section className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden text-center">
        <ParticlesComponent id="tsparticles" />
        <div className="absolute inset-0 bg-gradient-to-br from-black via-blue-950/70 to-black/80"></div>
        <div className="relative z-10 flex flex-col items-center px-6">
          <h1 className="text-4xl font-extrabold text-white sm:text-6xl md:text-7xl leading-tight drop-shadow-[0_2px_10px_rgba(255,255,255,0.3)]">
            Transforming Ideas <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Into Digital Masterpieces</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/70 leading-relaxed">
            We craft world-class web and mobile experiences that help your brand grow and thrive in the digital world.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Link
              href="/services"
              className="rounded-lg bg-gradient-to-r from-blue-500 to-cyan-400 px-8 py-3 text-lg font-semibold text-white shadow-lg transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(59,130,246,0.4)]"
            >
              Explore Our Services
            </Link>
            <Link
              href="/contact"
              className="rounded-lg border border-white/40 px-8 py-3 text-lg font-semibold text-white hover:bg-white/10 transition-all"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      {/* --- SERVICES --- */}
      <section ref={servicesRef} className="relative z-20 container mx-auto px-6 py-24 fade-in-section">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-white">Our Core Services</h2>
          <p className="mt-4 max-w-2xl mx-auto text-white/70">
            A blend of innovation, technology, and design excellence to elevate your business presence.
          </p>
        </div>
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <ServiceCard icon="code" title="Web Development" description="Crafting responsive, fast, and beautiful websites tailored to your goals." delay="0s" />
          <ServiceCard icon="phone_iphone" title="Mobile Apps" description="Building seamless and scalable iOS and Android experiences." delay="0.1s" />
          <ServiceCard icon="monitoring" title="Digital Marketing" description="Boosting your online presence with smart marketing strategies." delay="0.2s" />
          <ServiceCard icon="brush" title="Creative Design" description="Delivering stunning visuals and unique branding solutions." delay="0.3s" />
        </div>
      </section>

      {/* --- PROCESS --- */}
      <section ref={processRef} className="relative bg-gradient-to-b from-blue-900/40 to-black py-24 fade-in-section">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white">Our Proven Process</h2>
          <p className="mx-auto mt-4 max-w-2xl text-white/70">
            From concept to completion, we follow a clear, client-focused process.
          </p>
          <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {['Discover', 'Design', 'Develop', 'Deploy'].map((step, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full border-4 border-theme-blue bg-blue-900/40 text-2xl font-bold text-white shadow-lg">
                  {i + 1}
                </div>
                <h3 className="text-xl font-semibold text-white">{step}</h3>
                <p className="mt-2 max-w-xs text-sm text-white/70">
                  {{
                    0: 'Understanding your goals and audience.',
                    1: 'Designing seamless and intuitive interfaces.',
                    2: 'Developing secure, scalable solutions.',
                    3: 'Launching with precision and monitoring results.'
                  }[i]}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- PORTFOLIO --- */}
      <section ref={portfolioRef} className="container mx-auto px-6 py-24 fade-in-section">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-white">Our Featured Projects</h2>
          <p className="mt-4 max-w-2xl mx-auto text-white/70">A peek into our latest design and development work.</p>
        </div>
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <PortfolioCard title="E-Commerce Platform" category="Web App" imageSrc="https://images.unsplash.com/photo-1556742400-b5d3fef511c9?q=80&w=2600&auto=format&fit=crop" delay="0s" />
          <PortfolioCard title="AI Fitness App" category="Mobile" imageSrc="https://images.unsplash.com/photo-1599058918144-3f3b1de9b04a?q=80&w=2600&auto=format&fit=crop" delay="0.1s" />
          <PortfolioCard title="Business Dashboard" category="UI/UX" imageSrc="https://images.unsplash.com/photo-1581093588401-22d3fc7083f0?q=80&w=2600&auto=format&fit=crop" delay="0.2s" />
        </div>
        <div className="text-center mt-12">
          <Link href="/portfolio" className="font-semibold text-theme-blue hover:underline">See More Projects →</Link>
        </div>
      </section>

      {/* --- CTA --- */}
      <section ref={ctaRef} className="relative fade-in-section bg-gradient-to-r from-blue-800/40 via-black/70 to-blue-900/30">
        <div className="container mx-auto px-6 py-24 text-center">
          <div className="relative isolate overflow-hidden border border-white/10 bg-black/30 px-8 py-20 rounded-3xl shadow-xl backdrop-blur-xl">
            <h2 className="text-4xl font-bold text-white">Let’s Build Something Great</h2>
            <p className="mt-6 max-w-2xl mx-auto text-lg text-white/70">
              Ready to transform your vision into a high-impact digital product? Let’s collaborate.
            </p>
            <div className="mt-10 flex justify-center gap-6">
              <Link href="/contact" className="rounded-md bg-gradient-to-r from-blue-500 to-cyan-400 px-6 py-3 text-white font-semibold shadow-lg hover:scale-105 transition-transform">
                Start a Project
              </Link>
              <Link href="/about" className="rounded-md border border-white/30 px-6 py-3 text-white font-semibold hover:bg-white/10 transition-colors">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
