import Link from 'next/link';
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface PostNavigationProps {
  previousPost?: {
    title: string;
    slug: string;
  };
  nextPost?: {
    title: string;
    slug: string;
  };
}

export function PostNavigation({ previousPost, nextPost }: PostNavigationProps) {
  if (!previousPost && !nextPost) return null;

  return (
    <nav className="flex justify-between items-center border-t mt-16 pt-8">
      {previousPost ? (
        <Link
          href={`/blog/${previousPost.slug}`}
          className={cn(
            "flex items-center gap-2 group p-4 -m-4 rounded-lg transition-colors",
            "hover:bg-accent"
          )}
        >
          <ChevronLeftIcon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
          <div>
            <div className="text-sm text-muted-foreground">Post anterior</div>
            <div className="font-medium group-hover:text-primary transition-colors">
              {previousPost.title}
            </div>
          </div>
        </Link>
      ) : (
        <div />
      )}

      {nextPost ? (
        <Link
          href={`/blog/${nextPost.slug}`}
          className={cn(
            "flex items-center gap-2 group p-4 -m-4 rounded-lg transition-colors text-right",
            "hover:bg-accent"
          )}
        >
          <div>
            <div className="text-sm text-muted-foreground">Próximo post</div>
            <div className="font-medium group-hover:text-primary transition-colors">
              {nextPost.title}
            </div>
          </div>
          <ChevronRightIcon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
        </Link>
      ) : (
        <div />
      )}
    </nav>
  );
}
