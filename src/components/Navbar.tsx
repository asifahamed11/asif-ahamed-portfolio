"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  Sparkles,
  User,
  BookOpen,
  FolderGit2,
  Cpu,
  Mail,
  Download,
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

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
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
          isScrolled ?
            "bg-card/95 backdrop-blur-xl shadow-xl shadow-black/10 border-b border-border"
          : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <a
              href="#"
              className="flex items-center gap-2 text-foreground font-bold text-lg tracking-tight hover:opacity-80 transition-opacity duration-300"
            >
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent/30 to-purple-500/30 flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-accent-light" />
              </div>
              <span className="text-gradient">Asif Ahamed</span>
            </a>

            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="flex items-center gap-1.5 px-3 py-2 text-sm text-muted-light hover:text-foreground transition-all duration-300 ease-out rounded-lg hover:bg-white/5 hover:scale-105"
                >
                  <link.icon className="w-3.5 h-3.5" />
                  {link.label}
                </a>
              ))}
              <a
                href="https://github.com/asifahamed11/asif-ahamed-portfolio/blob/main/public/CV.pdf"
                download
                className="flex items-center gap-1.5 px-3 py-2 ml-2 text-sm bg-accent/10 hover:bg-accent/20 text-accent-light hover:text-accent transition-all duration-300 ease-out rounded-lg hover:scale-105 hover:shadow-lg hover:shadow-accent/20"
              >
                <Download className="w-3.5 h-3.5" />
                CV
              </a>
            </div>

            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-white/5 transition-all duration-300 ease-out text-muted-light hover:scale-110"
            >
              {isMobileOpen ?
                <X className="w-5 h-5" />
              : <Menu className="w-5 h-5" />}
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
            transition={{ duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="fixed inset-0 z-40 md:hidden"
          >
            <div
              className="absolute inset-0 bg-black/20 backdrop-blur-sm"
              onClick={() => setIsMobileOpen(false)}
            />
            <div className="absolute top-16 left-4 right-4 bg-card/95 backdrop-blur-xl border border-border rounded-xl p-4 shadow-2xl">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: i * 0.05,
                    duration: 0.3,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                  onClick={() => setIsMobileOpen(false)}
                  className="flex items-center gap-3 px-4 py-3 text-muted-light hover:text-foreground transition-all duration-300 ease-out rounded-lg hover:bg-white/5 hover:translate-x-1"
                >
                  <link.icon className="w-4 h-4" />
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href="https://github.com/asifahamed11/asif-ahamed-portfolio/blob/main/public/CV.pdf"
                download
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  delay: navLinks.length * 0.05,
                  duration: 0.3,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                onClick={() => setIsMobileOpen(false)}
                className="flex items-center gap-3 px-4 py-3 mt-2 bg-accent/10 text-accent-light hover:text-accent transition-all duration-300 ease-out rounded-lg border-t border-white/5 hover:bg-accent/20 hover:translate-x-1"
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
