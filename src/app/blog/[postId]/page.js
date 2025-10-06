import { db } from '@/lib/firebase';
import { doc, getDoc, collection, query, where, getDocs, orderBy } from 'firebase/firestore';
import { currentUser } from '@clerk/nextjs/server';
import CommentSection from '@/components/CommentSection'; // We'll create this next
import Link from 'next/link';

// Server-side function to fetch a single post
async function getPost(postId) {
  const postRef = doc(db, 'posts', postId);
  const postSnap = await getDoc(postRef);

  if (!postSnap.exists()) {
    return null;
  }
  const data = postSnap.data();
  return {
    id: postSnap.id,
    ...data,
    createdAt: data.createdAt ? new Date(data.createdAt.seconds * 1000).toLocaleDateString() : 'N/A',
  };
}

// Server-side function to fetch all comments for a post
async function getComments(postId) {
  const commentsRef = collection(db, 'comments');
  const q = query(commentsRef, where('postId', '==', postId), orderBy('createdAt', 'asc'));
  const querySnapshot = await getDocs(q);
  
  return querySnapshot.docs.map(doc => {
    const data = doc.data();
    return {
      id: doc.id,
      ...data,
      createdAt: data.createdAt ? new Date(data.createdAt.seconds * 1000).toLocaleString() : 'N/A',
    };
  });
}

// The main page component
export default async function PostDetailPage({ params }) {
  const { postId } = params;
  
  // Fetch the post, comments, and current user in parallel
  const [post, comments, user] = await Promise.all([
    getPost(postId),
    getComments(postId),
    currentUser()
  ]);

  if (!post) {
    return (
        <div className="text-center p-10">
            <h1 className="text-2xl font-bold">Post not found.</h1>
            <Link href="/blog" className="text-indigo-600 hover:underline mt-4 inline-block">
                &larr; Back to all posts
            </Link>
        </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6 lg:p-8">
      {/* Post Details Card */}
      <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">{post.title}</h1>
        <p className="text-sm text-gray-500 mb-4">
          Posted by {post.authorUsername} on {post.createdAt}
        </p>
        <div className="prose max-w-none">
            <p className="text-gray-700 whitespace-pre-wrap text-lg">{post.content}</p>
        </div>
      </div>

      {/* Interactive Comment Section */}
      <CommentSection postId={post.id} initialComments={comments} user={user} />
    </div>
  );
}
