"use client";

import { useState, useEffect } from "react";
import {
  ArrowUpRight, Mail, BookOpen, Github, Check, MapPin, Award, GraduationCap, FileText
} from "lucide-react";
import { useContent } from "@/lib/content-provider";
import { copyToClipboard } from "@/lib/utils";

export default function Hero() {
  const { personalInfo, publications, education } = useContent();
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "Asia/Dhaka",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      };
      setCurrentTime(new Intl.DateTimeFormat("en-US", options).format(now));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const copyEmail = async () => {
    await copyToClipboard(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="hero" className="w-full">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        
        {/* Left Column: Bio & Highlights (Fluid, borderless) */}
        <div className="lg:col-span-8 flex flex-col justify-between">
          <div>
            {/* Status Line */}
            <div className="inline-flex items-center gap-2 text-xs font-mono text-stone-500 dark:text-[#9E9A93] mb-4">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span>Available for research collaborations & engineering roles</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-serif tracking-tight text-stone-900 dark:text-[#EDE8E1] leading-[1.18] mb-4">
              I&apos;m <span className="italic font-normal">Asif Ahamed</span>, a software engineer & AI researcher.
            </h1>

            {/* Narrative Bio */}
            <p className="text-base sm:text-lg text-stone-600 dark:text-[#B8B4AE] leading-relaxed font-normal mb-7 max-w-3xl">
              I am a Computer Science & Engineering graduate from Varendra University in Rajshahi, Bangladesh (CGPA 3.94 / 4.00). My work focuses on machine learning for bioinformatics, particularly classifying somatic mutations and analyzing biomedical images. I also build open-source tools and desktop utilities in Python, TypeScript, and C++.
            </p>

            {/* 4-Column Minimal Quick Fact Pills */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 w-full mb-7 text-xs text-stone-700 dark:text-[#EDE8E1]">
              <div className="flex items-center gap-2.5 py-1.5 px-2.5 rounded-lg bg-stone-100/70 dark:bg-[#292825] border border-stone-200/60 dark:border-[#3D3B36]">
                <BookOpen className="w-4 h-4 text-stone-500 dark:text-stone-400 shrink-0" />
                <span className="truncate"><strong>{publications.length} Papers</strong> in IEEE, Springer</span>
              </div>

              <div className="flex items-center gap-2.5 py-1.5 px-2.5 rounded-lg bg-amber-50/80 dark:bg-[#3D3325]/50 border border-amber-200/80 dark:border-[#665134]/80 text-amber-950 dark:text-[#F3D19E]">
                <Award className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0" />
                <span className="truncate"><strong>UCICS 2026</strong> Best Paper</span>
              </div>

              <div className="flex items-center gap-2.5 py-1.5 px-2.5 rounded-lg bg-stone-100/70 dark:bg-[#292825] border border-stone-200/60 dark:border-[#3D3B36]">
                <GraduationCap className="w-4 h-4 text-stone-500 dark:text-stone-400 shrink-0" />
                <span className="truncate"><strong>CGPA {education.cgpa}</strong> / 4.00</span>
              </div>

              <div className="flex items-center gap-2.5 py-1.5 px-2.5 rounded-lg bg-stone-100/70 dark:bg-[#292825] border border-stone-200/60 dark:border-[#3D3B36]">
                <MapPin className="w-4 h-4 text-stone-500 dark:text-stone-400 shrink-0" />
                <span className="truncate">Rajshahi <span className="font-mono text-stone-400 dark:text-[#9E9A93]">({currentTime || "GMT+6"})</span></span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="#research"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-stone-900 hover:bg-stone-800 dark:bg-[#EDE8E1] dark:hover:bg-white text-white dark:text-[#201F1D] rounded-xl font-medium text-xs sm:text-sm transition-all shadow-xs active:scale-95"
            >
              <FileText className="w-4 h-4 text-stone-300 dark:text-stone-600" />
              <span>Read Research Papers</span>
            </a>

            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-white hover:bg-stone-50 dark:bg-[#292825] dark:hover:bg-[#33312C] text-stone-800 dark:text-[#EDE8E1] border border-stone-300 dark:border-[#3D3B36] rounded-xl font-medium text-xs sm:text-sm transition-all shadow-xs active:scale-95"
            >
              <Github className="w-4 h-4 text-stone-500 dark:text-stone-400" />
              <span>Explore Projects</span>
            </a>

            <button
              onClick={copyEmail}
              className="inline-flex items-center gap-1.5 px-4 py-2.5 bg-stone-100 hover:bg-stone-200 dark:bg-[#292825] dark:hover:bg-[#33312C] text-stone-700 dark:text-[#EDE8E1] rounded-xl font-medium text-xs sm:text-sm transition-all active:scale-95"
              title="Copy email address"
            >
              {copiedEmail ? (
                <>
                  <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  <span className="text-emerald-700 dark:text-emerald-400 font-semibold">Email Copied!</span>
                </>
              ) : (
                <>
                  <Mail className="w-4 h-4 text-stone-500 dark:text-stone-400" />
                  <span>Copy Email</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Right Column: Floating Portrait & Links (No heavy outer box) */}
        <div className="lg:col-span-4 flex flex-col items-center sm:items-start lg:items-center text-center sm:text-left lg:text-center">
          <div className="relative w-40 h-40 sm:w-44 sm:h-44 rounded-2xl overflow-hidden bg-stone-100 dark:bg-[#201F1D] border border-stone-200 dark:border-[#3D3B36] mb-3.5 shadow-sm group">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={personalInfo.avatarUrl || "/asif-sm.jpg"}
              alt={personalInfo.name}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>

          <div className="space-y-0.5 mb-3">
            <h2 className="text-base font-bold text-stone-900 dark:text-[#EDE8E1] tracking-tight">{personalInfo.name}</h2>
            <p className="text-xs text-stone-500 dark:text-[#B8B4AE]">B.Sc. in Computer Science & Engineering</p>
            <p className="text-xs text-stone-400 dark:text-[#9E9A93]">Varendra University, Rajshahi</p>
          </div>

          {/* Social Links Row */}
          <div className="flex items-center justify-center gap-3 text-stone-600 dark:text-[#B8B4AE] text-xs font-medium pt-2 border-t border-stone-200/60 dark:border-[#3D3B36] w-full max-w-xs">
            <a
              href={personalInfo.scholar}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-stone-900 dark:hover:text-white transition-colors flex items-center gap-1"
            >
              Scholar <ArrowUpRight className="w-3 h-3 text-stone-400 dark:text-stone-400" />
            </a>
            <span className="text-stone-300 dark:text-[#3D3B36]">•</span>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-stone-900 dark:hover:text-white transition-colors flex items-center gap-1"
            >
              GitHub <ArrowUpRight className="w-3 h-3 text-stone-400 dark:text-stone-400" />
            </a>
            <span className="text-stone-300 dark:text-[#3D3B36]">•</span>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-stone-900 dark:hover:text-white transition-colors flex items-center gap-1"
            >
              LinkedIn <ArrowUpRight className="w-3 h-3 text-stone-400 dark:text-stone-400" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
