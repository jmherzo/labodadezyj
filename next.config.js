/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["images.unsplash.com"],
  },
  async rewrites() {
    return [
      {
        source: "/regalos",
        destination: "/",
      },
    ];
  },
};

module.exports = nextConfig;
