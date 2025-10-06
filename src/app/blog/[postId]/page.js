// ... (imports remain the same, add ReactMarkdown)
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm'; // For tables, strikethrough, etc.

// ... (getPost, getComments, generateMetadata functions remain the same)

export default async function PostDetailPage({ params }) {
  // ... (data fetching logic remains the same)

  if (!post) { /* ... */ }

  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6 lg:p-8">
      <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">{post.title}</h1>
        <p className="text-sm text-gray-500 mb-4">
          Posted by <Link href={`/user/${post.authorUsername}`} className="font-semibold hover:underline">{post.authorUsername}</Link> on {post.createdAt}
        </p>
        {/* THIS IS THE NEW PART */}
        <div className="prose max-w-none lg:prose-lg">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.content}</ReactMarkdown>
        </div>
      </div>
      <CommentSection postId={post.id} initialComments={comments} user={user} />
    </div>
  );
}
