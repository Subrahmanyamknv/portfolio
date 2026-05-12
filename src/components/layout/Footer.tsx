"use client";

import { motion } from "motion/react";
import { personalInfo } from "@/data/resume";
import { getSocialIcon } from "@/components/icons/SocialIcons";
import { ArrowUp } from "lucide-react";
import { MagneticButton } from "@/components/motion/MagneticButton";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-border/50 bg-card/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="flex flex-col items-center justify-center gap-6">
          <a href="#hero" className="text-3xl font-bold text-gradient">SK<span className="text-primary">.</span></a>
          <p className="text-center text-sm text-muted-foreground max-w-md">
            {personalInfo.tagline}
          </p>
          <div className="flex items-center gap-3 mt-2">
            {personalInfo.socialLinks.map((link) => {
              const Icon = getSocialIcon(link.icon);
              return (
                <MagneticButton key={link.name} strength={0.2}>
                  <motion.a href={link.url} target="_blank" rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center rounded-full glass hover:bg-primary/10 hover:text-primary transition-all"
                    whileHover={{ scale: 1.1, y: -2 }} whileTap={{ scale: 0.9 }} aria-label={link.name}>
                    <Icon className="w-4 h-4" />
                  </motion.a>
                </MagneticButton>
              );
            })}
          </div>
          
          <MagneticButton>
            <motion.button onClick={scrollToTop}
              className="group mt-6 flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }} aria-label="Back to top">
              <span className="text-xs font-medium uppercase tracking-wider">Back to top</span>
              <div className="w-8 h-8 rounded-full glass flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                <ArrowUp className="w-4 h-4" />
              </div>
            </motion.button>
          </MagneticButton>
        </div>
      </div>
    </footer>
  );
}
