/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.mp4$/,
      use: {
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          publicPath: '/_next/static/videos',
          outputPath: 'static/videos',
        },
      },
    });
    return config
  },
  env: {
    API_KEY_FUTBOL: process.env.API_KEY
  },
  images: {
    domains: ["media-4.api-sports.io"],
  },
}

module.exports = nextConfig
