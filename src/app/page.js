'use client'; // This component uses client-side hooks for animations

import Head from 'next/head';
import { useEffect } from 'react';
import { FaLaptopCode, FaPaintBrush, FaRocket, FaHandshake, FaBullseye, FaLightbulb } from 'react-icons/fa';
import Link from 'next/link';

export default function HomePage() {

  // This hook is for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in-up');
        }
      });
    }, { threshold: 0.1 });

    const targets = document.querySelectorAll('.scroll-animate');
    targets.forEach(target => observer.observe(target));

    // Cleanup observer on component unmount
    return () => targets.forEach(target => observer.unobserve(target));
  }, []);

  return (
    <>
      <Head>
        <title>SERANEX - Modern Digital Solutions in Sri Lanka</title>
        <meta name="description" content="Based in Seeduwa, SERANEX offers clear, powerful web design, graphic design, and custom software for Sri Lankan businesses." />
      </Head>

      <div className="min-h-screen w-full bg-gray-900 text-white overflow-x-hidden font-sans">
        {/* Animated Gradient Background */}
        <div className="absolute top-0 left-0 w-full h-full z-0 overflow-hidden">
          <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-gradient-to-tr from-blue-900 via-gray-900 to-indigo-900 animate-gradient-move"></div>
        </div>

        {/* Main Content */}
        <main className="relative z-10">
          
          {/* Hero Section */}
          <section className="min-h-screen flex flex-col justify-center items-center text-center p-8 relative">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter animate-fade-in-down bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400">
              Ideas Into Reality
            </h1>
            <p className="mt-4 max-w-2xl text-lg md:text-xl text-blue-200 animate-fade-in-up">
              We turn your business goals into beautiful, high-performance websites and software. Clear, simple, and effective digital solutions, right here in Sri Lanka.
            </p>
            <a
              href="#contact"
              className="mt-8 px-8 py-4 bg-white text-blue-700 font-bold uppercase rounded-full shadow-lg transform hover:scale-105 transition-transform duration-300 animate-fade-in-up delay-200"
            >
              Start Your Project
            </a>
          </section>

          {/* Why Choose Us Section */}
          <section id="why-us" className="py-20 px-8 bg-black bg-opacity-20">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 scroll-animate">Why Choose SERANEX?</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div className="scroll-animate"><FaHandshake className="text-5xl text-blue-400 mx-auto mb-4" /><h3 className="text-2xl font-bold mb-2">Local & Reliable</h3><p className="text-blue-200">We're based right here in Seeduwa, ready to provide dedicated support for your business.</p></div>
                <div className="scroll-animate delay-100"><FaBullseye className="text-5xl text-blue-400 mx-auto mb-4" /><h3 className="text-2xl font-bold mb-2">Clear Communication</h3><p className="text-blue-200">No confusing jargon. We speak your language and focus on your business goals.</p></div>
                <div className="scroll-animate delay-200"><FaLightbulb className="text-5xl text-blue-400 mx-auto mb-4" /><h3 className="text-2xl font-bold mb-2">Modern Technology</h3><p className="text-blue-200">We use the latest tools like Next.js to build fast, secure, and future-proof websites.</p></div>
              </div>
            </div>
          </section>

          {/* Services Section */}
          <section id="services" className="py-20 px-8">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 scroll-animate">Our Services</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl border border-white/20 shadow-xl transform hover:-translate-y-2 transition-transform duration-300 scroll-animate">
                  <FaLaptopCode className="text-5xl text-blue-400 mb-4" /><h3 className="text-2xl font-bold mb-2">Web Development</h3><p className="text-blue-200">We build professional websites that look great on all devices and help you attract more customers.</p>
                </div>
                <div className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl border border-white/20 shadow-xl transform hover:-translate-y-2 transition-transform duration-300 md:scale-105 scroll-animate delay-100">
                  <FaPaintBrush className="text-5xl text-blue-400 mb-4" /><h3 className="text-2xl font-bold mb-2">Graphic Design</h3><p className="text-blue-200">From logos to marketing materials, we create a strong brand identity that makes you stand out.</p>
                </div>
                <div className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl border border-white/20 shadow-xl transform hover:-translate-y-2 transition-transform duration-300 scroll-animate delay-200">
                  <FaRocket className="text-5xl text-blue-400 mb-4" /><h3 className="text-2xl font-bold mb-2">Software Solutions</h3><p className="text-blue-200">We build custom apps and tools to solve your unique business problems and improve efficiency.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Final Call to Action Section */}
          <section id="contact" className="py-20 px-8 text-center bg-gradient-to-t from-black/50 to-transparent">
            <h2 className="text-4xl md:text-5xl font-bold scroll-animate">Have a Project in Mind?</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-blue-200 scroll-animate">Let's talk about how we can help your business grow. Get in touch for a free, no-obligation consultation.</p>
            <Link href="/contact" className="mt-8 inline-block px-12 py-4 bg-white text-blue-700 font-bold uppercase rounded-full shadow-lg transform hover:scale-105 transition-transform duration-300 scroll-animate">
              Contact Us Today
            </Link>
          </section>

        </main>
      </div>
    </>
  );
}
