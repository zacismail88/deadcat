import { Cat, Twitter } from "lucide-react";
import { SOCIAL_LINKS, FOOTER_STATUS } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="border-t-4 border-black bg-charcoal text-white">
      <div className="section-container flex flex-col items-center gap-4 py-8 text-center">
        <div className="flex items-center gap-2 heading-punch text-xl">
          <span className="flex h-8 w-8 items-center justify-center rounded-full border-4 border-black bg-background text-ink">
            <Cat className="h-4 w-4" strokeWidth={2.5} />
          </span>
          DEADCAT
        </div>

        <p className="text-xs font-bold text-white/70">The bounce starts here.</p>

        {SOCIAL_LINKS.map((s) => (
          <a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full border-4 border-black bg-background px-4 py-1.5 text-xs font-black uppercase text-ink shadow-pop-sm"
          >
            <Twitter className="h-4 w-4" strokeWidth={3} />
            {s.label}
          </a>
        ))}

        <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-[11px] font-bold uppercase tracking-wide text-white/60">
          {FOOTER_STATUS.map((item, i) => (
            <span key={item.label}>
              {item.label}: {item.value}
              {i < FOOTER_STATUS.length - 1 && <span className="ml-4 text-white/30">/</span>}
            </span>
          ))}
        </div>

        <p className="text-[11px] font-bold uppercase tracking-wide text-white/60">
          Powered by Ethereum
        </p>

        <p className="max-w-md text-[11px] leading-relaxed text-white/50">
          DEADCAT is a meme token created for entertainment purposes only. Participation
          involves significant risk, and digital assets can lose some or all of their
          value. Nothing on this site constitutes financial, investment, legal, or tax
          advice, and no guarantee is made regarding value, returns, or utility. DEADCAT
          is not affiliated with, endorsed by, or partnered with Robinhood Markets, Inc.
          or any other company referenced. Please do your own research and consult a
          qualified professional before making any financial decisions.
        </p>

        <p className="text-[11px] font-bold text-white/40">
          &copy; {new Date().getFullYear()} DEADCAT. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
