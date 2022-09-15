const removeImports = require('next-remove-imports')();
module.exports = removeImports({});

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['pollitoxiangxiang.com', 'cdn.akamai.steamstatic.com'],
  },
}

module.exports = nextConfig
