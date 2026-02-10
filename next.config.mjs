/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // ✅ Static export for cPanel
  output: 'export',
  trailingSlash: true,

  // ✅ Required for static hosting
  images: {
    unoptimized: true,
  },

  experimental: {
    optimizePackageImports: ['lucide-react', 'react-icons'],
  },
};

export default nextConfig;
