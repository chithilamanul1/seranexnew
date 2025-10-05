'use client';

import Link from 'next/link';
import Image from 'next/image';
import ParticlesComponent from '../components/ParticlesComponent';
import { useEffect, useRef } from 'react';

// Reusable hook for scroll animations
const useScrollAnimation = (ref) => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref]);
};


const ServiceCard = ({ icon, title, description, delay }) => (
    <div 
        className="fade-in-section flex flex-col items-start gap-4 rounded-xl border border-white/10 bg-black/20 p-6 text-left backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-white/10"
        style={{ transitionDelay: delay }}
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-white/10 text-white">
        <span className="material-symbols-outlined">{icon}</span>
      </div>
      <h3 className="text-lg font-bold text-white">{title}</h3>
      <p className="text-sm text-white/70">{description}</p>
    </div>
);

const PortfolioCard = ({ title, category, imageSrc, delay }) => (
    <div 
        className="fade-in-section group relative overflow-hidden rounded-xl border border-white/10"
        style={{ transitionDelay: delay }}
    >
        <Image src={imageSrc} alt={title} width={600} height={400} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        <div className="absolute bottom-0 left-0 p-6">
            <p className="text-sm text-theme-blue font-semibold">{category}</p>
            <h3 className="text-xl font-bold text-white mt-1">{title}</h3>
        </div>
    </div>
);


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
      <section className="relative flex min-h-[80vh] w-full flex-col items-center justify-center overflow-hidden text-center md:min-h-[calc(100vh-80px)]">
        <ParticlesComponent id="tsparticles" />
        <div className="relative z-10 flex flex-col items-center p-4">
          <h1 className="text-4xl font-black tracking-tighter text-white sm:text-5xl md:text-7xl">
            <span className="inline-block animate-[fade-in-up_1s_ease-out] md:animate-typing md:border-r-4 md:border-r-white">
              Crafting Digital Excellence
            </span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/70 animate-[fade-in-up_1s_ease-out_0.5s] fill-mode-backwards">
            We build unique, high-performance web and mobile applications that drive business growth and define modern brands.
          </p>
          <Link 
            href="/services" 
            className="mt-8 inline-block rounded-lg bg-white px-8 py-3 text-base font-bold text-black transition-transform duration-300 hover:scale-105 animate-[fade-in-up_1s_ease-out_1s] fill-mode-backwards"
          >
              Explore Our Services
          </Link>
        </div>
      </section>

      {/* --- SERVICES SECTION --- */}
      <section ref={servicesRef} className="container mx-auto px-6 py-16 sm:py-24 fade-in-section">
        <div className="w-full max-w-6xl mx-auto">
            <div className="text-center">
                <h2 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl">Our Core Services</h2>
                <p className="mx-auto mt-4 max-w-2xl text-white/70">A full suite of digital services designed to elevate your brand.</p>
            </div>
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            <ServiceCard icon="code" title="Web Development" description="High-performance websites tailored to your unique needs." delay="0s" />
            <ServiceCard icon="adb" title="Mobile App Development" description="Innovative mobile applications for iOS and Android." delay="0.1s" />
            <ServiceCard icon="monitoring" title="Digital Marketing" description="Strategies to maximize your online presence and reach." delay="0.2s" />
            <ServiceCard icon="design_services" title="Graphic Design" description="Compelling visual identities, from logos to branding." delay="0.3s" />
          </div>
        </div>
      </section>

      {/* --- OUR PROCESS SECTION (NEW) --- */}
      <section ref={processRef} className="bg-white/5 py-16 sm:py-24 fade-in-section">
        <div className="container mx-auto px-6">
            <div className="text-center mb-16">
                <h2 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl">Our Proven Process</h2>
                <p className="mx-auto mt-4 max-w-2xl text-white/70">We follow a structured path to ensure your project's success from concept to launch.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                <div className="flex flex-col items-center">
                    <div className="flex items-center justify-center w-16 h-16 rounded-full border-2 border-theme-blue text-2xl font-bold text-theme-blue mb-4">1</div>
                    <h3 className="text-xl font-bold text-white">Discovery</h3>
                    <p className="text-white/60 mt-2">We start by understanding your vision, goals, and target audience.</p>
                </div>
                 <div className="flex flex-col items-center">
                    <div className="flex items-center justify-center w-16 h-16 rounded-full border-2 border-theme-blue text-2xl font-bold text-theme-blue mb-4">2</div>
                    <h3 className="text-xl font-bold text-white">Design</h3>
                    <p className="text-white/60 mt-2">We create intuitive and beautiful UI/UX prototypes for your approval.</p>
                </div>
                 <div className="flex flex-col items-center">
                    <div className="flex items-center justify-center w-16 h-16 rounded-full border-2 border-theme-blue text-2xl font-bold text-theme-blue mb-4">3</div>
                    <h3 className="text-xl font-bold text-white">Develop</h3>
                    <p className="text-white/60 mt-2">Our expert developers bring the designs to life with clean, efficient code.</p>
                </div>
                 <div className="flex flex-col items-center">
                    <div className="flex items-center justify-center w-16 h-16 rounded-full border-2 border-theme-blue text-2xl font-bold text-theme-blue mb-4">4</div>
                    <h3 className="text-xl font-bold text-white">Deploy</h3>
                    <p className="text-white/60 mt-2">We handle the launch process, deploying your project to the world.</p>
                </div>
            </div>
        </div>
      </section>

      {/* --- FEATURED WORK SECTION (NEW) --- */}
       <section ref={portfolioRef} className="container mx-auto px-6 py-16 sm:py-24 fade-in-section">
        <div className="w-full max-w-6xl mx-auto">
            <div className="text-center">
                <h2 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl">Featured Work</h2>
                <p className="mx-auto mt-4 max-w-2xl text-white/70">A glimpse into the innovative solutions we've delivered.</p>
            </div>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
                <PortfolioCard title="E-commerce Platform" category="Web Application" imageSrc="https://images.unsplash.com/photo-1522199755839-a2bacb67c546?q=80&w=2672&auto=format&fit=crop" delay="0s" />
                <PortfolioCard title="Fitness Tracking App" category="Mobile App" imageSrc="https://images.unsplash.com/photo-1552196563-55cd4e45efb3?q=80&w=2526&auto=format&fit=crop" delay="0.1s" />
            </div>
            <div className="text-center mt-12">
                <Link href="/portfolio" className="font-semibold text-theme-blue hover:underline">View Full Portfolio &rarr;</Link>
            </div>
        </div>
      </section>
      
      {/* --- CALL TO ACTION SECTION (NEW) --- */}
      <section ref={ctaRef} className="fade-in-section">
        <div className="container mx-auto px-6 py-24">
            <div className="relative isolate overflow-hidden bg-black/20 border border-white/10 px-6 py-24 text-center shadow-2xl rounded-2xl sm:px-16">
                <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">Ready to Start Your Project?</h2>
                <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">Let's build something amazing together. Contact us today for a free consultation and quote.</p>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                    <Link href="/contact" className="rounded-md bg-white px-5 py-2.5 text-sm font-semibold text-black shadow-sm hover:bg-gray-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">Get a Quote</Link>
                    <Link href="/about" className="text-sm font-semibold leading-6 text-white">Learn more <span aria-hidden="true">→</span></Link>
                </div>
            </div>
        </div>
      </section>
    </>
  );
}
