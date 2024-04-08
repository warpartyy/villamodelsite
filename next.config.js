/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: "",


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


};




module.exports = nextConfig;
