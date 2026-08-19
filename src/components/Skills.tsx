"use client";

import { useContent } from "@/lib/content-provider";

export default function Skills() {
  const { skillCategories } = useContent();

  return (
    <section id="skills" className="py-12 sm:py-14 px-4 sm:px-6 border-t border-stone-200/80 bg-[#FAFAF7]">
      <div className="max-w-5xl mx-auto">
        <div className="mb-6">
          <span className="text-xs font-mono uppercase tracking-widest text-stone-500 block mb-1">
            Toolkit & Environment
          </span>
          <h2 className="text-xl sm:text-2xl font-serif font-bold text-stone-900">
            Skills & Technologies
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {skillCategories.map((cat) => (
            <div
              key={cat.title}
              className="p-5 sm:p-6 rounded-2xl bg-white border border-stone-200 shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-stone-100 mb-4">
                  <h3 className="text-sm font-bold text-stone-900">{cat.title}</h3>
                  <span className="text-xs font-mono text-stone-400">
                    {cat.skills.length} tools
                  </span>
                </div>

                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 text-xs font-medium rounded-lg bg-stone-50 text-stone-700 border border-stone-200 hover:border-stone-400 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
