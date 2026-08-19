"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Github, ExternalLink, ArrowUpRight, Star, Eye, X, ChevronDown, ChevronUp, BookOpen
} from "lucide-react";
import { useContent } from "@/lib/content-provider";
import { type Project } from "@/lib/data";

type ProjectDomain = "all" | "ai-ml" | "systems-tools" | "web-mobile";

function getDomainLabel(domain: Project["domain"]) {
  switch (domain) {
    case "ai-ml": return "AI & ML";
    case "systems-tools": return "Systems & Tools";
    case "web-mobile": return "Web & Mobile";
    default: return "Software";
  }
}

export default function Projects() {
  const { projects } = useContent();
  const [activeDomain, setActiveDomain] = useState<ProjectDomain>("all");
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);
  const [showAll, setShowAll] = useState(false);

  const domainTabs: { label: string; value: ProjectDomain; count: number }[] = useMemo(() => [
    { label: "All Projects", value: "all", count: projects.length },
    { label: "AI & Machine Learning", value: "ai-ml", count: projects.filter((p) => p.domain === "ai-ml").length },
    { label: "Systems & Utilities", value: "systems-tools", count: projects.filter((p) => p.domain === "systems-tools").length },
    { label: "Web & Applications", value: "web-mobile", count: projects.filter((p) => p.domain === "web-mobile").length },
  ], [projects]);

  const filteredProjects = useMemo(() => {
    if (activeDomain === "all") return projects;
    return projects.filter((p) => p.domain === activeDomain);
  }, [projects, activeDomain]);

  // Show top 6 projects by default unless activeDomain is changed or showAll is clicked
  const isFiltered = activeDomain !== "all";
  const displayedProjects = isFiltered || showAll ? filteredProjects : filteredProjects.slice(0, 6);

  return (
    <section id="projects" className="py-12 sm:py-16 px-4 sm:px-6 border-t border-stone-200/80 bg-white">
      <div className="max-w-5xl mx-auto">
        
        {/* Header with Title & Filter Tabs */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-5">
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-xl sm:text-2xl font-serif font-bold text-stone-900">
                Selected Projects
              </h2>
              <span className="text-xs font-mono px-2 py-0.5 rounded-full bg-stone-100 text-stone-700 font-semibold border border-stone-200">
                {projects.length} Repos
              </span>
            </div>
            <p className="text-xs text-stone-500 mt-0.5">
              Open-source software, deep learning pipelines, and system utilities
            </p>
          </div>

          {/* Domain Segmented Tabs */}
          <div className="flex flex-wrap gap-1">
            {domainTabs.map((tab) => {
              const isActive = activeDomain === tab.value;
              return (
                <button
                  key={tab.value}
                  onClick={() => { setActiveDomain(tab.value); setShowAll(true); }}
                  className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-colors flex items-center gap-1.5 ${
                    isActive
                      ? "bg-stone-900 text-white"
                      : "bg-stone-100 text-stone-600 hover:text-stone-900 hover:bg-stone-200/70"
                  }`}
                >
                  <span>{tab.label}</span>
                  <span className={`text-[9px] font-mono px-1 rounded ${
                    isActive ? "bg-stone-800 text-stone-300" : "bg-stone-200 text-stone-500"
                  }`}>
                    {tab.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Compact Projects Grid (3 Columns) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
          {displayedProjects.map((project) => (
            <div
              key={project.title}
              className="p-4 rounded-xl bg-white border border-stone-200 hover:border-stone-400/80 transition-all flex flex-col justify-between shadow-xs group"
            >
              <div>
                {/* Header: Language, Star, Domain */}
                <div className="flex items-center justify-between gap-1 mb-2">
                  <div className="flex items-center gap-1.5">
                    {project.language && (
                      <span className="text-[10px] font-mono font-bold px-1.5 py-0.5 rounded bg-stone-100 text-stone-700 border border-stone-200">
                        {project.language}
                      </span>
                    )}
                    <span className="text-[10px] font-mono text-stone-400">
                      {getDomainLabel(project.domain)}
                    </span>
                  </div>

                  {project.stars && project.stars > 0 ? (
                    <span className="inline-flex items-center gap-1 text-[10px] font-mono font-bold text-amber-900 bg-amber-50 px-1.5 py-0.5 rounded border border-amber-200/70">
                      <Star className="w-2.5 h-2.5 text-amber-500 fill-amber-400" /> {project.stars}
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
                  <h3 className="text-xs sm:text-sm font-bold text-stone-900 flex items-center gap-1 group-hover:text-indigo-600 transition-colors leading-tight">
                    <span className="truncate">{project.title}</span>
                    <ArrowUpRight className="w-3 h-3 text-stone-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shrink-0" />
                  </h3>
                </a>

                {/* Description */}
                <p className="text-[11px] text-stone-600 leading-snug mb-2 font-normal line-clamp-2">
                  {project.description}
                </p>

                {/* Related Research Paper Link */}
                {project.relatedPaperTitle && (
                  <a
                    href="#research"
                    className="inline-flex items-center gap-1 px-2 py-0.5 mb-2 rounded bg-indigo-50/70 hover:bg-indigo-100 text-indigo-800 text-[10px] font-medium transition-colors w-full truncate"
                  >
                    <BookOpen className="w-2.5 h-2.5 text-indigo-600 shrink-0" />
                    <span className="truncate">Paper: {project.relatedPaperTitle}</span>
                  </a>
                )}
              </div>

              <div>
                {/* Tech Stack Chips */}
                <div className="flex flex-wrap gap-1 pt-2 border-t border-stone-100 mb-2.5 text-[10px]">
                  {project.tech.slice(0, 3).map((t) => (
                    <span key={t} className="px-1.5 py-0.2 rounded bg-stone-100 text-stone-600">
                      {t}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="px-1 text-stone-400">+{project.tech.length - 3}</span>
                  )}
                </div>

                {/* Footer Action Links */}
                <div className="flex items-center justify-between text-xs font-medium pt-0.5">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[11px] text-stone-700 hover:text-stone-900 transition-colors"
                  >
                    <Github className="w-3 h-3" /> Code
                  </a>

                  <div className="flex items-center gap-1.5">
                    {project.image && (
                      <button
                        onClick={() => setActiveModalProject(project)}
                        className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-medium text-stone-700 bg-stone-100 hover:bg-stone-200 transition-colors"
                      >
                        <Eye className="w-2.5 h-2.5" /> Preview
                      </button>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-semibold text-indigo-700 bg-indigo-50 hover:bg-indigo-100 transition-colors"
                      >
                        <ExternalLink className="w-2.5 h-2.5" /> Live
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Show More / Show Less Toggle */}
        {!isFiltered && projects.length > 6 && (
          <div className="mt-4 text-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-stone-50 hover:bg-stone-100 text-stone-800 text-xs font-semibold rounded-lg border border-stone-200 transition-colors shadow-xs"
            >
              <span>{showAll ? "Show Top 6 Projects" : `View All ${projects.length} Repositories`}</span>
              {showAll ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
            </button>
          </div>
        )}

        {/* Uncropped Modal Lightbox */}
        <AnimatePresence>
          {activeModalProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveModalProject(null)}
              className="fixed inset-0 z-50 bg-stone-950/70 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
            >
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-white rounded-2xl max-w-3xl w-full shadow-2xl border border-stone-200 overflow-hidden relative max-h-[92vh] flex flex-col justify-between"
              >
                {/* Mac Header */}
                <div className="flex items-center justify-between px-4 py-3 bg-stone-900 text-white border-b border-stone-800">
                  <div className="flex items-center gap-2.5">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-rose-500 inline-block" />
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-500 inline-block" />
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block" />
                    </div>
                    <span className="text-xs font-mono text-stone-300 truncate">
                      {activeModalProject.title}
                    </span>
                  </div>

                  <button
                    onClick={() => setActiveModalProject(null)}
                    className="p-1 rounded-lg hover:bg-stone-800 text-stone-400 hover:text-white transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                {/* Body Content */}
                <div className="overflow-y-auto p-5 sm:p-6 max-h-[70vh]">
                  {activeModalProject.image ? (
                    <div className="rounded-xl overflow-hidden border border-stone-200 bg-stone-950 p-2 mb-4 flex items-center justify-center">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={activeModalProject.image}
                        alt={`${activeModalProject.title} full preview`}
                        className="max-h-[48vh] w-auto max-w-full object-contain rounded"
                      />
                    </div>
                  ) : null}

                  <h3 className="text-lg font-bold text-stone-900 mb-1">{activeModalProject.title}</h3>
                  <p className="text-xs text-stone-500 font-mono mb-3">
                    {activeModalProject.language} • {getDomainLabel(activeModalProject.domain)}
                  </p>
                  <p className="text-sm text-stone-700 leading-relaxed mb-4">
                    {activeModalProject.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5">
                    {activeModalProject.tech.map((t) => (
                      <span key={t} className="px-2.5 py-1 text-xs font-medium rounded-md bg-stone-100 text-stone-700">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer Actions */}
                <div className="p-4 bg-stone-50 border-t border-stone-200 flex items-center justify-end gap-3">
                  <a
                    href={activeModalProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-stone-900 hover:bg-stone-800 text-white text-xs font-semibold rounded-lg transition-colors flex items-center gap-1.5"
                  >
                    <Github className="w-3.5 h-3.5" /> View on GitHub
                  </a>
                  {activeModalProject.live && (
                    <a
                      href={activeModalProject.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold rounded-lg transition-colors flex items-center gap-1.5"
                    >
                      <ExternalLink className="w-3.5 h-3.5" /> Live Demo
                    </a>
                  )}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
