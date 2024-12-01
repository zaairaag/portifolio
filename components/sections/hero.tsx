'use client'

import { motion } from 'framer-motion'
import { GithubIcon, LinkedinIcon } from 'lucide-react'

import { useEffect, useRef, useState } from 'react'
import { TypeAnimation } from 'react-type-animation'

import { useTheme } from 'next-themes'
import Link from 'next/link'

import { Button } from '@/components/ui/button'
import Image from 'next/image'

export function Hero() {
  const ref = useRef<HTMLElement>(null)
  const { theme } = useTheme()
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: MouseEvent) => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect()
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      })
    }
  }

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section
      ref={ref}
      className="container min-h-[50vh] flex flex-col items-center justify-center pt-20 md:pt-32 pb-8 relative overflow-hidden px-4"
    >
      {/* Interactive Cursor Effect */}
      <motion.div
        className="pointer-events-none fixed inset-0 z-30 opacity-0 md:opacity-100"
        animate={{
          background: `radial-gradient(400px at ${mousePosition.x}px ${mousePosition.y}px, ${
            theme === 'dark' ? 'rgba(255, 0, 128, 0.07)' : 'rgba(0, 223, 216, 0.07)'
          }, transparent 70%)`,
        }}
        transition={{ type: 'spring', bounce: 0, duration: 0.3 }}
      />

      <motion.div
        className="z-20 flex flex-col items-center justify-center text-center gap-4 md:gap-6 max-w-full"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 5, -5, 0],
            }}
            transition={{ duration: 5, repeat: Infinity }}
            className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-purple-500/20 rounded-full blur-xl"
          />
          <div className="relative overflow-hidden">
            <motion.h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500 relative whitespace-normal md:whitespace-nowrap px-2 pb-2 pt-1">
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.01 }}
                className="block md:inline"
              >
                {'Olá, sou '.split('').map((char, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.2,
                      delay: index * 0.05,
                      type: 'spring',
                      stiffness: 200,
                      damping: 10,
                    }}
                    className="inline-block"
                  >
                    {char === ' ' ? '\u00A0' : char}
                  </motion.span>
                ))}
              </motion.span>
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.01, delay: 0.5 }}
                className="block md:inline md:ml-2"
              >
                {'Zaira Gonçalves'.split('').map((char, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.2,
                      delay: 0.5 + index * 0.05,
                      type: 'spring',
                      stiffness: 200,
                      damping: 10,
                    }}
                    className="inline-block"
                  >
                    {char === ' ' ? '\u00A0' : char}
                  </motion.span>
                ))}
              </motion.span>
              <motion.span
                className="inline-block w-[2px] h-[1em] bg-primary ml-1 align-middle"
                animate={{
                  opacity: [1, 0],
                  scaleY: [1, 1.1, 1],
                }}
                transition={{
                  duration: 0.8,
                  repeat: Infinity,
                  ease: 'linear',
                }}
              />
            </motion.h1>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl"
        >
          <TypeAnimation
            sequence={[
              'Desenvolvedora Full Stack,',
              2000,
              'Desenvolvedora low code/no code,',
              2000,
              'Analista de web analytics,',
              2000,
              'Analista de SEO,',
              2000,
              'Analista IA Generativa,',
              2000,
              'Engenheira de Prompt.',
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 mt-2"
        >
          <Button asChild variant="default" size="lg" className="rounded-full w-full sm:w-auto">
            <Link href="/contato">Entre em contato</Link>
          </Button>
          <Button asChild variant="ghost" size="lg" className="rounded-full w-full sm:w-auto">
            <Link href="/portfolio">Ver portfólio</Link>
          </Button>
        </motion.div>
      </motion.div>
    </section>
  )
}
