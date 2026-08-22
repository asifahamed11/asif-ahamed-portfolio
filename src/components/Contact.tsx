"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Copy, Check, ArrowUpRight, MessageSquare } from "lucide-react";
import { useContent } from "@/lib/content-provider";
import { copyToClipboard } from "@/lib/utils";
import SpotlightCard from "@/components/animations/SpotlightCard";
import RippleButton from "@/components/animations/RippleButton";

export default function Contact() {
  const { personalInfo } = useContent();
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    await copyToClipboard(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.55 }}
      id="contact"
      className="w-full"
    >
      {/* Clean Header */}
      <div className="flex items-center justify-between pb-3 border-b border-[#E2DDD4] dark:border-[#23293A] mb-4">
        <span className="text-xs sm:text-sm font-mono uppercase tracking-widest text-[#52525B] dark:text-[#94A3B8] font-semibold flex items-center gap-2">
          <MessageSquare className="w-4 h-4 text-indigo-600 dark:text-indigo-400 inline-block" />
          <span>Contact</span>
        </span>
        <span className="text-xs font-mono text-emerald-800 dark:text-emerald-300 font-medium flex items-center gap-1.5 bg-emerald-100/70 dark:bg-emerald-950/60 px-2 py-0.5 rounded-full border border-emerald-200 dark:border-emerald-800/80">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block animate-pulse" />
          Open for roles
        </span>
      </div>

      {/* 2-Column Content */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
        <div>
          <h2 className="text-lg sm:text-xl font-serif font-bold text-[#18181B] dark:text-[#F8FAFC] mb-1">
            Let&apos;s Connect
          </h2>
          <p className="text-xs sm:text-sm text-[#52525B] dark:text-[#94A3B8] leading-relaxed mb-4">
            Feel free to reach out for research collaborations or software engineering opportunities.
          </p>

          <div className="flex flex-wrap items-center gap-2">
            <a
              href={`mailto:${personalInfo.email}`}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-[#18181B] hover:bg-[#27272A] dark:bg-[#F8FAFC] dark:hover:bg-white text-[#F6F4EE] dark:text-[#0B0D13] rounded-xl text-xs sm:text-sm font-medium transition-all shadow-2xs hover:shadow-indigo-500/15 active:scale-97 group"
            >
              <Mail className="w-3.5 h-3.5 text-indigo-300 dark:text-indigo-600 group-hover:scale-110 transition-transform" />
              <span>Send Email</span>
            </a>

            <RippleButton
              onClick={copyEmail}
              rippleColor="rgba(99, 102, 241, 0.25)"
              className="inline-flex items-center gap-1 px-3 py-2 bg-[#EFECE6] hover:bg-[#E5E0D5] dark:bg-[#12151F] dark:hover:bg-[#1D2230] text-[#27272A] dark:text-[#F8FAFC] rounded-xl text-xs sm:text-sm font-medium border border-transparent dark:border-[#23293A] transition-all"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-[#71717A] dark:text-[#94A3B8]" />}
              <span>{copied ? "Copied" : "Copy Address"}</span>
            </RippleButton>
          </div>
        </div>

        {/* Quick Details with SpotlightCard */}
        <div className="space-y-2">
          <SpotlightCard
            spotlightColor="rgba(99, 102, 241, 0.1)"
            className="p-2.5 rounded-xl bg-white dark:bg-[#12151F] border border-[#E2DDD4] dark:border-[#23293A] flex items-center justify-between"
          >
            <div className="flex items-center gap-2.5">
              <Mail className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
              <span className="text-xs sm:text-sm font-semibold text-[#18181B] dark:text-[#F8FAFC]">{personalInfo.email}</span>
            </div>
          </SpotlightCard>

          <SpotlightCard
            spotlightColor="rgba(99, 102, 241, 0.1)"
            className="p-2.5 rounded-xl bg-white dark:bg-[#12151F] border border-[#E2DDD4] dark:border-[#23293A] flex items-center justify-between"
          >
            <div className="flex items-center gap-2.5">
              <MapPin className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
              <span className="text-xs sm:text-sm font-semibold text-[#18181B] dark:text-[#F8FAFC]">{personalInfo.location}</span>
            </div>
          </SpotlightCard>

          <div className="p-2 rounded-xl bg-white dark:bg-[#12151F] border border-[#E2DDD4] dark:border-[#23293A] flex items-center justify-around text-xs sm:text-sm font-medium text-[#52525B] dark:text-[#94A3B8]">
            <a href={personalInfo.scholar} target="_blank" rel="noopener noreferrer" className="hover:text-indigo-600 dark:hover:text-indigo-400 flex items-center gap-1 hover:translate-x-0.5 transition-transform">
              Scholar <ArrowUpRight className="w-3 h-3 opacity-60" />
            </a>
            <span className="text-[#D4D0C5] dark:text-[#23293A]">•</span>
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="hover:text-[#18181B] dark:hover:text-white flex items-center gap-1 hover:translate-x-0.5 transition-transform">
              GitHub <ArrowUpRight className="w-3 h-3 opacity-60" />
            </a>
            <span className="text-[#D4D0C5] dark:text-[#23293A]">•</span>
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-indigo-600 dark:hover:text-indigo-400 flex items-center gap-1 hover:translate-x-0.5 transition-transform">
              LinkedIn <ArrowUpRight className="w-3 h-3 opacity-60" />
            </a>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
