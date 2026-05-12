"use client";

import { motion, useScroll, useTransform, AnimatePresence } from "motion/react";
import { useState, useEffect, useRef } from "react";
import { navigation } from "@/data/resume";
import { ThemeToggle } from "./ThemeToggle";
import { cn } from "@/lib/utils";
import { Menu, X, Command } from "lucide-react";
import { useUIStore } from "@/stores/uiStore";
import { MagneticButton } from "@/components/motion/MagneticButton";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const { isMobileNavOpen, setMobileNavOpen, setCommandMenuOpen } = useUIStore();
  const lastScrollY = useRef(0);

  const { scrollYProgress } = useScroll();
  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setIsScrolled(currentScrollY > 50);

      if (currentScrollY > lastScrollY.current && currentScrollY > 200) {
        setHidden(true);
      } else {
        setHidden(false);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Keyboard shortcut for command menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setCommandMenuOpen(true);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [setCommandMenuOpen]);

  return (
    <>
      <motion.header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          isScrolled ? "py-3" : "py-5"
        )}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: hidden ? -100 : 0, opacity: hidden ? 0 : 1 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      >
        <nav className="max-w-6xl mx-auto px-4 sm:px-6">
          <div
            className={cn(
              "flex items-center justify-between rounded-2xl transition-all duration-500 px-4 sm:px-6 py-3",
              isScrolled
                ? "glass shadow-lg shadow-black/5"
                : "bg-transparent"
            )}
          >
            {/* Mobile Menu Button (Left) */}
            <motion.button
              className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg glass"
              onClick={() => setMobileNavOpen(!isMobileNavOpen)}
              whileTap={{ scale: 0.9 }}
              aria-label="Toggle menu"
            >
              {isMobileNavOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </motion.button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {navigation.map((item) => (
                <MagneticButton key={item.href} strength={0.15}>
                  <a
                    href={item.href}
                    className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-primary/5"
                  >
                    {item.label}
                  </a>
                </MagneticButton>
              ))}
            </div>

            {/* Actions */}
            <div className="flex items-center gap-2">
              {/* Command Menu Trigger */}
              <motion.button
                onClick={() => setCommandMenuOpen(true)}
                className="hidden sm:flex items-center gap-2 px-3 py-1.5 text-sm text-muted-foreground glass rounded-lg hover:text-foreground transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Command className="w-3.5 h-3.5" />
                <span className="text-xs">⌘K</span>
              </motion.button>

              <ThemeToggle />


            </div>
          </div>
        </nav>

        {/* Scroll Progress */}
        <motion.div
          className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-primary via-accent to-primary"
          style={{ width: progressWidth }}
        />
      </motion.header>

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {isMobileNavOpen && (
          <motion.div
            className="fixed inset-0 z-40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div
              className="absolute inset-0 bg-background/80 backdrop-blur-xl"
              onClick={() => setMobileNavOpen(false)}
            />
            <motion.nav
              className="absolute inset-x-4 top-24 p-6 rounded-2xl glass-strong shadow-2xl"
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex flex-col gap-1">
                {navigation.map((item, i) => (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    className="px-4 py-3 text-lg font-medium text-foreground hover:text-primary transition-colors rounded-xl hover:bg-primary/5"
                    onClick={() => setMobileNavOpen(false)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    {item.label}
                  </motion.a>
                ))}
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
