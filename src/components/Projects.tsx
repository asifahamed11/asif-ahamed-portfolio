"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Github, ExternalLink, ArrowUpRight, Star, Eye, X, ChevronDown, ChevronUp, Code2
} from "lucide-react";
import { useContent } from "@/lib/content-provider";
import { type Project } from "@/lib/data";
import SpotlightCard from "@/components/animations/SpotlightCard";

type ProjectDomain = "all" | "ai-ml" | "systems-tools" | "web-mobile";

function getDomainLabel(domain: Project["domain"]) {
  switch (domain) {
    case "ai-ml": return "AI & ML";
    case "systems-tools": return "Systems";
    case "web-mobile": return "Web";
    default: return "Software";
  }
}

export default function Projects() {
  const { projects } = useContent();
  const [activeDomain, setActiveDomain] = useState<ProjectDomain>("all");
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);
  const [showAll, setShowAll] = useState(false);

  const domainTabs: { label: string; value: ProjectDomain; count: number }[] = useMemo(() => [
    { label: "All", value: "all", count: projects.length },
    { label: "AI & ML", value: "ai-ml", count: projects.filter((p) => p.domain === "ai-ml").length },
    { label: "Systems", value: "systems-tools", count: projects.filter((p) => p.domain === "systems-tools").length },
    { label: "Web", value: "web-mobile", count: projects.filter((p) => p.domain === "web-mobile").length },
  ], [projects]);

  const filteredProjects = useMemo(() => {
    if (activeDomain === "all") return projects;
    return projects.filter((p) => p.domain === activeDomain);
  }, [projects, activeDomain]);

  const isFiltered = activeDomain !== "all";
  const displayedProjects = isFiltered || showAll ? filteredProjects : filteredProjects.slice(0, 4);

  return (
    <motion.section
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.55 }}
      id="projects"
      className="w-full flex flex-col justify-between"
    >
      <div>
        {/* Minimal Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 mb-3.5 pb-2.5 border-b border-[#E2DDD4] dark:border-[#23293A]">
          <div className="flex items-center gap-2 shrink-0">
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#18181B] dark:text-[#F8FAFC] flex items-center gap-2 whitespace-nowrap">
              <Code2 className="w-5 h-5 text-[#52525B] dark:text-[#94A3B8] inline-block shrink-0" />
              <span>Projects</span>
            </h2>
            <span className="text-xs font-mono px-2 py-0.5 rounded-full bg-[#EFECE6] dark:bg-[#12151F] text-[#18181B] dark:text-[#F8FAFC] font-semibold border border-[#E2DDD4] dark:border-[#23293A]">
              {projects.length}
            </span>
          </div>

          {/* Domain Segmented Tabs with Sliding Pill */}
          <div className="flex flex-wrap gap-1 relative">
            {domainTabs.map((tab) => {
              const isActive = activeDomain === tab.value;
              return (
                <button
                  key={tab.value}
                  onClick={() => { setActiveDomain(tab.value); setShowAll(true); }}
                  className={`relative px-2.5 py-0.5 rounded-md text-xs font-medium transition-colors flex items-center gap-1 ${
                    isActive
                      ? "text-white dark:text-[#0B0D13] font-semibold"
                      : "text-[#52525B] dark:text-[#94A3B8] hover:text-[#18181B] dark:hover:text-[#F8FAFC]"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="activeProjectPill"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                      className="absolute inset-0 bg-[#18181B] dark:bg-[#F8FAFC] rounded-md shadow-2xs z-0"
                    />
                  )}
                  <span className="relative z-10">{tab.label}</span>
                  <span className={`relative z-10 text-[10px] font-mono px-1 rounded ${
                    isActive ? "bg-[#3F3F46] dark:bg-[#E2E8F0] text-[#F8FAFC] dark:text-[#0B0D13]" : "bg-[#EFECE6] dark:bg-[#1D2230] text-[#71717A] dark:text-[#94A3B8]"
                  }`}>
                    {tab.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* 2-Column Projects Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <AnimatePresence mode="popLayout">
            {displayedProjects.map((project) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.25 }}
              >
                <SpotlightCard
                  spotlightColor="rgba(99, 102, 241, 0.12)"
                  className="p-3.5 rounded-xl bg-white dark:bg-[#12151F] border border-[#E2DDD4] dark:border-[#23293A] hover:border-indigo-300/80 dark:hover:border-[#333C52] hover:shadow-2xs transition-all flex flex-col justify-between shadow-2xs group h-full"
                >
                  <div>
                    {/* Header: Language & Domain */}
                    <div className="flex items-center justify-between gap-1.5 mb-1.5">
                      <div className="flex items-center gap-1.5">
                        {project.language && (
                          <span className="text-[10px] font-mono font-bold px-1.5 py-0.2 rounded bg-indigo-50 dark:bg-indigo-950/80 text-indigo-700 dark:text-indigo-300 border border-indigo-200/80 dark:border-indigo-800/80">
                            {project.language}
                          </span>
                        )}
                        <span className="text-[11px] font-mono text-[#71717A] dark:text-[#94A3B8]">
                          {getDomainLabel(project.domain)}
                        </span>
                      </div>

                      {project.stars && project.stars > 0 ? (
                        <span className="inline-flex items-center gap-1 text-[10px] font-mono font-bold text-amber-700 dark:text-amber-300 bg-amber-50 dark:bg-amber-950/60 px-1.5 py-0.2 rounded border border-amber-200 dark:border-amber-800/80">
                          <Star className="w-2.5 h-2.5 text-amber-500 fill-amber-500" /> {project.stars}
                        </span>
                      ) : null}
                    </div>

                    {/* Title */}
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block mb-1"
                    >
                      <h3 className="text-sm font-bold text-[#18181B] dark:text-[#F8FAFC] flex items-center gap-1 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors leading-tight">
                        <span className="truncate">{project.title}</span>
                        <ArrowUpRight className="w-3 h-3 text-[#A1A1AA] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shrink-0" />
                      </h3>
                    </a>

                    {/* Concise Description */}
                    <p className="text-xs text-[#52525B] dark:text-[#94A3B8] leading-relaxed mb-2 font-normal line-clamp-2">
                      {project.description}
                    </p>
                  </div>

                  <div>
                    {/* Tech Chips */}
                    <div className="flex flex-wrap gap-1 pt-1.5 border-t border-[#E2DDD4]/60 dark:border-[#23293A] mb-2 text-[10px]">
                      {project.tech.slice(0, 3).map((t) => (
                        <span key={t} className="px-1.5 py-0.2 rounded bg-[#EFECE6] dark:bg-[#1D2230] text-[#52525B] dark:text-[#94A3B8] border border-[#E2DDD4]/80 dark:border-[#23293A]">
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Footer Action Links */}
                    <div className="flex items-center justify-between text-xs font-medium pt-0.5">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs text-[#52525B] dark:text-[#94A3B8] hover:text-[#18181B] dark:hover:text-white transition-colors"
                      >
                        <Github className="w-3.5 h-3.5" /> Code
                      </a>

                      <div className="flex items-center gap-1.5">
                        {project.image && (
                          <button
                            onClick={() => setActiveModalProject(project)}
                            className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[11px] font-medium text-[#18181B] dark:text-[#F8FAFC] bg-[#EFECE6] dark:bg-[#1D2230] hover:bg-[#E5E0D5] dark:hover:bg-[#2A3144] border border-[#E2DDD4] dark:border-transparent transition-all active:scale-95 shadow-2xs"
                          >
                            <Eye className="w-3 h-3 text-indigo-600 dark:text-indigo-400" /> Preview
                          </button>
                        )}
                        {project.live && (
                          <a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[11px] font-semibold text-emerald-800 dark:text-emerald-300 bg-emerald-100 dark:bg-emerald-950/70 hover:bg-emerald-200 dark:hover:bg-emerald-900 border border-emerald-300/80 dark:border-emerald-800/80 transition-colors shadow-2xs"
                          >
                            <ExternalLink className="w-3 h-3 text-emerald-700 dark:text-emerald-400" /> Live
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </SpotlightCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* View All Button */}
      {!isFiltered && projects.length > 4 && (
        <div className="mt-3 text-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="inline-flex items-center gap-1 px-3.5 py-1 bg-white dark:bg-[#12151F] hover:bg-[#FAF9F5] dark:hover:bg-[#1D2230] text-[#18181B] dark:text-[#F8FAFC] text-xs sm:text-sm font-semibold rounded-lg border border-[#E2DDD4] dark:border-[#23293A] transition-all shadow-2xs active:scale-95"
          >
            <span>{showAll ? "Show Top 4 Projects" : `View All ${projects.length} Repositories`}</span>
            {showAll ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
          </button>
        </div>
      )}

      {/* Ultra-Compact & Elegant Preview Lightbox Modal */}
      <AnimatePresence>
        {activeModalProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveModalProject(null)}
            className="fixed inset-0 z-50 bg-black/65 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 10 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 10 }}
              transition={{ type: "spring", stiffness: 350, damping: 28 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white dark:bg-[#12151F] rounded-xl max-w-lg w-full shadow-2xl border border-[#E2DDD4] dark:border-[#23293A] overflow-hidden relative"
            >
              {/* Slim Modern Header */}
              <div className="flex items-center justify-between px-3.5 py-2.5 bg-[#FAF9F5] dark:bg-[#0B0D13] border-b border-[#E2DDD4] dark:border-[#23293A]">
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-400 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-400 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 inline-block" />
                  </div>
                  <span className="text-xs font-mono font-medium text-[#18181B] dark:text-[#F8FAFC] truncate pl-1">
                    {activeModalProject.title}
                  </span>
                </div>

                <button
                  onClick={() => setActiveModalProject(null)}
                  className="p-1 rounded-md hover:bg-[#EFECE6] dark:hover:bg-[#1D2230] text-[#71717A] dark:text-[#94A3B8] hover:text-[#18181B] dark:hover:text-white transition-colors"
                  aria-label="Close modal"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Compact Body Content */}
              <div className="p-4 space-y-3">
                {activeModalProject.image && (
                  <div className="rounded-lg overflow-hidden border border-[#E2DDD4] dark:border-[#23293A] bg-[#0B0D13] p-1 flex items-center justify-center">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={activeModalProject.image}
                      alt={`${activeModalProject.title} preview`}
                      className="max-h-48 w-auto max-w-full object-contain rounded"
                    />
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <h3 className="text-base font-bold text-[#18181B] dark:text-[#F8FAFC] leading-tight">
                      {activeModalProject.title}
                    </h3>
                    <span className="text-[11px] font-mono font-medium px-2 py-0.5 rounded bg-indigo-50 dark:bg-indigo-950/80 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800 shrink-0">
                      {activeModalProject.language} • {getDomainLabel(activeModalProject.domain)}
                    </span>
                  </div>

                  <p className="text-xs sm:text-[13px] text-[#52525B] dark:text-[#94A3B8] leading-relaxed">
                    {activeModalProject.description}
                  </p>
                </div>

                {/* Tech Chips */}
                <div className="flex flex-wrap gap-1 pt-1">
                  {activeModalProject.tech.map((t) => (
                    <span key={t} className="px-2 py-0.5 text-[10px] sm:text-[11px] font-mono rounded bg-[#EFECE6] dark:bg-[#1D2230] text-[#18181B] dark:text-[#F8FAFC] border border-[#E2DDD4] dark:border-[#23293A]">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Compact Footer Actions */}
              <div className="px-4 py-2.5 bg-[#FAF9F5] dark:bg-[#0B0D13] border-t border-[#E2DDD4] dark:border-[#23293A] flex items-center justify-end gap-2">
                <a
                  href={activeModalProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 bg-[#18181B] hover:bg-[#27272A] dark:bg-[#F8FAFC] dark:hover:bg-white text-[#F6F4EE] dark:text-[#0B0D13] text-xs font-semibold rounded-lg transition-colors flex items-center gap-1.5 shadow-2xs active:scale-95"
                >
                  <Github className="w-3.5 h-3.5" /> Code
                </a>
                {activeModalProject.live && (
                  <a
                    href={activeModalProject.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-500 dark:hover:bg-emerald-400 text-white dark:text-[#0B0D13] text-xs font-semibold rounded-lg transition-colors flex items-center gap-1.5 shadow-2xs active:scale-95"
                  >
                    <ExternalLink className="w-3.5 h-3.5" /> Live Demo
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
}
