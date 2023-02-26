@type {import('next').NextConfig}
const withStyles = require('@webdeb/next-styles');
const withPlugins = require('next-compose-plugins');
const nextConfig = {
  reactStrictMode: true,
  image: {
    domains: ['https://quiz.edu.vn'],
  },
}

module.exports = nextConfig
