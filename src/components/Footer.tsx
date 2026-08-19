"use client";

import { ArrowUp } from "lucide-react";
import { useContent } from "@/lib/content-provider";

export default function Footer() {
  const { personalInfo } = useContent();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#FAFAF7] dark:bg-[#201F1D] border-t border-stone-200/80 dark:border-[#3D3B36] py-10 px-4 sm:px-6 text-xs text-stone-500 dark:text-[#B8B4AE] transition-colors">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <p className="font-medium text-stone-800 dark:text-[#EDE8E1]">
            {personalInfo.name} • Software Engineer & AI Researcher
          </p>
          <p className="mt-0.5 text-stone-400 dark:text-[#9E9A93]">
            Built with Next.js, Tailwind CSS, and Framer Motion. Rajshahi, Bangladesh.
          </p>
        </div>

        <button
          onClick={scrollToTop}
          className="inline-flex items-center gap-1 text-stone-600 dark:text-[#B8B4AE] hover:text-stone-900 dark:hover:text-white transition-colors py-1 px-2.5 rounded-lg hover:bg-stone-200/60 dark:hover:bg-[#292825]"
        >
          <span>Back to top</span>
          <ArrowUp className="w-3.5 h-3.5" />
        </button>
      </div>
    </footer>
  );
}
