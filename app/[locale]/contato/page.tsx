'use client';

import { motion } from 'framer-motion';
import { ContactForm } from '@/components/sections/contact-form';

export default function ContatoPage() {
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
                Vamos Criar Algo Incrível Juntos?
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Estou sempre aberta a novas oportunidades e adoraria ouvir sobre seu projeto.
              </p>
            </div>

            {/* Contact Form */}
            <div className="max-w-4xl mx-auto">
              <ContactForm />
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
