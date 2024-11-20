'use client'

import React from 'react'
import { motion } from 'framer-motion'

interface TimelineItem {
  year: string
  role: string
  company: string
  description: string
  icon?: React.ReactNode
}

interface TimelineProps {
  items: TimelineItem[]
}

export function Timeline({ items }: TimelineProps) {
  return (
    <div className="relative">
      {/* Linha Central */}
      <motion.div
        className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-primary/20 to-transparent"
        initial={{ height: 0 }}
        whileInView={{ height: '100%' }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      />

      {/* Items */}
      <div className="space-y-12">
        {items.map((item, index) => (
          <motion.div
            key={index}
            className={`relative flex items-center gap-8 ${
              index % 2 === 0 ? 'flex-row-reverse' : ''
            }`}
            initial={{ opacity: 0, x: index % 2 === 0 ? 20 : -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            {/* Conteúdo */}
            <div className={`flex-1 ${index % 2 === 0 ? 'text-right' : ''}`}>
              <motion.div
                className="inline-flex items-center justify-center px-3 py-1 mb-2 text-sm font-medium rounded-full bg-primary/10 text-primary"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + 0.2 }}
              >
                {item.year}
              </motion.div>
              <motion.h3
                className="text-xl font-semibold mb-2"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + 0.3 }}
              >
                {item.role}
                {item.company && <span className="text-muted-foreground"> • {item.company}</span>}
              </motion.h3>
              <motion.p
                className="text-muted-foreground"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + 0.4 }}
              >
                {item.description}
              </motion.p>
            </div>

            {/* Ícone */}
            <motion.div
              className="relative z-10 shrink-0"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 + 0.2 }}
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center text-primary">
                {item.icon}
              </div>
              <div className="absolute -inset-4 bg-primary/5 rounded-[24px] blur-2xl" />
            </motion.div>

            {/* Espaçador */}
            <div className="flex-1" />
          </motion.div>
        ))}
      </div>
    </div>
  )
}
