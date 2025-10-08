import Head from 'next/head';
import Image from 'next/image';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { SiNextdotjs, SiReact, SiNodedotjs, SiFirebase, SiFigma, SiAdobephotoshop } from 'react-icons/si';

// --- Placeholder Data for Your Projects ---
// Replace this with your actual project information.
const portfolioProjects = [
  {
    title: "E-Commerce Platform for a Sri Lankan Retailer",
    description: "A high-performance, scalable e-commerce website built with Next.js and Firebase, featuring real-time inventory and secure payment gateway integration.",
    imageUrl: "/images/placeholder-project-1.png", // Create this image in your /public/images folder
    tags: ["Next.js", "Firebase", "E-Commerce", "UI/UX"],
    liveUrl: "#",
  },
  {
    title: "Brand Identity for a Colombo Cafe",
    description: "A complete branding package including logo design, menu layout, and social media assets, creating a cohesive and modern visual identity that increased customer engagement.",
    imageUrl: "/images/placeholder-project-2.png",
    tags: ["Branding", "Graphic Design", "UI/UX"],
    liveUrl: "#",
  },
  {
    title: "Internal Dashboard for a Logistics Company",
    description: "A custom software solution built to streamline operations, track shipments in real-time, and automate reporting, significantly improving efficiency.",
    imageUrl: "/images/placeholder-project-3.png",
    tags: ["Custom Software", "React", "Node.js"],
    liveUrl: "#",
  },
];

export default function PortfolioPage() {
  return (
    <>
      <Head>
        <title>Our Work | SERANEX</title>
        <meta name="description" content="Explore a selection of our finest projects in web development, branding, and custom software, engineered for excellence." />
      </Head>

      <div className="w-full pt-24 sm:pt-32">
        {/* Page Header */}
        <section className="text-center px-6 pb-16">
          <div className="mx-auto max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter animate-fade-in-down">
              Our Work
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-400 animate-fade-in-up [animation-delay:0.2s]">
              We are proud of the solutions we've engineered. Here is a selection of projects that showcase our commitment to quality, performance, and design.
            </p>
          </div>
        </section>

        {/* Projects Grid Section */}
        <section id="projects" className="py-16 px-6">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioProjects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-24 sm:py-32 px-6 bg-black/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-base font-semibold leading-7 text-blue-400">Our Technology</h2>
            <p className="mt-2 text-4xl md:text-5xl font-bold tracking-tight text-white">The Tools We Master</p>
            <div className="mt-12 flex flex-wrap justify-center gap-x-8 gap-y-10">
              <SkillIcon icon={<SiNextdotjs />} name="Next.js" />
              <SkillIcon icon={<SiReact />} name="React" />
              <SkillIcon icon={<SiNodedotjs />} name="Node.js" />
              <SkillIcon icon={<SiFirebase />} name="Firebase" />
              <SkillIcon icon={<SiFigma />} name="Figma" />
              <SkillIcon icon={<SiAdobephotoshop />} name="Photoshop" />
            </div>
          </div>
        </section>

        {/* Testimonials Section (Placeholder) */}
        <section id="testimonials" className="py-24 sm:py-32 px-6">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-4xl md:text-5xl font-bold text-white">What Our Clients Say</h2>
                <div className="mt-12">
                    <TestimonialCard 
                        quote="SERANEX transformed our online presence. Their attention to detail and commitment to performance is second to none. A true engineering partner."
                        author="- CEO, Colombo Retail Co."
                    />
                </div>
            </div>
        </section>

      </div>
    </>
  );
}

// Reusable Project Card Component
const ProjectCard = ({ project }) => (
  <div className="group relative overflow-hidden rounded-2xl bg-gray-800 border border-gray-700 shadow-lg">
    <Image 
      src={project.imageUrl} 
      alt={project.title} 
      width={600} 
      height={400} 
      className="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-500" 
    />
    <div className="p-6">
      <div className="flex flex-wrap gap-2 mb-2">
        {project.tags.map(tag => (
          <span key={tag} className="text-xs font-semibold bg-blue-600/20 text-blue-300 py-1 px-3 rounded-full">{tag}</span>
        ))}
      </div>
      <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
      <p className="text-gray-400 text-sm leading-relaxed">{project.description}</p>
    </div>
    <div className="absolute inset-0 bg-black/70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-bold rounded-full transform scale-90 group-hover:scale-100 transition-transform duration-300">
        View Project <FaExternalLinkAlt />
      </a>
    </div>
  </div>
);

// Reusable Skill Icon Component
const SkillIcon = ({ icon, name }) => (
  <div className="flex flex-col items-center gap-3 text-center">
    <div className="text-5xl text-gray-400 group-hover:text-white transition-colors">{icon}</div>
    <span className="text-sm font-semibold text-gray-400">{name}</span>
  </div>
);

// Reusable Testimonial Card Component
const TestimonialCard = ({ quote, author }) => (
    <div className="bg-gray-800/50 backdrop-blur-lg p-8 rounded-2xl border border-gray-700 max-w-3xl mx-auto">
        <p className="text-xl italic text-gray-300">"{quote}"</p>
        <p className="mt-4 font-semibold text-blue-400 text-right">{author}</p>
    </div>
);
