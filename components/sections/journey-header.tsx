'use client'

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { DownloadIcon } from "lucide-react"

export function JourneyHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex items-center justify-between mb-6"
    >
      <h2 className="text-2xl font-bold">Jornada Profissional</h2>
      <Button 
        variant="outline" 
        className="flex items-center gap-2 hover:bg-accent/50"
        onClick={() => window.open('/cv.pdf', '_blank')}
      >
        <DownloadIcon className="w-4 h-4" />
        Baixar CV
      </Button>
    </motion.div>
  )
}
