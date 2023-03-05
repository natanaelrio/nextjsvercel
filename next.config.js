/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true
}

module.exports = {
  images: {
    domains: ['i.postimg.cc','images.pexels.com','tinypic.host', '2.bp.blogspot.com', 'localhost']},
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


