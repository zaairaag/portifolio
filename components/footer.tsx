"use client";

import { motion } from 'framer-motion';
import { GithubIcon, LinkedinIcon, TwitterIcon, HeartIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';

const socialLinks = [
  {
    name: 'GitHub',
    href: 'https://github.com/zairacandido',
    icon: GithubIcon,
  },
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com/in/zairacandido',
    icon: LinkedinIcon,
  },
  {
    name: 'Twitter',
    href: 'https://twitter.com/zairacandido',
    icon: TwitterIcon,
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative mt-32 border-t border-border bg-gradient-to-b from-background to-background/80">
      <div 
        className="absolute inset-0 bg-grid-white/10 bg-[size:3rem_3rem] [mask-image:radial-gradient(white,transparent_85%)]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(255 255 255 / 0.02)'%3E%3Cpath d='M0 .5H31.5V32'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="container px-4 md:px-6 py-16 md:py-24"
        >
          {/* Grid Layout */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {/* Logo & Description */}
            <motion.div variants={item} className="space-y-4">
              <h3 className="text-lg font-semibold text-high-contrast">Zaira Candido</h3>
              <p className="text-sm text-high-contrast/80 leading-relaxed">
                Desenvolvedora Front-end apaixonada por criar experiências digitais incríveis e resolver problemas complexos.
              </p>
            </motion.div>

            {/* Links Rápidos */}
            <motion.div variants={item} className="space-y-4">
              <h4 className="text-sm font-semibold text-high-contrast">Links Rápidos</h4>
              <nav className="flex flex-col space-y-2">
                <a href="#about" className="text-sm text-high-contrast/60 hover:text-primary transition-colors">
                  Sobre
                </a>
                <a href="#projects" className="text-sm text-high-contrast/60 hover:text-primary transition-colors">
                  Projetos
                </a>
                <a href="#contact" className="text-sm text-high-contrast/60 hover:text-primary transition-colors">
                  Contato
                </a>
              </nav>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={item} className="space-y-4">
              <h4 className="text-sm font-semibold text-high-contrast">Social</h4>
              <div className="flex space-x-3">
                {socialLinks.map((social) => (
                  <Button
                    key={social.name}
                    variant="ghost"
                    size="icon"
                    asChild
                    className="hover:text-primary transition-colors"
                  >
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.name}
                    >
                      <social.icon className="w-4 h-4" />
                    </a>
                  </Button>
                ))}
              </div>
            </motion.div>

            {/* Newsletter */}
            <motion.div variants={item} className="space-y-4">
              <h4 className="text-sm font-semibold text-high-contrast">Newsletter</h4>
              <form className="flex space-x-2">
                <input
                  type="email"
                  placeholder="seu.email@exemplo.com"
                  className="flex-1 px-3 py-2 text-sm bg-background/50 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
                <Button type="submit" size="sm">
                  Inscrever
                </Button>
              </form>
            </motion.div>
          </div>

          {/* Bottom Bar */}
          <motion.div
            variants={item}
            className="flex flex-col md:flex-row justify-between items-center mt-16 pt-8 border-t border-border"
          >
            <p className="text-sm text-high-contrast/60">
              © {currentYear} Zaira Candido. Todos os direitos reservados.
            </p>
            
            <div className="flex items-center space-x-1 text-sm text-high-contrast/60 mt-4 md:mt-0">
              <span>Feito com</span>
              <HeartIcon className="w-4 h-4 text-red-500" />
              <span>usando Next.js & Tailwind</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
}
