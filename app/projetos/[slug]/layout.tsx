'use client';

import { motion } from 'framer-motion';

export default function ProjectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen py-20 relative">
      <motion.div 
        className="absolute inset-0 opacity-10"
        animate={{
          background: [
            "radial-gradient(circle at 0% 0%, var(--primary) 0%, transparent 70%)",
            "radial-gradient(circle at 100% 100%, var(--primary) 0%, transparent 70%)",
            "radial-gradient(circle at 0% 0%, var(--primary) 0%, transparent 70%)",
          ]
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      {children}
    </main>
  );
}
