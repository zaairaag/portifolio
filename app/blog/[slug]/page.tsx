import { getDatabase, getPage, getBlocks } from '@/lib/notion';
import { RenderBlock } from '@/components/notion/RenderBlock';
import { format, parseISO } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Metadata } from 'next';
import { calculateReadingTime } from '@/lib/utils';
import { TableOfContents } from '@/components/blog/TableOfContents';
import { ProgressBar } from '@/components/blog/ProgressBar';
import { SocialShare } from '@/components/blog/SocialShare';
import { RelatedPosts } from '@/components/blog/RelatedPosts';
import { AuthorCard } from '@/components/blog/AuthorCard';
import { CategoryPosts } from '@/components/blog/CategoryPosts';
import { PostNavigation } from '@/components/blog/PostNavigation';
import { siteConfig } from '@/config/site';

export const revalidate = 3600;

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const posts = await getDatabase();
  const post = posts.find((p) => p.slug === params.slug);

  if (!post) {
    return {
      title: 'Post não encontrado',
    };
  }

  const ogImage = post.featuredImage || '/images/default-og.png';
  const url = `${siteConfig.url}/blog/${params.slug}`;

  return {
    title: `${post.title} | Blog ${siteConfig.name}`,
    description: post.description,
    keywords: post.tags,
    authors: [{ name: siteConfig.author.name }],
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
      modifiedTime: post.last_edited_time,
      authors: [siteConfig.author.name],
      tags: post.tags,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
      url,
      siteName: siteConfig.openGraph.siteName,
      locale: siteConfig.openGraph.locale,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      images: [ogImage],
    },
    alternates: {
      canonical: url,
      types: {
        'application/rss+xml': `${siteConfig.url}/feed.xml`,
      },
    },
    manifest: '/manifest.json',
    icons: {
      icon: '/favicon.ico',
      apple: '/icons/apple-touch-icon.png',
    },
    verification: {
      google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
    },
  };
}

export async function generateStaticParams() {
  const posts = await getDatabase();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const posts = await getDatabase();
  const currentIndex = posts.findIndex((p) => p.slug === params.slug);
  const post = posts[currentIndex];

  if (!post) {
    notFound();
  }

  const { page } = await getPage(post.id);
  const blocks = await getBlocks(post.id);
  const relatedPosts = posts
    .filter((p) => p.slug !== params.slug)
    .slice(0, 3);

  if (!page || !blocks) {
    notFound();
  }

  const formattedDate = post.date 
    ? format(parseISO(post.date), "d 'de' MMMM 'de' yyyy", { locale: ptBR })
    : null;
  
  const readingTime = calculateReadingTime(blocks);
  const mainTag = post.tags?.[0];
  const url = `${siteConfig.url}/blog/${params.slug}`;

  // Navigation between posts
  const previousPost = currentIndex > 0 ? posts[currentIndex - 1] : undefined;
  const nextPost = currentIndex < posts.length - 1 ? posts[currentIndex + 1] : undefined;

  // Generate JSON-LD structured data
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    image: post.featuredImage,
    datePublished: post.date,
    dateModified: page.last_edited_time,
    author: {
      '@type': 'Person',
      name: siteConfig.author.name,
      url: siteConfig.url,
    },
    publisher: {
      '@type': 'Organization',
      name: siteConfig.name,
      logo: {
        '@type': 'ImageObject',
        url: `${siteConfig.url}/logo.png`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
    keywords: post.tags.join(', '),
    articleBody: blocks
      .filter(block => block.type === 'paragraph')
      .map(block => block.paragraph?.rich_text?.[0]?.plain_text)
      .join(' '),
    wordCount: blocks
      .filter(block => block.type === 'paragraph')
      .reduce((acc, block) => {
        return acc + (block.paragraph?.rich_text?.[0]?.plain_text?.split(/\s+/).length || 0);
      }, 0),
  };

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Blog',
        item: `${siteConfig.url}/blog`,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: post.title,
        item: url,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <ProgressBar />
      <div className="min-h-screen">
        <article className="container mx-auto px-4 py-12 lg:py-16" itemScope itemType="https://schema.org/BlogPosting">
          <header className="max-w-4xl mx-auto mb-12 relative">
            {post.featuredImage && (
              <figure className="relative aspect-[21/9] mb-8 rounded-xl overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent z-10" />
                <Image
                  src={post.featuredImage}
                  alt={post.title}
                  fill
                  priority
                  className="object-cover hover:scale-105 transition-transform duration-700"
                  itemProp="image"
                />
              </figure>
            )}
            <div className="space-y-4 relative z-20">
              <nav aria-label="Breadcrumb" className="text-sm text-muted-foreground mb-4">
                <ol className="flex items-center space-x-2">
                  <li>
                    <a href="/blog" className="hover:text-primary transition-colors">
                      Blog
                    </a>
                  </li>
                  <li>/</li>
                  <li>
                    <span className="text-foreground">{post.title}</span>
                  </li>
                </ol>
              </nav>
              <h1 className="text-4xl lg:text-5xl font-bold tracking-tight bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent" itemProp="headline">
                {post.title}
              </h1>
              {post.description && (
                <p className="text-xl text-muted-foreground leading-relaxed" itemProp="description">
                  {post.description}
                </p>
              )}
              <div className="flex items-center gap-4 text-sm">
                {formattedDate && (
                  <time 
                    dateTime={post.date}
                    className="flex items-center gap-1 px-3 py-1 rounded-full bg-primary/10 text-primary"
                    itemProp="datePublished"
                  >
                    <span className="sr-only">Data de publicação:</span>
                    {formattedDate}
                  </time>
                )}
                <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground" />
                <span className="px-3 py-1 rounded-full bg-primary/10 text-primary">
                  {readingTime} min de leitura
                </span>
                <meta itemProp="author" content={siteConfig.author.name} />
              </div>
            </div>
          </header>

          <div className="max-w-4xl mx-auto">
            <div className="lg:grid lg:grid-cols-[auto,300px] lg:gap-8">
              <div className="prose prose-lg max-w-none prose-headings:scroll-mt-20 prose-headings:font-bold prose-headings:tracking-tight prose-headings:bg-gradient-to-r prose-headings:from-primary prose-headings:to-purple-500 prose-headings:bg-clip-text prose-headings:text-transparent">
                {blocks.map((block) => (
                  <RenderBlock key={block.id} block={block} />
                ))}
              </div>
              <aside className="hidden lg:flex lg:flex-col gap-8">
                <div className="sticky top-8 space-y-8 p-6 rounded-xl border bg-card/50 backdrop-blur supports-[backdrop-filter]:bg-card/50">
                  <TableOfContents blocks={blocks} />
                  <SocialShare title={post.title} slug={params.slug} />
                </div>
                {mainTag && (
                  <div className="sticky top-[400px] p-6 rounded-xl border bg-card/50 backdrop-blur supports-[backdrop-filter]:bg-card/50">
                    <CategoryPosts
                      currentPostSlug={params.slug}
                      tag={mainTag}
                      posts={posts}
                    />
                  </div>
                )}
              </aside>
            </div>
          </div>

          <footer className="max-w-4xl mx-auto mt-16 space-y-16">
            <AuthorCard />
            <PostNavigation previousPost={previousPost} nextPost={nextPost} />
            <RelatedPosts posts={relatedPosts} />
          </footer>
        </article>
      </div>
    </>
  );
}
