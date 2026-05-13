"use client";

import { motion } from "framer-motion";

const marqueeItems = [
  "Marrakech",
  "Fes",
  "Chefchaouen",
  "Essaouira",
  "Sahara Desert",
  "Atlas Mountains",
  "Casablanca",
  "Tangier",
  "Rabat",
  "Ouarzazate",
  "Merzouga",
  "Agadir",
];

export function Marquee() {
  return (
    <div className="relative bg-primary overflow-hidden py-4">
      <motion.div
        animate={{ x: "-50%" }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
        className="flex whitespace-nowrap"
      >
        {[...marqueeItems, ...marqueeItems].map((item, index) => (
          <span
            key={index}
            className="font-display text-[11px] font-bold tracking-[0.15em] uppercase text-primary-foreground mx-8 flex items-center gap-8"
          >
            {item}
            <span className="text-primary-foreground/40">◆</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}
