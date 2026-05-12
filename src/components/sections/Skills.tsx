"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { skills, skillCategories } from "@/data/skills";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { FadeIn } from "@/components/motion/FadeIn";
import { StaggerChildren, StaggerItem } from "@/components/motion/StaggerChildren";
import type { Skill } from "@/types";

export function Skills() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filteredSkills =
    activeCategory === "all"
      ? skills
      : skills.filter((s) => s.category === activeCategory);

  return (
    <section id="skills" className="relative section-padding overflow-hidden">
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeader
          label="Skills"
          title="My technical ecosystem"
          description="Technologies I use to bring ideas to life. Always learning, always evolving."
        />

        {/* Category Filters */}
        <FadeIn>
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
            <motion.button
              onClick={() => setActiveCategory("all")}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                activeCategory === "all"
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                  : "glass hover:bg-primary/10 text-muted-foreground hover:text-foreground"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              All
            </motion.button>
            {skillCategories.map((cat) => (
              <motion.button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                  activeCategory === cat.key
                    ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                    : "glass hover:bg-primary/10 text-muted-foreground hover:text-foreground"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {cat.name}
              </motion.button>
            ))}
          </div>
        </FadeIn>

        {/* Skills Grid */}
        <motion.div
          layout
          className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-4"
        >
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill) => (
              <SkillCard key={skill.name} skill={skill} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

function SkillCard({ skill }: { skill: Skill }) {
  const category = skillCategories.find((c) => c.key === skill.category);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className="group relative"
    >
      <div className="relative p-4 md:p-5 rounded-2xl glass hover:bg-primary/5 transition-all duration-300 cursor-default text-center h-full">
        {/* Proficiency ring */}
        <div className="relative w-14 h-14 mx-auto mb-3">
          <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
            <circle
              cx="18"
              cy="18"
              r="15.5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="text-border"
            />
            <motion.circle
              cx="18"
              cy="18"
              r="15.5"
              fill="none"
              stroke={category?.color || "#6366f1"}
              strokeWidth="2"
              strokeLinecap="round"
              strokeDasharray={`${skill.proficiency} ${100 - skill.proficiency}`}
              initial={{ strokeDasharray: "0 100" }}
              whileInView={{
                strokeDasharray: `${skill.proficiency} ${100 - skill.proficiency}`,
              }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              viewport={{ once: true }}
            />
          </svg>
          <span className="absolute inset-0 flex items-center justify-center text-lg">
            {skill.icon}
          </span>
        </div>

        <h3 className="text-sm font-semibold group-hover:text-primary transition-colors">
          {skill.name}
        </h3>
        <p className="text-xs text-muted-foreground mt-0.5">{skill.proficiency}%</p>

        {/* Hover glow */}
        <div
          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            background: `radial-gradient(circle at 50% 50%, ${category?.color}15, transparent 70%)`,
          }}
        />
      </div>
    </motion.div>
  );
}
