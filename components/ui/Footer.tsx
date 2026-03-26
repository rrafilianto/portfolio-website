"use client";

import { useTranslations } from "next-intl";
import { Mail, Phone, Terminal, UserPlus } from "lucide-react";

export default function Footer() {
  const t = useTranslations("footer");

  return (
    <footer className="bg-transparent w-full py-12 mt-24 border-t dark:border-white/5 border-black/5 font-body text-sm tracking-wide">
      <div className="flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto px-8 gap-6">
        <div className="text-neutral-500">
          © {new Date().getFullYear()} Ryan Rafilianto. {t("rights")}
        </div>
        <div className="flex gap-6">
          <a
            href="mailto:ryanrafilianto@gmail.com"
            aria-label="Email"
            className="text-neutral-500 hover:text-primary transition-colors duration-200"
          >
            <Mail className="w-5 h-5" />
          </a>
          <a
            href="https://wa.me/6285723056463"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="text-neutral-500 hover:text-emerald-500 transition-colors duration-200"
          >
            <Phone className="w-5 h-5" />
          </a>
          <a
            href="https://linkedin.com/in/ryan-rafilianto"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-neutral-500 hover:text-secondary transition-colors duration-200"
          >
            <UserPlus className="w-5 h-5" />
          </a>
          <a
            href="https://github.com/rrafilianto"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-neutral-500 hover:text-tertiary transition-colors duration-200"
          >
            <Terminal className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
