"use client";

import Image from "next/image";
import { personalInfo } from "@/data/resume";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { FadeIn } from "@/components/motion/FadeIn";
import { CountUp } from "@/components/motion/CountUp";
import { GradientBlob } from "@/components/shared/GradientBlob";
import { Code, Palette, Rocket } from "lucide-react";

const philosophyItems = [
  {
    icon: Code,
    title: "Clean Architecture",
    description: "Writing maintainable, scalable code that stands the test of time.",
  },
  {
    icon: Palette,
    title: "Design-Driven",
    description: "Every pixel matters. Merging aesthetics with functionality.",
  },
  {
    icon: Rocket,
    title: "Performance First",
    description: "Optimizing for speed, accessibility, and user experience.",
  },
];

export function About() {
  return (
    <section id="about" className="relative section-padding overflow-hidden">
      <GradientBlob />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeader
          label="About"
          title="Turning ideas into exceptional digital experiences"
          description="A passionate engineer who thrives at the intersection of design and technology."
          className="mb-6 md:mb-8"
        />

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Bio & Stats */}
          <div className="space-y-8">
            <FadeIn>
              {/* Elegant Profile Header */}
              <div className="flex items-center gap-6 mb-8">
                <div className="relative w-24 h-24 sm:w-32 sm:h-32 rounded-full overflow-hidden glass-strong p-1 shrink-0 shadow-xl">
                  <div className="relative w-full h-full rounded-full overflow-hidden">
                    <Image
                      src={personalInfo.avatarUrl}
                      alt={personalInfo.name}
                      fill
                      className="object-cover hover:scale-110 transition-transform duration-500"
                      sizes="128px"
                      priority
                      unoptimized
                    />
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold mb-1">{personalInfo.name}</h3>
                  <p className="text-primary font-medium text-sm sm:text-base">{personalInfo.roles[0]}</p>
                </div>
              </div>

              <div className="prose prose-lg dark:prose-invert max-w-none">
                {personalInfo.bio.split("\n\n").map((paragraph, i) => (
                  <p
                    key={i}
                    className="text-muted-foreground leading-relaxed text-base md:text-lg mb-4 last:mb-0"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </FadeIn>

            {/* Stats */}
            <FadeIn delay={0.2}>
              <div className="grid grid-cols-3 gap-4 pt-4">
                <div className="text-center p-4 rounded-2xl glass hover:bg-primary/5 transition-colors">
                  <div className="text-3xl sm:text-4xl font-bold text-gradient">
                    <CountUp end={personalInfo.yearsOfExperience} suffix="+" />
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">Years Exp.</p>
                </div>
                <div className="text-center p-4 rounded-2xl glass hover:bg-primary/5 transition-colors">
                  <div className="text-3xl sm:text-4xl font-bold text-gradient">
                    <CountUp end={personalInfo.projectsCompleted} suffix="+" />
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">Projects</p>
                </div>
                <div className="text-center p-4 rounded-2xl glass hover:bg-primary/5 transition-colors">
                  <div className="text-3xl sm:text-4xl font-bold text-gradient">
                    <CountUp end={personalInfo.happyClients} suffix="+" />
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">Clients</p>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Philosophy Cards */}
          <div className="space-y-4 lg:mt-0">
            {philosophyItems.map((item, i) => (
              <FadeIn key={item.title} delay={i * 0.15} direction="right">
                <div className="group p-6 rounded-2xl glass hover:bg-primary/5 transition-all duration-300 cursor-default">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1 group-hover:text-primary transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
