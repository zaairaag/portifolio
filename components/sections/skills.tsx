"use client";

import { motion, useScroll, useTransform } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { useRef } from 'react';

interface Skill {
  name: string;
  level: number;
  icon: string;
  color: string;
}

const skills: { category: string; items: Skill[] }[] = [
  {
    category: 'Frontend Development',
    items: [
      { name: 'React', level: 95, icon: '⚛️', color: '#61DAFB' },
      { name: 'Next.js', level: 90, icon: '▲', color: '#000000' },
      { name: 'TypeScript', level: 85, icon: '📘', color: '#3178C6' },
      { name: 'Tailwind CSS', level: 90, icon: '🎨', color: '#06B6D4' },
    ],
  },
  {
    category: 'Backend Development',
    items: [
      { name: 'Node.js', level: 85, icon: '🟩', color: '#339933' },
      { name: 'PHP', level: 80, icon: '🐘', color: '#777BB4' },
      { name: 'MySQL', level: 75, icon: '🗄️', color: '#4479A1' },
      { name: 'MongoDB', level: 70, icon: '🍃', color: '#47A248' },
    ],
  },
  {
    category: 'Tools & Platforms',
    items: [
      { name: 'Git', level: 90, icon: '📦', color: '#F05032' },
      { name: 'Docker', level: 75, icon: '🐳', color: '#2496ED' },
      { name: 'AWS', level: 70, icon: '☁️', color: '#FF9900' },
      { name: 'Figma', level: 85, icon: '🎯', color: '#F24E1E' },
    ],
  },
];

export function Skills() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [0.8, 1]);

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      <motion.div 
        className="absolute inset-0 opacity-20"
        animate={{
          background: [
            "radial-gradient(circle at 100% 0%, var(--primary) 0%, transparent 50%)",
            "radial-gradient(circle at 0% 100%, var(--primary) 0%, transparent 50%)",
            "radial-gradient(circle at 100% 0%, var(--primary) 0%, transparent 50%)",
          ]
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />

      <div className="container mx-auto px-4" ref={containerRef}>
        <motion.div
          style={{ opacity, scale }}
          className="max-w-4xl mx-auto"
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Skills & Expertise
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((category, categoryIndex) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: categoryIndex * 0.2 }}
              >
                <Card className="p-6 bg-background/50 backdrop-blur-sm h-full">
                  <h3 className="text-xl font-semibold mb-6">
                    {category.category}
                  </h3>
                  <div className="space-y-6">
                    {category.items.map((skill, index) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: (categoryIndex * 0.2) + (index * 0.1) }}
                        className="group"
                        whileHover={{ scale: 1.02 }}
                      >
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-2xl" role="img" aria-label={skill.name}>
                            {skill.icon}
                          </span>
                          <span className="font-medium">{skill.name}</span>
                          <span className="ml-auto text-sm text-muted-foreground">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="relative">
                          <Progress 
                            value={0} 
                            className="h-2 bg-primary/10"
                          />
                          <motion.div
                            className="absolute top-0 left-0 h-2 rounded-full"
                            style={{ backgroundColor: skill.color }}
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ 
                              duration: 1,
                              delay: (categoryIndex * 0.2) + (index * 0.1),
                              ease: "easeOut"
                            }}
                          />
                          <motion.div
                            className="absolute top-0 left-0 h-2 rounded-full bg-white/20"
                            initial={{ width: 0, opacity: 0 }}
                            whileHover={{ 
                              width: `${skill.level}%`,
                              opacity: 1,
                              transition: { duration: 0.3 }
                            }}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}