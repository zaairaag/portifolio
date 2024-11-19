import { setRequestLocale } from 'next-intl/server';
import { Hero } from '@/components/sections/hero';
import { About } from '@/components/sections/about';
import { ContactForm } from '@/components/sections/contact-form';

type Props = {
  params: { locale: string }
};

export default function Home({ params: { locale } }: Props) {
  setRequestLocale(locale);

  return (
    <main className="flex min-h-screen flex-col">
      <Hero />
      <div className="bg-gradient-to-b from-background via-background/95 to-background flex-1">
        <About />
        {/* Contact Section */}
        <section id="contact" className="w-full py-24 relative">
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
      </div>
    </main>
  );
}
