'use client'

import Link from 'next/link';
import Image from 'next/image';
import { format, parseISO } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { Post } from '@/lib/types';

interface CategoryPostsProps {
  currentPostSlug: string;
  tag: string;
  posts: Post[];
}

export function CategoryPosts({ currentPostSlug, tag, posts }: CategoryPostsProps) {
  // Conta quantos posts existem nesta categoria
  const postsInCategory = posts.filter(post => post.tags.includes(tag));
  
  // Se não houver mais de 1 post na categoria, não renderiza nada
  if (postsInCategory.length <= 1) return null;

  // Filtra posts da mesma categoria, excluindo o post atual
  const relatedPosts = posts
    .filter(post => 
      post.slug !== currentPostSlug && 
      post.tags.includes(tag)
    )
    .slice(0, 3);

  // Se não houver posts relacionados, não renderiza nada
  if (relatedPosts.length === 0) return null;

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2">
        <h2 className="font-semibold bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
          Posts Relacionados
        </h2>
        <Link 
          href={`/blog/categoria/${encodeURIComponent(tag)}`}
          className="px-2 py-1 rounded-full text-xs bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
        >
          {tag}
        </Link>
      </div>
      <div className="space-y-6">
        {relatedPosts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group block"
          >
            <article className="flex gap-4 items-start p-3 -mx-3 rounded-lg hover:bg-accent transition-colors">
              {post.featuredImage && (
                <div className="relative w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                  <Image
                    src={post.featuredImage}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              )}
              <div className="space-y-1 flex-1 min-w-0">
                <h3 className="font-medium line-clamp-2 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                {post.date && (
                  <time className="text-xs text-muted-foreground">
                    {format(parseISO(post.date), "d 'de' MMM, yyyy", { locale: ptBR })}
                  </time>
                )}
              </div>
            </article>
          </Link>
        ))}
      </div>
    </div>
  );
}
