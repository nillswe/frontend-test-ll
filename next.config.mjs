/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: 'localhost',
      },
      {
        hostname: 'picsum.photos',
      },
      {
        hostname: 'static.netshoes.com.br',
      },
    ],
  },
}

export default nextConfig
