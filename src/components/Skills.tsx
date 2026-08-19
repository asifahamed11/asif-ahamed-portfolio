"use client";

import { useContent } from "@/lib/content-provider";
import { Wrench } from "lucide-react";

export default function Skills() {
  const { skillCategories } = useContent();

  return (
    <section id="skills" className="w-full">
      {/* Header */}
      <div className="flex items-center justify-between pb-2.5 border-b border-stone-200/80 dark:border-[#3D3B36] mb-4">
        <h2 className="text-xs font-mono uppercase tracking-widest text-stone-500 dark:text-[#9E9A93] font-semibold flex items-center gap-1.5">
          <Wrench className="w-3.5 h-3.5 text-stone-500 dark:text-stone-400 inline-block" />
          <span>Technical Stack & Toolkit</span>
        </h2>
        <span className="text-[10px] font-mono text-stone-400 dark:text-[#9E9A93] bg-stone-100 dark:bg-[#201F1D] px-2 py-0.5 rounded-full border border-stone-200/60 dark:border-[#3D3B36]">
          {skillCategories.reduce((acc, cat) => acc + cat.skills.length, 0)} proficiencies
        </span>
      </div>

      {/* 4-Column Minimal Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {skillCategories.map((cat) => (
          <div key={cat.title} className="space-y-1.5">
            <h3 className="text-xs font-bold text-stone-800 dark:text-[#EDE8E1] tracking-tight">
              {cat.title}
            </h3>
            <div className="flex flex-wrap gap-1">
              {cat.skills.map((skill) => (
                <span
                  key={skill}
                  className="inline-block text-[10px] font-mono text-stone-600 dark:text-[#EDE8E1] bg-white/80 dark:bg-[#292825] border border-stone-200/80 dark:border-[#3D3B36] rounded px-1.5 py-0.5 hover:text-stone-900 dark:hover:text-white hover:border-stone-400 dark:hover:border-[#524F49] transition-colors shadow-2xs"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
