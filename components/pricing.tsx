"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const tiers = [
  {
    name: "Essential",
    price: 19,
    cadence: "One-time payment",
    description: "Perfect for first-time Morocco visitors",
    features: [
      { text: "300+ Page Digital Guide", included: true },
      { text: "12 City Guides", included: true },
      { text: "Real Local Prices List", included: true },
      { text: "Offline PDF Access", included: true },
      { text: "Hidden Gems Map", included: false },
      { text: "Lifetime Updates", included: false },
      { text: "WhatsApp Support", included: false },
    ],
    cta: "Get Essential",
    variant: "outline" as const,
    note: "Best for short trips",
  },
  {
    name: "Complete",
    price: 39,
    cadence: "One-time payment",
    description: "Our most popular package",
    features: [
      { text: "Everything in Essential", included: true, bold: true },
      { text: "50+ Hidden Gems Map", included: true },
      { text: "Lifetime Updates", included: true },
      { text: "Mobile App Access", included: true },
      { text: "Audio City Tours", included: true },
      { text: "WhatsApp Support", included: false },
      { text: "Custom Itinerary", included: false },
    ],
    cta: "Get Complete",
    variant: "fill" as const,
    note: "Most Popular",
    featured: true,
    badge: "Best Value",
  },
  {
    name: "Premium",
    price: 79,
    cadence: "One-time payment",
    description: "The ultimate Morocco experience",
    features: [
      { text: "Everything in Complete", included: true, bold: true },
      { text: "WhatsApp Support 24/7", included: true },
      { text: "Custom Itinerary Planning", included: true },
      { text: "Local Contact Network", included: true },
      { text: "Restaurant Reservations", included: true },
      { text: "Priority Updates", included: true },
      { text: "Exclusive Community", included: true },
    ],
    cta: "Get Premium",
    variant: "ghost" as const,
    note: "For serious travelers",
  },
];

const trustBadges = [
  "Instant Digital Delivery",
  "30-Day Money Back",
  "Secure Checkout",
  "No Hidden Fees",
];

export function Pricing() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="pricing" ref={ref} className="relative py-24 md:py-32 bg-off-black">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16 md:mb-20"
        >
          <div className="inline-flex items-center gap-3 mb-4 justify-center">
            <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-primary">
              Choose Your Journey
            </span>
          </div>
          <h2 className="font-display font-extrabold text-3xl md:text-4xl lg:text-5xl leading-tight tracking-tight mb-4">
            Simple, Transparent
            <br />
            <span className="text-primary">Pricing</span>
          </h2>
          <p className="text-muted text-base max-w-xl mx-auto leading-relaxed">
            One purchase. Lifetime access. No subscriptions, no hidden costs.
          </p>
        </motion.div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className={`relative bg-off-black p-10 md:p-12 hover:bg-dark transition-colors ${
                tier.featured ? "bg-card border-t-2 border-primary" : ""
              }`}
            >
              {/* Badge */}
              {tier.badge && (
                <div className="absolute -top-px right-8 bg-primary text-primary-foreground font-display text-[9px] font-bold tracking-widest uppercase px-4 py-1.5">
                  {tier.badge}
                </div>
              )}

              {/* Tier Label */}
              <div className="font-display text-[10px] font-bold tracking-[0.2em] uppercase text-muted mb-6">
                {tier.name}
              </div>

              {/* Price */}
              <div className="mb-2">
                <span className="font-display text-5xl md:text-6xl font-extrabold tracking-tight">
                  <sup className="text-xl align-super">$</sup>
                  {tier.price}
                </span>
              </div>
              <div className="text-xs text-muted mb-8">{tier.cadence}</div>

              {/* Divider */}
              <div className="h-px bg-border mb-8" />

              {/* Features */}
              <ul className="space-y-3 mb-10">
                {tier.features.map((feature, i) => (
                  <li
                    key={i}
                    className={`flex items-start gap-3 text-sm ${
                      feature.included ? "text-card-foreground" : "text-muted/50"
                    }`}
                  >
                    <span className={feature.included ? "text-primary" : "text-muted/30"}>
                      {feature.included ? "✓" : "×"}
                    </span>
                    <span className={feature.bold ? "font-medium text-foreground" : ""}>
                      {feature.text}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <motion.a
                href="#"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className={`block w-full text-center font-display text-xs font-bold tracking-widest uppercase py-4 transition-all ${
                  tier.variant === "fill"
                    ? "bg-primary text-primary-foreground hover:bg-primary-light border border-primary"
                    : tier.variant === "outline"
                    ? "bg-transparent text-card-foreground border border-border-hover hover:border-primary hover:text-primary"
                    : "bg-transparent text-primary border border-primary/30 hover:bg-primary hover:text-primary-foreground"
                }`}
              >
                {tier.cta}
              </motion.a>

              {/* Note */}
              <div className="text-center text-[10px] text-muted/50 mt-4">{tier.note}</div>
            </motion.div>
          ))}
        </div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap justify-center gap-6 md:gap-10 mt-12 pt-10 border-t border-border"
        >
          {trustBadges.map((badge) => (
            <span key={badge} className="text-xs text-muted flex items-center gap-2">
              <span className="text-primary">✓</span>
              {badge}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
