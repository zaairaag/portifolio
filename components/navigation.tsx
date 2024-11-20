"use client";

import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useMotionTemplate, useSpring, useTransform } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Sheet, SheetTrigger, SheetContent } from '@/components/ui/sheet';
import { MoonIcon, SunIcon, Menu } from 'lucide-react';
import { useTheme } from 'next-themes';
import { Logo } from '@/components/ui/logo';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const links = [
  { name: "Home", href: "/" },
  { name: "Sobre", href: "/sobre" },
  { name: "Portfólio", href: "/portfolio" },
  { name: "Serviços", href: "/servicos" },
  { name: "Contato", href: "/contato" },
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
      style={{
        x: isHovered ? magneticX : 0,
        y: isHovered ? magneticY : 0,
        display: "inline-block"
      }}
      transition={{ type: "spring", stiffness: 350, damping: 15 }}
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
  const [activeLink, setActiveLink] = useState("/");
  const pathname = usePathname();

  const scrollYProgress = useSpring(0, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    setMounted(true);
    setActiveLink(pathname);
  }, [pathname]);

  useEffect(() => {
    return scrollY.onChange((latest) => {
      setIsScrolled(latest > 50);
      scrollYProgress.set(Math.min(latest / 500, 1));
    });
  }, [scrollY, scrollYProgress]);

  const backgroundOpacity = useMotionTemplate`${scrollYProgress}`;

  if (!mounted) return null;

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
        <div className="h-20 flex items-center justify-between max-w-7xl mx-auto relative">
          {/* Logo */}
          <MagneticComponent>
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
                <Logo width={48} height={48} animated={!isScrolled} />
              </motion.div>
            </Link>
          </MagneticComponent>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {links.map((link) => (
              <MagneticComponent key={link.name}>
                <Link href={link.href}>
                  <motion.div
                    className="relative px-4 py-2"
                    whileHover="hover"
                    animate={activeLink === link.href ? "active" : "default"}
                  >
                    <motion.span
                      className={`relative z-10 text-sm font-medium transition-colors ${
                        activeLink === link.href 
                          ? "text-primary" 
                          : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      {link.name}
                    </motion.span>
                    
                    {/* Highlight Background */}
                    <motion.div
                      className="absolute inset-0 rounded-full bg-primary/10"
                      initial={{ scale: 0, opacity: 0 }}
                      variants={{
                        hover: { scale: 1, opacity: 1 },
                        active: { scale: 1, opacity: 1 },
                        default: { scale: 0, opacity: 0 }
                      }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    />
                    
                    {/* Active Indicator */}
                    {activeLink === link.href && (
                      <motion.div
                        className="absolute -bottom-1 left-4 right-4 h-0.5 bg-primary"
                        layoutId="activeIndicator"
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      />
                    )}
                  </motion.div>
                </Link>
              </MagneticComponent>
            ))}

            {/* Theme Toggle */}
            <MagneticComponent>
              <Button
                variant="ghost"
                size="icon"
                className="ml-4"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              >
                <motion.div
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.5, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {theme === "dark" ? (
                    <SunIcon className="h-5 w-5 text-primary" />
                  ) : (
                    <MoonIcon className="h-5 w-5 text-primary" />
                  )}
                </motion.div>
              </Button>
            </MagneticComponent>
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full sm:w-80">
                <nav className="flex flex-col space-y-4 mt-8">
                  {links.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      className={`text-lg font-medium px-4 py-2 rounded-lg transition-colors ${
                        activeLink === link.href
                          ? "bg-primary/10 text-primary"
                          : "text-muted-foreground hover:text-foreground hover:bg-primary/5"
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {link.name}
                    </Link>
                  ))}
                  <Button
                    variant="ghost"
                    className="justify-start px-4"
                    onClick={() => {
                      setTheme(theme === "dark" ? "light" : "dark");
                      setIsOpen(false);
                    }}
                  >
                    {theme === "dark" ? (
                      <>
                        <SunIcon className="h-5 w-5 mr-2" />
                        Modo Claro
                      </>
                    ) : (
                      <>
                        <MoonIcon className="h-5 w-5 mr-2" />
                        Modo Escuro
                      </>
                    )}
                  </Button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}  )
}
