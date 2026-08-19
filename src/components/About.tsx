"use client";

import { FileDown } from "lucide-react";
import { useContent } from "@/lib/content-provider";

export default function About() {
  const { personalInfo, education, milestones } = useContent();

  return (
    <section id="about" className="py-12 sm:py-14 px-4 sm:px-6 border-t border-stone-200/80 bg-white">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-6">
          <span className="text-xs font-mono uppercase tracking-widest text-stone-500 block mb-1">
            Background & Focus
          </span>
          <h2 className="text-xl sm:text-2xl font-serif text-stone-900 font-bold">
            About Me & Research Focus
          </h2>
        </div>

        {/* Narrative Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 mb-8 items-start">
          
          {/* Main Prose */}
          <div className="lg:col-span-8 space-y-4 text-sm sm:text-base text-stone-700 leading-relaxed font-normal">
            <p>
              I am a final-year Computer Science & Engineering undergraduate at Varendra University in Rajshahi, Bangladesh. Over the past three years, my primary academic interest has centered on computational biology and deep learning architectures.
            </p>
            <p>
              A major challenge in cancer genomics is identifying which mutations in non-coding DNA drive disease versus those that are harmless bystanders. In our research, we design ensemble classification pipelines, such as <em>VariFuse</em>, that combine feature selection algorithms with stacked machine learning models to classify pathogenic variants with high sensitivity.
            </p>
            <p>
              Beyond genomics, I work on biomedical computer vision (such as automated skin lesion diagnostic models with HAM10000) and hydrological streamflow forecasting using GLOFAS satellite reanalysis data.
            </p>
            <p>
              When I am not writing papers or training PyTorch models, I build open-source desktop software, system utilities, and full-stack tools. I enjoy writing clean, pragmatic code and contributing to open-source communities.
            </p>
          </div>

          {/* Side Fact Card */}
          <div className="lg:col-span-4 space-y-4">
            <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-4">
              <div>
                <span className="text-xs font-mono uppercase text-stone-500 block mb-1">Education</span>
                <h3 className="text-sm font-bold text-stone-900">{education.degree}</h3>
                <p className="text-xs text-stone-600 mt-0.5">{education.institution}</p>
                <div className="flex items-center gap-2 mt-2 text-xs font-medium text-stone-600">
                  <span className="px-2 py-0.5 bg-white border border-stone-200 rounded-md">CGPA {education.cgpa} / {education.maxCgpa}</span>
                  <span className="text-stone-400">•</span>
                  <span>Graduating {education.expectedGraduation}</span>
                </div>
              </div>

              <div className="pt-3 border-t border-stone-200">
                <span className="text-xs font-mono uppercase text-stone-500 block mb-1">Key Recognition</span>
                <p className="text-xs font-semibold text-stone-900">Honourable Mention Award (UCICS 2026)</p>
                <p className="text-[11px] text-stone-600 mt-1 leading-relaxed">
                  Recognized for research on hybrid ensemble learning for somatic variant classification (Paper #108).
                </p>
              </div>

              <div className="pt-3 border-t border-stone-200">
                <a
                  href={personalInfo.cvUrl || "/CV.pdf"}
                  download
                  className="inline-flex items-center justify-center gap-2 w-full py-2.5 bg-stone-900 hover:bg-stone-800 text-white rounded-xl text-xs font-semibold transition-colors shadow-xs"
                >
                  <FileDown className="w-4 h-4" /> Download Complete CV
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Academic Milestones Timeline */}
        <div>
          <div className="flex items-center justify-between pb-3 border-b border-stone-200 mb-4">
            <h3 className="text-base font-serif font-bold text-stone-900">Academic & Research Progression</h3>
            <span className="text-xs font-mono text-stone-500">2024 to 2026</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {milestones.map((m) => (
              <div
                key={m.title}
                className="p-3.5 rounded-xl bg-stone-50 border border-stone-200 flex flex-col justify-between hover:bg-stone-100/70 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <span className="text-[11px] font-mono font-bold text-stone-800 bg-white px-1.5 py-0.2 rounded border border-stone-200">
                      {m.year}
                    </span>
                    <span className="text-[10px] font-mono uppercase text-stone-500">
                      {m.badge}
                    </span>
                  </div>
                  <h4 className="text-xs font-bold text-stone-900 mb-0.5 leading-snug">{m.title}</h4>
                  <p className="text-[10px] font-medium text-stone-600 mb-1.5">{m.organization}</p>
                  <p className="text-[11px] text-stone-600 leading-relaxed font-normal">{m.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
