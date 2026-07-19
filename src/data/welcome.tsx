import type { ReactNode } from "react";

// This content gets rendered inside the "editor" pane when welcome.tsx is opened
export const welcomeContent: ReactNode = (
  <div className="space-y-4 font-mono text-sm leading-relaxed">
    <h1 className="text-2xl font-bold">👋 Hi, I'm Shivam Singh</h1>
    <p>
      I'm an <span className="text-blue-400">AI Engineer</span> focused on
      Machine Learning, Deep Learning, Generative AI, and Agentic AI systems.
    </p>
    <p className="text-gray-400">
      // Explore the sidebar to check out my skills, projects, and experience.
    </p>
    <p className="text-gray-400">
      // Tip: try opening the terminal below and type{" "}
      <span className="text-yellow-400">'help'</span>
    </p>
  </div>
);