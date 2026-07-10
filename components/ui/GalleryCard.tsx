"use client";

import { motion } from "framer-motion";
import PlaceholderImage from "./PlaceholderImage";
import type { GalleryImage } from "@/lib/content";

type GalleryCardProps = GalleryImage & {
  index: number;
  onClick: () => void;
};

const TILTS = ["-rotate-3", "rotate-2", "-rotate-2", "rotate-3", "-rotate-1", "rotate-1"];

export default function GalleryCard({ src, alt, width, height, wide, index, onClick }: GalleryCardProps) {
  const tilt = TILTS[index % TILTS.length];

  return (
    <motion.button
      type="button"
      onClick={onClick}
      className={`sticker ${tilt} w-full cursor-pointer overflow-hidden p-2 ${wide ? "col-span-2 lg:col-span-3" : ""}`}
      whileHover={{ rotate: 0, scale: 1.05, y: -4 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 300, damping: 14 }}
    >
      <div
        className="relative w-full overflow-hidden rounded-xl border-4 border-black"
        style={{ aspectRatio: `${width} / ${height}` }}
      >
        <PlaceholderImage
          src={src}
          alt={alt}
          objectFit="contain"
          sizes="(min-width: 1024px) 400px, 45vw"
        />
      </div>
    </motion.button>
  );
}
