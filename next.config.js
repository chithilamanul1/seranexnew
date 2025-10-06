/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // ✅ prevents lint errors (like quote warnings) from breaking builds
  },
  experimental: {
    serverActions: false, // ✅ disables Server Actions if you use static builds
  },
  images: {
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
  output: 'standalone', // ✅ works great for Netlify + SSR
};

export default nextConfig;
