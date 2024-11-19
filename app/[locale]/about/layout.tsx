import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sobre Mim | Zaíra Gonçalves - Desenvolvedora Full Stack',
  description: 'Desenvolvedora Full Stack com mais de 4 anos de experiência em tecnologias como SharePoint, React, Node.js e TypeScript. Especializada em desenvolvimento web e soluções empresariais.',
  openGraph: {
    title: 'Sobre Mim | Zaíra Gonçalves - Desenvolvedora Full Stack',
    description: 'Desenvolvedora Full Stack com mais de 4 anos de experiência em tecnologias como SharePoint, React, Node.js e TypeScript. Especializada em desenvolvimento web e soluções empresariais.',
    images: ['/profile.jpg'],
  },
};

export default function SobreLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
