"use client";

import { ContactForm } from '@/components/sections/contact-form';
import { Footer } from '@/components/footer-new';

export default function ContatoPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <div className="bg-gradient-to-b from-background via-background/95 to-background flex-1">
        <section className="w-full py-24 relative">
          <div className="container px-4 md:px-6 relative">
            <div className="max-w-2xl mx-auto text-center mb-16 space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary/80 to-primary/50">
                Vamos Criar Algo Incrível Juntos?
              </h1>
              <p className="text-xl text-muted-foreground">
                Estou sempre aberta a novas oportunidades e adoraria ouvir sobre seu projeto.
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <ContactForm />
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </main>
  );
}
