"use client";

import React, { createContext, useContext, useState, useCallback } from "react";
import {
  personalInfo as defaultPersonalInfo,
  education as defaultEducation,
  publications as defaultPublications,
  projects as defaultProjects,
  skillCategories as defaultSkillCategories,
  milestones as defaultMilestones,
  type Publication,
  type Project,
  type SkillCategory,
  type Milestone,
} from "./data";

interface ContentData {
  personalInfo: typeof defaultPersonalInfo;
  education: typeof defaultEducation;
  publications: Publication[];
  projects: Project[];
  skillCategories: SkillCategory[];
  milestones: Milestone[];
}

interface ContentContextType extends ContentData {
  updateContent: (data: Partial<ContentData>) => void;
  resetContent: () => void;
  exportContent: () => string;
  importContent: (json: string) => boolean;
  hasCustomContent: boolean;
}

const defaultContent: ContentData = {
  personalInfo: defaultPersonalInfo,
  education: defaultEducation,
  publications: defaultPublications,
  projects: defaultProjects,
  skillCategories: defaultSkillCategories,
  milestones: defaultMilestones,
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

  const updateContent = useCallback((data: Partial<ContentData>) => {
    setContent((prev: ContentData) => ({ ...prev, ...data }));
    setHasCustomContent(true);
  }, []);

  const resetContent = useCallback(() => {
    setContent(defaultContent);
    setHasCustomContent(false);
  }, []);

  const exportContent = useCallback(() => {
    return JSON.stringify(content, null, 2);
  }, [content]);

  const importContent = useCallback((json: string): boolean => {
    try {
      const parsed = JSON.parse(json) as ContentData;
      if (parsed.personalInfo && parsed.education) {
        setContent({ ...defaultContent, ...parsed });
        setHasCustomContent(true);
        return true;
      }
      return false;
    } catch {
      return false;
    }
  }, []);

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
