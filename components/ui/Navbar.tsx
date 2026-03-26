"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useTranslations } from "next-intl";
import ThemeToggle from "./ThemeToggle";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Navbar() {
  const t = useTranslations("nav");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("#");

  const navLinks = [
    { label: t("home"), href: "#" },
    { label: t("about"), href: "#about" },
    { label: t("experience"), href: "#experience" },
    { label: t("projects"), href: "#projects" },
    { label: t("skills"), href: "#skills" },
    { label: t("education"), href: "#education" },
    { label: t("contact"), href: "#contact" },
  ];

  useEffect(() => {
    // 1. Scrolled State & Top Detection
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Explicitly set Home if at the very top
      if (window.scrollY < 100) {
        setActiveLink("#");
      }
    };
    window.addEventListener("scroll", handleScroll);

    // 2. Intersection Observer for Scroll Spy
    const sectionIds = ["about", "experience", "projects", "skills", "education", "contact"];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveLink(`#${entry.target.id}`);
          }
        });
      },
      {
        // Trigger when the section hits the middle of the viewport
        rootMargin: "-40% 0px -60% 0px"
      }
    );

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  const handleLinkClick = (href: string) => {
    setActiveLink(href);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`sticky top-4 z-50 rounded-full mx-auto max-w-5xl flex justify-between items-center w-[calc(100%-2rem)] px-8 py-4 transition-all duration-300 ${
          isScrolled
            ? "bg-white/90 dark:bg-neutral-900/80 backdrop-blur-xl shadow-[0_8px_32px_rgba(139,92,246,0.15)]"
            : "bg-white/60 dark:bg-neutral-900/60 backdrop-blur-xl shadow-[0_8px_32px_rgba(139,92,246,0.1)]"
        }`}
      >
        {/* Logo */}
        <a
          href="#"
          className="text-xl md:text-2xl font-black dark:text-white text-gray-900 tracking-tighter hover:text-violet-400 transition-colors font-headline cursor-pointer"
        >
          Ryan<span className="text-primary">.</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8 font-headline font-bold tracking-tight">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => handleLinkClick(link.href)}
              className={`transition-all duration-300 hover:scale-105 ${
                activeLink === link.href
                  ? "text-violet-400 border-b-2 border-violet-500 pb-1"
                  : "text-neutral-700 hover:text-gray-900 dark:text-neutral-400 dark:hover:text-white"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Right controls */}
        <div className="flex items-center gap-3">
          <LanguageSwitcher />
          <ThemeToggle />
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-violet-400 hover:scale-105 transition-all p-1"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Bottom gradient border */}
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-violet-500/10 to-transparent" />
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-24 left-4 right-4 z-40 rounded-2xl bg-white/95 dark:bg-neutral-900/95 backdrop-blur-xl border border-violet-500/10 p-6 md:hidden shadow-xl"
          >
            <div className="flex flex-col gap-4 font-headline font-bold tracking-tight">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => handleLinkClick(link.href)}
                  className={`py-2 px-4 rounded-lg transition-all ${
                    activeLink === link.href
                      ? "text-violet-400 bg-violet-500/10"
                      : "text-neutral-500 hover:text-gray-900 hover:bg-black/5 dark:text-neutral-400 dark:hover:text-white dark:hover:bg-white/5"
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
