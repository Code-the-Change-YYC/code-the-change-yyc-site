/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  PUBLIC_ACCESS_TOKEN: process.env.NEXT_PUBLIC_ACCESS_TOKEN,
  // Allow images fromm contentful
  images: {
    domains: ['images.ctfassets.net'],
  },
};

module.exports = nextConfig;
