"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const languages = [
  { code: "en", label: "EN" },
  { code: "fr", label: "FR" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLang, setActiveLang] = useState("en");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-6 left-1/2 -translate-x-1/2 z-50"
      >
        <motion.div
          animate={{
            padding: isScrolled ? "10px 20px" : "14px 28px",
            scale: isScrolled ? 0.95 : 1,
          }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="glass rounded-full flex items-center gap-6 md:gap-10"
        >
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 font-display font-bold text-sm tracking-tight">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-primary"
            >
              <path
                d="M12 2L2 7L12 12L22 7L12 2Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M2 17L12 22L22 17"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M2 12L12 17L22 12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="hidden sm:block">
              Travel<span className="text-primary">Readz</span>
            </span>
          </a>

          {/* Desktop Navigation Links - hidden when scrolled */}
          <AnimatePresence>
            {!isScrolled && (
              <motion.div
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: "auto" }}
                exit={{ opacity: 0, width: 0 }}
                transition={{ duration: 0.3 }}
                className="hidden md:flex items-center gap-6 overflow-hidden"
              >
                <a
                  href="#why"
                  className="text-xs font-medium tracking-widest uppercase text-muted hover:text-foreground transition-colors"
                >
                  Why
                </a>
                <a
                  href="#preview"
                  className="text-xs font-medium tracking-widest uppercase text-muted hover:text-foreground transition-colors"
                >
                  Preview
                </a>
                <a
                  href="#testimonials"
                  className="text-xs font-medium tracking-widest uppercase text-muted hover:text-foreground transition-colors"
                >
                  Reviews
                </a>
                <a
                  href="#pricing"
                  className="text-xs font-medium tracking-widest uppercase text-muted hover:text-foreground transition-colors"
                >
                  Pricing
                </a>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Language Switcher */}
          <div className="flex gap-1">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => setActiveLang(lang.code)}
                className={`text-[10px] font-medium tracking-widest uppercase px-2 py-1 transition-colors ${
                  activeLang === lang.code ? "text-foreground" : "text-muted hover:text-foreground"
                }`}
              >
                {lang.label}
              </button>
            ))}
          </div>

          {/* CTA Button */}
          <motion.a
            href="#pricing"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-primary text-primary-foreground font-display text-[10px] font-bold tracking-widest uppercase px-4 py-2.5 rounded-sm hover:bg-primary-light transition-colors"
          >
            Get The Guide
          </motion.a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden flex flex-col gap-1 p-1"
            aria-label="Toggle menu"
          >
            <motion.span
              animate={{
                rotate: isMobileMenuOpen ? 45 : 0,
                y: isMobileMenuOpen ? 4 : 0,
              }}
              className="w-4 h-0.5 bg-foreground"
            />
            <motion.span
              animate={{ opacity: isMobileMenuOpen ? 0 : 1 }}
              className="w-4 h-0.5 bg-foreground"
            />
            <motion.span
              animate={{
                rotate: isMobileMenuOpen ? -45 : 0,
                y: isMobileMenuOpen ? -4 : 0,
              }}
              className="w-4 h-0.5 bg-foreground"
            />
          </button>
        </motion.div>
      </motion.nav>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed top-24 left-4 right-4 z-40 glass rounded-2xl p-6 md:hidden"
          >
            <div className="flex flex-col gap-4">
              <a
                href="#why"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-sm font-medium text-card-foreground hover:text-primary transition-colors"
              >
                Why This Guide
              </a>
              <a
                href="#preview"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-sm font-medium text-card-foreground hover:text-primary transition-colors"
              >
                Preview
              </a>
              <a
                href="#testimonials"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-sm font-medium text-card-foreground hover:text-primary transition-colors"
              >
                Reviews
              </a>
              <a
                href="#pricing"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-sm font-medium text-card-foreground hover:text-primary transition-colors"
              >
                Pricing
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
