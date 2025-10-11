import Head from 'next/head';
import { FaLaptopCode, FaPaintBrush, FaRocket, FaHandshake, FaLightbulb, FaShieldAlt, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { SiNextdotjs, SiVercel, SiFirebase, SiTailwindcss } from 'react-icons/si';

export default function HomePage() {
  return (
    <>
      <Head>
        <title>SERANEX - Elite Digital Engineering & Design</title>
        <meta name="description" content="SERANEX is a global digital engineering firm specializing in high-performance web applications, strategic branding, and custom software solutions for businesses that demand excellence." />
      </Head>

      <div className="min-h-screen w-full bg-[#111827] text-gray-100 overflow-x-hidden antialiased">
        {/* Subtle Animated Gradient */}
        <div className="absolute inset-0 -z-10 h-full w-full bg-black bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
        <div className="absolute top-0 left-0 -z-10 h-1/2 w-full bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(37,99,235,0.15),rgba(255,255,255,0))]"></div>

        {/* Main Content */}
        <main className="relative z-10">
          
          {/* Hero Section */}
          <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 pt-20">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter animate-fade-in-down">
              Ideas, Engineered.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-400 animate-fade-in-up [animation-delay:0.2s]">
              We transform ambitious ideas into high-performance digital products. As a dedicated engineering partner, we specialize in scalable web applications, strategic branding, and custom software solutions built for the global stage.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6 animate-fade-in-up [animation-delay:0.4s]">
              <a
                href="./services"
                className="rounded-full bg-blue-600 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-blue-600/20 hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 transition-transform transform hover:scale-105"
              >
                View Our Expertise
              </a>
              <a href="./contact" className="text-sm font-semibold leading-6 text-gray-300 hover:text-white">
                Start a Conversation <span aria-hidden="true">→</span>
              </a>
            </div>
          </section>

          {/* Services Section with Longer Details */}
          <section id="services" className="py-24 sm:py-32 px-6">
            <div className="max-w-7xl mx-auto">
              <div className="text-center">
                <h2 className="text-base font-semibold leading-7 text-blue-400">Core Competencies</h2>
                <p className="mt-2 text-4xl md:text-5xl font-bold tracking-tight text-white">Engineering Digital Excellence</p>
              </div>
              <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-8">
                <ServiceCard 
                  icon={<FaLaptopCode />}
                  title="Web Application Engineering"
                  description="We go beyond websites to build robust, high-performance web applications. Our focus is on creating fast, secure, and scalable platforms that provide a flawless user experience. Whether it's a complex dashboard, an e-commerce powerhouse, or a customer portal, our code is built to perform and scale."
                />
                <ServiceCard 
                  icon={<FaPaintBrush />}
                  title="Strategic Branding & UI/UX"
                  description="A successful product is more than just code—it's an experience. We craft compelling brand identities that connect with your audience. Our UI/UX design process is centered on creating intuitive, beautiful, and user-friendly interfaces that drive engagement and conversions."
                />
                <ServiceCard 
                  icon={<FaRocket />}
                  title="Custom Software Solutions"
                  description="For unique business challenges, we provide bespoke software solutions. We analyze your workflow to build custom tools, internal systems, and mobile applications that automate processes, boost productivity, and provide a clear competitive advantage."
                />
              </div>
            </div>
          </section>
          
          {/* Technology Stack Section - NEW */}
          <section id="stack" className="py-24 sm:py-32 px-6 bg-black/30">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-base font-semibold leading-7 text-blue-400">Our Foundation</h2>
              <p className="mt-2 text-4xl md:text-5xl font-bold tracking-tight text-white">Built on Modern, Proven Technology</p>
              <p className="mt-6 text-lg leading-8 text-gray-400">
                We leverage a curated stack of modern, scalable technologies to ensure your project is built on a foundation of performance, security, and reliability.
              </p>
              <div className="mt-10 flex flex-wrap justify-center gap-x-8 gap-y-6 sm:gap-x-12">
                <TechStackIcon icon={<SiNextdotjs />} name="Next.js" />
                <TechStackIcon icon={<SiVercel />} name="Vercel" />
                <TechStackIcon icon={<SiFirebase />} name="Firebase" />
                <TechStackIcon icon={<SiTailwindcss />} name="Tailwind CSS" />
              </div>
            </div>
          </section>

          {/* Our Philosophy Section - NEW */}
          <section id="philosophy" className="py-24 sm:py-32 px-6">
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-4">More Than a Vendor.<br/>A Partner in Growth.</h2>
                <p className="text-lg text-gray-400">
                  We believe the best digital products are born from true collaboration. We integrate with your team to understand your business inside and out. Our success is measured by your success. We are committed to building long-term relationships founded on transparency, communication, and a shared passion for building exceptional products.
                </p>
              </div>
              <div className="grid grid-cols-1 gap-8">
                <PhilosophyCard icon={<FaHandshake />} title="Collaborative Partnership" description="We work with you, not just for you. Regular check-ins and a transparent process ensure you're always in the loop." />
                <PhilosophyCard icon={<FaShieldAlt />} title="Quality & Reliability" description="Our commitment to clean code, rigorous testing, and best practices means your product is built to last and perform under pressure." />
              </div>
            </div>
          </section>

          {/* Footer & CTA */}
          <Footer />
        </main>
      </div>
    </>
  );
}

// Reusable Components
const ServiceCard = ({ icon, title, description }) => (
  <div className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700 shadow-lg h-full">
    <div className="text-4xl text-blue-500 mb-4">{icon}</div>
    <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
    <p className="text-gray-400 leading-relaxed">{description}</p>
  </div>
);

const TechStackIcon = ({ icon, name }) => (
  <div className="flex flex-col items-center gap-2">
    <div className="text-4xl text-gray-400">{icon}</div>
    <span className="text-sm font-semibold text-gray-400">{name}</span>
  </div>
);

const PhilosophyCard = ({ icon, title, description }) => (
  <div className="flex items-start gap-4">
    <div className="flex-shrink-0 flex items-center justify-center h-12 w-12 bg-gray-800 border border-blue-500/50 rounded-lg">
      <div className="text-xl text-blue-500">{icon}</div>
    </div>
    <div>
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <p className="mt-1 text-sm text-gray-400">{description}</p>
    </div>
  </div>
);

const Footer = () => (
  <footer id="contact" className="bg-black border-t border-gray-800">
    <div className="max-w-6xl mx-auto px-6 py-16">
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white">Have a Project in Mind?</h2>
        <p className="mt-4 text-lg text-gray-400">Let's build something great together.</p>
        <a
          href="mailto:contact@seranex.com" // Change to your actual contact email
          className="mt-8 inline-block rounded-full bg-blue-600 px-8 py-3 text-sm font-bold text-white shadow-lg shadow-blue-600/20 hover:bg-blue-500 transition-transform transform hover:scale-105"
        >
          Get in Touch
        </a>
      </div>
      <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="md:col-span-1">
          <h2 className="text-2xl font-black uppercase tracking-tighter text-white">SERANEX</h2>
          <p className="mt-2 text-sm text-gray-400">Ideas, Engineered.</p>
        </div>
        <div>
          <h3 className="font-bold text-white uppercase tracking-wider text-sm">Links</h3>
          <ul className="mt-4 space-y-2">
            <li><a href="#services" className="text-gray-400 hover:text-blue-500 transition-colors text-sm">Services</a></li>
            <li><a href="#philosophy" className="text-gray-400 hover:text-blue-500 transition-colors text-sm">Philosophy</a></li>
            <li><a href="#stack" className="text-gray-400 hover:text-blue-500 transition-colors text-sm">Technology</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-white uppercase tracking-wider text-sm">Legal</h3>
          <ul className="mt-4 space-y-2">
            <li><a href="#" className="text-gray-400 hover:text-blue-500 transition-colors text-sm">Privacy Policy</a></li>
            <li><a href="#" className="text-gray-400 hover:text-blue-500 transition-colors text-sm">Terms of Service</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-white uppercase tracking-wider text-sm">Connect</h3>
          <div className="mt-4 flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors"><FaTwitter size={20} /></a>
            <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors"><FaLinkedin size={20} /></a>
            <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors"><FaGithub size={20} /></a>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-800 pt-8 mt-16 text-center text-gray-500 text-sm">
        <p>&copy; {new Date().getFullYear()} SERANEX. All Rights Reserved.</p>
      </div>
    </div>
  </footer>
);


