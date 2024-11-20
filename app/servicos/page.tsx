import { services } from '@/data/services'
import { ArrowRight } from 'lucide-react'
import { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { WorkProcess } from '@/components/sections/work-process'

export const metadata: Metadata = {
  title: 'Serviços',
  description:
    'Desenvolvimento web profissional: sites, e-commerce, landing pages e mais. Soluções personalizadas para seu negócio crescer online.',
}

export default function Services() {
  return (
    <>
      {/* Seção de Cabeçalho */}
      <section className="container py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center px-4 py-1.5 mb-6 text-sm font-medium rounded-full bg-primary/10 text-primary">
            Serviços
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Soluções Web Profissionais
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Do planejamento à execução, crio soluções web que impulsionam seu negócio
          </p>
          <Button asChild size="lg">
            <Link href="/portfolio">
              Ver Projetos Realizados
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Seção de Serviços */}
      <section className="container py-6 md:py-8">
        <div className="max-w-6xl mx-auto">
          {/* Grid de Serviços */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Link
                href={`/servicos/${service.slug}`}
                key={index}
                className="group block relative overflow-hidden"
              >
                <div className="relative flex flex-col p-8 h-full bg-gradient-to-br from-card to-card/40 backdrop-blur-sm border border-border/50 rounded-3xl transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 hover:border-primary/20">
                  {/* Destaque de Fundo */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/40 via-primary to-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Ícone */}
                  <div className="relative mb-6">
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 text-primary">
                      {service.icon}
                    </div>
                    <div className="absolute -inset-4 bg-primary/5 rounded-[32px] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>

                  {/* Conteúdo */}
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-6">{service.description}</p>

                  {/* Link */}
                  <div className="mt-auto inline-flex items-center text-primary font-medium">
                    Saiba mais
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Seção Como Trabalhamos */}
      <WorkProcess />

      {/* Seção de Chamada para Ação */}
      <section className="relative overflow-hidden">
        {/* Efeitos de Fundo */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background">
          <div className="absolute inset-0 bg-grid-white/10 [mask-image:radial-gradient(white,transparent_70%)]" />
          <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
          <div className="absolute -left-4 top-0 h-[400px] w-[400px] rounded-full bg-primary/30 blur-3xl opacity-20" />
          <div className="absolute -right-4 bottom-0 h-[400px] w-[400px] rounded-full bg-primary/30 blur-3xl opacity-20" />
        </div>

        <div className="container relative">
          <div className="mx-auto max-w-4xl py-24 text-center">
            <h2 className="mb-4 text-4xl font-bold tracking-tight">
              Pronto para{' '}
              <span className="bg-gradient-to-r from-primary to-violet-500 bg-clip-text text-transparent">
                transformar suas ideias
              </span>{' '}
              em realidade?
            </h2>
            <p className="mb-8 text-xl text-muted-foreground">
              Vamos trabalhar juntos para criar soluções excepcionais que impulsionam seu negócio.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contato"
                className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white transition-all rounded-full bg-gradient-to-r from-primary to-violet-500 hover:scale-105 hover:shadow-lg hover:shadow-primary/30"
              >
                Iniciar Projeto
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
              <Link
                href="/portfolio"
                className="inline-flex items-center justify-center px-6 py-3 text-base font-medium transition-all rounded-full text-primary bg-primary/10 hover:bg-primary/20"
              >
                Ver Portfolio
              </Link>
            </div>
          </div>
        </div>

        {/* Linha de Gradiente Inferior */}
        <div className="absolute left-0 right-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      </section>
    </>
  )
}
