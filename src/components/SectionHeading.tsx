"use client";

import { motion } from "framer-motion";
import { type LucideIcon } from "lucide-react";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  icon: LucideIcon;
  badge?: string;
}

export default function SectionHeading({
  title,
  subtitle,
  icon: Icon,
  badge,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="mb-10 sm:mb-14"
    >
      <div className="flex items-center gap-3 mb-2.5">
        <div className="p-2.5 rounded-xl bg-indigo-50 border border-indigo-100 text-indigo-600 shadow-subtle flex items-center justify-center">
          <Icon className="w-5 h-5" />
        </div>
        <div className="flex flex-wrap items-center gap-2.5">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
            {title}
          </h2>
          {badge && (
            <span className="px-2.5 py-0.5 text-xs font-semibold rounded-full bg-indigo-50 text-indigo-700 border border-indigo-200/70">
              {badge}
            </span>
          )}
        </div>
      </div>
      {subtitle && (
        <p className="text-slate-600 text-sm sm:text-base ml-12 sm:ml-14 max-w-2xl font-normal leading-relaxed">
          {subtitle}
        </p>
      )}
      <div className="mt-3.5 ml-12 sm:ml-14 w-12 h-1 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-full" />
    </motion.div>
  );
}
