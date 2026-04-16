"use client";

import { motion } from "framer-motion";
import { Cpu, Code, Brain, Globe, Wrench } from "lucide-react";
import { useContent } from "@/lib/content-provider";
import SectionHeading from "./SectionHeading";

const iconMap: Record<string, React.ElementType> = {
  Code,
  Brain,
  Globe,
  Wrench,
};

const categoryColors = [
  {
    icon: "text-cyan-light",
    iconBg: "bg-cyan-DEFAULT/10",
    border: "border-cyan-DEFAULT/10",
    hover: "group-hover:border-cyan-DEFAULT/20",
    tagHover: "hover:bg-cyan-DEFAULT/10 hover:text-cyan-light hover:border-cyan-DEFAULT/15",
    glow: "group-hover:shadow-[0_0_30px_rgba(6,182,212,0.05)]",
  },
  {
    icon: "text-violet-light",
    iconBg: "bg-violet-DEFAULT/10",
    border: "border-violet-DEFAULT/10",
    hover: "group-hover:border-violet-DEFAULT/20",
    tagHover: "hover:bg-violet-DEFAULT/10 hover:text-violet-light hover:border-violet-DEFAULT/15",
    glow: "group-hover:shadow-[0_0_30px_rgba(139,92,246,0.05)]",
  },
  {
    icon: "text-rose-light",
    iconBg: "bg-rose-DEFAULT/10",
    border: "border-rose-DEFAULT/10",
    hover: "group-hover:border-rose-DEFAULT/20",
    tagHover: "hover:bg-rose-DEFAULT/10 hover:text-rose-light hover:border-rose-DEFAULT/15",
    glow: "group-hover:shadow-[0_0_30px_rgba(244,63,94,0.05)]",
  },
  {
    icon: "text-emerald-light",
    iconBg: "bg-emerald-DEFAULT/10",
    border: "border-emerald-DEFAULT/10",
    hover: "group-hover:border-emerald-DEFAULT/20",
    tagHover: "hover:bg-emerald-DEFAULT/10 hover:text-emerald-light hover:border-emerald-DEFAULT/15",
    glow: "group-hover:shadow-[0_0_30px_rgba(16,185,129,0.05)]",
  },
];

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
  const { skillCategories } = useContent();

  return (
    <section id="skills" className="py-20 md:py-28 px-4 sm:px-6 section-glow">
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
          {skillCategories.map((category, index) => {
            const Icon = iconMap[category.icon] || Code;
            const colors = categoryColors[index % categoryColors.length];
            return (
              <motion.div
                key={category.title}
                variants={itemVariants}
                className={`glass rounded-2xl p-6 transition-all duration-300 group ${colors.hover} ${colors.glow}`}
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className={`p-2.5 rounded-xl ${colors.iconBg} ${colors.icon} transition-colors`}
                  >
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
                      className={`px-3 py-1.5 text-sm rounded-lg bg-white/5 text-muted-light transition-all duration-200 cursor-default border border-white/5 ${colors.tagHover}`}
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
