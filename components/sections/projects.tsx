"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ExternalLinkIcon, GithubIcon, ArrowRightIcon } from 'lucide-react';
import { Project, projects } from '@/config/projects';

interface ProjectsProps {
  translations?: {
    title: string;
    subtitle: string;
    viewDetails: string;
  };
  locale: string;
}

const defaultTranslations = {
  title: 'Projects',
  subtitle: 'Some of my recent work',
  viewDetails: 'View Details'
};

export function Projects({ translations = defaultTranslations, locale }: ProjectsProps) {
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  const filteredProjects = projects.filter(
    (project) =>
      selectedCategory === 'Todos' || project.category === selectedCategory
  );

  const allCategories = projects.map(project => project.category);
  const uniqueCategories = allCategories.filter((category, index) => 
    allCategories.indexOf(category) === index
  );
  const categories = ['Todos'].concat(uniqueCategories);

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

  return (
    <section id="projects" className="py-20 relative">
      <motion.div 
        className="absolute inset-0 opacity-20"
        animate={{
          background: [
            "radial-gradient(circle at 0% 0%, var(--primary) 0%, transparent 70%)",
            "radial-gradient(circle at 100% 100%, var(--primary) 0%, transparent 70%)",
            "radial-gradient(circle at 0% 0%, var(--primary) 0%, transparent 70%)",
          ]
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 space-y-4"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/50">
            {translations.title}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {translations.subtitle}
          </p>
        </motion.div>

        <motion.div 
          className="flex justify-center gap-4 mb-12 flex-wrap"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-primary text-white shadow-lg shadow-primary/25'
                  : 'bg-primary/5 hover:bg-primary/10 text-foreground'
              }`}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        <AnimatePresence>
          <motion.div
            key={selectedCategory}
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="max-w-5xl mx-auto space-y-12"
          >
            {filteredProjects.map((project) => (
              <motion.div
                key={project.title}
                variants={itemVariants}
                className="group relative"
                onHoverStart={() => setHoveredProject(project.title)}
                onHoverEnd={() => setHoveredProject(null)}
              >
                <div className="cursor-pointer" onClick={() => window.location.href = `/${locale}/projetos/${project.title.toLowerCase().replace(/\s+/g, '-')}`}>
                  <Card className="overflow-hidden bg-background/50 backdrop-blur-sm border-primary/10 hover:border-primary/30 transition-all duration-500">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="relative h-[300px] md:h-full overflow-hidden">
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        />
                        <motion.img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover"
                          initial={{ scale: 1 }}
                          whileHover={{ scale: 1.1 }}
                          transition={{ duration: 0.6 }}
                        />
                      </div>

                      <div className="p-6 flex flex-col justify-between">
                        <div className="space-y-4">
                          <motion.h3
                            className="text-2xl font-semibold"
                            initial={{ opacity: 0.8 }}
                            whileHover={{ opacity: 1 }}
                          >
                            {project.title}
                          </motion.h3>
                          <p className="text-muted-foreground">
                            {project.description}
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {project.tags.map((tag) => (
                              <Badge
                                key={tag}
                                variant="secondary"
                                className="bg-primary/5"
                              >
                                {tag}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        <div className="pt-6">
                          <div className="flex items-center justify-between">
                            <motion.div
                              className="flex items-center gap-2 text-sm text-primary font-medium"
                              initial={{ x: 0 }}
                              whileHover={{ x: 5 }}
                            >
                              {translations.viewDetails}
                              <ArrowRightIcon className="w-4 h-4" />
                            </motion.div>
                            <div className="flex gap-4" onClick={(e) => e.stopPropagation()}>
                              {project.links.demo && (
                                <motion.a
                                  href={project.links.demo}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-muted-foreground hover:text-primary transition-colors"
                                  whileHover={{ scale: 1.1 }}
                                >
                                  <ExternalLinkIcon className="w-5 h-5" />
                                </motion.a>
                              )}
                              {project.links.github && (
                                <motion.a
                                  href={project.links.github}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-muted-foreground hover:text-primary transition-colors"
                                  whileHover={{ scale: 1.1 }}
                                >
                                  <GithubIcon className="w-5 h-5" />
                                </motion.a>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}