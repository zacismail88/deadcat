"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import PlaceholderImage from "@/components/ui/PlaceholderImage";
import { HERO_IMAGE, NAV_LINKS } from "@/lib/content";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b-4 border-black bg-white">
      <div className="section-container flex items-center justify-between py-3">
        <a href="#" className="flex items-center gap-2 heading-punch text-xl sm:text-2xl">
          <span className="relative flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-full border-4 border-black bg-background">
            <PlaceholderImage
              src={HERO_IMAGE.src}
              alt="DEADCAT mascot"
              objectFit="cover"
              sizes="36px"
            />
          </span>
          DEADCAT
        </a>

        <nav className="hidden items-center gap-6 sm:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="heading-punch text-sm border-b-4 border-transparent pb-1 hover:border-background transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className="rounded-lg border-4 border-black p-1.5 sm:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" strokeWidth={3} /> : <Menu className="h-5 w-5" strokeWidth={3} />}
        </button>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t-4 border-black bg-white px-4 py-3 sm:hidden">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="heading-punch rounded-lg px-2 py-2 text-sm hover:bg-background"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
