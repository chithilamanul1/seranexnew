import { db } from '@/lib/firebase';
import { collection, getDocs } from 'firebase/firestore';

const URL = "https://your-website-url.com"; // Replace with your actual domain

export default async function sitemap() {
  // Fetch all blog posts to create dynamic routes
  const postsCollection = collection(db, 'posts');
  const postsSnapshot = await getDocs(postsCollection);
  const posts = postsSnapshot.docs.map(doc => ({
    url: `${URL}/blog/${doc.id}`,
    lastModified: new Date(), // Or use a date from your post data
  }));

  // Add your static routes
  const routes = [
    { url: URL, lastModified: new Date() },
    { url: `${URL}/blog`, lastModified: new Date() },
    // Add other static pages here
  ];

  return [...routes, ...posts];
}
