"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award } from "lucide-react";
import { useTranslations } from "next-intl";

export default function Education() {
  const t = useTranslations("education");

  return (
    <section className="py-24 px-6 max-w-6xl mx-auto" id="education">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="font-headline text-3xl md:text-4xl font-bold mb-16 text-center"
      >
        {t("title")}
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="mx-auto max-w-4xl relative"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 dark:from-primary/10 dark:to-secondary/10 blur-3xl opacity-50 rounded-full" />
        <div className="relative glass-card p-8 md:p-10 rounded-[2.5rem] border border-white/20 dark:border-white/10 overflow-hidden group flex flex-col md:flex-row items-center gap-8 shadow-2xl">
          <div className="absolute -right-20 -top-20 w-64 h-64 bg-primary/10 dark:bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/20 transition-colors duration-700 pointer-events-none" />
          
          <div className="w-24 h-24 rounded-3xl dark:bg-surface-container bg-white shadow-xl flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 z-10 border border-black/5 dark:border-white/5">
            <GraduationCap className="w-12 h-12 text-primary drop-shadow-md" />
          </div>
          
          <div className="text-center md:text-left flex-1 z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-wider uppercase mb-4">
              <Award className="w-4 h-4" />
              <span>{t("title")}</span>
            </div>
            <h4 className="font-headline text-3xl md:text-4xl font-bold dark:text-white text-gray-900 mb-2">
              {t("university")}
            </h4>
            <p className="dark:text-on-surface-variant text-gray-600 font-medium text-lg md:text-xl mb-6">
              {t("degree")}
            </p>
            
            <div className="inline-flex flex-col sm:flex-row items-center gap-3 px-5 py-3 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10 backdrop-blur-sm">
              <span className="text-xl hidden sm:block">🎓</span>
              <span className="text-sm md:text-base font-medium dark:text-gray-300 text-gray-700">
                Final Project: <span className="font-bold dark:text-white text-gray-900">{t("badge")}</span>
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
