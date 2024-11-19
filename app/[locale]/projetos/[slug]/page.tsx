import { useTranslations } from 'next-intl';
import { projects } from '@/config/projects';
import { notFound } from 'next/navigation';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLinkIcon, GithubIcon } from 'lucide-react';
import { Footer } from '@/components/footer';
import { motion } from 'framer-motion';

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects.find(
    (p) => p.title.toLowerCase().replace(/\s+/g, '-') === params.slug
  );

  if (!project) {
    notFound();
  }

  return (
    <>
      <main className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/50">
              {project.title}
            </h1>
            
            <div className="flex flex-wrap gap-2 mb-8">
              {project.tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="bg-primary/5">
                  {tag}
                </Badge>
              ))}
            </div>

            <div className="aspect-video rounded-lg overflow-hidden mb-8 border border-border">
              <motion.img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
              />
            </div>

            <div className="prose prose-invert max-w-none mb-12">
              <p className="text-lg text-muted-foreground leading-relaxed">
                {project.description}
              </p>
              
              {/* Seção de Tecnologias */}
              <h2 className="text-2xl font-semibold mt-12 mb-6">Tecnologias Utilizadas</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {project.tags.map((tech) => (
                  <div key={tech} className="flex items-center space-x-2 text-muted-foreground">
                    <span>• {tech}</span>
                  </div>
                ))}
              </div>

              {/* Links do Projeto */}
              <div className="flex gap-4 mt-12">
                {project.links.demo && (
                  <Button asChild>
                    <a
                      href={project.links.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <ExternalLinkIcon className="w-4 h-4" />
                      Ver Demo
                    </a>
                  </Button>
                )}
                {project.links.github && (
                  <Button variant="outline" asChild>
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <GithubIcon className="w-4 h-4" />
                      Ver Código
                    </a>
                  </Button>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
}
