/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa')

const nextConfig = {
    ...withPWA({
      disable: process.env.NODE_ENV === 'development',
      dest: "public",
      register: true,
      skipWaiting: true,
      sw: 'service-worker.js',
    })
}

module.exports = nextConfig
