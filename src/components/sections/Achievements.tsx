"use client";

import { achievements, stats } from "@/data/achievements";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { FadeIn } from "@/components/motion/FadeIn";
import { CountUp } from "@/components/motion/CountUp";
import { StaggerChildren, StaggerItem } from "@/components/motion/StaggerChildren";
import { Star, Award, Trophy, Globe, Mic, BookOpen } from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  star: Star, award: Award, trophy: Trophy, globe: Globe, mic: Mic, book: BookOpen,
};

export function Achievements() {
  return (
    <section id="achievements" className="relative section-padding overflow-hidden">
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeader label="Achievements" title="Milestones & recognition" description="Awards, certifications, and contributions that mark the journey." />

        {/* Stats Row */}
        <FadeIn>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center p-6 rounded-2xl glass">
                <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">
                  <CountUp end={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </FadeIn>

        {/* Achievement Cards */}
        <StaggerChildren className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {achievements.map((ach) => {
            const Icon = iconMap[ach.icon] || Star;
            return (
              <StaggerItem key={ach.id}>
                <div className="group p-6 rounded-2xl glass hover:bg-primary/5 transition-all duration-300 h-full">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1 group-hover:text-primary transition-colors">{ach.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{ach.description}</p>
                      {ach.date && <p className="text-xs text-primary mt-2">{ach.date}</p>}
                    </div>
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerChildren>
      </div>
    </section>
  );
}
