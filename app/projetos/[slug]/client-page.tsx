'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { ExternalLinkIcon, GithubIcon, ArrowLeftIcon, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';
import { containerVariants, itemVariants } from './animation-variants';
import type { Project } from '@/components/sections/projects';

interface Props {
  project: Project;
}

export function ClientPage({ project }: Props) {
  return (
    <div className="container mx-auto px-4">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="max-w-4xl mx-auto space-y-8"
      >
        <div className="flex justify-between items-center">
          <Link href="/projetos">
            <Button variant="ghost" className="group">
              <ArrowLeftIcon className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              Voltar para Projetos
            </Button>
          </Link>

          <div className="flex gap-4">
            {project.links.demo && (
              <Button asChild>
                <a href={project.links.demo} target="_blank" rel="noopener noreferrer">
                  <ExternalLinkIcon className="w-4 h-4 mr-2" />
                  Ver Projeto
                </a>
              </Button>
            )}
            {project.links.github && (
              <Button variant="outline" asChild>
                <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                  <GithubIcon className="w-4 h-4 mr-2" />
                  Código Fonte
                </a>
              </Button>
            )}
          </div>
        </div>

        <motion.div variants={itemVariants} className="relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/90 z-10" />
          <motion.img
            src={project.image}
            alt={project.title}
            className="w-full h-[400px] object-cover rounded-lg"
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6 }}
          />
          <motion.div 
            className="absolute bottom-0 left-0 right-0 p-8 z-20"
            variants={itemVariants}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">
              {project.title}
            </h1>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <Badge
                  key={tag}
                  variant="secondary"
                  className="bg-background/50 backdrop-blur-sm text-sm"
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </motion.div>
        </motion.div>

        <motion.div 
          variants={itemVariants}
          className="prose prose-lg dark:prose-invert max-w-none"
        >
          <p className="text-lg leading-relaxed text-muted-foreground">
            {project.description}
          </p>
        </motion.div>

        <motion.div variants={itemVariants}>
          <h2 className="text-2xl font-semibold mb-6">Destaques do Projeto</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {project.highlights.map((highlight, index) => (
              <Card 
                key={index}
                className="p-4 bg-primary/5 border-primary/10 backdrop-blur-sm"
              >
                <motion.div
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5" />
                  <span className="text-sm">{highlight}</span>
                </motion.div>
              </Card>
            ))}
          </div>
        </motion.div>

        <motion.div 
          variants={itemVariants}
          className="flex justify-center pt-8"
        >
          <Link href="/projetos">
            <Button variant="outline" size="lg" className="group">
              <ArrowLeftIcon className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              Ver outros projetos
            </Button>
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}
