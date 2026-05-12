export const SITE_CONFIG = {
  name: "Subrahmanyam K. N. V. | Portfolio",
  title: "Full-Stack Engineer & AI Integration Specialist",
  description:
    "Professional portfolio of Subrahmanyam K. N. V., a Full-Stack Engineer specializing in modern web technologies and AI integrations.",
  url: "https://Subrahmanyamknv.github.io/portfolio", // GitHub Pages URL
  ogImage: "/portfolio/og-image.png",
  author: "Subrahmanyam K. N. V.",
  links: {
    github: "https://github.com/Subrahmanyamknv",
    linkedin: "https://linkedin.com/in/subrahmanyamknv",
  },
} as const;

export const SECTION_IDS = {
  hero: "hero",
  about: "about",
  skills: "skills",
  experience: "experience",
  projects: "projects",
  achievements: "achievements",
  testimonials: "testimonials",
  contact: "contact",
} as const;

export const ANIMATION_CONFIG = {
  duration: {
    fast: 0.3,
    normal: 0.5,
    slow: 0.8,
    slower: 1.2,
  },
  ease: {
    smooth: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
    bounce: [0.68, -0.55, 0.265, 1.55] as [number, number, number, number],
    expo: [0.16, 1, 0.3, 1] as [number, number, number, number],
  },
  stagger: {
    fast: 0.05,
    normal: 0.1,
    slow: 0.15,
  },
} as const;

export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
} as const;
