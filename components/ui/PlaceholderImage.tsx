"use client";

import { useState } from "react";
import Image from "next/image";
import { Cat } from "lucide-react";

type PlaceholderImageProps = {
  src: string;
  alt: string;
  className?: string;
  objectFit?: "contain" | "cover";
  priority?: boolean;
  sizes?: string;
};

/**
 * Fills its (aspect-ratio controlled, position-relative) parent with a
 * Next.js Image. Falls back to a bordered sticker placeholder box if the
 * real asset is ever missing, so the site never breaks.
 */
export default function PlaceholderImage({
  src,
  alt,
  className = "",
  objectFit = "contain",
  priority = false,
  sizes = "100vw",
}: PlaceholderImageProps) {
  const [errored, setErrored] = useState(false);

  if (errored) {
    return (
      <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-white/60 p-4 text-center">
        <Cat className="h-10 w-10 shrink-0" strokeWidth={2.5} />
        <span className="px-2 text-xs font-bold uppercase tracking-wide">{alt}</span>
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      priority={priority}
      loading={priority ? undefined : "lazy"}
      sizes={sizes}
      className={`${objectFit === "contain" ? "object-contain" : "object-cover"} ${className}`}
      onError={() => setErrored(true)}
    />
  );
}
