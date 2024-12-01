'use client'

import { Mail, Calendar, Github, Linkedin, Instagram } from 'lucide-react'
import { ContactForm } from '@/components/contact-form'

export default function ContactPage() {
  return (
    <div className="flex justify-center items-start min-h-screen p-8">
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Lado Esquerdo - Links */}
        <div className="space-y-8">
          <div className="text-center space-y-2">
            <h1 className="text-3xl font-bold">Conecte-se Comigo</h1>
            <p className="text-muted-foreground">
              Escolha a plataforma de sua preferência para entrar em contato ou me seguir
            </p>
          </div>

          {/* Botões de Contato Principal */}
          <div className="grid grid-cols-2 gap-4">
            <a
              href="mailto:contato@zairagoncalves.com"
              className="flex flex-col items-center justify-center gap-2 p-6 rounded-lg bg-[#111111] hover:bg-[#222222] transition-colors text-white group"
            >
              <Mail className="h-6 w-6 group-hover:scale-110 transition-transform text-[#E91E63]" />
              <span className="text-sm font-medium">Email</span>
            </a>
            <a
              href="https://calendly.com/zaairaag43"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center gap-2 p-6 rounded-lg bg-[#E91E63] hover:bg-[#D81B60] transition-colors text-white group"
            >
              <Calendar className="h-6 w-6 group-hover:scale-110 transition-transform" />
              <span className="text-sm font-medium">Agendar Call</span>
            </a>
          </div>

          {/* Redes Sociais */}
          <div className="space-y-4">
            <h2 className="text-sm font-medium text-muted-foreground text-center">
              Minhas Redes
            </h2>
            <div className="grid grid-cols-3 gap-4">
              <a
                href="https://github.com/zaairaag"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center gap-2 p-6 rounded-lg bg-[#111111] hover:bg-[#222222] transition-colors text-white group"
              >
                <Github className="h-6 w-6 group-hover:scale-110 transition-transform text-[#E91E63]" />
                <span className="text-sm font-medium">GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/zaira-goncalves/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center gap-2 p-6 rounded-lg bg-[#111111] hover:bg-[#222222] transition-colors text-white group"
              >
                <Linkedin className="h-6 w-6 group-hover:scale-110 transition-transform text-[#E91E63]" />
                <span className="text-sm font-medium">LinkedIn</span>
              </a>
              <a
                href="https://www.instagram.com/zairagpc/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center gap-2 p-6 rounded-lg bg-[#111111] hover:bg-[#222222] transition-colors text-white group"
              >
                <Instagram className="h-6 w-6 group-hover:scale-110 transition-transform text-[#E91E63]" />
                <span className="text-sm font-medium">Instagram</span>
              </a>
            </div>
          </div>
        </div>

        {/* Lado Direito - Formulário */}
        <div className="bg-[#111111] rounded-lg p-8">
          <ContactForm />
        </div>
      </div>
    </div>
  )
}
