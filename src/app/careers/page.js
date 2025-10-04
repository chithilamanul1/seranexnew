import Link from 'next/link';

const JobOpening = ({ title, location, type }) => (
    <div className="bg-white/5 p-6 rounded-xl border border-white/10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 transition-colors hover:border-white/20 hover:bg-white/10">
        <div>
            <h3 className="text-xl font-bold text-white">{title}</h3>
            <p className="text-sm text-white/70 mt-1">{location} &middot; {type}</p>
        </div>
        <Link href="/contact" className="bg-white/10 text-white hover:bg-white/20 transition-colors duration-200 text-sm font-bold py-2 px-5 rounded-full whitespace-nowrap">
            Apply Now
        </Link>
    </div>
);

export default function Careers() {
  return (
    <main className="flex-grow py-16 sm:py-24">
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
        <h2 className="text-4xl font-extrabold tracking-tighter text-white sm:text-5xl md:text-6xl">
          Join Our Team
        </h2>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-white/70">
          Explore opportunities to grow your career with a dynamic and innovative company. We value creativity, collaboration, and a passion for excellence.
        </p>
      </section>

      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-3xl font-bold text-white mb-8 text-center">Current Openings</h3>
        <div className="space-y-6 max-w-4xl mx-auto">
            <JobOpening title="Senior Frontend Developer (React/Next.js)" location="Remote" type="Full-time" />
            <JobOpening title="Lead Product Designer (UI/UX)" location="Benthota, Sri Lanka" type="Full-time" />
            <JobOpening title="Digital Marketing Specialist" location="Remote" type="Contract" />
            <JobOpening title="Mobile App Developer (Flutter)" location="Remote" type="Full-time" />
        </div>
        <div className="text-center mt-12">
            <p className="text-white/70">Don't see a role that fits? <Link href="/contact" className="text-theme-blue hover:underline font-semibold">Get in touch</Link> and tell us why you'd be a great fit.</p>
        </div>
      </section>
    </main>
  );
}