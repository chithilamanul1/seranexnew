import Head from 'next/head';
import { blogPosts } from '@/lib/blogData';
import { notFound } from 'next/navigation';

// This function tells Next.js which pages to pre-build
export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

// Helper function to get the data for a specific post
function getPost(slug) {
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) {
    notFound();
  }
  return post;
}

export default function PostPage({ params }) {
  const post = getPost(params.slug);

  return (
    <>
      <Head>
        <title>{post.title} | SERANEX Blog</title>
        <meta name="description" content={post.description} />
      </Head>

      <div className="w-full pt-24 sm:pt-32 pb-16">
        <main className="max-w-4xl mx-auto px-6">
          {/* Post Header */}
          <div className="text-center animate-fade-in-down mb-12">
            <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">
              {post.title}
            </h1>
            <p className="mt-4 text-sm text-gray-400">
              By {post.author} on {post.date}
            </p>
          </div>

          {/* Post Content */}
          <div 
            className="prose prose-invert lg:prose-lg max-w-none prose-headings:font-bold prose-headings:text-white prose-a:text-blue-400 hover:prose-a:text-blue-500 prose-p:text-gray-300 prose-li:text-gray-300"
            dangerouslySetInnerHTML={{ __html: post.content }} 
          />
        </main>
      </div>
    </>
  );
}
