"use client";

import { motion } from "framer-motion";
import { Cpu, Code, Brain, Globe, Wrench } from "lucide-react";
import { useContent } from "@/lib/content-provider";
import SectionHeading from "./SectionHeading";

const iconMap: Record<string, React.ElementType> = { Code, Brain, Globe, Wrench };

const containerVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 25, scale: 0.97 },
  show: {
    opacity: 1, y: 0, scale: 1,
    transition: { type: "spring" as const, stiffness: 100, damping: 18 },
  },
};
const skillContainerVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.04, delayChildren: 0.2 } },
};
const skillVariants = {
  hidden: { opacity: 0, scale: 0.7, y: 10 },
  show: {
    opacity: 1, scale: 1, y: 0,
    transition: { type: "spring" as const, stiffness: 200, damping: 15 },
  },
};

export default function Skills() {
  const { skillCategories } = useContent();

  return (
    <section id="skills" className="py-16 sm:py-20 md:py-28 px-4 sm:px-6 section-glow">
      <div className="max-w-7xl mx-auto">
        <SectionHeading title="Technical Skills" subtitle="Technologies and tools I work with daily" icon={Cpu} />

        <motion.div variants={containerVariants} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-50px" }} className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          {skillCategories.map((category) => {
            const Icon = iconMap[category.icon] || Code;
            return (
              <motion.div key={category.title} variants={itemVariants} className="glass rounded-2xl p-4 sm:p-6 transition-all duration-400 group hover:border-gold/15 hover:shadow-card-hover">
                <div className="flex items-center gap-3 mb-4 sm:mb-5">
                  <motion.div
                    whileHover={{ rotate: 15, scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 15 }}
                    className="p-2 sm:p-2.5 rounded-xl bg-gold/10 text-gold"
                  >
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                  </motion.div>
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-coffee">{category.title}</h3>
                    <p className="text-[11px] sm:text-xs text-mocha">{category.skills.length} technologies</p>
                  </div>
                </div>

                <motion.div variants={skillContainerVariants} initial="hidden" whileInView="show" viewport={{ once: true }} className="flex flex-wrap gap-1.5 sm:gap-2">
                  {category.skills.map((skill) => (
                    <motion.span
                      key={skill}
                      variants={skillVariants}
                      whileHover={{ scale: 1.08, y: -2, transition: { type: "spring", stiffness: 400, damping: 15 } }}
                      className="px-2.5 sm:px-3 py-1 sm:py-1.5 text-xs sm:text-sm rounded-lg bg-coffee/5 text-mocha cursor-default border border-coffee/5 hover:bg-gold/10 hover:text-gold hover:border-gold/15 transition-colors duration-300"
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
