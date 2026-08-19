"use client";

import { useState, useMemo } from "react";
import {
  Search, Copy, Check, Code, X, Award, ChevronDown, ChevronUp, BookOpen
} from "lucide-react";
import { useContent } from "@/lib/content-provider";
import { type Publication } from "@/lib/data";
import { copyToClipboard } from "@/lib/utils";

type FilterCategory = "all" | "awarded" | "bioinformatics" | "vision" | "remote-sensing" | "book-chapter";

function PublicationRow({ pub, isExpanded, onToggle }: { pub: Publication; isExpanded: boolean; onToggle: () => void }) {
  const [copiedType, setCopiedType] = useState<"apa" | "bibtex" | null>(null);

  const copyAPA = async (e: React.MouseEvent) => {
    e.stopPropagation();
    const citation = `${pub.authors ? pub.authors + ". " : ""}"${pub.title}." ${pub.conference ? pub.conference + ". " : ""}(${pub.status}).`;
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
    <div
      className={`border rounded-xl transition-all duration-150 ${
        pub.isAwarded
          ? "border-amber-300/80 dark:border-[#665134]/80 bg-amber-50/20 dark:bg-[#3D3325]/25"
          : isExpanded
          ? "border-stone-400 dark:border-[#524F49] bg-stone-50/70 dark:bg-[#292825]/70 shadow-2xs"
          : "border-stone-200/80 dark:border-[#3D3B36] bg-white/70 dark:bg-[#292825]/40 hover:border-stone-300 dark:hover:border-[#524F49] hover:bg-stone-50/50 dark:hover:bg-[#292825]"
      }`}
    >
      {/* Main Row */}
      <div
        onClick={onToggle}
        className="p-3 sm:p-3.5 cursor-pointer flex items-start justify-between gap-2.5 select-none"
      >
        <div className="flex items-start gap-2.5 min-w-0 flex-1">
          {/* Venue Badge */}
          <div className="flex flex-col gap-0.5 shrink-0 pt-0.5">
            <span className="text-[9px] font-mono font-bold px-1.5 py-0.5 rounded bg-stone-100 dark:bg-[#201F1D] text-stone-700 dark:text-[#EDE8E1] border border-stone-200 dark:border-[#3D3B36] text-center">
              {pub.venuePublisher || "IEEE"}
            </span>
            {pub.paperId && (
              <span className="text-[9px] font-mono text-stone-400 dark:text-stone-400 text-center">
                #{pub.paperId}
              </span>
            )}
          </div>

          {/* Title & Info */}
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-1.5 flex-wrap">
              <h3 className="text-xs sm:text-sm font-bold text-stone-900 dark:text-[#EDE8E1] leading-snug">
                {pub.title}
              </h3>
              {pub.isAwarded && (
                <span className="inline-flex items-center gap-1 text-[9px] font-bold px-1.5 py-0.2 rounded-full bg-amber-100 dark:bg-[#3D3325]/80 text-amber-900 dark:text-[#F3D19E] border border-amber-300 dark:border-[#665134]/80 shrink-0">
                  <Award className="w-2.5 h-2.5 text-amber-600 dark:text-amber-400" />
                  <span>{pub.awardTitle}</span>
                </span>
              )}
            </div>
            {pub.authors && (
              <p className="text-[11px] text-stone-500 dark:text-[#B8B4AE] truncate mt-0.5">
                {pub.authors}
              </p>
            )}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-1 shrink-0 pt-0.5">
          <button
            onClick={copyAPA}
            className="px-1.5 py-0.5 rounded text-[10px] font-mono text-stone-600 dark:text-[#EDE8E1] hover:text-stone-900 dark:hover:text-white bg-stone-100 dark:bg-[#33312C] hover:bg-stone-200 dark:hover:bg-[#3D3B36] transition-colors flex items-center gap-1"
            title="Copy APA Citation"
          >
            {copiedType === "apa" ? <Check className="w-2.5 h-2.5 text-emerald-600 dark:text-emerald-400" /> : <Copy className="w-2.5 h-2.5" />}
            <span className="hidden sm:inline">APA</span>
          </button>

          <button
            onClick={copyBibTeX}
            className="px-1.5 py-0.5 rounded text-[10px] font-mono text-stone-600 dark:text-[#EDE8E1] hover:text-stone-900 dark:hover:text-white bg-stone-100 dark:bg-[#33312C] hover:bg-stone-200 dark:hover:bg-[#3D3B36] transition-colors flex items-center gap-1"
            title="Copy BibTeX Citation"
          >
            {copiedType === "bibtex" ? <Check className="w-2.5 h-2.5 text-emerald-600 dark:text-emerald-400" /> : <Code className="w-2.5 h-2.5" />}
            <span className="hidden sm:inline">Bib</span>
          </button>

          <div className="p-0.5 text-stone-400">
            {isExpanded ? <ChevronUp className="w-3.5 h-3.5 text-stone-700 dark:text-[#EDE8E1]" /> : <ChevronDown className="w-3.5 h-3.5" />}
          </div>
        </div>
      </div>

      {/* Expandable Details Drawer */}
      {isExpanded && (
        <div className="px-3 pb-3 pt-1.5 border-t border-stone-200/80 dark:border-[#3D3B36] text-[11px] text-stone-700 dark:text-[#B8B4AE] space-y-1.5 bg-stone-50/50 dark:bg-[#201F1D]/50 rounded-b-xl">
          {pub.conference && (
            <div>
              <span className="font-semibold text-stone-900 dark:text-[#EDE8E1]">Venue / Publisher:</span>{" "}
              <span className="text-amber-800 dark:text-[#E2B77B] font-medium">{pub.conference}</span>
            </div>
          )}

          {pub.authors && (
            <div>
              <span className="font-semibold text-stone-900 dark:text-[#EDE8E1]">Complete Authors:</span>{" "}
              <span className="text-stone-600 dark:text-[#B8B4AE]">{pub.authors}</span>
            </div>
          )}

          <div className="flex flex-wrap gap-1 pt-1">
            {pub.tags.map((t) => (
              <span key={t} className="px-1.5 py-0.2 rounded bg-stone-100 dark:bg-[#201F1D] text-stone-600 dark:text-[#B8B4AE] text-[9px] border border-stone-200/60 dark:border-[#3D3B36]">
                {t}
              </span>
            ))}
            <span className="px-1.5 py-0.2 rounded bg-stone-200/80 dark:bg-[#33312C] text-stone-700 dark:text-[#EDE8E1] font-mono text-[9px]">
              Status: {pub.status}
            </span>
          </div>
        </div>
      )}
    </div>
  );
}

export default function Research() {
  const { publications } = useContent();
  const [activeCategory, setActiveCategory] = useState<FilterCategory>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const [showAll, setShowAll] = useState(false);

  const categories = useMemo(() => [
    { label: "All", value: "all" as FilterCategory, count: publications.length },
    { label: "Awarded", value: "awarded" as FilterCategory, count: publications.filter((p) => p.isAwarded).length },
    { label: "Bioinformatics", value: "bioinformatics" as FilterCategory, count: publications.filter((p) => p.topicDomain === "bioinformatics").length },
    { label: "Vision", value: "vision" as FilterCategory, count: publications.filter((p) => p.topicDomain === "vision").length },
    { label: "Remote Sensing", value: "remote-sensing" as FilterCategory, count: publications.filter((p) => p.topicDomain === "remote-sensing").length },
    { label: "Chapters", value: "book-chapter" as FilterCategory, count: publications.filter((p) => p.type === "book-chapter").length },
  ], [publications]);

  const filteredPubs = useMemo(() => {
    return publications.filter((pub) => {
      let matchesCategory = true;
      if (activeCategory === "awarded") matchesCategory = !!pub.isAwarded;
      else if (activeCategory === "bioinformatics") matchesCategory = pub.topicDomain === "bioinformatics";
      else if (activeCategory === "vision") matchesCategory = pub.topicDomain === "vision";
      else if (activeCategory === "remote-sensing") matchesCategory = pub.topicDomain === "remote-sensing";
      else if (activeCategory === "book-chapter") matchesCategory = pub.type === "book-chapter";

      if (!matchesCategory) return false;

      if (!searchQuery.trim()) return true;
      const q = searchQuery.toLowerCase();
      return (
        pub.title.toLowerCase().includes(q) ||
        (pub.authors && pub.authors.toLowerCase().includes(q)) ||
        (pub.conference && pub.conference.toLowerCase().includes(q)) ||
        pub.tags.some((t) => t.toLowerCase().includes(q))
      );
    });
  }, [publications, activeCategory, searchQuery]);

  const isSearching = searchQuery.trim().length > 0 || activeCategory !== "all";
  const displayedPubs = isSearching || showAll ? filteredPubs : filteredPubs.slice(0, 6);

  return (
    <section id="research" className="w-full flex flex-col justify-between">
      <div>
        {/* Minimal Header (No outer container card) */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3.5 pb-2.5 border-b border-stone-200/80 dark:border-[#3D3B36]">
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-lg sm:text-xl font-serif font-bold text-stone-900 dark:text-[#EDE8E1] flex items-center gap-1.5">
                <BookOpen className="w-4 h-4 text-stone-600 dark:text-stone-400 inline-block" />
                <span>Research Publications</span>
              </h2>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-stone-100 dark:bg-[#292825] text-stone-700 dark:text-[#EDE8E1] font-semibold border border-stone-200 dark:border-[#3D3B36]">
                {publications.length}
              </span>
            </div>
            <p className="text-[11px] text-stone-500 dark:text-[#B8B4AE] mt-0.5">
              Peer-reviewed articles, conference proceedings & book chapters
            </p>
          </div>

          {/* Quick Search */}
          <div className="relative w-full sm:w-52">
            <Search className="w-3.5 h-3.5 text-stone-400 dark:text-stone-400 absolute left-2.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search 16 papers..."
              className="w-full pl-8 pr-6 py-1 bg-white dark:bg-[#292825] border border-stone-300/80 dark:border-[#3D3B36] rounded-lg text-xs font-medium text-stone-900 dark:text-[#EDE8E1] placeholder:text-stone-400 dark:placeholder:text-[#9E9A93] outline-none focus:border-stone-500 dark:focus:border-[#665134] transition-all shadow-2xs"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-2 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-600 dark:hover:text-white"
              >
                <X className="w-3 h-3" />
              </button>
            )}
          </div>
        </div>

        {/* Domain Filter Pills */}
        <div className="flex flex-wrap gap-1 mb-3">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.value;
            return (
              <button
                key={cat.value}
                onClick={() => { setActiveCategory(cat.value); setShowAll(true); }}
                className={`px-2 py-0.5 rounded-lg text-[10px] font-medium transition-colors flex items-center gap-1 ${
                  isActive
                    ? "bg-stone-900 dark:bg-[#EDE8E1] text-white dark:text-[#201F1D] shadow-2xs font-semibold"
                    : "bg-white dark:bg-[#292825] text-stone-600 dark:text-[#B8B4AE] hover:text-stone-900 dark:hover:text-[#EDE8E1] border border-stone-200/70 dark:border-[#3D3B36]"
                }`}
              >
                <span>{cat.label}</span>
                <span className={`text-[8px] font-mono px-1 rounded ${
                  isActive ? "bg-stone-800 dark:bg-[#33312C] text-stone-300 dark:text-[#EDE8E1]" : "bg-stone-100 dark:bg-[#201F1D] text-stone-500 dark:text-[#9E9A93]"
                }`}>
                  {cat.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Publications List */}
        <div className="space-y-2">
          {displayedPubs.map((pub) => (
            <PublicationRow
              key={pub.id}
              pub={pub}
              isExpanded={expandedId === pub.id}
              onToggle={() => setExpandedId(expandedId === pub.id ? null : pub.id)}
            />
          ))}
        </div>
      </div>

      {/* Show More / Show Less Toggle */}
      {!isSearching && filteredPubs.length > 6 && (
        <div className="mt-3.5 text-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="inline-flex items-center gap-1 px-3 py-1 bg-white dark:bg-[#292825] hover:bg-stone-50 dark:hover:bg-[#33312C] text-stone-800 dark:text-[#EDE8E1] text-xs font-semibold rounded-lg border border-stone-200 dark:border-[#3D3B36] transition-colors shadow-2xs"
          >
            <span>{showAll ? "Show Top 6 Papers" : `View All ${filteredPubs.length} Papers`}</span>
            {showAll ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
          </button>
        </div>
      )}

      {filteredPubs.length === 0 && (
        <div className="text-center py-6 bg-white dark:bg-[#292825] rounded-xl border border-stone-200 dark:border-[#3D3B36] text-xs text-stone-500 dark:text-[#B8B4AE]">
          No papers match your query.{" "}
          <button onClick={() => { setActiveCategory("all"); setSearchQuery(""); }} className="text-amber-700 dark:text-[#E2B77B] underline font-medium">
            Reset filter
          </button>
        </div>
      )}
    </section>
  );
}
