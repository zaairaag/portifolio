'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { GithubIcon, LinkedinIcon, TwitterIcon, MousePointerClick } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useRef, useEffect, useState } from 'react';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { useTranslations } from 'next-intl';
import { TypeAnimation } from 'react-type-animation';

export function Hero() {
  const t = useTranslations('hero');
  const ref = useRef<HTMLElement>(null);
  const { theme } = useTheme();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

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
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        style={{ opacity: opacity }}
      >
        <motion.div
          className="relative"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <motion.div 
            className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-purple-500/20 rounded-full blur-xl"
            animate={{
              transform: ['scale(1) rotate(0deg)', 'scale(1.01) rotate(-0.3deg)']
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          />
          <div className="relative overflow-hidden">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500 relative whitespace-nowrap px-2 pb-2 pt-1">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                {t('title')} {t('name')}
              </motion.span>
            </h1>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-2xl md:text-3xl lg:text-4xl text-muted-foreground mt-2"
            >
              <TypeAnimation
                sequence={[
                  500,
                  t('role'),
                ]}
                wrapper="span"
                speed={50}
                cursor={true}
              />
            </motion.div>
          </div>
        </motion.div>

        <motion.p
          className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {t('subtitle')}
        </motion.p>

        <motion.div
          className="flex gap-4 flex-wrap justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <Button
            size="lg"
            className="group relative overflow-hidden"
            asChild
          >
            <Link href="/portfolio">
              <span className="relative z-10">{t('cta.projects')}</span>
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-primary/50 to-purple-500/50"
                initial={{ x: "100%" }}
                whileHover={{ x: "0%" }}
                transition={{ duration: 0.3 }}
              />
            </Link>
          </Button>

          <Button
            variant="outline"
            size="lg"
            className="group"
            asChild
          >
            <Link href="/contato">
              <span>{t('cta.contact')}</span>
              <MousePointerClick className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </motion.div>

        <motion.div 
          className="flex gap-6 mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full"
            asChild
          >
            <Link href={t('social.github')} target="_blank">
              <GithubIcon className="w-5 h-5" />
            </Link>
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="rounded-full"
            asChild
          >
            <Link href={t('social.linkedin')} target="_blank">
              <LinkedinIcon className="w-5 h-5" />
            </Link>
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="rounded-full"
            asChild
          >
            <Link href={t('social.twitter')} target="_blank">
              <TwitterIcon className="w-5 h-5" />
            </Link>
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}