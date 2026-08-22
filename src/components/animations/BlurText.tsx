"use client";

import { motion } from "framer-motion";

interface BlurTextProps {
  text: string;
  delay?: number;
  className?: string;
  animateBy?: "words" | "letters";
  direction?: "top" | "bottom";
  threshold?: number;
  rootMargin?: string;
}

export default function BlurText({
  text,
  delay = 50,
  className = "",
  animateBy = "words",
  direction = "bottom",
}: BlurTextProps) {
  const elements = animateBy === "words" ? text.split(" ") : text.split("");

  const defaultVariants = {
    hidden: {
      filter: "blur(10px)",
      opacity: 0,
      transform: direction === "top" ? "translate3d(0, -15px, 0)" : "translate3d(0, 15px, 0)",
    },
    visible: (i: number) => ({
      filter: "blur(0px)",
      opacity: 1,
      transform: "translate3d(0, 0, 0)",
      transition: {
        delay: i * (delay / 1000),
        duration: 0.55,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    }),
  };

  return (
    <span className={`inline-flex flex-wrap ${className}`}>
      {elements.map((element, index) => (
        <motion.span
          key={index}
          custom={index}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={defaultVariants}
          className="inline-block whitespace-pre"
        >
          {element}
          {animateBy === "words" && index < elements.length - 1 && "\u00A0"}
        </motion.span>
      ))}
    </span>
  );
}
