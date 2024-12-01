import { Metadata } from 'next'
import { siteConfig } from '@/config/site'

interface MetaTagsProps {
  title?: string
  description?: string
  image?: string
  url?: string
  type?: 'website' | 'article'
  publishedTime?: string
  modifiedTime?: string
  author?: string
  section?: string
}

export function generateMetadata({
  title,
  description,
  image,
  url,
  type = 'website',
  publishedTime,
  modifiedTime,
  author,
  section,
}: MetaTagsProps): Metadata {
  const metaTitle = title ? `${title} | ${siteConfig.name}` : siteConfig.name
  const metaDescription = description || siteConfig.description
  const metaImage = image || `${siteConfig.url}/og-image.jpg`
  const metaUrl = url || siteConfig.url

  return {
    title: metaTitle,
    description: metaDescription,
    openGraph: {
      title: metaTitle,
      description: metaDescription,
      url: metaUrl,
      siteName: siteConfig.name,
      images: [
        {
          url: metaImage,
          width: 1200,
          height: 630,
          alt: metaTitle,
        },
      ],
      locale: 'pt_BR',
      type,
      ...(publishedTime && { publishedTime }),
      ...(modifiedTime && { modifiedTime }),
      ...(author && { authors: [author] }),
      ...(section && { section }),
    },
    twitter: {
      card: 'summary_large_image',
      title: metaTitle,
      description: metaDescription,
      images: [metaImage],
      creator: '@zairagoncalves',
    },
    alternates: {
      canonical: metaUrl,
      languages: {
        'pt-BR': metaUrl,
      },
    },
  }
}
