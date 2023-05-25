/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    config.resolve = {
      ...config.resolve,
      fallback: {
        fs: false,
      },
    };
    return config;
  },
  images: {
    domains: [
      "image.similarpng.com",
      "cdn.dribbble.com",
      "images.unsplash.com",
      "cdn.dribbblNamee.com",
      "media-exp1.licdn.com",
    ],
  },
};

module.exports = nextConfig;
