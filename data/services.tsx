import { Code2, Globe, LayoutGrid, Rocket, Search, ShoppingCart } from "lucide-react"

export const services = [
  {
    title: "Landing Pages",
    shortDescription: "Páginas de alta conversão focadas em resultados",
    slug: "landing-pages",
    icon: <Rocket className="h-5 w-5 text-primary" />,
    description: "Landing Pages otimizadas para converter visitantes em clientes. Design moderno, carregamento rápido e estrutura focada em resultados.",
    longDescription: `Desenvolvo Landing Pages profissionais que transformam visitantes em clientes. 
    Cada página é cuidadosamente planejada para maximizar conversões através de:
    
    • Design persuasivo e focado no usuário
    • Carregamento ultra-rápido para menor taxa de abandono
    • Copywriting estratégico que engaja e converte
    • Elementos de prova social e credibilidade
    • Formulários e CTAs otimizados`,
    features: [
      "Design responsivo para todos os dispositivos",
      "Otimização para mecanismos de busca (SEO)",
      "Integração com ferramentas de analytics",
      "Formulários otimizados para conversão",
      "A/B testing para melhor performance",
      "Hospedagem em servidores de alta velocidade"
    ],
    deliverables: [
      "Página web completa e otimizada",
      "Domínio personalizado",
      "Certificado SSL para segurança",
      "Integração com seu CRM ou email marketing",
      "Relatórios de performance mensais",
      "Suporte técnico pós-lançamento"
    ]
  },
  {
    title: "Sites Institucionais",
    shortDescription: "Presença online profissional para sua empresa",
    slug: "sites-institucionais",
    icon: <Globe className="h-5 w-5 text-primary" />,
    description: "Sites institucionais completos que estabelecem autoridade e geram credibilidade para sua marca online.",
    longDescription: `Crio sites institucionais que representam profissionalmente sua empresa na internet. 
    Cada projeto é desenvolvido para:
    
    • Estabelecer uma forte presença online
    • Comunicar sua proposta de valor
    • Gerar credibilidade e confiança
    • Atrair leads qualificados
    • Facilitar o contato com clientes`,
    features: [
      "Design personalizado e profissional",
      "Páginas institucionais completas",
      "Blog integrado para conteúdo",
      "Painel administrativo intuitivo",
      "Otimização para SEO",
      "Integração com redes sociais"
    ],
    deliverables: [
      "Website completo e responsivo",
      "Treinamento do painel admin",
      "Manual de uso do site",
      "Otimização inicial de SEO",
      "Email profissional",
      "3 meses de suporte técnico"
    ]
  },
  {
    title: "E-commerce",
    shortDescription: "Lojas virtuais completas e otimizadas",
    slug: "e-commerce",
    icon: <ShoppingCart className="h-5 w-5 text-primary" />,
    description: "Plataformas de e-commerce completas e seguras para vender online com eficiência.",
    longDescription: `Desenvolvimento de lojas virtuais profissionais focadas em vendas. 
    Cada e-commerce é construído com:
    
    • Interface intuitiva para seus clientes
    • Gestão simplificada de produtos e pedidos
    • Checkout otimizado para conversão
    • Segurança em todas as transações
    • Integração com métodos de pagamento`,
    features: [
      "Catálogo de produtos organizado",
      "Carrinho de compras otimizado",
      "Múltiplos meios de pagamento",
      "Cálculo automático de frete",
      "Gestão de estoque integrada",
      "Relatórios de vendas detalhados"
    ],
    deliverables: [
      "Loja virtual completa",
      "Painel administrativo",
      "Integração com gateway de pagamento",
      "Configuração de fretes",
      "Treinamento da equipe",
      "Suporte técnico especializado"
    ]
  },
  {
    title: "WordPress",
    shortDescription: "Sites em WordPress personalizados",
    slug: "wordpress",
    icon: <LayoutGrid className="h-5 w-5 text-primary" />,
    description: "Sites em WordPress customizados com temas exclusivos e funcionalidades sob medida.",
    longDescription: `Desenvolvimento de sites WordPress profissionais e personalizados. 
    Cada projeto inclui:
    
    • Tema exclusivo para sua marca
    • Plugins essenciais configurados
    • Performance otimizada
    • Painel intuitivo
    • Segurança reforçada`,
    features: [
      "Design totalmente personalizado",
      "Otimização de performance",
      "Plugins premium inclusos",
      "Backup automático",
      "Proteção contra malware",
      "Painel WordPress otimizado"
    ],
    deliverables: [
      "Site WordPress completo",
      "Tema exclusivo",
      "Plugins configurados",
      "Treinamento de uso",
      "Manual de administração",
      "Suporte técnico mensal"
    ]
  },
  {
    title: "Otimização e SEO",
    shortDescription: "Melhore seu posicionamento no Google",
    slug: "otimizacao-seo",
    icon: <Search className="h-5 w-5 text-primary" />,
    description: "Otimização técnica e estratégias de SEO para melhorar seu posicionamento nos buscadores.",
    longDescription: `Serviços de otimização e SEO para aumentar sua visibilidade online. 
    O trabalho inclui:
    
    • Análise técnica completa
    • Otimização on-page
    • Estratégia de conteúdo
    • Link building ético
    • Monitoramento de resultados`,
    features: [
      "Auditoria SEO completa",
      "Otimização de conteúdo",
      "Análise de palavras-chave",
      "Correções técnicas",
      "Link building estratégico",
      "Relatórios mensais"
    ],
    deliverables: [
      "Relatório de auditoria inicial",
      "Plano de otimização",
      "Implementação de melhorias",
      "Monitoramento de rankings",
      "Relatórios de performance",
      "Recomendações mensais"
    ]
  },
  {
    title: "Consultoria Web",
    shortDescription: "Orientação especializada para seu projeto",
    slug: "consultoria-web",
    icon: <Code2 className="h-5 w-5 text-primary" />,
    description: "Consultoria especializada em desenvolvimento web, arquitetura e estratégia digital.",
    longDescription: `Consultoria profissional para projetos web e estratégia digital. 
    O serviço abrange:
    
    • Análise de requisitos
    • Planejamento técnico
    • Definição de arquitetura
    • Escolha de tecnologias
    • Melhores práticas`,
    features: [
      "Análise do projeto atual",
      "Recomendações técnicas",
      "Definição de stack",
      "Planejamento de sprints",
      "Review de código",
      "Mentoria técnica"
    ],
    deliverables: [
      "Documento de análise",
      "Recomendações técnicas",
      "Plano de ação",
      "Reuniões de acompanhamento",
      "Suporte por email",
      "Revisões de implementação"
    ]
  }
]
