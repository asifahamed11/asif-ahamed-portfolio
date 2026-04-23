"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  MapPin, GraduationCap, Calendar, Mail, Github, Linkedin,
  BookOpen, ExternalLink, Code2, Trophy, FileDown, User,
} from "lucide-react";
import { useContent } from "@/lib/content-provider";
import SectionHeading from "./SectionHeading";

const containerVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function About() {
  const { personalInfo, education } = useContent();

  const socialLinks = [
    { icon: Github, href: personalInfo.github, label: "GitHub" },
    { icon: Linkedin, href: personalInfo.linkedin, label: "LinkedIn" },
    { icon: BookOpen, href: personalInfo.scholar, label: "Google Scholar" },
    { icon: Code2, href: personalInfo.codeforces, label: "Codeforces" },
    { icon: ExternalLink, href: personalInfo.leetcode, label: "LeetCode" },
  ];

  const cgpaPercent = (parseFloat(education.cgpa) / parseFloat(education.maxCgpa)) * 100;
  const circumference = 2 * Math.PI * 42;
  const strokeDashoffset = circumference - (cgpaPercent / 100) * circumference;

  return (
    <section id="about" className="py-16 sm:py-20 md:py-28 px-4 sm:px-6 section-glow">
      <div className="max-w-7xl mx-auto">
        <SectionHeading title="About Me" subtitle="CSE student & AI researcher at Varendra University" icon={User} />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4"
        >
          {/* Profile Card */}
          <motion.div variants={itemVariants} className="sm:col-span-2 lg:col-span-1 lg:row-span-2 glass rounded-2xl p-5 sm:p-6 flex flex-col items-center relative overflow-hidden">
            <div className="relative w-36 h-36 sm:w-48 sm:h-48 mb-4 rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-gold to-mocha rounded-2xl p-[2px]">
                <div className="w-full h-full rounded-2xl overflow-hidden bg-ivory relative">
                  <Image src="/asif-sm.jpg" alt={personalInfo.name} fill className="object-cover" priority />
                </div>
              </div>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-coffee mb-1">{personalInfo.name}</h3>
            <p className="text-xs sm:text-sm text-mocha text-center mb-4">{personalInfo.tagline}</p>
            <a href="https://drive.google.com/uc?export=download&id=1lHpOWo6pKdiCdmNFm01LXBD-qrD2cGHz" download className="flex items-center gap-2 px-4 py-2.5 bg-coffee hover:bg-coffee/90 text-ivory rounded-xl text-sm font-medium transition-all duration-300 hover:shadow-card-hover w-full justify-center active:scale-[0.98]">
              <FileDown className="w-4 h-4" />
              Download CV
            </a>
          </motion.div>

          {/* Education */}
          <motion.div variants={itemVariants} className="sm:col-span-2 glass rounded-2xl p-5 sm:p-6">
            <div className="flex items-start gap-3 sm:gap-4">
              <div className="p-2.5 sm:p-3 rounded-xl bg-gold/10 text-gold shrink-0">
                <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div className="min-w-0">
                <h3 className="text-base sm:text-lg font-semibold text-coffee mb-1">{education.degree}</h3>
                <p className="text-mocha text-xs sm:text-sm mb-3">{education.institution}</p>
                <div className="flex flex-wrap gap-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-coffee/5 border border-coffee/8 text-[11px] sm:text-xs text-mocha">
                    <Calendar className="w-3 h-3 text-gold" />
                    {education.semester}
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-coffee/5 border border-coffee/8 text-[11px] sm:text-xs text-mocha">
                    Expected {education.expectedGraduation}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* CGPA Ring */}
          <motion.div variants={itemVariants} className="glass rounded-2xl p-5 sm:p-6 flex flex-col items-center justify-center">
            <div className="relative w-20 h-20 sm:w-24 sm:h-24 mb-3">
              <svg className="w-20 h-20 sm:w-24 sm:h-24 -rotate-90" viewBox="0 0 96 96">
                <circle cx="48" cy="48" r="42" strokeWidth="4" className="fill-none stroke-coffee/8" />
                <motion.circle cx="48" cy="48" r="42" strokeWidth="4" className="fill-none" stroke="#C08552" strokeLinecap="round" strokeDasharray={circumference} initial={{ strokeDashoffset: circumference }} whileInView={{ strokeDashoffset }} viewport={{ once: true }} transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }} />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-xl sm:text-2xl font-bold text-coffee">{education.cgpa}</span>
                <span className="text-[10px] text-mocha">/ {education.maxCgpa}</span>
              </div>
            </div>
            <p className="text-mocha text-xs uppercase tracking-wider">CGPA</p>
          </motion.div>

          {/* Location */}
          <motion.div variants={itemVariants} className="glass rounded-2xl p-5 sm:p-6 flex flex-col justify-between">
            <div className="p-2.5 sm:p-3 rounded-xl bg-gold/10 text-gold w-fit mb-3 sm:mb-4">
              <MapPin className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div>
              <p className="text-mocha text-xs uppercase tracking-wider mb-1">Location</p>
              <p className="text-base sm:text-lg font-semibold text-coffee">{personalInfo.location}</p>
            </div>
          </motion.div>

          {/* Award */}
          <motion.div variants={itemVariants} className="sm:col-span-2 glass glass-accent rounded-2xl p-5 sm:p-6 relative overflow-hidden shimmer">
            <div className="absolute top-0 right-0 w-24 sm:w-32 h-24 sm:h-32 bg-gold/5 rounded-full blur-3xl" />
            <div className="flex items-start gap-3 sm:gap-4 relative">
              <div className="p-2.5 sm:p-3 rounded-xl bg-gold/10 text-gold shrink-0">
                <Trophy className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div className="min-w-0">
                <p className="text-gold text-[11px] sm:text-xs font-semibold uppercase tracking-wider mb-1">Achievement</p>
                <h3 className="text-base sm:text-lg font-semibold text-coffee mb-1">Honourable Mention Award</h3>
                <p className="text-mocha text-xs sm:text-sm leading-relaxed">UCICS 2026 — Hybrid Ensemble Learning for Coding vs. Non-coding Somatic Variant Classification</p>
              </div>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={itemVariants} className="sm:col-span-2 glass rounded-2xl p-5 sm:p-6">
            <p className="text-mocha text-xs uppercase tracking-wider mb-3 sm:mb-4">Connect</p>
            <div className="flex flex-wrap gap-2 sm:gap-3">
              <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-2 px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl bg-coffee/5 hover:bg-gold/10 text-mocha hover:text-gold transition-all text-xs sm:text-sm border border-transparent hover:border-gold/15 min-h-[40px]">
                <Mail className="w-4 h-4" /> Email
              </a>
              {socialLinks.map((link) => (
                <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl bg-coffee/5 hover:bg-gold/10 text-mocha hover:text-gold transition-all text-xs sm:text-sm border border-transparent hover:border-gold/15 min-h-[40px]">
                  <link.icon className="w-4 h-4" /> {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
