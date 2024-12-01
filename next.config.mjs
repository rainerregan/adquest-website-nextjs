
/** @type {import('next').NextConfig} */

const nextConfig = {
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
  images: {
    domains: ['adquest.id'], // List of allowed domains
  },
};

export default nextConfig;
