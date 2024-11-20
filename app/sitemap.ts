import { MetadataRoute } from 'next'

const baseUrl = 'https://zairagoncalves.com'

// Definindo as rotas com suas prioridades e frequências de atualização
const routes = [
  {
    path: '',
    priority: 1.0,
    changeFrequency: 'daily' as const,
  },
  {
    path: '/sobre',
    priority: 0.8,
    changeFrequency: 'monthly' as const,
  },
  {
    path: '/portfolio',
    priority: 0.9,
    changeFrequency: 'weekly' as const,
  },
  {
    path: '/projetos',
    priority: 0.9,
    changeFrequency: 'weekly' as const,
  },
  {
    path: '/servicos',
    priority: 0.8,
    changeFrequency: 'monthly' as const,
  },
  {
    path: '/contato',
    priority: 0.7,
    changeFrequency: 'monthly' as const,
  },
] as const

export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date()

  // Criando o sitemap com URLs completas e metadados
  const sitemapRoutes = routes.map(route => ({
    url: `${baseUrl}${route.path}`,
    lastModified: currentDate,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }))

  // Adicionando URLs dinâmicas se necessário (exemplo: projetos individuais)
  // Aqui você pode adicionar lógica para incluir URLs dinâmicas baseadas em dados

  return sitemapRoutes
}
