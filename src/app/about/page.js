import Head from 'next/head';
import { FaHandshake, FaLightbulb, FaShieldAlt, FaUsers } from 'react-icons/fa';

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About Us | SERANEX</title>
        <meta name="description" content="Learn about SERANEX's mission, philosophy, and our commitment to engineering digital excellence as a dedicated partner in your success." />
      </Head>

      <div className="w-full pt-24 sm:pt-32">
        {/* Page Header */}
        <section className="text-center px-6 pb-16">
          <div className="mx-auto max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter animate-fade-in-down">
              We Are Your Partner In Digital Growth.
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-400 animate-fade-in-up [animation-delay:0.2s]">
              SERANEX was founded on a simple principle: to build exceptional digital products through true partnership. We are a team of passionate engineers and designers dedicated to transforming our clients' visions into reality.
            </p>
          </div>
        </section>

        {/* Our Philosophy Section */}
        <section className="py-16 px-6 bg-black/30">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-base font-semibold leading-7 text-blue-400">Our Philosophy</h2>
              <p className="mt-2 text-4xl md:text-5xl font-bold tracking-tight text-white">The Principles That Guide Us</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <PhilosophyCard 
                icon={<FaHandshake />}
                title="True Partnership"
                description="We succeed when you succeed. We integrate deeply with your team to act as a true technical partner, providing guidance, strategy, and execution at every stage of the product lifecycle."
              />
              <PhilosophyCard 
                icon={<FaShieldAlt />}
                title="Uncompromising Quality"
                description="Our reputation is built on the quality of our work. We adhere to the highest standards of code quality, security, and performance, ensuring your product is reliable, scalable, and built to last."
              />
              <PhilosophyCard 
                icon={<FaLightbulb />}
                title="Innovation & a-Agility"
                description="The digital landscape is always evolving. We stay at the forefront of technology, embracing modern tools and agile methodologies to deliver innovative solutions efficiently and effectively."
              />
            </div>
          </div>
        </section>
        
        {/* Team Section Placeholder */}
        <section className="py-24 sm:py-32 px-6 text-center">
          <FaUsers className="mx-auto text-6xl text-blue-500 mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold text-white">Meet the Engineers</h2>
          <p className="mt-4 max-w-2xl mx-auto text-gray-400">
            Our team is a dedicated group of professionals with a shared passion for technology and problem-solving. We are currently updating this section.
          </p>
        </section>
        
        {/* Footer is already in your layout.js */}
      </div>
    </>
  );
}

// Reusable Philosophy Card Component
const PhilosophyCard = ({ icon, title, description }) => (
  <div className="bg-gray-800 p-8 rounded-2xl border border-gray-700 h-full">
    <div className="text-4xl text-blue-500 mb-4">{icon}</div>
    <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
    <p className="text-gray-400 leading-relaxed">{description}</p>
  </div>
);
