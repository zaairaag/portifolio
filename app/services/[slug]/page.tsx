import { services } from '@/data/services'
import { ArrowRight, CheckCircle2 } from 'lucide-react'

import Link from 'next/link'
import { notFound } from 'next/navigation'

interface ServicePageProps {
  params: {
    slug: string
  }
}

export default function ServicePage({ params }: ServicePageProps) {
  const service = services.find(s => s.slug === params.slug)

  if (!service) {
    notFound()
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-background to-background/80">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{service.title}</h1>
            <p className="text-xl text-muted-foreground">{service.shortDescription}</p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="container py-12">
        <div className="grid lg:grid-cols-[2fr,1fr] gap-12">
          {/* Left Column - Description */}
          <div>
            <div className="prose prose-gray dark:prose-invert max-w-none">
              <h2 className="text-2xl font-bold mb-4">Sobre o Serviço</h2>
              <div dangerouslySetInnerHTML={{ __html: service.description }} />

              <h2 className="text-2xl font-bold mt-8 mb-4">Nossa Abordagem</h2>
              <div dangerouslySetInnerHTML={{ __html: service.approach }} />
            </div>
          </div>

          {/* Right Column - Features & CTA */}
          <div className="space-y-8">
            {/* Features */}
            <div className="bg-card rounded-xl p-6 border border-border">
              <h3 className="text-xl font-semibold mb-4">O que está incluído</h3>
              <ul className="space-y-3">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 mr-3 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA */}
            <div className="bg-primary rounded-xl p-6 text-primary-foreground">
              <h3 className="text-xl font-semibold mb-2">Interessado?</h3>
              <p className="text-primary-foreground/80 mb-4">
                Entre em contato para discutirmos seu projeto.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center w-full bg-background text-foreground px-4 py-2.5 rounded-lg font-medium hover:bg-accent transition-colors"
              >
                Falar com Especialista
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="container py-12 border-t border-border">
        <h2 className="text-2xl font-bold mb-8">Outros Serviços</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services
            .filter(s => s.slug !== service.slug)
            .slice(0, 3)
            .map(relatedService => (
              <Link
                key={relatedService.slug}
                href={`/services/${relatedService.slug}`}
                className="group relative flex flex-col bg-card rounded-xl overflow-hidden border border-border hover:border-primary/50 transition-colors"
              >
                {/* Service Image */}
                <div className="relative aspect-[16/9] overflow-hidden bg-muted">
                  <img
                    src={relatedService.image}
                    alt={relatedService.title}
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
                </div>

                {/* Service Info */}
                <div className="flex-1 p-6">
                  <h3 className="text-xl font-semibold mb-3">{relatedService.title}</h3>
                  <p className="text-muted-foreground text-sm">{relatedService.shortDescription}</p>
                </div>
              </Link>
            ))}
        </div>
      </section>
    </div>
  )
}

export function generateStaticParams() {
  return services.map(service => ({
    slug: service.slug,
  }))
}
