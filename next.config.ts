import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Optimize for faster development
  typescript: {
    // Only check types during build, not during dev
    ignoreBuildErrors: false,
  },
  eslint: {
    // Only run ESLint during build, not during dev
    ignoreDuringBuilds: false,
  },
  // Enable experimental features for better performance
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },
  // Optimize webpack
  webpack: (config, { dev }) => {
    if (dev) {
      // Speed up development builds
      config.watchOptions = {
        poll: 1000,
        aggregateTimeout: 300,
      };
    }
    return config;
  },
};

export default nextConfig;
