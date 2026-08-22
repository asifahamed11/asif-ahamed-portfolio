"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "@/lib/theme-provider";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-8 h-8 rounded-lg border border-[#E2DDD4] dark:border-[#23293A] bg-white/50 dark:bg-[#12151F]/50" />
    );
  }

  const isDark = theme === "dark";

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.92 }}
      onClick={toggleTheme}
      aria-label={`Switch to ${isDark ? "light" : "dark"} theme`}
      className="relative p-2 rounded-lg border border-[#E2DDD4] dark:border-[#23293A] bg-white dark:bg-[#12151F] text-[#52525B] dark:text-[#F8FAFC] hover:text-[#18181B] dark:hover:text-white hover:border-indigo-300 dark:hover:border-indigo-500/50 shadow-2xs overflow-hidden flex items-center justify-center group"
      title={`Switch to ${isDark ? "light" : "dark"} mode`}
    >
      {/* Morphing Sun/Moon with Framer Motion */}
      <AnimatePresence mode="wait" initial={false}>
        {isDark ? (
          <motion.div
            key="sun"
            initial={{ rotate: -90, scale: 0.4, opacity: 0 }}
            animate={{ rotate: 0, scale: 1, opacity: 1 }}
            exit={{ rotate: 90, scale: 0.4, opacity: 0 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 20,
            }}
            className="flex items-center justify-center"
          >
            <Sun className="w-4 h-4 text-amber-400" />
          </motion.div>
        ) : (
          <motion.div
            key="moon"
            initial={{ rotate: 90, scale: 0.4, opacity: 0 }}
            animate={{ rotate: 0, scale: 1, opacity: 1 }}
            exit={{ rotate: -90, scale: 0.4, opacity: 0 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 20,
            }}
            className="flex items-center justify-center"
          >
            <Moon className="w-4 h-4 text-[#52525B] group-hover:text-indigo-600" />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.button>
  );
}
