"use client";

import { motion } from "framer-motion";
import ChunkyButton from "@/components/ui/ChunkyButton";
import PlaceholderImage from "@/components/ui/PlaceholderImage";
import StickerLabel from "@/components/ui/StickerLabel";
import { HERO_IMAGE, HERO_STICKERS } from "@/lib/content";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-background">
      <div className="section-container flex flex-col-reverse items-center gap-10 py-16 sm:py-20 lg:flex-row lg:gap-16 lg:py-28">
        <div className="flex flex-1 flex-col items-start gap-4 text-left">
          <h1 className="heading-punch text-6xl sm:text-7xl lg:text-8xl">DEADCAT</h1>
          <p className="heading-punch text-xl sm:text-2xl">
            Wall Street&apos;s favorite dead cat.
          </p>
          <p className="text-lg font-bold sm:text-xl">The bounce starts here.</p>
          <p className="text-base font-semibold text-ink/70 sm:text-lg">
            Upcoming meme coin on Robinhood Chain.
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <ChunkyButton href="https://x.com/DEADCAT_RH" variant="primary">
              Follow X
            </ChunkyButton>
            <ChunkyButton variant="outline">Launching Soon</ChunkyButton>
          </div>
        </div>

        <motion.div
          className="relative flex flex-1 items-center justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-lg">
            {HERO_STICKERS.map((sticker) => (
              <StickerLabel key={sticker.label} {...sticker} />
            ))}

            <motion.div
              className="sticker-lg relative w-full bg-white p-3"
              animate={{ y: [0, -14, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <PlaceholderImage
                src={HERO_IMAGE.src}
                alt={HERO_IMAGE.alt}
                width={HERO_IMAGE.width}
                height={HERO_IMAGE.height}
                priority
                sizes="(min-width: 1024px) 448px, 90vw"
                className="rounded-2xl border-4 border-black"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
