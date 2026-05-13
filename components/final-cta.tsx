"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export function FinalCTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-24 md:py-32 overflow-hidden">
      {/* Background ambient effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gradient-radial from-primary/10 to-transparent blur-3xl" />
      </div>

      <div className="relative max-w-4xl mx-auto px-6 md:px-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-3 mb-6 justify-center">
            <span className="w-5 h-px bg-primary" />
            <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-primary">
              Start Your Journey
            </span>
            <span className="w-5 h-px bg-primary" />
          </div>

          {/* Title */}
          <h2 className="font-display font-extrabold text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight mb-6">
            Ready to Discover
            <br />
            <span className="text-primary">the Real Morocco?</span>
          </h2>

          {/* Subtitle */}
          <p className="text-muted text-lg max-w-2xl mx-auto leading-relaxed mb-10">
            Join thousands of travelers who&apos;ve transformed their Morocco experience. Get instant
            access to 300+ pages of insider knowledge.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-10">
            <motion.a
              href="#pricing"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center gap-3 bg-primary text-primary-foreground font-display text-sm font-bold tracking-widest uppercase px-10 py-5 hover:bg-primary-light transition-all shadow-xl shadow-primary/25"
            >
              <span>Get The Guide Now</span>
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </motion.a>
            <motion.a
              href="#preview"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center gap-2 border border-border-hover text-card-foreground font-display text-sm font-semibold tracking-widest uppercase px-10 py-5 hover:border-primary hover:text-primary transition-all"
            >
              <span>See What&apos;s Inside</span>
            </motion.a>
          </div>

          {/* Trust line */}
          <div className="flex flex-wrap justify-center gap-6 text-sm text-muted">
            <span className="flex items-center gap-2">
              <span className="text-primary">✓</span> Instant Download
            </span>
            <span className="flex items-center gap-2">
              <span className="text-primary">✓</span> 30-Day Money Back
            </span>
            <span className="flex items-center gap-2">
              <span className="text-primary">✓</span> Lifetime Updates
            </span>
          </div>
        </motion.div>

        {/* Decorative elements */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5, duration: 1 }}
          className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"
        />
      </div>
    </section>
  );
}
