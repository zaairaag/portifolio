'use client'

import { clientProjects, type GitHubRepo } from '@/data/projects'
import { motion } from 'framer-motion'
import { ChevronRight, Lightbulb, Briefcase, Star, GitFork, ExternalLink } from 'lucide-react'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { PageHeader } from '@/components/ui/page-header'
import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { getGitHubRepos } from '@/lib/github'

const categories = [
  { id: 'all', label: 'Ver Todos' },
  { id: 'ecommerce', label: 'Lojas Online' },
  { id: 'websites', label: 'Sites Criativos' },
  { id: 'landing-pages', label: 'Landing Pages' },
  { id: 'sistemas', label: 'Aplicações Web' },
  { id: 'ui-ux', label: 'Design de Interfaces' },
]

interface Props {
  githubRepos: GitHubRepo[]
}

export default async function PortfolioPage() {
  const githubRepos = await getGitHubRepos()

  return (
    <ClientPortfolio githubRepos={githubRepos} />
  )
}

function ClientPortfolio({ githubRepos }: Props) {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedType, setSelectedType] = useState<'lab' | 'client'>('client')

  const filteredProjects = selectedType === 'lab' 
    ? [] // Lab agora usa apenas repos do GitHub
    : selectedCategory === 'all' 
      ? clientProjects 
      : clientProjects.filter(project => project.category === selectedCategory)

  const projectTypes = [
    { 
      id: 'lab', 
      label: 'Meu Laboratório Particular', 
      description: 'Onde experimento, crio e compartilho código aberto', 
      icon: Lightbulb 
    },
    { 
      id: 'client', 
      label: 'Entregas para Clientes', 
      description: 'Projetos que transformaram ideias em realidade', 
      icon: Briefcase 
    },
  ] as const

  return (
    <div className="min-h-screen">
      <PageHeader 
        badge="Portfólio"
        title="Transformando desafios em"
        titleHighlight="soluções digitais"
        description="Uma coleção cuidadosamente selecionada dos meus melhores projetos. Do planejamento à entrega, cada linha de código reflete minha paixão por criar experiências digitais memoráveis."
      />

      {/* Project Type Selection */}
      <section className="container max-w-4xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {projectTypes.map(type => (
            <motion.button
              key={type.id}
              onClick={() => setSelectedType(type.id)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={cn(
                'group relative overflow-hidden rounded-xl p-8 transition-all duration-300',
                selectedType === type.id
                  ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/20'
                  : 'bg-card hover:bg-accent hover:text-accent-foreground hover:shadow-md'
              )}
            >
              <div className="flex items-start gap-4">
                <div className={cn(
                  'rounded-lg p-3',
                  selectedType === type.id
                    ? 'bg-primary-foreground/10'
                    : 'bg-primary/10'
                )}>
                  <type.icon className="w-8 h-8" />
                </div>
                <div className="flex-1 text-left">
                  <h3 className="text-xl font-semibold">{type.label}</h3>
                  {type.description && (
                    <p className={cn(
                      'mt-2 text-sm',
                      selectedType === type.id
                        ? 'text-primary-foreground/80'
                        : 'text-muted-foreground'
                    )}>
                      {type.description}
                    </p>
                  )}
                </div>
              </div>
              <div className="absolute inset-0 border-2 border-transparent transition-colors duration-300 group-hover:border-primary/20 rounded-xl" />
            </motion.button>
          ))}
        </div>
      </section>

      {/* Filters - Only show for client projects */}
      {selectedType !== 'lab' && (
        <section className="sticky top-0 z-10 bg-background/80 backdrop-blur-xl border-b border-border">
          <div className="container max-w-5xl mx-auto px-4 py-8">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:flex lg:justify-center gap-2">
              {categories.map(category => (
                <motion.button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className={cn(
                    'w-full lg:flex-1 px-4 py-2.5 text-sm font-medium transition-all duration-300 rounded-lg whitespace-nowrap',
                    selectedCategory === category.id
                      ? 'bg-primary text-primary-foreground shadow-md shadow-primary/20'
                      : 'hover:bg-accent hover:text-accent-foreground hover:shadow-sm'
                  )}
                >
                  {category.label}
                </motion.button>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Projects Grid */}
      <main className="container max-w-5xl mx-auto px-4 py-12">
        {selectedType === 'lab' ? (
          // GitHub Repos Grid
          <div className="space-y-3">
            {githubRepos.map(repo => (
              <motion.div
                key={repo.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="group flex items-center justify-between gap-4 rounded-lg bg-card border border-border p-4 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 hover:border-primary/20"
              >
                <div className="flex items-center gap-4 flex-1 min-w-0">
                  <div className="rounded-lg p-2 bg-primary/10">
                    <GitFork className="w-5 h-5 text-primary" />
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3">
                      <h3 className="text-base font-semibold text-primary truncate">
                        {repo.name}
                      </h3>
                      {repo.language && (
                        <span className="px-2 py-0.5 text-xs rounded-full bg-primary/10 text-primary font-medium">
                          {repo.language}
                        </span>
                      )}
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Star className="w-4 h-4" />
                        <span>{repo.stargazers_count}</span>
                      </div>
                    </div>
                    
                    {repo.description && (
                      <p className="mt-1 text-sm text-muted-foreground truncate">
                        {repo.description}
                      </p>
                    )}
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <Link
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 inline-flex items-center justify-center rounded-md bg-primary px-3 py-1.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                  >
                    Ver código
                  </Link>
                  {repo.homepage && (
                    <Link
                      href={repo.homepage}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="shrink-0 inline-flex items-center justify-center rounded-md bg-accent px-3 py-1.5 text-sm font-medium transition-colors hover:bg-accent/90"
                    >
                      Demo
                    </Link>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          // Client Projects Grid
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map(project => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-lg bg-card transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/5"
              >
                {/* Thumbnail com overlay */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={project.thumbnail}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </div>

                {/* Conteúdo do card */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <h3 className="text-xl font-bold leading-tight">{project.title}</h3>
                  <p className="mt-2 text-sm text-gray-200 line-clamp-3">{project.description}</p>

                  {/* Tags */}
                  <div className="mt-4 flex flex-wrap gap-1.5">
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
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center justify-center rounded-md bg-primary/90 px-4 py-2 text-sm font-medium text-primary-foreground backdrop-blur-sm transition-colors hover:bg-primary"
                  >
                    Ver projeto
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </main>
    </div>
  )
}
