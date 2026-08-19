"use client";

import { useState } from "react";
import { Mail, MapPin, Copy, Check, ArrowUpRight, MessageSquare } from "lucide-react";
import { useContent } from "@/lib/content-provider";
import { copyToClipboard } from "@/lib/utils";

export default function Contact() {
  const { personalInfo } = useContent();
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    await copyToClipboard(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="w-full">
      {/* Header */}
      <div className="flex items-center justify-between pb-2.5 border-b border-stone-200/80 dark:border-[#3D3B36] mb-4">
        <span className="text-xs font-mono uppercase tracking-widest text-stone-500 dark:text-[#9E9A93] font-semibold flex items-center gap-1.5">
          <MessageSquare className="w-3.5 h-3.5 text-stone-500 dark:text-stone-400 inline-block" />
          <span>Contact & Inquiries</span>
        </span>
        <span className="text-xs font-mono text-emerald-600 dark:text-emerald-400 font-medium flex items-center gap-1.5 bg-emerald-50/70 dark:bg-emerald-950/40 px-2 py-0.5 rounded-full border border-emerald-200/60 dark:border-emerald-800/40">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block animate-pulse" />
          Open for roles
        </span>
      </div>

      {/* 2-Column Content */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
        <div>
          <h2 className="text-lg font-serif font-bold text-stone-900 dark:text-[#EDE8E1] mb-1">
            Let&apos;s Connect
          </h2>
          <p className="text-xs text-stone-600 dark:text-[#B8B4AE] leading-relaxed mb-4">
            Feel free to reach out for research collaborations in bioinformatics, machine learning projects, or software engineering.
          </p>

          <div className="flex flex-wrap items-center gap-2">
            <a
              href={`mailto:${personalInfo.email}`}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-stone-900 hover:bg-stone-800 dark:bg-[#EDE8E1] dark:hover:bg-white text-white dark:text-[#201F1D] rounded-xl text-xs font-medium transition-colors shadow-xs"
            >
              <Mail className="w-3.5 h-3.5 text-stone-300 dark:text-stone-600" />
              <span>Send Email</span>
            </a>

            <button
              onClick={copyEmail}
              className="inline-flex items-center gap-1 px-3 py-1.5 bg-stone-100 hover:bg-stone-200 dark:bg-[#201F1D] dark:hover:bg-[#33312C] text-stone-700 dark:text-[#EDE8E1] rounded-xl text-xs font-medium border border-transparent dark:border-[#3D3B36] transition-colors"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-stone-500 dark:text-stone-400" />}
              <span>{copied ? "Copied" : "Copy Address"}</span>
            </button>
          </div>
        </div>

        {/* Quick Details Box */}
        <div className="space-y-2">
          <div className="p-2.5 rounded-xl bg-white/70 dark:bg-[#292825]/60 border border-stone-200/80 dark:border-[#3D3B36] flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <Mail className="w-3.5 h-3.5 text-stone-500 dark:text-stone-400" />
              <span className="text-xs font-semibold text-stone-900 dark:text-[#EDE8E1]">{personalInfo.email}</span>
            </div>
          </div>

          <div className="p-2.5 rounded-xl bg-white/70 dark:bg-[#292825]/60 border border-stone-200/80 dark:border-[#3D3B36] flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <MapPin className="w-3.5 h-3.5 text-stone-500 dark:text-stone-400" />
              <span className="text-xs font-semibold text-stone-900 dark:text-[#EDE8E1]">{personalInfo.location}</span>
            </div>
          </div>

          <div className="p-2.5 rounded-xl bg-white/70 dark:bg-[#292825]/60 border border-stone-200/80 dark:border-[#3D3B36] flex items-center justify-around text-xs font-medium text-stone-600 dark:text-[#B8B4AE]">
            <a href={personalInfo.scholar} target="_blank" rel="noopener noreferrer" className="hover:text-stone-900 dark:hover:text-white flex items-center gap-1">
              Scholar <ArrowUpRight className="w-3 h-3 text-stone-400 dark:text-stone-400" />
            </a>
            <span className="text-stone-300 dark:text-[#3D3B36]">•</span>
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="hover:text-stone-900 dark:hover:text-white flex items-center gap-1">
              GitHub <ArrowUpRight className="w-3 h-3 text-stone-400 dark:text-stone-400" />
            </a>
            <span className="text-stone-300 dark:text-[#3D3B36]">•</span>
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-stone-900 dark:hover:text-white flex items-center gap-1">
              LinkedIn <ArrowUpRight className="w-3 h-3 text-stone-400 dark:text-stone-400" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
