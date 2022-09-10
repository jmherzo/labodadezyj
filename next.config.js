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
  webpack: (config, { webpack, isServer }) => {
    config.plugins.push(
      new webpack.DefinePlugin({
        __IS_SERVER__: isServer,
      }),
    );
    return config;
  },
};

module.exports = nextConfig;
