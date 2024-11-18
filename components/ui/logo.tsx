import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface LogoProps {
  className?: string;
  width?: number;
  height?: number;
  animated?: boolean;
}

export function Logo({ className, width = 40, height = 40, animated = true }: LogoProps) {
  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { type: "spring", duration: 1.5, bounce: 0 },
        opacity: { duration: 0.01 }
      }
    }
  };

  const bracketAnimation = {
    rest: { x: 0 },
    hover: {
      x: [-2, 2, -2],
      transition: {
        duration: 1,
        repeat: Infinity,
        repeatType: "reverse"
      }
    }
  };

  const circleAnimation = {
    rest: { scale: 1 },
    hover: { 
      scale: 1.05,
      transition: {
        duration: 0.3,
        type: "spring",
        stiffness: 300
      }
    }
  };

  const Container = animated ? motion.svg : "svg";
  const Path = animated ? motion.path : "path";
  const Circle = animated ? motion.circle : "circle";

  return (
    <Container
      width={width}
      height={height}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("transition-colors duration-200", className)}
      initial="rest"
      whileHover="hover"
      animate={animated ? "visible" : undefined}
    >
      {/* Background Circle */}
      <Circle
        cx="50"
        cy="50"
        r="48"
        className="fill-primary/10"
        variants={circleAnimation}
      />
      
      {/* Code Bracket Left */}
      <Path
        d="M30 35L20 50L30 65"
        className="stroke-primary"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
        variants={animated ? {
          ...draw,
          ...bracketAnimation,
          visible: {
            ...draw.visible,
            transition: { ...draw.visible.transition, delay: 0 }
          }
        } : undefined}
      />
      
      {/* Code Bracket Right */}
      <Path
        d="M70 35L80 50L70 65"
        className="stroke-primary"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
        variants={animated ? {
          ...draw,
          ...bracketAnimation,
          visible: {
            ...draw.visible,
            transition: { ...draw.visible.transition, delay: 0.2 }
          }
        } : undefined}
      />

      {/* Z */}
      <Path
        d="M40 38H60L40 62H60"
        className="stroke-primary"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
        variants={animated ? {
          ...draw,
          visible: {
            ...draw.visible,
            transition: { ...draw.visible.transition, delay: 0.4 }
          }
        } : undefined}
      />

      {/* G */}
      <Path
        d="M55 45C55 45 60 45 60 50C60 55 55 55 55 55H52L52 50"
        className="stroke-primary"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
        transform="translate(-10, 5)"
        variants={animated ? {
          ...draw,
          visible: {
            ...draw.visible,
            transition: { ...draw.visible.transition, delay: 0.6 }
          }
        } : undefined}
      />
    </Container>
  );
}
