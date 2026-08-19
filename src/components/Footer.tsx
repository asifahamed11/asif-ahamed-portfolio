"use client";

import { ArrowUp } from "lucide-react";
import { useContent } from "@/lib/content-provider";

export default function Footer() {
  const { personalInfo } = useContent();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#FAFAF7] border-t border-stone-200/80 py-10 px-4 sm:px-6 text-xs text-stone-500">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <p className="font-medium text-stone-800">
            {personalInfo.name} • Software Engineer & AI Researcher
          </p>
          <p className="mt-0.5 text-stone-400">
            Built with Next.js, Tailwind CSS, and Framer Motion. Rajshahi, Bangladesh.
          </p>
        </div>

        <button
          onClick={scrollToTop}
          className="inline-flex items-center gap-1 text-stone-600 hover:text-stone-900 transition-colors py-1 px-2.5 rounded-lg hover:bg-stone-200/60"
        >
          <span>Back to top</span>
          <ArrowUp className="w-3.5 h-3.5" />
        </button>
      </div>
    </footer>
  );
}
