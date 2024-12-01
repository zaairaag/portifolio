import Link from 'next/link';
import Image from 'next/image';
import { format, parseISO } from 'date-fns';
import { ptBR } from 'date-fns/locale';

interface RelatedPostsProps {
  posts: Array<{
    slug: string;
    title: string;
    description?: string;
    date?: string;
    featuredImage?: string;
  }>;
}

export function RelatedPosts({ posts }: RelatedPostsProps) {
  if (posts.length === 0) return null;

  return (
    <section className="border-t pt-16">
      <h2 className="font-semibold text-2xl mb-8 bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
        Posts relacionados
      </h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group relative"
          >
            <article className="space-y-4 p-4 rounded-xl border bg-card transition-colors hover:bg-accent">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl" />
              {post.featuredImage && (
                <div className="relative aspect-[16/9] overflow-hidden rounded-lg">
                  <Image
                    src={post.featuredImage}
                    alt={post.title}
                    fill
                    className="object-cover transition-all duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              )}
              <div className="space-y-2 relative">
                <h3 className="font-semibold line-clamp-2 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                {post.description && (
                  <p className="text-muted-foreground text-sm line-clamp-2">
                    {post.description}
                  </p>
                )}
                {post.date && (
                  <time className="text-sm px-2 py-1 rounded-full bg-primary/10 text-primary inline-block">
                    {format(parseISO(post.date), "d 'de' MMMM 'de' yyyy", { locale: ptBR })}
                  </time>
                )}
              </div>
            </article>
          </Link>
        ))}
      </div>
    </section>
  );
}
