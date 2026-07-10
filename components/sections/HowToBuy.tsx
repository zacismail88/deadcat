"use client";

import { motion } from "framer-motion";
import { AlertTriangle } from "lucide-react";
import ChunkyButton from "@/components/ui/ChunkyButton";

export default function HowToBuy() {
  return (
    <section id="buy" className="bg-background">
      <div className="section-container py-16 sm:py-20 lg:py-24">
        <motion.div
          className="sticker-lg mx-auto max-w-xl bg-white p-6 sm:p-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="heading-punch text-center text-3xl sm:text-4xl">
            The Bounce Hasn&apos;t Started Yet
          </h2>
          <p className="mt-2 text-center text-base font-bold sm:text-lg">
            Launching soon.
          </p>

          <div className="mt-8 flex flex-col items-center justify-between gap-2 rounded-2xl border-4 border-black bg-background px-5 py-4 sm:flex-row">
            <span className="heading-punch text-sm">Contract Address</span>
            <span className="rounded-full border-4 border-black bg-white px-4 py-1 font-mono text-xs font-black uppercase">
              Coming Soon
            </span>
          </div>

          <div className="mt-4 flex flex-col items-center justify-between gap-2 rounded-2xl border-4 border-black bg-background px-5 py-4 sm:flex-row">
            <span className="heading-punch text-sm">Launchpad</span>
            <span className="rounded-full border-4 border-black bg-white px-4 py-1 font-mono text-xs font-black uppercase">
              Coming Soon
            </span>
          </div>

          <div className="mt-6 flex justify-center">
            <ChunkyButton variant="disabled">Not Yet</ChunkyButton>
          </div>

          <div className="mt-8 flex items-center gap-3 rounded-2xl border-4 border-black bg-deadred p-4 text-white">
            <AlertTriangle className="h-6 w-6 shrink-0" strokeWidth={2.5} />
            <p className="text-sm font-bold sm:text-base">
              Never trust contract addresses from random replies.
            </p>
          </div>

          <p className="mt-6 text-center text-sm font-bold text-ink/60 sm:text-base">
            Dead Cat is already dead. Your wallet doesn&apos;t have to be.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
