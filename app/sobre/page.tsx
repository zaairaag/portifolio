import type { Metadata } from 'next'

import { About } from '@/components/sections/about'

export const metadata: Metadata = {
  title: 'Sobre Mim | Zaíra Gonçalves - Desenvolvedora Full Stack',
  description:
    'Conheça minha jornada profissional, habilidades técnicas e experiência em desenvolvimento web moderno e SharePoint.',
  keywords: [
    'Zaíra Gonçalves',
    'Desenvolvedora Full Stack',
    'Experiência Profissional',
    'Habilidades Técnicas',
    'Desenvolvimento Web',
  ],
}

export default function AboutPage() {
  return (
    <main className="container py-8">
      <About />
    </main>
  )
}
