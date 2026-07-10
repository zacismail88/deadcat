"use client";

import { motion } from "framer-motion";
import type { HeroSticker } from "@/lib/content";

export default function StickerLabel({ label, className, tilt, delay }: HeroSticker) {
  return (
    <motion.div
      className={`absolute z-10 select-none rounded-xl border-4 border-black px-3 py-2 text-[11px] font-black uppercase tracking-tight shadow-pop-sm sm:text-xs ${className}`}
      style={{ rotate: tilt }}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: [0, -8, 0] }}
      transition={{
        opacity: { duration: 0.5, delay },
        y: { duration: 3, repeat: Infinity, ease: "easeInOut", delay },
      }}
    >
      {label}
    </motion.div>
  );
}
