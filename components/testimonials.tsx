"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const testimonials = [
  {
    text: "This guide literally saved us thousands of dirhams. The price guide section alone is worth 10x what we paid. We knew exactly what to pay for everything.",
    author: "Sarah & Michael",
    role: "Honeymoon Trip",
    source: "Verified Purchase",
    avatar: "SM",
    featured: true,
  },
  {
    text: "As a solo female traveler, the cultural tips gave me so much confidence. I felt prepared for every situation. The hidden gems were incredible.",
    author: "Emma Rodriguez",
    role: "Solo Adventurer",
    source: "Instagram DM",
    avatar: "ER",
    featured: false,
  },
  {
    text: "We thought we knew Morocco after previous trips. This guide showed us a completely different side. The rooftop café list alone was worth it.",
    author: "James & Lisa Chen",
    role: "Return Visitors",
    source: "Email Feedback",
    avatar: "JL",
    featured: false,
  },
  {
    text: "The offline access was crucial when we were in remote areas. Every recommendation was spot-on. Best travel investment we've made.",
    author: "David Thompson",
    role: "Photographer",
    source: "Twitter Review",
    avatar: "DT",
    featured: true,
  },
  {
    text: "Our family trip was perfect thanks to this guide. The kid-friendly spots and realistic pacing advice made traveling with toddlers actually enjoyable.",
    author: "The Martinez Family",
    role: "Family of 4",
    source: "Verified Purchase",
    avatar: "MF",
    featured: false,
  },
  {
    text: "I've used countless travel guides. This is different. It feels like having a local friend guiding you through every city. Highly recommend.",
    author: "Alex Petrov",
    role: "Travel Blogger",
    source: "Blog Review",
    avatar: "AP",
    featured: false,
  },
];

export function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="testimonials" ref={ref} className="relative py-24 md:py-32">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-off-black/50 to-background pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16 md:mb-20"
        >
          <div className="inline-flex items-center gap-3 mb-4 justify-center">
            <span className="w-5 h-px bg-primary" />
            <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-primary">
              Real Stories
            </span>
            <span className="w-5 h-px bg-primary" />
          </div>
          <h2 className="font-display font-extrabold text-3xl md:text-4xl lg:text-5xl leading-tight tracking-tight mb-4">
            What Travelers Are
            <br />
            <span className="text-primary">Saying</span>
          </h2>
          <p className="text-muted text-base max-w-xl mx-auto leading-relaxed">
            Join 5,000+ travelers who discovered the real Morocco with our guide.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className={`bg-background p-8 md:p-12 hover:bg-card transition-colors ${
                testimonial.featured ? "bg-card border-t-2 border-primary" : ""
              }`}
            >
              {/* Stars */}
              <div className="text-primary text-sm tracking-widest mb-5">★★★★★</div>

              {/* Quote */}
              <p className="text-card-foreground leading-relaxed mb-6 font-light">
                &quot;{testimonial.text}&quot;
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-display text-xs font-bold">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-display text-sm font-bold">{testimonial.author}</div>
                  <div className="text-xs text-muted mt-0.5">{testimonial.role}</div>
                  <div className="text-[10px] text-muted/50 mt-0.5">{testimonial.source}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mt-px bg-card p-8 md:p-10 flex flex-wrap justify-center gap-8 md:gap-16"
        >
          <div className="text-center">
            <div className="font-display text-3xl md:text-4xl font-extrabold text-primary">4.9</div>
            <div className="text-xs text-muted mt-1">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="font-display text-3xl md:text-4xl font-extrabold">5,000+</div>
            <div className="text-xs text-muted mt-1">Happy Travelers</div>
          </div>
          <div className="text-center">
            <div className="font-display text-3xl md:text-4xl font-extrabold">98%</div>
            <div className="text-xs text-muted mt-1">Would Recommend</div>
          </div>
          <div className="text-center">
            <div className="font-display text-3xl md:text-4xl font-extrabold">24</div>
            <div className="text-xs text-muted mt-1">Countries</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
