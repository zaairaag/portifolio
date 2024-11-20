'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

interface HeroSectionProps {
  badge?: string
  title: string
  subtitle?: string
  action?: {
    text: string
    href: string
  }
}

export function HeroSection({ badge, title, subtitle, action }: HeroSectionProps) {
  return (
    <section className="container relative pt-24 pb-16 md:pt-32 md:pb-24">
      {/* Background Decoration */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-1/2 right-0 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute top-0 left-0 h-64 w-64 rounded-full bg-violet-500/5 blur-3xl" />
      </div>

      <div className="max-w-3xl mx-auto">
        <div className="text-center space-y-6">
          {badge && (
            <div className="inline-block rounded-full px-4 py-1.5 text-sm font-medium bg-accent/10 text-accent-foreground mb-4">
              {badge}
            </div>
          )}
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            <span className="bg-gradient-to-r from-primary to-violet-500 bg-clip-text text-transparent">
              {title}
            </span>
          </h1>
          {subtitle && (
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
          {action && (
            <div className="pt-4">
              <Link
                href={action.href}
                className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white transition-all rounded-full bg-gradient-to-r from-primary to-violet-500 hover:scale-105 hover:shadow-lg hover:shadow-primary/30"
              >
                {action.text}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
