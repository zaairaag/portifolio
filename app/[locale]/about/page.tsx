'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useTranslations } from 'next-intl';

// Componente do background animado
const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Gradiente principal */}
      <div className="absolute inset-0 bg-gradient-to-br from-background to-background/50" />
      
      {/* Formas geométricas animadas */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/5 blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
      
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-secondary/5 blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          x: [0, -50, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
      
      <motion.div
        className="absolute top-1/2 left-1/2 w-96 h-96 rounded-full bg-accent/5 blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          x: [-30, 30, -30],
          y: [30, -30, 30],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
    </div>
  );
};

const experiences = [
  {
    id: 'impar_current',
    skills: ["SharePoint", "Node.js", "React", "TypeScript", "SPFx"]
  },
  {
    id: 'deloitte',
    skills: ["Marketing Cloud", "Salesforce", "Adobe Experience Manager (AEM)"]
  },
  {
    id: 'impar_previous',
    skills: ["SharePoint", "React", "Vue.js", "AngularJS", "TypeScript", "SPFx", "JavaScript", "jQuery", "HTML", "CSS"]
  }
];

const skillCategories = [
  {
    name: "frontend",
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
    name: "backend",
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
    name: "microsoft",
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
    name: "cloud",
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
    name: "marketing",
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
  const t = useTranslations('about');

  return (
    <>
      <AnimatedBackground />
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
                {t('title')}
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
                  {t('intro.role')}
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
                  {t('intro.description')}
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
                {t('experience.title')}
              </motion.h2>

              <div className="relative space-y-8">
                {/* Linha vertical do tempo */}
                <div className="absolute left-0 md:left-1/2 h-full w-px bg-border transform -translate-x-1/2" />

                {experiences.map((exp, index) => {
                  const expData = t.raw(`experience.items.${exp.id}`);
                  if (!expData) return null;

                  return (
                    <motion.div
                      key={exp.id}
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
                          <div className="space-y-6">
                            {/* Cabeçalho da empresa */}
                            <div className="space-y-2">
                              <h3 className="text-xl font-semibold">{expData.company}</h3>
                              <div className="text-muted-foreground">
                                <p className="text-sm">{expData.period} · {expData.duration}</p>
                                <p className="text-sm">{expData.location}</p>
                              </div>
                            </div>

                            {/* Roles (se existirem) */}
                            <div className="space-y-4">
                              <div className="space-y-1">
                                <h4 className="font-medium">{expData.role}</h4>
                                {expData.period_role && (
                                  <p className="text-sm text-muted-foreground">{expData.period_role} · {expData.duration_role}</p>
                                )}
                                {expData.type && (
                                  <p className="text-sm text-muted-foreground">{expData.type}</p>
                                )}
                              </div>

                              {expData.achievements && expData.achievements.length > 0 && (
                                <ul className="list-disc list-inside space-y-1 text-sm">
                                  {expData.achievements.map((achievement: string, i: number) => (
                                    <li key={i} className="text-muted-foreground">{achievement}</li>
                                  ))}
                                </ul>
                              )}

                              <div className="flex flex-wrap gap-2">
                                {exp.skills.map((skill, i) => (
                                  <Badge key={i} variant="secondary">{skill}</Badge>
                                ))}
                              </div>
                            </div>
                          </div>
                        </Card>
                      </div>
                    </motion.div>
                  );
                })}
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
                {t('skills.title')}
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
                          {t(`skills.categories.${category.name}`)}
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
    </>
  );
}
