/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // required for next export on Netlify
  reactStrictMode: true, // optional but recommended
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'placehold.co',
      },
    ],
  },
};

module.exports = nextConfig;
