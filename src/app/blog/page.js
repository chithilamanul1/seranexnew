import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image'; // Import the Next.js Image component
import { blogPosts } from '@/lib/blogData';
import { FaArrowRight } from 'react-icons/fa';

export default function BlogPage() {
  return (
    <>
      <Head>
        <title>Blog | SERANEX</title>
        <meta name="description" content="Insights, articles, and guides on web development, design, and technology from the SERANEX team." />
      </Head>

      <div className="w-full pt-24 sm:pt-32 pb-16">
        {/* Page Header */}
        <section className="text-center px-6 pb-16">
          <div className="mx-auto max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter animate-fade-in-down">
              Insights & Articles
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-400 animate-fade-in-up [animation-delay:0.2s]">
              Expert analysis on web engineering, design strategy, and the technology that drives modern business.
            </p>
          </div>
        </section>

        {/* Blog Grid */}
        <section className="px-6">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        </section>
      </div>
    </>
  );
}

// Reusable Post Card Component - Redesigned
const PostCard = ({ post }) => (
  <Link href={`/blog/${post.slug}`} className="group block bg-gray-800/50 rounded-2xl border border-gray-700 shadow-lg transform hover:-translate-y-2 transition-transform duration-300 overflow-hidden">
    <div className="relative h-48 w-full">
      <Image 
        src={post.image}
        alt={post.title}
        layout="fill"
        objectFit="cover"
        className="transition-transform duration-500 group-hover:scale-105"
      />
    </div>
    <div className="p-6">
      <h2 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">{post.title}</h2>
      <p className="text-gray-400 text-sm leading-relaxed mb-4">{post.description}</p>
      <div className="flex items-center text-sm font-semibold text-blue-400">
        Read Article
        <FaArrowRight className="ml-2 transform group-hover:translate-x-1 transition-transform" />
      </div>
    </div>
  </Link>
);
