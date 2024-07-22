/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Optional: Configure basePath if needed for your project
  basePath: "",

  // Optional: Enable static export for Cloudflare Pages
//  output: 'export',

  // Configure Webpack
  webpack(config) {
    config.module.rules.push({
      test: /\.(mp3)$/i,
      use: [
        {
          loader: 'file-loader',
        },
      ],
    });
    return config;
  },

  // Optional: Disable Image Optimization for static export
  images: {
    unoptimized: true, // Cloudflare Pages may not support Next.js image optimization
  },
};

module.exports = nextConfig;
