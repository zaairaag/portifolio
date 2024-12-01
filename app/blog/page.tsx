import { getDatabase } from '@/lib/notion';
import { format, parseISO } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import Image from 'next/image';
import Link from 'next/link';
import { siteConfig } from '@/config/site';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: `Blog | ${siteConfig.name}`,
  description: 'Compartilhando conhecimento e experiências sobre desenvolvimento web, tecnologia e carreira.',
  openGraph: {
    title: `Blog | ${siteConfig.name}`,
    description: 'Compartilhando conhecimento e experiências sobre desenvolvimento web, tecnologia e carreira.',
    type: 'website',
    url: `${siteConfig.url}/blog`,
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
  return posts.slice(0, 5);
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
    <article className="group relative glass p-6 rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-[1.02] hover:border-primary/20 border border-transparent bg-gradient-to-br from-primary/5 via-purple-500/5 to-pink-500/5">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-purple-500/10 to-pink-500/10 rounded-lg opacity-50" />
      
      <Link href={`/blog/${post.slug}`} className="block space-y-3 relative">
        {post.featuredImage && (
          <div className="relative aspect-[21/9] rounded-lg overflow-hidden">
            <Image
              src={post.featuredImage}
              alt={post.title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
        )}
        <div className="flex items-center gap-3 text-sm">
          {post.date && (
            <time className="text-primary/80">
              {format(parseISO(post.date), "d 'de' MMMM 'de' yyyy", { locale: ptBR })}
            </time>
          )}
          {post.tags && post.tags.length > 0 && (
            <>
              <span className="text-purple-400">•</span>
              <div className="flex gap-2">
                {post.tags.slice(0, 2).map((tag) => (
                  <span key={tag} className="text-pink-500">
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
        
        <h2 className="text-2xl font-semibold bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent">
          {post.title}
        </h2>
        
        {post.description && (
          <p className="text-muted-foreground leading-relaxed group-hover:text-muted-foreground/80 transition-colors">
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
  const posts = await getDatabase();
  const tags = getAllTags(posts);
  const mostReadPosts = getMostReadPosts(posts);

  return (
    <div className="min-h-screen">
      <div className="container py-8">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <span className="text-sm font-mono text-primary">Blog</span>
          <h1 className="text-4xl font-bold mt-2">
            Compartilhando <span className="text-primary">conhecimento</span>
            <br /> 
            e <span className="text-primary">experiências</span>
          </h1>
          <p className="text-muted-foreground text-lg mt-4">
            Ideias, tutoriais e reflexões sobre desenvolvimento web, tecnologia e carreira
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Lista de Posts */}
          <div className="lg:w-2/3">
            <div className="space-y-8">
              {posts.map((post) => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:w-1/3 space-y-8">
            <div className="glass p-6 rounded-lg sticky top-24 border-2 border-primary/20 bg-gradient-to-br from-primary/5 via-purple-500/5 to-pink-500/5">
              {/* Categorias */}
              <h2 className="text-xl font-semibold mb-6 bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Categorias
              </h2>
              <div className="space-y-3">
                {tags.map(({ tag, count }) => (
                  <div 
                    key={tag} 
                    className="flex items-center justify-between group"
                  >
                    <span className="text-purple-400">
                      {tag}
                    </span>
                    <span className="text-sm px-2 py-1 rounded-full bg-gradient-to-r from-primary/20 via-purple-500/20 to-pink-500/20 text-pink-500">
                      {count}
                    </span>
                  </div>
                ))}
              </div>

              {/* Posts Populares */}
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
                      {post.date && (
                        <time className="text-sm text-pink-500/80 mt-1 block">
                          {format(parseISO(post.date), "d 'de' MMM", { locale: ptBR })}
                        </time>
                      )}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
