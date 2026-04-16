"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { BookOpen, Mail, ArrowDown, Award, FileText, GraduationCap } from "lucide-react";
import { useContent } from "@/lib/content-provider";
import Image from "next/image";

const roles = [
  "AI Researcher",
  "Software Engineer",
  "Deep Learning Enthusiast",
  "Bioinformatics Explorer",
];

function AuroraBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let time = 0;
    let particles: {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
      color: string;
    }[] = [];

    const colors = [
      "6, 182, 212",    // cyan
      "139, 92, 246",   // violet
      "244, 63, 94",    // rose
      "16, 185, 129",   // emerald
    ];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const init = () => {
      resize();
      particles = [];
      const count = Math.min(Math.floor((canvas.width * canvas.height) / 18000), 80);
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.25,
          vy: (Math.random() - 0.5) * 0.25,
          size: Math.random() * 2 + 0.5,
          opacity: Math.random() * 0.4 + 0.1,
          color: colors[Math.floor(Math.random() * colors.length)],
        });
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      time += 0.002;

      // Draw aurora waves
      for (let w = 0; w < 3; w++) {
        ctx.beginPath();
        ctx.moveTo(0, canvas.height * 0.3);
        for (let x = 0; x <= canvas.width; x += 5) {
          const y =
            canvas.height * 0.3 +
            Math.sin(x * 0.003 + time + w * 2) * 60 +
            Math.sin(x * 0.007 + time * 1.5) * 30;
          ctx.lineTo(x, y);
        }
        ctx.lineTo(canvas.width, 0);
        ctx.lineTo(0, 0);
        const gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
        gradient.addColorStop(0, `rgba(6, 182, 212, ${0.03 - w * 0.008})`);
        gradient.addColorStop(0.5, `rgba(139, 92, 246, ${0.04 - w * 0.01})`);
        gradient.addColorStop(1, `rgba(244, 63, 94, ${0.02 - w * 0.005})`);
        ctx.fillStyle = gradient;
        ctx.fill();
      }

      // Draw particles
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.color}, ${p.opacity * 0.6})`;
        ctx.fill();
      });

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 130) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(${particles[i].color}, ${0.1 * (1 - dist / 130)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      animationId = requestAnimationFrame(animate);
    };

    init();
    animate();
    window.addEventListener("resize", init);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", init);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      style={{ opacity: 0.5 }}
    />
  );
}

function TypingAnimation() {
  const [currentRole, setCurrentRole] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const role = roles[currentRole];
    let timeout: NodeJS.Timeout;

    if (!isDeleting && text === role) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && text === "") {
      setIsDeleting(false);
      setCurrentRole((prev) => (prev + 1) % roles.length);
    } else {
      timeout = setTimeout(
        () => {
          setText(
            isDeleting
              ? role.substring(0, text.length - 1)
              : role.substring(0, text.length + 1)
          );
        },
        isDeleting ? 40 : 80
      );
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, currentRole]);

  return (
    <span className="text-aurora font-semibold">
      {text}
      <span className="animate-pulse text-cyan-light">|</span>
    </span>
  );
}

export default function Hero() {
  const { personalInfo, publications } = useContent();

  const stats = [
    { label: "Papers", value: publications.length, icon: FileText },
    { label: "Awards", value: publications.filter((p) => p.isAwarded).length, icon: Award },
    { label: "CGPA", value: "3.93", icon: GraduationCap },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Backgrounds */}
      <AuroraBackground />
      <div className="mesh-gradient" />
      <div className="grid-pattern" />

      {/* Decorative orbs */}
      <div className="absolute top-1/4 left-1/6 w-[500px] h-[500px] bg-cyan-DEFAULT/5 rounded-full blur-[120px] animate-pulse-slow" />
      <div
        className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-violet-DEFAULT/5 rounded-full blur-[100px] animate-pulse-slow"
        style={{ animationDelay: "2s" }}
      />
      <div
        className="absolute top-1/2 left-1/2 w-[300px] h-[300px] bg-rose-DEFAULT/3 rounded-full blur-[80px] animate-pulse-slow"
        style={{ animationDelay: "4s" }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 text-center pb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          {/* Profile Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="relative w-28 h-28 mx-auto mb-6"
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-DEFAULT via-violet-DEFAULT to-rose-DEFAULT animate-spin-slow opacity-60 blur-sm" />
            <div className="relative w-28 h-28 rounded-full overflow-hidden ring-2 ring-white/10 p-[2px] bg-gradient-to-r from-cyan-DEFAULT via-violet-DEFAULT to-rose-DEFAULT">
              <div className="w-full h-full rounded-full overflow-hidden">
                <Image
                  src="https://raw.githubusercontent.com/asifahamed11/asif-ahamed-portfolio/refs/heads/main/asif.jpg"
                  alt={personalInfo.name}
                  fill
                  className="object-cover rounded-full"
                  priority
                />
              </div>
            </div>
          </motion.div>

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-sm text-amber-light mb-6 border border-amber-DEFAULT/20"
          >
            <Award className="w-3.5 h-3.5" />
            <span className="font-medium">UCICS 2026 Award Recipient</span>
          </motion.div>

          {/* Name */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-4">
            <span className="text-foreground">Hi, I&apos;m </span>
            <span className="text-aurora">{personalInfo.name}</span>
          </h1>

          {/* Typing Role Animation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35, duration: 0.6 }}
            className="text-xl sm:text-2xl md:text-3xl mb-4 h-10"
          >
            <TypingAnimation />
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-base sm:text-lg text-muted-light max-w-2xl mx-auto mb-8 leading-relaxed"
          >
            {personalInfo.tagline}
          </motion.p>

          {/* Stats Row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="flex items-center justify-center gap-6 sm:gap-10 mb-10"
          >
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col items-center gap-1">
                <stat.icon className="w-4 h-4 text-cyan-light mb-1" />
                <span className="text-2xl sm:text-3xl font-bold text-foreground">{stat.value}</span>
                <span className="text-xs text-muted uppercase tracking-wider">{stat.label}</span>
              </div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="#research"
              className="group flex items-center gap-2 px-7 py-3.5 bg-gradient-to-r from-cyan-DEFAULT to-violet-DEFAULT hover:from-cyan-light hover:to-violet-light text-white rounded-xl font-medium text-sm transition-all duration-300 ease-out hover:shadow-glow-cyan hover:scale-105"
            >
              <BookOpen className="w-4 h-4" />
              View Research
            </a>
            <a
              href="#contact"
              className="group flex items-center gap-2 px-7 py-3.5 glass glass-hover rounded-xl font-medium text-sm text-muted-light hover:text-foreground transition-all duration-300 ease-out hover:scale-105"
            >
              <Mail className="w-4 h-4" />
              Contact Me
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <a href="#about" aria-label="Scroll to About section">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-xs text-muted uppercase tracking-wider">
              Scroll
            </span>
            <ArrowDown className="w-5 h-5 text-cyan-light" />
          </motion.div>
        </a>
      </motion.div>
    </section>
  );
}
