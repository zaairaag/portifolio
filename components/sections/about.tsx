"use client";

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { HeartIcon, RocketIcon, CodeIcon } from 'lucide-react';
import { technologies } from '@/data/technologies';
import { useTranslations } from 'next-intl';

const experiences = [
  {
    year: '2019 - Presente',
    role: 'Desenvolvedora de Software',
    company: 'Ímpar',
    description: 'Programadora de Software (2022 - Presente) · Analista de Sistema (2020 - 2022) · Desenvolvedora Front-end (2019 - 2020)',
  },
  {
    year: '2022',
    role: 'Analista de Negócios',
    company: 'Deloitte Digital',
    description: 'Tempo integral · 4 meses',
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export function About() {
  const t = useTranslations('about');

  return (
    <section id="about" className="w-full min-h-screen py-24 relative">
      {/* Content */}
      <div className="container relative px-4 md:px-6 mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-5xl mx-auto"
        >
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16 relative"
          >
            <motion.div
              className="inline-block"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="p-3 rounded-xl bg-primary/10 backdrop-blur-sm mb-4">
                <HeartIcon className="w-6 h-6 text-primary" />
              </div>
            </motion.div>
            <motion.h2
              className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/50"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              {t('title')}
            </motion.h2>
            <motion.p
              className="text-xl font-medium text-high-contrast max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              {t('subtitle')}
            </motion.p>
          </motion.div>

          {/* Main Content Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Left Column - Journey */}
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="space-y-8"
            >
              <Card className="p-8 backdrop-blur-md bg-background/50 border-primary/10">
                <motion.div variants={item}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 rounded-xl bg-primary/10">
                      <RocketIcon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-2xl font-semibold text-high-contrast">{t('journey.title')}</h3>
                  </div>
                  <p className="text-base text-high-contrast font-medium leading-relaxed mb-6">
                    {t('journey.description')}
                  </p>
                  <div className="relative pl-4 border-l-2 border-primary/30 space-y-6">
                    {experiences.map((exp, index) => (
                      <motion.div
                        key={exp.year}
                        variants={item}
                        className="relative"
                      >
                        <div className="pl-2">
                          <div className="flex items-center gap-3 mb-2">
                            <h4 className="font-semibold text-lg text-high-contrast">{exp.role}</h4>
                            <Badge variant="outline" className="bg-primary/5">
                              {exp.year}
                            </Badge>
                          </div>
                          <div className="text-primary font-medium mb-2">{exp.company}</div>
                          <p className="text-high-contrast/90 mb-3">{exp.description}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </Card>
            </motion.div>

            {/* Right Column - Technologies */}
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="space-y-8"
            >
              <Card className="p-8 backdrop-blur-md bg-background/50 border-primary/10">
                <motion.div variants={item}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 rounded-xl bg-primary/10">
                      <CodeIcon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-2xl font-semibold text-high-contrast">{t('technologies.title')}</h3>
                  </div>
                  <div className="space-y-8">
                    {technologies.map((category) => (
                      <motion.div
                        key={category.category}
                        variants={item}
                        className="space-y-3"
                      >
                        <h4 className="text-sm font-semibold text-high-contrast/90 pl-2 border-l-2 border-primary">
                          {category.category}
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {category.items.map((tech) => (
                            <motion.div
                              key={tech.name}
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              <Badge 
                                variant="outline" 
                                className="bg-background/50 backdrop-blur-sm hover:bg-primary/5 transition-all duration-300"
                                style={{ 
                                  borderColor: `${tech.color}40`,
                                  boxShadow: `0 0 20px ${tech.color}10`
                                }}
                              >
                                <span 
                                  className="w-2 h-2 rounded-full mr-1.5"
                                  style={{ backgroundColor: tech.color }}
                                />
                                {tech.name}
                              </Badge>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}