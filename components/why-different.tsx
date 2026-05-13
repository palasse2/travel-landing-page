"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const problems = [
  {
    number: "01",
    title: "Outdated Guidebooks",
    description:
      "Traditional travel books are often 2-3 years behind. Prices change, places close, and hidden gems become tourist traps.",
  },
  {
    number: "02",
    title: "Tourist Trap Prices",
    description:
      "Without local knowledge, you'll pay 3-5x the real price for everything from taxis to tagines.",
  },
  {
    number: "03",
    title: "Missing the Real Morocco",
    description:
      "Blog posts and social media show the same 10 spots. The authentic Morocco stays hidden.",
  },
  {
    number: "04",
    title: "Cultural Confusion",
    description:
      "Unknowingly breaking cultural norms can close doors. Understanding local customs opens them.",
  },
];

const features = [
  {
    icon: "📍",
    title: "Real Local Prices",
    description:
      "Know exactly what locals pay. Never get overcharged at souks, restaurants, or for transport again.",
  },
  {
    icon: "🗺️",
    title: "Hidden Gems Map",
    description:
      "50+ secret spots that don't appear in any other guide. From rooftop cafes to desert oases.",
  },
  {
    icon: "🔄",
    title: "Weekly Updates",
    description:
      "Our team on the ground updates the guide weekly. You'll always have current information.",
  },
  {
    icon: "📱",
    title: "Offline Access",
    description:
      "Download once, access anywhere. No wifi needed when you're exploring remote villages.",
  },
];

export function WhyDifferent() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="why" ref={ref} className="relative py-24 md:py-32 bg-off-black">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 md:mb-20"
        >
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="w-5 h-px bg-primary" />
            <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-primary">
              The Problem
            </span>
          </div>
          <h2 className="font-display font-extrabold text-3xl md:text-4xl lg:text-5xl leading-tight tracking-tight mb-4">
            Why Most Morocco Trips
            <br />
            <span className="text-primary">Fall Short</span>
          </h2>
          <p className="text-muted text-base max-w-xl leading-relaxed">
            Every year, thousands of travelers visit Morocco unprepared. They come home with stories
            of getting ripped off, missing hidden gems, and cultural misunderstandings.
          </p>
        </motion.div>

        {/* Problem Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-border mb-px">
          {problems.map((problem, index) => (
            <motion.div
              key={problem.number}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="bg-off-black p-8 md:p-10 hover:bg-card transition-colors group"
            >
              <div className="font-display text-5xl md:text-6xl font-extrabold text-foreground/5 mb-6 group-hover:text-primary/10 transition-colors">
                {problem.number}
              </div>
              <h3 className="font-display text-base font-bold tracking-tight mb-3">
                {problem.title}
              </h3>
              <p className="text-sm text-muted leading-relaxed">{problem.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Solution Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="bg-card p-6 md:p-8 flex items-center gap-4 border-t border-primary/30"
        >
          <span className="text-primary text-xl">✦</span>
          <p className="text-card-foreground">
            <strong className="text-primary">Travel Readz</strong> solves all of this with insider
            knowledge, real-time updates, and local connections.
          </p>
        </motion.div>

        {/* Why Different Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mt-24 md:mt-32"
        >
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="w-5 h-px bg-primary" />
            <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-primary">
              The Solution
            </span>
          </div>
          <h2 className="font-display font-extrabold text-3xl md:text-4xl lg:text-5xl leading-tight tracking-tight mb-4">
            Why This Guide Is
            <br />
            <span className="text-primary">Different</span>
          </h2>
          <p className="text-muted text-base max-w-xl leading-relaxed mb-12">
            We built the guide we wished we had. Updated weekly by locals, packed with insider
            secrets, and designed for real travelers.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: 0.6 + index * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="bg-background p-8 md:p-12 hover:bg-card transition-colors group"
            >
              <div className="text-3xl mb-5">{feature.icon}</div>
              <h3 className="font-display text-lg md:text-xl font-bold tracking-tight mb-3">
                {feature.title}
              </h3>
              <p className="text-muted leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}

          {/* Large feature card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 1, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-2 bg-card p-8 md:p-12 grid md:grid-cols-2 gap-8 items-center"
          >
            <div>
              <div className="text-3xl mb-5">🎯</div>
              <h3 className="font-display text-lg md:text-xl font-bold tracking-tight mb-3">
                Trusted by Thousands
              </h3>
              <p className="text-muted leading-relaxed">
                Join thousands of travelers who discovered the real Morocco with our guide. From
                solo adventurers to families, our guide adapts to your journey.
              </p>
            </div>
            <div className="flex items-center justify-center md:justify-end">
              <div className="font-display text-6xl md:text-8xl font-extrabold text-primary">
                5K+
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
