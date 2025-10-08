/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true
  },
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'placehold.co' }
    ]
  },
  experimental: {
    serverActions: false
  },
  output: 'standalone'
};

module.exports = nextConfig;
