import Link from 'next/link';
import { db } from '@/lib/firebase'; // Adjust this path if your firebase.js is elsewhere
import { collection, getDocs, orderBy, query } from 'firebase/firestore';

// Server-side function to fetch all posts
async function getPosts() {
  const postsCollection = collection(db, 'posts');
  // Query to order posts by creation date, with the newest first
  const q = query(postsCollection, orderBy('createdAt', 'desc'));
  const postsSnapshot = await getDocs(q);

  const posts = postsSnapshot.docs.map(doc => {
    const data = doc.data();
    return {
      id: doc.id,
      ...data,
      // Convert the Firestore Timestamp to a readable date string
      createdAt: data.createdAt ? new Date(data.createdAt.seconds * 1000).toLocaleDateString() : 'Date not available',
    };
  });

  return posts;
}

// This is the main blog page component
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
              {/* The post title is now a link to the detail page */}
              <Link href={`/blog/${post.id}`}>
                <h2 className="text-2xl font-bold text-gray-800 mb-2 hover:text-indigo-600 cursor-pointer transition-colors">
                  {post.title}
                </h2>
              </Link>
              <p className="text-sm text-gray-500 mb-4">
                Posted by {post.authorUsername} on {post.createdAt}
              </p>
              {/* Shows a short preview of the content */}
              <p className="text-gray-700 whitespace-pre-wrap line-clamp-3">
                {post.content}
              </p>
              <Link href={`/blog/${post.id}`} className="text-indigo-600 hover:underline mt-4 inline-block font-semibold">
                Read more &rarr;
              </Link>
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
