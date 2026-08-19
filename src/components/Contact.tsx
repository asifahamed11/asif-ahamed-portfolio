"use client";

import { useState } from "react";
import { Mail, MapPin, Copy, Check, ArrowUpRight } from "lucide-react";
import { useContent } from "@/lib/content-provider";

export default function Contact() {
  const { personalInfo } = useContent();
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(personalInfo.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // ignore
    }
  };

  return (
    <section id="contact" className="py-12 sm:py-14 px-4 sm:px-6 border-t border-stone-200/80 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          
          {/* Left Text */}
          <div className="lg:col-span-7">
            <span className="text-xs font-mono uppercase tracking-widest text-stone-500 block mb-1">
              Contact & Inquiries
            </span>
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-stone-900 mb-2">
              Let&apos;s Connect
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-normal mb-5 max-w-lg">
              Whether you are interested in discussing research collaborations in bioinformatics, machine learning projects, or engineering roles, feel free to reach out.
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href={`mailto:${personalInfo.email}`}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-stone-900 hover:bg-stone-800 text-white rounded-xl text-xs sm:text-sm font-medium transition-colors shadow-xs"
              >
                <Mail className="w-4 h-4 text-stone-300" />
                <span>Send an Email</span>
              </a>

              <button
                onClick={copyEmail}
                className="inline-flex items-center gap-1.5 px-4 py-2.5 bg-stone-100 hover:bg-stone-200 text-stone-700 rounded-xl text-xs sm:text-sm font-medium transition-colors"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4 text-stone-500" />}
                <span>{copied ? "Copied to Clipboard" : "Copy Address"}</span>
              </button>
            </div>
          </div>

          {/* Right Info Cards */}
          <div className="lg:col-span-5 space-y-3">
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-white border border-stone-200 text-stone-600">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[10px] font-mono uppercase text-stone-400">Email</p>
                  <a href={`mailto:${personalInfo.email}`} className="text-xs font-semibold text-stone-900 hover:underline">
                    {personalInfo.email}
                  </a>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-white border border-stone-200 text-stone-600">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[10px] font-mono uppercase text-stone-400">Location</p>
                  <p className="text-xs font-semibold text-stone-900">{personalInfo.location}</p>
                </div>
              </div>
            </div>

            {/* Social Links Bar */}
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 flex items-center justify-around text-xs font-medium text-stone-600">
              <a href={personalInfo.scholar} target="_blank" rel="noopener noreferrer" className="hover:text-stone-900 flex items-center gap-1">
                Scholar <ArrowUpRight className="w-3 h-3 text-stone-400" />
              </a>
              <span className="text-stone-300">•</span>
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="hover:text-stone-900 flex items-center gap-1">
                GitHub <ArrowUpRight className="w-3 h-3 text-stone-400" />
              </a>
              <span className="text-stone-300">•</span>
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-stone-900 flex items-center gap-1">
                LinkedIn <ArrowUpRight className="w-3 h-3 text-stone-400" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
