import { Metadata } from 'next'

import { About } from '@/components/sections/about'

export const metadata: Metadata = {
  title: 'Sobre Mim | Zaira Miranda - Desenvolvedora Full Stack',
  description:
    'Conheça minha jornada profissional, habilidades técnicas e experiência em desenvolvimento web moderno e SharePoint.',
  keywords: [
    'Zaira Miranda',
    'Desenvolvedora Full Stack',
    'SharePoint',
    'Experiência Profissional',
    'Habilidades Técnicas',
    'Desenvolvimento Web',
  ],
}

export default function SobrePage() {
  return (
    <main className="container relative pt-6 pb-16 md:pt-8">
      <About />
    </main>
  )
}
