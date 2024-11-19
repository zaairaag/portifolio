'use client';

import { motion } from 'framer-motion';
import { HeartIcon } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <div className="h-16 flex items-center justify-between max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center gap-4 w-full"
        >
          <p className="text-sm text-muted-foreground">
            {currentYear} Zaíra Gonçalves. Todos os direitos reservados.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
