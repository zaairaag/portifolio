'use client'

import { services } from '@/data/services'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { StepsProcess } from '@/components/sections/steps-process'
import { PageHeader } from '@/components/ui/page-header'
import { motion } from 'framer-motion'

export default function Services() {
  return (
    <div className="min-h-screen">
      <PageHeader 
        badge="Serviços"
        title="Soluções"
        titleHighlight="sob medida"
        description="Desenvolvimento web moderno, design de interfaces e soluções técnicas inovadoras para transformar suas ideias em realidade."
      />

      {/* Seção de Serviços */}
      <div className="container">
        <section className="max-w-6xl mx-auto py-12">
          {/* Grid de Serviços */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group block relative overflow-hidden"
              >
                <div className="relative flex flex-col p-8 h-full border border-primary/10 rounded-3xl transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 hover:border-primary/20">
                  {/* Destaque superior */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/40 via-primary to-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

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
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg">
              <Link href="/portfolio">
                Ver Projetos Realizados
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </section>
      </div>

      {/* Seção de Processo de Trabalho */}
      <StepsProcess />
    </div>
  )
}
