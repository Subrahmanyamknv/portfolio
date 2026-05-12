"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { personalInfo } from "@/data/resume";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { FadeIn } from "@/components/motion/FadeIn";
import { MagneticButton } from "@/components/motion/MagneticButton";
import { GradientBlob } from "@/components/shared/GradientBlob";
import { getSocialIcon } from "@/components/icons/SocialIcons";
import { Send, Mail, MapPin, CheckCircle } from "lucide-react";

export function Contact() {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    await new Promise((r) => setTimeout(r, 1500));
    setIsSubmitted(true);
    setIsSending(false);
  };

  return (
    <section id="contact" className="relative section-padding overflow-hidden">
      <GradientBlob />
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6">
        <SectionHeader label="Contact" title="Let's build something great" description="Have a project in mind or just want to chat? I'd love to hear from you." />
        <div className="grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2 space-y-8">
            <FadeIn direction="left">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center"><Mail className="w-5 h-5 text-primary" /></div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <a href={`mailto:${personalInfo.email}`} className="font-medium hover:text-primary transition-colors">{personalInfo.email}</a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center"><MapPin className="w-5 h-5 text-primary" /></div>
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="font-medium">{personalInfo.location}</p>
                  </div>
                </div>
              </div>
            </FadeIn>
            <FadeIn direction="left" delay={0.2}>
              <div className="flex gap-3">
                {personalInfo.socialLinks.map((link) => {
                  const Icon = getSocialIcon(link.icon);
                  return (
                    <MagneticButton key={link.name} strength={0.2}>
                      <motion.a href={link.url} target="_blank" rel="noopener noreferrer"
                        className="w-11 h-11 flex items-center justify-center rounded-xl glass hover:bg-primary/10 transition-colors"
                        whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} aria-label={link.name}>
                        <Icon className="w-5 h-5" />
                      </motion.a>
                    </MagneticButton>
                  );
                })}
              </div>
            </FadeIn>
          </div>
          <FadeIn direction="right" className="lg:col-span-3">
            <div className="p-8 rounded-2xl glass">
              <AnimatePresence mode="wait">
                {isSubmitted ? (
                  <motion.div key="success" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-12">
                    <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", stiffness: 200, damping: 15 }}>
                      <CheckCircle className="w-16 h-16 text-emerald-500 mx-auto mb-4" />
                    </motion.div>
                    <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                    <p className="text-muted-foreground">Thank you for reaching out. I&apos;ll get back to you soon.</p>
                    <motion.button onClick={() => { setIsSubmitted(false); setFormState({ name: "", email: "", message: "" }); }}
                      className="mt-6 px-6 py-2 rounded-xl glass hover:bg-primary/10 text-sm font-medium transition-colors" whileHover={{ scale: 1.05 }}>Send Another</motion.button>
                  </motion.div>
                ) : (
                  <motion.form key="form" onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <label htmlFor="contact-name" className="block text-sm font-medium mb-2">Name</label>
                      <input id="contact-name" type="text" required value={formState.name} onChange={(e) => setFormState((p) => ({ ...p, name: e.target.value }))}
                        className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border/50 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-sm" placeholder="Your name" />
                    </div>
                    <div>
                      <label htmlFor="contact-email" className="block text-sm font-medium mb-2">Email</label>
                      <input id="contact-email" type="email" required value={formState.email} onChange={(e) => setFormState((p) => ({ ...p, email: e.target.value }))}
                        className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border/50 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-sm" placeholder="your@email.com" />
                    </div>
                    <div>
                      <label htmlFor="contact-message" className="block text-sm font-medium mb-2">Message</label>
                      <textarea id="contact-message" required rows={5} value={formState.message} onChange={(e) => setFormState((p) => ({ ...p, message: e.target.value }))}
                        className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border/50 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-sm resize-none" placeholder="Tell me about your project..." />
                    </div>
                    <MagneticButton className="w-full">
                      <motion.button type="submit" disabled={isSending}
                        className="w-full relative inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-sm font-semibold text-white overflow-hidden disabled:opacity-70"
                        whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }}>
                        <span className="absolute inset-0 bg-gradient-to-r from-[#6366f1] via-[#06b6d4] to-[#6366f1] bg-[length:200%_100%] animate-gradient-shift" />
                        <span className="relative z-10 flex items-center gap-2">{isSending ? "Sending..." : "Send Message"}<Send className="w-4 h-4" /></span>
                      </motion.button>
                    </MagneticButton>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
