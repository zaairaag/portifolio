import Link from 'next/link';

interface CategoriesProps {
  tags: { tag: string; count: number }[];
  selectedTag?: string;
}

export function Categories({ tags, selectedTag }: CategoriesProps) {
  if (!tags || tags.length === 0) return null;

  return (
    <div className="glass p-6 rounded-lg border border-primary/20 bg-gradient-to-br from-primary/5 via-purple-500/5 to-pink-500/5">
      <h2 className="text-2xl font-bold bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent mb-4">
        Categorias
      </h2>
      <div className="flex flex-wrap gap-2">
        <Link
          href="/blog"
          className={`inline-flex items-center rounded-lg px-3 py-1.5 text-sm font-medium transition-colors
            ${!selectedTag 
              ? 'bg-primary text-primary-foreground hover:bg-primary/90' 
              : 'bg-muted hover:bg-muted/80'}`}
        >
          Todos
        </Link>
        {tags.map(({ tag, count }) => (
          <Link
            key={tag}
            href={`/blog?categoria=${encodeURIComponent(tag)}`}
            className={`inline-flex items-center rounded-lg px-3 py-1.5 text-sm font-medium transition-colors
              ${selectedTag?.toLowerCase() === tag.toLowerCase()
                ? 'bg-primary text-primary-foreground hover:bg-primary/90'
                : 'bg-muted hover:bg-muted/80'}`}
          >
            {tag}
            <span className="ml-1.5 text-xs opacity-70">({count})</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
