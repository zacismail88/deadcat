"use client";

import { motion } from "framer-motion";
import PlaceholderImage from "@/components/ui/PlaceholderImage";
import { FEATURED_MEME_IMAGE } from "@/lib/content";

export default function FeaturedMeme() {
  return (
    <section className="bg-white">
      <div className="section-container py-12 sm:py-16 lg:py-20">
        <motion.div
          className="sticker-lg relative mx-auto w-full max-w-6xl overflow-hidden bg-background p-3"
          initial={{ opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
        >
          <div
            className="relative w-full overflow-hidden rounded-2xl border-4 border-black"
            style={{ aspectRatio: `${FEATURED_MEME_IMAGE.width} / ${FEATURED_MEME_IMAGE.height}` }}
          >
            <PlaceholderImage
              src={FEATURED_MEME_IMAGE.src}
              alt={FEATURED_MEME_IMAGE.alt}
              objectFit="contain"
              sizes="(min-width: 1280px) 1152px, 95vw"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
