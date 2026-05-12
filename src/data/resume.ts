import type { PersonalInfo, NavItem } from "@/types";

export const personalInfo: PersonalInfo = {
  name: "K. N. V. Subrahmanyam",
  firstName: "Subrahmanyam",
  lastName: "K. N. V.",
  title: "Full-Stack Engineer & AI Integration Specialist",
  roles: [
    "Full-Stack Engineer",
    "AI Integration Specialist",
    "Creative Problem Solver",
    "Web Developer",
  ],
  tagline: "Bridging elegant user interfaces with intelligent backend systems.",
  bio: `I am a Full-Stack Engineer bridging the gap between elegant user interfaces and intelligent backend systems. With expertise in modern web frameworks and AI integrations, I build scalable applications that prioritize performance, user experience, and innovative problem-solving.

My approach combines technical depth with creative vision, resulting in solutions that push boundaries while maintaining simplicity and elegance. I believe in writing clean, maintainable code and creating interfaces that feel alive.`,
  shortBio:
    "Full-stack engineer crafting premium digital experiences with modern technologies and AI integrations.",
  email: "knvsubrahmanyam@gmail.com",
  phone: "+91 9392794254",
  location: "India",
  availability: "open-to-offers",
  resumeUrl: "/resume.pdf",
  avatarUrl: "/Teams_proffestional.jpg",
  yearsOfExperience: 1,
  projectsCompleted: 10,
  happyClients: 0,
  socialLinks: [
    { name: "GitHub", url: "https://github.com/Subrahmanyamknv", icon: "github" },
    { name: "LinkedIn", url: "https://linkedin.com/in/subrahmanyamknv", icon: "linkedin" },
  ],
};

export const navigation: NavItem[] = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];
