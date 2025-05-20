/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: process.env.NODE_ENV === 'production' ? '/cv-website' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/cv-website/' : '',
  images: {
    unoptimized: true
  },
  assetPrefix: '/lisa-or',
  basePath: '/lisa-or'
}

module.exports = nextConfig
