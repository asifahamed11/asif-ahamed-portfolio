"use client";

import { ArrowUp } from "lucide-react";
import { useContent } from "@/lib/content-provider";

export default function Footer() {
  const { personalInfo } = useContent();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#F6F4EE] dark:bg-[#0B0D13] border-t border-[#E2DDD4] dark:border-[#23293A] py-8 px-4 sm:px-6 lg:px-10 xl:px-14 text-sm text-[#71717A] dark:text-[#94A3B8] transition-colors">
      <div className="max-w-[1540px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <p className="font-medium text-[#18181B] dark:text-[#F8FAFC]">
            {personalInfo.name} • Software Engineer & AI Researcher
          </p>
          <p className="mt-0.5 text-xs text-[#A1A1AA] dark:text-[#64748B]">
            Built with Next.js, Tailwind CSS, and Framer Motion. Rajshahi, Bangladesh.
          </p>
        </div>

        <button
          onClick={scrollToTop}
          className="inline-flex items-center gap-1.5 text-[#52525B] dark:text-[#94A3B8] hover:text-[#18181B] dark:hover:text-white transition-colors py-1.5 px-3 rounded-lg hover:bg-[#EFECE6] dark:hover:bg-[#12151F] text-xs sm:text-sm"
        >
          <span>Back to top</span>
          <ArrowUp className="w-4 h-4" />
        </button>
      </div>
    </footer>
  );
}
