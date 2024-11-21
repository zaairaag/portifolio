'use client'

import { Person, WithContext } from 'schema-dts'

export function JsonLd() {
  const jsonLd: WithContext<Person> = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Zaíra Gonçalves',
    jobTitle: 'Desenvolvedora Front-end',
    url: 'https://www.zairagoncalves.com/',
    sameAs: [
      'https://github.com/zaairaag',
      // Adicione outros perfis sociais aqui
    ],
    image: 'https://www.zairagoncalves.com/profile.jpg',
    description: 'Desenvolvedora Front-end apaixonada por criar experiências web incríveis. Especializada em React, Next.js e TypeScript.',
    knowsAbout: [
      'React',
      'Next.js',
      'TypeScript',
      'JavaScript',
      'HTML',
      'CSS',
      'Tailwind CSS',
      'UI/UX Design',
      'Web Development'
    ]
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}
