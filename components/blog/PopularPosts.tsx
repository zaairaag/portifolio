import { Post } from '@/lib/types';
import Link from 'next/link';
import { format, parseISO } from 'date-fns';
import { ptBR } from 'date-fns/locale';

interface PopularPostsProps {
  posts: Post[];
}

export function PopularPosts({ posts }: PopularPostsProps) {
  // Ordena os posts por visualizações e pega os top 5
  const popularPosts = [...posts]
    .sort((a, b) => (b.views || 0) - (a.views || 0))
    .slice(0, 5);

  if (popularPosts.length === 0) return null;

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent">
        Posts Populares
      </h2>
      <div className="space-y-6">
        {popularPosts.map((post, index) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group flex gap-4 items-start transition-all duration-300 hover:translate-x-1"
          >
            <span className="text-4xl font-bold bg-gradient-to-r from-primary/30 via-purple-500/30 to-pink-500/30 bg-clip-text text-transparent">
              {(index + 1).toString().padStart(2, '0')}
            </span>
            <div>
              <h3 className="font-medium text-purple-400 group-hover:text-primary transition-colors">
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
    </div>
  );
}
