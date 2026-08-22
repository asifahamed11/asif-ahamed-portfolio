"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Menu, X } from "lucide-react";
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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full bg-[#F6F4EE]/85 dark:bg-[#0B0D13]/85 backdrop-blur-md border-b border-[#E2DDD4] dark:border-[#23293A]">
      <div className="w-full max-w-[1540px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-14 h-14 flex items-center justify-between">
        
        {/* Name / Monogram */}
        <Link
          href="/"
          className="group flex items-center gap-2 text-[#18181B] dark:text-[#F8FAFC] hover:opacity-85 transition-opacity"
        >
          <span className="font-serif font-bold text-base sm:text-lg tracking-tight">
            {personalInfo.name}
          </span>
          <span className="text-xs font-mono text-[#71717A] dark:text-[#94A3B8] hidden sm:inline">
            / {personalInfo.location}
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <div className="flex items-center gap-5 text-xs sm:text-sm font-medium text-[#52525B] dark:text-[#94A3B8]">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="hover:text-[#18181B] dark:hover:text-[#F8FAFC] transition-colors py-1 relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#4F46E5] dark:bg-[#818CF8] transition-all duration-200 group-hover:w-full" />
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2.5 pl-4 border-l border-[#E2DDD4] dark:border-[#23293A]">
            <ThemeToggle />
            <a
              href={personalInfo.cvUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#18181B] hover:bg-[#27272A] dark:bg-[#F8FAFC] dark:hover:bg-white text-[#F6F4EE] dark:text-[#0B0D13] rounded-lg text-xs font-medium transition-all shadow-2xs hover:shadow-indigo-500/10 active:scale-95 group"
            >
              <span>Curriculum Vitae</span>
              <ArrowUpRight className="w-3 h-3 text-[#A1A1AA] dark:text-[#64748B] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </nav>

        {/* Mobile Menu Button & Theme Toggle */}
        <div className="flex md:hidden items-center gap-2">
          <ThemeToggle />
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 text-[#52525B] dark:text-[#94A3B8] hover:text-[#18181B] dark:hover:text-[#F8FAFC] rounded-lg border border-[#E2DDD4] dark:border-[#23293A]"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[#E2DDD4] dark:border-[#23293A] bg-[#F6F4EE] dark:bg-[#0B0D13] px-4 py-3 space-y-2">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-medium text-[#52525B] dark:text-[#94A3B8] hover:text-[#18181B] dark:hover:text-[#F8FAFC] py-1.5"
            >
              {item.label}
            </a>
          ))}
          <div className="pt-2 border-t border-[#E2DDD4] dark:border-[#23293A]">
            <a
              href={personalInfo.cvUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between text-xs font-medium text-[#18181B] dark:text-[#F8FAFC] py-1.5"
            >
              <span>Curriculum Vitae</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
