"use client";

import React from "react";

interface BorderBeamProps {
  className?: string;
  duration?: number;
}

export default function BorderBeam({
  className = "",
  duration = 4,
}: BorderBeamProps) {
  return (
    <div className={`pointer-events-none absolute -inset-[1px] rounded-[inherit] overflow-hidden ${className}`}>
      <div
        className="animate-border-rotate absolute -inset-[100%] w-[300%] h-[300%] left-[-100%] top-[-100%]"
        style={{
          animationDuration: `${duration}s`,
          background: "conic-gradient(from 0deg at 50% 50%, transparent 0deg, transparent 280deg, #F59E0B 320deg, #FDE68A 360deg)",
        }}
      />
      <div className="absolute inset-[1px] rounded-[inherit] bg-amber-50/90 dark:bg-[#3D3325] z-0" />
    </div>
  );
}
