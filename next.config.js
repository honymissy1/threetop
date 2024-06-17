/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa')

const nextConfig = {
    ...withPWA({
      disable: process.env.NODE_ENV === 'development',
      dest: "public",
      register: true,
      skipWaiting: true,
      sw: 'service-worker.js',
 
      images: {
        formats: ["image/avif", "image/webp", "image/png", "image/jpg"],
        remotePatterns: [
          {
            protocol: "https",
            hostname: "firebasestorage.googleapis.com",
            port: "",
            pathname: "/**",
          },
        ],
      }
    })
}

module.exports = nextConfig
