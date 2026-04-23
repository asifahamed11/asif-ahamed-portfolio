"use client";

import { motion } from "framer-motion";
import { type LucideIcon } from "lucide-react";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  icon: LucideIcon;
}

export default function SectionHeading({ title, subtitle, icon: Icon }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="mb-10 sm:mb-12"
    >
      <div className="flex items-center gap-3 mb-2">
        <div className="p-2 rounded-lg bg-gold/10 text-gold">
          <Icon className="w-5 h-5" />
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-coffee">{title}</h2>
      </div>
      {subtitle && (
        <p className="text-mocha text-xs sm:text-sm ml-12">{subtitle}</p>
      )}
      <div className="mt-3 sm:mt-4 ml-12 w-10 sm:w-12 h-0.5 bg-gold/30 rounded-full" />
    </motion.div>
  );
}
