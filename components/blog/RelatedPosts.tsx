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
      <h2 className="font-semibold text-2xl mb-8">Posts relacionados</h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group"
          >
            <article className="space-y-4">
              {post.featuredImage && (
                <div className="relative aspect-[16/9] overflow-hidden rounded-lg">
                  <Image
                    src={post.featuredImage}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              )}
              <div className="space-y-2">
                <h3 className="font-semibold line-clamp-2 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                {post.description && (
                  <p className="text-muted-foreground text-sm line-clamp-2">
                    {post.description}
                  </p>
                )}
                {post.date && (
                  <time className="text-sm text-muted-foreground">
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
