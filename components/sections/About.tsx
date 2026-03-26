"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function About() {
  const t = useTranslations("about");

  return (
    <section className="py-24 px-6 max-w-3xl mx-auto text-center" id="about">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="font-headline text-sm uppercase tracking-[0.3em] text-primary mb-6">
          {t("label")}
        </h2>
        <p className="text-2xl md:text-3xl font-light leading-snug dark:text-on-surface text-gray-800">
          {t.rich("text", {
            highlight: (chunks) => (
              <span className="text-primary font-semibold">{chunks}</span>
            ),
          })}
        </p>
        <div className="mt-12 flex justify-center">
          <div className="w-12 h-[2px] bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
        </div>
      </motion.div>
    </section>
  );
}
