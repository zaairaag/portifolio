'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

interface LogoProps {
  width?: number
  height?: number
  animated?: boolean
  className?: string
}

export function Logo({ width = 32, height = 32, animated = true, className }: LogoProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="relative w-10 h-10">
        <div className="absolute inset-0 bg-primary/10 rounded-lg" />
      </div>
    )
  }

  return (
    <motion.div
      whileHover={
        animated
          ? {
              scale: 1.05,
              transition: { type: 'spring', stiffness: 400, damping: 10 },
            }
          : {}
      }
      className={className}
      style={{ width, height }}
    >
      {/* Container do logo */}
      <svg
        width={width}
        height={height}
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="relative z-10"
      >
        {/* Hexágono de fundo */}
        <motion.path
          d="M16 2L29.0526 9.5V24.5L16 32L2.94744 24.5V9.5L16 2Z"
          className="fill-primary/5 stroke-primary"
          strokeWidth="1"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{
            scale: [0.95, 1, 0.95],
            opacity: [0.5, 1, 0.5],
            rotate: [0, 360],
          }}
          transition={{
            duration: 8,
            ease: 'linear',
            repeat: Infinity,
          }}
        />

        {/* Hexágono interno */}
        <motion.path
          d="M16 6L25.0526 11.5V22.5L16 28L6.94744 22.5V11.5L16 6Z"
          className="fill-primary/10 stroke-primary"
          strokeWidth="0.5"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{
            scale: [1, 0.95, 1],
            opacity: [1, 0.5, 1],
            rotate: [360, 0],
          }}
          transition={{
            duration: 8,
            ease: 'linear',
            repeat: Infinity,
          }}
        />

        {/* Z - parte superior */}
        <motion.path
          d="M10 10H18"
          className="stroke-primary"
          strokeWidth="2.5"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{
            duration: 1.5,
            ease: 'easeInOut',
            delay: 0.2,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        />

        {/* Z - diagonal */}
        <motion.path
          d="M18 10L10 22"
          className="stroke-primary"
          strokeWidth="2.5"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{
            duration: 1.5,
            ease: 'easeInOut',
            delay: 0.4,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        />

        {/* Z - parte inferior */}
        <motion.path
          d="M10 22H18"
          className="stroke-primary"
          strokeWidth="2.5"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{
            duration: 1.5,
            ease: 'easeInOut',
            delay: 0.6,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        />

        {/* G - parte superior */}
        <motion.path
          d="M20 10H26"
          className="stroke-primary"
          strokeWidth="2.5"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{
            duration: 1.5,
            ease: 'easeInOut',
            delay: 0.8,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        />

        {/* G - lateral */}
        <motion.path
          d="M20 10V22"
          className="stroke-primary"
          strokeWidth="2.5"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{
            duration: 1.5,
            ease: 'easeInOut',
            delay: 1,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        />

        {/* G - parte inferior */}
        <motion.path
          d="M20 22H26"
          className="stroke-primary"
          strokeWidth="2.5"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{
            duration: 1.5,
            ease: 'easeInOut',
            delay: 1.2,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        />

        {/* G - traço vertical */}
        <motion.path
          d="M26 16V22"
          className="stroke-primary"
          strokeWidth="2.5"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{
            duration: 1.5,
            ease: 'easeInOut',
            delay: 1.4,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        />

        {/* G - traço horizontal */}
        <motion.path
          d="M23 16H26"
          className="stroke-primary"
          strokeWidth="2.5"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{
            duration: 1.5,
            ease: 'easeInOut',
            delay: 1.6,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        />

        {/* Ponto */}
        <motion.circle
          cx="19"
          cy="16"
          r="1"
          className="fill-primary"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            duration: 1,
            ease: 'easeOut',
            delay: 1.8,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        />

        {/* Partículas */}
        {[...Array(5)].map((_, i) => (
          <motion.circle
            key={i}
            cx="16"
            cy="16"
            r="0.5"
            className="fill-primary/80"
            initial={{ x: 0, y: 0, scale: 0 }}
            animate={{
              x: [
                Math.cos((i * Math.PI * 2) / 5) * 10,
                Math.cos(((i + 1) * Math.PI * 2) / 5) * 10,
              ],
              y: [
                Math.sin((i * Math.PI * 2) / 5) * 10,
                Math.sin(((i + 1) * Math.PI * 2) / 5) * 10,
              ],
              scale: [1, 1.5],
            }}
            transition={{
              duration: 4,
              ease: 'linear',
              repeat: Infinity,
              delay: i * 0.2,
            }}
          />
        ))}
      </svg>
    </motion.div>
  )
}
