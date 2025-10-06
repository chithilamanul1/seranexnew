import { NextResponse } from 'next/server';
import { auth } from '@clerk/nextjs/server';
import { db } from '@/lib/firebase';
import { doc, runTransaction, collection, query, where, getDocs } from 'firebase/firestore';

export async function POST(request, { params }) {
  const { userId } = auth();
  if (!userId) {
    return new NextResponse(JSON.stringify({ error: "Unauthorized" }), { status: 401 });
  }

  const { postId } = params;
  const { voteType } = await request.json(); // 'up' or 'down'

  if (!['up', 'down'].includes(voteType)) {
    return new NextResponse(JSON.stringify({ error: "Invalid vote type" }), { status: 400 });
  }

  const postRef = doc(db, "posts", postId);
  const voteRef = doc(collection(db, `posts/${postId}/votes`), userId);

  try {
    await runTransaction(db, async (transaction) => {
      const voteDoc = await transaction.get(voteRef);
      const postDoc = await transaction.get(postRef);

      if (!postDoc.exists()) {
        throw new Error("Post does not exist!");
      }

      let newVoteCount = postDoc.data().voteCount || 0;
      const voteValue = voteType === 'up' ? 1 : -1;

      if (voteDoc.exists()) {
        // User is changing or removing their vote
        const existingVote = voteDoc.data().value;
        if (existingVote === voteValue) {
          // User clicked the same button again, removing their vote
          transaction.delete(voteRef);
          newVoteCount -= voteValue;
        } else {
          // User changed their vote (e.g., from up to down)
          transaction.set(voteRef, { value: voteValue });
          newVoteCount += voteValue - existingVote;
        }
      } else {
        // User is casting a new vote
        transaction.set(voteRef, { value: voteValue });
        newVoteCount += voteValue;
      }
      
      transaction.update(postRef, { voteCount: newVoteCount });
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Transaction failed: ", error);
    return new NextResponse(JSON.stringify({ error: "Failed to process vote" }), { status: 500 });
  }
}
