import Link from 'next/link';
import { db } from '@/lib/firebase';
import { collection, getDocs, orderBy, query } from 'firebase/firestore';
import { FaCommentAlt, FaShare, FaBookmark, FaFire, FaRegClock } from 'react-icons/fa';
import VoteClient from '@/components/VoteClient'; // <-- IMPORT THE NEW VOTE COMPONENT

// The getPosts function is now smarter and can sort
async function getPosts(sortBy = 'new') {
  const postsCollection = collection(db, 'posts');
  let q;

  if (sortBy === 'hot') {
    // A simplified "hot" sort: orders by the vote count.
    // A true algorithm also factors in the age of the post.
    q = query(postsCollection, orderBy('voteCount', 'desc'));
  } else {
    // Default to "new" sort
    q = query(postsCollection, orderBy('createdAt', 'desc'));
  }

  const postsSnapshot = await getDocs(q);
  return postsSnapshot.docs.map(doc => {
    const data = doc.data();
    return { id: doc.id, ...data, createdAt: data.createdAt ? new Date(data.createdAt.seconds * 1000).toLocaleDateString() : 'N/A' };
  });
}

export default async function BlogPage({ searchParams }) {
  // Read the 'sort' parameter from the URL (e.g., /blog?sort=hot)
  const sortBy = searchParams.sort || 'new';
  const posts = await getPosts(sortBy);

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 grid grid-cols-12 gap-8">
        {/* --- Left Sidebar --- */}
        <aside className="hidden md:block col-span-3">
            {/* ... left sidebar code remains the same ... */}
        </aside>

        {/* --- Main Feed --- */}
        <main className="col-span-12 md:col-span-6">
          <div className="space-y-6">
            {/* Create Post Bar */}
            <div className="bg-white p-4 rounded-lg shadow-md border border-gray-200">
              <Link href="/create-post">
                <input type="text" placeholder="Create a new post..." className="w-full bg-gray-100 border border-gray-300 rounded-md py-2 px-4 cursor-pointer hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
              </Link>
            </div>

            {/* Sorting Tabs */}
            <div className="bg-white p-2 rounded-lg shadow-md border border-gray-200 flex items-center space-x-4">
              <Link href="/blog?sort=hot" className={`flex items-center space-x-2 px-4 py-2 rounded-md font-semibold text-sm ${sortBy === 'hot' ? 'bg-indigo-100 text-indigo-700' : 'text-gray-600 hover:bg-gray-100'}`}>
                <FaFire />
                <span>Hot</span>
              </Link>
              <Link href="/blog?sort=new" className={`flex items-center space-x-2 px-4 py-2 rounded-md font-semibold text-sm ${sortBy === 'new' ? 'bg-indigo-100 text-indigo-700' : 'text-gray-600 hover:bg-gray-100'}`}>
                <FaRegClock />
                <span>New</span>
              </Link>
            </div>
            
            {/* Posts Feed */}
            {posts.map(post => (
              <div key={post.id} className="bg-white rounded-lg shadow-md border border-gray-200 flex">
                {/* INTERACTIVE VOTE SECTION */}
                <VoteClient post={post} />

                {/* Main Content Section */}
                <div className="p-4 flex-grow">
                  <p className="text-xs text-gray-500 mb-1">Posted by {post.authorUsername} on {post.createdAt}</p>
                  <Link href={`/blog/${post.id}`}>
                    <h2 className="text-xl font-bold text-gray-800 mb-2 hover:text-indigo-600 cursor-pointer transition-colors">{post.title}</h2>
                  </Link>
                  <div className="max-h-24 overflow-hidden relative">
                    <p className="text-gray-700 whitespace-pre-wrap">{post.content}</p>
                    <div className="absolute bottom-0 w-full h-8 bg-gradient-to-t from-white to-transparent"></div>
                  </div>
                  <div className="flex items-center space-x-4 mt-4 text-gray-500 text-sm font-semibold">
                     <Link href={`/blog/${post.id}`} className="flex items-center space-x-1 hover:text-indigo-600"><FaCommentAlt /><span>Comments</span></Link>
                     <button className="flex items-center space-x-1 hover:text-indigo-600"><FaShare /><span>Share</span></button>
                     <button className="flex items-center space-x-1 hover:text-indigo-600"><FaBookmark /><span>Save</span></button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>

        {/* --- Right Sidebar --- */}
        <aside className="hidden lg:block col-span-3">
          {/* ... right sidebar code remains the same ... */}
        </aside>
      </div>
    </div>
  );
}
