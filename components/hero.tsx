"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, AnimatePresence } from "framer-motion";
import Image from "next/image";

// Placeholder ebook cover images - replace with your actual images
const ebookCovers = [
  "/ebook-cover-1.jpg",
  "/ebook-cover-2.jpg",
  "/ebook-cover-3.jpg",
];

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Mouse parallax
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      mouseX.set((e.clientX - centerX) / 30);
      mouseY.set((e.clientY - centerY) / 30);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  // Auto-rotate ebooks
  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % ebookCovers.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 pb-20 px-6 md:px-10">
      {/* Background ambient effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] rounded-full bg-gradient-radial from-primary/10 to-transparent blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-gradient-radial from-primary/5 to-transparent blur-2xl" />
      </div>

      {/* Main content */}
      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Left - Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center lg:text-left order-2 lg:order-1"
        >
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-3 mb-6"
          >
            <span className="w-6 h-px bg-primary" />
            <span className="text-[10px] font-medium tracking-[0.2em] uppercase text-primary">
              The Morocco Insider Guide 2026
            </span>
          </motion.div>

          {/* Title */}
          <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-[0.95] tracking-tight mb-6">
            Discover
            <br />
            <span className="text-primary">Morocco</span>
            <br />
            Like a Local
          </h1>

          {/* Subtitle */}
          <p className="text-muted text-base lg:text-lg leading-relaxed max-w-lg mx-auto lg:mx-0 mb-8">
            Your definitive guide to traveling Morocco with confidence.{" "}
            <span className="text-card-foreground font-medium">Hidden gems</span>,{" "}
            <span className="text-card-foreground font-medium">real local prices</span>, and{" "}
            <span className="text-card-foreground font-medium">smart itineraries</span> all in one
            place.
          </p>

          {/* Stats */}
          <div className="flex justify-center lg:justify-start gap-8 mb-8">
            <div>
              <div className="font-display text-3xl lg:text-4xl font-extrabold">300+</div>
              <div className="text-[10px] tracking-[0.15em] uppercase text-muted mt-1">Pages</div>
            </div>
            <div>
              <div className="font-display text-3xl lg:text-4xl font-extrabold">50+</div>
              <div className="text-[10px] tracking-[0.15em] uppercase text-muted mt-1">Hidden Spots</div>
            </div>
            <div>
              <div className="font-display text-3xl lg:text-4xl font-extrabold">12</div>
              <div className="text-[10px] tracking-[0.15em] uppercase text-muted mt-1">City Guides</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 mb-8">
            <motion.a
              href="#pricing"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground font-display text-xs font-bold tracking-widest uppercase px-8 py-4 hover:bg-primary-light transition-all shadow-lg shadow-primary/25"
            >
              <span>Get The Guide</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </motion.a>
            <motion.a
              href="#preview"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center gap-2 border border-border-hover text-card-foreground font-display text-xs font-semibold tracking-widest uppercase px-8 py-4 hover:border-primary hover:text-primary transition-all"
            >
              <span>Preview Pages</span>
            </motion.a>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-4 text-xs text-muted">
            <span className="flex items-center gap-1.5">
              <span className="text-primary">✓</span> Instant Download
            </span>
            <span className="flex items-center gap-1.5">
              <span className="text-primary">✓</span> PDF + Mobile
            </span>
            <span className="flex items-center gap-1.5">
              <span className="text-primary">✓</span> Free Updates
            </span>
          </div>
        </motion.div>

        {/* Right - Ebook Showcase */}
        <motion.div
          ref={containerRef}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="relative flex items-center justify-center order-1 lg:order-2 h-[400px] md:h-[500px] lg:h-[600px]"
        >
          {/* Ambient glow */}
          <motion.div
            style={{ x: smoothX, y: smoothY }}
            className="absolute w-[350px] h-[350px] md:w-[450px] md:h-[450px] rounded-full bg-gradient-radial from-primary/20 to-transparent blur-2xl"
          />

          {/* Ebook Stack with animations */}
          <div className="relative w-full max-w-[300px] md:max-w-[350px] aspect-[3/4]">
            <AnimatePresence mode="popLayout">
              {ebookCovers.map((cover, index) => {
                const isActive = index === activeIndex;
                const isPrev = index === (activeIndex - 1 + ebookCovers.length) % ebookCovers.length;
                const isNext = index === (activeIndex + 1) % ebookCovers.length;

                return (
                  <motion.div
                    key={cover}
                    initial={{ opacity: 0, scale: 0.8, rotateY: -15 }}
                    animate={{
                      opacity: isActive ? 1 : isPrev || isNext ? 0.4 : 0,
                      scale: isActive ? 1 : 0.85,
                      rotateY: isActive ? 0 : isPrev ? -20 : 20,
                      x: isActive ? 0 : isPrev ? -80 : 80,
                      z: isActive ? 0 : -100,
                    }}
                    exit={{ opacity: 0, scale: 0.8, rotateY: 15 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    style={{
                      x: isActive ? smoothX : 0,
                      y: isActive ? smoothY : 0,
                    }}
                    className="absolute inset-0"
                  >
                    <motion.div
                      animate={{
                        y: isActive ? [0, -10, 0] : 0,
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="relative w-full h-full"
                    >
                      {/* Book shadow */}
                      <div className="absolute inset-4 bg-black/40 blur-2xl rounded-lg transform translate-y-8" />

                      {/* Book cover */}
                      <div className="relative w-full h-full rounded-lg overflow-hidden shadow-2xl shadow-black/50 bg-gradient-to-br from-card to-dark">
                        <Image
                          src={cover}
                          alt={`Morocco Travel Guide Cover ${index + 1}`}
                          fill
                          className="object-cover"
                          priority={index === 0}
                        />
                        {/* Glossy overlay */}
                        <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-black/20" />
                        {/* Edge highlight */}
                        <div className="absolute inset-y-0 left-0 w-[2px] bg-gradient-to-b from-white/30 via-white/10 to-transparent" />
                      </div>
                    </motion.div>
                  </motion.div>
                );
              })}
            </AnimatePresence>

            {/* Floating badges */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 }}
              style={{ x: smoothX, y: smoothY }}
              className="absolute -left-4 md:-left-8 top-1/4 glass px-3 py-2 rounded-lg text-[10px] font-medium whitespace-nowrap"
            >
              <span className="text-primary">★</span> Best 2026 Guide
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1 }}
              style={{ x: smoothX, y: smoothY }}
              className="absolute -right-4 md:-right-8 top-1/2 glass px-3 py-2 rounded-lg text-[10px] font-medium whitespace-nowrap"
            >
              🌍 Updated Weekly
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              style={{ x: smoothX, y: smoothY }}
              className="absolute -bottom-4 left-1/4 glass px-3 py-2 rounded-lg text-[10px] font-medium whitespace-nowrap"
            >
              📍 50+ Hidden Gems
            </motion.div>
          </div>

          {/* Book indicator dots */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex gap-2">
            {ebookCovers.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === activeIndex ? "bg-primary w-6" : "bg-border-hover hover:bg-muted"
                }`}
              />
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] tracking-widest uppercase text-muted">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-5 h-8 rounded-full border border-border-hover flex items-start justify-center p-1"
        >
          <motion.div className="w-1 h-2 bg-primary rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
