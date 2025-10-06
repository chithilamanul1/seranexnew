export default function robots() {
  const URL = "https://your-website-url.com"; // Replace with your actual domain

  return {
    rules: {
      userAgent: '*', // Apply these rules to all bots
      allow: '/',     // Allow them to crawl everything
      // disallow: '/private/', // You can block specific folders here if needed
    },
    sitemap: `${URL}/sitemap.xml`, // Tell bots where to find your sitemap
  };
}
