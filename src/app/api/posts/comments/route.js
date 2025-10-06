import { NextResponse } from 'next/server';
import { auth } from '@clerk/nextjs/server';
import { db } from '@/lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

export async function POST(request, { params }) {
  // Check if the user is logged in
  const { userId, sessionClaims } = auth();
  if (!userId) {
    return new NextResponse(JSON.stringify({ error: "Unauthorized" }), { status: 401 });
  }

  try {
    const { postId } = params;
    const { content } = await request.json();

    if (!content) {
      return new NextResponse(JSON.stringify({ error: "Comment content is required" }), { status: 400 });
    }

    // Create the new comment object
    const newComment = {
      postId: postId,
      content: content,
      authorId: userId,
      authorUsername: sessionClaims?.username || 'anonymous',
      createdAt: serverTimestamp(),
      // We can add likes/votes later
      // likeCount: 0, 
    };

    // Add the new comment to the 'comments' collection
    const docRef = await addDoc(collection(db, "comments"), newComment);

    return NextResponse.json({ success: true, commentId: docRef.id }, { status: 201 });

  } catch (error) {
    console.error("Error creating comment:", error);
    return new NextResponse(JSON.stringify({ error: "Failed to create comment" }), { status: 500 });
  }
}
