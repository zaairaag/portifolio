"use client";

import { useParams } from 'next/navigation';
import { projects } from '@/components/sections/projects';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLinkIcon, GithubIcon, ArrowLeftIcon } from 'lucide-react';
import Link from 'next/link';

export default function ProjectPage() {
  const params = useParams();
  const project = projects.find(p => p.title.toLowerCase().replace(/\s+/g, '-') === params.slug);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold mb-4">Projeto não encontrado</h1>
        <Link href="/projetos">
          <Button>
            <ArrowLeftIcon className="w-4 h-4 mr-2" />
            Voltar para Projetos
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <main className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          <Link href="/projetos" className="inline-block mb-8">
            <Button variant="ghost" className="group">
              <ArrowLeftIcon className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              Voltar para Projetos
            </Button>
          </Link>

          <motion.img
            src={project.image}
            alt={project.title}
            className="w-full h-[400px] object-cover rounded-lg mb-8"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
          />

          <div className="space-y-6">
            <h1 className="text-4xl font-bold">{project.title}</h1>
            
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <Badge key={tag} variant="outline">{tag}</Badge>
              ))}
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed">
              {project.description}
            </p>

            <div className="flex gap-4 pt-4">
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
        </motion.div>
      </div>
    </main>
  );
}
