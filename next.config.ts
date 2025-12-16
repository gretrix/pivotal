import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone',
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
  // Redirects configuration
  async redirects() {
    return [
      {
        source: '/meeting-jt',
        destination: 'https://calendly.com/meeting-jt',
        permanent: true, // 308 redirect (permanent)
      },
    ];
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
