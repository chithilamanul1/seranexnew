import { db } from '@/lib/firebase';
import { doc, getDoc, collection, query, where, getDocs, orderBy } from 'firebase/firestore';
import { currentUser } from '@clerk/nextjs/server';
import CommentSection from '@/components/CommentSection'; // We will create this next

// Fetch a single post's details
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
// In /app/blog/page.js
...
<Link href={`/blog/${post.id}`}>
  <h2 className="text-2xl font-bold text-gray-800 mb-2 hover:text-indigo-600 cursor-pointer">{post.title}</h2>
</Link>
...
// Fetch comments for a specific post
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

export default async function PostDetailPage({ params }) {
  const { postId } = params;
  const post = await getPost(postId);
  const comments = await getComments(postId);
  const user = await currentUser(); // Get the current user from Clerk

  if (!post) {
    return <div>Post not found.</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6 lg:p-8">
      {/* Post Details */}
      <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">{post.title}</h1>
        <p className="text-sm text-gray-500 mb-4">
          Posted by {post.authorUsername} on {post.createdAt}
        </p>
        <p className="text-gray-700 whitespace-pre-wrap text-lg">{post.content}</p>
      </div>

      {/* Comment Section Component */}
      <CommentSection postId={post.id} initialComments={comments} user={user} />
    </div>
  );
}

