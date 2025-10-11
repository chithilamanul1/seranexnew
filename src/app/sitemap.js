import { blogPosts } from '@/lib/blogData';

export default function sitemap() {
  const siteUrl = 'https://www.seranex.org'; // <-- IMPORTANT: Replace with your final domain

  // Get all blog post routes
  const postRoutes = blogPosts.map((post) => ({
    url: `${siteUrl}/blog/${post.slug}`,
    lastModified: new Date(),
  }));

  // Define your static routes
  const staticRoutes = [
    { url: siteUrl, lastModified: new Date() },
    { url: `${siteUrl}/about`, lastModified: new Date() },
    { url: `${siteUrl}/services`, lastModified: new Date() },
    { url: `${siteUrl}/portfolio`, lastModified: new Date() },
    { url: `${siteUrl}/contact`, lastModified: new Date() },
    { url: `${siteUrl}/blog`, lastModified: new Date() },
    { url: `${siteUrl}/privacy-policy`, lastModified: new Date() },
    { url: `${siteUrl}/terms-of-service`, lastModified: new Date() },
    { url: `${siteUrl}/testimonials`, lastModified: new Date() },
  ];

  return [...staticRoutes, ...postRoutes];
}
