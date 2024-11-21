"use client";

import Link from "next/link";
import { GithubIcon, LinkedinIcon, InstagramIcon, ArrowUpIcon } from "lucide-react";
import { Button } from "./ui/button";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-border/40 bg-background/50 backdrop-blur-sm">
      {/* Botão Voltar ao Topo - Fixo no canto direito */}
      <Button
        variant="outline"
        size="icon"
        className="absolute right-4 -top-6 h-10 w-10 rounded-full border shadow-md bg-background hover:bg-primary hover:text-primary-foreground transition-all duration-300"
        onClick={scrollToTop}
      >
        <ArrowUpIcon className="h-4 w-4" />
      </Button>

      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-3 items-center text-xs">
          {/* Links à esquerda */}
          <div className="flex items-center gap-4">
            <Link 
              href="/privacidade"
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              Privacidade
            </Link>
            <span className="text-border/60">•</span>
            <Link 
              href="/termos"
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              Termos
            </Link>
            <span className="text-border/60">•</span>
            <Link 
              href="/sitemap"
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              Sitemap
            </Link>
          </div>

          {/* Copyright centralizado */}
          <div className="flex justify-center">
            <span className="text-muted-foreground">
              {currentYear} Zaíra Gonçalves
            </span>
          </div>

          {/* Redes Sociais à direita */}
          <div className="flex items-center justify-end gap-2">
            <a
              href="https://github.com/zairamiranda"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-2 hover:text-primary transition-colors duration-200"
              aria-label="GitHub"
            >
              <GithubIcon className="h-4 w-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/zaira-miranda/"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-2 hover:text-primary transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="h-4 w-4" />
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-2 hover:text-primary transition-colors duration-200"
              aria-label="Instagram"
            >
              <InstagramIcon className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
