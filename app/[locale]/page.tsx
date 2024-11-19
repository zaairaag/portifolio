import { Hero } from '@/components/sections/hero';
import { About } from '@/components/sections/about';
import { Contact } from '@/components/sections/contact';
import { Footer } from '@/components/footer';

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
