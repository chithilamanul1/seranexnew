import Link from 'next/link';

const ServiceCard = ({ icon, title, description }) => (
  <div className="flex flex-col gap-4 rounded-lg bg-white/5 p-6 border border-white/10 transition-colors hover:bg-white/10">
    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-white/10 text-white">
      <span className="material-symbols-outlined text-3xl">{icon}</span>
    </div>
    <h3 className="text-xl font-bold text-white">{title}</h3>
    <p className="text-white/70 text-sm">{description}</p>
  </div>
);

const TimelineItem = ({ number, title, description }) => (
    <div className="relative pl-8 timeline-item">
        <div className="absolute left-0 top-1 z-10 flex h-6 w-6 items-center justify-center rounded-full bg-white text-black font-bold text-xs timeline-decorator">
            {number}
        </div>
        <h4 className="font-bold text-lg text-white">{title}</h4>
        <p className="mt-1 text-white/70">{description}</p>
    </div>
);

export default function Services() {
  return (
    <main className="flex-grow">
      {/* Hero Section */}
      <section className="py-16 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-extrabold tracking-tighter text-white sm:text-5xl md:text-6xl">
              Our Digital Solutions
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-white/70 sm:text-xl">
              A comprehensive suite of services to bring your ideas to life, from concept to successful launch and beyond.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-16 md:py-24 bg-white/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Our Services</h2>
            <p className="mt-3 max-w-2xl mx-auto text-lg text-white/70">
              A structured suite of services to ensure your project's success.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <ServiceCard
              icon="code"
              title="Web Development"
              description="High-performance, scalable websites and custom web applications built with modern frameworks."
            />
            <ServiceCard
              icon="adb"
              title="Mobile App Development"
              description="Native (iOS/Android) and cross-platform mobile apps focused on intuitive UX and robust performance."
            />
            <ServiceCard
              icon="design_services"
              title="UI/UX Design"
              description="Creating intuitive, engaging, and visually stunning user interfaces and experiences."
            />
            <ServiceCard
              icon="monitoring"
              title="Digital Marketing"
              description="Data-driven SEO, PPC, and social media strategies to increase visibility and drive qualified leads."
            />
             <ServiceCard
              icon="architecture"
              title="Software Architecture"
              description="Designing scalable, secure, and maintainable software architectures for complex enterprise systems."
            />
            <ServiceCard
              icon="cloud"
              title="Cloud & Maintenance"
              description="Ensuring your project remains up-to-date, secure, and functional with ongoing support and updates."
            />
          </div>
        </div>
      </section>
      
      {/* Development Lifecycle Section */}
      <section className="py-16 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Our Development Lifecycle</h2>
            <p className="mt-3 max-w-2xl mx-auto text-lg text-white/70">
              A structured and transparent process to ensure your project's success from start to finish.
            </p>
          </div>
          <div className="relative max-w-2xl mx-auto">
             {/* The vertical line for the timeline */}
            <div className="absolute left-3 top-2 bottom-2 w-0.5 bg-white/10"></div>
            <div className="grid grid-cols-1 gap-12">
                <TimelineItem number="1" title="Discovery & Strategy" description="Understanding your business goals, target audience, and project requirements to build a solid foundation." />
                <TimelineItem number="2" title="Design & Prototyping" description="Creating wireframes, mockups, and interactive prototypes to visualize the user experience and interface." />
                <TimelineItem number="3" title="Development & Testing" description="Developing the app with clean code and rigorous testing to ensure quality, performance, and security." />
                <TimelineItem number="4" title="Deployment & Launch" description="Launching your app on the App Store and Google Play, ensuring a smooth and successful release." />
                <TimelineItem number="5" title="Maintenance & Support" description="Providing ongoing support, updates, and improvements to keep your app optimized and competitive." />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}