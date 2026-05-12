"use client";

import { cn } from "@/lib/utils";
import { FadeIn } from "@/components/motion/FadeIn";

interface SectionHeaderProps {
  label: string;
  title: string;
  description?: string;
  className?: string;
  align?: "left" | "center";
}

export function SectionHeader({
  label,
  title,
  description,
  className,
  align = "center",
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "mb-16 md:mb-20",
        align === "center" && "text-center",
        className
      )}
    >
      <FadeIn>
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium bg-primary/10 text-primary border border-primary/20 mb-6">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse-glow" />
          {label}
        </span>
      </FadeIn>
      <FadeIn delay={0.1}>
        <h2
          className={cn(
            "text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight",
            align === "center" && "max-w-3xl mx-auto"
          )}
        >
          {title}
        </h2>
      </FadeIn>
      {description && (
        <FadeIn delay={0.2}>
          <p
            className={cn(
              "mt-4 md:mt-6 text-lg md:text-xl text-muted-foreground leading-relaxed",
              align === "center" && "max-w-2xl mx-auto"
            )}
          >
            {description}
          </p>
        </FadeIn>
      )}
    </div>
  );
}
