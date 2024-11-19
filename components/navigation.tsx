"use client";

import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Sheet, SheetTrigger, SheetContent } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import { Logo } from '@/components/ui/logo';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { LanguageSelector } from './language-selector';
import { ModeToggle } from './mode-toggle';

const links = [
  {
    key: "home",
    href: "/",
  },
  {
    key: "about",
    href: "/about",
  },
  {
    key: "projects",
    href: "/projects",
  },
  {
    key: "experience",
    href: "/experience",
  },
  {
    key: "contact",
    href: "/contact",
  },
];

export function Navigation() {
  const t = useTranslations('nav');
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  const getHref = (item: typeof links[0]): string => {
    if (item.href) return item.href;
    if (pathname === '/') return item.hash || '/';
    return `/${item.hash || ''}`;
  };

  const scrollYProgress = useTransform(scrollY, [0, 500], [0, 1]);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    return scrollY.on("change", (latest) => {
      setIsScrolled(latest > 50);
    });
  }, [scrollY]);

  const backgroundOpacity = useTransform(scrollYProgress, [0, 1], [0, 0.8]);

  if (!mounted) {
    return null;
  }

  return (
    <motion.nav
      className="fixed top-0 w-full z-40 transition-all duration-500"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20
      }}
    >
      <motion.div
        className="absolute inset-0 bg-background/80 backdrop-blur-md border-b border-border/40"
        style={{ opacity: backgroundOpacity }}
      />
      <div className="container mx-auto px-6 lg:px-8">
        <div className="h-24 py-4 flex items-center justify-between max-w-7xl mx-auto relative">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <motion.div
                className="flex items-center gap-4"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                  delay: 0.2
                }}
              >
                <Logo width={64} height={64} animated={!isScrolled} />
              </motion.div>
            </Link>
          </div>

          {/* Links de navegação */}
          <div className="hidden md:flex items-center justify-center flex-1 mx-4">
            <div className="flex items-center gap-8">
              {links.map((item) => (
                <div key={item.key}>
                  <Link
                    href={getHref(item)}
                    className="text-base font-medium tracking-wide hover:text-primary transition-colors"
                    onClick={(e) => {
                      if (pathname !== '/' && item.hash) {
                        e.preventDefault();
                        window.location.href = '/' + item.hash;
                      }
                    }}
                  >
                    {t(item.key)}
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Botões direita */}
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-4">
              <LanguageSelector />
              <ModeToggle />
            </div>

            {/* Menu mobile */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-72">
                <div className="flex flex-col gap-8 mt-8">
                  {links.map((item) => (
                    <Link
                      key={item.key}
                      href={getHref(item)}
                      className="text-lg font-medium tracking-wide hover:text-primary transition-colors"
                      onClick={() => {
                        setIsOpen(false);
                        if (pathname !== '/' && item.hash) {
                          window.location.href = '/' + item.hash;
                        }
                      }}
                    >
                      {t(item.key)}
                    </Link>
                  ))}
                  <div className="flex flex-col gap-4">
                    <LanguageSelector />
                    <ModeToggle />
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}