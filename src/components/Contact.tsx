"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, MapPin, Github, Linkedin, BookOpen, Copy, Check, ExternalLink, Send } from "lucide-react";
import { useContent } from "@/lib/content-provider";
import SectionHeading from "./SectionHeading";

const smoothSpring = { type: "spring" as const, stiffness: 100, damping: 18 };

export default function Contact() {
  const { personalInfo } = useContent();
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(personalInfo.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      const t = document.createElement("textarea");
      t.value = personalInfo.email;
      document.body.appendChild(t);
      t.select();
      document.execCommand("copy");
      document.body.removeChild(t);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const contactItems = [
    { icon: Mail, label: "Email", value: personalInfo.email, href: `mailto:${personalInfo.email}` },
    { icon: Phone, label: "Phone", value: personalInfo.phone, href: `tel:${personalInfo.phone.replace(/\s/g, "")}` },
    { icon: MapPin, label: "Location", value: personalInfo.location },
  ];

  const socialItems = [
    { icon: Github, label: "GitHub", href: personalInfo.github, handle: "@asifahamed11" },
    { icon: Linkedin, label: "LinkedIn", href: personalInfo.linkedin, handle: "asifahamed112" },
    { icon: BookOpen, label: "Google Scholar", href: personalInfo.scholar, handle: "Asif Ahamed" },
  ];

  return (
    <section id="contact" className="py-16 sm:py-20 md:py-28 px-4 sm:px-6 relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.03, 0.05, 0.03] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[400px] sm:w-[600px] h-[200px] sm:h-[300px] bg-gold blur-[100px]"
        />
      </div>

      <div className="max-w-7xl mx-auto relative">
        <SectionHeading title="Get in Touch" subtitle="Open for research collaborations and opportunities" icon={Mail} />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ ...smoothSpring, delay: 0.1 }}
            className="space-y-3 sm:space-y-4"
          >
            {contactItems.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ ...smoothSpring, delay: 0.15 + i * 0.08 }}
                whileHover={{ x: 4, transition: { type: "spring", stiffness: 300, damping: 20 } }}
                className="glass rounded-2xl p-4 sm:p-5"
              >
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3 sm:gap-4 min-w-0">
                    <motion.div
                      whileHover={{ rotate: 10, scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 400, damping: 15 }}
                      className="p-2 sm:p-2.5 rounded-xl bg-gold/10 text-gold shrink-0"
                    >
                      <item.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                    </motion.div>
                    <div className="min-w-0">
                      <p className="text-[10px] sm:text-xs text-mocha uppercase tracking-wider mb-0.5">{item.label}</p>
                      {item.href ? (
                        <a href={item.href} className="text-coffee hover:text-gold transition-colors duration-300 text-xs sm:text-sm font-medium truncate block">{item.value}</a>
                      ) : (
                        <p className="text-coffee text-xs sm:text-sm font-medium">{item.value}</p>
                      )}
                    </div>
                  </div>
                  {item.label === "Email" && (
                    <motion.button
                      onClick={copyEmail}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-2 rounded-lg hover:bg-coffee/5 text-mocha hover:text-coffee transition-all shrink-0 min-w-[40px] min-h-[40px] flex items-center justify-center"
                      title="Copy email"
                    >
                      <AnimatePresence mode="wait">
                        {copied ? (
                          <motion.div key="check" initial={{ scale: 0, rotate: -180 }} animate={{ scale: 1, rotate: 0 }} exit={{ scale: 0, rotate: 180 }} transition={{ type: "spring", stiffness: 300 }}>
                            <Check className="w-4 h-4 text-gold" />
                          </motion.div>
                        ) : (
                          <motion.div key="copy" initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }} transition={{ type: "spring", stiffness: 300 }}>
                            <Copy className="w-4 h-4" />
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.button>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ ...smoothSpring, delay: 0.2 }}
            className="space-y-3 sm:space-y-4"
          >
            {socialItems.map((item, i) => (
              <motion.a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ ...smoothSpring, delay: 0.25 + i * 0.08 }}
                whileHover={{ x: 4, transition: { type: "spring", stiffness: 300, damping: 20 } }}
                className="block glass rounded-2xl p-4 sm:p-5 group border border-transparent hover:border-gold/15 min-h-[60px]"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3 sm:gap-4">
                    <motion.div
                      whileHover={{ rotate: 10, scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 400, damping: 15 }}
                      className="p-2 sm:p-2.5 rounded-xl bg-coffee/5 text-mocha group-hover:text-gold group-hover:bg-gold/10 transition-colors duration-300"
                    >
                      <item.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                    </motion.div>
                    <div>
                      <p className="text-[10px] sm:text-xs text-mocha uppercase tracking-wider mb-0.5">{item.label}</p>
                      <p className="text-coffee text-xs sm:text-sm font-medium">{item.handle}</p>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-mocha/30 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300 shrink-0" />
                </div>
              </motion.a>
            ))}

            <motion.a
              href={`mailto:${personalInfo.email}`}
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              className="flex items-center justify-center gap-2 w-full px-6 py-3.5 sm:py-4 bg-coffee hover:bg-coffee/90 text-ivory rounded-2xl font-medium text-sm transition-colors duration-300 hover:shadow-card-hover mt-4 sm:mt-6 min-h-[48px]"
            >
              <Send className="w-4 h-4" /> Send Me an Email
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
