"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { useContent } from "@/lib/content-provider";
import ThemeToggle from "@/components/ThemeToggle";

const navItems = [
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
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#FAFAF7]/85 dark:bg-[#201F1D]/85 backdrop-blur-md border-b border-[#E7E5E0] dark:border-[#3D3B36] transition-colors">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 h-14 sm:h-16 flex items-center justify-between">
        {/* Brand / Name */}
        <a
          href="#hero"
          className="flex items-center gap-2 group text-stone-900 dark:text-[#EDE8E1] hover:text-stone-600 dark:hover:text-stone-300 transition-colors"
        >
          <span className="font-serif italic text-lg sm:text-xl font-bold tracking-tight">
            Asif Ahamed
          </span>
          <span className="hidden sm:inline-block text-xs font-mono text-stone-400 dark:text-stone-400">
            / Rajshahi, BD
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 text-xs font-medium text-stone-600 dark:text-[#B8B4AE]">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.slice(1);
            return (
              <a
                key={item.label}
                href={item.href}
                className={`transition-colors py-1 ${
                  isActive
                    ? "text-stone-900 dark:text-[#EDE8E1] font-semibold border-b-2 border-stone-900 dark:border-[#EDE8E1]"
                    : "hover:text-stone-900 dark:hover:text-[#EDE8E1]"
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Right Actions: ThemeToggle + Resume */}
        <div className="flex items-center gap-2.5">
          {/* Theme Switcher Toggle */}
          <ThemeToggle />

          <a
            href={personalInfo.cvUrl || "/CV.pdf"}
            download
            aria-label="Download Asif Ahamed's CV"
            className="hidden sm:inline-flex items-center gap-1 text-xs font-semibold text-stone-700 dark:text-[#EDE8E1] hover:text-stone-900 dark:hover:text-white px-3 py-1.5 rounded-lg border border-stone-300 dark:border-[#3D3B36] hover:border-stone-400 dark:hover:border-[#524F49] bg-white dark:bg-[#292825] hover:bg-stone-50 dark:hover:bg-[#33312C] transition-all active:scale-95 shadow-xs"
          >
            <span>Curriculum Vitae</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-stone-400 dark:text-stone-400" />
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-stone-100 dark:hover:bg-[#292825] text-stone-700 dark:text-[#EDE8E1] transition-colors"
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
            className="md:hidden border-b border-stone-200 dark:border-[#3D3B36] bg-[#FAFAF7] dark:bg-[#201F1D] px-4 py-4 overflow-hidden"
          >
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsMobileOpen(false)}
                  className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                    activeSection === item.href.slice(1)
                      ? "bg-stone-200/80 dark:bg-[#292825] text-stone-900 dark:text-[#EDE8E1] font-semibold"
                      : "text-stone-600 dark:text-[#B8B4AE] hover:text-stone-900 dark:hover:text-[#EDE8E1] hover:bg-stone-100 dark:hover:bg-[#292825]/60"
                  }`}
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-2 mt-1 border-t border-stone-200 dark:border-[#3D3B36]">
                <a
                  href={personalInfo.cvUrl || "/CV.pdf"}
                  download
                  className="flex items-center justify-center gap-1.5 w-full py-2.5 bg-stone-900 dark:bg-[#EDE8E1] text-white dark:text-[#201F1D] rounded-lg text-xs font-semibold"
                >
                  <span>Download Curriculum Vitae (PDF)</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-stone-400 dark:text-stone-600" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
