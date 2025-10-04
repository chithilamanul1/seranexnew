import { db } from '@/lib/firebase'; // Using the alias for src
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Add a new document with a generated ID to the "messages" collection
    const docRef = await addDoc(collection(db, "messages"), {
      name,
      email,
      subject,
      message,
      createdAt: serverTimestamp(),
      read: false, // Add a flag to mark messages as unread
    });

    return NextResponse.json({ id: docRef.id }, { status: 201 });
  } catch (error) {
    console.error('Error creating contact message:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}