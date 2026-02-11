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
} from "lucide-react";
import { personalInfo, education } from "@/lib/data";
import SectionHeading from "./SectionHeading";
import { User } from "lucide-react";

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

const socialLinks = [
  { icon: Github, href: personalInfo.github, label: "GitHub" },
  { icon: Linkedin, href: personalInfo.linkedin, label: "LinkedIn" },
  { icon: BookOpen, href: personalInfo.scholar, label: "Google Scholar" },
  { icon: Code2, href: personalInfo.codeforces, label: "Codeforces" },
  { icon: ExternalLink, href: personalInfo.leetcode, label: "LeetCode" },
];

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 px-4 sm:px-6">
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
          {/* Profile Image Card - Spans 2 rows on lg */}
          <motion.div
            variants={itemVariants}
            className="lg:row-span-2 glass rounded-2xl p-6 hover:border-accent/20 transition-all duration-300 group flex flex-col items-center"
          >
            <div className="relative w-48 h-48 mb-4 rounded-2xl overflow-hidden ring-2 ring-accent/20 group-hover:ring-accent/40 transition-all">
              <Image
                src="public/asif.jpg"
                alt="Asif Ahamed"
                fill
                className="object-cover"
                priority
              />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-1">
              {personalInfo.name}
            </h3>
            <p className="text-sm text-muted-light text-center mb-4">
              {personalInfo.tagline}
            </p>
            <a
              href="https://github.com/asifahamed11/asif-ahamed-portfolio/blob/main/public/CV.pdf"
              download
              className="flex items-center gap-2 px-4 py-2.5 bg-accent hover:bg-accent-light text-white rounded-xl text-sm font-medium transition-all duration-300 hover:shadow-lg hover:shadow-accent/25 w-full justify-center"
            >
              <FileDown className="w-4 h-4" />
              Download CV
            </a>
          </motion.div>

          {/* Education Card - Spans 2 cols */}
          <motion.div
            variants={itemVariants}
            className="md:col-span-2 glass rounded-2xl p-6 hover:border-accent/20 transition-all duration-300 group"
          >
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-accent/10 text-accent-light shrink-0">
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
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/5 text-xs text-muted-light">
                    <Calendar className="w-3 h-3" />
                    {education.semester}
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/5 text-xs text-muted-light">
                    Expected {education.expectedGraduation}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* CGPA Card */}
          <motion.div
            variants={itemVariants}
            className="glass rounded-2xl p-6 hover:border-accent/20 transition-all duration-300 flex flex-col justify-between"
          >
            <div className="p-3 rounded-xl bg-gold/10 text-gold-light w-fit mb-4">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <p className="text-muted text-xs uppercase tracking-wider mb-1">
                CGPA
              </p>
              <p className="text-3xl font-bold text-foreground">
                {education.cgpa}
                <span className="text-lg text-muted ml-1">
                  / {education.maxCgpa}
                </span>
              </p>
            </div>
          </motion.div>

          {/* Location Card */}
          <motion.div
            variants={itemVariants}
            className="glass rounded-2xl p-6 hover:border-accent/20 transition-all duration-300 flex flex-col justify-between"
          >
            <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-400 w-fit mb-4">
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

          {/* Award Card - Spans 2 cols */}
          <motion.div
            variants={itemVariants}
            className="md:col-span-2 glass rounded-2xl p-6 border-gold/20 hover:border-gold/40 transition-all duration-300"
          >
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-gold/10 text-gold-light shrink-0">
                <Trophy className="w-6 h-6" />
              </div>
              <div>
                <p className="text-gold-light text-xs font-semibold uppercase tracking-wider mb-1">
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

          {/* Social Links Card - Spans 2 cols */}
          <motion.div
            variants={itemVariants}
            className="md:col-span-2 glass rounded-2xl p-6 hover:border-accent/20 transition-all duration-300"
          >
            <p className="text-muted text-xs uppercase tracking-wider mb-4">
              Connect
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-muted-light hover:text-foreground transition-all text-sm"
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
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-muted-light hover:text-foreground transition-all text-sm"
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
