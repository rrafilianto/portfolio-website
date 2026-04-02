"use client";

import { motion } from "framer-motion";
import { Globe, Code, Smartphone, Server, Database } from "lucide-react";
import { useTranslations } from "next-intl";
import { skillCategories } from "@/data/skills";

const iconMap: Record<string, React.ReactNode> = {
  Globe: <Globe className="w-10 h-10" />,
  Code: <Code className="w-10 h-10" />,
  Smartphone: <Smartphone className="w-10 h-10" />,
  Server: <Server className="w-10 h-10" />,
  Database: <Database className="w-10 h-10" />,
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
    <section className="py-24 px-6 max-w-6xl mx-auto" id="skills">
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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
            <ul className="space-y-4 mt-6">
              {category.skills.map((skill) => (
                <li key={skill.name} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/50 dark:bg-white/5 flex items-center justify-center border border-black/5 dark:border-white/10 shadow-sm p-2">
                    <img 
                      src={skill.icon} 
                      alt={`${skill.name} logo`} 
                      className={`w-full h-full object-contain drop-shadow-sm ${skill.invertDark ? 'dark:invert' : ''}`}
                      loading="lazy"
                    />
                  </div>
                  <span className="font-bold text-gray-800 dark:text-gray-200 text-lg">
                    {skill.name}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

    </section>
  );
}
