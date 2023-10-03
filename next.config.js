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
    API_KEY_FUTBOL: 'e9cba3e0983b97eea5cb86697ab6e70c'
  },
  images: {
    domains: ["media-4.api-sports.io"],
  },
}

module.exports = nextConfig
