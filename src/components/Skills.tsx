"use client";

import { motion } from "framer-motion";
import { useContent } from "@/lib/content-provider";
import { Wrench } from "lucide-react";

export default function Skills() {
  const { skillCategories } = useContent();

  return (
    <motion.section
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.55 }}
      id="skills"
      className="w-full"
    >
      {/* Clean Header */}
      <div className="flex items-center justify-between pb-3 border-b border-[#E2DDD4] dark:border-[#23293A] mb-4">
        <h2 className="text-xs sm:text-sm font-mono uppercase tracking-widest text-[#52525B] dark:text-[#94A3B8] font-semibold flex items-center gap-2">
          <Wrench className="w-4 h-4 text-indigo-600 dark:text-indigo-400 inline-block" />
          <span>Technical Toolkit</span>
        </h2>
        <span className="text-xs font-mono text-[#52525B] dark:text-[#94A3B8] bg-[#EFECE6] dark:bg-[#12151F] px-2 py-0.5 rounded-full border border-[#E2DDD4] dark:border-[#23293A]">
          {skillCategories.reduce((acc, cat) => acc + cat.skills.length, 0)} skills
        </span>
      </div>

      {/* 4-Column Clean Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {skillCategories.map((cat, catIdx) => (
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: catIdx * 0.08, duration: 0.4 }}
            className="space-y-1.5"
          >
            <h3 className="text-xs sm:text-sm font-bold text-[#18181B] dark:text-[#F8FAFC] tracking-tight">
              {cat.title}
            </h3>
            <div className="flex flex-wrap gap-1">
              {cat.skills.map((skill) => (
                <motion.span
                  key={skill}
                  whileHover={{ scale: 1.05, y: -2 }}
                  transition={{ duration: 0.15 }}
                  className="inline-block text-xs font-mono text-[#27272A] dark:text-[#E2E8F0] bg-white dark:bg-[#12151F] border border-[#E2DDD4] dark:border-[#23293A] rounded px-2 py-0.5 hover:text-indigo-600 dark:hover:text-indigo-300 hover:border-indigo-300 dark:hover:border-indigo-800/80 transition-colors shadow-2xs cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
