'use client'

import { Timeline } from '@/components/ui/timeline'
import { motion } from 'framer-motion'
import { FileCheck, Lightbulb, MessageSquare, Rocket, Users, Zap } from 'lucide-react'

const workSteps = [
  {
    icon: <MessageSquare className="w-6 h-6" />,
    title: 'Reunião Inicial',
    description: 'Conversamos sobre seus objetivos, necessidades e expectativas para o projeto.',
    year: '01'
  },
  {
    icon: <Lightbulb className="w-6 h-6" />,
    title: 'Planejamento',
    description: 'Desenvolvo uma proposta detalhada com escopo, prazo e investimento.',
    year: '02'
  },
  {
    icon: <FileCheck className="w-6 h-6" />,
    title: 'Aprovação',
    description: 'Alinhamos todos os detalhes e aprovamos o plano de execução.',
    year: '03'
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: 'Desenvolvimento',
    description: 'Executo o projeto com atualizações frequentes sobre o progresso.',
    year: '04'
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: 'Feedback',
    description: 'Revisamos juntos e fazemos ajustes conforme necessário.',
    year: '05'
  },
  {
    icon: <Rocket className="w-6 h-6" />,
    title: 'Entrega',
    description: 'Projeto finalizado, testado e pronto para decolar.',
    year: '06'
  },
]

export function WorkProcess() {
  return (
    <motion.section 
      className="container py-24 border-y border-border/50"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <motion.div 
            className="inline-flex items-center justify-center px-4 py-1.5 mb-6 text-sm font-medium rounded-full bg-primary/10 text-primary"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Como Trabalhamos
          </motion.div>
          <motion.h2 
            className="text-3xl md:text-4xl font-bold tracking-tight mb-4"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            Um processo transparente
          </motion.h2>
          <motion.p 
            className="text-xl text-muted-foreground"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            Do planejamento à entrega, com foco em resultados
          </motion.p>
        </div>

        {/* Timeline dos Passos */}
        <motion.div 
          className="relative mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <Timeline 
            items={workSteps.map(step => ({
              year: step.year,
              role: step.title,
              company: '',
              description: step.description,
              icon: step.icon
            }))}
          />
        </motion.div>
      </div>
    </motion.section>
  )
}
