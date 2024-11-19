'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check, ArrowRight } from 'lucide-react';

const services = [
  {
    title: 'Desenvolvimento Web',
    description: 'Criação de sites e aplicações web modernas e responsivas.',
    features: [
      'Design responsivo e moderno',
      'Otimização para SEO',
      'Integração com APIs',
      'Performance e acessibilidade',
    ],
    price: 'A partir de R$ X',
    highlight: false,
  },
  {
    title: 'Aplicações Full Stack',
    description: 'Desenvolvimento completo de aplicações web complexas.',
    features: [
      'Frontend e Backend integrados',
      'Banco de dados otimizado',
      'Autenticação e segurança',
      'Escalabilidade e manutenção',
    ],
    price: 'A partir de R$ X',
    highlight: true,
  },
  {
    title: 'Consultoria Técnica',
    description: 'Consultoria especializada em desenvolvimento de software.',
    features: [
      'Análise de arquitetura',
      'Revisão de código',
      'Melhores práticas',
      'Mentoria técnica',
    ],
    price: 'R$ X/hora',
    highlight: false,
  },
];

export default function ServicosPage() {
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
            <div className="text-center space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500">
                Meus Serviços
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Soluções personalizadas para suas necessidades de desenvolvimento.
              </p>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className={`p-6 space-y-6 relative overflow-hidden ${
                    service.highlight ? 'border-primary' : ''
                  }`}>
                    {service.highlight && (
                      <div className="absolute top-0 right-0 bg-primary text-primary-foreground text-xs px-3 py-1 rounded-bl">
                        Popular
                      </div>
                    )}
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold">{service.title}</h3>
                      <p className="text-muted-foreground">{service.description}</p>
                    </div>

                    <ul className="space-y-3">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2">
                          <Check className="w-4 h-4 text-primary" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="space-y-4">
                      <p className="text-lg font-bold">{service.price}</p>
                      <Button className="w-full group" variant={service.highlight ? 'default' : 'outline'}>
                        Solicitar Orçamento
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* FAQ Section */}
            <section className="space-y-8 max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold text-center">Perguntas Frequentes</h2>
              <div className="space-y-4">
                <Card className="p-6">
                  <h3 className="font-semibold">Como funciona o processo de desenvolvimento?</h3>
                  <p className="text-muted-foreground mt-2">
                    O processo começa com uma consulta inicial para entender suas necessidades,
                    seguido por planejamento, desenvolvimento, testes e implantação.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="font-semibold">Qual o prazo médio de entrega?</h3>
                  <p className="text-muted-foreground mt-2">
                    O prazo varia de acordo com a complexidade do projeto. Projetos simples
                    podem levar algumas semanas, enquanto projetos mais complexos podem levar meses.
                  </p>
                </Card>
                {/* Add more FAQ items as needed */}
              </div>
            </section>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
