import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compress: true,
  images: {
    qualities: [75, 100],
  },
  reactStrictMode: true,
  experimental: {
    optimizePackageImports: ["react-icons", "framer-motion"],
  },
};

export default nextConfig;
