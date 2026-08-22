"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight, Mail, Github, Check, FileText
} from "lucide-react";
import { useContent } from "@/lib/content-provider";
import { copyToClipboard } from "@/lib/utils";
import BlurText from "@/components/animations/BlurText";
import TiltedCard from "@/components/animations/TiltedCard";
import RippleButton from "@/components/animations/RippleButton";

export default function Hero() {
  const { personalInfo, education } = useContent();
  const [copiedEmail, setCopiedEmail] = useState(false);

  const copyEmail = async () => {
    await copyToClipboard(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="hero" className="w-full relative">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
        
        {/* Left Column: Clean Bio & Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="lg:col-span-8 flex flex-col justify-between"
        >
          <div>
            {/* Status Line with Pulsing Emerald Radar */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.4 }}
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-mono text-[#3F3F46] dark:text-[#CBD5E1] mb-4 bg-[#EFECE6] dark:bg-[#12151F] px-3 py-1 rounded-full border border-[#E2DDD4] dark:border-[#23293A] shadow-2xs"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span>Available for research collaborations & engineering roles</span>
            </motion.div>

            {/* Headline with React Bits BlurText */}
            <h1 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-serif tracking-tight text-[#18181B] dark:text-[#F8FAFC] leading-[1.18] mb-4">
              <BlurText
                text="I'm Asif Ahamed, a software engineer & AI researcher."
                delay={40}
                animateBy="words"
              />
            </h1>

            {/* Concise Bio */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-base sm:text-lg text-[#52525B] dark:text-[#94A3B8] leading-relaxed font-normal mb-7 max-w-2xl"
            >
              Computer Science graduate from Varendra University (CGPA {education.cgpa} / 4.00). I focus on machine learning for bioinformatics, biomedical image classification, and open-source tools in Python, TypeScript, and C++.
            </motion.p>
          </div>

          {/* Action Buttons in Sleek Style */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="flex flex-wrap items-center gap-3"
          >
            <a
              href="#research"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#18181B] hover:bg-[#27272A] dark:bg-[#F8FAFC] dark:hover:bg-white text-[#F6F4EE] dark:text-[#0B0D13] rounded-xl font-medium text-sm transition-all shadow-2xs hover:shadow-indigo-500/15 active:scale-97 group"
            >
              <FileText className="w-4 h-4 text-indigo-300 dark:text-indigo-600 group-hover:rotate-6 transition-transform" />
              <span>Research Papers</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#A1A1AA] dark:text-[#64748B] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-white hover:bg-[#FAF9F5] dark:bg-[#12151F] dark:hover:bg-[#1D2230] text-[#18181B] dark:text-[#F8FAFC] border border-[#E2DDD4] dark:border-[#23293A] rounded-xl font-medium text-sm transition-all shadow-2xs hover:border-[#CBD5E1] dark:hover:border-[#333C52] active:scale-97 group"
            >
              <Github className="w-4 h-4 text-[#71717A] dark:text-[#94A3B8] group-hover:scale-110 transition-transform" />
              <span>Projects</span>
            </a>

            <RippleButton
              onClick={copyEmail}
              rippleColor="rgba(99, 102, 241, 0.25)"
              className="inline-flex items-center gap-1.5 px-3.5 py-2.5 bg-[#EFECE6] hover:bg-[#E5E0D5] dark:bg-[#12151F] dark:hover:bg-[#1D2230] text-[#27272A] dark:text-[#F8FAFC] rounded-xl font-medium text-sm border border-transparent dark:border-[#23293A] transition-all"
              title="Copy email address"
            >
              {copiedEmail ? (
                <>
                  <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  <span className="text-emerald-700 dark:text-emerald-400 font-semibold">Copied!</span>
                </>
              ) : (
                <>
                  <Mail className="w-4 h-4 text-[#71717A] dark:text-[#94A3B8]" />
                  <span>Copy Email</span>
                </>
              )}
            </RippleButton>
          </motion.div>
        </motion.div>

        {/* Right Column: 3D Tilted Portrait & Clean Links */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:col-span-4 flex flex-col items-center sm:items-start lg:items-center text-center sm:text-left lg:text-center"
        >
          <TiltedCard rotateAmplitude={8} scaleOnHover={1.03}>
            <div className="relative w-44 sm:w-48 rounded-2xl overflow-hidden bg-white dark:bg-[#12151F] border border-[#E2DDD4] dark:border-[#23293A] mb-3 shadow-xs group">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={personalInfo.avatarUrl || "/asif-sm.jpg?v=2"}
                alt={personalInfo.name}
                className="w-full h-auto max-h-56 object-contain rounded-2xl transition-transform duration-300 group-hover:scale-102"
              />
            </div>
          </TiltedCard>

          <div className="space-y-0.5 mb-2.5">
            <h2 className="text-lg font-bold text-[#18181B] dark:text-[#F8FAFC] tracking-tight">{personalInfo.name}</h2>
            <p className="text-xs text-[#52525B] dark:text-[#94A3B8]">B.Sc. in Computer Science & Engineering</p>
            <p className="text-xs text-[#71717A] dark:text-[#64748B]">Varendra University, Rajshahi</p>
          </div>

          {/* Social Links Row */}
          <div className="flex items-center justify-center gap-3.5 text-[#52525B] dark:text-[#94A3B8] text-xs font-medium pt-2 border-t border-[#E2DDD4] dark:border-[#23293A] w-full max-w-xs">
            <a
              href={personalInfo.scholar}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors flex items-center gap-1 hover:translate-x-0.5"
            >
              Scholar <ArrowUpRight className="w-3 h-3 text-[#A1A1AA] dark:text-[#64748B]" />
            </a>
            <span className="text-[#D4D0C5] dark:text-[#23293A]">•</span>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#18181B] dark:hover:text-white transition-colors flex items-center gap-1 hover:translate-x-0.5"
            >
              GitHub <ArrowUpRight className="w-3 h-3 text-[#A1A1AA] dark:text-[#64748B]" />
            </a>
            <span className="text-[#D4D0C5] dark:text-[#23293A]">•</span>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors flex items-center gap-1 hover:translate-x-0.5"
            >
              LinkedIn <ArrowUpRight className="w-3 h-3 text-[#A1A1AA] dark:text-[#64748B]" />
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
