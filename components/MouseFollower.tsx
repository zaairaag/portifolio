"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function MouseFollower() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <motion.div
      className="fixed w-14 h-14 rounded-full pointer-events-none"
      style={{
        background: "rgba(147, 51, 234, 0.5)",
        boxShadow: "0 0 20px 4px rgba(147, 51, 234, 0.3)",
        backdropFilter: "blur(2px)",
      }}
      animate={{
        x: mousePosition.x - 28,
        y: mousePosition.y - 28,
        scale: [1, 1.1, 1],
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
        mass: 0.8,
        scale: {
          duration: 2,
          repeat: Infinity,
        }
      }}
    />
  );
}
