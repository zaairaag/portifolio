import { getDatabase } from '@/lib/notion';
import { format, parseISO } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import Link from 'next/link';
import Image from 'next/image';

export const revalidate = 3600;

export default async function BlogPage() {
  const posts = await getDatabase();

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <div className="space-y-8">
          <h1 className="text-4xl font-bold">Blog</h1>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => {
              const postDate = post.date ? parseISO(post.date) : null;
              const formattedDate = postDate 
                ? format(postDate, "d 'de' MMMM 'de' yyyy", { locale: ptBR })
                : null;

              return (
                <Link key={post.id} href={`/blog/${post.slug}`}>
                  <article className="group h-full glass rounded-lg overflow-hidden transition-all duration-300">
                    <div className="relative aspect-video">
                      {post.featuredImage ? (
                        <Image
                          src={post.featuredImage}
                          alt={post.title}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-primary to-primary/80" />
                      )}
                    </div>
                    <div className="p-4 space-y-2">
                      <div className="flex gap-2 mb-2 flex-wrap">
                        {post.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-1 text-xs rounded-full bg-primary text-primary-foreground"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <h2 className="text-xl font-semibold group-hover:text-primary transition-colors">
                        {post.title}
                      </h2>
                      {formattedDate && (
                        <time className="text-sm text-muted-foreground block mb-2">
                          {formattedDate}
                        </time>
                      )}
                      {post.description && (
                        <p className="text-sm text-muted-foreground line-clamp-2">
                          {post.description}
                        </p>
                      )}
                    </div>
                  </article>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
