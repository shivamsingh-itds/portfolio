"use client";

import { createContext, useContext, useState, type ReactNode } from "react";
import type { Tab } from "@/types";

interface EditorContextType {
  openTabs: Tab[];
  activeTabId: string | null;
  openFile: (tab: Tab) => void;
  closeTab: (id: string) => void;
  setActiveTab: (id: string) => void;
}

// The Context object itself — starts undefined, gets filled in by the Provider below
const EditorContext = createContext<EditorContextType | undefined>(undefined);

// The Provider wraps our whole app and supplies the actual state + functions
export function EditorProvider({ children }: { children: ReactNode }) {
  const [openTabs, setOpenTabs] = useState<Tab[]>([]);
  const [activeTabId, setActiveTabId] = useState<string | null>(null);

  // Opens a file: adds it to tabs (if not already open) and makes it active
  function openFile(tab: Tab) {
    setOpenTabs((prev) => {
      const alreadyOpen = prev.some((t) => t.id === tab.id);
      if (alreadyOpen) return prev;
      return [...prev, tab];
    });
    setActiveTabId(tab.id);
  }

  // Closes a tab; if it was the active one, switches to another open tab (or none)
  function closeTab(id: string) {
    setOpenTabs((prev) => {
      const filtered = prev.filter((t) => t.id !== id);
      if (activeTabId === id) {
        setActiveTabId(filtered.length > 0 ? filtered[filtered.length - 1].id : null);
      }
      return filtered;
    });
  }

  function setActiveTab(id: string) {
    setActiveTabId(id);
  }

  return (
    <EditorContext.Provider
      value={{ openTabs, activeTabId, openFile, closeTab, setActiveTab }}
    >
      {children}
    </EditorContext.Provider>
  );
}

// Custom hook so other components can easily access this context
export function useEditor() {
  const context = useContext(EditorContext);
  if (!context) {
    throw new Error("useEditor must be used within an EditorProvider");
  }
  return context;
}