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

);



