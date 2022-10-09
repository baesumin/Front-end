/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    emotion: true,
  },
  images: {
    domains: [
      'picsum.photos',
      'source.unsplash.com',
      'example.com',
      'lh3.googleusercontent.com',
    ],
  },
}

module.exports = nextConfig
