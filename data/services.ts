import { Code2, LayoutGrid, Smartphone, Globe2, Palette, LineChart } from 'lucide-react'
import { FC } from 'react'

export interface Service {
  icon: React.ComponentType
  title: string
  description: string
  slug: string
  features: string[]
  deliverables: string[]
}

export const services: Service[] = [
  {
    icon: Code2,
    title: "Desenvolvimento Web",
    description: "Desenvolvimento de sites e aplicações web modernas, responsivas e otimizadas para performance.",
    slug: "desenvolvimento-web",
    features: [
      "Design responsivo",
      "Otimização para SEO",
      "Integração com APIs",
    ],
    deliverables: [
      "Código fonte",
      "Documentação",
      "Manutenção",
    ]
  },
  {
    icon: LayoutGrid,
    title: "Design de Interface",
    description: "Criação de interfaces intuitivas e atraentes que proporcionam a melhor experiência para seus usuários.",
    slug: "design-interface",
    features: [
      "Wireframes e protótipos",
      "Design centrado no usuário",
      "Testes de usabilidade",
    ],
    deliverables: [
      "Protótipos",
      "Design final",
      "Guia de estilo",
    ]
  },
  {
    icon: Smartphone,
    title: "Aplicações Responsivas",
    description: "Desenvolvimento de aplicações que se adaptam perfeitamente a qualquer dispositivo ou tamanho de tela.",
    slug: "aplicacoes-responsivas",
    features: [
      "Layout fluido",
      "Compatibilidade cross-browser",
      "Desempenho otimizado",
    ],
    deliverables: [
      "Aplicativo completo",
      "Suporte pós-lançamento",
      "Atualizações",
    ]
  },
  {
    icon: Globe2,
    title: "SEO e Performance",
    description: "Otimização para mecanismos de busca e melhorias de performance para maior visibilidade online.",
    slug: "seo-performance",
    features: [
      "Análise de palavras-chave",
      "Melhorias de tempo de carregamento",
      "SEO técnico",
    ],
    deliverables: [
      "Relatório de SEO",
      "Estratégia de melhorias",
      "Consultoria contínua",
    ]
  },
  {
    icon: Palette,
    title: "Design System",
    description: "Criação e implementação de sistemas de design consistentes e escaláveis para sua marca.",
    slug: "design-system",
    features: [
      "Biblioteca de componentes",
      "Guia de estilo",
      "Documentação abrangente",
    ],
    deliverables: [
      "Sistema de design completo",
      "Documentação",
      "Treinamento",
    ]
  },
  {
    icon: LineChart,
    title: "Consultoria Técnica",
    description: "Assessoria especializada para escolhas tecnológicas e melhores práticas de desenvolvimento.",
    slug: "consultoria-tecnica",
    features: [
      "Revisão de código",
      "Consultoria em arquitetura",
      "Planejamento de projetos",
    ],
    deliverables: [
      "Relatório de consultoria",
      "Plano de ação",
      "Acompanhamento",
    ]
  }
]
