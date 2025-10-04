import Image from 'next/image';

const TestimonialCard = ({ quote, name, title, avatarSrc }) => (
    <div className="bg-white/5 rounded-xl shadow-lg p-8 h-full flex flex-col border border-white/10">
        <div className="flex-grow">
            <p className="text-base italic text-white/70 leading-relaxed">
                "{quote}"
            </p>
        </div>
        <div className="mt-8 flex items-center">
            <Image
                alt={name}
                className="w-16 h-16 rounded-full object-cover border-2 border-theme-blue"
                src={avatarSrc}
                width={64}
                height={64}
            />
            <div className="ml-4">
                <h3 className="text-lg font-bold text-white">{name}</h3>
                <p className="text-sm text-theme-blue">{title}</p>
            </div>
        </div>
    </div>
);

export default function About() {
  return (
    <main className="flex-grow">
      {/* Hero Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 text-center">
        <h2 className="text-4xl font-extrabold tracking-tighter text-white sm:text-5xl md:text-6xl">
            Building the Future, Together.
        </h2>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-white/70">
            Founded on the principles of innovation, collaboration, and speed, Seranex delivers world-class software solutions tailored to drive meaningful business results.
        </p>
        
        {/* Company Stats */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="p-6 rounded-xl bg-white/5 border border-white/10">
                <p className="text-4xl font-extrabold text-theme-blue">3+</p>
                <p className="text-lg font-semibold text-white mt-2">Years Experience</p>
            </div>
            <div className="p-6 rounded-xl bg-white/5 border border-white/10">
                <p className="text-4xl font-extrabold text-theme-blue">100%</p>
                <p className="text-lg font-semibold text-white mt-2">Client Satisfaction</p>
            </div>
            <div className="p-6 rounded-xl bg-white/5 border border-white/10">
                <p className="text-4xl font-extrabold text-theme-blue">24/7</p>
                <p className="text-lg font-semibold text-white mt-2">Global Support</p>
            </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-white/5 py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                    What Our Clients Say
                </h2>
                <p className="mt-3 text-lg text-white/70">
                    Hear from businesses we've helped to build their digital future.
                </p>
            </div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                <TestimonialCard
                    quote="Seranex transformed our online presence with innovative web design and highly professional service. A truly responsive team."
                    name="Sarah Johnson"
                    title="CEO, TechStart Inc."
                    avatarSrc="https://placehold.co/64x64/3B82F6/FFFFFF/png?text=SJ"
                />
                <TestimonialCard
                    quote="Their mobile app development expertise is commendable. They delivered an intuitive app that exceeded our performance expectations."
                    name="Michael Brown"
                    title="Founder, AppLaunch Co."
                    avatarSrc="https://placehold.co/64x64/3B82F6/FFFFFF/png?text=MB"
                />
                <TestimonialCard
                    quote="The graphic design team created a stunning visual identity that perfectly captured our brand's essence. Unmatched creativity."
                    name="Emily Davis"
                    title="Marketing Director, Global Goods"
                    avatarSrc="https://placehold.co/64x64/3B82F6/FFFFFF/png?text=ED"
                />
            </div>
        </div>
      </section>
    </main>
  );
}