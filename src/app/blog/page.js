import Link from 'next/link';
import { db } from '@/lib/firebase'; // Adjust this path if your firebase.js is elsewhere
import { collection, getDocs, orderBy, query } from 'firebase/firestore';

// Function to fetch all posts from Firestore
async function getPosts() {
  const postsCollection = collection(db, 'posts');
  // Create a query to order posts by creation date, newest first
  const q = query(postsCollection, orderBy('createdAt', 'desc'));
  const postsSnapshot = await getDocs(q);

  const posts = postsSnapshot.docs.map(doc => {
    const data = doc.data();
    return {
      id: doc.id,
      ...data,
      // Convert Firestore Timestamp to a readable date string
      createdAt: data.createdAt ? new Date(data.createdAt.seconds * 1000).toLocaleDateString() : 'Date not available',
    };
  });

  return posts;
}

// This is a React Server Component
export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6 lg:p-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold text-gray-900">Blog Feed</h1>
        <Link href="/create-post" className="inline-block bg-indigo-600 text-white font-semibold py-2 px-4 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          Create New Post
        </Link>
      </div>

      <div className="space-y-6">
        {posts.length > 0 ? (
          posts.map(post => (
            <div key={post.id} className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">{post.title}</h2>
              <p className="text-sm text-gray-500 mb-4">
                Posted by {post.authorUsername} on {post.createdAt}
              </p>
              <p className="text-gray-700 whitespace-pre-wrap">{post.content}</p>
              {/* We will add voting buttons here in a later step */}
            </div>
          ))
        ) : (
          <div className="text-center py-10 bg-gray-50 rounded-lg">
            <p className="text-gray-600">No posts yet. Be the first to create one!</p>
          </div>
        )}
      </div>
    </div>
  );
}
