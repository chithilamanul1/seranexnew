export default function robots() {
  const siteUrl = 'https://www.seranex.org'; // <-- IMPORTANT: Replace with your final domain

  return {
    rules: {
      userAgent: '*', // Apply rules to all bots
      allow: '/',     // Allow them to crawl everything
    },
    sitemap: `${siteUrl}/sitemap.xml`, // Point bots to your sitemap
  };
}
