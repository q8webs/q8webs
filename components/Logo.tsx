"use client";

import React from "react";
import Image from "next/image";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
}

export default function Logo({ className = "", size = "md" }: LogoProps) {
  const sizeMap = {
    sm: { width: 150, height: 48, className: "h-9 sm:h-11 w-auto" },
    md: { width: 180, height: 56, className: "h-14 w-auto" },
    lg: { width: 260, height: 80, className: "h-20 w-auto" },
    xl: { width: 720, height: 230, className: "h-36 sm:h-56 w-auto" },
  };

  const current = sizeMap[size];

  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      <Image
        src="/images/editorial/q8webs-logo-transparent.webp"
        alt="Q8WEBS Logo"
        width={current.width}
        height={current.height}
        className={`${current.className} object-contain transition-transform group-hover:scale-105 duration-300`}
        priority
      />
    </div>
  );
}
