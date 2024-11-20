'use client'

import { motion } from 'framer-motion'

import { Badge } from './badge'

interface TimelineItem {
  year: string
  role: string
  company: string
  description: string
}

interface TimelineProps {
  items: TimelineItem[]
}

export function Timeline({ items }: TimelineProps) {
  return (
    <div className="relative">
      {/* Linha vertical do timeline */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-primary/20 to-transparent" />

      {/* Items do timeline */}
      <div className="space-y-12 relative">
        {items.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="relative pl-8"
          >
            {/* Círculo indicador */}
            <div className="absolute left-[-5px] top-2 w-[10px] h-[10px] rounded-full bg-primary shadow-lg shadow-primary/50" />

            {/* Conteúdo */}
            <div className="bg-card/30 backdrop-blur-sm rounded-lg p-6 border border-primary/10 hover:border-primary/30 transition-colors">
              <div className="flex flex-wrap items-center gap-3 mb-2">
                <h4 className="text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
                  {item.role}
                </h4>
                <Badge variant="outline" className="bg-primary/5 text-primary">
                  {item.year}
                </Badge>
              </div>
              <div className="text-primary/80 font-medium mb-2">{item.company}</div>
              <p className="text-muted-foreground">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
