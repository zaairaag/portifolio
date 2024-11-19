'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { GithubIcon, LinkedinIcon, TwitterIcon, MousePointerClick, ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useRef, useEffect } from 'react';

export function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  useEffect(() => {
    // Previne scroll manual quando estiver na seção hero
    const handleWheel = (e: WheelEvent) => {
      const heroSection = document.getElementById('home');
      const aboutSection = document.getElementById('about');
      
      if (!heroSection || !aboutSection) return;
      
      const heroRect = heroSection.getBoundingClientRect();
      
      // Se estiver na seção hero e tentar rolar para baixo
      if (heroRect.top === 0 && e.deltaY > 0) {
        e.preventDefault();
        aboutSection.scrollIntoView({ behavior: 'smooth' });
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => window.removeEventListener('wheel', handleWheel);
  }, []);

  return (
    <section 
      ref={ref} 
      className="h-screen w-full flex items-center justify-center relative overflow-hidden pt-32" 
      id="home"
      style={{
        height: 'calc(100vh - 6rem)' // Ajusta para a altura da navbar
      }}
    >
      {/* Gradiente de fundo */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background/50 z-0" />
      
      <motion.div
        className="container mx-auto px-4 z-20 flex flex-col items-center justify-center text-center gap-8"
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
          <Button 
            size="lg"
            className="group relative overflow-hidden"
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <span className="relative z-10">Ver Projetos</span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-primary/50 to-purple-500/50"
              initial={{ x: "100%" }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            className="group"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <span>Contato</span>
            <MousePointerClick className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
          </Button>
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

      <motion.div
        className="absolute bottom-2 left-1/2 -translate-x-1/2 z-20"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
        style={{ opacity }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="cursor-pointer hover:text-primary transition-colors"
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <ArrowDown className="w-6 h-6" />
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