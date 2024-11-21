'use client'

import React from 'react'
import { motion } from 'framer-motion'
import cn from 'classnames'

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
  return (
    <div className="relative">
      {/* Linha Central */}
      <div className="absolute inset-0 flex justify-center">
        <div className="w-[1px] bg-gradient-to-b from-primary/20 via-border to-border/0" />
      </div>

      {/* Items */}
      <div className="space-y-16 relative">
        {items.map((item, index) => (
          <motion.div
            key={index}
            className={cn(
              "relative flex items-center md:gap-16 gap-8",
              alternating && index % 2 === 1 && "flex-row-reverse"
            )}
            initial={{ opacity: 0, x: alternating ? (index % 2 === 0 ? -20 : 20) : -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            {/* Ícone */}
            <motion.div
              className="relative z-10 shrink-0"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 + 0.2 }}
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/0 flex items-center justify-center text-primary border border-border/50 shadow-sm">
                {item.icon}
              </div>
              <div className="absolute -inset-4 bg-primary/5 rounded-[28px] blur-2xl" />
            </motion.div>

            {/* Conteúdo */}
            <div className={cn(
              "flex-1 space-y-3",
              alternating && index % 2 === 1 && "text-right"
            )}>
              <motion.div
                className={cn(
                  "inline-flex items-center justify-center px-4 py-1.5 text-sm font-medium rounded-full",
                  "bg-primary/10 text-primary border border-primary/10",
                  "shadow-sm shadow-primary/5"
                )}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + 0.2 }}
              >
                {item.year}
              </motion.div>
              <motion.h3
                className="text-xl font-semibold"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + 0.3 }}
              >
                {item.role}
                {item.company && (
                  <span className="text-muted-foreground font-normal"> • {item.company}</span>
                )}
              </motion.h3>
              <motion.p
                className="text-muted-foreground text-[15px] leading-relaxed"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + 0.4 }}
              >
                {item.description}
              </motion.p>
            </div>

            {/* Espaçador */}
            <div className="flex-1" />
          </motion.div>
        ))}
      </div>
    </div>
  )
}
