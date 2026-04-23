"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { FileText, Award, GraduationCap, ChevronDown, BookOpen, Mail } from "lucide-react";
import { useContent } from "@/lib/content-provider";

function WarmBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    const particles: { x: number; y: number; vx: number; vy: number; r: number; o: number; phase: number }[] = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    for (let i = 0; i < 40; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.15,
        vy: (Math.random() - 0.5) * 0.15,
        r: Math.random() * 3 + 0.5,
        o: Math.random() * 0.06 + 0.01,
        phase: Math.random() * Math.PI * 2,
      });
    }

    let time = 0;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      time += 0.005;
      particles.forEach((p) => {
        const breathe = Math.sin(time * 2 + p.phase) * 0.02 + p.o;
        const radiusPulse = p.r + Math.sin(time * 3 + p.phase) * 0.3;
        ctx.beginPath();
        ctx.arc(p.x, p.y, Math.max(0.3, radiusPulse), 0, Math.PI * 2);
        ctx.fillStyle = `rgba(192, 133, 82, ${Math.max(0, breathe)})`;
        ctx.fill();
        p.x += p.vx + Math.sin(time + p.phase) * 0.05;
        p.y += p.vy + Math.cos(time + p.phase) * 0.05;
        if (p.x < -10) p.x = canvas.width + 10;
        if (p.x > canvas.width + 10) p.x = -10;
        if (p.y < -10) p.y = canvas.height + 10;
        if (p.y > canvas.height + 10) p.y = -10;
      });
      animationId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" />;
}

const roles = ["AI Researcher", "Software Engineer", "Deep Learning Enthusiast", "CS Student"];

const springTransition = { type: "spring" as const, stiffness: 100, damping: 20 };
const smoothEase = [0.25, 0.46, 0.45, 0.94] as const;

export default function Hero() {
  const { personalInfo, publications, education } = useContent();
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timeout: NodeJS.Timeout;

    if (!isDeleting && displayText === currentRole) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayText === "") {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    } else {
      timeout = setTimeout(
        () => {
          setDisplayText(
            isDeleting
              ? currentRole.slice(0, displayText.length - 1)
              : currentRole.slice(0, displayText.length + 1)
          );
        },
        isDeleting ? 35 : 70
      );
    }
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  const awards = publications.filter((p) => p.isAwarded).length;

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 overflow-hidden bg-ivory"
    >
      <WarmBackground />

      {/* Radial glow */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.04, 0.06, 0.04] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] bg-gold rounded-full blur-[120px]"
        />
      </div>

      <div className="relative z-10 text-center w-full max-w-4xl mx-auto">
        {/* Profile Image */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0, rotate: -10 }}
          animate={{ scale: 1, opacity: 1, rotate: 0 }}
          transition={{ ...springTransition, delay: 0.1 }}
          className="mx-auto mb-5 sm:mb-6 w-24 h-24 sm:w-32 sm:h-32 relative animate-float-slow"
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-gold to-mocha p-[2px] shadow-glow-gold animate-pulse-glow">
            <div className="w-full h-full rounded-full overflow-hidden bg-ivory">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/asif-ahamed-portfolio/asif-sm.jpg"
                alt={personalInfo.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>

        {/* Award Badge */}
        {awards > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ ...springTransition, delay: 0.3 }}
            className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full bg-gold/10 border border-gold/20 mb-5 sm:mb-6 animate-border-glow"
          >
            <Award className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-gold" />
            <span className="text-[10px] sm:text-xs font-medium text-gold">
              UCICS 2026 Award Recipient
            </span>
          </motion.div>
        )}

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ delay: 0.4, duration: 0.8, ease: smoothEase }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-3 sm:mb-4 tracking-tight text-coffee"
        >
          Hi, I&apos;m{" "}
          <span className="text-gradient">{personalInfo.name}</span>
        </motion.h1>

        {/* Typing Role */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="h-8 sm:h-10 mb-3 sm:mb-4"
        >
          <span className="text-lg sm:text-xl md:text-2xl font-medium text-gold">
            {displayText}
          </span>
          <span className="inline-block w-0.5 h-5 sm:h-6 bg-gold ml-1 animate-cursor-blink" />
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6, ease: smoothEase }}
          className="text-mocha text-sm sm:text-base mb-6 sm:mb-8 max-w-lg mx-auto px-4"
        >
          {personalInfo.tagline}
        </motion.p>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6, ease: smoothEase }}
          className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 mb-8 sm:mb-10"
        >
          {[
            { icon: FileText, value: publications.length.toString(), label: "PUBLICATIONS" },
            { icon: Award, value: awards.toString(), label: "AWARDS" },
            { icon: GraduationCap, value: education.cgpa, label: "CGPA" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 + i * 0.1, ...springTransition }}
              className="text-center min-w-[70px]"
            >
              <stat.icon className="w-4 h-4 mx-auto mb-1.5 text-gold" />
              <p className="text-xl sm:text-2xl font-bold text-coffee">{stat.value}</p>
              <p className="text-[9px] sm:text-[10px] uppercase tracking-widest text-mocha">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.6, ease: smoothEase }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 px-4"
        >
          <motion.a
            href="#research"
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 bg-coffee hover:bg-coffee/90 text-ivory rounded-xl font-medium text-sm transition-colors duration-300 hover:shadow-card-hover"
          >
            <BookOpen className="w-4 h-4" />
            View Research
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 border border-coffee/20 hover:border-gold/40 hover:bg-gold/5 text-coffee rounded-xl font-medium text-sm transition-colors duration-300"
          >
            <Mail className="w-4 h-4" />
            Contact Me
          </motion.a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8, ease: smoothEase }}
        className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
      >
        <span className="text-[10px] uppercase tracking-[0.2em] text-mocha/50">Scroll</span>
        <ChevronDown className="w-4 h-4 text-mocha/30 animate-bounce-subtle" />
      </motion.div>
    </section>
  );
}
