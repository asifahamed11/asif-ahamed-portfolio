"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BookOpen, Award, FileText, Users, Presentation } from "lucide-react";
import { useContent } from "@/lib/content-provider";
import { type Publication } from "@/lib/data";
import SectionHeading from "./SectionHeading";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

type FilterType = "all" | "awarded" | "accepted" | "published";

const filters: { label: string; value: FilterType }[] = [
  { label: "All", value: "all" },
  { label: "Awarded", value: "awarded" },
  { label: "Published", value: "published" },
  { label: "Accepted", value: "accepted" },
];

function getTypeIcon(type: Publication["type"]) {
  switch (type) {
    case "conference":
      return FileText;
    case "poster":
      return Presentation;
    case "co-authored":
      return Users;
    default:
      return FileText;
  }
}

function getTypeLabel(type: Publication["type"]) {
  switch (type) {
    case "conference":
      return "Conference Paper";
    case "poster":
      return "Poster Presentation";
    case "co-authored":
      return "Co-authored";
    default:
      return "Publication";
  }
}

function getStatusStyle(status: string) {
  if (status.includes("Awarded"))
    return {
      text: "text-amber-light",
      bg: "bg-amber-DEFAULT/10",
      border: "border-amber-DEFAULT/20",
      glow: "hover:shadow-glow-amber",
      hoverBorder: "hover:border-amber-DEFAULT/30",
    };
  if (status.includes("Published"))
    return {
      text: "text-cyan-light",
      bg: "bg-cyan-DEFAULT/10",
      border: "border-cyan-DEFAULT/20",
      glow: "hover:shadow-glow-cyan",
      hoverBorder: "hover:border-cyan-DEFAULT/30",
    };
  if (status.includes("Accepted"))
    return {
      text: "text-emerald-light",
      bg: "bg-emerald-DEFAULT/10",
      border: "border-emerald-DEFAULT/20",
      glow: "",
      hoverBorder: "hover:border-emerald-DEFAULT/30",
    };
  return {
    text: "text-muted-light",
    bg: "bg-white/5",
    border: "",
    glow: "",
    hoverBorder: "hover:border-white/15",
  };
}

function PublicationCard({ pub }: { pub: Publication }) {
  const TypeIcon = getTypeIcon(pub.type);
  const isAwarded = pub.isAwarded;
  const style = getStatusStyle(pub.status);

  return (
    <motion.div
      variants={itemVariants}
      layout
      className={`glass rounded-2xl transition-all duration-400 group relative ${
        isAwarded ? `border-amber-DEFAULT/20 ${style.glow} pt-3 px-6 pb-6` : `p-6 ${style.hoverBorder}`
      }`}
    >
      {/* Glow effect for awarded */}
      {isAwarded && (
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-amber-DEFAULT/5 via-transparent to-transparent pointer-events-none" />
      )}

      {/* Award badge */}
      {isAwarded && (
        <div className="flex justify-end mb-3 relative z-10">
          <div className="flex items-center gap-1.5 px-3 py-1 bg-amber-DEFAULT/15 border border-amber-DEFAULT/25 rounded-full">
            <Award className="w-3 h-3 text-amber-light" />
            <span className="text-xs font-semibold text-amber-light">
              {pub.awardTitle}
            </span>
          </div>
        </div>
      )}

      {/* Header */}
      <div className="flex items-start gap-3 mb-4 relative">
        <div
          className={`p-2 rounded-lg shrink-0 ${
            isAwarded
              ? "bg-amber-DEFAULT/10 text-amber-light"
              : "bg-cyan-DEFAULT/10 text-cyan-light"
          }`}
        >
          <TypeIcon className="w-4 h-4" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span className="text-xs text-muted uppercase tracking-wider">
              {getTypeLabel(pub.type)}
            </span>
            {pub.paperId && (
              <span className="text-xs text-muted font-mono">#ID {pub.paperId}</span>
            )}
          </div>
          <h3
            className={`text-base font-semibold leading-snug ${
              isAwarded ? "text-amber-light" : "text-foreground"
            }`}
          >
            {pub.title}
          </h3>
        </div>
      </div>

      {/* Conference */}
      {pub.conference && (
        <p className="text-sm text-muted-light mb-3 ml-11">{pub.conference}</p>
      )}

      {/* Authors */}
      {pub.authors && (
        <p className="text-xs text-muted mb-3 ml-11 line-clamp-1">
          {pub.authors}
        </p>
      )}

      {/* Footer */}
      <div className="flex flex-wrap items-center justify-between gap-3 ml-11">
        <div className="flex flex-wrap gap-1.5">
          {pub.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 text-xs rounded-md bg-white/5 text-muted-light border border-white/5"
            >
              {tag}
            </span>
          ))}
        </div>
        <span
          className={`px-2.5 py-0.5 text-xs font-medium rounded-full ${style.text} ${style.bg} ${style.border} border`}
        >
          {pub.status}
        </span>
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
    if (activeFilter === "published") return pub.status.includes("Published");
    if (activeFilter === "accepted")
      return pub.status.includes("Accepted") && !pub.isAwarded;
    return true;
  });

  return (
    <section id="research" className="py-20 md:py-28 px-4 sm:px-6 section-glow">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          title="Research & Publications"
          subtitle={`${publications.length} conference publications across AI, Deep Learning & Bioinformatics`}
          icon={BookOpen}
        />

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8"
        >
          {[
            {
              label: "Total Papers",
              value: publications.length.toString(),
              icon: FileText,
              color: "cyan",
            },
            {
              label: "Awards",
              value: publications.filter((p) => p.isAwarded).length.toString(),
              icon: Award,
              color: "amber",
            },
            {
              label: "Conference Papers",
              value: publications
                .filter((p) => p.type === "conference")
                .length.toString(),
              icon: BookOpen,
              color: "violet",
            },
            {
              label: "Published",
              value: publications
                .filter(
                  (p) =>
                    p.status.includes("Published") ||
                    p.status.includes("Accepted")
                )
                .length.toString(),
              icon: Presentation,
              color: "emerald",
            },
          ].map((stat) => (
            <div
              key={stat.label}
              className={`glass rounded-xl p-4 text-center transition-all duration-300 hover:border-${stat.color}-DEFAULT/20`}
            >
              <stat.icon
                className={`w-4 h-4 mx-auto mb-2 ${
                  stat.color === "cyan"
                    ? "text-cyan-light"
                    : stat.color === "amber"
                    ? "text-amber-light"
                    : stat.color === "violet"
                    ? "text-violet-light"
                    : "text-emerald-light"
                }`}
              />
              <p className="text-2xl font-bold text-foreground">{stat.value}</p>
              <p className="text-xs text-muted">{stat.label}</p>
            </div>
          ))}
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap gap-2 mb-8"
        >
          {filters.map((filter) => (
            <button
              key={filter.value}
              onClick={() => setActiveFilter(filter.value)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                activeFilter === filter.value
                  ? "bg-gradient-to-r from-cyan-DEFAULT to-violet-DEFAULT text-white shadow-glow-cyan"
                  : "glass text-muted-light hover:text-foreground hover:bg-white/10"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </motion.div>

        {/* Publications Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 lg:grid-cols-2 gap-4"
          >
            {filteredPubs.map((pub) => (
              <PublicationCard key={pub.id} pub={pub} />
            ))}
          </motion.div>
        </AnimatePresence>

        {filteredPubs.length === 0 && (
          <p className="text-center text-muted-light py-12">
            No publications found for this filter.
          </p>
        )}
      </div>
    </section>
  );
}
