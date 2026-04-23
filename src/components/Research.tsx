"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BookOpen, Award, FileText, Users, Presentation, BookMarked } from "lucide-react";
import { useContent } from "@/lib/content-provider";
import { type Publication } from "@/lib/data";
import SectionHeading from "./SectionHeading";

const containerVariants = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.05 } } };
const itemVariants = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.4 } } };

type FilterType = "all" | "awarded" | "conference" | "book-chapter";
const filters: { label: string; value: FilterType }[] = [
  { label: "All", value: "all" },
  { label: "Awarded", value: "awarded" },
  { label: "Conference", value: "conference" },
  { label: "Book Chapters", value: "book-chapter" },
];

function getTypeIcon(type: Publication["type"]) {
  switch (type) {
    case "conference": return FileText;
    case "book-chapter": return BookMarked;
    case "abstract": case "poster": return Presentation;
    case "co-authored": return Users;
    default: return FileText;
  }
}

function getTypeLabel(type: Publication["type"]) {
  switch (type) {
    case "conference": return "Conference Paper";
    case "book-chapter": return "Book Chapter";
    case "abstract": return "Abstract";
    case "poster": return "Poster";
    case "co-authored": return "Co-authored";
    default: return "Publication";
  }
}

function getStatusStyle(status: string) {
  if (status.includes("Awarded")) return { text: "text-gold", bg: "bg-gold/10", border: "border-gold/20" };
  if (status.includes("Published")) return { text: "text-coffee", bg: "bg-coffee/8", border: "border-coffee/12" };
  if (status.includes("Accepted")) return { text: "text-mocha", bg: "bg-mocha/8", border: "border-mocha/12" };
  if (status.includes("Submitted")) return { text: "text-mocha/70", bg: "bg-mocha/5", border: "border-mocha/8" };
  return { text: "text-mocha", bg: "bg-coffee/5", border: "border-coffee/8" };
}

function PublicationCard({ pub }: { pub: Publication }) {
  const TypeIcon = getTypeIcon(pub.type);
  const isAwarded = pub.isAwarded;
  const style = getStatusStyle(pub.status);

  return (
    <motion.div variants={itemVariants} layout className={`glass rounded-2xl transition-all duration-300 group relative ${isAwarded ? "glass-accent pt-3 px-4 sm:px-6 pb-4 sm:pb-6" : "p-4 sm:p-6"}`}>
      {isAwarded && (
        <div className="flex justify-end mb-3 relative z-10">
          <div className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1 bg-gold/10 border border-gold/20 rounded-full">
            <Award className="w-3 h-3 text-gold" />
            <span className="text-[10px] sm:text-xs font-semibold text-gold">{pub.awardTitle}</span>
          </div>
        </div>
      )}

      <div className="flex items-start gap-2.5 sm:gap-3 mb-3 sm:mb-4">
        <div className={`p-1.5 sm:p-2 rounded-lg shrink-0 ${isAwarded ? "bg-gold/10 text-gold" : "bg-coffee/5 text-mocha"}`}>
          <TypeIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 mb-1.5 sm:mb-2">
            <span className="text-[10px] sm:text-xs text-mocha uppercase tracking-wider">{getTypeLabel(pub.type)}</span>
            {pub.paperId && <span className="text-[10px] sm:text-xs text-mocha/50 font-mono">#ID {pub.paperId}</span>}
          </div>
          <h3 className={`text-sm sm:text-base font-semibold leading-snug ${isAwarded ? "text-gold" : "text-coffee"}`}>{pub.title}</h3>
        </div>
      </div>

      {pub.conference && <p className="text-xs sm:text-sm text-mocha mb-2 sm:mb-3 ml-7 sm:ml-11 line-clamp-2">{pub.conference}</p>}
      {pub.authors && <p className="text-[11px] sm:text-xs text-mocha/60 mb-2 sm:mb-3 ml-7 sm:ml-11">{pub.authors}</p>}

      <div className="flex flex-wrap items-center justify-between gap-2 sm:gap-3 ml-7 sm:ml-11">
        <div className="flex flex-wrap gap-1 sm:gap-1.5">
          {pub.tags.map((tag) => (
            <span key={tag} className="px-1.5 sm:px-2 py-0.5 text-[10px] sm:text-xs rounded-md bg-coffee/5 text-mocha border border-coffee/5">{tag}</span>
          ))}
        </div>
        <span className={`px-2 sm:px-2.5 py-0.5 text-[10px] sm:text-xs font-medium rounded-full ${style.text} ${style.bg} ${style.border} border whitespace-nowrap`}>{pub.status}</span>
      </div>
    </motion.div>
  );
}

export default function Research() {
  const { publications } = useContent();
  const [activeFilter, setActiveFilter] = useState<FilterType>("all");

  const filteredPubs = publications.filter((pub) => {
    if (activeFilter === "all") return true;
    if (activeFilter === "awarded") return pub.isAwarded;
    if (activeFilter === "conference") return pub.type === "conference" || pub.type === "abstract";
    if (activeFilter === "book-chapter") return pub.type === "book-chapter";
    return true;
  });

  const conferencePapers = publications.filter((p) => p.type === "conference" || p.type === "abstract").length;
  const bookChapters = publications.filter((p) => p.type === "book-chapter").length;

  return (
    <section id="research" className="py-16 sm:py-20 md:py-28 px-4 sm:px-6 section-glow">
      <div className="max-w-7xl mx-auto">
        <SectionHeading title="Research & Publications" subtitle={`${publications.length} publications across AI, Deep Learning & Environmental Science`} icon={BookOpen} />

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 mb-6 sm:mb-8">
          {[
            { label: "Total", value: publications.length.toString(), icon: FileText },
            { label: "Awards", value: publications.filter((p) => p.isAwarded).length.toString(), icon: Award },
            { label: "Conference", value: conferencePapers.toString(), icon: BookOpen },
            { label: "Book Chapters", value: bookChapters.toString(), icon: BookMarked },
          ].map((stat) => (
            <div key={stat.label} className="glass rounded-xl p-3 sm:p-4 text-center">
              <stat.icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 mx-auto mb-1.5 sm:mb-2 text-gold" />
              <p className="text-xl sm:text-2xl font-bold text-coffee">{stat.value}</p>
              <p className="text-[10px] sm:text-xs text-mocha">{stat.label}</p>
            </div>
          ))}
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex flex-wrap gap-2 mb-6 sm:mb-8">
          {filters.map((filter) => (
            <button key={filter.value} onClick={() => setActiveFilter(filter.value)} className={`px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all duration-300 min-h-[40px] active:scale-95 ${activeFilter === filter.value ? "bg-coffee text-ivory shadow-card" : "glass text-mocha hover:text-coffee"}`}>
              {filter.label}
            </button>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div key={activeFilter} variants={containerVariants} initial="hidden" animate="show" className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4">
            {filteredPubs.map((pub) => <PublicationCard key={pub.id} pub={pub} />)}
          </motion.div>
        </AnimatePresence>

        {filteredPubs.length === 0 && <p className="text-center text-mocha py-12 text-sm">No publications found for this filter.</p>}
      </div>
    </section>
  );
}
