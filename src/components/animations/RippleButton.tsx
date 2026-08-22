"use client";

import React, { useState } from "react";

interface RippleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  rippleColor?: string;
}

export default function RippleButton({
  children,
  className = "",
  rippleColor = "rgba(255, 255, 255, 0.35)",
  onClick,
  ...props
}: RippleButtonProps) {
  const [ripples, setRipples] = useState<{ x: number; y: number; id: number }[]>([]);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const id = Date.now();

    setRipples((prev) => [...prev, { x, y, id }]);
    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== id));
    }, 600);

    if (onClick) onClick(e);
  };

  return (
    <button
      onClick={handleClick}
      className={`relative overflow-hidden transition-all duration-200 active:scale-97 group ${className}`}
      {...props}
    >
      {ripples.map((ripple) => (
        <span
          key={ripple.id}
          className="absolute rounded-full animate-ripple pointer-events-none"
          style={{
            left: ripple.x,
            top: ripple.y,
            transform: "translate(-50%, -50%)",
            width: "20px",
            height: "20px",
            backgroundColor: rippleColor,
          }}
        />
      ))}
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </button>
  );
}
