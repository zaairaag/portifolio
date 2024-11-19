'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function SobrePage() {
  return (
    <main className="flex min-h-screen flex-col">
      <div className="flex-1 py-24">
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-12"
          >
            {/* Hero Section */}
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-1 space-y-4">
                <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500">
                  Sobre Mim
                </h1>
                <p className="text-xl text-muted-foreground">
                  Desenvolvedora Full Stack apaixonada por criar soluções inovadoras e impactantes.
                </p>
              </div>
              <div className="relative w-64 h-64 md:w-80 md:h-80">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-purple-500/20 blur-2xl" />
                <Image
                  src="/profile.jpg"
                  alt="Zaíra Gonçalves"
                  width={320}
                  height={320}
                  className="rounded-full relative border-2 border-border"
                />
              </div>
            </div>

            {/* Bio Section */}
            <section className="space-y-6">
              <h2 className="text-2xl font-bold">Minha História</h2>
              <div className="prose prose-gray dark:prose-invert max-w-none">
                <p>
                  Com mais de X anos de experiência em desenvolvimento web, tenho me dedicado a criar soluções 
                  que não apenas resolvem problemas, mas também proporcionam experiências excepcionais aos usuários.
                </p>
                <p>
                  Minha jornada começou com [sua história aqui] e desde então tenho trabalhado com diversas 
                  tecnologias e frameworks modernos, sempre buscando aprender e evoluir.
                </p>
              </div>
            </section>

            {/* Skills Section */}
            <section className="space-y-6">
              <h2 className="text-2xl font-bold">Habilidades</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <Card className="p-6 space-y-4">
                  <h3 className="font-semibold">Frontend</h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge>React</Badge>
                    <Badge>Next.js</Badge>
                    <Badge>TypeScript</Badge>
                    <Badge>Tailwind CSS</Badge>
                  </div>
                </Card>
                <Card className="p-6 space-y-4">
                  <h3 className="font-semibold">Backend</h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge>Node.js</Badge>
                    <Badge>Python</Badge>
                    <Badge>SQL</Badge>
                    <Badge>REST APIs</Badge>
                  </div>
                </Card>
                <Card className="p-6 space-y-4">
                  <h3 className="font-semibold">Ferramentas</h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge>Git</Badge>
                    <Badge>Docker</Badge>
                    <Badge>AWS</Badge>
                    <Badge>CI/CD</Badge>
                  </div>
                </Card>
              </div>
            </section>

            {/* Experience Section */}
            <section className="space-y-6">
              <h2 className="text-2xl font-bold">Experiência</h2>
              <div className="space-y-8">
                {/* Add your experience items here */}
                <Card className="p-6 space-y-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-semibold">Cargo</h3>
                      <p className="text-muted-foreground">Empresa</p>
                    </div>
                    <Badge variant="outline">2022 - Presente</Badge>
                  </div>
                  <p className="text-muted-foreground">
                    Descrição das responsabilidades e conquistas...
                  </p>
                </Card>
                {/* Add more experience cards as needed */}
              </div>
            </section>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
