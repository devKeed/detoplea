/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["detoplea.com", "blog.detopleamarketing.com"],
  },
  // Enable experimental features if needed
  experimental: {
    optimizePackageImports: ["lucide-react", "react-icons"],
  },
  // Proxy API requests if needed
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "http://localhost:3001/api/:path*",
      },
    ];
  },
};

export default nextConfig;
