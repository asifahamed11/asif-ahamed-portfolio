"use client";

import { useState, useEffect } from "react";
import {
  ArrowUpRight, Mail, BookOpen, Github, Check, MapPin, Award, GraduationCap, FileText
} from "lucide-react";
import { useContent } from "@/lib/content-provider";

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

  const copyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="hero" className="pt-16 sm:pt-20 pb-10 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* Main Editorial Text Column */}
          <div className="lg:col-span-8 flex flex-col items-start text-left">
            
            {/* Status Line */}
            <div className="flex items-center gap-2 text-xs font-mono text-stone-500 mb-4">
              <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block animate-pulse" />
              <span>Available for research collaborations & engineering roles</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif tracking-tight text-stone-900 leading-[1.15] mb-4">
              I&apos;m <span className="italic font-normal">Asif Ahamed</span>, a software engineer & AI researcher.
            </h1>

            {/* Narrative Paragraph */}
            <p className="text-base sm:text-lg text-stone-600 leading-relaxed font-normal mb-6 max-w-2xl">
              I study Computer Science at Varendra University in Rajshahi, Bangladesh. My work focuses on machine learning for bioinformatics, particularly classifying somatic mutations and analyzing biomedical images. I also build open-source tools and desktop utilities in Python, TypeScript, and C++.
            </p>

            {/* Quick Human Fact Chips */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 w-full max-w-2xl mb-8 text-xs text-stone-700">
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-stone-200 shadow-xs">
                <BookOpen className="w-4 h-4 text-stone-500 shrink-0" />
                <span><strong>{publications.length} Papers</strong> in IEEE, Springer & CRC Press</span>
              </div>

              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-amber-50/60 border border-amber-200/80 text-amber-950 shadow-xs">
                <Award className="w-4 h-4 text-amber-600 shrink-0" />
                <span><strong>UCICS 2026</strong> Honourable Mention Award</span>
              </div>

              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-stone-200 shadow-xs">
                <GraduationCap className="w-4 h-4 text-stone-500 shrink-0" />
                <span><strong>CGPA {education.cgpa}</strong> / {education.maxCgpa} (Graduating {education.expectedGraduation})</span>
              </div>

              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-stone-200 shadow-xs">
                <MapPin className="w-4 h-4 text-stone-500 shrink-0" />
                <span>Rajshahi, Bangladesh <span className="font-mono text-stone-400">({currentTime || "GMT+6"})</span></span>
              </div>
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="#research"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-stone-900 hover:bg-stone-800 text-white rounded-xl font-medium text-xs sm:text-sm transition-all shadow-xs active:scale-95"
              >
                <FileText className="w-4 h-4 text-stone-300" />
                <span>Read Research Papers</span>
              </a>

              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-white hover:bg-stone-50 text-stone-800 border border-stone-300 rounded-xl font-medium text-xs sm:text-sm transition-all shadow-xs active:scale-95"
              >
                <Github className="w-4 h-4 text-stone-500" />
                <span>Explore Projects</span>
              </a>

              <button
                onClick={copyEmail}
                className="inline-flex items-center gap-1.5 px-4 py-2.5 bg-stone-100 hover:bg-stone-200/80 text-stone-700 rounded-xl font-medium text-xs sm:text-sm transition-all active:scale-95"
                title="Copy email address"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-600" />
                    <span className="text-emerald-700 font-semibold">Email Copied!</span>
                  </>
                ) : (
                  <>
                    <Mail className="w-4 h-4 text-stone-500" />
                    <span>Copy Email</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Portrait & Profile Card Column */}
          <div className="lg:col-span-4 w-full">
            <div className="bg-white rounded-2xl border border-stone-200 p-5 shadow-xs">
              <div className="relative aspect-square w-full rounded-xl overflow-hidden bg-stone-100 border border-stone-200 mb-4">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={personalInfo.avatarUrl || "/asif-sm.jpg"}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="space-y-1 mb-4">
                <h2 className="text-base font-bold text-stone-900">{personalInfo.name}</h2>
                <p className="text-xs text-stone-500">B.Sc. in Computer Science & Engineering</p>
                <p className="text-xs text-stone-500">Varendra University, Rajshahi</p>
              </div>

              <div className="pt-3 border-t border-stone-100 flex items-center justify-between text-stone-500 text-xs">
                <a
                  href={personalInfo.scholar}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-stone-900 transition-colors flex items-center gap-1"
                >
                  Scholar <ArrowUpRight className="w-3 h-3 text-stone-400" />
                </a>
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-stone-900 transition-colors flex items-center gap-1"
                >
                  GitHub <ArrowUpRight className="w-3 h-3 text-stone-400" />
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-stone-900 transition-colors flex items-center gap-1"
                >
                  LinkedIn <ArrowUpRight className="w-3 h-3 text-stone-400" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
