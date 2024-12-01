import { services } from '@/data/services'
import { Check } from 'lucide-react'

import { Metadata } from 'next'
import { notFound } from 'next/navigation'

type Props = {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const service = services.find(s => s.slug === params.slug)

  if (!service) {
    return {
      title: 'Serviço não encontrado',
    }
  }

  return {
    title: `${service.title} | Zaíra Gonçalves`,
    description: service.description,
  }
}

export default function ServicePage({ params }: Props) {
  const service = services.find(s => s.slug === params.slug)

  if (!service) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-accent/5">
      {/* Hero Section */}
      <section className="container relative pt-24 pb-16 md:pt-32 md:pb-24">
        {/* Background Decoration */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -top-1/2 right-0 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
          <div className="absolute top-0 left-0 h-64 w-64 rounded-full bg-violet-500/5 blur-3xl" />
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="text-center space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-medium bg-accent/10 text-accent-foreground mb-4">
              <span>Serviços</span>
              <span className="text-primary">•</span>
              <span>{service.title}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">{service.title}</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{service.description}</p>
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="container py-16">
        <div className="max-w-4xl mx-auto">
          {/* Long Description */}
          <div className="prose prose-gray dark:prose-invert max-w-none mb-16">
            <p className="whitespace-pre-line text-lg">{service.description}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Features */}
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold">Recursos</h2>
              <ul className="space-y-3">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Deliverables */}
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold">Entregas</h2>
              <ul className="space-y-3">
                {service.deliverables.map((deliverable, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary mt-0.5" />
                    <span>{deliverable}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container pb-24">
        <div className="max-w-2xl mx-auto">
          <div className="relative overflow-hidden rounded-2xl border border-border/50">
            {/* Background Decoration */}
            <div className="absolute inset-0 -z-10">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-violet-500/10 backdrop-blur-3xl" />
            </div>

            <div className="relative p-8 md:p-12 text-center space-y-6">
              <h2 className="text-2xl md:text-3xl font-bold">Pronto para começar seu projeto?</h2>
              <p className="text-muted-foreground">
                Vamos trabalhar juntos para criar a solução digital ideal para seu negócio.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a
                  href="mailto:seu-email@exemplo.com"
                  className="inline-flex items-center justify-center gap-2 rounded-lg text-sm font-medium h-10 px-6 bg-primary text-primary-foreground shadow transition-colors hover:bg-primary/90"
                >
                  Solicitar Orçamento
                </a>
                <a
                  href="/contato"
                  className="inline-flex items-center justify-center rounded-lg text-sm font-medium h-10 px-6 border border-input bg-background/50 shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground"
                >
                  Fale Comigo
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
