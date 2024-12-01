'use client'

import { Calendar, Github, Instagram, Linkedin, Mail } from 'lucide-react'
import { motion } from 'framer-motion'
import { ContactForm } from '@/components/contact-form'
import { PageHeader } from '@/components/ui/page-header'

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <PageHeader 
        badge="Contato"
        title="Vamos"
        titleHighlight="trabalhar juntos"
        description="Estou sempre aberta a novos projetos e oportunidades de colaboração. Entre em contato e vamos transformar suas ideias em realidade."
      />

      {/* Contact Form Section */}
      <section className="max-w-5xl mx-auto px-4 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="rounded-lg border border-primary/10 p-8">
              <div className="text-center mb-8">
                <h3 className="text-xl font-semibold mb-2">Conecte-se Comigo</h3>
                <p className="text-muted-foreground">
                  Escolha a plataforma de sua preferência para entrar em contato ou me seguir
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 mb-6">
                <a
                  href="mailto:zaira@email.com"
                  className="flex flex-col items-center gap-2 p-4 rounded-lg border border-primary/10 hover:border-primary/20 transition-colors text-foreground group"
                >
                  <Mail className="h-6 w-6 group-hover:scale-110 transition-transform text-primary" />
                  <span className="text-sm font-medium">Email</span>
                </a>
                <button
                  className="flex flex-col items-center gap-2 p-4 rounded-lg bg-[#E91E63] hover:bg-[#D81B60] transition-colors text-white w-full group"
                  onClick={() => window.open('https://calendly.com/seu-link', '_blank')}
                >
                  <Calendar className="h-6 w-6 group-hover:scale-110 transition-transform" />
                  <span className="text-sm font-medium">Agendar Call</span>
                </button>
              </div>

              <div className="space-y-4">
                <h4 className="text-sm font-medium text-muted-foreground text-center">
                  Minhas Redes
                </h4>
                <div className="grid grid-cols-3 gap-3">
                  <a
                    href="https://github.com/zairahjy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center gap-2 p-4 rounded-lg border border-primary/10 hover:border-primary/20 transition-colors text-foreground group"
                  >
                    <Github className="h-6 w-6 group-hover:scale-110 transition-transform text-primary" />
                    <span className="text-sm font-medium">GitHub</span>
                  </a>
                  <a
                    href="https://linkedin.com/in/zairagoncalves"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center gap-2 p-4 rounded-lg border border-primary/10 hover:border-primary/20 transition-colors text-foreground group"
                  >
                    <Linkedin className="h-6 w-6 group-hover:scale-110 transition-transform text-primary" />
                    <span className="text-sm font-medium">LinkedIn</span>
                  </a>
                  <a
                    href="https://instagram.com/zairahjy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center gap-2 p-4 rounded-lg border border-primary/10 hover:border-primary/20 transition-colors text-foreground group"
                  >
                    <Instagram className="h-6 w-6 group-hover:scale-110 transition-transform text-primary" />
                    <span className="text-sm font-medium">Instagram</span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="rounded-lg border border-primary/10 bg-card p-8">
              <ContactForm />
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
