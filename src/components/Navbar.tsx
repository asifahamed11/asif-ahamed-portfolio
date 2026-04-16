"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  User,
  BookOpen,
  FolderGit2,
  Cpu,
  Mail,
  Download,
  Settings,
} from "lucide-react";

const navLinks = [
  { href: "#about", label: "About", icon: User },
  { href: "#research", label: "Research", icon: BookOpen },
  { href: "#projects", label: "Projects", icon: FolderGit2 },
  { href: "#skills", label: "Skills", icon: Cpu },
  { href: "#contact", label: "Contact", icon: Mail },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Active section detection
      const sections = navLinks.map((l) => l.href.replace("#", ""));
      let current = "";
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 150) {
            current = sectionId;
          }
        }
      }
      setActiveSection(current);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
          isScrolled
            ? "bg-background/80 backdrop-blur-xl shadow-xl shadow-black/20 border-b border-white/5"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <a
              href="#"
              className="flex items-center gap-2.5 text-foreground font-bold text-lg tracking-tight hover:opacity-80 transition-opacity duration-300"
            >
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-DEFAULT/30 to-violet-DEFAULT/30 flex items-center justify-center border border-cyan-DEFAULT/20">
                <span className="text-sm font-bold text-aurora">A</span>
              </div>
              <span className="text-aurora">Asif Ahamed</span>
            </a>

            <div className="hidden md:flex items-center gap-0.5">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.replace("#", "");
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    className={`relative flex items-center gap-1.5 px-3 py-2 text-sm transition-all duration-300 ease-out rounded-lg hover:scale-105 ${
                      isActive
                        ? "text-cyan-light"
                        : "text-muted-light hover:text-foreground hover:bg-white/5"
                    }`}
                  >
                    <link.icon className="w-3.5 h-3.5" />
                    {link.label}
                    {isActive && (
                      <motion.div
                        layoutId="activeNav"
                        className="absolute bottom-0 left-2 right-2 h-0.5 bg-gradient-to-r from-cyan-DEFAULT to-violet-DEFAULT rounded-full"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                      />
                    )}
                  </a>
                );
              })}
              <a
                href="https://drive.google.com/uc?export=download&id=1lHpOWo6pKdiCdmNFm01LXBD-qrD2cGHz"
                download
                className="flex items-center gap-1.5 px-3 py-2 ml-2 text-sm bg-gradient-to-r from-cyan-DEFAULT/10 to-violet-DEFAULT/10 hover:from-cyan-DEFAULT/20 hover:to-violet-DEFAULT/20 text-cyan-light hover:text-cyan-DEFAULT transition-all duration-300 ease-out rounded-lg hover:scale-105 border border-cyan-DEFAULT/10 hover:border-cyan-DEFAULT/20"
              >
                <Download className="w-3.5 h-3.5" />
                CV
              </a>
              <a
                href="/asif-ahamed-portfolio/admin"
                className="flex items-center gap-1.5 px-2.5 py-2 ml-1 text-sm text-muted hover:text-muted-light transition-all duration-300 ease-out rounded-lg hover:bg-white/5"
                title="Admin Panel"
              >
                <Settings className="w-3.5 h-3.5" />
              </a>
            </div>

            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-white/5 transition-all duration-300 ease-out text-muted-light hover:scale-110"
            >
              {isMobileOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            <div
              className="absolute inset-0 bg-black/40 backdrop-blur-sm"
              onClick={() => setIsMobileOpen(false)}
            />
            <div className="absolute top-16 left-4 right-4 bg-background/95 backdrop-blur-xl border border-white/5 rounded-xl p-4 shadow-2xl">
              {navLinks.map((link, i) => {
                const isActive = activeSection === link.href.replace("#", "");
                return (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05, duration: 0.3 }}
                    onClick={() => setIsMobileOpen(false)}
                    className={`flex items-center gap-3 px-4 py-3 transition-all duration-300 ease-out rounded-lg hover:translate-x-1 ${
                      isActive
                        ? "text-cyan-light bg-cyan-DEFAULT/10"
                        : "text-muted-light hover:text-foreground hover:bg-white/5"
                    }`}
                  >
                    <link.icon className="w-4 h-4" />
                    {link.label}
                  </motion.a>
                );
              })}
              <motion.a
                href="https://drive.google.com/uc?export=download&id=1lHpOWo6pKdiCdmNFm01LXBD-qrD2cGHz"
                download
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.05, duration: 0.3 }}
                onClick={() => setIsMobileOpen(false)}
                className="flex items-center gap-3 px-4 py-3 mt-2 bg-gradient-to-r from-cyan-DEFAULT/10 to-violet-DEFAULT/10 text-cyan-light transition-all duration-300 ease-out rounded-lg border-t border-white/5 hover:translate-x-1"
              >
                <Download className="w-4 h-4" />
                Download CV
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
