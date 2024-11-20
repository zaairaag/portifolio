"use client";

import { motion } from 'framer-motion';
import { BriefcaseIcon, WrenchIcon } from 'lucide-react';
import { Timeline } from '@/components/ui/timeline';
import { SkillGrid } from '@/components/ui/skill-grid';
import { technologies } from '@/data/technologies';

const experiences = [
  {
    year: '2022 - Presente',
    role: 'Programadora de Software',
    company: 'Ímpar',
    description: 'Desenvolvimento e manutenção de páginas estáticas e dinâmicas em ambientes SharePoint, utilizando tecnologias como Node.js e Microsoft SharePoint. Foco em soluções robustas e escaláveis.',
  },
  {
    year: '2022',
    role: 'Analista de Negócios',
    company: 'Deloitte Digital',
    description: 'Desenvolvimento de Templates de Email Marketing e Implementação de Componentes na Plataforma AEM, utilizando Marketing Cloud da Salesforce e Adobe Experience Manager (AEM).',
  },
  {
    year: '2019 - 2022',
    role: 'Analista de Sistema / Desenvolvedora Front-end',
    company: 'Ímpar',
    description: 'Desenvolvimento e manutenção de páginas em SharePoint 2013 (Classic e Modern) utilizando HTML, CSS, JavaScript, jQuery, AngularJS, Vue.js, React.js e SharePoint REST API. Criação de webparts com SPFx, React.js e TypeScript.',
  }
];

export function About() {
  return (
    <>
      {/* Hero Section */}
      <section className="container relative pt-8 pb-16 md:pt-12 md:pb-24">
        {/* Background Decoration */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -top-1/2 right-0 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
          <div className="absolute top-0 left-0 h-64 w-64 rounded-full bg-violet-500/5 blur-3xl" />
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="text-center space-y-6">
            <div className="inline-block rounded-full px-4 py-1.5 text-sm font-medium bg-accent/10 text-accent-foreground mb-4">
              Desenvolvedora Full Stack
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              Transformando{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-violet-500">
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
        {/* Background Effects */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/90 to-background/50" />
        </div>

        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="max-w-5xl mx-auto space-y-24"
          >
            {/* Jornada Profissional */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 rounded-xl bg-primary/10">
                  <BriefcaseIcon className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/50">
                  Jornada Profissional
                </h2>
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
                <div className="p-3 rounded-xl bg-primary/10">
                  <WrenchIcon className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/50">
                  Habilidades Técnicas
                </h2>
              </div>
              <SkillGrid categories={technologies} />
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}