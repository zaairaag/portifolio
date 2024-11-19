"use client";

import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useMotionValue } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Sheet, SheetTrigger, SheetContent } from '@/components/ui/sheet';
import { MoonIcon, SunIcon, Menu } from 'lucide-react';
import { useTheme } from 'next-themes';
import { Logo } from '@/components/ui/logo';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { LanguageSelector } from './language-selector';
import { ModeToggle } from './mode-toggle';

const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "Sobre",
    hash: "#about",
  },
  {
    name: "Projetos",
    href: "/projetos",
  },
  {
    name: "Contato",
    hash: "#contact",
  },
];

function MagneticComponent({ children, className = "" }: { children: React.ReactNode, className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;

    const x = clientX - centerX;
    const y = clientY - centerY;

    setPosition({ x, y });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setPosition({ x: 0, y: 0 });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  useEffect(() => {
    x.set(position.x);
    y.set(position.y);
  }, [position, x, y]);

  const magneticX = useTransform(x, [-100, 100], [-15, 15]);
  const magneticY = useTransform(y, [-100, 100], [-15, 15]);

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      style={{
        x: isHovered ? magneticX : 0,
        y: isHovered ? magneticY : 0,
      }}
      className={className}
      transition={{ type: "spring", stiffness: 350, damping: 15 }}
      data-cursor
    >
      {children}
    </motion.div>
  );
}

export function Navigation() {
  const t = useTranslations('navigation');
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
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
    return scrollY.onChange((latest) => {
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
          {/* Logo no canto esquerdo */}
          <div className="flex-shrink-0">
            <div className="inline-block">
              <Link href="/">
                <MagneticComponent className="inline-block">
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
                </MagneticComponent>
              </Link>
            </div>
          </div>

          {/* Links de navegação centralizados */}
          <div className="hidden md:flex items-center justify-center flex-1 mx-4">
            <div className="flex items-center gap-8">
              {links.map((item, index) => (
                <div key={item.name} className="inline-block">
                  <Link
                    href={getHref(item)}
                    className="block"
                    onClick={(e) => {
                      if (pathname !== '/' && item.hash) {
                        e.preventDefault();
                        window.location.href = '/' + item.hash;
                      }
                    }}
                  >
                    <MagneticComponent className="inline-block">
                      <motion.div
                        className="hover:text-primary transition-colors relative group text-base font-medium tracking-wide"
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                      >
                        <motion.span
                          animate={{
                            scale: hoveredIndex === index ? 1.1 : 1,
                            color: hoveredIndex === index ? "var(--primary)" : "currentColor"
                          }}
                          transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        >
                          {t(item.name)}
                        </motion.span>
                        <motion.span
                          className="absolute -bottom-1 left-0 h-0.5 bg-primary"
                          initial={{ width: "0%" }}
                          animate={{
                            width: hoveredIndex === index ? "100%" : "0%"
                          }}
                          transition={{
                            type: "spring",
                            stiffness: 300,
                            damping: 20
                          }}
                        />
                      </motion.div>
                    </MagneticComponent>
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Botões no canto direito */}
          <div className="flex items-center gap-4">
            <div className="inline-block">
              <MagneticComponent className="inline-block">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                  className="rounded-full"
                >
                  <SunIcon className="h-6 w-6 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                  <MoonIcon className="absolute h-6 w-6 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                  <span className="sr-only">Toggle theme</span>
                </Button>
              </MagneticComponent>
            </div>

            <LanguageSelector />

            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon" className="rounded-full">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col gap-4">
                  {links.map((item, index) => (
                    <Link
                      key={item.name}
                      href={getHref(item)}
                      className="block px-2 py-1 text-lg hover:text-primary transition-colors"
                      onClick={(e) => {
                        if (pathname !== '/' && item.hash) {
                          e.preventDefault();
                          window.location.href = '/' + item.hash;
                        }
                        setIsOpen(false);
                      }}
                    >
                      <motion.span
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          type: "spring",
                          stiffness: 260,
                          damping: 20,
                          delay: 0.1 + index * 0.1,
                        }}
                      >
                        {t(item.name)}
                      </motion.span>
                    </Link>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}