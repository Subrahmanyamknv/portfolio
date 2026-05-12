import type { Variants, Transition } from "motion/react";

// Shared easing curves
export const EASE = {
  smooth: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
  expo: [0.16, 1, 0.3, 1] as [number, number, number, number],
  bounce: [0.68, -0.55, 0.265, 1.55] as [number, number, number, number],
  spring: { type: "spring" as const, stiffness: 100, damping: 15 },
};

// Reusable animation variants
export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 60, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: EASE.expo },
  },
};

export const fadeInDown: Variants = {
  hidden: { opacity: 0, y: -40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: EASE.expo },
  },
};

export const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -60, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: EASE.expo },
  },
};

export const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 60, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: EASE.expo },
  },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: EASE.expo },
  },
};

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: EASE.expo },
  },
};

export const slideUp: Variants = {
  hidden: { y: "100%" },
  visible: {
    y: "0%",
    transition: { duration: 0.7, ease: EASE.expo },
  },
};

export const textReveal: Variants = {
  hidden: { y: "110%" },
  visible: (i: number) => ({
    y: "0%",
    transition: {
      duration: 0.8,
      ease: EASE.expo,
      delay: i * 0.05,
    },
  }),
};

export const navVariants: Variants = {
  hidden: { y: -100, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: EASE.expo },
  },
};

// Transition presets
export const smoothTransition: Transition = {
  duration: 0.6,
  ease: EASE.expo,
};

export const springTransition: Transition = {
  type: "spring",
  stiffness: 200,
  damping: 20,
};
