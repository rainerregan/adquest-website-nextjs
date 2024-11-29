import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  rewrites: async () => {
    return [
      {
        source: '/documents/:file',
        destination: '/documents/:file',
      },
      {
        source: '/app-ads.txt',
        destination: '/app-ads.txt',
      }
    ]
  },
};

export default nextConfig;
