"use client";

import { useRef, useState, useEffect } from "react";
import { motion } from "motion/react";
import { testimonials } from "@/data/testimonials";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { FadeIn } from "@/components/motion/FadeIn";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";

export function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
  };

  useEffect(() => { checkScroll(); }, []);

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = 400;
    scrollRef.current.scrollBy({ left: dir === "left" ? -amount : amount, behavior: "smooth" });
    setTimeout(checkScroll, 400);
  };

  return (
    <section className="relative section-padding overflow-hidden">
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeader label="Testimonials" title="What people say" description="Feedback from colleagues and clients I've had the pleasure of working with." />

        {/* Controls */}
        <FadeIn>
          <div className="flex justify-end gap-2 mb-6">
            <motion.button onClick={() => scroll("left")} disabled={!canScrollLeft}
              className="w-10 h-10 rounded-full glass flex items-center justify-center disabled:opacity-30 hover:bg-primary/10 transition-colors"
              whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <ChevronLeft className="w-5 h-5" />
            </motion.button>
            <motion.button onClick={() => scroll("right")} disabled={!canScrollRight}
              className="w-10 h-10 rounded-full glass flex items-center justify-center disabled:opacity-30 hover:bg-primary/10 transition-colors"
              whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <ChevronRight className="w-5 h-5" />
            </motion.button>
          </div>
        </FadeIn>

        {/* Carousel */}
        <div ref={scrollRef} onScroll={checkScroll}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
          {testimonials.map((t, i) => (
            <FadeIn key={t.id} delay={i * 0.1} className="snap-start shrink-0 w-[85vw] sm:w-[400px]">
              <div className="h-full p-6 rounded-2xl glass hover:bg-primary/5 transition-all duration-300">
                <Quote className="w-8 h-8 text-primary/30 mb-4" />
                <p className="text-foreground leading-relaxed mb-6">{t.content}</p>
                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: t.rating || 5 }).map((_, j) => (
                    <Star key={j} className="w-4 h-4 text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <div>
                  <p className="font-semibold">{t.name}</p>
                  <p className="text-sm text-muted-foreground">{t.role} at {t.company}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
