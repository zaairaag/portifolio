"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLinkIcon, GithubIcon } from 'lucide-react';

const projects = [
  {
    title: 'SharePoint Modern Sites',
    description: 'Desenvolvimento de sites modernos para o Banco do Brasil utilizando SharePoint Framework (SPFx). Implementação de webparts personalizadas, layouts responsivos e integração com APIs REST.',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80',
    tags: ['React', 'TypeScript', 'SharePoint', 'SPFx'],
    category: 'SharePoint',
    links: {
      demo: '#',
      github: '#',
    },
  },
  {
    title: 'Power Apps Solutions',
    description: 'Criação de aplicações empresariais usando Power Apps e Power Automate. Desenvolvimento de fluxos de trabalho automatizados e interfaces intuitivas para gestão de processos internos.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
    tags: ['Power Apps', 'Power Automate', 'SharePoint', 'Azure'],
    category: 'Power Platform',
    links: {
      demo: '#',
      github: '#',
    },
  },
  {
    title: 'Portal Institucional',
    description: 'Desenvolvimento de portal institucional utilizando WordPress. Criação de tema personalizado, plugins específicos e integração com sistemas externos via API.',
    image: 'https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?w=800&q=80',
    tags: ['WordPress', 'PHP', 'JavaScript', 'MySQL'],
    category: 'Web',
    links: {
      demo: '#',
      github: '#',
    },
  },
];

const categories = ['Todos', 'SharePoint', 'Power Platform', 'Web'];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  show: { y: 0, opacity: 1 }
};

export function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  const filteredProjects = projects.filter(
    (project) =>
      selectedCategory === 'Todos' || project.category === selectedCategory
  );

  return (
    <section id="projects" className="py-20 relative">
      <motion.div 
        className="absolute inset-0 opacity-30"
        animate={{
          background: [
            "radial-gradient(circle at 0% 0%, var(--primary) 0%, transparent 50%)",
            "radial-gradient(circle at 100% 100%, var(--primary) 0%, transparent 50%)",
            "radial-gradient(circle at 0% 0%, var(--primary) 0%, transparent 50%)",
          ]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />

      <div className="container mx-auto px-4 relative">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Projetos em Destaque
        </motion.h2>

        <motion.div 
          className="flex justify-center gap-4 mb-12 flex-wrap"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {categories.map((category) => (
            <motion.div
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className="relative overflow-hidden"
              >
                <span className="relative z-10">{category}</span>
                {selectedCategory === category && (
                  <motion.div
                    className="absolute inset-0 bg-primary/20"
                    layoutId="categoryBackground"
                    transition={{ type: "spring", bounce: 0.2 }}
                  />
                )}
              </Button>
            </motion.div>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            variants={containerVariants}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredProjects.map((project) => (
              <motion.div
                key={project.title}
                variants={itemVariants}
                onHoverStart={() => setHoveredProject(project.title)}
                onHoverEnd={() => setHoveredProject(null)}
                className="group"
              >
                <Card className="overflow-hidden h-full bg-background/50 backdrop-blur-sm border-primary/10 glass">
                  <motion.div
                    className="relative h-48 overflow-hidden image-wrapper"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                      initial={{ scale: 1.2 }}
                      animate={{ scale: hoveredProject === project.title ? 1.3 : 1.2 }}
                      transition={{ duration: 0.4 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <motion.div
                      className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100"
                      initial={{ y: 20 }}
                      whileHover={{ y: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="flex gap-4">
                        <Button size="sm" className="gap-2 glass" data-cursor>
                          <ExternalLinkIcon className="h-4 w-4" />
                          Demo
                        </Button>
                        <Button size="sm" variant="outline" className="gap-2 glass" data-cursor>
                          <GithubIcon className="h-4 w-4" />
                          Código
                        </Button>
                      </div>
                    </motion.div>
                  </motion.div>

                  <div className="p-6">
                    <motion.h3
                      className="text-xl font-semibold mb-2"
                      initial={{ opacity: 0.8 }}
                      whileHover={{ opacity: 1 }}
                    >
                      {project.title}
                    </motion.h3>
                    <p className="mb-4 line-clamp-3">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {project.tags.map((tag) => (
                        <motion.div
                          key={tag}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Badge variant="secondary" className="bg-primary/5 hover:bg-primary/10">
                            {tag}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}