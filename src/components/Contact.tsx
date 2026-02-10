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
import { personalInfo } from "@/lib/data";
import SectionHeading from "./SectionHeading";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(personalInfo.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback
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
      action: copyEmail,
    },
    {
      icon: Phone,
      label: "Phone",
      value: personalInfo.phone,
      href: `tel:${personalInfo.phone.replace(/\s/g, "")}`,
    },
    {
      icon: MapPin,
      label: "Location",
      value: personalInfo.location,
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
    <section id="contact" className="py-20 md:py-28 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
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
                className="glass rounded-2xl p-5 hover:border-accent/20 transition-all duration-300 group"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="p-2.5 rounded-xl bg-accent/10 text-accent-light">
                      <item.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs text-muted uppercase tracking-wider mb-0.5">
                        {item.label}
                      </p>
                      {item.href ?
                        <a
                          href={item.href}
                          className="text-foreground hover:text-accent-light transition-colors text-sm font-medium"
                        >
                          {item.value}
                        </a>
                      : <p className="text-foreground text-sm font-medium">
                          {item.value}
                        </p>
                      }
                    </div>
                  </div>
                  {item.label === "Email" && (
                    <button
                      onClick={copyEmail}
                      className="p-2 rounded-lg hover:bg-white/5 text-muted-light hover:text-foreground transition-all"
                      title="Copy email"
                    >
                      <AnimatePresence mode="wait">
                        {copied ?
                          <motion.div
                            key="check"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0 }}
                          >
                            <Check className="w-4 h-4 text-emerald-400" />
                          </motion.div>
                        : <motion.div
                            key="copy"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0 }}
                          >
                            <Copy className="w-4 h-4" />
                          </motion.div>
                        }
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
                className="block glass rounded-2xl p-5 hover:border-accent/20 transition-all duration-300 group"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="p-2.5 rounded-xl bg-accent/10 text-accent-light group-hover:bg-accent/15 transition-colors">
                      <item.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs text-muted uppercase tracking-wider mb-0.5">
                        {item.label}
                      </p>
                      <p className="text-foreground text-sm font-medium group-hover:text-accent-light transition-colors">
                        {item.handle}
                      </p>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-muted opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </a>
            ))}

            {/* Quick CTA */}
            <a
              href={`mailto:${personalInfo.email}`}
              className="flex items-center justify-center gap-2 w-full px-6 py-4 bg-accent hover:bg-accent-light text-white rounded-2xl font-medium text-sm transition-all duration-300 hover:shadow-lg hover:shadow-accent/25 mt-6"
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
