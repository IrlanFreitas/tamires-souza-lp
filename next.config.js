/** @type {import('next').NextConfig} */
const nextConfig = {
  // Otimizações para performance e SEO
  compress: true,
  poweredByHeader: false,
  
  // Configurações de imagem
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  
  // ISR e SSG
  // experimental: {
  //   isrMemoryCacheSize: 50 * 1024 * 1024, // 50MB
  // },

  // Headers customizados para performance
  async headers() {
    return [
      {
        source: '/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
        ],
      },
    ]
  },
};

export default nextConfig;
