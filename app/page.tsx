"use client";

import { About } from '@/components/sections/about';
import { Hero } from '@/components/sections/hero';
import { ContactForm } from '@/components/sections/contact-form';
import { Footer } from '@/components/footer-new';
import { Technologies } from '@/components/sections/technologies';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Hero />
      <About />
      <Technologies />
      
      {/* Contact Section */}
      <section id="contact" className="w-full py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/10 bg-[size:3rem_3rem] [mask-image:radial-gradient(white,transparent_85%)]" />
        
        <div className="container px-4 md:px-6 relative">
          <div className="max-w-2xl mx-auto text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary/80 to-primary/50">
              Vamos Criar Algo Incrível Juntos?
            </h2>
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
    </main>
  );
}