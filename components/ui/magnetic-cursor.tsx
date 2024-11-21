'use client'

import React, { useEffect, useRef } from 'react'
import { motion, useSpring, useTransform, useMotionValue } from 'framer-motion'

interface Props {
  children: React.ReactNode
}

export function MagneticCursor({ children }: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const springConfig = { damping: 15, stiffness: 150 }
  const xSpring = useSpring(x, springConfig)
  const ySpring = useSpring(y, springConfig)

  const top = useTransform(ySpring, (latest) => `${latest}px`)
  const left = useTransform(xSpring, (latest) => `${latest}px`)

  useEffect(() => {
    if (!ref.current) return

    const handleMouseMove = (e: MouseEvent) => {
      const element = ref.current
      if (!element) return

      const rect = element.getBoundingClientRect()
      const centerX = rect.x + rect.width / 2
      const centerY = rect.y + rect.height / 2

      const distance = {
        x: e.clientX - centerX,
        y: e.clientY - centerY,
      }

      const maxDistance = 100
      const scaledDistance = {
        x: (distance.x / maxDistance) * 15,
        y: (distance.y / maxDistance) * 15,
      }

      x.set(scaledDistance.x)
      y.set(scaledDistance.y)
    }

    const handleMouseLeave = () => {
      x.set(0)
      y.set(0)
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [x, y])

  return (
    <motion.div
      ref={ref}
      style={{ position: 'relative', top, left }}
      className="inline-block"
    >
      {children}
    </motion.div>
  )
}
