'use client'

import { clientProjects, type GitHubRepo } from '@/data/projects'
import { motion } from 'framer-motion'
import { ChevronRight, Lightbulb, Briefcase, Star, GitFork } from 'lucide-react'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { PageHeader } from '@/components/ui/page-header'
import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { getGitHubRepos } from '@/lib/github'

const categories = [
  { id: 'all', label: 'Todos' },
  { id: 'websites', label: 'Websites' },
  { id: 'landing-pages', label: 'Landing Pages' },
  { id: 'ecommerce', label: 'E-commerce' },
  { id: 'sistemas', label: 'Sistemas Web' },
  { id: 'ui-ux', label: 'UI/UX Design' },
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
  const [selectedType, setSelectedType] = useState<'lab' | 'client'>('lab')

  const filteredProjects = selectedType === 'lab' 
    ? [] // Lab agora usa apenas repos do GitHub
    : selectedCategory === 'all' 
      ? clientProjects 
      : clientProjects.filter(project => project.category === selectedCategory)

  const projectTypes = [
    { 
      id: 'lab', 
      label: 'Laboratório de Programação', 
      description: 'Projetos pessoais e experimentos no GitHub', 
      icon: Lightbulb 
    },
    { 
      id: 'client', 
      label: 'Clientes', 
      description: 'Projetos entregues para clientes', 
      icon: Briefcase 
    },
  ] as const

  return (
    <div className="min-h-screen">
      <PageHeader 
        badge="Portfólio"
        title="Criando"
        titleHighlight="experiências excepcionais"
        description="Uma seleção dos meus melhores projetos, demonstrando expertise em desenvolvimento web, design de interfaces e soluções técnicas inovadoras."
      />

      {/* Project Type Selection */}
      <section className="max-w-4xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {projectTypes.map(type => (
            <button
              key={type.id}
              onClick={() => setSelectedType(type.id)}
              className={cn(
                'group relative overflow-hidden rounded-xl p-8 transition-all duration-300',
                selectedType === type.id
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-card hover:bg-accent hover:text-accent-foreground'
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
            </button>
          ))}
        </div>
      </section>

      {/* Filters - Only show for client projects */}
      {selectedType !== 'lab' && (
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
      )}

      {/* Projects Grid */}
      <main className="max-w-5xl mx-auto px-4 py-12">
        {selectedType === 'lab' ? (
          // GitHub Repos Grid
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {githubRepos.map(repo => (
              <motion.div
                key={repo.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-lg bg-card border border-border p-6 transition-all duration-300 hover:-translate-y-2"
              >
                <div className="flex flex-col h-full">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-lg font-semibold text-primary">
                      {repo.name}
                    </h3>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Star className="w-4 h-4" />
                      <span>{repo.stargazers_count}</span>
                    </div>
                  </div>

                  {repo.description ? (
                    <p className="mt-2 text-muted-foreground line-clamp-2">
                      {repo.description}
                    </p>
                  ) : (
                    <p className="mt-2 text-muted-foreground/60 italic">
                      Repositório no GitHub
                    </p>
                  )}

                  {repo.topics && repo.topics.length > 0 ? (
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {repo.topics.map(topic => (
                        <span
                          key={topic}
                          className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                  ) : repo.language && (
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      <span className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary">
                        {repo.language}
                      </span>
                    </div>
                  )}

                  <div className="mt-4 pt-4 border-t border-border">
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <span>{repo.language}</span>
                      <span>
                        Atualizado em {format(new Date(repo.updated_at), "d 'de' MMM", { locale: ptBR })}
                      </span>
                    </div>
                  </div>

                  <div className="mt-4 flex gap-2">
                    <Link
                      href={repo.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                    >
                      Ver código
                      <GitFork className="ml-2 h-4 w-4" />
                    </Link>
                    {repo.homepage && (
                      <Link
                        href={repo.homepage}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 inline-flex items-center justify-center rounded-md bg-accent px-4 py-2 text-sm font-medium transition-colors hover:bg-accent/90"
                      >
                        Ver demo
                        <ChevronRight className="ml-2 h-4 w-4" />
                      </Link>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          // Client Projects Grid
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
                    Ver projeto
                    <ChevronRight className="ml-2 h-4 w-4" />
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
