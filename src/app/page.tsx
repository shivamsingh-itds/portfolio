import Editor from "@/components/vscode/editor";
import { welcomeContent } from "@/data/welcome";

export default function Home() {
  return <Editor content={welcomeContent} />;
}