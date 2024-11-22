import { Code2, Globe2, ShoppingCart, Layout, Search, LineChart } from 'lucide-react'
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
    icon: Layout,
    title: "Landing Pages",
    description: "Landing Pages otimizadas para converter visitantes em clientes. Design moderno, carregamento rápido e estrutura focada em resultados.",
    slug: "landing-pages",
    features: [
      "Design moderno e atraente",
      "Otimização para conversão",
      "Carregamento rápido",
      "Mobile-first"
    ],
    deliverables: [
      "Página otimizada para conversão",
      "Integração com analytics",
      "Relatório de performance"
    ]
  },
  {
    icon: Globe2,
    title: "Sites Institucionais",
    description: "Sites institucionais completos que estabelecem autoridade e geram credibilidade para sua marca online.",
    slug: "sites-institucionais",
    features: [
      "Design profissional",
      "Páginas institucionais",
      "Blog integrado",
      "Área administrativa"
    ],
    deliverables: [
      "Site completo",
      "Painel administrativo",
      "Treinamento da equipe"
    ]
  },
  {
    icon: ShoppingCart,
    title: "E-commerce",
    description: "Plataformas de e-commerce completas e seguras para vender online com eficiência.",
    slug: "ecommerce",
    features: [
      "Catálogo de produtos",
      "Carrinho de compras",
      "Gateway de pagamento",
      "Gestão de estoque"
    ],
    deliverables: [
      "Loja virtual completa",
      "Integração com pagamentos",
      "Painel administrativo"
    ]
  },
  {
    icon: Code2,
    title: "WordPress",
    description: "Sites em WordPress customizados com temas exclusivos e funcionalidades sob medida.",
    slug: "wordpress",
    features: [
      "Tema personalizado",
      "Plugins otimizados",
      "Painel customizado",
      "Backup automático"
    ],
    deliverables: [
      "Site WordPress completo",
      "Tema exclusivo",
      "Treinamento"
    ]
  },
  {
    icon: Search,
    title: "Otimização e SEO",
    description: "Otimização técnica e estratégias de SEO para melhorar seu posicionamento nos buscadores.",
    slug: "otimizacao-seo",
    features: [
      "Análise técnica",
      "Otimização on-page",
      "Link building",
      "Monitoramento"
    ],
    deliverables: [
      "Relatório de otimizações",
      "Implementação técnica",
      "Relatórios mensais"
    ]
  },
  {
    icon: LineChart,
    title: "Consultoria Web",
    description: "Consultoria especializada em desenvolvimento web, arquitetura e estratégia digital.",
    slug: "consultoria-web",
    features: [
      "Análise de projetos",
      "Definição de arquitetura",
      "Escolha de tecnologias",
      "Mentoria técnica"
    ],
    deliverables: [
      "Relatório de recomendações",
      "Documentação técnica",
      "Suporte contínuo"
    ]
  }
]
