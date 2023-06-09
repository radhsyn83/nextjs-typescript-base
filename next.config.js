/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'asset-3s.3second.co.id',
        port: '',
      },
    ],
  },
};

module.exports = nextConfig;
