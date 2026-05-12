"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { experiences } from "@/data/experience";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { MapPin, Calendar, ChevronRight } from "lucide-react";

export function Experience() {
  return (
    <section id="experience" className="relative section-padding overflow-hidden">
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6">
        <SectionHeader
          label="Experience"
          title="Where I've made an impact"
          description="A journey through innovative companies and groundbreaking projects."
        />
        <div className="relative">
          <div className="absolute left-[23px] md:left-1/2 md:-translate-x-px top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/50 via-accent/50 to-transparent" />
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <TimelineItem key={exp.id} experience={exp} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TimelineItem({ experience: exp, index }: { experience: (typeof experiences)[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-20px" });
  const isEven = index % 2 === 0;

  return (
    <div ref={ref} className={`relative flex items-start gap-6 md:gap-0 ${isEven ? "md:flex-row" : "md:flex-row-reverse"}`}>
      <motion.div
        className="absolute left-[15px] md:left-1/2 md:-translate-x-1/2 z-10 w-4 h-4 rounded-full bg-primary border-4 border-background shadow-lg shadow-primary/25"
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : {}}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
      />
      <motion.div
        className={`ml-12 md:ml-0 md:w-[calc(50%-2rem)] ${isEven ? "md:mr-auto" : "md:ml-auto"}`}
        initial={{ opacity: 0, x: isEven ? -50 : 50, filter: "blur(10px)" }}
        animate={isInView ? { opacity: 1, x: 0, filter: "blur(0px)" } : {}}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
      >
        <div className="group p-6 rounded-2xl glass hover:bg-primary/5 transition-all duration-300">
          <div className="flex items-center gap-2 text-sm text-primary font-medium mb-3">
            <Calendar className="w-4 h-4" />
            {exp.period.start} — {exp.period.end}
          </div>
          <h3 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors">{exp.role}</h3>
          <div className="flex items-center gap-2 text-muted-foreground mb-4">
            <span className="font-medium">{exp.company}</span>
            <span>•</span>
            <span className="flex items-center gap-1 text-sm"><MapPin className="w-3.5 h-3.5" />{exp.location}</span>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed mb-4">{exp.description}</p>
          <ul className="space-y-2 mb-4">
            {exp.achievements.slice(0, 3).map((a, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                <ChevronRight className="w-4 h-4 text-primary mt-0.5 shrink-0" />{a}
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-1.5">
            {exp.technologies.map((t) => (
              <span key={t} className="px-2.5 py-1 rounded-lg bg-primary/10 text-primary text-xs font-medium">{t}</span>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
