import { Hero } from '@/components/sections/hero';
import { About } from '@/components/sections/about';
import { Contact } from '@/components/sections/contact';

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Contact />
    </main>
  );
}
