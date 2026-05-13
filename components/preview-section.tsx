"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

// Placeholder preview pages - replace with your actual preview images
const previewPages = [
  { src: "/preview-1.jpg", alt: "Marrakech City Guide" },
  { src: "/preview-2.jpg", alt: "Fes Medina Map" },
  { src: "/preview-3.jpg", alt: "Sahara Desert Tips" },
  { src: "/preview-4.jpg", alt: "Chefchaouen Guide" },
  { src: "/preview-5.jpg", alt: "Local Price List" },
  { src: "/preview-6.jpg", alt: "Cultural Etiquette" },
];

const insideContent = [
  {
    number: "CHAPTER 01",
    title: "City-by-City Guides",
    description: "Deep dives into 12 major cities with neighborhood maps, walking routes, and local recommendations.",
  },
  {
    number: "CHAPTER 02",
    title: "Real Price Guide",
    description: "Know exactly what to pay. Updated weekly with real local prices for taxis, food, souvenirs, and more.",
  },
  {
    number: "CHAPTER 03",
    title: "Hidden Gems Atlas",
    description: "50+ secret spots handpicked by locals. Rooftop cafes, hidden riads, and untouched beaches.",
  },
  {
    number: "CHAPTER 04",
    title: "Cultural Deep-Dive",
    description: "Navigate Morocco's customs with confidence. From greeting styles to bargaining etiquette.",
  },
];

export function PreviewSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [scrollPosition, setScrollPosition] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const x = useTransform(scrollYProgress, [0, 1], [0, -200]);

  // Auto-scroll effect
  useEffect(() => {
    const interval = setInterval(() => {
      setScrollPosition((prev) => {
        const newPos = prev + 1;
        if (scrollRef.current) {
          scrollRef.current.scrollLeft = newPos;
          if (newPos >= scrollRef.current.scrollWidth - scrollRef.current.clientWidth) {
            return 0;
          }
        }
        return newPos;
      });
    }, 30);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="preview" ref={ref} className="relative py-20 md:py-24 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-off-black via-background to-background pointer-events-none" />

      <div className="relative">
        {/* Section Header */}
        <div className="max-w-7xl mx-auto px-6 md:px-10 mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="inline-flex items-center gap-3 mb-4">
              <span className="w-5 h-px bg-primary" />
              <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-primary">
                Inside The Guide
              </span>
            </div>
            <h2 className="font-display font-extrabold text-3xl md:text-4xl lg:text-5xl leading-tight tracking-tight mb-4">
              300+ Pages of
              <br />
              <span className="text-primary">Morocco Secrets</span>
            </h2>
            <p className="text-muted text-base max-w-xl leading-relaxed">
              Every page is crafted to help you travel smarter. Here&apos;s a glimpse of what&apos;s inside.
            </p>
          </motion.div>
        </div>

        {/* Horizontal Scroll Preview */}
        <motion.div
          ref={containerRef}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mb-16 md:mb-24"
        >
          <motion.div
            ref={scrollRef}
            style={{ x }}
            className="flex gap-4 md:gap-6 px-6 md:px-10 overflow-x-auto scrollbar-hide cursor-grab active:cursor-grabbing"
          >
            {[...previewPages, ...previewPages].map((page, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ duration: 0.3 }}
                className="relative flex-shrink-0 h-[280px] md:h-[380px] w-[200px] md:w-[270px] rounded-lg overflow-hidden group"
              >
                <Image
                  src={page.src}
                  alt={page.alt}
                  fill
                  className="object-cover brightness-90 group-hover:brightness-100 transition-all duration-500"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                {/* Label */}
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-xs font-medium">{page.alt}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Gradient overlays */}
          <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-background to-transparent pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-background to-transparent pointer-events-none" />
        </motion.div>

        {/* Inside Content Grid */}
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
            {insideContent.map((item, index) => (
              <motion.div
                key={item.number}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.6,
                  delay: 0.4 + index * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="bg-background p-8 md:p-10 hover:bg-card transition-colors group"
              >
                <div className="font-display text-[10px] font-bold tracking-[0.2em] text-primary mb-5">
                  {item.number}
                </div>
                <h3 className="font-display text-base font-bold tracking-tight mb-3 leading-tight">
                  {item.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
