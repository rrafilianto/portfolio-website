"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const experienceConfig: { id: number; side: "left" | "right"; color: "primary" | "secondary"; opacity: string }[] = [
  { id: 1, side: "left", color: "primary", opacity: "opacity-100" },
  { id: 2, side: "right", color: "secondary", opacity: "opacity-80" },
  { id: 3, side: "left", color: "primary", opacity: "opacity-60" },
  { id: 4, side: "right", color: "secondary", opacity: "opacity-40" },
];

export default function Experience() {
  const t = useTranslations("experience");

  return (
    <section className="py-24 px-6 max-w-5xl mx-auto" id="experience">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="font-headline text-3xl md:text-4xl font-bold mb-16 text-center"
      >
        {t("title")}
      </motion.h2>

      <div className="relative space-y-12">
        {/* Timeline center line */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-primary/50 via-secondary/30 to-transparent transform -translate-x-1/2" />

        {experienceConfig.map((exp, index) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            className="relative flex flex-col md:flex-row items-start md:items-center"
          >
            {exp.side === "left" ? (
              <>
                <div className="hidden md:block w-1/2 pr-12 text-right">
                  <span className="dark:text-on-surface-variant text-gray-500 font-headline text-lg italic">
                    {t(`items.${exp.id}.period`)}
                  </span>
                </div>
                <div
                  className={`absolute left-4 md:left-1/2 w-4 h-4 rounded-full transform -translate-x-1/2 z-10 border-4 dark:border-surface border-white ${exp.opacity} ${
                    exp.color === "primary"
                      ? "bg-primary shadow-[0_0_15px_rgba(186,158,255,1)]"
                      : "bg-secondary"
                  }`}
                />
                <div className="w-full md:w-1/2 md:pl-12 pl-12">
                  <span className="md:hidden dark:text-on-surface-variant text-gray-500 font-headline text-sm italic mb-1 block">
                    {t(`items.${exp.id}.period`)}
                  </span>
                  <h3 className="text-xl font-bold dark:text-white text-gray-900">
                    {t(`items.${exp.id}.title`)}
                  </h3>
                  <p className={`font-medium mb-2 ${exp.color === "primary" ? "text-primary" : "text-secondary"}`}>
                    {t(`items.${exp.id}.company`)}
                  </p>
                  <div className="dark:text-on-surface-variant text-gray-500 text-sm leading-relaxed">
                    <ul className="space-y-1.5 flex flex-col items-start w-full">
                      {(t.raw(`items.${exp.id}.description`) as string[]).map((point, i) => (
                        <li key={i} className="flex gap-3 items-start text-left">
                          <span className="text-lg leading-none shrink-0 mt-0.5">•</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="w-full md:w-1/2 md:pr-12 md:text-right order-2 md:order-1 pl-12 md:pl-0">
                  <span className="md:hidden dark:text-on-surface-variant text-gray-500 font-headline text-sm italic mb-1 block">
                    {t(`items.${exp.id}.period`)}
                  </span>
                  <h3 className="text-xl font-bold dark:text-white text-gray-900">
                    {t(`items.${exp.id}.title`)}
                  </h3>
                  <p className={`font-medium mb-2 ${exp.color === "primary" ? "text-primary" : "text-secondary"}`}>
                    {t(`items.${exp.id}.company`)}
                  </p>
                  <div className="dark:text-on-surface-variant text-gray-500 text-sm leading-relaxed">
                    <ul className="space-y-1.5 flex flex-col items-start md:items-end w-full">
                      {(t.raw(`items.${exp.id}.description`) as string[]).map((point, i) => (
                        <li key={i} className="flex md:flex-row-reverse gap-3 items-start md:text-right text-left">
                          <span className="text-lg leading-none shrink-0 mt-0.5 md:hidden">•</span>
                          <span className="text-lg leading-none shrink-0 mt-0.5 hidden md:block">•</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div
                  className={`absolute left-4 md:left-1/2 w-4 h-4 rounded-full transform -translate-x-1/2 z-10 border-4 dark:border-surface border-white ${exp.opacity} ${
                    exp.color === "primary" ? "bg-primary" : "bg-secondary"
                  }`}
                />
                <div className="hidden md:block w-1/2 pl-12 order-2">
                  <span className="dark:text-on-surface-variant text-gray-500 font-headline text-lg italic">
                    {t(`items.${exp.id}.period`)}
                  </span>
                </div>
              </>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
