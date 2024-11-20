import { About } from '@/components/sections/about';
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sobre Mim | Zaira Miranda - Desenvolvedora Full Stack",
  description: "Conheça minha jornada profissional, habilidades técnicas e experiência em desenvolvimento web moderno e SharePoint.",
  keywords: [
    "desenvolvedora full stack",
    "sharepoint",
    "react",
    "typescript",
    "node.js",
    "desenvolvimento web",
    "Zaira Miranda"
  ],
};

export default function SobrePage() {
  return (
    <main className="container relative pt-6 pb-16 md:pt-8">
      <About />
    </main>
  );
}
