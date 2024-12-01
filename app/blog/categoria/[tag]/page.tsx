import { getAllPosts } from '@/lib/posts';
import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { format, parseISO } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { notFound } from 'next/navigation';

interface CategoryPageProps {
  params: {
    tag: string;
  };
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const tag = decodeURIComponent(params.tag).trim();
  
  return {
    title: `Posts sobre ${tag} | Zaira Miranda`,
    description: `Confira todos os artigos sobre ${tag} no blog da Zaira Miranda`,
    openGraph: {
      title: `Posts sobre ${tag} | Zaira Miranda`,
      description: `Confira todos os artigos sobre ${tag} no blog da Zaira Miranda`,
    },
  };
}

// Removendo generateStaticParams para usar geração dinâmica
export const dynamic = 'force-dynamic';
export const dynamicParams = true;

export default async function CategoryPage({ params }: CategoryPageProps) {
  const tag = decodeURIComponent(params.tag).trim().toLowerCase();
  
  if (!tag) {
    notFound();
  }

  const allPosts = await getAllPosts();
  
  // Primeiro, verifica se a tag existe em algum post (case insensitive)
  const tagExists = allPosts.some(post => 
    post.tags.some(postTag => postTag.toLowerCase().trim() === tag)
  );

  if (!tagExists) {
    notFound();
  }

  // Filtra os posts pela tag atual
  const categoryPosts = allPosts.filter(post => 
    post.tags.some(postTag => postTag.toLowerCase().trim() === tag)
  );

  // Encontra a tag com o case original para exibição
  const displayTag = allPosts.find(post => 
    post.tags.some(t => t.toLowerCase().trim() === tag)
  )?.tags.find(t => t.toLowerCase().trim() === tag) || tag;

  // Se não houver posts nesta categoria, redireciona para 404
  if (categoryPosts.length === 0) {
    notFound();
  }

  return (
    <div className="container max-w-4xl py-6 lg:py-10">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-y-4">
          <h1 className="inline-block font-heading text-4xl tracking-tight lg:text-5xl">
            Posts sobre{" "}
            <span className="bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
              {displayTag}
            </span>
          </h1>
          <p className="text-xl text-muted-foreground">
            {categoryPosts.length} {categoryPosts.length === 1 ? 'post encontrado' : 'posts encontrados'}
          </p>
        </div>
      </div>
      <hr className="my-8" />
      <div className="grid gap-10 sm:grid-cols-2">
        {categoryPosts.map((post) => (
          <article
            key={post.slug}
            className="group relative flex flex-col space-y-2"
          >
            {post.featuredImage && (
              <Link
                href={`/blog/${post.slug}`}
                className="relative aspect-video overflow-hidden rounded-lg border bg-muted transition-colors"
              >
                <Image
                  src={post.featuredImage}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </Link>
            )}
            <div className="flex flex-col space-y-1">
              <h2 className="text-2xl font-bold">
                <Link
                  href={`/blog/${post.slug}`}
                  className="group-hover:text-primary transition-colors"
                >
                  {post.title}
                </Link>
              </h2>
              {post.description && (
                <p className="text-muted-foreground">{post.description}</p>
              )}
              <div className="flex items-center gap-4">
                {post.date && (
                  <p className="text-sm text-muted-foreground">
                    {format(parseISO(post.date), "d 'de' MMM, yyyy", {
                      locale: ptBR,
                    })}
                  </p>
                )}
                <div className="flex items-center gap-1">
                  <span className="text-sm text-muted-foreground">•</span>
                  <Link
                    href={`/blog/categoria/${encodeURIComponent(tag)}`}
                    className="text-sm font-medium text-primary hover:underline"
                  >
                    {displayTag}
                  </Link>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
