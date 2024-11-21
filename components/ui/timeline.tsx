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
}

export function Timeline({ items }: TimelineProps) {
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
            className="relative pl-8 before:absolute before:left-0 before:top-[24px] before:h-[calc(100%-24px)] before:w-[1px] before:bg-gradient-to-b before:from-primary/50 before:to-transparent last:before:hidden"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ 
              type: "spring",
              stiffness: 100,
              damping: 15,
              delay: index * 0.1 
            }}
          >
            {/* Dot indicator with glow effect */}
            <motion.div
              className="absolute left-[-4.5px] top-1.5 h-2.5 w-2.5 rounded-full bg-primary ring-[3px] ring-background"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                type: "spring",
                stiffness: 300,
                damping: 20,
                delay: index * 0.1 + 0.2 
              }}
            >
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-full bg-primary animate-pulse opacity-20 blur-sm" />
            </motion.div>

            {/* Content */}
            <div className="group">
              {/* Year badge */}
              <motion.div
                className="inline-flex items-center rounded-full border border-primary/20 px-3 py-1 text-sm font-medium text-primary"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + 0.1 }}
              >
                {item.year}
              </motion.div>

              {/* Role and company */}
              <motion.div 
                className="mt-3 flex flex-col gap-1"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + 0.2 }}
              >
                <h3 className="text-lg font-semibold tracking-tight">
                  {item.role}
                  {item.company && (
                    <span className="text-muted-foreground font-normal ml-2">
                      • {item.company}
                    </span>
                  )}
                </h3>
                <p className="text-muted-foreground text-[15px] leading-relaxed max-w-2xl">
                  {item.description}
                </p>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
