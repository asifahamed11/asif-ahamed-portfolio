"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  MapPin,
  GraduationCap,
  Award,
  Calendar,
  Mail,
  Github,
  Linkedin,
  BookOpen,
  ExternalLink,
  Code2,
  Trophy,
  FileDown,
  User,
} from "lucide-react";
import { useContent } from "@/lib/content-provider";
import SectionHeading from "./SectionHeading";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
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

  // CGPA percentage for the ring
  const cgpaPercent =
    (parseFloat(education.cgpa) / parseFloat(education.maxCgpa)) * 100;
  const circumference = 2 * Math.PI * 42;
  const strokeDashoffset = circumference - (cgpaPercent / 100) * circumference;

  return (
    <section id="about" className="py-20 md:py-28 px-4 sm:px-6 section-glow">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          title="About Me"
          subtitle="CSE student & AI researcher at Varendra University"
          icon={User}
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {/* Profile Image Card */}
          <motion.div
            variants={itemVariants}
            className="lg:row-span-2 glass rounded-2xl p-6 transition-all duration-300 group flex flex-col items-center relative overflow-hidden glass-violet"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-violet-DEFAULT/5 to-transparent pointer-events-none" />
            <div className="relative w-48 h-48 mb-4 rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-DEFAULT via-violet-DEFAULT to-rose-DEFAULT rounded-2xl p-[2px]">
                <div className="w-full h-full rounded-2xl overflow-hidden bg-background">
                  <Image
                    src="https://raw.githubusercontent.com/asifahamed11/asif-ahamed-portfolio/refs/heads/main/asif.jpg"
                    alt={personalInfo.name}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
            <h3 className="text-xl font-bold text-foreground mb-1 relative">
              {personalInfo.name}
            </h3>
            <p className="text-sm text-muted-light text-center mb-4 relative">
              {personalInfo.tagline}
            </p>
            <a
              href="https://drive.google.com/uc?export=download&id=1lHpOWo6pKdiCdmNFm01LXBD-qrD2cGHz"
              download
              className="relative flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-cyan-DEFAULT to-violet-DEFAULT hover:from-cyan-light hover:to-violet-light text-white rounded-xl text-sm font-medium transition-all duration-300 hover:shadow-glow-cyan w-full justify-center"
            >
              <FileDown className="w-4 h-4" />
              Download CV
            </a>
          </motion.div>

          {/* Education Card */}
          <motion.div
            variants={itemVariants}
            className="md:col-span-2 glass rounded-2xl p-6 transition-all duration-300 group glass-cyan"
          >
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-cyan-DEFAULT/10 text-cyan-light shrink-0">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-1">
                  {education.degree}
                </h3>
                <p className="text-muted-light text-sm mb-3">
                  {education.institution}
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-cyan-DEFAULT/5 border border-cyan-DEFAULT/10 text-xs text-muted-light">
                    <Calendar className="w-3 h-3 text-cyan-light" />
                    {education.semester}
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-cyan-DEFAULT/5 border border-cyan-DEFAULT/10 text-xs text-muted-light">
                    Expected {education.expectedGraduation}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* CGPA Card with Ring */}
          <motion.div
            variants={itemVariants}
            className="glass rounded-2xl p-6 transition-all duration-300 flex flex-col items-center justify-center glass-amber"
          >
            <div className="relative w-24 h-24 mb-3">
              <svg className="w-24 h-24 -rotate-90" viewBox="0 0 96 96">
                <circle
                  cx="48"
                  cy="48"
                  r="42"
                  strokeWidth="4"
                  className="fill-none stroke-white/5"
                />
                <motion.circle
                  cx="48"
                  cy="48"
                  r="42"
                  strokeWidth="4"
                  className="fill-none"
                  stroke="url(#cgpaGradient)"
                  strokeLinecap="round"
                  strokeDasharray={circumference}
                  initial={{ strokeDashoffset: circumference }}
                  whileInView={{ strokeDashoffset }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
                />
                <defs>
                  <linearGradient id="cgpaGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#f59e0b" />
                    <stop offset="100%" stopColor="#fbbf24" />
                  </linearGradient>
                </defs>
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-2xl font-bold text-foreground">{education.cgpa}</span>
                <span className="text-[10px] text-muted">/ {education.maxCgpa}</span>
              </div>
            </div>
            <p className="text-muted text-xs uppercase tracking-wider">CGPA</p>
          </motion.div>

          {/* Location Card */}
          <motion.div
            variants={itemVariants}
            className="glass rounded-2xl p-6 transition-all duration-300 flex flex-col justify-between glass-cyan"
          >
            <div className="p-3 rounded-xl bg-emerald-DEFAULT/10 text-emerald-light w-fit mb-4">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <p className="text-muted text-xs uppercase tracking-wider mb-1">
                Location
              </p>
              <p className="text-lg font-semibold text-foreground">
                {personalInfo.location}
              </p>
            </div>
          </motion.div>

          {/* Award Card */}
          <motion.div
            variants={itemVariants}
            className="md:col-span-2 glass rounded-2xl p-6 border-amber-DEFAULT/15 transition-all duration-300 relative overflow-hidden shimmer glass-amber"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-DEFAULT/5 rounded-full blur-3xl" />
            <div className="flex items-start gap-4 relative">
              <div className="p-3 rounded-xl bg-amber-DEFAULT/10 text-amber-light shrink-0">
                <Trophy className="w-6 h-6" />
              </div>
              <div>
                <p className="text-amber-light text-xs font-semibold uppercase tracking-wider mb-1">
                  Achievement
                </p>
                <h3 className="text-lg font-semibold text-foreground mb-1">
                  Honourable Mention Award
                </h3>
                <p className="text-muted-light text-sm">
                  UCICS 2026 - Hybrid Ensemble Learning for Coding vs.
                  Non-coding Somatic Variant Classification
                </p>
              </div>
            </div>
          </motion.div>

          {/* Social Links Card */}
          <motion.div
            variants={itemVariants}
            className="md:col-span-2 glass rounded-2xl p-6 transition-all duration-300 glass-violet"
          >
            <p className="text-muted text-xs uppercase tracking-wider mb-4">
              Connect
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 hover:bg-cyan-DEFAULT/10 text-muted-light hover:text-cyan-light transition-all text-sm border border-transparent hover:border-cyan-DEFAULT/15"
              >
                <Mail className="w-4 h-4" />
                Email
              </a>
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 hover:bg-violet-DEFAULT/10 text-muted-light hover:text-violet-light transition-all text-sm border border-transparent hover:border-violet-DEFAULT/15"
                >
                  <link.icon className="w-4 h-4" />
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
