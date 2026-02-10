"use client";

import { motion } from "framer-motion";
import { Cpu, Code, Brain, Globe, Wrench } from "lucide-react";
import { skillCategories } from "@/lib/data";
import SectionHeading from "./SectionHeading";

const iconMap: Record<string, React.ElementType> = {
  Code,
  Brain,
  Globe,
  Wrench,
};

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const skillVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  show: { opacity: 1, scale: 1 },
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 md:py-28 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          title="Technical Skills"
          subtitle="Technologies and tools I work with daily"
          icon={Cpu}
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          {skillCategories.map((category) => {
            const Icon = iconMap[category.icon] || Code;
            return (
              <motion.div
                key={category.title}
                variants={itemVariants}
                className="glass rounded-2xl p-6 hover:border-accent/20 transition-all duration-300 group"
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-5">
                  <div className="p-2.5 rounded-xl bg-accent/10 text-accent-light group-hover:bg-accent/15 transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">
                      {category.title}
                    </h3>
                    <p className="text-xs text-muted">
                      {category.skills.length} technologies
                    </p>
                  </div>
                </div>

                {/* Skills Grid */}
                <motion.div
                  variants={{
                    hidden: { opacity: 0 },
                    show: {
                      opacity: 1,
                      transition: { staggerChildren: 0.04 },
                    },
                  }}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  className="flex flex-wrap gap-2"
                >
                  {category.skills.map((skill) => (
                    <motion.span
                      key={skill}
                      variants={skillVariants}
                      whileHover={{
                        scale: 1.05,
                        transition: { duration: 0.15 },
                      }}
                      className="px-3 py-1.5 text-sm rounded-lg bg-white/5 text-muted-light hover:text-foreground hover:bg-white/10 transition-all duration-200 cursor-default border border-transparent hover:border-white/10"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
