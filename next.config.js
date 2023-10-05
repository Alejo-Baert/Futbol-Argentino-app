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
  images: {
    domains: ["media-4.api-sports.io"],
  },
}

module.exports = nextConfig