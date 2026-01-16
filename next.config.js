/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  // Allow images fromm contentful
  images: {
    domains: ['images.ctfassets.net'],
  },
};

module.exports = nextConfig;
