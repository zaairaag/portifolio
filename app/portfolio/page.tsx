'use client'

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowRight, ExternalLink, Github } from "lucide-react"
import { ChevronRight } from "lucide-react"
import { projects } from "@/data/projects"
import { cn } from "@/lib/utils"

const categories = [
  { id: "all", label: "Todos" },
  { id: "websites", label: "Websites" },
  { id: "landing-pages", label: "Landing Pages" },
  { id: "ecommerce", label: "E-commerce" },
  { id: "sistemas", label: "Sistemas Web" },
  { id: "ui-ux", label: "UI/UX Design" },
]

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [hoveredProject, setHoveredProject] = useState<string | null>(null)

  const filteredProjects = projects.filter(
    project => selectedCategory === "all" || project.category === selectedCategory
  )

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-8 md:py-12 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          {/* Background Decoration */}
          <div className="absolute -top-1/2 right-0 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
          <div className="absolute top-0 left-0 h-64 w-64 rounded-full bg-violet-500/5 blur-3xl" />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background/80" />
          <Image
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop"
            alt="Background"
            fill
            className="object-cover opacity-10"
            priority
          />
        </div>
        <div className="container mx-auto max-w-5xl px-4 py-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block rounded-full px-4 py-1.5 text-sm font-medium bg-accent/10 text-accent-foreground mb-4">
              Portfólio
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Criando{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-violet-500">
                experiências excepcionais
              </span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Uma seleção dos meus melhores projetos, demonstrando expertise em desenvolvimento web,
              design de interfaces e soluções técnicas inovadoras.
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="sticky top-0 z-10 bg-background/80 backdrop-blur-xl border-b border-border">
        <div className="container mx-auto max-w-5xl px-4 py-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:flex lg:justify-center gap-2 max-w-4xl mx-auto">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={cn(
                  "w-full lg:flex-1 px-4 py-2.5 text-sm font-medium transition-colors rounded-lg whitespace-nowrap",
                  selectedCategory === category.id
                    ? "bg-primary text-primary-foreground"
                    : "hover:bg-accent hover:text-accent-foreground"
                )}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <main className="container relative pt-6 pb-16 md:pt-8">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredProjects.map((project) => (
              <div
                key={project.title}
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
                    {project.tags.slice(0, 3).map((tag) => (
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
                    href={project.link || "#"}
                    className="mt-4 inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                  >
                    Ver Projeto
                    <ChevronRight className="ml-1.5 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
