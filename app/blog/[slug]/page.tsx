import { getDatabase, getPage, getBlocks } from '@/lib/notion';
import { RenderBlock } from '@/components/notion/RenderBlock';
import { format, parseISO } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Metadata } from 'next';

export const revalidate = 3600;

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const posts = await getDatabase();
  const post = posts.find((p) => p.slug === params.slug);

  if (!post) {
    return {
      title: 'Post não encontrado',
    };
  }

  return {
    title: `${post.title} | Blog`,
    description: post.description,
  };
}

export async function generateStaticParams() {
  const posts = await getDatabase();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const posts = await getDatabase();
  const post = posts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  const { page } = await getPage(post.id);
  const blocks = await getBlocks(post.id);

  if (!page || !blocks) {
    notFound();
  }

  const formattedDate = post.date 
    ? format(parseISO(post.date), "d 'de' MMMM 'de' yyyy", { locale: ptBR })
    : null;

  return (
    <div className="min-h-screen">
      <article className="container mx-auto px-4 py-8">
        <header className="mb-8">
          <h1 className="text-4xl font-bold mb-2">{post.title}</h1>
          {formattedDate && (
            <time className="text-muted-foreground block mb-4">
              {formattedDate}
            </time>
          )}
          {post.description && (
            <p className="text-xl text-muted-foreground">{post.description}</p>
          )}
          {post.featuredImage && (
            <div className="relative aspect-video mt-8">
              <Image
                src={post.featuredImage}
                alt={post.title}
                fill
                className="object-cover rounded-lg"
              />
            </div>
          )}
        </header>

        <div className="prose prose-lg max-w-none">
          {blocks.map((block) => (
            <RenderBlock key={block.id} block={block} />
          ))}
        </div>
      </article>
    </div>
  );
}
