import type { Achievement } from "@/types";

export const achievements: Achievement[] = [
  {
    id: "ach-1",
    title: "B.Tech in Computer Science",
    description: "NRI Institute of Technology, Vijayawada, AP (2021 - 2025)",
    icon: "award",
    type: "education",
    date: "2025",
  },
  {
    id: "ach-2",
    title: "Full-Stack Web Development Bootcamp",
    description: "Comprehensive certification from Udemy covering modern web architectures.",
    icon: "award",
    type: "certification",
  },
  {
    id: "ach-3",
    title: "Scrum Master & Agile Certification",
    description: "Certified by Udemy in Agile methodologies and Scrum frameworks.",
    icon: "award",
    type: "certification",
    date: "2025",
  },
  {
    id: "ach-4",
    title: "Wipro TalentNext",
    description: "Completed the Digital Skills Readiness program for Java Full Stack.",
    icon: "star",
    type: "certification",
  },
  {
    id: "ach-5",
    title: "AI Foundations & ML",
    description: "LinkedIn Learning certification in Artificial Intelligence Fundamentals.",
    icon: "globe",
    type: "certification",
  },
  {
    id: "ach-6",
    title: "Prompt Engineering for Generative AI",
    description: "Advanced learning in interacting with and leveraging LLMs effectively.",
    icon: "mic",
    type: "certification",
  },
];

export const stats = [
  { label: "Years Experience", value: 1, suffix: "+" },
  { label: "Core Skills", value: 20, suffix: "+" },
  { label: "Certifications", value: 8, suffix: "+" },
  { label: "Hackathons", value: 1, suffix: "+" },
];
