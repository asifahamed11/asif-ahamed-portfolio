"use client";

import { motion } from "framer-motion";
import { FolderGit2, Github, ExternalLink, ArrowUpRight, Star } from "lucide-react";
import { useContent } from "@/lib/content-provider";
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

const accentColors = [
  { from: "from-cyan-DEFAULT", to: "to-cyan-light", text: "text-cyan-light", bg: "bg-cyan-DEFAULT" },
  { from: "from-violet-DEFAULT", to: "to-violet-light", text: "text-violet-light", bg: "bg-violet-DEFAULT" },
  { from: "from-rose-DEFAULT", to: "to-rose-light", text: "text-rose-light", bg: "bg-rose-DEFAULT" },
  { from: "from-emerald-DEFAULT", to: "to-emerald-light", text: "text-emerald-light", bg: "bg-emerald-DEFAULT" },
  { from: "from-amber-DEFAULT", to: "to-amber-light", text: "text-amber-light", bg: "bg-amber-DEFAULT" },
  { from: "from-cyan-DEFAULT", to: "to-violet-DEFAULT", text: "text-cyan-light", bg: "bg-cyan-DEFAULT" },
];

export default function Projects() {
  const { projects } = useContent();

  return (
    <section id="projects" className="py-20 md:py-28 px-4 sm:px-6 section-glow">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          title="Featured Projects"
          subtitle="A selection of projects spanning AI, web, and mobile development"
          icon={FolderGit2}
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {projects.map((project, index) => {
            const color = accentColors[index % accentColors.length];
            const isFeatured = index < 2;

            return (
              <motion.div
                key={project.title}
                variants={itemVariants}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                className="glass rounded-2xl transition-all duration-300 group flex flex-col relative overflow-hidden tilt-card"
              >
                {/* Gradient accent bar */}
                <div
                  className={`h-1 w-full bg-gradient-to-r ${color.from} ${color.to}`}
                />

                <div className="p-6 flex flex-col flex-1">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-2.5 rounded-xl bg-white/5 ${color.text}`}>
                      <FolderGit2 className="w-5 h-5" />
                    </div>
                    <div className="flex items-center gap-2">
                      {isFeatured && (
                        <span className="flex items-center gap-1 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-amber-light bg-amber-DEFAULT/10 border border-amber-DEFAULT/15 rounded-full">
                          <Star className="w-2.5 h-2.5" />
                          Featured
                        </span>
                      )}
                      <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-lg hover:bg-white/5 text-muted-light hover:text-foreground transition-colors"
                            aria-label="GitHub repository"
                          >
                            <Github className="w-4 h-4" />
                          </a>
                        )}
                        {project.live && (
                          <a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-lg hover:bg-white/5 text-muted-light hover:text-foreground transition-colors"
                            aria-label="Live demo"
                          >
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-semibold text-foreground mb-2 flex items-center gap-2">
                    {project.title}
                    <ArrowUpRight className="w-4 h-4 text-muted opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-muted-light leading-relaxed mb-4 flex-1">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/5">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="flex items-center gap-1.5 px-2.5 py-1 text-xs rounded-lg bg-white/5 text-muted-light group-hover:text-foreground group-hover:bg-white/8 transition-colors border border-transparent group-hover:border-white/5"
                      >
                        <span className={`w-1.5 h-1.5 rounded-full ${color.bg} opacity-60`} />
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links Row - Mobile visible */}
                  <div className="flex items-center gap-3 mt-4 md:hidden">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center gap-1.5 text-xs ${color.text} hover:opacity-80 transition-colors`}
                      >
                        <Github className="w-3.5 h-3.5" />
                        Source Code
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center gap-1.5 text-xs ${color.text} hover:opacity-80 transition-colors`}
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        Live Demo
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
