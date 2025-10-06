/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // This is useful for preventing lint errors from failing the build.
    ignoreDuringBuilds: true,
  },
  images: {
    // These patterns allow you to use images from Unsplash and Google.
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: '**.googleusercontent.com',
      },
    ],
  },
};

module.exports = nextConfig;
