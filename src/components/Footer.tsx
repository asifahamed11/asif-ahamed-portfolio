"use client";

import { Github, Linkedin, BookOpen, Heart, ArrowUp } from "lucide-react";
import { useContent } from "@/lib/content-provider";

export default function Footer() {
  const { personalInfo } = useContent();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-white/5 py-8 px-4 sm:px-6">
      {/* Gradient border top glow */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-DEFAULT/30 to-transparent" />

      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-sm text-muted">
            <span>Built with</span>
            <Heart className="w-3.5 h-3.5 text-rose-DEFAULT animate-pulse" />
            <span>by</span>
            <span className="text-aurora font-medium">{personalInfo.name}</span>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg hover:bg-white/5 text-muted hover:text-foreground transition-all duration-300 hover:scale-110"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg hover:bg-[#0077b5]/10 text-muted hover:text-[#0077b5] transition-all duration-300 hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.scholar}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg hover:bg-[#4285f4]/10 text-muted hover:text-[#4285f4] transition-all duration-300 hover:scale-110"
              aria-label="Google Scholar"
            >
              <BookOpen className="w-4 h-4" />
            </a>
            <div className="w-px h-5 bg-white/10 mx-1" />
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg hover:bg-cyan-DEFAULT/10 text-muted hover:text-cyan-light transition-all duration-300 hover:scale-110 hover:-translate-y-0.5"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="mt-4 text-center">
          <p className="text-xs text-muted/60">
            © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
