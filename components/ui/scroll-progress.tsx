'use client'

import { motion, useScroll, useSpring } from 'framer-motion'

import { useEffect, useState } from 'react'

export function ScrollProgress() {
  const [isVisible, setIsVisible] = useState(false)
  const { scrollYProgress } = useScroll()

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  useEffect(() => {
    const handleScroll = () => {
      // Mostrar a barra apenas após rolar um pouco
      setIsVisible(window.scrollY > 100)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!isVisible) return null

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-primary/20 z-50"
      style={{ transformOrigin: '0%' }}
    >
      <motion.div className="h-full bg-primary" style={{ scaleX }} />
    </motion.div>
  )
}
