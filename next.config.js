/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['example.com'], // Adicione os domínios das suas imagens aqui
  },
}

module.exports = nextConfig
