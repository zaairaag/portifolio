import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Portfólio de Desenvolvimento Web | Zaira Miranda',
  description:
    'Conheça meus projetos de desenvolvimento web, incluindo sites responsivos, aplicações full stack e soluções personalizadas.',
  keywords: [
    'portfólio desenvolvimento web',
    'projetos web',
    'desenvolvimento frontend',
    'desenvolvimento full stack',
    'React',
    'Next.js',
    'TypeScript',
  ],
}

export default function PortfolioLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
