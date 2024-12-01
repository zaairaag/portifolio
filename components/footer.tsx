"use client";

import Link from "next/link";
import { 
  Github as GithubIcon, 
  Linkedin as LinkedinIcon, 
  ArrowUp as ArrowUpIcon 
} from "lucide-react";
import { Button } from "./ui/button";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/zaira-goncalves/',
      icon: LinkedinIcon,
      color: 'hover:text-[#0077b5]',
      username: '@zairagoncalves'
    },
    {
      name: 'GitHub',
      href: 'https://github.com/zaairaag',
      icon: GithubIcon,
      color: 'hover:text-[#333]',
      username: '@zaairaag'
    }
  ];

  return (
    <footer className="relative border-t border-border/40 bg-background/50 backdrop-blur-sm">
      {/* Botão Voltar ao Topo - Fixo no canto direito */}
      <Button
        variant="outline"
        size="icon"
        className="fixed md:absolute right-4 bottom-4 md:-top-6 h-10 w-10 rounded-full border shadow-md bg-background hover:bg-primary hover:text-primary-foreground transition-all duration-300 z-50"
        onClick={scrollToTop}
      >
        <ArrowUpIcon className="h-4 w-4" />
      </Button>

      <div className="container mx-auto px-4 py-4 md:py-6">
        <div className="flex flex-col md:grid md:grid-cols-3 items-center gap-4 md:gap-0">
          {/* Links à esquerda */}
          <div className="flex items-center gap-4 order-2 md:order-1">
            <Link 
              href="/privacidade"
              className="text-xs text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              Privacidade
            </Link>
            <span className="text-border/60">•</span>
            <Link 
              href="/termos"
              className="text-xs text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              Termos
            </Link>
            <span className="text-border/60">•</span>
            <Link 
              href="/sitemap"
              className="text-xs text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              Sitemap
            </Link>
          </div>

          {/* Copyright centralizado */}
          <div className="flex justify-center order-1 md:order-2">
            <span className="text-xs text-muted-foreground">
              {currentYear} Zaíra Gonçalves
            </span>
          </div>

          {/* Redes Sociais à direita */}
          <div className="flex items-center justify-center md:justify-end gap-2 order-3">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`group p-2 ${link.color} transition-colors duration-200`}
                aria-label={link.name}
              >
                <link.icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
