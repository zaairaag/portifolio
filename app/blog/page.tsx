import { getDatabase } from '@/lib/notion';
import { format, parseISO } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import Image from 'next/image';
import Link from 'next/link';
import { siteConfig } from '@/config/site';
import { Metadata } from 'next';
import { PostsList } from '@/components/blog/PostsList';

const POSTS_PER_PAGE = 4;

export const metadata: Metadata = {
  title: `Blog | ${siteConfig.name}`,
  description: 'Compartilhando conhecimento e experiências sobre desenvolvimento web, tecnologia e carreira.',
  keywords: 'desenvolvimento web, frontend, backend, react, next.js, typescript, javascript, programação',
  alternates: {
    canonical: `${siteConfig.url}/blog`,
  },
  authors: [{ name: siteConfig.author.name, url: siteConfig.author.github }],
  openGraph: {
    title: `Blog | ${siteConfig.name}`,
    description: 'Compartilhando conhecimento e experiências sobre desenvolvimento web, tecnologia e carreira.',
    type: 'website',
    url: `${siteConfig.url}/blog`,
    siteName: siteConfig.name,
    locale: 'pt_BR',
    images: [
      {
        url: `${siteConfig.url}/og-image.png`,
        width: 1200,
        height: 630,
        alt: 'Blog Preview',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `Blog | ${siteConfig.name}`,
    description: 'Compartilhando conhecimento e experiências sobre desenvolvimento web, tecnologia e carreira.',
    creator: '@zairagoncalves',
    images: [`${siteConfig.url}/og-image.png`],
  },
};

function getAllTags(posts: any[]) {
  const tags = posts.flatMap(post => post.tags);
  const tagCount = tags.reduce((acc: Record<string, number>, tag: string) => {
    acc[tag] = (acc[tag] || 0) + 1;
    return acc;
  }, {});
  return Object.entries(tagCount)
    .sort((a, b) => b[1] - a[1])
    .map(([tag, count]) => ({ tag, count }));
}

function getMostReadPosts(posts: any[]) {
  return posts
    .sort((a, b) => (b.views || 0) - (a.views || 0))
    .slice(0, 5);
}

function generateSchemaOrgBlogPosting(post: any) {
  return {
    '@type': 'BlogPosting',
    'headline': post.title,
    'description': post.description,
    'datePublished': post.date,
    'dateModified': post.lastEditedTime || post.date,
    'author': {
      '@type': 'Person',
      'name': siteConfig.author.name,
      'url': siteConfig.author.github,
    },
    'image': post.featuredImage ? [post.featuredImage] : undefined,
    'url': `${siteConfig.url}/blog/${post.slug}`,
    'keywords': post.tags?.join(', '),
  };
}

function PostCard({
  post,
}: {
  post: {
    slug: string;
    title: string;
    description?: string;
    date?: string;
    featuredImage?: string;
    tags?: string[];
  };
}) {
  return (
    <article 
      className="group relative glass p-6 rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-[1.02] hover:border-primary/20 border border-transparent bg-gradient-to-br from-primary/5 via-purple-500/5 to-pink-500/5"
      itemScope 
      itemType="https://schema.org/BlogPosting"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-purple-500/10 to-pink-500/10 rounded-lg opacity-50" />
      
      <Link href={`/blog/${post.slug}`} className="block space-y-3 relative">
        {post.featuredImage && (
          <div className="relative aspect-[21/9] rounded-lg overflow-hidden">
            <Image
              src={post.featuredImage}
              alt={post.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              priority={true}
              itemProp="image"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
        )}
        <div className="flex items-center gap-3 text-sm">
          {post.date && (
            <time 
              dateTime={post.date}
              className="text-primary/80"
              itemProp="datePublished"
            >
              {format(parseISO(post.date), "d 'de' MMMM 'de' yyyy", { locale: ptBR })}
            </time>
          )}
          {post.tags && post.tags.length > 0 && (
            <>
              <span className="text-purple-400">•</span>
              <div className="flex gap-2">
                {post.tags.slice(0, 2).map((tag) => (
                  <span 
                    key={tag} 
                    className="text-pink-500"
                    itemProp="keywords"
                  >
                    {tag}
                  </span>
                ))}
                {post.tags.length > 2 && (
                  <span className="text-purple-400">
                    +{post.tags.length - 2}
                  </span>
                )}
              </div>
            </>
          )}
        </div>
        
        <h2 
          className="text-2xl font-semibold bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent"
          itemProp="headline"
        >
          {post.title}
        </h2>
        
        {post.description && (
          <p 
            className="text-muted-foreground leading-relaxed group-hover:text-muted-foreground/80 transition-colors"
            itemProp="description"
          >
            {post.description}
          </p>
        )}
        
        <div className="pt-4 flex items-center text-sm">
          <span className="text-primary group-hover:translate-x-1 transition-transform">
            Ler mais
          </span>
          <svg 
            className="ml-2 w-4 h-4 text-primary transition-all duration-300 group-hover:translate-x-2" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
            aria-hidden="true"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </div>
      </Link>
    </article>
  );
}

export default async function BlogPage() {
  const allPosts = await getDatabase();
  console.log('Posts com views:', allPosts.map(p => ({ title: p.title, views: p.views })));
  const initialPosts = allPosts.slice(0, POSTS_PER_PAGE);
  const tags = getAllTags(allPosts);
  const mostReadPosts = getMostReadPosts(allPosts);

  // Schema.org JSON-LD
  const schemaOrg = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    'name': `Blog | ${siteConfig.name}`,
    'description': 'Compartilhando conhecimento e experiências sobre desenvolvimento web, tecnologia e carreira.',
    'url': `${siteConfig.url}/blog`,
    'author': {
      '@type': 'Person',
      'name': siteConfig.author.name,
      'url': siteConfig.author.github,
    },
    'blogPost': allPosts.map(generateSchemaOrgBlogPosting),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
      />
      <div className="min-h-screen">
        <div className="container py-8">
          <header className="max-w-2xl mx-auto text-center mb-16">
            <span className="text-sm font-mono text-primary">Blog</span>
            <h1 className="text-4xl font-bold mt-2">
              Compartilhando <span className="text-primary">conhecimento</span>
              <br /> 
              e <span className="text-primary">experiências</span>
            </h1>
            <p className="text-muted-foreground text-lg mt-4">
              Ideias, tutoriais e reflexões sobre desenvolvimento web, tecnologia e carreira
            </p>
          </header>

          <div className="flex flex-col lg:flex-row gap-12">
            <main className="lg:w-2/3">
              <PostsList initialPosts={initialPosts} totalPosts={allPosts} />
            </main>

            <aside className="lg:w-1/3 space-y-8">
              <div className="glass p-6 rounded-lg sticky top-24 border-2 border-primary/20 bg-gradient-to-br from-primary/5 via-purple-500/5 to-pink-500/5">
                <nav aria-label="Categorias">
                  <h2 className="text-xl font-semibold mb-6 bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent">
                    Categorias
                  </h2>
                  <ul className="space-y-3">
                    {tags.map(({ tag, count }) => (
                      <li 
                        key={tag} 
                        className="flex items-center justify-between group"
                      >
                        <span className="text-purple-400">
                          {tag}
                        </span>
                        <span className="text-sm px-2 py-1 rounded-full bg-gradient-to-r from-primary/20 via-purple-500/20 to-pink-500/20 text-pink-500">
                          {count}
                        </span>
                      </li>
                    ))}
                  </ul>
                </nav>

                <section aria-label="Posts Populares">
                  <h2 className="text-xl font-semibold mt-12 mb-6 bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent">
                    Posts Populares
                  </h2>
                  <div className="space-y-6">
                    {mostReadPosts.map((post, index) => (
                      <Link 
                        key={post.id} 
                        href={`/blog/${post.slug}`}
                        className="group flex gap-4 items-start transition-all duration-300 hover:translate-x-1"
                      >
                        <span className="text-4xl font-bold bg-gradient-to-r from-primary/30 via-purple-500/30 to-pink-500/30 bg-clip-text text-transparent">
                          {(index + 1).toString().padStart(2, '0')}
                        </span>
                        <div>
                          <h3 className="font-medium text-purple-400">
                            {post.title}
                          </h3>
                          <div className="flex items-center gap-2 mt-1">
                            {post.date && (
                              <time 
                                dateTime={post.date}
                                className="text-sm text-pink-500/80"
                              >
                                {format(parseISO(post.date), "d 'de' MMM", { locale: ptBR })}
                              </time>
                            )}
                            <span className="text-sm text-primary/80">
                              • {post.views || 0} views
                            </span>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </section>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </>
  );
}
