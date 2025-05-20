/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: process.env.NODE_ENV === 'production' ? '/cv-website' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/cv-website/' : '',
  images: {
    unoptimized: true
  },
  assetPrefix: '/cv-website',
  basePath: '/cv-website'
}

module.exports = nextConfig