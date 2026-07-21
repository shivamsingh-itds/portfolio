import type { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "project-one",
    title: "Your Project Title",
    description:
      "A short 1-2 sentence description of what this project does and why it matters.",
    techStack: ["Python", "PyTorch", "FastAPI"],
    githubLink: "https://github.com/yourusername/project-repo",
    liveDemo: "https://your-live-demo-link.com",
    thumbnail: "/assets/projects/project-one-thumb.png",
    category: "AI/ML",
    tags: ["LLM", "RAG", "Agents"],
    highlights: [
      "Built a retrieval pipeline that reduced hallucination rate by X%",
      "Deployed to production serving X requests/day",
    ],
    features: [
      "Feature one description",
      "Feature two description",
    ],
    screenshots: ["/assets/projects/project-one-1.png"],
    duration: "Jan 2026 – Mar 2026",
    status: "completed",
  },
  // Add more project objects here, following the same shape.
];