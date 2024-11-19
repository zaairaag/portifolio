'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';
import Image from 'next/image';

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  image: string;
  demoUrl?: string;
  githubUrl?: string;
}

export function ProjectCard({
  title,
  description,
  tags,
  image,
  demoUrl,
  githubUrl,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="overflow-hidden border-border/50">
        {/* Image */}
        <div className="relative h-48 overflow-hidden">
          <Image
            src={image}
            alt={title}
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            fill
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-50" />
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          <h3 className="text-xl font-bold">{title}</h3>
          <p className="text-muted-foreground">{description}</p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>

          {/* Actions */}
          <div className="flex gap-3 pt-2">
            {demoUrl && (
              <Button
                variant="default"
                className="flex-1 group"
                onClick={() => window.open(demoUrl, '_blank')}
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                Demo
              </Button>
            )}
            {githubUrl && (
              <Button
                variant="outline"
                className="flex-1 group"
                onClick={() => window.open(githubUrl, '_blank')}
              >
                <Github className="w-4 h-4 mr-2" />
                Código
              </Button>
            )}
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
