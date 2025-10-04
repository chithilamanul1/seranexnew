import Link from 'next/link';
import Image from 'next/image';

const BlogPostCard = ({ title, date, excerpt, imageSrc, href }) => (
    <Link href={href} className="group flex flex-col overflow-hidden rounded-xl border border-white/10 bg-white/5 transition-all duration-300 hover:border-white/20 hover:bg-white/10">
        <div className="relative h-48 w-full">
            <Image 
                src={imageSrc} 
                alt={title} 
                fill
                style={{objectFit: "cover"}}
                className="transition-transform duration-300 group-hover:scale-105" 
            />
        </div>
        <div className="p-6">
            <p className="text-sm text-theme-blue mb-1">{date}</p>
            <h3 className="text-xl font-bold text-white mb-3 transition-colors duration-200 group-hover:text-theme-blue">
                {title}
            </h3>
            <p className="text-white/70 text-sm">{excerpt}</p>
        </div>
    </Link>
);

export default function Blog() {
  return (
    <main className="flex-grow py-16 sm:py-24">
      <section className="container mx-auto px-4 text-center mb-16">
        <h2 className="text-4xl md:text-6xl font-extrabold text-white tracking-tighter">
          Insights & Innovation
        </h2>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-white/70">
          The latest trends, technical deep-dives, and strategic advice from the Seranex team.
        </p>
      </section>
      
      <section className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <BlogPostCard 
            title="Mastering React Server Components"
            date="October 1, 2024"
            excerpt="A deep dive into how RSCs improve performance and simplify data fetching in modern web applications."
            imageSrc="https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=2670&auto=format&fit=crop"
            href="#"
          />
          <BlogPostCard 
            title="5 UI/UX Principles That Will Define 2025"
            date="September 20, 2024"
            excerpt="We break down the most important design philosophies you need to follow to keep your apps looking modern and intuitive."
            imageSrc="https://images.unsplash.com/photo-1543286386-713b1ec27013?q=80&w=2670&auto=format&fit=crop"
            href="#"
          />
          <BlogPostCard 
            title="Scaling SEO: The Next-Level Strategy"
            date="September 5, 2024"
            excerpt="Beyond keywords: advanced techniques for improving discoverability and conversion rates for online stores."
            imageSrc="https://images.unsplash.com/photo-1457305238719-74e622b7246c?q=80&w=2670&auto=format&fit=crop"
            href="#"
          />
        </div>
      </section>
    </main>
  );
}