import { Metadata } from 'next';
import { siteConfig } from '@/config/site';

const title = 'Zaira Gonçalves - Desenvolvedora Frontend e UI Designer';
const description = 'Desenvolvedora Frontend especializada em React, Next.js e UI Design. Criando experiências digitais únicas e interfaces intuitivas com foco em performance e acessibilidade. Portfolio com projetos e artigos sobre desenvolvimento web moderno.';

export const sharedMetadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: title,
    template: `%s | ${siteConfig.name}`,
  },
  description,
  keywords: [
    'Desenvolvimento Web',
    'Frontend Developer',
    'React Developer',
    'Next.js Expert',
    'UI Design',
    'UX Design',
    'Desenvolvimento Frontend',
    'Web Design',
    'Desenvolvimento de Sites',
    'Criação de Sites',
    'Portfolio Digital',
    'Mentoria Frontend',
    'Blog Tecnologia',
    'Desenvolvimento React',
    'JavaScript',
    'TypeScript',
    'Performance Web',
    'Acessibilidade Web',
    'SEO Optimization',
    'Web Components',
    'Responsive Design',
    'Mobile First',
    'Frontend Architecture',
    'Design System',
    'User Interface',
    'User Experience',
    'Frontend Brasil',
    'Desenvolvedora Web',
    'Portfolio Desenvolvedor',
    'Frontend Portfolio'
  ],
  authors: [
    {
      name: siteConfig.author.name,
      url: siteConfig.url,
    },
  ],
  creator: siteConfig.author.name,
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: siteConfig.url,
    title,
    description,
    siteName: siteConfig.name,
    images: [
      {
        url: `${siteConfig.url}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: title,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: [`${siteConfig.url}/og-image.jpg`],
    creator: '@zairagoncalves',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: siteConfig.url,
    languages: {
      'pt-BR': siteConfig.url,
    },
  },
  verification: {
    ...(process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION ? {
      google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
    } : {}),
    ...(process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION ? {
      other: {
        'msvalidate.01': process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION
      }
    } : {})
  },
  category: 'technology',
  manifest: '/manifest.json',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
    other: [
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        url: '/favicon-32x32.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        url: '/favicon-16x16.png',
      },
      {
        rel: 'mask-icon',
        url: '/safari-pinned-tab.svg',
        color: '#5bbad5',
      },
    ],
  },
  other: {
    ...(process.env.NEXT_PUBLIC_GOOGLE_ADSENSE_ID ? {
      'google-adsense-account': process.env.NEXT_PUBLIC_GOOGLE_ADSENSE_ID
    } : {}),
    'msapplication-TileColor': '#da532c',
    'theme-color': '#ffffff',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
    'apple-mobile-web-app-title': siteConfig.name,
    'mobile-web-app-capable': 'yes',
    'msapplication-config': '/browserconfig.xml'
  },
};
