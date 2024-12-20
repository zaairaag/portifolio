'use client'

import { Calendar, Github, Instagram, Linkedin, Mail } from 'lucide-react'
import { ContactForm } from '@/components/contact-form'

export default function ContactPage() {
  return (
    <div className="flex flex-col items-center min-h-screen px-6 py-16">
      {/* Header */}
      <div className="w-full max-w-[700px] text-center mb-16 space-y-4">
        <div className="inline-block px-4 py-1.5 rounded-full border border-primary/20 text-primary text-sm font-medium mb-4">
          Contato
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold text-foreground">
          Vamos <span className="text-primary">trabalhar juntos</span>
        </h1>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Estou sempre aberta a novos projetos e oportunidades de colaboração. Entre
          em contato e vamos transformar suas ideias em realidade.
        </p>
      </div>

      {/* Content Grid */}
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Lado Esquerdo - Links */}
        <div className="space-y-8">
          <div className="text-center space-y-2">
            <h2 className="text-2xl font-bold text-foreground">Conecte-se Comigo</h2>
            <p className="text-muted-foreground">
              Escolha a plataforma de sua preferência para entrar em contato ou me seguir
            </p>
          </div>

          {/* Botões de Contato Principal */}
          <div className="grid grid-cols-2 gap-4">
            <a
              href="mailto:contato@zairagoncalves.com"
              className="flex flex-col items-center justify-center gap-2 p-6 rounded-lg bg-card hover:bg-accent transition-colors text-card-foreground group"
            >
              <Mail className="h-6 w-6 group-hover:scale-110 transition-transform text-primary" />
              <span className="text-sm font-medium">Email</span>
            </a>
            <a
              href="https://calendly.com/zaairaag43"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center gap-2 p-6 rounded-lg bg-primary hover:bg-primary/90 transition-colors text-primary-foreground group"
            >
              <Calendar className="h-6 w-6 group-hover:scale-110 transition-transform" />
              <span className="text-sm font-medium">Agendar Call</span>
            </a>
          </div>

          {/* Redes Sociais */}
          <div className="space-y-4">
            <h3 className="text-sm font-medium text-muted-foreground text-center">
              Minhas Redes
            </h3>
            <div className="grid grid-cols-3 gap-4">
              <a
                href="https://github.com/zaairaag"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center gap-2 p-6 rounded-lg bg-card hover:bg-accent transition-colors text-card-foreground group"
              >
                <Github className="h-6 w-6 group-hover:scale-110 transition-transform text-primary" />
                <span className="text-sm font-medium">GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/zaira-goncalves/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center gap-2 p-6 rounded-lg bg-card hover:bg-accent transition-colors text-card-foreground group"
              >
                <Linkedin className="h-6 w-6 group-hover:scale-110 transition-transform text-primary" />
                <span className="text-sm font-medium">LinkedIn</span>
              </a>
              <a
                href="https://www.instagram.com/zairagpc/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center gap-2 p-6 rounded-lg bg-card hover:bg-accent transition-colors text-card-foreground group"
              >
                <Instagram className="h-6 w-6 group-hover:scale-110 transition-transform text-primary" />
                <span className="text-sm font-medium">Instagram</span>
              </a>
            </div>
          </div>
        </div>

        {/* Lado Direito - Formulário */}
        <div className="bg-card rounded-lg p-8">
          <ContactForm />
        </div>
      </div>
    </div>
  )
}
