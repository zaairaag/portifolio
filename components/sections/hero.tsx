'use client';

import { motion } from 'framer-motion';
import { GithubIcon, LinkedinIcon, TwitterIcon, MousePointerClick } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useRef, useEffect, useState } from 'react';
import Link from 'next/link';
import { TypeAnimation } from 'react-type-animation';
import { useTheme } from 'next-themes';

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { theme } = useTheme();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section 
      ref={ref} 
      className="h-screen w-full flex items-center justify-center relative overflow-hidden" 
      id="home"
    >
      {/* Interactive Cursor Effect */}
      <motion.div
        className="pointer-events-none fixed inset-0 z-30"
        animate={{
          background: `radial-gradient(400px at ${mousePosition.x}px ${mousePosition.y}px, ${
            theme === 'dark' 
              ? 'rgba(255, 0, 128, 0.07)'
              : 'rgba(0, 223, 216, 0.07)'
          }, transparent 70%)`
        }}
        transition={{ type: "spring", bounce: 0, duration: 0.3 }}
      />

      {/* Gradiente de fundo */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background/50 z-0" />
      
      <motion.div
        className="container mx-auto px-4 z-20 flex flex-col items-center justify-center text-center gap-8 mt-16"
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
            <motion.h1 
              className="text-4xl md:text-6xl lg:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500 relative whitespace-nowrap px-2 pb-2 pt-1"
            >
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.01 }}
              >
                {'Programadora de Software'.split('').map((char, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.2,
                      delay: index * 0.05,
                      type: "spring",
                      stiffness: 200,
                      damping: 10
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
                  scaleY: [1, 1.1, 1]
                }}
                transition={{
                  duration: 0.8,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
            </motion.h1>
          </div>
        </motion.div>

        <motion.p
          className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          Criando experiências digitais únicas e inovadoras com tecnologias modernas
        </motion.p>

        <motion.div
          className="flex gap-4 flex-wrap justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <Link href="/portfolio">
            <Button 
              size="lg"
              className="group relative overflow-hidden"
            >
              <span className="relative z-10">Ver Projetos</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-primary/50 to-purple-500/50"
                initial={{ x: "100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </Button>
          </Link>
          <Link href="/contato">
            <Button 
              size="lg" 
              variant="outline"
              className="group"
            >
              <span>Contato</span>
              <MousePointerClick className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </motion.div>

        <motion.div 
          className="flex gap-6 mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          {[GithubIcon, LinkedinIcon, TwitterIcon].map((Icon, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full"
              >
                <Icon className="w-5 h-5" />
              </Button>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Grid de fundo */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/90 to-background/50" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background/50" />
      </div>
    </section>
  );
}