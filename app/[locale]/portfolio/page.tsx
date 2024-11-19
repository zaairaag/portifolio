'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { ProjectCard } from '@/components/project-card';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { useTranslations } from 'next-intl';

// Componente do background animado
const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-background to-background/50" />
      
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/5 blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
      
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-secondary/5 blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          x: [0, -50, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
      
      <motion.div
        className="absolute top-1/2 left-1/2 w-96 h-96 rounded-full bg-accent/5 blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          x: [-30, 30, -30],
          y: [30, -30, 30],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
    </div>
  );
};

const projects = [
  {
    title: 'Portfolio Pessoal',
    description: 'Site pessoal desenvolvido com Next.js 14, TypeScript e Tailwind CSS. Inclui modo escuro, animações e internacionalização.',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    category: 'web',
    image: 'https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?q=80&w=1200&auto=format&fit=crop',
    demoUrl: 'https://zairagoncalves.com',
    githubUrl: 'https://github.com/zairagoncalves/portfolio',
  },
  {
    title: 'SharePoint Modern WebPart',
    description: 'WebPart moderna desenvolvida com SPFx para SharePoint Online, oferecendo uma interface intuitiva para gestão de documentos.',
    tags: ['SharePoint', 'SPFx', 'React', 'TypeScript'],
    category: 'enterprise',
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1200&auto=format&fit=crop',
    demoUrl: 'https://demo2.com',
    githubUrl: 'https://github.com/user/project2',
  },
  {
    title: 'Marketing Cloud Templates',
    description: 'Conjunto de templates responsivos para campanhas de email marketing no Salesforce Marketing Cloud.',
    tags: ['HTML', 'CSS', 'Marketing Cloud', 'Email Marketing'],
    category: 'email',
    image: 'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?q=80&w=1200&auto=format&fit=crop',
    demoUrl: 'https://demo3.com',
  },
];

const categories = [
  { id: 'all', label: 'Todos' },
  { id: 'web', label: 'Web Apps' },
  { id: 'enterprise', label: 'Corporativo' },
  { id: 'email', label: 'Email Marketing' },
];

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const t = useTranslations('portfolio');

  const filteredProjects = projects.filter(
    project => selectedCategory === 'all' || project.category === selectedCategory
  );

  return (
    <>
      <AnimatedBackground />
      <main className="flex min-h-screen flex-col">
        <div className="flex-1 pt-36 pb-24">
          <div className="container px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-16"
            >
              {/* Hero Section */}
              <div className="text-center space-y-4">
                <motion.h1 
                  className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  {t('title')}
                </motion.h1>
                <motion.p 
                  className="text-xl text-muted-foreground max-w-2xl mx-auto"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  {t('description')}
                </motion.p>
              </div>

              {/* Categories Filter */}
              <div className="flex flex-wrap justify-center gap-3">
                {categories.map((category) => (
                  <Button
                    key={category.id}
                    variant={selectedCategory === category.id ? "default" : "outline"}
                    onClick={() => setSelectedCategory(category.id)}
                    className="rounded-full"
                  >
                    {category.label}
                  </Button>
                ))}
              </div>

              {/* Projects List */}
              <motion.div 
                className="space-y-4 max-w-2xl mx-auto"
                layout
              >
                <AnimatePresence mode="wait">
                  {filteredProjects.map((project, index) => (
                    <motion.div
                      key={project.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      layout
                    >
                      <ProjectCard {...project} />
                    </motion.div>
                  ))}
                </AnimatePresence>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </main>
    </>
  );
}
