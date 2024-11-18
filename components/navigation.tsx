"use client";

import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useMotionTemplate, useSpring, useTransform } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Sheet, SheetTrigger, SheetContent } from '@/components/ui/sheet';
import { MoonIcon, SunIcon, Menu } from 'lucide-react';
import { useTheme } from 'next-themes';
import { Logo } from '@/components/ui/logo';

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

function MagneticComponent({ children }: { children: React.ReactNode }) {
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

  const magneticX = useTransform(
    useSpring(position.x),
    [-100, 100],
    [-15, 15]
  );

  const magneticY = useTransform(
    useSpring(position.y),
    [-100, 100],
    [-15, 15]
  );

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      animate={{
        x: isHovered ? magneticX : 0,
        y: isHovered ? magneticY : 0,
      }}
      transition={{ type: "spring", stiffness: 350, damping: 15 }}
      style={{ display: "inline-block" }}
      data-cursor
    >
      {children}
    </motion.div>
  );
}

export function Navigation() {
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const scrollYProgress = useSpring(0, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    return scrollY.onChange((latest) => {
      setIsScrolled(latest > 50);
      scrollYProgress.set(Math.min(latest / 500, 1));
    });
  }, [scrollY, scrollYProgress]);

  const backgroundOpacity = useMotionTemplate`${scrollYProgress}`;

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
        className="absolute inset-0 bg-background/80 backdrop-blur-md border-b"
        style={{ opacity: backgroundOpacity }}
      />
      <div className="container mx-auto px-4">
        <div className="h-16 flex items-center justify-between max-w-6xl mx-auto relative">
          <MagneticComponent>
            <motion.div
              className="flex items-center gap-2 w-[200px]"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
                delay: 0.2
              }}
            >
              <Logo width={48} height={48} animated={!isScrolled} />
            </motion.div>
          </MagneticComponent>

          <div className="hidden md:flex items-center justify-center gap-12 flex-1">
            {links.map((item, index) => (
              <MagneticComponent key={item.name}>
                <motion.a
                  href={item.href || item.hash}
                  className="hover:text-primary transition-colors relative group text-sm font-medium"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                    delay: 0.1 * (index + 1)
                  }}
                  onHoverStart={() => setHoveredIndex(index)}
                  onHoverEnd={() => setHoveredIndex(null)}
                >
                  <motion.span
                    animate={{
                      scale: hoveredIndex === index ? 1.1 : 1,
                      color: hoveredIndex === index ? "var(--primary)" : "currentColor"
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    {item.name}
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
                </motion.a>
              </MagneticComponent>
            ))}
          </div>

          <div className="flex items-center gap-4 w-[200px] justify-end">
            <MagneticComponent>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="rounded-full"
                aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
              >
                <motion.div
                  initial={false}
                  animate={{
                    rotate: theme === 'dark' ? 0 : 180
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 200,
                    damping: 10
                  }}
                >
                  {theme === 'dark' ? (
                    <SunIcon className="h-5 w-5" />
                  ) : (
                    <MoonIcon className="h-5 w-5" />
                  )}
                </motion.div>
              </Button>
            </MagneticComponent>

            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col gap-4">
                  {links.map((item, index) => (
                    <motion.a
                      key={item.name}
                      href={item.href || item.hash}
                      className="block px-2 py-1 text-lg hover:text-primary transition-colors"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        type: "spring",
                        stiffness: 260,
                        damping: 20,
                        delay: 0.1 + index * 0.1,
                      }}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </motion.a>
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