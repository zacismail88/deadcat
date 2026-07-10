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
  width?: number;
  height?: number;
};

/**
 * Fills its (aspect-ratio controlled, position-relative) parent with a
 * Next.js Image. Falls back to a bordered sticker placeholder box if the
 * real asset is ever missing, so the site never breaks.
 *
 * If `width`/`height` are provided, renders the image at its intrinsic
 * size (`w-full h-auto`) instead of using `fill`. This avoids a Safari/iOS
 * rendering bug where absolutely-positioned `fill` images can fail to
 * paint inside animated (transformed) ancestors.
 */
export default function PlaceholderImage({
  src,
  alt,
  className = "",
  objectFit = "contain",
  priority = false,
  sizes = "100vw",
  width,
  height,
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

  if (width && height) {
    return (
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        loading={priority ? undefined : "lazy"}
        sizes={sizes}
        className={`h-auto w-full ${className}`}
        onError={() => setErrored(true)}
      />
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
