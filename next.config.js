/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    transpilePackages: ['@solana/wallet-adapter-react-ui'],
    // swcMinify option removed as it's no longer supported
    images: {
      domains: ['localhost'],
    },
  }
  
  module.exports = nextConfig