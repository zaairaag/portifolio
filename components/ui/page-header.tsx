'use client'

import { motion } from 'framer-motion'

interface PageHeaderProps {
  badge: string
  title: string
  titleHighlight: string
  description: string
}

export function PageHeader({ badge, title, titleHighlight, description }: PageHeaderProps) {
  return (
    <section className="relative pt-8 pb-16 md:pt-12 md:pb-24">
      <div className="max-w-3xl mx-auto">
        <div className="text-center space-y-6">
          <div className="inline-block rounded-full px-4 py-1.5 text-sm font-medium text-primary border border-primary/20">
            {badge}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            {title}{' '}
            <span className="text-primary">
              {titleHighlight}
            </span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {description}
          </p>
        </div>
      </div>
    </section>
  )
}
