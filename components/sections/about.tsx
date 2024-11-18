"use client";

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { HeartIcon, RocketIcon, CodeIcon } from 'lucide-react';
import { technologies } from '@/data/technologies';

const experiences = [
  {
    year: '2023',
    role: 'Desenvolvedora Front-end',
    company: 'Banco do Brasil',
    description: 'Desenvolvimento de soluções corporativas utilizando React, TypeScript e SharePoint.',
    highlights: [
      'Desenvolvimento de componentes reutilizáveis',
      'Integração com APIs REST',
      'Otimização de performance',
      'Testes automatizados'
    ]
  },
  {
    year: '2022',
    role: 'Desenvolvedora WordPress',
    company: 'Freelancer',
    description: 'Desenvolvimento de sites e e-commerces personalizados com WordPress.',
    highlights: [
      'Temas customizados',
      'Plugins sob demanda',
      'WooCommerce',
      'SEO e otimização'
    ]
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
  return (
    <section id="about" className="w-full min-h-screen py-24 relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background/50" />
      
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
              Sobre Mim
            </motion.h2>
            <motion.p
              className="text-xl font-medium text-high-contrast max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Desenvolvedora apaixonada por criar experiências digitais incríveis e resolver problemas complexos.
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
                    <h3 className="text-2xl font-semibold text-high-contrast">Minha Jornada</h3>
                  </div>
                  <p className="text-base text-high-contrast font-medium leading-relaxed mb-6">
                    Desenvolvedora Front-end com mais de 2 anos de experiência, especializada em React, TypeScript e SharePoint. 
                    Atualmente focada no desenvolvimento de soluções corporativas para o Banco do Brasil.
                  </p>
                  <div className="relative pl-4 border-l-2 border-primary/30 space-y-6">
                    {experiences.map((exp, index) => (
                      <motion.div
                        key={exp.year}
                        variants={item}
                        className="relative"
                      >
                        <div className="absolute -left-[17px] top-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                          <div className="w-3 h-3 rounded-full bg-primary" />
                        </div>
                        <div className="pl-6">
                          <div className="flex items-center gap-3 mb-2">
                            <h4 className="font-semibold text-lg text-high-contrast">{exp.role}</h4>
                            <Badge variant="outline" className="bg-primary/5">
                              {exp.year}
                            </Badge>
                          </div>
                          <div className="text-primary font-medium mb-2">{exp.company}</div>
                          <p className="text-high-contrast/90 mb-3">{exp.description}</p>
                          <ul className="grid grid-cols-2 gap-2">
                            {exp.highlights.map((highlight, i) => (
                              <motion.li
                                key={i}
                                variants={item}
                                className="flex items-center gap-2 text-sm text-high-contrast/80"
                              >
                                <span className="w-1.5 h-1.5 rounded-full bg-primary/60" />
                                {highlight}
                              </motion.li>
                            ))}
                          </ul>
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
                    <h3 className="text-2xl font-semibold text-high-contrast">Tecnologias</h3>
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

              {/* Additional Stats or Info Cards */}
              <div className="grid grid-cols-2 gap-4">
                <motion.div variants={item}>
                  <Card className="p-6 backdrop-blur-md bg-background/50 border-primary/10">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary mb-2">2+</div>
                      <div className="text-sm text-high-contrast/80">Anos de Experiência</div>
                    </div>
                  </Card>
                </motion.div>
                <motion.div variants={item}>
                  <Card className="p-6 backdrop-blur-md bg-background/50 border-primary/10">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary mb-2">20+</div>
                      <div className="text-sm text-high-contrast/80">Projetos Entregues</div>
                    </div>
                  </Card>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}