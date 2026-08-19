"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { useContent } from "@/lib/content-provider";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Research", href: "#research" },
  { label: "Projects", href: "#projects" },
  { label: "Toolkit", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const { personalInfo } = useContent();
  const [activeSection, setActiveSection] = useState("");
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => item.href.slice(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.getBoundingClientRect().top <= 140) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsMobileOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#FAFAF7]/85 backdrop-blur-md border-b border-[#E7E5E0] transition-all">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 h-14 sm:h-16 flex items-center justify-between">
        {/* Brand / Name */}
        <a
          href="#hero"
          className="flex items-center gap-2 group text-stone-900 hover:text-stone-600 transition-colors"
        >
          <span className="font-serif italic text-lg sm:text-xl font-bold tracking-tight">
            Asif Ahamed
          </span>
          <span className="hidden sm:inline-block text-xs font-mono text-stone-400">
            / Rajshahi, BD
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 text-xs font-medium text-stone-600">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.slice(1);
            return (
              <a
                key={item.label}
                href={item.href}
                className={`transition-colors py-1 ${
                  isActive
                    ? "text-stone-900 font-semibold border-b-2 border-stone-900"
                    : "hover:text-stone-900"
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Right CTA / Resume */}
        <div className="flex items-center gap-3">
          <a
            href={personalInfo.cvUrl || "/CV.pdf"}
            download
            aria-label="Download Asif Ahamed's CV"
            className="hidden sm:inline-flex items-center gap-1 text-xs font-semibold text-stone-700 hover:text-stone-900 px-3 py-1.5 rounded-lg border border-stone-300 hover:border-stone-400 bg-white hover:bg-stone-50 transition-all active:scale-95 shadow-xs"
          >
            <span>Curriculum Vitae</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-stone-400" />
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-stone-100 text-stone-700 transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-b border-stone-200 bg-[#FAFAF7] px-4 py-4 overflow-hidden"
          >
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsMobileOpen(false)}
                  className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                    activeSection === item.href.slice(1)
                      ? "bg-stone-200/80 text-stone-900 font-semibold"
                      : "text-stone-600 hover:text-stone-900 hover:bg-stone-100"
                  }`}
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-2 mt-1 border-t border-stone-200">
                <a
                  href={personalInfo.cvUrl || "/CV.pdf"}
                  download
                  className="flex items-center justify-center gap-1.5 w-full py-2.5 bg-stone-900 text-white rounded-lg text-xs font-semibold"
                >
                  <span>Download Curriculum Vitae (PDF)</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-stone-400" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
