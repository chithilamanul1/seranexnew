import Link from "next/link";
import Image from "next/image";

// Fade-in animation for sections
const FadeInSection = ({ children }) => (
  <div className="opacity-0 animate-fadeIn">{children}</div>
);

export default function Home() {
  return (
    <>
      {/* --- HERO SECTION --- */}
      <section className="relative flex min-h-[80vh] w-full flex-col items-center justify-center text-center overflow-hidden bg-gradient-to-b from-black via-gray-900 to-black">
        {/* Simple animated dots as particles replacement */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(50)].map((_, i) => (
            <span
              key={i}
              className="absolute bg-white/20 rounded-full w-1 h-1 animate-bounce"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDuration: `${1 + Math.random() * 3}s`,
              }}
            ></span>
          ))}
        </div>

        <div className="relative z-10 p-4">
          <h1 className="text-4xl font-black sm:text-5xl md:text-7xl">
            Crafting Digital Excellence
          </h1>
          <p className="mt-6 max-w-2xl text-white/70">
            We build unique, high-performance web and mobile applications that
            drive business growth and define modern brands.
          </p>
          <Link
            href="/services"
            className="mt-8 inline-block rounded-lg bg-white px-8 py-3 font-bold text-black transition-transform duration-300 hover:scale-105"
          >
            Explore Our Services
          </Link>
        </div>
      </section>

      {/* --- SERVICES SECTION --- */}
      <FadeInSection>
        <section className="container mx-auto px-6 py-16 sm:py-24">
          <div className="text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">Our Core Services</h2>
            <p className="mx-auto mt-4 max-w-2xl text-white/70">
              A full suite of digital services designed to elevate your brand.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="flex flex-col items-start gap-4 rounded-xl border border-white/10 bg-white/5 p-6 text-left backdrop-blur-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-white/10 text-white">
                <span className="material-symbols-outlined">code</span>
              </div>
              <h3 className="text-lg font-bold">Web Development</h3>
              <p className="text-white/70">
                High-performance websites tailored to your unique needs.
              </p>
            </div>
            <div className="flex flex-col items-start gap-4 rounded-xl border border-white/10 bg-white/5 p-6 text-left backdrop-blur-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-white/10 text-white">
                <span className="material-symbols-outlined">adb</span>
              </div>
              <h3 className="text-lg font-bold">Mobile App Development</h3>
              <p className="text-white/70">
                Innovative mobile applications for iOS and Android.
              </p>
            </div>
            <div className="flex flex-col items-start gap-4 rounded-xl border border-white/10 bg-white/5 p-6 text-left backdrop-blur-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-white/10 text-white">
                <span className="material-symbols-outlined">monitoring</span>
              </div>
              <h3 className="text-lg font-bold">Digital Marketing</h3>
              <p className="text-white/70">
                Strategies to maximize your online presence and reach.
              </p>
            </div>
            <div className="flex flex-col items-start gap-4 rounded-xl border border-white/10 bg-white/5 p-6 text-left backdrop-blur-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-white/10 text-white">
                <span className="material-symbols-outlined">design_services</span>
              </div>
              <h3 className="text-lg font-bold">Graphic Design</h3>
              <p className="text-white/70">
                Compelling visual identities, from logos to branding.
              </p>
            </div>
          </div>
        </section>
      </FadeInSection>
    </>
  );
}
