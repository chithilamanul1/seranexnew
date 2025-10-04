import Image from 'next/image';
import Link from 'next/link';

const ProjectCard = ({ title, category, imageSrc }) => (
    <div className="group relative overflow-hidden rounded-lg border border-white/10 shadow-lg">
      <Image
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          src={imageSrc}
          width={600}
          height={400}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent transition-opacity duration-300 group-hover:from-black/90"></div>
      <div className="absolute inset-x-0 bottom-0 p-6">
        <h4 className="text-lg font-bold text-white">{title}</h4>
        <p className="mt-1 text-sm text-white/70 opacity-0 transition-opacity duration-300 group-hover:opacity-100">{category}</p>
      </div>
    </div>
  );
  

export default function Portfolio() {
  return (
    <main className="flex-grow">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-extrabold tracking-tighter text-white sm:text-5xl">
            Our Portfolio
          </h2>
          <p className="mt-4 text-white/70">
            Explore a selection of our most impactful projects, showcasing our expertise in web development, mobile apps, and graphic design.
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-16">
          
          <div>
            <h3 className="mb-8 text-2xl font-bold text-white">Web Development</h3>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              <ProjectCard title="E-commerce Platform" category="Web Application" imageSrc="https://placehold.co/600x400/191919/FFF/png?text=E-commerce" />
              <ProjectCard title="Interactive Portfolio" category="Design & Development" imageSrc="https://placehold.co/600x400/191919/FFF/png?text=Portfolio" />
              <ProjectCard title="SaaS Dashboard" category="Web Application" imageSrc="https://placehold.co/600x400/191919/FFF/png?text=Dashboard" />
            </div>
          </div>

          <div>
            <h3 className="mb-8 text-2xl font-bold text-white">Mobile App Development</h3>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              <ProjectCard title="Fitness Tracking App" category="iOS/Android" imageSrc="https://placehold.co/600x400/191919/FFF/png?text=Fitness+App" />
              <ProjectCard title="Educational App" category="Mobile App" imageSrc="https://placehold.co/600x400/191919/FFF/png?text=Edu+App" />
              <ProjectCard title="Event Management App" category="Mobile App" imageSrc="https://placehold.co/600x400/191919/FFF/png?text=Event+App" />
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}