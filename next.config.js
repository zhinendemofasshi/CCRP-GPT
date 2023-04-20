/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['links.papareact.com'],
  },
  // open experimental function app
  experimental: {
    appDir: true,
  },
};
