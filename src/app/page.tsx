import Editor from "@/components/vscode/editor";
import { welcomeContent } from "@/data/welcome";

export default function Home() {
  return <Editor content={welcomeContent} />;
}

import skillsData from "@/data/skills.json";
import type { SkillsData } from "@/types";

const typedSkills: SkillsData = skillsData; // should show NO red underline
console.log(typedSkills);