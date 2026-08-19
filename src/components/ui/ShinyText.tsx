"use client";

import React from "react";

interface ShinyTextProps {
  text: string;
  className?: string;
  variant?: "brand" | "gold";
}

export default function ShinyText({
  text,
  className = "",
  variant = "brand",
}: ShinyTextProps) {
  const variantClass = variant === "gold" ? "shiny-text-gold" : "shiny-text";
  return (
    <span className={`inline-block font-medium ${variantClass} ${className}`}>
      {text}
    </span>
  );
}
