"use client";

import { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

export function MagneticCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState("default");

  const springConfig = { damping: 25, stiffness: 700 };
  const cursorX = useSpring(mousePosition.x, springConfig);
  const cursorY = useSpring(mousePosition.y, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', moveCursor);
    return () => {
      window.removeEventListener('mousemove', moveCursor);
    };
  }, []);

  const variants = {
    default: {
      height: 32,
      width: 32,
      x: cursorX,
      y: cursorY,
      backgroundColor: "rgb(255, 255, 255)",
      mixBlendMode: "difference" as const,
    },
    text: {
      height: 64,
      width: 64,
      x: cursorX - 16,
      y: cursorY - 16,
      backgroundColor: "rgb(255, 255, 255)",
      mixBlendMode: "difference" as const,
      scale: 1.2,
    },
  };

  useEffect(() => {
    const addCursorHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('a, button, [data-cursor]')) {
        setCursorVariant("text");
      }
    };

    const removeCursorHover = () => {
      setCursorVariant("default");
    };

    document.addEventListener('mouseover', addCursorHover);
    document.addEventListener('mouseout', removeCursorHover);

    return () => {
      document.removeEventListener('mouseover', addCursorHover);
      document.removeEventListener('mouseout', removeCursorHover);
    };
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-50 rounded-full border border-primary/20"
      variants={variants}
      animate={cursorVariant}
      transition={{ type: "spring", ...springConfig }}
    />
  );
}