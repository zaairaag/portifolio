'use client'

import { projects } from '@/data/projects'
import { motion } from 'framer-motion'
import { ChevronRight } from 'lucide-react'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { PageHeader } from '@/components/ui/page-header'

const categories = [
  { id: 'all', label: 'Todos' },
  { id: 'websites', label: 'Websites' },
  { id: 'landing-pages', label: 'Landing Pages' },
  { id: 'ecommerce', label: 'E-commerce' },
  { id: 'sistemas', label: 'Sistemas Web' },
  { id: 'ui-ux', label: 'UI/UX Design' },
]

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const filteredProjects = projects.filter(
    project => selectedCategory === 'all' || project.category === selectedCategory
  )

  return (
    <div className="min-h-screen">
      <PageHeader 
        badge="Portfólio"
        title="Criando"
        titleHighlight="experiências excepcionais"
        description="Uma seleção dos meus melhores projetos, demonstrando expertise em desenvolvimento web, design de interfaces e soluções técnicas inovadoras."
      />

      {/* Filters */}
      <section className="sticky top-0 z-10 bg-background/80 backdrop-blur-xl border-b border-border">
        <div className="max-w-5xl mx-auto px-4 py-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:flex lg:justify-center gap-2 max-w-4xl mx-auto">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={cn(
                  'w-full lg:flex-1 px-4 py-2.5 text-sm font-medium transition-colors rounded-lg whitespace-nowrap',
                  selectedCategory === category.id
                    ? 'bg-primary text-primary-foreground'
                    : 'hover:bg-accent hover:text-accent-foreground'
                )}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <main className="max-w-5xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredProjects.map(project => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-lg bg-card transition-all duration-300 hover:-translate-y-2"
            >
              {/* Thumbnail com overlay */}
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={project.thumbnail}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>

              {/* Conteúdo do card */}
              <div className="absolute inset-0 flex flex-col justify-end p-5 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <h3 className="text-lg font-bold leading-tight">{project.title}</h3>
                <p className="mt-2 text-sm text-gray-200 line-clamp-3">{project.description}</p>

                {/* Tags */}
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {project.tags.slice(0, 3).map(tag => (
                    <span
                      key={tag}
                      className="rounded-full bg-white/20 px-2.5 py-0.5 text-xs font-medium backdrop-blur-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Botão Ver Mais */}
                <Link
                  href={project.link || '#'}
                  className="mt-4 inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                >
                  Ver Projeto
                  <ChevronRight className="ml-1.5 h-4 w-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  )
}
