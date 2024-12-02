import { getDatabase } from '@/lib/notion';
import { format, parseISO } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import Image from 'next/image';
import Link from 'next/link';
import { siteConfig } from '@/config/site';
import { Metadata } from 'next';
import { PostsList } from '@/components/blog/PostsList';
import { Categories } from '@/components/blog/Categories';
import { PopularPosts } from '@/components/blog/PopularPosts';

const POSTS_PER_PAGE = 4;

export const metadata: Metadata = {
  title: `Blog | ${siteConfig.name}`,
  description: 'Compartilhando conhecimento e experiências sobre desenvolvimento web, tecnologia e carreira.',
  keywords: 'desenvolvimento web, frontend, backend, react, next.js, typescript, javascript, programação',
  alternates: {
    canonical: `${siteConfig.url}/blog`,
  },
  authors: [{ name: siteConfig.author.name, url: siteConfig.links.github }],
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
  const tagCounts: Record<string, number> = {};
  posts.forEach(post => {
    post.tags.forEach((tag: string) => {
      const normalizedTag = tag.trim();
      if (normalizedTag) {
        tagCounts[normalizedTag] = (tagCounts[normalizedTag] || 0) + 1;
      }
    });
  });
  
  return Object.entries(tagCounts)
    .filter(([, count]) => count > 0)
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
      'url': siteConfig.links.github,
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
          className="text-2xl font-semibold bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent mb-3"
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

export default async function BlogPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const posts = await getDatabase();
  console.log('Posts carregados:', posts.length);

  const selectedTag = typeof searchParams.categoria === 'string' 
    ? decodeURIComponent(searchParams.categoria).toLowerCase()
    : undefined;

  console.log('Categoria selecionada:', selectedTag);

  // Filtra os posts se houver uma categoria selecionada
  const filteredPosts = selectedTag
    ? posts.filter(post => 
        post.tags.some(tag => 
          tag.toLowerCase() === selectedTag
        )
      )
    : posts;

  console.log('Posts filtrados:', filteredPosts.length);

  // Encontra a tag com o case original para exibição
  const displayTag = selectedTag
    ? posts.flatMap(post => post.tags)
        .find(tag => tag.toLowerCase() === selectedTag)
    : undefined;

  // Prepara as tags e posts populares
  const allTags = getAllTags(posts);
  const popularPosts = getMostReadPosts(posts);

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
      'url': siteConfig.links.github,
    },
    'blogPost': posts.map(generateSchemaOrgBlogPosting),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
      />
      <div className="container max-w-7xl py-6 lg:py-10">
        <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
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
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-[2fr_1fr] mt-8">
          <div className="grid gap-10">
            {filteredPosts.length > 0 ? (
              filteredPosts.map((post) => (
                <PostCard key={post.slug} post={post} />
              ))
            ) : (
              <p className="text-muted-foreground">
                {selectedTag 
                  ? `Nenhum post encontrado para a categoria "${displayTag || selectedTag}".`
                  : "Nenhum post publicado ainda."}
              </p>
            )}
          </div>
          <aside className="space-y-8">
            <Categories tags={allTags} selectedTag={selectedTag} />
            <PopularPosts posts={popularPosts} />
          </aside>
        </div>
      </div>
    </>
  );
}
