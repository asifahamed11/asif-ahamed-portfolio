"use client";

import { motion } from "framer-motion";

interface InteractiveGridProps {
  className?: string;
}

export default function InteractiveGrid({ className = "" }: InteractiveGridProps) {
  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}>
      {/* Grid Pattern */}
      <div className="absolute inset-0 grid-pattern opacity-70 [mask-image:radial-gradient(ellipse_80%_60%_at_50%_20%,#000_70%,transparent_100%)]" />

      {/* Subtle Ambient Indigo Orb */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.35, 0.5, 0.35],
          x: [0, 20, 0],
          y: [0, -15, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] sm:w-[650px] h-[450px] sm:h-[650px] bg-gradient-to-tr from-indigo-200/40 via-blue-100/30 to-transparent rounded-full blur-3xl pointer-events-none"
      />

      {/* Soft Ambient Amber Orb for Warmth */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.35, 0.2],
          x: [0, -25, 0],
          y: [0, 20, 0],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute top-1/3 right-1/4 w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] bg-gradient-to-br from-amber-100/30 via-orange-100/20 to-transparent rounded-full blur-3xl pointer-events-none"
      />
    </div>
  );
}
