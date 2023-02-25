/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true
}

module.exports = {
  images: {
    domains: ['i.postimg.cc', 'tinypic.host'],
  },
  env: {
    API_ENDPOINT: process.env.API_ENDPOINT
  }
},{
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });

    return config;
  }
}, nextConfig


