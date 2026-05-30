"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "./Logo";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
      
      // Determine active section for scroll indicator
      const sections = ["hero", "services", "portfolio", "why-us", "blog"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "الرئيسية", id: "hero", href: "#" },
    { name: "خدماتنا", id: "services", href: "#services" },
    { name: "أعمالنا", id: "portfolio", href: "#portfolio" },
    { name: "من نحن", id: "why-us", href: "#why-us" },
    { name: "المدونة", id: "blog", href: "#blog" },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-md border-b border-slate-100 py-3 shadow-[0_2px_20px_rgba(0,0,0,0.02)]"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Centered/Left Brand Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <Logo size="sm" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-sm font-semibold transition-colors relative py-2 ${
                activeSection === link.id
                  ? "text-sky-500 font-bold"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              {link.name}
              {activeSection === link.id && (
                <motion.span
                  layoutId="activeNavIndicator"
                  className="absolute bottom-0 right-0 w-full h-[2px] bg-sky-500 rounded-full"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA Button */}
        <div className="hidden md:block">
          <a
            href="https://wa.me/96555512344"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2.5 rounded-full bg-sky-500 hover:bg-sky-600 text-white text-sm font-bold transition-all hover:scale-105 active:scale-95 shadow-[0_4px_14px_rgba(14,165,233,0.3)]"
          >
            تواصل معنا
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-slate-800 p-2 hover:bg-slate-50 rounded-xl transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 w-full bg-white/95 backdrop-blur-lg border-b border-slate-100 py-6 px-6 flex flex-col gap-4 md:hidden shadow-lg"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-base font-semibold py-2 px-3 rounded-lg transition-colors ${
                  activeSection === link.id
                    ? "bg-sky-50 text-sky-600 font-bold"
                    : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <a
              href="https://wa.me/96555512344"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 text-center px-6 py-3 rounded-xl bg-sky-500 hover:bg-sky-600 text-white font-bold transition-all shadow-[0_4px_14px_rgba(14,165,233,0.3)]"
            >
              تواصل معنا
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
