'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function CommentSection({ postId, initialComments, user }) {
  const [comments, setComments] = useState(initialComments);
  const [newComment, setNewComment] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const response = await fetch(`/api/posts/${postId}/comments`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ content: newComment }),
    });

    if (response.ok) {
      setNewComment('');
      // Refresh the page to show the new comment
      router.refresh(); 
    } else {
      alert('Failed to submit comment.');
    }
    setIsSubmitting(false);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Comments ({comments.length})</h2>

      {/* --- Conditional UI Starts Here --- */}
      {user ? (
        // SHOW COMMENT FORM IF USER IS LOGGED IN
        <form onSubmit={handleSubmit} className="mb-6">
          <textarea
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Write your comment..."
            rows="4"
            required
          ></textarea>
          <button
            type="submit"
            disabled={isSubmitting}
            className="mt-3 inline-block bg-indigo-600 text-white font-semibold py-2 px-4 rounded-md shadow-sm hover:bg-indigo-700 disabled:bg-indigo-300"
          >
            {isSubmitting ? 'Submitting...' : 'Submit Comment'}
          </button>
        </form>
      ) : (
        // SHOW LOGIN PROMPT IF USER IS NOT LOGGED IN
        <div className="text-center border-2 border-dashed border-gray-300 p-6 rounded-lg mb-6">
          <p className="text-gray-600">
            <Link href="/sign-in" className="text-indigo-600 font-semibold hover:underline">Sign in</Link> or 
            <Link href="/sign-up" className="text-indigo-600 font-semibold hover:underline"> Sign up</Link> to leave a comment.
          </p>
        </div>
      )}
      {/* --- Conditional UI Ends Here --- */}

      {/* Display Existing Comments */}
      <div className="space-y-4">
        {comments.map(comment => (
          <div key={comment.id} className="p-4 border-b border-gray-200">
            <p className="text-gray-800">{comment.content}</p>
            <p className="text-xs text-gray-500 mt-2">
              By {comment.authorUsername} on {comment.createdAt}
            </p>
            {/* We will add "like" buttons here later */}
          </div>
        ))}
        {comments.length === 0 && <p className="text-gray-500">No comments yet.</p>}
      </div>
    </div>
  );
}
