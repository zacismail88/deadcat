"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import PlaceholderImage from "./PlaceholderImage";
import type { GalleryImage } from "@/lib/content";

type LightboxProps = {
  image: GalleryImage | null;
  onClose: () => void;
};

export default function Lightbox({ image, onClose }: LightboxProps) {
  return (
    <AnimatePresence>
      {image && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="sticker-lg relative w-full max-w-lg overflow-hidden bg-white p-3"
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.85, opacity: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={onClose}
              className="absolute right-3 top-3 z-10 rounded-full border-4 border-black bg-deadred p-1 text-white shadow-pop-sm"
              aria-label="Close"
            >
              <X className="h-5 w-5" strokeWidth={3} />
            </button>
            <div
              className="relative w-full overflow-hidden rounded-xl border-4 border-black"
              style={{ aspectRatio: `${image.width} / ${image.height}` }}
            >
              <PlaceholderImage
                src={image.src}
                alt={image.alt}
                objectFit="contain"
                sizes="90vw"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
