import { services } from '@/data/services'
import { ArrowRight } from 'lucide-react'

import Link from 'next/link'

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-background to-background/80">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">Nossos Serviços</h1>
          <p className="text-xl text-muted-foreground text-center max-w-2xl mx-auto">
            Soluções personalizadas para transformar sua presença digital
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map(service => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="group relative flex flex-col bg-card rounded-xl overflow-hidden border border-border hover:border-primary/50 transition-colors"
            >
              {/* Service Image */}
              <div className="relative aspect-[16/9] overflow-hidden bg-muted">
                <img
                  src={service.image}
                  alt={service.title}
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
              </div>

              {/* Service Info */}
              <div className="flex-1 p-6">
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{service.shortDescription}</p>

                <div className="flex items-center text-primary mt-auto pt-4 border-t border-border">
                  <span className="text-sm font-medium">Saiba mais</span>
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
