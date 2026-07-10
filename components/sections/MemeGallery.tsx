"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import GalleryCard from "@/components/ui/GalleryCard";
import Lightbox from "@/components/ui/Lightbox";
import { GALLERY_IMAGES, type GalleryImage } from "@/lib/content";

export default function MemeGallery() {
  const [active, setActive] = useState<GalleryImage | null>(null);

  return (
    <section id="memes" className="bg-white">
      <div className="section-container py-16 sm:py-20 lg:py-24">
        <motion.h2
          className="heading-punch text-center text-4xl sm:text-5xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          Scenes From The Trading Floor
        </motion.h2>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:mt-14 lg:grid-cols-3">
          {GALLERY_IMAGES.map((image, index) => (
            <GalleryCard key={image.src} {...image} index={index} onClick={() => setActive(image)} />
          ))}
        </div>
      </div>

      <Lightbox image={active} onClose={() => setActive(null)} />
    </section>
  );
}
