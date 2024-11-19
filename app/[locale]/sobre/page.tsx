'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Building2, Calendar, MapPin, Star } from 'lucide-react';

const experiences = [
  {
    role: "Programadora de Software",
    company: "Ímpar",
    period: "ago de 2022 - o momento",
    duration: "2 anos 4 meses",
    location: "Rio de Janeiro",
    type: "Tempo integral",
    achievements: [
      "Desenvolvimento e manutenção de soluções em SharePoint e Node.js",
      "Implementação de webparts modernas usando SPFx e React",
      "Integração com APIs externas e desenvolvimento de microsserviços"
    ],
    skills: ["SharePoint", "Node.js", "React", "TypeScript", "SPFx"]
  },
  {
    role: "Analista de Negócios",
    company: "Deloitte Digital",
    period: "mai de 2022 - ago de 2022",
    duration: "4 meses",
    location: "Rio de Janeiro, Brasil",
    type: "Tempo integral · Remota",
    achievements: [
      "Desenvolvimento de Templates de Email Marketing",
      "Implementação de Componentes na Plataforma AEM"
    ],
    skills: ["Marketing Cloud", "Salesforce", "Adobe Experience Manager (AEM)"]
  },
  {
    role: "Analista de Sistema",
    company: "Ímpar",
    period: "out de 2020 - mai de 2022",
    duration: "1 ano 8 meses",
    location: "Rio de Janeiro, Brasil",
    type: "Tempo integral",
    achievements: [
      "Desenvolvimento de páginas dinâmicas em SharePoint 2013 e Modern",
      "Implementação de soluções usando React, Vue.js e AngularJS",
      "Criação de webparts personalizadas com SPFx e TypeScript"
    ],
    skills: ["SharePoint", "React", "Vue.js", "AngularJS", "TypeScript", "SPFx"]
  },
  {
    role: "Desenvolvedora Front-end",
    company: "Ímpar",
    period: "dez de 2019 - out de 2020",
    duration: "11 meses",
    location: "Rio de Janeiro e Região, Brasil",
    type: "Estágio",
    achievements: [
      "Desenvolvimento de interfaces responsivas em SharePoint",
      "Manutenção e otimização de páginas existentes",
      "Implementação de soluções com JavaScript e jQuery"
    ],
    skills: ["SharePoint", "JavaScript", "jQuery", "HTML", "CSS"]
  }
];

const skillCategories = [
  {
    name: "Frontend",
    skills: [
      "React.js",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Vue.js",
      "AngularJS",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Bootstrap",
      "jQuery"
    ],
    gradient: "from-blue-500 to-cyan-400"
  },
  {
    name: "Backend",
    skills: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "SQL",
      "MongoDB"
    ],
    gradient: "from-green-500 to-emerald-400"
  },
  {
    name: "Microsoft",
    skills: [
      "SharePoint",
      "SPFx",
      "Power Platform",
      "Power Automate",
      "Power Apps"
    ],
    gradient: "from-indigo-500 to-purple-400"
  },
  {
    name: "Cloud & DevOps",
    skills: [
      "Git",
      "GitHub",
      "Azure DevOps",
      "Docker",
      "CI/CD"
    ],
    gradient: "from-orange-500 to-amber-400"
  },
  {
    name: "Marketing Digital",
    skills: [
      "Marketing de Conteúdo",
      "SEO",
      "Adobe Experience Manager",
      "Marketing Cloud",
      "Salesforce"
    ],
    gradient: "from-pink-500 to-rose-400"
  }
];

export default function SobrePage() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24 space-y-16">
      {/* Hero Section */}
      <section className="max-w-3xl mx-auto">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          {/* Decorative element */}
          <motion.div 
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ 
              duration: 0.8,
              ease: "easeOut"
            }}
            className="absolute -top-4 -left-4 w-16 h-16 bg-primary/10 rounded-full blur-xl" 
          />
          
          <div className="relative space-y-8 pt-12">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                ease: "easeOut"
              }}
              className="text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-primary to-primary/50 bg-clip-text text-transparent"
            >
              Sobre Mim
            </motion.h1>
            
            <div className="space-y-6">
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 0.2,
                  ease: "easeOut"
                }}
                className="text-xl md:text-2xl font-medium"
              >
                Desenvolvedora Full Stack com mais de 4 anos de experiência em desenvolvimento web e soluções empresariais.
              </motion.p>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 0.4,
                  ease: "easeOut"
                }}
                className="text-lg text-muted-foreground leading-relaxed"
              >
                Especializada em criar soluções web modernas e escaláveis, com foco em SharePoint, React e Node.js. 
                Possuo sólida experiência no desenvolvimento de aplicações corporativas e interfaces responsivas 
                que proporcionam excelente experiência ao usuário.
              </motion.p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Conteúdo Principal */}
      <div className="container px-4 mx-auto pb-24">
        <div className="max-w-5xl mx-auto space-y-24">
          {/* Experiência Profissional */}
          <section className="max-w-4xl mx-auto">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold mb-12 text-center"
            >
              Experiência Profissional
            </motion.h2>

            <div className="relative space-y-8">
              {/* Linha vertical do tempo */}
              <div className="absolute left-0 md:left-1/2 h-full w-px bg-border transform -translate-x-1/2" />

              {experiences.map((exp, index) => (
                <motion.div
                  key={`${exp.company}-${exp.role}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative grid md:grid-cols-2 gap-8 ${
                    index % 2 === 0 ? 'md:text-right' : ''
                  }`}
                >
                  {/* Círculo na linha do tempo */}
                  <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-primary rounded-full transform -translate-x-1/2 mt-6">
                    <div className="absolute w-8 h-8 bg-primary/20 rounded-full -m-2 animate-pulse" />
                  </div>

                  {/* Conteúdo */}
                  <div className={`md:col-span-1 ${
                    index % 2 === 0 ? 'md:col-start-1' : 'md:col-start-2'
                  }`}>
                    <Card className="p-6 hover:shadow-lg transition-shadow">
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <h3 className="text-xl font-semibold">{exp.role}</h3>
                          <div className="text-muted-foreground">
                            <p className="font-medium">{exp.company}</p>
                            <p className="text-sm">{exp.type}</p>
                            <p className="text-sm">{exp.period} · {exp.duration}</p>
                            <p className="text-sm">{exp.location}</p>
                          </div>
                        </div>

                        <ul className="list-disc list-inside space-y-1 text-sm">
                          {exp.achievements.map((achievement, i) => (
                            <li key={i} className="text-muted-foreground">{achievement}</li>
                          ))}
                        </ul>

                        <div className="flex flex-wrap gap-2">
                          {exp.skills.map((skill, i) => (
                            <Badge key={i} variant="secondary">{skill}</Badge>
                          ))}
                        </div>
                      </div>
                    </Card>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Skills Section */}
          <section className="max-w-4xl mx-auto">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold mb-12 text-center"
            >
              Principais Tecnologias
            </motion.h2>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {skillCategories.map((category, index) => (
                <motion.div
                  key={category.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full overflow-hidden group">
                    <div className="p-6 space-y-4 relative">
                      {/* Gradient background with animation */}
                      <div className="absolute inset-0 bg-gradient-to-br opacity-10 group-hover:opacity-20 transition-opacity duration-300 ease-out"
                        style={{
                          background: `linear-gradient(to bottom right, var(--${category.gradient.split(' ')[1]}) 0%, var(--${category.gradient.split(' ')[3]}) 100%)`
                        }}
                      />
                      
                      <h3 className={`text-xl font-semibold bg-gradient-to-r ${category.gradient} bg-clip-text text-transparent`}>
                        {category.name}
                      </h3>
                      
                      <div className="flex flex-wrap gap-2 relative">
                        {category.skills.map((skill, i) => (
                          <Badge 
                            key={i} 
                            variant="secondary"
                            className={`
                              hover:bg-gradient-to-r ${category.gradient} 
                              hover:text-white hover:border-transparent 
                              transition-all duration-300
                              hover:scale-105 hover:shadow-md
                            `}
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
