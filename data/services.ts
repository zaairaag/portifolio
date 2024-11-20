interface Service {
  title: string
  slug: string
  shortDescription: string
  description: string
  approach: string
  image: string
  features: string[]
}

export const services: Service[] = [
  {
    title: 'Websites',
    slug: 'websites',
    shortDescription: 'Sites institucionais e corporativos com design premium e alta performance',
    description: `
      <p>Desenvolvemos websites modernos e responsivos que não apenas impressionam visualmente, mas também entregam resultados. Nossos sites são construídos com as mais recentes tecnologias, garantindo velocidade, segurança e uma experiência excepcional para seus usuários.</p>
      
      <p>Cada projeto é único e personalizado para atender às necessidades específicas do seu negócio, com foco em:</p>
      <ul>
        <li>Design moderno e responsivo</li>
        <li>Otimização para mecanismos de busca (SEO)</li>
        <li>Alta performance e velocidade de carregamento</li>
        <li>Integração com sistemas e ferramentas</li>
      </ul>
    `,
    approach: `
      <p>Nossa abordagem para desenvolvimento de websites segue um processo estruturado:</p>
      <ol>
        <li><strong>Discovery:</strong> Entendemos seus objetivos e necessidades</li>
        <li><strong>Planejamento:</strong> Definimos arquitetura e funcionalidades</li>
        <li><strong>Design:</strong> Criamos layouts modernos e intuitivos</li>
        <li><strong>Desenvolvimento:</strong> Implementamos com tecnologias de ponta</li>
        <li><strong>Testes:</strong> Garantimos qualidade e performance</li>
        <li><strong>Lançamento:</strong> Colocamos seu site no ar</li>
      </ol>
    `,
    image: 'https://images.unsplash.com/photo-1487014679447-9f8336841d58?w=800',
    features: [
      'Design responsivo e moderno',
      'Otimização para SEO',
      'Painel administrativo',
      'Integração com Google Analytics',
      'Certificado SSL',
      'Hospedagem premium',
      'Suporte técnico',
    ],
  },
  {
    title: 'Landing Pages',
    slug: 'landing-pages',
    shortDescription: 'Páginas de alta conversão para campanhas e produtos digitais',
    description: `
      <p>Criamos landing pages otimizadas para conversão, com design persuasivo e copy estratégico. Nossas páginas são desenvolvidas com foco em resultados, utilizando as melhores práticas de CRO (Conversion Rate Optimization).</p>
      
      <p>Ideal para:</p>
      <ul>
        <li>Lançamentos de produtos</li>
        <li>Campanhas de marketing</li>
        <li>Captura de leads</li>
        <li>Vendas de produtos digitais</li>
      </ul>
    `,
    approach: `
      <p>Nossa metodologia para criar landing pages de alta conversão:</p>
      <ol>
        <li><strong>Análise:</strong> Estudo do público-alvo e concorrência</li>
        <li><strong>Estratégia:</strong> Definição de objetivos e métricas</li>
        <li><strong>Copywriting:</strong> Criação de textos persuasivos</li>
        <li><strong>Design:</strong> Layout focado em conversão</li>
        <li><strong>Otimização:</strong> Testes A/B e melhorias contínuas</li>
      </ol>
    `,
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800',
    features: [
      'Design otimizado para conversão',
      'Copywriting persuasivo',
      'Formulários otimizados',
      'Testes A/B',
      'Integração com ferramentas de marketing',
      'Relatórios de performance',
      'Hospedagem inclusa',
    ],
  },
  {
    title: 'E-commerce',
    slug: 'ecommerce',
    shortDescription: 'Lojas virtuais completas com experiência única de compra',
    description: `
      <p>Desenvolvemos e-commerces completos e personalizados, focados em proporcionar a melhor experiência de compra para seus clientes. Nossas soluções são escaláveis e integradas com as principais plataformas de pagamento e logística.</p>
      
      <p>Recursos principais:</p>
      <ul>
        <li>Gestão completa de produtos</li>
        <li>Múltiplos meios de pagamento</li>
        <li>Cálculo de frete automático</li>
        <li>Gestão de estoque</li>
        <li>Relatórios e analytics</li>
      </ul>
    `,
    approach: `
      <p>Nossa abordagem para e-commerce:</p>
      <ol>
        <li><strong>Planejamento:</strong> Análise de requisitos e escolha da plataforma</li>
        <li><strong>UX/UI:</strong> Design focado em conversão</li>
        <li><strong>Desenvolvimento:</strong> Implementação e integrações</li>
        <li><strong>Testes:</strong> Garantia de qualidade e segurança</li>
        <li><strong>Treinamento:</strong> Capacitação da equipe</li>
      </ol>
    `,
    image: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=800',
    features: [
      'Painel administrativo completo',
      'Integração com meios de pagamento',
      'Gestão de estoque',
      'Cálculo de frete automático',
      'Relatórios de vendas',
      'Integração com marketplaces',
      'Suporte especializado',
    ],
  },
  {
    title: 'Sistemas Web',
    slug: 'sistemas',
    shortDescription: 'Sistemas web personalizados para gestão empresarial',
    description: `
      <p>Desenvolvemos sistemas web sob medida para automatizar e otimizar processos empresariais. Nossas soluções são escaláveis, seguras e adaptadas às necessidades específicas do seu negócio.</p>
      
      <p>Tipos de sistemas:</p>
      <ul>
        <li>ERP</li>
        <li>CRM</li>
        <li>Gestão financeira</li>
        <li>Gestão de projetos</li>
        <li>Automação de processos</li>
      </ul>
    `,
    approach: `
      <p>Nossa metodologia de desenvolvimento:</p>
      <ol>
        <li><strong>Levantamento:</strong> Análise detalhada de requisitos</li>
        <li><strong>Arquitetura:</strong> Definição da estrutura técnica</li>
        <li><strong>Prototipação:</strong> Criação de wireframes e protótipos</li>
        <li><strong>Desenvolvimento:</strong> Implementação ágil</li>
        <li><strong>Testes:</strong> Validação e qualidade</li>
        <li><strong>Implantação:</strong> Deploy e treinamento</li>
      </ol>
    `,
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800',
    features: [
      'Análise de requisitos',
      'Desenvolvimento personalizado',
      'Integrações com APIs',
      'Painéis administrativos',
      'Relatórios personalizados',
      'Treinamento da equipe',
      'Suporte técnico',
    ],
  },
  {
    title: 'UI/UX Design',
    slug: 'ui-ux',
    shortDescription: 'Design de interfaces e experiência do usuário',
    description: `
      <p>Criamos interfaces intuitivas e experiências memoráveis para seus usuários. Nosso processo de design é centrado no usuário, combinando estética e funcionalidade para criar produtos digitais excepcionais.</p>
      
      <p>Serviços de design:</p>
      <ul>
        <li>Design de interfaces</li>
        <li>Experiência do usuário</li>
        <li>Design systems</li>
        <li>Prototipação</li>
        <li>Testes de usabilidade</li>
      </ul>
    `,
    approach: `
      <p>Nossa abordagem de design:</p>
      <ol>
        <li><strong>Pesquisa:</strong> Análise de usuários e benchmarking</li>
        <li><strong>Arquitetura:</strong> Estruturação da informação</li>
        <li><strong>Wireframes:</strong> Prototipação de baixa fidelidade</li>
        <li><strong>Design:</strong> Criação de interfaces</li>
        <li><strong>Protótipo:</strong> Simulação da experiência</li>
        <li><strong>Validação:</strong> Testes com usuários</li>
      </ol>
    `,
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800',
    features: [
      'Research e análise',
      'Wireframes e protótipos',
      'Design de interfaces',
      'Design system',
      'Testes de usabilidade',
      'Documentação',
      'Acompanhamento de implementação',
    ],
  },
]
