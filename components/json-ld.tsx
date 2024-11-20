import { Person, WithContext } from 'schema-dts'

export function JsonLd() {
  const jsonLd: WithContext<Person> = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Zaira Moraes',
    url: 'https://zairamoraes.com.br',
    sameAs: [
      'https://github.com/zairamorales',
      'https://www.linkedin.com/in/zairamorales',
      'https://www.instagram.com/zairamorales',
    ],
    jobTitle: 'Desenvolvedora Full Stack',
    image: 'https://zairamoraes.com.br/images/profile.jpg',
    description:
      'Desenvolvedora Full Stack apaixonada por criar soluções web inovadoras e eficientes.',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'São Paulo',
      addressRegion: 'SP',
      addressCountry: 'BR',
    },
    email: 'contato@zairamoraes.com.br',
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      key="jsonld"
    />
  )
}
