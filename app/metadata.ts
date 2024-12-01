import { Metadata } from 'next';
import { siteConfig } from '@/config/site';

const title = 'Zaira Gonçalves - Desenvolvedora Frontend e UI Designer';
const description = 'Desenvolvedora Frontend especializada em React, Next.js e UI Design. Criando experiências digitais únicas e interfaces intuitivas.';

export const sharedMetadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: title,
    template: `%s | ${siteConfig.name}`,
  },
  description,
  keywords: [
    'Desenvolvimento Web',
    'Frontend',
    'React',
    'Next.js',
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
    'TypeScript'
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
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
    bing: process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION,
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
    'google-adsense-account': process.env.NEXT_PUBLIC_GOOGLE_ADSENSE_ID,
    'msapplication-TileColor': '#da532c',
    'theme-color': '#ffffff',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
    'apple-mobile-web-app-title': siteConfig.name,
    'mobile-web-app-capable': 'yes',
    'msapplication-config': '/browserconfig.xml',
  },
};
