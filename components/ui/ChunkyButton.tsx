"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

type ChunkyButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "outline" | "disabled";
  className?: string;
};

const VARIANT_STYLES: Record<string, string> = {
  primary: "bg-deadred text-white",
  outline: "bg-white text-ink",
  disabled: "bg-charcoal/30 text-ink/50 cursor-not-allowed",
};

export default function ChunkyButton({
  children,
  href,
  variant = "primary",
  className = "",
}: ChunkyButtonProps) {
  const base = `inline-flex items-center justify-center gap-2 rounded-full border-4 border-black px-6 py-3 font-display font-black uppercase tracking-tight text-sm sm:text-base shadow-pop transition-transform ${VARIANT_STYLES[variant]} ${className}`;

  if (variant === "disabled") {
    return (
      <button type="button" className={base} disabled aria-disabled="true">
        {children}
      </button>
    );
  }

  return (
    <motion.a
      href={href}
      target={href?.startsWith("http") ? "_blank" : undefined}
      rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
      className={base}
      whileHover={{ x: -2, y: -2, boxShadow: "7px 7px 0px #000000" }}
      whileTap={{ x: 2, y: 2, boxShadow: "1px 1px 0px #000000" }}
    >
      {children}
    </motion.a>
  );
}
