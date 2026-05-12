"use client";

import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";
import { personalInfo } from "@/data/resume";
import { MagneticButton } from "@/components/motion/MagneticButton";
import { FadeIn } from "@/components/motion/FadeIn";
import { GradientBlob } from "@/components/shared/GradientBlob";
import { GridPattern } from "@/components/shared/GridPattern";
import { getSocialIcon } from "@/components/icons/SocialIcons";
import { ArrowDown, Download } from "lucide-react";

export function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % personalInfo.roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="relative min-h-[100svh] flex items-center justify-center overflow-hidden">
      <GridPattern />
      <GradientBlob />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 text-center pb-16 sm:pb-24 pt-8 sm:pt-0">
        {/* Availability Badge */}
        <FadeIn delay={0.2}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-xs sm:text-sm mb-4 sm:mb-8">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
            </span>
            <span className="text-muted-foreground">
              {personalInfo.availability === "available" ? "Available for work"
                : personalInfo.availability === "open-to-offers" ? "Open to opportunities" : "Currently busy"}
            </span>
          </div>
        </FadeIn>

        {/* Name */}
        <FadeIn delay={0.3}>
          <h1 className="text-[2.5rem] md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-[1.1] md:leading-[0.9] mb-2 sm:mb-4">
            <span className="block text-2xl md:text-5xl mb-1 md:mb-0 text-muted-foreground/80">Hi, I&apos;m</span>
            <span className="text-gradient block mt-1 pb-2 sm:pb-4">
              <span className="block md:inline">{personalInfo.firstName}</span>
              <span className="text-foreground whitespace-nowrap block md:inline"> {personalInfo.lastName}</span>
            </span>
          </h1>
        </FadeIn>

        {/* Role Switcher */}
        <FadeIn delay={0.5}>
          <div className="h-12 sm:h-14 flex items-center justify-center mb-4 sm:mb-6">
            <span className="text-xl sm:text-2xl md:text-3xl text-muted-foreground font-medium">I&apos;m a </span>
            <div className="relative h-full flex items-center ml-2 overflow-hidden">
              <AnimatePresence mode="wait">
                {mounted && (
                  <motion.span key={roleIndex}
                    className="text-xl sm:text-2xl md:text-3xl font-semibold text-gradient"
                    initial={{ y: 40, opacity: 0, filter: "blur(8px)" }}
                    animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                    exit={{ y: -40, opacity: 0, filter: "blur(8px)" }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}>
                    {personalInfo.roles[roleIndex]}
                  </motion.span>
                )}
              </AnimatePresence>
            </div>
          </div>
        </FadeIn>

        {/* Tagline */}
        <FadeIn delay={0.6}>
          <p className="text-base sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-6 sm:mb-10 leading-relaxed">
            {personalInfo.shortBio}
          </p>
        </FadeIn>

        {/* CTAs */}
        <FadeIn delay={0.7}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-8 sm:mb-12">
            <MagneticButton>
              <motion.a href="#projects"
                className="group relative inline-flex items-center gap-2 px-6 py-3 sm:px-8 sm:py-4 rounded-2xl text-sm font-semibold text-white overflow-hidden"
                whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <span className="absolute inset-0 bg-gradient-to-r from-[#6366f1] via-[#06b6d4] to-[#6366f1] bg-[length:200%_100%] animate-gradient-shift rounded-2xl" />
                <span className="relative z-10 flex items-center gap-2">
                  View My Work
                  <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
                </span>
              </motion.a>
            </MagneticButton>
            <MagneticButton>
              <motion.a href={personalInfo.resumeUrl} target="_blank"
                className="inline-flex items-center gap-2 px-6 py-3 sm:px-8 sm:py-4 rounded-2xl text-sm font-semibold glass hover:bg-primary/10 transition-colors"
                whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Download className="w-4 h-4" /> Download Resume
              </motion.a>
            </MagneticButton>
          </div>
        </FadeIn>

        {/* Social Links */}
        <FadeIn delay={0.8}>
          <div className="flex items-center justify-center gap-3">
            {personalInfo.socialLinks.map((link) => {
              const Icon = getSocialIcon(link.icon);
              return (
                <MagneticButton key={link.name} strength={0.2}>
                  <motion.a href={link.url} target="_blank" rel="noopener noreferrer"
                    className="w-11 h-11 flex items-center justify-center rounded-full glass hover:bg-primary/10 hover:text-primary transition-all"
                    whileHover={{ scale: 1.15, y: -2 }} whileTap={{ scale: 0.9 }} aria-label={link.name}>
                    <Icon className="w-5 h-5" />
                  </motion.a>
                </MagneticButton>
              );
            })}
          </div>
        </FadeIn>
      </div>

      {/* Scroll Indicator */}
      <motion.div className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 sm:gap-2"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5, duration: 1 }}>
        <span className="text-xs text-muted-foreground uppercase tracking-widest">Scroll</span>
        <motion.div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2"
          animate={{ y: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
          <motion.div className="w-1 h-2 rounded-full bg-muted-foreground/50" />
        </motion.div>
      </motion.div>
    </section>
  );
}
