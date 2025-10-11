import Head from 'next/head';
import Image from 'next/image'; // Import the Next.js Image component
import { blogPosts } from '@/lib/blogData';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

function getPost(slug) {
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) {
    notFound();
  }
  return post;
}

export async function generateMetadata({ params }) {
  const post = getPost(params.slug);
  return {
    title: post.title,
    description: post.description,
  };
}

export default function PostPage({ params }) {
  const post = getPost(params.slug);

  return (
    <>
      <article className="w-full pt-20">
        {/* Article Header with Image */}
        <header className="relative h-96">
          <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
          <Image 
            src={post.image}
            alt={post.title}
            layout="fill"
            objectFit="cover"
            className="z-0"
          />
          <div className="relative z-20 flex flex-col justify-center items-center h-full text-center text-white p-6">
            <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter animate-fade-in-down">
              {post.title}
            </h1>
            <p className="mt-4 text-sm text-gray-300 animate-fade-in-up [animation-delay:0.2s]">
              By {post.author} on {post.date}
            </p>
          </div>
        </header>

        {/* Article Content */}
        <main className="max-w-4xl mx-auto px-6 py-16">
          <div 
            className="prose prose-invert lg:prose-lg max-w-none prose-headings:font-bold prose-headings:text-white prose-a:text-blue-400 hover:prose-a:text-blue-500 prose-p:text-gray-300 prose-li:text-gray-300"
            dangerouslySetInnerHTML={{ __html: post.content }} 
          />
        </main>
      </article>
    </>
  );
}
