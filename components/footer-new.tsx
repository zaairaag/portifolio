'use client';

import { motion } from 'framer-motion';
import { HeartIcon } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative mt-32 border-t border-border bg-background/50 backdrop-blur-sm">
      <div className="h-16 flex items-center justify-between max-w-6xl mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center gap-4 w-full"
        >
          <p className="text-sm text-muted-foreground">
            {currentYear} Zaíra Gonçalves. Todos os direitos reservados.
          </p>
          
          <div className="flex items-center space-x-1 text-sm text-muted-foreground">
            <span>Feito com</span>
            <HeartIcon className="w-4 h-4 text-red-500" />
            <span>usando Next.js & Tailwind</span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}