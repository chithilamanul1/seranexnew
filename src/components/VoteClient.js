'use client';

import { useState } from 'react';
import { FaArrowUp, FaArrowDown } from 'react-icons/fa';

export default function VoteClient({ post }) {
  const [voteCount, setVoteCount] = useState(post.voteCount || 0);

  // In a real app, you'd also fetch and set the user's current vote status
  // For now, this handles the visual feedback and API call
  
  const handleVote = async (voteType) => {
    // Optimistic Update: Change the UI immediately
    const previousVoteCount = voteCount;
    setVoteCount(current => current + (voteType === 'up' ? 1 : -1));

    const response = await fetch(`/api/posts/${post.id}/vote`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ voteType }),
    });

    if (!response.ok) {
      // If the API call fails, revert the change
      setVoteCount(previousVoteCount);
      alert('Failed to vote. Please try again.');
    }
    // If successful, the change is already reflected in the UI
  };

  return (
    <div className="flex flex-col items-center p-3 bg-gray-50 rounded-l-lg">
      <button onClick={() => handleVote('up')} aria-label="Upvote" className="text-gray-500 hover:text-indigo-600">
        <FaArrowUp size="1.2em" />
      </button>
      <span className="font-bold text-lg my-1">{voteCount}</span>
      <button onClick={() => handleVote('down')} aria-label="Downvote" className="text-gray-500 hover:text-red-600">
        <FaArrowDown size="1.2em" />
      </button>
    </div>
  );
}
