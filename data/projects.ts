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
    thumbnail: 'https://images.unsplash.com/photo-1612160808975-ecb94e6e517b?auto=format&fit=crop&w=800&q=80',
    category: 'ecommerce',
    tags: ['Next.js', 'TypeScript', 'Stripe', 'TailwindCSS'],
    type: 'client'
  },
  {
    title: 'Sistema de Gestão',
    description: 'Sistema web para gestão de estoque e vendas, com relatórios e dashboards personalizados.',
    thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    category: 'sistemas',
    tags: ['React', 'Node.js', 'PostgreSQL', 'Docker'],
    type: 'client'
  },
  {
    title: 'Landing Page Advocacia',
    description: 'Landing page moderna para escritório de advocacia, com formulário de contato e integração com WhatsApp.',
    thumbnail: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=800&q=80',
    category: 'landing-pages',
    tags: ['React', 'TailwindCSS', 'Framer Motion'],
    type: 'client'
  },
  {
    title: 'Website Institucional',
    description: 'Website institucional para empresa de tecnologia, com blog e área de carreiras.',
    thumbnail: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80',
    category: 'websites',
    tags: ['Next.js', 'TypeScript', 'Contentful', 'TailwindCSS'],
    type: 'client'
  },
  {
    title: 'App de Delivery',
    description: 'Aplicativo web para delivery de comida, com sistema de pedidos e rastreamento em tempo real.',
    thumbnail: 'https://images.unsplash.com/photo-1526367790999-0150786686a2?auto=format&fit=crop&w=800&q=80',
    category: 'sistemas',
    tags: ['React Native', 'Node.js', 'MongoDB', 'Socket.io'],
    type: 'client'
  },
  {
    title: 'Redesign UX/UI',
    description: 'Redesign completo da experiência do usuário e interface para um aplicativo de finanças.',
    thumbnail: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=800&q=80',
    category: 'ui-ux',
    tags: ['Figma', 'Prototyping', 'User Research'],
    type: 'client'
  }
]
