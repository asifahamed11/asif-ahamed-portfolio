"use client";

import { useEffect, useState } from "react";
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
      <div className="w-8 h-8 rounded-lg border border-stone-300 dark:border-[#3D3B36] bg-white/50 dark:bg-[#292825]/50" />
    );
  }

  return (
    <button
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
      className="relative p-2 rounded-lg border border-stone-300 dark:border-[#3D3B36] bg-white dark:bg-[#292825] text-stone-700 dark:text-[#EDE8E1] hover:text-stone-900 dark:hover:text-amber-200 hover:border-stone-400 dark:hover:border-[#524F49] transition-all duration-200 active:scale-95 shadow-xs"
      title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
    >
      {theme === "dark" ? (
        <Sun className="w-4 h-4 text-amber-300 animate-in spin-in-90 duration-300" />
      ) : (
        <Moon className="w-4 h-4 text-stone-700 animate-in spin-in-90 duration-300" />
      )}
    </button>
  );
}
