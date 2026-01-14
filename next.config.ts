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
  // Redirects configuration
  async redirects() {
    return [
      {
        source: '/meeting-jt',
        destination: 'https://calendly.com/meeting-jt',
        permanent: true, // 308 redirect (permanent)
      },
      // Force www to non-www redirect
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'www.pivotaltech.solutions',
          },
        ],
        destination: 'https://pivotaltech.solutions/:path*',
        permanent: true,
      },
      // Force HTTPS
      {
        source: '/:path*',
        has: [
          {
            type: 'header',
            key: 'x-forwarded-proto',
            value: 'http',
          },
        ],
        destination: 'https://pivotaltech.solutions/:path*',
        permanent: true,
      },
    ];
  },
  // Headers configuration to force canonical domain
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Robots-Tag',
            value: 'index, follow',
          },
        ],
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
