import type { ReactNode } from "react";

interface EditorProps {
  content: ReactNode;
}

// Displays whatever content is passed to it, styled like a code editor pane
export default function Editor({ content }: EditorProps) {
  return (
    <div className="h-screen w-full bg-[#1e1e1e] p-6 text-white overflow-y-auto">
      {content}
    </div>
  );
}