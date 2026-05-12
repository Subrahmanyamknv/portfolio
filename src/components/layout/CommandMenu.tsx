"use client";

import { useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useUIStore } from "@/stores/uiStore";
import { navigation } from "@/data/resume";
import { personalInfo } from "@/data/resume";
import {
  Search,
  User,
  Briefcase,
  Code,
  FolderOpen,
  Trophy,
  Mail,
  FileText,
  Moon,
  Sun,
  ExternalLink,
} from "lucide-react";
import { useTheme } from "next-themes";

interface CommandItem {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  description?: string;
  action: () => void;
  group: string;
}

export function CommandMenu() {
  const { isCommandMenuOpen, setCommandMenuOpen } = useUIStore();
  const { theme, setTheme } = useTheme();

  const navigate = useCallback((href: string) => {
    setCommandMenuOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  }, [setCommandMenuOpen]);

  const items: CommandItem[] = [
    { icon: User, label: "About", description: "Learn about me", action: () => navigate("#about"), group: "Navigation" },
    { icon: Code, label: "Skills", description: "Technical skills", action: () => navigate("#skills"), group: "Navigation" },
    { icon: Briefcase, label: "Experience", description: "Work history", action: () => navigate("#experience"), group: "Navigation" },
    { icon: FolderOpen, label: "Projects", description: "My work", action: () => navigate("#projects"), group: "Navigation" },
    { icon: Trophy, label: "Achievements", description: "Awards & certs", action: () => navigate("#achievements"), group: "Navigation" },
    { icon: Mail, label: "Contact", description: "Get in touch", action: () => navigate("#contact"), group: "Navigation" },
    {
      icon: theme === "dark" ? Sun : Moon,
      label: `Switch to ${theme === "dark" ? "Light" : "Dark"} Mode`,
      action: () => { setTheme(theme === "dark" ? "light" : "dark"); setCommandMenuOpen(false); },
      group: "Actions",
    },
    {
      icon: FileText,
      label: "Download Resume",
      action: () => { window.open(personalInfo.resumeUrl, "_blank"); setCommandMenuOpen(false); },
      group: "Actions",
    },
    {
      icon: ExternalLink,
      label: "GitHub Profile",
      action: () => { window.open(personalInfo.socialLinks[0]?.url, "_blank"); setCommandMenuOpen(false); },
      group: "Actions",
    },
  ];

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setCommandMenuOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [setCommandMenuOpen]);

  const groups = Array.from(new Set(items.map((i) => i.group)));

  return (
    <AnimatePresence>
      {isCommandMenuOpen && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-start justify-center pt-[20vh]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-background/80 backdrop-blur-sm"
            onClick={() => setCommandMenuOpen(false)}
          />

          {/* Dialog */}
          <motion.div
            className="relative w-full max-w-lg mx-4 rounded-2xl glass-strong shadow-2xl overflow-hidden"
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Search Input */}
            <div className="flex items-center gap-3 px-4 py-4 border-b border-border/50">
              <Search className="w-5 h-5 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">Quick navigation...</span>
            </div>

            {/* Items */}
            <div className="max-h-80 overflow-y-auto p-2">
              {groups.map((group) => (
                <div key={group}>
                  <p className="px-3 py-2 text-xs font-medium text-muted-foreground uppercase tracking-wider">
                    {group}
                  </p>
                  {items
                    .filter((i) => i.group === group)
                    .map((item) => (
                      <motion.button
                        key={item.label}
                        onClick={item.action}
                        className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-left hover:bg-primary/10 transition-colors group"
                        whileHover={{ x: 4 }}
                      >
                        <item.icon className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium truncate">{item.label}</p>
                          {item.description && (
                            <p className="text-xs text-muted-foreground truncate">
                              {item.description}
                            </p>
                          )}
                        </div>
                      </motion.button>
                    ))}
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between px-4 py-3 border-t border-border/50 text-xs text-muted-foreground">
              <span>Navigate with ↑↓</span>
              <span>
                <kbd className="px-1.5 py-0.5 rounded border border-border bg-muted text-xs">ESC</kbd> to close
              </span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
