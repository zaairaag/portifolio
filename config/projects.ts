export interface Project {
  title: string
  description: string
  image: string
  tags: string[]
  category: string
  links: {
    demo?: string
    github?: string
  }
  highlights: string[]
}

export const projects: Project[] = [
  {
    title: 'SharePoint Modern Sites',
    description:
      'Desenvolvimento de sites modernos para o Banco do Brasil utilizando SharePoint Framework (SPFx). Implementação de webparts personalizadas, layouts responsivos e integração com APIs REST.',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80',
    tags: ['React', 'TypeScript', 'SharePoint', 'SPFx'],
    category: 'SharePoint',
    links: {
      demo: '#',
      github: '#',
    },
    highlights: [
      'Desenvolvimento de webparts personalizadas',
      'Integração com APIs REST',
      'Layout responsivo e moderno',
      'Performance otimizada',
    ],
  },
  {
    title: 'Power Apps Solutions',
    description:
      'Criação de aplicações empresariais usando Power Apps e Power Automate. Desenvolvimento de fluxos de trabalho automatizados e interfaces intuitivas para gestão de processos internos.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
    tags: ['Power Apps','SharePoint', 'Azure'],
    category: 'Power Platform',
    links: {
      demo: '#',
      github: '#',
    },
    highlights: [
      'Desenvolvimento de aplicações low-code',
      'Automação de processos',
      'Integração com SharePoint e Azure',
      'Interface intuitiva',
    ],
  },
]
