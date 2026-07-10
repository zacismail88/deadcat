"use client";

import { motion } from "framer-motion";
import StatCard from "@/components/ui/StatCard";
import { STATUS_BOARD } from "@/lib/content";

export default function StatusBoard() {
  return (
    <section id="status" className="bg-background">
      <div className="section-container py-16 sm:py-20 lg:py-24">
        <motion.h2
          className="heading-punch text-center text-4xl sm:text-5xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          Today&apos;s Market Report
        </motion.h2>

        <div className="mt-10 grid grid-cols-2 gap-5 sm:mt-14 md:grid-cols-3 lg:gap-6">
          {STATUS_BOARD.map((stat) => (
            <StatCard key={stat.title} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
}
