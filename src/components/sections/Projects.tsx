"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { projects, projectCategories } from "@/data/projects";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { FadeIn } from "@/components/motion/FadeIn";
import { TiltCard } from "@/components/shared/TiltCard";
import { GithubIcon } from "@/components/icons/SocialIcons";
import { ExternalLink } from "lucide-react";

export function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = activeCategory === "All" ? projects : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="relative section-padding overflow-hidden">
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeader label="Projects" title="Crafted with care" description="Selected works that showcase my approach to solving problems through design and engineering." />

        <FadeIn>
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
            {projectCategories.map((cat) => (
              <motion.button key={cat} onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${activeCategory === cat ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25" : "glass hover:bg-primary/10 text-muted-foreground"}`}
                whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                {cat}
              </motion.button>
            ))}
          </div>
        </FadeIn>

        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.div key={project.id} layout
                initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }} transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}>
                <TiltCard className="h-full">
                  <div className="group relative h-full p-6 rounded-2xl glass hover:bg-primary/5 transition-all duration-300 flex flex-col">
                    {/* Header with year badge */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-3 py-1 rounded-lg bg-primary/10 text-primary text-xs font-medium">{project.category}</span>
                      <span className="text-xs text-muted-foreground">{project.year}</span>
                    </div>

                    {/* Title & Description */}
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">{project.description}</p>

                    {/* Metrics */}
                    {project.metrics && (
                      <div className="grid grid-cols-3 gap-2 mb-4">
                        {project.metrics.map((m) => (
                          <div key={m.label} className="text-center p-2 rounded-xl bg-muted/50">
                            <p className="text-sm font-bold text-primary">{m.value}</p>
                            <p className="text-[10px] text-muted-foreground">{m.label}</p>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.technologies.slice(0, 4).map((t) => (
                        <span key={t} className="px-2 py-0.5 rounded-md bg-muted text-muted-foreground text-xs">{t}</span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="px-2 py-0.5 rounded-md bg-muted text-muted-foreground text-xs">+{project.technologies.length - 4}</span>
                      )}
                    </div>

                    {/* Links */}
                    <div className="flex items-center gap-3 pt-2 border-t border-border/30">
                      {project.liveUrl && (
                        <motion.a href={project.liveUrl} target="_blank" rel="noopener noreferrer"
                          className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
                          whileHover={{ x: 2 }}>
                          <ExternalLink className="w-3.5 h-3.5" /> Live Demo
                        </motion.a>
                      )}
                      {project.githubUrl && (
                        <motion.a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
                          className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
                          whileHover={{ x: 2 }}>
                          <GithubIcon className="w-3.5 h-3.5" /> Source
                        </motion.a>
                      )}
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
