/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
    // domains: ['moa.ie', 'pixabay.com', 'cdn.pixabay.com'],
  },
  basePath: '',
  assetPrefix: '',
}

module.exports = nextConfig 