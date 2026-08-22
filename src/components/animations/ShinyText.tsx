"use client";

import React from "react";

interface ShinyTextProps {
  text: string;
  speed?: number;
  className?: string;
}

export default function ShinyText({
  text,
  speed = 3,
  className = "",
}: ShinyTextProps) {
  return (
    <span
      className={`animate-text-shimmer inline-block font-bold ${className}`}
      style={{ animationDuration: `${speed}s` }}
    >
      {text}
    </span>
  );
}
