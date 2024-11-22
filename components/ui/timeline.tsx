'use client'

import React, { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import { cn } from '@/lib/utils'

interface TimelineItem {
  year: string
  role: string
  company?: string
  description: string
  icon?: React.ReactNode
}

interface TimelineProps {
  items: TimelineItem[]
  alternating?: boolean
}

export function Timeline({ items, alternating = false }: TimelineProps) {
  const cursorX = useMotionValue(0)
  const cursorY = useMotionValue(0)

  const springConfig = { damping: 25, stiffness: 700 }
  const cursorXSpring = useSpring(cursorX, springConfig)
  const cursorYSpring = useSpring(cursorY, springConfig)

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)
    }

    window.addEventListener('mousemove', moveCursor)
    return () => {
      window.removeEventListener('mousemove', moveCursor)
    }
  }, [])

  return (
    <div className="relative">
      <motion.div 
        className="pointer-events-none fixed inset-0 z-30 opacity-50 mix-blend-soft-light"
        style={{
          background: `radial-gradient(600px circle at ${cursorXSpring}px ${cursorYSpring}px, rgba(var(--primary-rgb), 0.15), transparent 80%)`
        }}
      />
      <div className="space-y-12">
        {items.map((item, index) => (
          <motion.div
            key={index}
            className={cn(
              "relative pl-8 before:absolute before:left-0 before:h-full before:w-[2px] before:bg-gradient-to-b before:from-primary before:to-primary/20 last:before:hidden after:absolute after:left-[-5px] after:top-[6px] after:h-[10px] after:w-[10px] after:rounded-full after:border-2 after:border-primary after:bg-background",
              alternating && index % 2 === 1 && "md:pl-0 md:pr-8 md:text-right md:before:right-0 md:before:left-auto md:after:right-[-5px] md:after:left-auto"
            )}
            initial={{ opacity: 0, x: alternating && index % 2 === 1 ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="flex items-center gap-4">
              {item.icon && (
                <div className={cn(
                  "absolute -left-[25px] flex h-12 w-12 items-center justify-center rounded-full border-4 border-background bg-primary/10",
                  alternating && index % 2 === 1 && "md:-right-[25px] md:left-auto"
                )}>
                  <div className="text-primary">
                    {item.icon}
                  </div>
                </div>
              )}
              <div className={cn(
                "flex flex-col gap-1",
                alternating && index % 2 === 1 && "md:items-end"
              )}>
                <span className="text-sm text-primary font-medium">
                  {item.year}
                </span>
                <h3 className="font-semibold">{item.role}</h3>
                {item.company && (
                  <span className="text-muted-foreground font-medium">
                    {item.company}
                  </span>
                )}
              </div>
            </div>
            <p className="mt-3 text-muted-foreground">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
