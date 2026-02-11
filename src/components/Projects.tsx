"use client";

import { motion } from "framer-motion";
import { FolderGit2, Github, ExternalLink, ArrowUpRight, Calendar } from "lucide-react";
import { projects } from "@/lib/data";
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

export default function Projects() {
  return (
    <section id="projects" className="py-20 md:py-28 px-4 sm:px-6 bg-gradient-to-b from-transparent to-card/20">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          title="Featured Projects"
          subtitle="Selected work with clear technical scope and real-world impact"
          icon={FolderGit2}
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {projects.map((project) => (
            <motion.article
              key={project.title}
              variants={itemVariants}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="glass rounded-2xl p-6 transition-all duration-300 hover:border-accent/20 group flex flex-col"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="p-2.5 rounded-xl bg-accent/10 text-accent-light">
                  <FolderGit2 className="w-5 h-5" />
                </div>
                <span className="inline-flex items-center gap-1 text-xs text-muted bg-white/5 px-2 py-1 rounded-md">
                  <Calendar className="w-3 h-3" />
                  {project.year}
                </span>
              </div>

              <h3 className="text-lg font-semibold text-foreground mb-2 flex items-center gap-2">
                {project.title}
                <ArrowUpRight className="w-4 h-4 text-muted opacity-0 group-hover:opacity-100 transition-opacity" />
              </h3>

              <p className="text-sm text-muted-light leading-relaxed mb-3">{project.description}</p>
              <p className="text-sm text-foreground/90 leading-relaxed mb-4">{project.impact}</p>

              <div className="flex flex-wrap gap-1.5 pt-4 border-t border-border mb-4">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 text-xs rounded-lg bg-white/5 text-muted-light group-hover:text-foreground group-hover:bg-white/8 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-auto flex items-center gap-3">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs text-accent-light hover:text-accent transition-colors"
                    aria-label="GitHub repository"
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
                    className="flex items-center gap-1.5 text-xs text-accent-light hover:text-accent transition-colors"
                    aria-label="Live demo"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    Live Demo
                  </a>
                )}
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
