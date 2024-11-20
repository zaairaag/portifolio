'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown, ExternalLink, Github } from 'lucide-react'

import { useState } from 'react'

import Image from 'next/image'
import Link from 'next/link'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

import { FADE_UP_ANIMATION_VARIANTS } from '@/lib/constants'
import { cn } from '@/lib/utils'

interface Project {
  title: string
  description: string
  longDescription?: string
  image: string
  tags: string[]
  github?: string
  link?: string
  role?: string
}

interface ProjectCardProps {
  project: Project
  index: number
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <motion.div variants={FADE_UP_ANIMATION_VARIANTS} className="group w-full">
      <div className="relative border-b border-border/40 py-12 transition-colors hover:bg-accent/5">
        <div className="space-y-6">
          {/* Header */}
          <div className="flex items-center justify-between gap-4">
            <div>
              <h3 className="text-xl font-bold text-foreground">{project.title}</h3>
              {project.role && <p className="text-sm text-muted-foreground mt-1">{project.role}</p>}
            </div>
            <div className="flex gap-2">
              {project.github && (
                <Button variant="ghost" size="icon" asChild className="h-8 w-8">
                  <Link href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4" />
                    <span className="sr-only">GitHub</span>
                  </Link>
                </Button>
              )}
              {project.link && (
                <Button variant="ghost" size="icon" asChild className="h-8 w-8">
                  <Link href={project.link} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4" />
                    <span className="sr-only">Visitar projeto</span>
                  </Link>
                </Button>
              )}
            </div>
          </div>

          {/* Description */}
          <p className="text-muted-foreground">{project.description}</p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {project.tags.map(tag => (
              <Badge
                key={tag}
                variant="secondary"
                className="bg-secondary/40 hover:bg-secondary/60"
              >
                {tag}
              </Badge>
            ))}
          </div>

          {/* Expand Button */}
          {(project.longDescription || project.image) && (
            <Button
              variant="ghost"
              className="group/btn -ml-4 h-8 text-muted-foreground"
              onClick={() => setIsExpanded(!isExpanded)}
            >
              <ChevronDown
                className={cn(
                  'mr-2 h-4 w-4 transition-transform duration-200',
                  isExpanded && 'rotate-180'
                )}
              />
              <span className="group-hover/btn:underline">
                {isExpanded ? 'Ver menos' : 'Ver mais'}
              </span>
            </Button>
          )}

          {/* Expandable Content */}
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="space-y-6">
                  {project.longDescription && (
                    <p className="text-muted-foreground">{project.longDescription}</p>
                  )}
                  {project.image && (
                    <div className="relative aspect-video w-full overflow-hidden rounded-lg border border-border/40">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  )
}
