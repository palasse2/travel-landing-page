"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Marquee } from "@/components/marquee";
import { WhyDifferent } from "@/components/why-different";
import { PreviewSection } from "@/components/preview-section";
import { Testimonials } from "@/components/testimonials";
import { Pricing } from "@/components/pricing";
import { FinalCTA } from "@/components/final-cta";
import { Footer } from "@/components/footer";

export default function Home() {
  useEffect(() => {
    // Register GSAP plugins
    gsap.registerPlugin(ScrollTrigger);

    // Smooth scroll behavior enhancement
    const sections = document.querySelectorAll("section");
    sections.forEach((section) => {
      gsap.fromTo(
        section,
        { opacity: 0.8 },
        {
          opacity: 1,
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            end: "top 20%",
            scrub: true,
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Marquee />
      <WhyDifferent />
      <PreviewSection />
      <Testimonials />
      <Pricing />
      <FinalCTA />
      <Footer />
    </main>
  );
}
