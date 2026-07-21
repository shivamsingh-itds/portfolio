// Represents a single "file" the user can open in our VS Code explorer
export interface FileItem {
  id: string;          // unique identifier, e.g. "about"
  name: string;         // display name, e.g. "about.tsx"
  icon: string;          // which icon to show (we'll map this to a Lucide icon)
  type: "file";          // literal type — always the string "file" for files
}

// Represents a folder in the explorer, which can contain files or more folders
export interface FolderItem {
  id: string;
  name: string;
  type: "folder";
  children: (FileItem | FolderItem)[]; // a folder holds a mix of files and subfolders
}

// A currently open tab in the editor
export interface Tab {
  id: string;        // matches the FileItem id it represents
  name: string;       // shown on the tab, e.g. "about.tsx"
  icon: string;
}

// Supported VS Code themes
export type ThemeName =
  | "github-dark"
  | "one-dark-pro"
  | "dracula"
  | "nord"
  | "tokyo-night"
  | "catppuccin"
  | "monokai";

  // Skills data shape: category name → list of skill names
export type SkillsData = Record<string, string[]>;

export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  githubLink?: string;      // optional — some projects may not have public code
  liveDemo?: string;        // optional — some projects may not be deployed
  thumbnail: string;         // path to an image, e.g. "/assets/projects/foo.png"
  category: string;          // e.g. "AI/ML", "Web App", "Tool"
  tags: string[];
  highlights: string[];      // short bullet points, e.g. "Reduced inference time by 40%"
  features: string[];
  screenshots: string[];     // array of image paths
  duration: string;          // e.g. "3 months" or "Jan 2025 – Mar 2025"
  status: "completed" | "in-progress" | "archived";
}