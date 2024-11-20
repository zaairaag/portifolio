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
    <main className="min-h-screen bg-gradient-to-b from-background via-background to-accent/5">
      <About />
    </main>
  );
}
