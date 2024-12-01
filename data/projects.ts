export interface Project {
  title: string
  description: string
  thumbnail: string
  link?: string
  category: string
  tags: string[]
  type: 'lab' | 'client'
}

export interface GitHubRepo {
  id: number
  name: string
  description: string
  html_url: string
  homepage: string | null
  stargazers_count: number
  language: string
  topics: string[]
  updated_at: string
}

export const clientProjects: Project[] = [
  {
    title: 'Loja Virtual Artesanato',
    description: 'E-commerce desenvolvido para uma artesã vender seus produtos feitos à mão, com sistema de carrinho e pagamento integrado.',
    thumbnail: '/projects/ecommerce-artesanato.jpg',
    category: 'ecommerce',
    tags: ['Next.js', 'TypeScript', 'Stripe', 'TailwindCSS'],
    type: 'client'
  },
  {
    title: 'Sistema de Gestão',
    description: 'Sistema web para gestão de estoque e vendas, com relatórios e dashboards personalizados.',
    thumbnail: '/projects/sistema-gestao.jpg',
    category: 'sistemas',
    tags: ['React', 'Node.js', 'PostgreSQL', 'Docker'],
    type: 'client'
  },
  {
    title: 'Landing Page Advocacia',
    description: 'Landing page moderna para escritório de advocacia, com formulário de contato e integração com WhatsApp.',
    thumbnail: '/projects/landing-advocacia.jpg',
    category: 'landing-pages',
    tags: ['React', 'TailwindCSS', 'Framer Motion'],
    type: 'client'
  },
  {
    title: 'Website Institucional',
    description: 'Website institucional para empresa de tecnologia, com blog e área de carreiras.',
    thumbnail: '/projects/website-tech.jpg',
    category: 'websites',
    tags: ['Next.js', 'TypeScript', 'Sanity CMS'],
    type: 'client'
  },
  {
    title: 'Redesign UX/UI App',
    description: 'Redesign completo da experiência do usuário e interface de um aplicativo de delivery.',
    thumbnail: '/projects/redesign-app.jpg',
    category: 'ui-ux',
    tags: ['Figma', 'Adobe XD', 'Prototyping'],
    type: 'client'
  }
]
