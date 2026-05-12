import type { Experience } from "@/types";

export const experiences: Experience[] = [
  {
    id: "exp-1",
    company: "BONbLOC Technologies",
    role: "Associate Software Developer",
    period: { start: "2026-02", end: "Present" },
    location: "On-site / Hybrid",
    description:
      "Architecting and deploying scalable web applications using modern, component-driven frontend frameworks and robust backend architectures.",
    achievements: [
      "Driving application stability and performance optimization across production environments.",
      "Leveraging advanced development ecosystems to accelerate feature delivery.",
      "Maintaining clean, modular codebases and ensuring seamless user experiences."
    ],
    technologies: ["React", "Node.js", "JavaScript", "TypeScript", "Tailwind CSS"],
    type: "fulltime",
  },
  {
    id: "exp-2",
    company: "BONbLOC Technologies",
    role: "Graduate Intern",
    period: { start: "2025-08", end: "2026-02" },
    location: "On-site / Hybrid",
    description:
      "Accelerated the development lifecycle by delivering critical web features and resolving complex application bugs.",
    achievements: [
      "Collaborated with senior engineering teams to maintain and refactor legacy code.",
      "Improved overall system maintainability and deployment efficiency.",
      "Gained hands-on experience in full-stack development and enterprise workflows."
    ],
    technologies: ["JavaScript", "HTML", "CSS", "Git", "Agile"],
    type: "internship",
  },
  {
    id: "exp-3",
    company: "GAO Tek Inc",
    role: "Frontend Engineering Intern",
    period: { start: "2024-07", end: "2024-11" },
    location: "Remote",
    description:
      "Engineered responsive and accessible user interfaces, overhauling site navigation to significantly improve user retention and engagement.",
    achievements: [
      "Implemented semantic HTML5 and modular CSS architectures.",
      "Ensured cross-browser compatibility and optimized page load times.",
      "Transformed UI mockups into fully functional, interactive web components."
    ],
    technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
    type: "internship",
  }
];
