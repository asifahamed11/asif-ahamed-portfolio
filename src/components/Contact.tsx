"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  BookOpen,
  Copy,
  Check,
  ExternalLink,
  Send,
} from "lucide-react";
import { useContent } from "@/lib/content-provider";
import SectionHeading from "./SectionHeading";

const socialColors: Record<string, string> = {
  GitHub: "hover:bg-white/10 hover:text-white hover:border-white/15",
  LinkedIn: "hover:bg-[#0077b5]/10 hover:text-[#0077b5] hover:border-[#0077b5]/20",
  "Google Scholar": "hover:bg-[#4285f4]/10 hover:text-[#4285f4] hover:border-[#4285f4]/20",
};

export default function Contact() {
  const { personalInfo } = useContent();
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(personalInfo.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      const textArea = document.createElement("textarea");
      textArea.value = personalInfo.email;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const contactItems = [
    {
      icon: Mail,
      label: "Email",
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
      color: "cyan",
    },
    {
      icon: Phone,
      label: "Phone",
      value: personalInfo.phone,
      href: `tel:${personalInfo.phone.replace(/\s/g, "")}`,
      color: "violet",
    },
    {
      icon: MapPin,
      label: "Location",
      value: personalInfo.location,
      color: "emerald",
    },
  ];

  const socialItems = [
    {
      icon: Github,
      label: "GitHub",
      href: personalInfo.github,
      handle: "@asifahamed11",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: personalInfo.linkedin,
      handle: "asifahamed112",
    },
    {
      icon: BookOpen,
      label: "Google Scholar",
      href: personalInfo.scholar,
      handle: "Asif Ahamed",
    },
  ];

  return (
    <section id="contact" className="py-20 md:py-28 px-4 sm:px-6 relative">
      {/* Background glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-t from-cyan-DEFAULT/5 via-violet-DEFAULT/3 to-transparent blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative">
        <SectionHeading
          title="Get in Touch"
          subtitle="Open for research collaborations and opportunities"
          icon={Mail}
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Contact Details */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            {contactItems.map((item) => (
              <div
                key={item.label}
                className={`glass rounded-2xl p-5 transition-all duration-300 group ${
                  item.color === "cyan"
                    ? "glass-cyan"
                    : item.color === "violet"
                    ? "glass-violet"
                    : "glass-cyan"
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div
                      className={`p-2.5 rounded-xl ${
                        item.color === "cyan"
                          ? "bg-cyan-DEFAULT/10 text-cyan-light"
                          : item.color === "violet"
                          ? "bg-violet-DEFAULT/10 text-violet-light"
                          : "bg-emerald-DEFAULT/10 text-emerald-light"
                      }`}
                    >
                      <item.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs text-muted uppercase tracking-wider mb-0.5">
                        {item.label}
                      </p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-foreground hover:text-cyan-light transition-colors text-sm font-medium"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-foreground text-sm font-medium">
                          {item.value}
                        </p>
                      )}
                    </div>
                  </div>
                  {item.label === "Email" && (
                    <button
                      onClick={copyEmail}
                      className="p-2 rounded-lg hover:bg-white/5 text-muted-light hover:text-foreground transition-all"
                      title="Copy email"
                    >
                      <AnimatePresence mode="wait">
                        {copied ? (
                          <motion.div
                            key="check"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0 }}
                          >
                            <Check className="w-4 h-4 text-emerald-light" />
                          </motion.div>
                        ) : (
                          <motion.div
                            key="copy"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0 }}
                          >
                            <Copy className="w-4 h-4" />
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </button>
                  )}
                </div>
              </div>
            ))}
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            {socialItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`block glass rounded-2xl p-5 transition-all duration-300 group border border-transparent ${
                  socialColors[item.label] || "hover:bg-white/5"
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="p-2.5 rounded-xl bg-white/5 text-muted-light group-hover:text-foreground transition-colors">
                      <item.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs text-muted uppercase tracking-wider mb-0.5">
                        {item.label}
                      </p>
                      <p className="text-foreground text-sm font-medium group-hover:text-inherit transition-colors">
                        {item.handle}
                      </p>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-muted opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </a>
            ))}

            {/* Quick CTA */}
            <a
              href={`mailto:${personalInfo.email}`}
              className="flex items-center justify-center gap-2 w-full px-6 py-4 bg-gradient-to-r from-cyan-DEFAULT to-violet-DEFAULT hover:from-cyan-light hover:to-violet-light text-white rounded-2xl font-medium text-sm transition-all duration-300 hover:shadow-glow-cyan mt-6 hover:scale-[1.02]"
            >
              <Send className="w-4 h-4" />
              Send Me an Email
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
