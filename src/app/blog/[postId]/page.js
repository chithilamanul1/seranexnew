import { db } from '@/lib/firebase';
import { doc, getDoc, collection, query, where, getDocs, orderBy } from 'firebase/firestore';
import { currentUser } from '@clerk/nextjs/server';
import CommentSection from '@/components/CommentSection';
import Link from 'next/link';

async function getPost(postId) { /* ... same as before ... */ }
async function getComments(postId) { /* ... same as before ... */ }

export async function generateMetadata({ params }) {
  const post = await getPost(params.postId);
  if (!post) return { title: 'Post Not Found' };
  return {
    title: post.title,
    description: post.content.substring(0, 160),
  };
}

export default async function PostDetailPage({ params }) {
  const { postId } = params;
  const [post, comments, user] = await Promise.all([ getPost(postId), getComments(postId), currentUser() ]);

  if (!post) {
    return (
        <div className="text-center p-10"><h1 className="text-2xl font-bold">Post not found.</h1><Link href="/blog" className="text-indigo-600 hover:underline mt-4 inline-block">&larr; Back to all posts</Link></div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6 lg:p-8">
      <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">{post.title}</h1>
        <p className="text-sm text-gray-500 mb-4">Posted by {post.authorUsername} on {post.createdAt}</p>
        <div className="prose max-w-none"><p className="text-gray-700 whitespace-pre-wrap text-lg">{post.content}</p></div>
      </div>
      <CommentSection postId={post.id} initialComments={comments} user={user} />
    </div>
  );
}
