import { Metadata } from 'next'

const baseUrl = 'https://zairagoncalves.com'

export const defaultSEOConfig: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'Zaíra Gonçalves | Programadora de Software',
    template: '%s | Zaíra Gonçalves',
  },
  description:
    'Desenvolvedora Full Stack especializada em criar experiências web modernas e aplicações de alta performance. Expertise em React, TypeScript, Node.js e muito mais.',
  keywords: [
    'desenvolvedor web',
    'programadora',
    'full stack',
    'react',
    'typescript',
    'node.js',
    'next.js',
    'frontend',
    'backend',
    'desenvolvimento web',
    'portfolio',
  ],
  authors: [{ name: 'Zaíra Gonçalves' }],
  creator: 'Zaíra Gonçalves',
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: baseUrl,
    siteName: 'Zaíra Gonçalves',
    title: 'Zaíra Gonçalves | Programadora de Software',
    description:
      'Desenvolvedora Full Stack especializada em criar experiências web modernas e aplicações de alta performance.',
    images: [
      {
        url: `${baseUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: 'Zaíra Gonçalves - Desenvolvedora Full Stack',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zaíra Gonçalves | Programadora de Software',
    description:
      'Desenvolvedora Full Stack especializada em criar experiências web modernas e aplicações de alta performance.',
    creator: '@zairagoncalves',
    images: [`${baseUrl}/og-image.png`],
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
    canonical: baseUrl,
  },
}

export const getPageSEO = (page: string, description?: string): Metadata => ({
  ...defaultSEOConfig,
  title: page,
  description: description || defaultSEOConfig.description,
  alternates: {
    canonical: `${baseUrl}/${page.toLowerCase()}`,
  },
})

export const jsonLdWebsite = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Zaíra Gonçalves',
  alternateName: 'Portfolio Zaíra Gonçalves',
  url: baseUrl,
  description: defaultSEOConfig.description,
}

export const jsonLdPerson = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Zaíra Gonçalves',
  jobTitle: 'Desenvolvedora Full Stack',
  url: baseUrl,
  sameAs: [
    'https://github.com/zairamiranda',
    'https://www.linkedin.com/in/zaira-miranda/',
    // Adicione outras redes sociais aqui
  ],
}
