"use client";

import { useState, useMemo } from "react";
import {
  Search, Copy, Check, Code, X, Award, ChevronDown, ChevronUp
} from "lucide-react";
import { useContent } from "@/lib/content-provider";
import { type Publication } from "@/lib/data";

type FilterCategory = "all" | "awarded" | "bioinformatics" | "vision" | "remote-sensing" | "book-chapter";

function PublicationRow({ pub, isExpanded, onToggle }: { pub: Publication; isExpanded: boolean; onToggle: () => void }) {
  const [copiedType, setCopiedType] = useState<"apa" | "bibtex" | null>(null);

  const copyAPA = (e: React.MouseEvent) => {
    e.stopPropagation();
    const citation = `${pub.authors ? pub.authors + ". " : ""}"${pub.title}." ${pub.conference ? pub.conference + ". " : ""}(${pub.status}).`;
    navigator.clipboard.writeText(citation);
    setCopiedType("apa");
    setTimeout(() => setCopiedType(null), 2000);
  };

  const copyBibTeX = (e: React.MouseEvent) => {
    e.stopPropagation();
    const bib = pub.bibtex || `@article{asif2026pub${pub.id},\n  title={${pub.title}},\n  author={${pub.authors || "Ahamed, Asif"}},\n  year={2026}\n}`;
    navigator.clipboard.writeText(bib);
    setCopiedType("bibtex");
    setTimeout(() => setCopiedType(null), 2000);
  };

  return (
    <div
      className={`border rounded-xl transition-all duration-150 ${
        pub.isAwarded
          ? "border-amber-300 bg-amber-50/20"
          : isExpanded
          ? "border-stone-400 bg-stone-50/70 shadow-xs"
          : "border-stone-200 bg-white hover:border-stone-300 hover:bg-stone-50/40"
      }`}
    >
      {/* Main Clickable Summary Row */}
      <div
        onClick={onToggle}
        className="p-3 sm:p-4 cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-3 select-none"
      >
        <div className="flex items-start sm:items-center gap-3 min-w-0 flex-1">
          {/* Left Venue Pill */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-1.5 shrink-0">
            <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-stone-100 text-stone-700 border border-stone-200">
              {pub.venuePublisher || "IEEE"}
            </span>
            {pub.paperId && (
              <span className="text-[10px] font-mono text-stone-400">
                #{pub.paperId}
              </span>
            )}
          </div>

          {/* Center Title & Award */}
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-2 flex-wrap">
              <h3 className="text-xs sm:text-sm font-bold text-stone-900 leading-snug line-clamp-2 sm:line-clamp-1">
                {pub.title}
              </h3>
              {pub.isAwarded && (
                <span className="inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-100 text-amber-900 border border-amber-300 shrink-0">
                  <Award className="w-3 h-3 text-amber-600" />
                  <span>{pub.awardTitle}</span>
                </span>
              )}
            </div>
            {pub.authors && (
              <p className="text-[11px] text-stone-500 truncate mt-0.5">
                {pub.authors}
              </p>
            )}
          </div>
        </div>

        {/* Right Actions & Expand Icon */}
        <div className="flex items-center gap-1.5 shrink-0 self-end sm:self-center">
          <button
            onClick={copyAPA}
            className="px-2 py-1 rounded text-[11px] font-mono text-stone-600 hover:text-stone-900 bg-stone-100 hover:bg-stone-200 transition-colors flex items-center gap-1"
            title="Copy APA Citation"
          >
            {copiedType === "apa" ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
            <span className="hidden sm:inline">APA</span>
          </button>

          <button
            onClick={copyBibTeX}
            className="px-2 py-1 rounded text-[11px] font-mono text-stone-600 hover:text-stone-900 bg-stone-100 hover:bg-stone-200 transition-colors flex items-center gap-1"
            title="Copy BibTeX Citation"
          >
            {copiedType === "bibtex" ? <Check className="w-3 h-3 text-emerald-600" /> : <Code className="w-3 h-3" />}
            <span className="hidden sm:inline">BibTeX</span>
          </button>

          <div className="p-1 text-stone-400">
            {isExpanded ? <ChevronUp className="w-4 h-4 text-stone-700" /> : <ChevronDown className="w-4 h-4" />}
          </div>
        </div>
      </div>

      {/* Expandable Drawer Details */}
      {isExpanded && (
        <div className="px-3 sm:px-4 pb-4 pt-1 border-t border-stone-200/80 text-xs text-stone-700 space-y-2.5">
          {pub.conference && (
            <div>
              <span className="font-semibold text-stone-900">Conference / Publication:</span>{" "}
              <span className="text-indigo-700 font-medium">{pub.conference}</span>
            </div>
          )}

          {pub.authors && (
            <div>
              <span className="font-semibold text-stone-900">Complete Authors:</span>{" "}
              <span className="text-stone-600">{pub.authors}</span>
            </div>
          )}

          <div className="flex flex-wrap gap-1.5 pt-1">
            {pub.tags.map((t) => (
              <span key={t} className="px-2 py-0.5 rounded bg-stone-100 text-stone-600 text-[10px]">
                {t}
              </span>
            ))}
            <span className="px-2 py-0.5 rounded bg-stone-200/80 text-stone-700 font-mono text-[10px]">
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
    { label: "All Papers", value: "all" as FilterCategory, count: publications.length },
    { label: "Awarded", value: "awarded" as FilterCategory, count: publications.filter((p) => p.isAwarded).length },
    { label: "Bioinformatics", value: "bioinformatics" as FilterCategory, count: publications.filter((p) => p.topicDomain === "bioinformatics").length },
    { label: "Medical Vision", value: "vision" as FilterCategory, count: publications.filter((p) => p.topicDomain === "vision").length },
    { label: "Remote Sensing", value: "remote-sensing" as FilterCategory, count: publications.filter((p) => p.topicDomain === "remote-sensing").length },
    { label: "Book Chapters", value: "book-chapter" as FilterCategory, count: publications.filter((p) => p.type === "book-chapter").length },
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

  // Display limited rows by default unless user searches or toggles showAll
  const isSearching = searchQuery.trim().length > 0 || activeCategory !== "all";
  const displayedPubs = isSearching || showAll ? filteredPubs : filteredPubs.slice(0, 6);

  return (
    <section id="research" className="py-12 sm:py-16 px-4 sm:px-6 border-t border-stone-200/80 bg-[#FAFAF7]">
      <div className="max-w-5xl mx-auto">
        
        {/* Compact Header with Instant Search */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-5">
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-xl sm:text-2xl font-serif font-bold text-stone-900">
                Research Publications
              </h2>
              <span className="text-xs font-mono px-2 py-0.5 rounded-full bg-stone-200 text-stone-700 font-semibold">
                {publications.length} Papers
              </span>
            </div>
            <p className="text-xs text-stone-500 mt-0.5">
              Peer-reviewed articles, conference proceedings & book chapters (IEEE, Springer, CRC Press)
            </p>
          </div>

          {/* Quick Search */}
          <div className="relative w-full sm:w-64">
            <Search className="w-3.5 h-3.5 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search 16 papers..."
              className="w-full pl-8 pr-7 py-1.5 bg-white border border-stone-300 rounded-lg text-xs font-medium text-stone-900 placeholder:text-stone-400 outline-none focus:border-stone-600 transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-2 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-600"
              >
                <X className="w-3 h-3" />
              </button>
            )}
          </div>
        </div>

        {/* Domain Filter Pills */}
        <div className="flex flex-wrap gap-1.5 pb-4 mb-4 border-b border-stone-200/80">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.value;
            return (
              <button
                key={cat.value}
                onClick={() => { setActiveCategory(cat.value); setShowAll(true); }}
                className={`px-2.5 py-1 rounded-md text-[11px] font-medium transition-colors flex items-center gap-1.5 ${
                  isActive
                    ? "bg-stone-900 text-white"
                    : "bg-white text-stone-600 hover:text-stone-900 border border-stone-200"
                }`}
              >
                <span>{cat.label}</span>
                <span className={`text-[9px] font-mono px-1 rounded ${
                  isActive ? "bg-stone-800 text-stone-300" : "bg-stone-100 text-stone-500"
                }`}>
                  {cat.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* High-Density Publications List */}
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

        {/* Show More / Show Less Toggle */}
        {!isSearching && filteredPubs.length > 6 && (
          <div className="mt-4 text-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-white hover:bg-stone-100 text-stone-800 text-xs font-semibold rounded-lg border border-stone-300 transition-colors shadow-xs"
            >
              <span>{showAll ? "Show Top 6 Papers" : `View All ${filteredPubs.length} Papers`}</span>
              {showAll ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
            </button>
          </div>
        )}

        {filteredPubs.length === 0 && (
          <div className="text-center py-8 bg-white rounded-xl border border-stone-200 text-xs text-stone-500">
            No papers match your search.{" "}
            <button onClick={() => { setActiveCategory("all"); setSearchQuery(""); }} className="text-indigo-600 underline font-medium">
              Reset search
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
