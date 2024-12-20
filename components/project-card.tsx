'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, ChevronDown } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  category: string;
  image: string;
  demoUrl?: string;
  githubUrl?: string;
}

export function ProjectCard({
  title,
  description,
  tags,
  category,
  image,
  demoUrl,
  githubUrl,
}: ProjectCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div 
      layout
      className="group overflow-hidden rounded-xl bg-card border hover:border-primary/50 transition-colors"
    >
      {/* Header - Sempre visível */}
      <div 
        className="flex items-center gap-3 p-3 cursor-pointer"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {/* Título e Tags */}
        <div className="flex-grow min-w-0">
          <div className="flex items-center gap-2">
            <motion.h3 
              layout="position" 
              className="text-base font-medium truncate"
            >
              {demoUrl ? (
                <Link 
                  href={demoUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors inline-flex items-center gap-1"
                  onClick={(e) => e.stopPropagation()}
                >
                  {title}
                  <ExternalLink className="h-4 w-4" />
                </Link>
              ) : (
                title
              )}
            </motion.h3>
          </div>
          <div className="flex flex-wrap gap-1.5 mt-1.5">
            <Badge variant="secondary" className="bg-primary/10 text-primary border-0 text-xs">
              {category}
            </Badge>
            {tags.slice(0, 2).map((tag) => (
              <Badge key={tag} variant="outline" className="bg-muted/50 text-xs">
                {tag}
              </Badge>
            ))}
            {tags.length > 2 && (
              <Badge variant="outline" className="bg-muted/50 text-xs">
                +{tags.length - 2}
              </Badge>
            )}
          </div>
        </div>

        {/* Ícone de expandir */}
        <motion.div
          layout="position"
          animate={{ rotate: isExpanded ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="flex-shrink-0 w-8 h-8 rounded-full bg-muted/50 flex items-center justify-center group-hover:bg-primary/10 transition-colors"
        >
          <ChevronDown className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
        </motion.div>
      </div>

      {/* Conteúdo expandido */}
      <AnimatePresence mode="sync" initial={false}>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ 
              height: 'auto', 
              opacity: 1,
              transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] }
            }}
            exit={{ 
              height: 0, 
              opacity: 0,
              transition: { duration: 0.2, ease: [0.4, 0, 0.2, 1] }
            }}
            className="border-t"
          >
            {/* Imagem */}
            <div className="relative aspect-video">
              <Image
                src={image}
                alt={title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>

            {/* Descrição e Links */}
            <div className="p-3 space-y-3">
              <p className="text-sm text-muted-foreground">{description}</p>
              
              {/* Tags completas */}
              <div className="flex flex-wrap gap-1.5">
                {tags.map((tag) => (
                  <Badge key={tag} variant="outline" className="bg-muted/50 text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>

              {/* Botões */}
              <div className="flex gap-2 pt-1">
                {(demoUrl || githubUrl) && (
                  <div 
                    className="flex gap-3" 
                    onClick={(e) => e.stopPropagation()}
                  >
                    {githubUrl && (
                      <Button variant="outline" asChild className="flex-1">
                        <Link href={githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="mr-2 h-4 w-4" />
                          Ver Código
                        </Link>
                      </Button>
                    )}
                    {demoUrl && (
                      <Button asChild className="flex-1">
                        <Link href={demoUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Ver Projeto
                        </Link>
                      </Button>
                    )}
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
