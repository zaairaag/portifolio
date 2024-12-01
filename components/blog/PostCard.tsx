import Image from 'next/image';
import Link from 'next/link';
import { format, parseISO } from 'date-fns';
import { ptBR } from 'date-fns/locale';

interface PostCardProps {
  post: {
    slug: string;
    title: string;
    description?: string;
    date?: string;
    featuredImage?: string;
    tags?: string[];
  };
}

export function PostCard({ post }: PostCardProps) {
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
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        )}
        
        <div>
          <div className="flex items-start justify-between gap-4">
            <h2 
              className="text-2xl font-semibold bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent"
              itemProp="headline"
            >
              {post.title}
            </h2>
            {post.tags && post.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-1">
                {post.tags.map(tag => (
                  <span 
                    key={tag}
                    className="px-2 py-1 text-xs rounded-full bg-gradient-to-r from-primary/20 via-purple-500/20 to-pink-500/20 text-pink-500 whitespace-nowrap"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
          
          {post.date && (
            <time 
              dateTime={post.date}
              className="text-sm text-pink-500/80 mt-1 block"
              itemProp="datePublished"
            >
              {format(parseISO(post.date), "d 'de' MMMM 'de' yyyy", { locale: ptBR })}
            </time>
          )}
          
          {post.description && (
            <p 
              className="mt-2 text-muted-foreground line-clamp-2"
              itemProp="description"
            >
              {post.description}
            </p>
          )}
        </div>
      </Link>
    </article>
  );
}
