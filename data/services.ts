import { Code2, LayoutGrid, Smartphone, Globe2, Palette, LineChart } from 'lucide-react'
import { FC } from 'react'

export interface Service {
  icon: React.ComponentType
  title: string
  description: string
  slug: string
}

export const services: Service[] = [
  {
    icon: Code2,
    title: "Desenvolvimento Web",
    description: "Desenvolvimento de sites e aplicações web modernas, responsivas e otimizadas para performance.",
    slug: "desenvolvimento-web"
  },
  {
    icon: LayoutGrid,
    title: "Design de Interface",
    description: "Criação de interfaces intuitivas e atraentes que proporcionam a melhor experiência para seus usuários.",
    slug: "design-interface"
  },
  {
    icon: Smartphone,
    title: "Aplicações Responsivas",
    description: "Desenvolvimento de aplicações que se adaptam perfeitamente a qualquer dispositivo ou tamanho de tela.",
    slug: "aplicacoes-responsivas"
  },
  {
    icon: Globe2,
    title: "SEO e Performance",
    description: "Otimização para mecanismos de busca e melhorias de performance para maior visibilidade online.",
    slug: "seo-performance"
  },
  {
    icon: Palette,
    title: "Design System",
    description: "Criação e implementação de sistemas de design consistentes e escaláveis para sua marca.",
    slug: "design-system"
  },
  {
    icon: LineChart,
    title: "Consultoria Técnica",
    description: "Assessoria especializada para escolhas tecnológicas e melhores práticas de desenvolvimento.",
    slug: "consultoria-tecnica"
  }
]
