"use client";

import { motion, useInView } from "motion/react";
import { useRef, type ReactNode } from "react";


interface FadeInProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  duration?: number;
  once?: boolean;
}

const directionMap = {
  up: { y: 60, x: 0 },
  down: { y: -60, x: 0 },
  left: { x: -60, y: 0 },
  right: { x: 60, y: 0 },
};

export function FadeIn({
  children,
  className = "",
  delay = 0,
  direction = "up",
  duration = 0.7,
  once = true,
}: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, margin: "-20px" });

  const d = directionMap[direction];

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{
        opacity: 0,
        x: d.x,
        y: d.y,
        filter: "blur(10px)",
      }}
      animate={
        isInView
          ? { opacity: 1, x: 0, y: 0, filter: "blur(0px)" }
          : { opacity: 0, x: d.x, y: d.y, filter: "blur(10px)" }
      }
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
