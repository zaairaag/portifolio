import { Metadata } from 'next'

const defaultTitle = 'Zaíra Gonçalves - Desenvolvedora Front-end'
const defaultDescription =
  'Desenvolvedora Front-end apaixonada por criar experiências web incríveis. Especializada em React, Next.js e TypeScript.'

export const defaultSEOConfig: Metadata = {
  title: {
    default: defaultTitle,
    template: '%s | Zaíra Gonçalves'
  },
  description: defaultDescription,
  keywords: [
    'Zaíra Gonçalves',
    'Desenvolvedora Front-end',
    'React',
    'Next.js',
    'TypeScript',
    'Web Development',
    'UI/UX',
    'JavaScript',
    'Tailwind CSS'
  ],
  authors: [
    {
      name: 'Zaíra Gonçalves',
      url: 'https://github.com/zaairaag'
    }
  ],
  creator: 'Zaíra Gonçalves',
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://www.zairagoncalves.com/',
    title: defaultTitle,
    description: defaultDescription,
    siteName: defaultTitle,
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: defaultTitle
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: defaultTitle,
    description: defaultDescription,
    images: ['/og-image.png']
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png'
  },
  manifest: '/manifest.json',
  metadataBase: new URL('https://www.zairagoncalves.com/')
}
