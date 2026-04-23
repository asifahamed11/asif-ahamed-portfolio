"use client";

import { motion } from "framer-motion";
import { FolderGit2, Github, ExternalLink, ArrowUpRight, Star } from "lucide-react";
import { useContent } from "@/lib/content-provider";
import SectionHeading from "./SectionHeading";

const containerVariants = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.1 } } };
const itemVariants = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.5 } } };

export default function Projects() {
  const { projects } = useContent();

  return (
    <section id="projects" className="py-16 sm:py-20 md:py-28 px-4 sm:px-6 section-glow">
      <div className="max-w-7xl mx-auto">
        <SectionHeading title="Featured Projects" subtitle="A selection of projects spanning AI, web, and mobile development" icon={FolderGit2} />

        <motion.div variants={containerVariants} initial="hidden" whileInView="show" viewport={{ once: true }} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {projects.map((project, index) => {
            const isFeatured = index < 2;
            return (
              <motion.div key={project.title} variants={itemVariants} whileHover={{ y: -4, transition: { duration: 0.25 } }} className="glass rounded-2xl flex flex-col relative overflow-hidden group tilt-card">
                <div className="h-1 w-full bg-gradient-to-r from-gold to-mocha" />

                <div className="p-4 sm:p-6 flex flex-col flex-1">
                  <div className="flex items-start justify-between mb-3 sm:mb-4">
                    <div className="p-2 sm:p-2.5 rounded-xl bg-gold/10 text-gold">
                      <FolderGit2 className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    {isFeatured && (
                      <span className="flex items-center gap-1 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-gold bg-gold/10 border border-gold/15 rounded-full">
                        <Star className="w-2.5 h-2.5" /> Featured
                      </span>
                    )}
                  </div>

                  <h3 className="text-base sm:text-lg font-semibold text-coffee mb-2 flex items-center gap-2">
                    {project.title}
                    <ArrowUpRight className="w-4 h-4 text-mocha/40 opacity-0 group-hover:opacity-100 transition-all" />
                  </h3>

                  <p className="text-xs sm:text-sm text-mocha leading-relaxed mb-4 flex-1">{project.description}</p>

                  <div className="flex flex-wrap gap-1.5 pt-3 sm:pt-4 border-t border-coffee/5">
                    {project.tech.map((tech) => (
                      <span key={tech} className="flex items-center gap-1 sm:gap-1.5 px-2 sm:px-2.5 py-1 text-[11px] sm:text-xs rounded-lg bg-coffee/5 text-mocha border border-transparent group-hover:border-coffee/8 transition-colors">
                        <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-gold/60" />
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-3 mt-3 sm:mt-4">
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-xs text-mocha hover:text-gold transition-colors min-h-[36px]">
                        <Github className="w-3.5 h-3.5" /> Source Code
                      </a>
                    )}
                    {project.live && (
                      <a href={project.live} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-xs text-mocha hover:text-gold transition-colors min-h-[36px]">
                        <ExternalLink className="w-3.5 h-3.5" /> Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
