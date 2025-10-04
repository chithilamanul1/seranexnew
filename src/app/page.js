'use client';

import Link from 'next/link';
import ParticlesComponent from '../components/ParticlesComponent';
import { useEffect, useRef } from 'react';

const ServiceCard = ({ icon, title, description }) => (
    <div className="flex flex-col items-start gap-4 rounded-xl border border-white/10 bg-black/20 p-6 text-left backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-white/10">
      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-white/10 text-white">
        <span className="material-symbols-outlined">{icon}</span>
      </div>
      <h3 className="text-lg font-bold text-white">{title}</h3>
      <p className="text-sm text-white/70">{description}</p>
    </div>
);

export default function Home() {
  const servicesSectionRef = useRef(null);

  // This effect handles the scroll animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      {
        threshold: 0.1, // Trigger when 10% of the section is visible
      }
    );

    if (servicesSectionRef.current) {
      observer.observe(servicesSectionRef.current);
    }

    // Cleanup observer on component unmount
    return () => {
      if (servicesSectionRef.current) {
        observer.unobserve(servicesSectionRef.current);
      }
    };
  }, []);

  return (
    <>
      {/* Hero Section */}
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

      {/* Core Services Section with Scroll Animation */}
      <section 
        ref={servicesSectionRef} 
        className="container mx-auto px-6 py-16 sm:py-24 lg:py-32 fade-in-section"
      >
        <div className="w-full max-w-6xl mx-auto">
            <div className="text-center">
                <h2 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl">
                    Our Core Services
                </h2>
                <p className="mx-auto mt-4 max-w-2xl text-white/70">
                    A full suite of digital services designed to elevate your brand and achieve your business objectives.
                </p>
            </div>
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            <ServiceCard icon="code" title="Web Development" description="We build responsive, high-performance websites tailored to your unique needs." />
            <ServiceCard icon="adb" title="Mobile App Development" description="Our expert team creates innovative mobile applications for iOS and Android." />
            <ServiceCard icon="monitoring" title="Digital Marketing" description="We develop effective strategies, including SEO and social media, to maximize your online presence." />
            <ServiceCard icon="design_services" title="Graphic Design" description="Our creative designers craft compelling visual identities, from logos to branding materials." />
          </div>
        </div>
      </section>
    </>
  );
}