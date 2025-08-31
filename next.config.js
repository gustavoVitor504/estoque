/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configurações opcionais
  experimental: {
    appDir: true, // Para usar App Router (já é padrão no Next 13.4+)
  },
  // Outras configurações se necessário
  images: {
    domains: [], // Se usar next/image com domínios externos
  },
}

module.exports = nextConfig