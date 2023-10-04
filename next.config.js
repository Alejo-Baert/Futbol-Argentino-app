/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config, { isServer }) {
    const prefix = config.assetPrefix ?? config.basePath ?? '';
    config.module.rules.push({
      test: /\.mp4$/,
      use: [{
        loader: 'file-loader',
        options: {
          publicPath: `${prefix}/_next/static/media/`,
          outputPath: `${isServer ? '../' : ''}static/media/`,
          name: '[name].[hash].[ext]',
        },
      }],
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
