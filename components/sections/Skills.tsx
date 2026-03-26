"use client";

import { motion } from "framer-motion";
import { Globe, Code, Smartphone, GraduationCap, Award } from "lucide-react";
import { useTranslations } from "next-intl";
import { skillCategories } from "@/data/skills";

const iconMap: Record<string, React.ReactNode> = {
  Globe: <Globe className="w-10 h-10" />,
  Code: <Code className="w-10 h-10" />,
  Smartphone: <Smartphone className="w-10 h-10" />,
};

const colorMap = {
  primary: {
    text: "text-primary",
    glow: "bg-primary/10 group-hover:bg-primary/20",
  },
  secondary: {
    text: "text-secondary",
    glow: "bg-secondary/10 group-hover:bg-secondary/20",
  },
  tertiary: {
    text: "text-tertiary",
    glow: "bg-tertiary/10 group-hover:bg-tertiary/20",
  },
};

export default function Skills() {
  const t = useTranslations("skills");

  return (
    <section className="py-24 px-6 max-w-6xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="font-headline text-3xl md:text-4xl font-bold mb-16 text-center"
      >
        {t("title")}
      </motion.h2>

      {/* Skill Categories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {skillCategories.map((category, index) => (
          <motion.div
            key={category.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            className="glass-card p-8 rounded-3xl relative overflow-hidden group"
          >
            <div
              className={`absolute -right-8 -top-8 w-24 h-24 rounded-full blur-2xl transition-all ${
                colorMap[category.color].glow
              }`}
            />
            <div className={`${colorMap[category.color].text} mb-6`}>
              {iconMap[category.icon]}
            </div>
            <h3 className="font-headline text-xl font-bold mb-4">
              {category.title}
            </h3>
            <ul className="space-y-2 dark:text-on-surface-variant text-gray-500">
              {category.skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      {/* Education Card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-16 mx-auto max-w-4xl relative"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 dark:from-primary/10 dark:to-secondary/10 blur-3xl opacity-50 rounded-full" />
        <div className="relative glass-card p-8 md:p-10 rounded-[2.5rem] border border-white/20 dark:border-white/10 overflow-hidden group flex flex-col md:flex-row items-center gap-8 shadow-2xl">
          {/* Decorative background circle */}
          <div className="absolute -right-20 -top-20 w-64 h-64 bg-primary/10 dark:bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/20 transition-colors duration-700 pointer-events-none" />
          
          <div className="w-24 h-24 rounded-3xl dark:bg-surface-container bg-white shadow-xl flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 z-10 border border-black/5 dark:border-white/5">
            <GraduationCap className="w-12 h-12 text-primary drop-shadow-md" />
          </div>
          
          <div className="text-center md:text-left flex-1 z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-wider uppercase mb-4">
              <Award className="w-4 h-4" />
              <span>{t("education.title")}</span>
            </div>
            <h4 className="font-headline text-3xl md:text-4xl font-bold dark:text-white text-gray-900 mb-2">
              {t("education.university")}
            </h4>
            <p className="dark:text-on-surface-variant text-gray-600 font-medium text-lg md:text-xl mb-6">
              {t("education.degree")}
            </p>
            
            <div className="inline-flex flex-col sm:flex-row items-center gap-3 px-5 py-3 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10 backdrop-blur-sm">
              <span className="text-xl hidden sm:block">🎓</span>
              <span className="text-sm md:text-base font-medium dark:text-gray-300 text-gray-700">
                Final Project: <span className="font-bold dark:text-white text-gray-900">{t("education.badge")}</span>
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
