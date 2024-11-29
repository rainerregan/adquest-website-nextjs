import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  rewrites: async () => {
    return [
      {
        source: '/documents/:file',
        destination: '/documents/:file',
      },
    ]
  },
};

export default nextConfig;
