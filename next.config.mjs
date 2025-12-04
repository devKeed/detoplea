/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    domains: ["detoplea.com", "blog.detopleamarketing.com"],
    unoptimized: true,
  },
};

export default nextConfig;
