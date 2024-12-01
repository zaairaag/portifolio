import { getDatabase } from '@/lib/notion';
import { siteConfig } from '@/config/site';

export async function GET() {
  const posts = await getDatabase();
  const feed = `<?xml version="1.0" encoding="UTF-8"?>
    <rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
      <channel>
        <title>${siteConfig.name} - Blog</title>
        <link>${siteConfig.url}/blog</link>
        <description>${siteConfig.description}</description>
        <language>pt-BR</language>
        <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
        <atom:link href="${siteConfig.url}/feed.xml" rel="self" type="application/rss+xml"/>
        ${posts
          .map(
            (post) => `
              <item>
                <title><![CDATA[${post.title}]]></title>
                <link>${siteConfig.url}/blog/${post.slug}</link>
                <guid isPermaLink="true">${siteConfig.url}/blog/${post.slug}</guid>
                <description><![CDATA[${post.description}]]></description>
                <pubDate>${new Date(post.date).toUTCString()}</pubDate>
                ${post.tags.map((tag) => `<category>${tag}</category>`).join('')}
                <author>${siteConfig.author.name}</author>
              </item>
            `
          )
          .join('')}
      </channel>
    </rss>`;

  return new Response(feed, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, s-maxage=1200, stale-while-revalidate=600',
    },
  });
}
