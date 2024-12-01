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

  return {
    title: `${post.title} | Blog`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
      authors: ['Zaira Moraes'],
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      images: [ogImage],
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
  const post = posts.find((p) => p.slug === params.slug);

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

  // Generate JSON-LD structured data
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    image: post.featuredImage,
    datePublished: post.date,
    author: {
      '@type': 'Person',
      name: 'Zaira Moraes',
      url: 'https://zairamoraes.com',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Zaira Moraes',
      logo: {
        '@type': 'ImageObject',
        url: 'https://zairamoraes.com/logo.png',
      },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ProgressBar />
      <div className="min-h-screen">
        <article className="container mx-auto px-4 py-12 lg:py-16">
          <header className="max-w-4xl mx-auto mb-12">
            {post.featuredImage && (
              <div className="relative aspect-[21/9] mb-8">
                <Image
                  src={post.featuredImage}
                  alt={post.title}
                  fill
                  priority
                  className="object-cover rounded-xl"
                />
              </div>
            )}
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-5xl font-bold tracking-tight">{post.title}</h1>
              {post.description && (
                <p className="text-xl text-muted-foreground leading-relaxed">{post.description}</p>
              )}
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                {formattedDate && (
                  <time className="flex items-center gap-1">
                    <span className="sr-only">Data de publicação:</span>
                    {formattedDate}
                  </time>
                )}
                <span>•</span>
                <span>{readingTime} min de leitura</span>
              </div>
            </div>
          </header>

          <div className="max-w-4xl mx-auto">
            <div className="lg:grid lg:grid-cols-[auto,250px] lg:gap-8">
              <div className="prose prose-lg max-w-none prose-headings:scroll-mt-20">
                {blocks.map((block) => (
                  <RenderBlock key={block.id} block={block} />
                ))}
              </div>
              <aside className="hidden lg:block">
                <div className="sticky top-8 space-y-8">
                  <TableOfContents blocks={blocks} />
                  <SocialShare title={post.title} slug={params.slug} />
                </div>
              </aside>
            </div>
          </div>

          <footer className="max-w-4xl mx-auto mt-16 space-y-16">
            <AuthorCard />
            <RelatedPosts posts={relatedPosts} />
          </footer>
        </article>
      </div>
    </>
  );
}
