"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Copy, Check, Code, Award, ChevronDown, ChevronUp, BookOpen
} from "lucide-react";
import { useContent } from "@/lib/content-provider";
import { type Publication } from "@/lib/data";
import { copyToClipboard } from "@/lib/utils";

type FilterCategory = "all" | "awarded" | "bioinformatics" | "vision" | "remote-sensing" | "ai-ml";

function PublicationRow({ pub, isExpanded, onToggle }: { pub: Publication; isExpanded: boolean; onToggle: () => void }) {
  const [copiedType, setCopiedType] = useState<"apa" | "bibtex" | null>(null);

  const copyAPA = async (e: React.MouseEvent) => {
    e.stopPropagation();
    const venue = pub.conference || pub.book || pub.venuePublisher || "Thesis";
    const citation = `${pub.authors ? pub.authors + ". " : ""}(${pub.year}). "${pub.title}." ${venue}. ${pub.doi ? `https://doi.org/${pub.doi}` : `(${pub.status})`}`;
    await copyToClipboard(citation);
    setCopiedType("apa");
    setTimeout(() => setCopiedType(null), 2000);
  };

  const copyBibTeX = async (e: React.MouseEvent) => {
    e.stopPropagation();
    const bib = pub.bibtex || `@article{asif2026pub${pub.id},\n  title={${pub.title}},\n  author={${pub.authors || "Ahamed, Asif"}},\n  year={2026}\n}`;
    await copyToClipboard(bib);
    setCopiedType("bibtex");
    setTimeout(() => setCopiedType(null), 2000);
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ duration: 0.25 }}
      className={`border rounded-2xl transition-all duration-200 overflow-hidden ${
        pub.isAwarded
          ? "border-amber-300/80 dark:border-amber-500/40 bg-amber-50/50 dark:bg-amber-950/20 shadow-2xs"
          : isExpanded
          ? "border-indigo-200 dark:border-indigo-500/30 bg-[#FFFFFF] dark:bg-[#161A26] shadow-xs"
          : "border-[#E2DDD4] dark:border-[#23293A] bg-[#FFFFFF] dark:bg-[#12151F] hover:border-indigo-200 dark:hover:border-[#333C52] hover:shadow-2xs"
      }`}
    >
      {/* Clean Main Row */}
      <div
        onClick={onToggle}
        className="p-4 cursor-pointer grid grid-cols-[auto_minmax(0,1fr)] lg:grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-x-3 gap-y-2 select-none"
      >
        <div className="flex items-center gap-2.5 min-w-0">
          {/* Venue Badge with Vivid Colors */}
          <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-md bg-indigo-50 dark:bg-indigo-950/80 text-indigo-700 dark:text-indigo-300 border border-indigo-200/80 dark:border-indigo-800/80 text-center shrink-0">
            {pub.venuePublisher || "IEEE"}
          </span>

          {/* Title & Award */}
          <div className="min-w-0">
            <h3 className="text-sm sm:text-[15px] font-bold text-[#18181B] dark:text-[#F8FAFC] leading-snug line-clamp-2">
              {pub.title}
            </h3>
            {pub.isAwarded && (
              <span className="inline-flex items-center gap-1 mt-1 text-[10px] font-semibold px-2 py-0.5 rounded-full bg-amber-100 dark:bg-amber-900/50 text-amber-800 dark:text-amber-300 border border-amber-300/80 dark:border-amber-600/50">
                <Award className="w-2.5 h-2.5 text-amber-600 dark:text-amber-400" />
                <span>{pub.awardTitle}</span>
              </span>
            )}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="col-start-2 lg:col-start-3 flex items-center gap-1.5 shrink-0 justify-self-start lg:justify-self-end">
          <button
            onClick={copyAPA}
            className="px-2 py-1 rounded-md text-xs font-mono text-[#52525B] dark:text-[#94A3B8] hover:text-[#18181B] dark:hover:text-white bg-[#EFECE6] dark:bg-[#1D2230] hover:bg-[#E5E0D5] dark:hover:bg-[#2A3144] transition-colors flex items-center gap-1 active:scale-95"
            title="Copy APA Citation"
          >
            {copiedType === "apa" ? <Check className="w-3 h-3 text-emerald-600 dark:text-emerald-400" /> : <Copy className="w-3 h-3" />}
            <span className="hidden sm:inline">APA</span>
          </button>

          <button
            onClick={copyBibTeX}
            className="px-2 py-1 rounded-md text-xs font-mono text-[#52525B] dark:text-[#94A3B8] hover:text-[#18181B] dark:hover:text-white bg-[#EFECE6] dark:bg-[#1D2230] hover:bg-[#E5E0D5] dark:hover:bg-[#2A3144] transition-colors flex items-center gap-1 active:scale-95"
            title="Copy BibTeX Citation"
          >
            {copiedType === "bibtex" ? <Check className="w-3 h-3 text-emerald-600 dark:text-emerald-400" /> : <Code className="w-3 h-3" />}
            <span className="hidden sm:inline">Bib</span>
          </button>

          <motion.div
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.2 }}
            className="p-0.5 text-[#A1A1AA]"
          >
            <ChevronDown className="w-4 h-4 text-[#52525B] dark:text-[#F8FAFC]" />
          </motion.div>
        </div>
      </div>

      {/* Expandable Details Drawer */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="overflow-hidden border-t border-[#E2DDD4] dark:border-[#23293A] bg-[#FAF9F5] dark:bg-[#0E1118]"
          >
            <div className="p-4 space-y-2 text-xs sm:text-sm text-[#52525B] dark:text-[#94A3B8]">
              <p>
                <strong className="text-[#18181B] dark:text-[#F8FAFC]">Venue:</strong> {pub.conference || pub.book || "Thesis"}
              </p>
              <p>
                <strong className="text-[#18181B] dark:text-[#F8FAFC]">Year:</strong> {pub.year}
              </p>
              {pub.authors && (
                <p>
                  <strong className="text-[#18181B] dark:text-[#F8FAFC]">Authors:</strong> {pub.authors}
                </p>
              )}
              {pub.supervision && (
                <p>
                  <strong className="text-[#18181B] dark:text-[#F8FAFC]">Supervision:</strong> {pub.supervision}
                </p>
              )}
              {pub.doi && (
                <p>
                  <strong className="text-[#18181B] dark:text-[#F8FAFC]">DOI:</strong> {pub.doi}
                </p>
              )}
              <div className="flex flex-wrap items-center gap-1.5 pt-1 text-[11px]">
                {pub.tags.map((t) => (
                  <span key={t} className="px-2 py-0.5 rounded bg-white dark:bg-[#161A26] border border-[#E2DDD4] dark:border-[#23293A] text-[#52525B] dark:text-[#94A3B8]">
                    {t}
                  </span>
                ))}
                <span className="px-2 py-0.5 rounded bg-indigo-50 dark:bg-indigo-950/60 font-medium text-indigo-700 dark:text-indigo-300 border border-indigo-200/60 dark:border-indigo-800/80">
                  Status: {pub.status}
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function Research() {
  const { publications } = useContent();
  const [activeCategory, setActiveCategory] = useState<FilterCategory>("all");
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const [showAll, setShowAll] = useState(false);

  // Correctly mapping to pub.topicDomain so counts are accurate!
  const categories: { label: string; value: FilterCategory; count: number }[] = useMemo(() => [
    { label: "All", value: "all", count: publications.length },
    { label: "Awarded", value: "awarded", count: publications.filter((p) => p.isAwarded).length },
    { label: "Bioinfo", value: "bioinformatics", count: publications.filter((p) => p.topicDomain === "bioinformatics").length },
    { label: "Vision", value: "vision", count: publications.filter((p) => p.topicDomain === "vision").length },
    { label: "Sensing", value: "remote-sensing", count: publications.filter((p) => p.topicDomain === "remote-sensing").length },
    { label: "AI & ML", value: "ai-ml", count: publications.filter((p) => p.topicDomain === "ai-ml").length },
  ], [publications]);

  const filteredPublications = useMemo(() => {
    return publications.filter((pub) => {
      if (activeCategory === "all") return true;
      if (activeCategory === "awarded") return pub.isAwarded;
      return pub.topicDomain === activeCategory;
    });
  }, [publications, activeCategory]);

  const isFiltered = activeCategory !== "all";
  const displayedPublications = isFiltered || showAll ? filteredPublications : filteredPublications.slice(0, 4);

  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.55 }}
      id="research"
      className="w-full flex flex-col justify-between"
    >
      <div>
        {/* Minimal Header */}
        <div className="flex flex-col gap-3 mb-4 pb-3 border-b border-[#E2DDD4] dark:border-[#23293A]">
          <div className="flex items-center gap-2 shrink-0">
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#18181B] dark:text-[#F8FAFC] flex items-center gap-2 whitespace-nowrap">
              <BookOpen className="w-5 h-5 text-[#52525B] dark:text-[#94A3B8] inline-block shrink-0" />
              <span>Publications</span>
            </h2>
            <span className="text-xs font-mono px-2 py-0.5 rounded-full bg-[#EFECE6] dark:bg-[#12151F] text-[#18181B] dark:text-[#F8FAFC] font-semibold border border-[#E2DDD4] dark:border-[#23293A]">
              {publications.length}
            </span>
          </div>

          {/* Clean Segmented Category Tabs with Sliding Pill */}
          <div className="flex gap-1 relative overflow-x-auto pb-1 -mb-1 scrollbar-none">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.value;
              return (
                <button
                  key={cat.value}
                  onClick={() => { setActiveCategory(cat.value); setShowAll(true); }}
                  className={`relative px-2.5 py-0.5 rounded-md text-xs font-medium transition-colors flex items-center gap-1 ${
                    isActive
                      ? "text-white dark:text-[#0B0D13] font-semibold"
                      : "text-[#52525B] dark:text-[#94A3B8] hover:text-[#18181B] dark:hover:text-[#F8FAFC]"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="activeResearchPill"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                      className="absolute inset-0 bg-[#18181B] dark:bg-[#F8FAFC] rounded-md shadow-2xs z-0"
                    />
                  )}
                  <span className="relative z-10">{cat.label}</span>
                  <span className={`relative z-10 text-[10px] font-mono px-1 rounded ${
                    isActive ? "bg-[#3F3F46] dark:bg-[#E2E8F0] text-[#F8FAFC] dark:text-[#0B0D13]" : "bg-[#EFECE6] dark:bg-[#1D2230] text-[#71717A] dark:text-[#94A3B8]"
                  }`}>
                    {cat.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Publications List */}
        <motion.div layout className="space-y-2">
          <AnimatePresence mode="popLayout">
            {displayedPublications.map((pub) => (
              <PublicationRow
                key={pub.id}
                pub={pub}
                isExpanded={expandedId === pub.id}
                onToggle={() => toggleExpand(pub.id)}
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* View All Button */}
      {!isFiltered && publications.length > 4 && (
        <div className="mt-3 text-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="inline-flex items-center gap-1 px-3.5 py-1 bg-white dark:bg-[#12151F] hover:bg-[#FAF9F5] dark:hover:bg-[#1D2230] text-[#18181B] dark:text-[#F8FAFC] text-xs sm:text-sm font-semibold rounded-lg border border-[#E2DDD4] dark:border-[#23293A] transition-all shadow-2xs active:scale-95"
          >
            <span>{showAll ? "Show Top 4 Papers" : `View All ${publications.length} Papers`}</span>
            {showAll ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
          </button>
        </div>
      )}
    </motion.section>
  );
}
