import { db } from '@/lib/firebase';
import { collection, query, where, getDocs, orderBy } from 'firebase/firestore';
import Link from 'next/link';

async function getUserData(username) {
  const postsRef = collection(db, 'posts');
  const q = query(postsRef, where('authorUsername', '==', username), orderBy('createdAt', 'desc'));
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
}

export default async function UserProfilePage({ params }) {
  const { username } = params;
  const posts = await getUserData(username);

  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6 lg:p-8">
      <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 mb-8">
        <h1 className="text-3xl font-bold text-gray-900">u/{username}</h1>
        <p className="text-gray-600 mt-1">Posts and activity from this user.</p>
      </div>

      <h2 className="text-2xl font-bold mb-4">Posts</h2>
      <div className="space-y-4">
        {posts.length > 0 ? (
          posts.map(post => (
            <div key={post.id} className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
              <Link href={`/blog/${post.id}`}>
                <h3 className="text-lg font-semibold hover:text-indigo-600">{post.title}</h3>
              </Link>
              <p className="text-sm text-gray-500 mt-1">
                {new Date(post.createdAt.seconds * 1000).toLocaleDateString()}
              </p>
            </div>
          ))
        ) : (
          <p>This user hasn't posted anything yet.</p>
        )}
      </div>
    </div>
  );
}
