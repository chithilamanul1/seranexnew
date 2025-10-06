import { NextResponse } from 'next/server';
import { auth } from '@clerk/nextjs/server';
import { db } from '@/lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

export async function POST(request, { params }) {
  // 1. Check if the user is authenticated using Clerk
  const { userId, sessionClaims } = auth();
  if (!userId) {
    return new NextResponse(JSON.stringify({ error: "Unauthorized" }), { status: 401 });
  }

  try {
    // 2. Get the post ID from the URL and content from the request body
    const { postId } = params;
    const { content } = await request.json();

    if (!content) {
      return new NextResponse(JSON.stringify({ error: "Comment content cannot be empty" }), { status: 400 });
    }

    // 3. Prepare the new comment object
    const newComment = {
      postId: postId,
      content: content,
      authorId: userId,
      authorUsername: sessionClaims?.username || 'anonymous_user',
      createdAt: serverTimestamp(),
    };

    // 4. Save the new comment to the 'comments' collection in Firestore
    const docRef = await addDoc(collection(db, "comments"), newComment);

    // 5. Return a success response
    return NextResponse.json({ success: true, commentId: docRef.id }, { status: 201 });

  } catch (error) {
    console.error("Error creating comment:", error);
    return new NextResponse(JSON.stringify({ error: "Failed to create comment" }), { status: 500 });
  }
}
