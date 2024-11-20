'use client'

import { motion } from 'framer-motion'
import { Brain, Cloud, Code2, Globe2, LayoutTemplate, Megaphone, Server } from 'lucide-react'

const icons = {
  Frontend: Globe2,
  Microsoft: LayoutTemplate,
  CMS: Code2,
  'Marketing Digital': Megaphone,
  'Backend & DevOps': Server,
  'Deploy & Cloud': Cloud,
  'AI & LLMs': Brain,
}

interface Skill {
  category: string
  description: string
  mainTechs: string
  color: string
}

interface SkillGridProps {
  categories: Skill[]
}

export function SkillGrid({ categories }: SkillGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {categories.map((skill, index) => {
        const Icon = icons[skill.category as keyof typeof icons]
        return (
          <motion.div
            key={skill.category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`${index === categories.length - 1 && categories.length % 2 !== 0 ? 'md:col-span-2 lg:col-span-1' : ''}`}
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group h-full relative bg-card/30 backdrop-blur-sm rounded-xl p-6 border border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 flex flex-col overflow-hidden"
              style={{
                borderColor: `${skill.color}20`,
                background: `radial-gradient(circle at top left, ${skill.color}05, transparent 70%)`,
              }}
            >
              {/* Ícone flutuante no canto */}
              <motion.div
                initial={{ rotate: 0 }}
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="absolute -right-6 -top-6 opacity-10 text-primary"
                style={{ color: skill.color }}
              >
                <Icon size={80} />
              </motion.div>

              {/* Conteúdo */}
              <div className="relative z-10">
                {/* Ícone e Categoria */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg" style={{ backgroundColor: `${skill.color}15` }}>
                    <Icon size={20} style={{ color: skill.color }} />
                  </div>
                  <h3 className="text-lg font-semibold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
                    {skill.category}
                  </h3>
                </div>

                {/* Descrição */}
                <p className="text-sm text-muted-foreground mb-4 flex-grow">{skill.description}</p>

                {/* Tecnologias */}
                <div
                  className="text-sm font-medium rounded-lg py-2 px-3"
                  style={{
                    backgroundColor: `${skill.color}10`,
                    color: skill.color,
                  }}
                >
                  {skill.mainTechs}
                </div>
              </div>

              {/* Efeito de brilho no hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: `
                    radial-gradient(circle at center, ${skill.color}10 0%, transparent 70%),
                    linear-gradient(to right bottom, transparent, ${skill.color}05 50%, transparent)
                  `,
                }}
              />
            </motion.div>
          </motion.div>
        )
      })}
    </div>
  )
}
