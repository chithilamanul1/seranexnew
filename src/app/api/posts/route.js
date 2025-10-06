import { NextResponse } from 'next/server';
import { auth } from '@clerk/nextjs/server';
import { db } from '@/lib/firebase'; // Adjust this path if your firebase.js is elsewhere
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

export async function POST(request) {
  // 1. Get the authenticated user's data from Clerk
  const { userId, sessionClaims } = auth();

  // 2. If the user is not logged in, return an unauthorized error
  if (!userId) {
    return new NextResponse(JSON.stringify({ error: "Unauthorized" }), { status: 401 });
  }

  try {
    // 3. Get the title and content from the request body
    const body = await request.json();
    const { title, content } = body;

    if (!title || !content) {
      return new NextResponse(JSON.stringify({ error: "Title and content are required" }), { status: 400 });
    }

    // 4. Create a new document in the 'posts' collection in Firestore
    const newPost = {
      title,
      content,
      authorId: userId,
      // Use the username from Clerk's session, or a fallback
      authorUsername: sessionClaims?.username || 'anonymous', 
      voteCount: 0,
      createdAt: serverTimestamp(), // Use the server's timestamp
    };

    const docRef = await addDoc(collection(db, "posts"), newPost);

    // 5. Return a success response with the new post's ID
    return NextResponse.json({ success: true, postId: docRef.id }, { status: 201 });

  } catch (error) {
    console.error("Error creating post:", error);
    return new NextResponse(JSON.stringify({ error: "Failed to create post" }), { status: 500 });
  }
}
