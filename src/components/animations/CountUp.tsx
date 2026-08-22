"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

interface CountUpProps {
  to: number;
  from?: number;
  direction?: "up" | "down";
  delay?: number;
  duration?: number;
  className?: string;
  decimals?: number;
}

export default function CountUp({
  to,
  from = 0,
  direction = "up",
  delay = 0,
  duration = 1.6,
  className = "",
  decimals = 0,
}: CountUpProps) {
  const [value, setValue] = useState(from);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "0px" });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    let animationFrameId: number;

    const startValue = direction === "down" ? to : from;
    const endValue = direction === "down" ? from : to;

    const timeoutId = setTimeout(() => {
      const step = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);

        const currentVal = startValue + (endValue - startValue) * easeOutQuart;
        setValue(currentVal);

        if (progress < 1) {
          animationFrameId = requestAnimationFrame(step);
        } else {
          setValue(endValue);
        }
      };

      animationFrameId = requestAnimationFrame(step);
    }, delay * 1000);

    return () => {
      clearTimeout(timeoutId);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, [isInView, from, to, direction, delay, duration]);

  return (
    <span ref={ref} className={className}>
      {decimals > 0 ? value.toFixed(decimals) : Math.round(value)}
    </span>
  );
}
