"use client";

import React, { createContext, useContext, useState, useEffect, useCallback } from "react";
import {
  personalInfo as defaultPersonalInfo,
  education as defaultEducation,
  publications as defaultPublications,
  projects as defaultProjects,
  skillCategories as defaultSkillCategories,
  type Publication,
  type Project,
  type SkillCategory,
} from "./data";

interface ContentData {
  personalInfo: typeof defaultPersonalInfo;
  education: typeof defaultEducation;
  publications: Publication[];
  projects: Project[];
  skillCategories: SkillCategory[];
}

interface ContentContextType extends ContentData {
  updateContent: (data: Partial<ContentData>) => void;
  resetContent: () => void;
  exportContent: () => string;
  importContent: (json: string) => boolean;
  hasCustomContent: boolean;
}

const STORAGE_KEY = "asif-portfolio-content";

const defaultContent: ContentData = {
  personalInfo: defaultPersonalInfo,
  education: defaultEducation,
  publications: defaultPublications,
  projects: defaultProjects,
  skillCategories: defaultSkillCategories,
};

const ContentContext = createContext<ContentContextType>({
  ...defaultContent,
  updateContent: () => {},
  resetContent: () => {},
  exportContent: () => "",
  importContent: () => false,
  hasCustomContent: false,
});

export function ContentProvider({ children }: { children: React.ReactNode }) {
  const [content, setContent] = useState<ContentData>(defaultContent);
  const [hasCustomContent, setHasCustomContent] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored) as Partial<ContentData>;
        setContent((prev) => ({ ...prev, ...parsed }));
        setHasCustomContent(true);
      }
    } catch {
      // If parsing fails, use defaults
    }
    setIsLoaded(true);
  }, []);

  const updateContent = useCallback((data: Partial<ContentData>) => {
    setContent((prev) => {
      const updated = { ...prev, ...data };
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
      } catch {
        // Storage full or unavailable
      }
      return updated;
    });
    setHasCustomContent(true);
  }, []);

  const resetContent = useCallback(() => {
    setContent(defaultContent);
    setHasCustomContent(false);
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      // ignore
    }
  }, []);

  const exportContent = useCallback(() => {
    return JSON.stringify(content, null, 2);
  }, [content]);

  const importContent = useCallback((json: string): boolean => {
    try {
      const parsed = JSON.parse(json) as ContentData;
      // Basic validation
      if (parsed.personalInfo && parsed.education) {
        setContent({ ...defaultContent, ...parsed });
        localStorage.setItem(STORAGE_KEY, JSON.stringify({ ...defaultContent, ...parsed }));
        setHasCustomContent(true);
        return true;
      }
      return false;
    } catch {
      return false;
    }
  }, []);

  // Render children only after loading localStorage to avoid hydration mismatch
  if (!isLoaded) {
    return null;
  }

  return (
    <ContentContext.Provider
      value={{
        ...content,
        updateContent,
        resetContent,
        exportContent,
        importContent,
        hasCustomContent,
      }}
    >
      {children}
    </ContentContext.Provider>
  );
}

export function useContent() {
  return useContext(ContentContext);
}
