'use client'

import { motion } from 'framer-motion'

import { useEffect, useState } from 'react'

interface LogoProps {
  width?: number
  height?: number
  animated?: boolean
}

export function Logo({ width = 32, height = 32, animated = true }: LogoProps) {
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
      className="relative group"
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

        {/* G - arco superior */}
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

        {/* G - linha vertical esquerda */}
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

        {/* G - linha inferior */}
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

        {/* G - linha vertical direita */}
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

        {/* G - linha horizontal meio */}
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

        {/* Ponto decorativo central */}
        <motion.circle
          cx="19"
          cy="16"
          r="1"
          className="fill-primary"
          initial={{ scale: 0, opacity: 0 }}
          animate={{
            scale: [0, 1, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 2,
            ease: 'easeInOut',
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        />

        {/* Pontos decorativos orbitais */}
        {[0, 72, 144, 216, 288].map((angle, i) => (
          <motion.circle
            key={angle}
            cx="16"
            cy="16"
            r="0.5"
            className="fill-primary/80"
            initial={{
              x: Math.cos((angle * Math.PI) / 180) * 12,
              y: Math.sin((angle * Math.PI) / 180) * 12,
            }}
            animate={{
              x: [
                Math.cos(((angle + 0) * Math.PI) / 180) * 12,
                Math.cos(((angle + 180) * Math.PI) / 180) * 12,
                Math.cos(((angle + 360) * Math.PI) / 180) * 12,
              ],
              y: [
                Math.sin(((angle + 0) * Math.PI) / 180) * 12,
                Math.sin(((angle + 180) * Math.PI) / 180) * 12,
                Math.sin(((angle + 360) * Math.PI) / 180) * 12,
              ],
              scale: [1, 1.5, 1],
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: 3,
              ease: 'linear',
              repeat: Infinity,
              delay: i * 0.2,
            }}
          />
        ))}
      </svg>

      {/* Efeito de brilho no hover */}
      <motion.div
        className="absolute inset-0 bg-primary/20 blur-xl rounded-full opacity-0 group-hover:opacity-50 transition-opacity duration-300"
        initial={false}
        animate={{ scale: [0.8, 1.2, 0.8] }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Partículas de fundo */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary/30 rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -10, 0],
              x: [0, Math.random() * 10 - 5, 0],
              opacity: [0.3, 1, 0.3],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              delay: i * 0.2,
            }}
          />
        ))}
      </motion.div>
    </motion.div>
  )
}
