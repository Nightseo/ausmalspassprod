/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'v0.blob.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'hebbkx1anhila5yf.public.blob.vercel-storage.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.mundocolorear.es',
        port: '',
        pathname: '/**',
      },
    ],
  },
  // Eliminamos todas las redirecciones para evitar conflictos
  async redirects() {
    return []
  }
};

export default nextConfig;

