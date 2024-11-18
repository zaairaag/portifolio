"use client";

import { motion, useScroll, useTransform } from 'framer-motion';
import { GithubIcon, LinkedinIcon, TwitterIcon, MousePointerClick } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useRef } from 'react';

export function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={ref} className="min-h-screen w-full flex items-center justify-center relative overflow-hidden">
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-primary/20 via-purple-500/10 to-background"
        style={{ y, opacity }}
      />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4 z-10 flex flex-col items-center text-center gap-8"
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
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500 relative">
            Frontend Developer
          </h1>
        </motion.div>

        <motion.p
          className="text-xl md:text-2xl text-muted-foreground max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          Crafting beautiful, interactive web experiences with modern technologies
        </motion.p>

        <motion.div
          className="flex gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <Button 
            size="lg"
            className="group relative overflow-hidden"
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <span className="relative z-10">View Projects</span>
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
            <span>Contact Me</span>
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
                className="rounded-full hover:text-primary hover:bg-primary/10 transition-colors"
              >
                <Icon className="h-6 w-6" />
              </Button>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <motion.div
            className="w-1 h-2 bg-primary rounded-full mt-2"
            animate={{
              opacity: [0, 1, 0],
              y: [0, 10, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </div>
      </motion.div>
    </section>
  );
}