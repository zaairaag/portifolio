'use client'

import { technologies } from '@/data/technologies'
import { motion } from 'framer-motion'
import { BriefcaseIcon, DownloadIcon, WrenchIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { SkillGrid } from '@/components/ui/skill-grid'
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

export function About() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-8 pb-16 md:pt-12 md:pb-24">
        <div className="max-w-3xl mx-auto">
          <div className="text-center space-y-6">
            <div className="inline-block rounded-full px-4 py-1.5 text-sm font-medium text-primary border border-primary/20">
              Desenvolvedora Full Stack
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              Transformando{' '}
              <span className="text-primary">
                desafios em soluções
              </span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Desenvolvedora de Software especializada em SharePoint e desenvolvimento web moderno,
              com mais de 4 anos de experiência criando soluções digitais inovadoras.
            </p>
          </div>
        </div>
      </section>

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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8 pt-8"
          >
            <div className="flex items-center gap-4 mb-12">
              <div className="p-3 rounded-xl border border-primary/20">
                <WrenchIcon className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-primary">
                Habilidades Técnicas
              </h2>
            </div>
            <SkillGrid categories={technologies} />
          </motion.div>
        </div>
      </section>
    </>
  )
}
