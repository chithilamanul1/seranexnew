import Link from 'next/link';
import { db } from '@/lib/firebase';
import { collection, getDocs, orderBy, query } from 'firebase/firestore';
import { FaArrowUp, FaArrowDown, FaCommentAlt, FaShare, FaBookmark } from 'react-icons/fa';

// (Your getPosts function remains the same)
async function getPosts() {
  const postsCollection = collection(db, 'posts');
  const q = query(postsCollection, orderBy('createdAt', 'desc'));
  const postsSnapshot = await getDocs(q);
  const posts = postsSnapshot.docs.map(doc => {
    const data = doc.data();
    return {
      id: doc.id,
      ...data,
      createdAt: data.createdAt ? new Date(data.createdAt.seconds * 1000).toLocaleDateString() : 'N/A',
    };
  });
  return posts;
}

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 grid grid-cols-12 gap-8">

        {/* --- Left Sidebar (Hidden on mobile) --- */}
        <aside className="hidden md:block col-span-3">
          <div className="sticky top-8 bg-white p-4 rounded-lg shadow-md border border-gray-200">
            <h2 className="text-xl font-bold mb-4">Categories</h2>
            <ul className="space-y-2 text-gray-700">
              <li><a href="#" className="hover:text-indigo-600">#javascript</a></li>
              <li><a href="#" className="hover:text-indigo-600">#nextjs</a></li>
              <li><a href="#" className="hover:text-indigo-600">#firebase</a></li>
              <li><a href="#" className="hover:text-indigo-600">#devops</a></li>
            </ul>
          </div>
        </aside>

        {/* --- Main Feed --- */}
        <main className="col-span-12 md:col-span-6">
          <div className="space-y-6">
            {/* Create Post Bar */}
            <div className="bg-white p-4 rounded-lg shadow-md border border-gray-200">
              <Link href="/create-post">
                <input
                  type="text"
                  placeholder="Create a new post..."
                  className="w-full bg-gray-100 border border-gray-300 rounded-md py-2 px-4 cursor-pointer hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </Link>
            </div>
            
            {/* Posts Feed */}
            {posts.map(post => (
              <div key={post.id} className="bg-white rounded-lg shadow-md border border-gray-200 flex">
                {/* Vote Section */}
                <div className="flex flex-col items-center p-3 bg-gray-50 rounded-l-lg">
                  <button className="text-gray-500 hover:text-indigo-600"><FaArrowUp size="1.2em" /></button>
                  <span className="font-bold text-lg my-1">{post.voteCount || 0}</span>
                  <button className="text-gray-500 hover:text-red-600"><FaArrowDown size="1.2em" /></button>
                </div>

                {/* Main Content Section */}
                <div className="p-4 flex-grow">
                  <p className="text-xs text-gray-500 mb-1">
                    Posted by {post.authorUsername} on {post.createdAt}
                  </p>
                  <Link href={`/blog/${post.id}`}>
                    <h2 className="text-xl font-bold text-gray-800 mb-2 hover:text-indigo-600 cursor-pointer transition-colors">
                      {post.title}
                    </h2>
                  </Link>
                  <div className="max-h-24 overflow-hidden relative">
                    <p className="text-gray-700 whitespace-pre-wrap">{post.content}</p>
                    <div className="absolute bottom-0 w-full h-8 bg-gradient-to-t from-white to-transparent"></div>
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex items-center space-x-4 mt-4 text-gray-500 text-sm font-semibold">
                     <Link href={`/blog/${post.id}`} className="flex items-center space-x-1 hover:text-indigo-600">
                        <FaCommentAlt />
                        <span>Comments</span>
                     </Link>
                     <button className="flex items-center space-x-1 hover:text-indigo-600">
                        <FaShare />
                        <span>Share</span>
                     </button>
                     <button className="flex items-center space-x-1 hover:text-indigo-600">
                        <FaBookmark />
                        <span>Save</span>
                     </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>

        {/* --- Right Sidebar (Hidden on mobile) --- */}
        <aside className="hidden lg:block col-span-3">
          <div className="sticky top-8 bg-white p-4 rounded-lg shadow-md border border-gray-200">
            <h2 className="text-xl font-bold mb-4">About Community</h2>
            <p className="text-sm text-gray-600">This is a platform for developers to share ideas, ask questions, and connect. Feel free to post about your latest projects or tech discoveries!</p>
          </div>
        </aside>

      </div>
    </div>
  );
}
