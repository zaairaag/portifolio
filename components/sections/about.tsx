'use client'

import { motion } from 'framer-motion'
import {
  Blocks,
  Brain,
  Code2,
  Database,
  Layout,
  Puzzle,
  Server,
  Settings,
  Smartphone,
  Workflow,
} from 'lucide-react'

import { BriefcaseIcon, DownloadIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Timeline } from '@/components/ui/timeline'

const experiences = [
  {
    year: '2022 - Presente',
    role: 'Programadora de Software',
    company: 'Ímpar',
    description:
      'Desenvolvimento e manutenção de páginas estáticas e dinâmicas em ambientes SharePoint, utilizando tecnologias como Node.js e Microsoft SharePoint. Foco em soluções robustas e escaláveis.',
  },
  {
    year: '2022',
    role: 'Analista de Negócios',
    company: 'Deloitte Digital',
    description:
      'Desenvolvimento de Templates de Email Marketing e Implementação de Componentes na Plataforma AEM, utilizando Marketing Cloud da Salesforce e Adobe Experience Manager (AEM).',
  },
  {
    year: '2019 - 2022',
    role: 'Analista de Sistema / Desenvolvedora Front-end',
    company: 'Ímpar',
    description:
      'Desenvolvimento e manutenção de páginas em SharePoint 2013 (Classic e Modern) utilizando HTML, CSS, JavaScript, jQuery, AngularJS, Vue.js, React.js e SharePoint REST API. Criação de webparts com SPFx, React.js e TypeScript.',
  },
]

type Skill = {
  icon: React.ReactNode
  title: string
  items: string[]
}

const skillGroups = [
  {
    title: 'Desenvolvimento Front-end',
    skills: [
      {
        icon: <Layout className="w-5 h-5" />,
        title: 'Fundamentos',
        items: ['HTML5/CSS3', 'JavaScript/TypeScript','jquery','angularJS' , 'Design Responsivo', 'Acessibilidade (a11y)']
      },
      {
        icon: <Code2 className="w-5 h-5" />,
        title: 'Frameworks',
        items: ['React.js', 'Vue.js', 'Next.js', 'Nuxt.js', 'Tailwind CSS', 'Bootstrap']
      },
      {
        icon: <Settings className="w-5 h-5" />,
        title: 'Ferramentas',
        items: ['Webpack', 'Vite', 'Node.js', 'NPM/Yarn', 'Git/GitHub']
      }
    ]
  },
  {
    title: 'Desenvolvimento Back-end',
    skills: [
      {
        icon: <Server className="w-5 h-5" />,
        title: 'Linguagens & Frameworks',
        items: ['PHP', 'Node.js', 'Express', 'Laravel']
      },
      {
        icon: <Database className="w-5 h-5" />,
        title: 'Bancos de Dados',
        items: ['MySQL', 'PostgreSQL', 'MongoDB', 'Firebase']
      },
      {
        icon: <Workflow className="w-5 h-5" />,
        title: 'DevOps',
        items: ['Docker', 'CI/CD', 'AWS', 'Azure','Digital Ocean', 'Oracle Cloud']
      }
    ]
  },
  {
    title: 'Low-Code & No-Code',
    skills: [
      {
        icon: <Blocks className="w-5 h-5" />,
        title: 'Plataformas',
        items: ['Power Apps', 'Power Automate','n8n', 'Zapier', 'Make']
      },
      {
        icon: <Puzzle className="w-5 h-5" />,
        title: 'CMS',
        items: ['WordPress', 'SharePoint', 'Liferay', 'Adobe AEM', 'Shopify']
      }
    ]
  },
  {
    title: 'Inteligência Artificial',
    skills: [
      {
        icon: <Brain className="w-5 h-5" />,
        title: 'LLMs & Prompts',
        items: ['Prompt Engineering', 'OpenAI API', 'LangChain', 'ChatGPT']
      }
    ]
  }
]

export function About() {
  return (
    <section className="space-y-24">
      <div className="pt-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center space-y-6">
            <div className="inline-block rounded-full px-4 py-1.5 text-sm font-medium text-primary border border-primary/20">
              Sobre
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              Explorando o futuro da{' '}
              <span className="text-primary">tecnologia</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Desde 2019 mergulhada no universo do desenvolvimento web, sou uma entusiasta
              apaixonada por inovação e novas tecnologias. Encontrei na programação não
              apenas uma profissão, mas uma forma de transformar ideias em realidade.
              Atualmente, divido meu tempo entre criar soluções web modernas e explorar
              as infinitas possibilidades das IAs generativas, sempre em busca de
              maneiras criativas de combinar tecnologia e criatividade.
            </p>
          </div>
        </div>
      </div>

      {/* Content Sections */}
      <section className="w-full pb-24 relative">
        <div className="max-w-5xl mx-auto space-y-24">
          {/* Jornada Profissional */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl border border-primary/20">
                  <BriefcaseIcon className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-2xl font-bold text-primary">
                  Jornada Profissional
                </h2>
              </div>
              <Button
                variant="outline"
                className="flex items-center gap-2"
                onClick={() => window.open('/cv.pdf', '_blank')}
              >
                <DownloadIcon className="w-4 h-4" />
                Baixar CV
              </Button>
            </div>
            <Timeline items={experiences} />
          </motion.div>

          {/* Habilidades Técnicas */}
          <div className="w-full relative">
            <div className="max-w-6xl mx-auto px-6">
              {skillGroups.map((group, groupIndex) => (
                <div key={group.title} className="mb-16 last:mb-0">
                  <h2 className="text-2xl font-bold mb-8">{group.title}</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {group.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: skillIndex * 0.1 }}
                        className="bg-card p-6 rounded-lg space-y-4"
                      >
                        <div className="flex items-center gap-3">
                          <div className="text-primary">{skill.icon}</div>
                          <h3 className="font-medium">{skill.title}</h3>
                        </div>
                        <ul className="space-y-2 text-muted-foreground">
                          {skill.items.map((item) => (
                            <li key={item} className="flex items-center gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </section>
  )
}
