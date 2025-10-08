import Head from 'next/head';
import { FaLaptopCode, FaPaintBrush, FaRocket, FaMobileAlt, FaDatabase, FaCloud } from 'react-icons/fa';

export default function ServicesPage() {
  return (
    <>
      <Head>
        <title>Our Services | SERANEX</title>
        <meta name="description" content="Explore our expert services in Web Application Engineering, Strategic Branding & UI/UX, and Custom Software Solutions." />
      </Head>

      <div className="w-full pt-24 sm:pt-32">
        {/* Page Header */}
        <section className="text-center px-6 pb-16">
          <div className="mx-auto max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter animate-fade-in-down">
              Our Expertise
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-400 animate-fade-in-up [animation-delay:0.2s]">
              We deliver end-to-end digital solutions engineered for performance, scale, and impact. Explore our core competencies below.
            </p>
          </div>
        </section>

        {/* Detailed Services Section */}
        <section className="py-16 px-6 bg-black/30">
          <div className="max-w-7xl mx-auto space-y-24">
            <ServiceDetail
              icon={<FaLaptopCode />}
              title="Web Application Engineering"
              description="We architect and build robust, high-performance web applications that serve as the backbone of your digital presence. Our approach goes beyond simple websites to create scalable platforms that solve complex business problems. We focus on clean architecture, secure code, and a flawless user experience to deliver products that are both powerful and a pleasure to use."
              features={[
                "Next.js & React Development",
                "E-Commerce & Payment Gateway Integration",
                "Content Management Systems (CMS)",
                "API Design & Integration",
              ]}
            />
            <ServiceDetail
              icon={<FaPaintBrush />}
              title="Strategic Branding & UI/UX Design"
              description="A strong brand and intuitive design are critical for success. We work with you to build a complete brand identity that connects with your target audience. Our UI/UX process is data-driven and user-centric, ensuring that every interaction is seamless, beautiful, and aligned with your business goals. We design experiences that users love."
              features={[
                "Logo Design & Brand Identity Systems",
                "User Interface (UI) & User Experience (UX) Design",
                "Interactive Prototyping & Wireframing",
                "Design System Development",
              ]}
              reverse={true}
            />
            <ServiceDetail
              icon={<FaRocket />}
              title="Custom Software & Mobile Solutions"
              description="When off-the-shelf software doesn't meet your needs, we provide bespoke solutions tailored to your unique operational challenges. We engineer custom internal tools, enterprise software, and cross-platform mobile applications that automate processes, increase efficiency, and provide a significant competitive advantage in your market."
              features={[
                "Cross-Platform Mobile App Development",
                "Internal Business Process Automation",
                "Data Dashboards & Analytics Tools",
                "Third-Party Software Integration",
              ]}
            />
          </div>
        </section>

        {/* Footer is already in your layout.js */}
      </div>
    </>
  );
}

// Reusable Detailed Service Component
const ServiceDetail = ({ icon, title, description, features, reverse = false }) => (
  <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${reverse ? 'lg:grid-flow-col-dense' : ''}`}>
    <div className={`text-5xl text-blue-500 mx-auto lg:mx-0 ${reverse ? 'lg:col-start-2' : ''}`}>
      {icon}
    </div>
    <div className={reverse ? 'lg:col-start-1' : ''}>
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{title}</h2>
      <p className="text-gray-400 leading-relaxed mb-6">{description}</p>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <svg className="w-4 h-4 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
            <span className="text-gray-300">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  </div>
);
