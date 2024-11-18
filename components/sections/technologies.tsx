'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Progress } from '@/components/ui/progress';

interface Technology {
  name: string;
  percentage: number;
}

export function Technologies() {
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchTechnologies() {
      try {
        const response = await fetch('/api/technologies');
        const { data } = await response.json();
        setTechnologies(data);
      } catch (error) {
        console.error('Erro ao carregar tecnologias:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchTechnologies();
  }, []);

  return (
    <section id="technologies" className="py-20 relative">
      <motion.div 
        className="absolute inset-0 opacity-10"
        animate={{
          background: [
            "radial-gradient(circle at 0% 0%, var(--primary) 0%, transparent 70%)",
            "radial-gradient(circle at 100% 100%, var(--primary) 0%, transparent 70%)",
            "radial-gradient(circle at 0% 0%, var(--primary) 0%, transparent 70%)",
          ]
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/50 mb-4">
            Tecnologias
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Principais tecnologias que utilizo no desenvolvimento de soluções.
          </p>
        </motion.div>

        <motion.div
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="max-w-3xl mx-auto space-y-6"
        >
          {loading ? (
            // Skeleton loading
            Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="animate-pulse">
                <div className="h-4 bg-muted rounded w-24 mb-2" />
                <div className="h-2 bg-muted rounded" />
              </div>
            ))
          ) : (
            technologies.map((tech) => (
              <motion.div
                key={tech.name}
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  show: { opacity: 1, x: 0 }
                }}
                className="space-y-2"
              >
                <div className="flex justify-between items-center">
                  <span className="font-medium">{tech.name}</span>
                  <span className="text-sm text-muted-foreground">{tech.percentage}%</span>
                </div>
                <Progress value={tech.percentage} className="h-2" />
              </motion.div>
            ))
          )}
        </motion.div>
      </div>
    </section>
  );
}
