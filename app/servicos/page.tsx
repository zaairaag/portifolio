import { services } from '@/data/services'
import { ArrowRight, FileCheck, Lightbulb, MessageSquare, Rocket, Users, Zap } from 'lucide-react'
import { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'Serviços',
  description:
    'Desenvolvimento web profissional: sites, e-commerce, landing pages e mais. Soluções personalizadas para seu negócio crescer online.',
}

const workSteps = [
  {
    icon: <MessageSquare className="w-6 h-6" />,
    title: 'Reunião Inicial',
    description: 'Conversamos sobre seus objetivos, necessidades e expectativas para o projeto.',
  },
  {
    icon: <Lightbulb className="w-6 h-6" />,
    title: 'Planejamento',
    description: 'Desenvolvo uma proposta detalhada com escopo, prazo e investimento.',
  },
  {
    icon: <FileCheck className="w-6 h-6" />,
    title: 'Aprovação',
    description: 'Alinhamos todos os detalhes e aprovamos o plano de execução.',
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: 'Desenvolvimento',
    description: 'Executo o projeto com atualizações frequentes sobre o progresso.',
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: 'Feedback',
    description: 'Revisamos juntos e fazemos ajustes conforme necessário.',
  },
  {
    icon: <Rocket className="w-6 h-6" />,
    title: 'Entrega',
    description: 'Projeto finalizado, testado e pronto para decolar.',
  },
]

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
      <section className="container py-24 border-y border-border/50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center px-4 py-1.5 mb-6 text-sm font-medium rounded-full bg-primary/10 text-primary">
              Como Trabalhamos
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Um processo transparente
            </h2>
            <p className="text-xl text-muted-foreground">
              Do planejamento à entrega, com foco em resultados
            </p>
          </div>

          {/* Linha do Tempo dos Passos */}
          <div className="relative mt-12">
            {/* Linha Central */}
            <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-primary/20 to-transparent" />

            {/* Passos */}
            <div className="space-y-12">
              {workSteps.map((step, index) => (
                <div
                  key={index}
                  className={`relative flex items-center gap-8 ${
                    index % 2 === 0 ? 'flex-row-reverse' : ''
                  }`}
                >
                  {/* Conteúdo */}
                  <div className={`flex-1 ${index % 2 === 0 ? 'text-right' : ''}`}>
                    <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>

                  {/* Ícone */}
                  <div className="relative z-10 shrink-0">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center text-primary">
                      {step.icon}
                    </div>
                    <div className="absolute -inset-4 bg-primary/5 rounded-[24px] blur-2xl" />
                  </div>

                  {/* Espaçador */}
                  <div className="flex-1" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

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
