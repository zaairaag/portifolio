'use client'

import React from 'react'
import { motion } from 'framer-motion'

interface TimelineItem {
  title: string
  company?: string
  date: string
  description: string
}

interface TimelineProps {
  items: TimelineItem[]
}

export function Timeline({ items }: TimelineProps) {
  return (
    <div className="relative space-y-8">
      <div className="absolute left-8 top-2 h-full w-[2px] bg-border" />

      {items.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
          className="relative ml-20"
        >
          <div className="absolute -left-[52px] flex h-4 w-4 items-center justify-center">
            <div className="h-2 w-2 rounded-full bg-primary" />
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex flex-col gap-1">
              <h3 className="text-lg font-semibold leading-none">
                {item.title}
                {item.company && (
                  <span className="text-muted-foreground"> @ {item.company}</span>
                )}
              </h3>
              <p className="text-sm text-muted-foreground">{item.date}</p>
            </div>

            <p className="text-muted-foreground">{item.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  )
}
