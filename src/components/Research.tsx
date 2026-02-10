"use client";

import { motion } from "framer-motion";
import { BookOpen, Award, FileText, Users, Presentation } from "lucide-react";
import { publications, type Publication } from "@/lib/data";
import SectionHeading from "./SectionHeading";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

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

function getStatusColor(status: string) {
  if (status.includes("Awarded")) return "text-amber-300 bg-amber-400/10";
  if (status.includes("Accepted")) return "text-emerald-400 bg-emerald-400/10";
  if (status.includes("Published")) return "text-sky-400 bg-sky-400/10";
  if (status.includes("Presented")) return "text-purple-400 bg-purple-400/10";
  return "text-muted-light bg-white/5";
}

function PublicationCard({ pub }: { pub: Publication }) {
  const TypeIcon = getTypeIcon(pub.type);
  const isAwarded = pub.isAwarded;

  return (
    <motion.div
      variants={itemVariants}
      className={`glass rounded-2xl p-6 transition-all duration-300 hover:border-white/10 group relative ${
        isAwarded ? "border-gold/30 hover:border-gold/50" : ""
      }`}
    >
      {/* Award badge */}
      {isAwarded && (
        <div className="absolute -top-3 right-6">
          <div className="flex items-center gap-1.5 px-3 py-1 bg-gold/20 border border-gold/30 rounded-full">
            <Award className="w-3 h-3 text-gold-light" />
            <span className="text-xs font-semibold text-gold-light">
              {pub.awardTitle}
            </span>
          </div>
        </div>
      )}

      {/* Header */}
      <div className="flex items-start gap-3 mb-4">
        <div
          className={`p-2 rounded-lg shrink-0 ${
            isAwarded ?
              "bg-gold/10 text-gold-light"
            : "bg-accent/10 text-accent-light"
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
              <span className="text-xs text-muted">#ID {pub.paperId}</span>
            )}
          </div>
          <h3
            className={`text-base font-semibold leading-snug ${
              isAwarded ? "text-gold-light" : "text-foreground"
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
              className="px-2 py-0.5 text-xs rounded-md bg-white/5 text-muted-light"
            >
              {tag}
            </span>
          ))}
        </div>
        <span
          className={`px-2.5 py-0.5 text-xs font-medium rounded-full ${getStatusColor(
            pub.status,
          )}`}
        >
          {pub.status}
        </span>
      </div>
    </motion.div>
  );
}

export default function Research() {
  const awardedPubs = publications.filter((p) => p.isAwarded);
  const conferencePubs = publications.filter(
    (p) => p.type === "conference" && !p.isAwarded,
  );
  const otherPubs = publications.filter(
    (p) => p.type === "poster" || p.type === "co-authored",
  );

  return (
    <section id="research" className="py-20 md:py-28 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          title="Research & Publications"
          subtitle="8 conference publications across AI, Deep Learning & Bioinformatics"
          icon={BookOpen}
        />

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-12"
        >
          {[
            {
              label: "Total Papers",
              value: publications.length.toString(),
              icon: FileText,
            },
            { label: "Awards", value: "1", icon: Award },
            {
              label: "Conference Papers",
              value: publications
                .filter((p) => p.type === "conference")
                .length.toString(),
              icon: BookOpen,
            },
            {
              label: "Published",
              value: publications
                .filter(
                  (p) =>
                    p.status.includes("Published") ||
                    p.status.includes("Accepted"),
                )
                .length.toString(),
              icon: Presentation,
            },
          ].map((stat) => (
            <div key={stat.label} className="glass rounded-xl p-4 text-center">
              <stat.icon className="w-4 h-4 text-accent-light mx-auto mb-2" />
              <p className="text-2xl font-bold text-foreground">{stat.value}</p>
              <p className="text-xs text-muted">{stat.label}</p>
            </div>
          ))}
        </motion.div>

        {/* Awarded Publications */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="space-y-4 mb-8"
        >
          {awardedPubs.map((pub) => (
            <PublicationCard key={pub.id} pub={pub} />
          ))}
        </motion.div>

        {/* Conference Papers */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-8"
        >
          {conferencePubs.map((pub) => (
            <PublicationCard key={pub.id} pub={pub} />
          ))}
        </motion.div>

        {/* Other publications */}
        {otherPubs.length > 0 && (
          <>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px flex-1 bg-border" />
              <span className="text-xs text-muted uppercase tracking-wider">
                Poster & Co-authored
              </span>
              <div className="h-px flex-1 bg-border" />
            </div>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-4"
            >
              {otherPubs.map((pub) => (
                <PublicationCard key={pub.id} pub={pub} />
              ))}
            </motion.div>
          </>
        )}
      </div>
    </section>
  );
}
