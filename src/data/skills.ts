import type { Skill, SkillCategory } from "@/types";

export const skillCategories: SkillCategory[] = [
  {
    name: "Core Engineering",
    key: "core",
    description: "Programming languages and logic",
    color: "#6366f1",
  },
  {
    name: "Frontend",
    key: "frontend",
    description: "Building responsive interfaces",
    color: "#06b6d4",
  },
  {
    name: "Backend & Data",
    key: "backend",
    description: "Server architecture and databases",
    color: "#10b981",
  },
  {
    name: "Tools & DevOps",
    key: "tools",
    description: "Workflow and deployment",
    color: "#f59e0b",
  },
  {
    name: "Emerging Tech",
    key: "emerging",
    description: "AI and specialized skills",
    color: "#8b5cf6",
  },
];

export const skills: Skill[] = [
  // Core Engineering
  { name: "JavaScript", icon: "🟨", category: "core", proficiency: 80 },
  { name: "Python", icon: "🐍", category: "core", proficiency: 80 },
  { name: "Java", icon: "☕", category: "core", proficiency: 70 },
  { name: "C", icon: "⚙️", category: "core", proficiency: 65 },

  // Frontend
  { name: "React", icon: "⚛️", category: "frontend", proficiency: 80 },
  { name: "Angular", icon: "🅰️", category: "frontend", proficiency: 65 },
  { name: "HTML5", icon: "🌐", category: "frontend", proficiency: 90 },
  { name: "CSS3", icon: "🎨", category: "frontend", proficiency: 85 },
  { name: "Tailwind CSS", icon: "🌊", category: "frontend", proficiency: 80 },

  // Backend & Data
  { name: "Node.js", icon: "🟩", category: "backend", proficiency: 70 },
  { name: "MySQL", icon: "🐬", category: "backend", proficiency: 80 },
  { name: "PostgreSQL", icon: "🐘", category: "backend", proficiency: 75 },

  // Tools & DevOps
  { name: "Git & GitHub", icon: "📦", category: "tools", proficiency: 85 },
  { name: "Linux", icon: "🐧", category: "tools", proficiency: 65 },
  { name: "VS Code", icon: "💻", category: "tools", proficiency: 90 },
  { name: "Figma", icon: "🎯", category: "tools", proficiency: 75 },
  { name: "Shopify / WordPress", icon: "🛍️", category: "tools", proficiency: 80 },

  // Emerging Tech
  { name: "AI Prompt Engineering", icon: "🧠", category: "emerging", proficiency: 85 },
  { name: "Agile / Scrum", icon: "🔄", category: "emerging", proficiency: 80 },
  { name: "Technical Documentation", icon: "📝", category: "emerging", proficiency: 80 },
];
