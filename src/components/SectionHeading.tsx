"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  icon: LucideIcon;
}

export default function SectionHeading({
  title,
  subtitle,
  icon: Icon,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="mb-12 md:mb-16"
    >
      <div className="flex items-center gap-3 mb-3">
        <div className="p-2 rounded-lg glass">
          <Icon className="w-5 h-5 text-accent-light" />
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">
          {title}
        </h2>
      </div>
      {subtitle && (
        <p className="text-muted-light text-base md:text-lg ml-12">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
