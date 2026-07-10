"use client";

import { motion } from "framer-motion";
import {
  Coffee,
  Briefcase,
  Activity,
  ShieldOff,
  UtensilsCrossed,
  TrendingUp,
  Skull,
  Voicemail,
  ThumbsDown,
  type LucideIcon,
} from "lucide-react";
import type { StatCard as StatCardType } from "@/lib/content";

const ICONS: Record<StatCardType["icon"], LucideIcon> = {
  coffee: Coffee,
  briefcase: Briefcase,
  activity: Activity,
  "shield-off": ShieldOff,
  utensils: UtensilsCrossed,
  "trending-up": TrendingUp,
  skull: Skull,
  voicemail: Voicemail,
  "thumbs-down": ThumbsDown,
};

export default function StatCard({ title, value, icon, bg, tilt }: StatCardType) {
  const Icon = ICONS[icon];

  return (
    <motion.div
      className={`sticker ${bg} ${tilt} flex flex-col gap-3 p-5`}
      whileHover={{ rotate: 0, scale: 1.03 }}
      transition={{ type: "spring", stiffness: 300, damping: 15 }}
    >
      <div className="w-fit rounded-xl border-4 border-black bg-white p-2 text-ink">
        <Icon className="h-6 w-6" strokeWidth={2.5} />
      </div>
      <h3 className="heading-punch text-lg">{title}</h3>
      <p className="font-bold">{value}</p>
    </motion.div>
  );
}
