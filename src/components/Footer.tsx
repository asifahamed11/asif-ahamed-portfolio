"use client";

import { Github, Linkedin, BookOpen, Heart, ArrowUp } from "lucide-react";
import { useContent } from "@/lib/content-provider";

export default function Footer() {
  const { personalInfo } = useContent();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-coffee/5 py-6 sm:py-8 px-4 sm:px-6">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs sm:text-sm text-mocha order-2 sm:order-1">
            <span>Built with</span>
            <Heart className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-gold animate-pulse" />
            <span>by</span>
            <span className="text-gradient font-medium">{personalInfo.name}</span>
          </div>

          <div className="flex items-center gap-1.5 sm:gap-2 order-1 sm:order-2">
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-lg hover:bg-coffee/5 text-mocha hover:text-coffee transition-all duration-300 min-w-[44px] min-h-[44px] flex items-center justify-center" aria-label="GitHub">
              <Github className="w-4 h-4" />
            </a>
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-lg hover:bg-coffee/5 text-mocha hover:text-coffee transition-all duration-300 min-w-[44px] min-h-[44px] flex items-center justify-center" aria-label="LinkedIn">
              <Linkedin className="w-4 h-4" />
            </a>
            <a href={personalInfo.scholar} target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-lg hover:bg-coffee/5 text-mocha hover:text-coffee transition-all duration-300 min-w-[44px] min-h-[44px] flex items-center justify-center" aria-label="Google Scholar">
              <BookOpen className="w-4 h-4" />
            </a>
            <div className="w-px h-5 bg-coffee/10 mx-0.5 sm:mx-1" />
            <button onClick={scrollToTop} className="p-2.5 rounded-lg hover:bg-gold/10 text-mocha hover:text-gold transition-all duration-300 min-w-[44px] min-h-[44px] flex items-center justify-center" aria-label="Scroll to top">
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="mt-3 sm:mt-4 text-center">
          <p className="text-[11px] sm:text-xs text-mocha/40">© {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
