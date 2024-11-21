'use client'

import { services } from '@/data/services'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { WorkProcess } from '@/components/sections/work-process'
import Image from 'next/image'

export default function Services() {
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
              Serviços
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Criando{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-violet-500">
                experiências excepcionais
              </span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Uma seleção dos meus melhores projetos, demonstrando expertise em desenvolvimento web,
              design de interfaces e soluções técnicas inovadoras.
            </p>
            <Button asChild size="lg">
              <Link href="/portfolio">
                Ver Projetos Realizados
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Seção de Serviços */}
      <section className="container py-6 md:py-8">
        <div className="max-w-6xl mx-auto">
          {/* Grid de Serviços */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group block relative overflow-hidden"
              >
                <div className="relative flex flex-col p-8 h-full bg-gradient-to-br from-card to-card/40 backdrop-blur-sm border border-border/50 rounded-3xl transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 hover:border-primary/20">
                  {/* Destaque de Fundo */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/40 via-primary to-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Ícone removido para teste */}
                  <div className="mb-6">
                    {/* Ícone removido */}
                  </div>

                  {/* Conteúdo */}
                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="text-muted-foreground mb-6 flex-grow">
                    {service.description}
                  </p>

                  {/* Link */}
                  <Link
                    href={`/servicos/${service.slug}`}
                    className="inline-flex items-center text-primary hover:text-primary/80 font-medium transition-colors"
                  >
                    Saiba mais
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seção de Processo de Trabalho */}
      <WorkProcess />
    </div>
  )
}
