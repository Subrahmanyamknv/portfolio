import type { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "project-1",
    title: "AI-Powered Desktop Assistant",
    description:
      "A cognitive desktop companion capable of understanding natural language commands and hands-free automation.",
    longDescription:
      "Designed and engineered an AI desktop companion utilizing speech recognition and large language models. Integrated OpenAI's API with real-time speech-to-text processing to create a seamless, hands-free automation tool for daily productivity.",
    image: "/images/projects/nebula.jpg", // Kept generic placeholder images since no custom images exist yet
    technologies: ["Python", "OpenAI API", "Google TTS", "Speech Recognition"],
    category: "AI/ML",
    featured: true,
    githubUrl: "https://github.com/Subrahmanyamknv",
    metrics: [
      { label: "Platform", value: "Desktop" },
      { label: "Core Feature", value: "NLP" },
    ],
    year: "2024",
  },
  {
    id: "project-2",
    title: "Dynamic Meteorological Dashboard",
    description:
      "A high-performance, responsive web application that aggregates and visualizes real-time meteorological data.",
    longDescription:
      "Built a weather forecasting dashboard focused on asynchronous state management and clean, interactive data visualization. Architected a scalable API integration layer to fetch and parse live data from OpenWeather API.",
    image: "/images/projects/dataforge.jpg", // Kept generic placeholder
    technologies: ["JavaScript", "HTML5", "CSS3", "OpenWeather API"],
    category: "Web Application",
    featured: true,
    githubUrl: "https://github.com/Subrahmanyamknv",
    metrics: [
      { label: "Updates", value: "Real-time" },
      { label: "Focus", value: "Async Data" },
    ],
    year: "2024",
  }
];

export const projectCategories = [
  "All",
  ...Array.from(new Set(projects.map((p) => p.category))),
];
