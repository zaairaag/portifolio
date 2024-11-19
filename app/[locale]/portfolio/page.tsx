'use client';

import { motion } from 'framer-motion';
import { ProjectCard } from '@/components/project-card';

const projects = [
  {
    title: 'Portfolio Pessoal',
    description: 'Site pessoal desenvolvido com Next.js 14, TypeScript e Tailwind CSS. Inclui modo escuro, animações e internacionalização.',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    image: '/projects/portfolio.png',
    demoUrl: 'https://zairagoncalves.com',
    githubUrl: 'https://github.com/zairagoncalves/portfolio',
  },
  {
    title: 'Projeto 2',
    description: 'Descrição do projeto 2...',
    tags: ['React', 'Node.js', 'MongoDB'],
    image: '/projects/project2.png',
    demoUrl: 'https://demo2.com',
    githubUrl: 'https://github.com/user/project2',
  },
  {
    title: 'Projeto 3',
    description: 'Descrição do projeto 3...',
    tags: ['Vue.js', 'Express', 'PostgreSQL'],
    image: '/projects/project3.png',
    demoUrl: 'https://demo3.com',
    githubUrl: 'https://github.com/user/project3',
  },
];

export default function PortfolioPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <div className="flex-1 py-24">
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-12"
          >
            {/* Hero Section */}
            <div className="text-center space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500">
                Meu Portfólio
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Conheça alguns dos projetos que desenvolvi, demonstrando minhas habilidades
                e experiência em diferentes tecnologias.
              </p>
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project) => (
                <ProjectCard
                  key={project.title}
                  {...project}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
