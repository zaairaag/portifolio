import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [
        '/api/',
        '/admin/',
        '/_next/',
        '/static/',
        '/\*.json$',
        '/\*.xml$',
        '/feed.xml',
      ],
    },
    sitemap: 'https://zairagoncalves.com/sitemap.xml',
    host: 'https://zairagoncalves.com',
  }
}
