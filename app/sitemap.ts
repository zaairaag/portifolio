import { MetadataRoute } from 'next';
import { getDatabase } from '@/lib/notion';

const baseUrl = 'https://zairagoncalves.com';

// Rotas principais do menu
const staticRoutes = [
  {
    path: '',
    priority: 1.0,
    changeFrequency: 'daily' as const,
  },
  {
    path: '/inicio',
    priority: 0.9,
    changeFrequency: 'daily' as const,
  },
  {
    path: '/sobre',
    priority: 0.8,
    changeFrequency: 'monthly' as const,
  },
  {
    path: '/projetos',
    priority: 0.9,
    changeFrequency: 'weekly' as const,
  },
  {
    path: '/experiencia',
    priority: 0.8,
    changeFrequency: 'monthly' as const,
  },
  {
    path: '/blog',
    priority: 0.9,
    changeFrequency: 'daily' as const,
  }
] as const;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const currentDate = new Date().toISOString();

  // Criando o sitemap com URLs estáticas
  const staticUrls = staticRoutes.map(route => ({
    url: `${baseUrl}${route.path}`,
    lastModified: currentDate,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  try {
    // Buscando posts do blog do Notion
    const posts = await getDatabase();
    
    if (!posts || posts.length === 0) {
      return staticUrls;
    }

    // Adicionando URLs dos posts do blog
    const blogUrls = posts.map(post => ({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: post.date,
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    }));

    // Combinando todas as URLs
    return [...staticUrls, ...blogUrls];
  } catch (error) {
    console.error('Erro ao gerar sitemap:', error);
    return staticUrls;
  }
}
