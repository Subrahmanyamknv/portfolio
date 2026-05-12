export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface PersonalInfo {
  name: string;
  firstName: string;
  lastName: string;
  title: string;
  roles: string[];
  tagline: string;
  bio: string;
  shortBio: string;
  email: string;
  phone?: string;
  location: string;
  availability: "available" | "busy" | "open-to-offers";
  resumeUrl: string;
  avatarUrl: string;
  socialLinks: SocialLink[];
  yearsOfExperience: number;
  projectsCompleted: number;
  happyClients: number;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  category: string;
  featured: boolean;
  liveUrl?: string;
  githubUrl?: string;
  metrics?: { label: string; value: string }[];
  year: string;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: { start: string; end: string };
  location: string;
  description: string;
  achievements: string[];
  technologies: string[];
  logo?: string;
  type: "fulltime" | "contract" | "freelance" | "internship";
}

export interface Skill {
  name: string;
  icon: string;
  category: "core" | "frontend" | "backend" | "tools" | "emerging";
  proficiency: number;
}

export interface SkillCategory {
  name: string;
  key: Skill["category"];
  description: string;
  color: string;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  date?: string;
  link?: string;
  type: "certification" | "award" | "contribution" | "hackathon" | "stat" | "education";
  value?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar?: string;
  content: string;
  rating?: number;
}

export interface NavItem {
  label: string;
  href: string;
  icon?: string;
}
