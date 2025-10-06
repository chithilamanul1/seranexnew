'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import SimpleMdeReact from 'react-simplemde-editor';
import { storage } from '@/lib/firebase'; // Assuming your firebase.js exports 'storage'
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { v4 as uuidv4 } from 'uuid';

export default function CreatePostPage() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState(''); // This will now be Markdown
  const [error, setError] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  const handleImageUpload = async (file, onSuccess, onError) => {
    try {
      const uniqueFileName = `${uuidv4()}-${file.name}`;
      const storageRef = ref(storage, `post-images/${uniqueFileName}`);
      const snapshot = await uploadBytes(storageRef, file);
      const downloadURL = await getDownloadURL(snapshot.ref);
      onSuccess(downloadURL); // This gives the URL back to the editor
    } catch (e) {
      console.error("Upload failed", e);
      onError(e);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const response = await fetch('/api/posts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, content }),
    });

    if (response.ok) {
      alert('Post created successfully!');
      router.push('/blog');
    } else {
      const data = await response.json();
      setError(data.error || 'An unexpected error occurred.');
    }
    setIsSubmitting(false);
  };

  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6 lg:p-8 bg-white rounded-lg shadow-md mt-8">
      <h1 className="text-3xl font-bold mb-6 text-gray-900">Create a New Post</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">Title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            required
          />
        </div>
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-1">Content</label>
          <SimpleMdeReact
            value={content}
            onChange={setContent}
            options={{
              spellChecker: false,
              uploadImage: true,
              imageUploadFunction: handleImageUpload,
            }}
          />
        </div>
        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-300"
        >
          {isSubmitting ? 'Submitting...' : 'Create Post'}
        </button>
      </form>
    </div>
  );
}
