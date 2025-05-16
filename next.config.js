/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    transpilePackages: ['@solana/wallet-adapter-react-ui'],
    // Use Node.js 16 compatible settings
    swcMinify: false,
    images: {
      domains: ['localhost'],
    },
  }
  
  module.exports = nextConfig