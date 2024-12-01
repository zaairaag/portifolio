import { MetadataRoute } from 'next';
import { siteConfig } from '@/config/site';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.name,
    short_name: 'Zaira Gonçalves',
    description: 'Desenvolvedora Frontend especializada em React, Next.js e UI Design. Criando experiências digitais únicas e interfaces intuitivas.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#ffffff',
    orientation: 'portrait',
    scope: '/',
    lang: 'pt-BR',
    categories: ['business', 'technology', 'education', 'development'],
    icons: [
      {
        src: '/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: '/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: '/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: '/favicon-32x32.png',
        sizes: '32x32',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: '/favicon-16x16.png',
        sizes: '16x16',
        type: 'image/png',
        purpose: 'any',
      },
    ],
    screenshots: [
      {
        src: '/screenshots/home.jpg',
        sizes: '1920x1080',
        type: 'image/jpeg'
      },
      {
        src: '/screenshots/portfolio.jpg',
        sizes: '1920x1080',
        type: 'image/jpeg'
      },
      {
        src: '/screenshots/blog.jpg',
        sizes: '1920x1080',
        type: 'image/jpeg'
      }
    ],
    shortcuts: [
      {
        name: 'Blog',
        url: '/blog',
        description: 'Leia os últimos artigos sobre desenvolvimento web',
      },
      {
        name: 'Portfolio',
        url: '/portfolio',
        description: 'Veja meus projetos mais recentes',
      },
      {
        name: 'Contato',
        url: '/contato',
        description: 'Entre em contato comigo',
      },
    ],
    related_applications: [
      {
        platform: 'web',
        url: siteConfig.url,
      },
    ],
    prefer_related_applications: false,
    dir: 'ltr'
  };
}
