'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

export default function Hero() {
  const t = useTranslations('hero');

  return (
    <section className="relative min-h-[calc(100vh-6rem)] flex flex-col justify-center items-center text-center max-w-4xl mx-auto px-6 py-20 pb-32">
      {/* Profile Image — entry animation only, no infinite loops */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="relative mb-12"
      >
        {/* Glow — pure CSS, reduced blur for mobile */}
        <div className="absolute inset-0 bg-primary blur-[40px] md:blur-[60px] opacity-20 rounded-full animate-cosmic-pulse" />

        {/* Floating Decorative Elements — CSS-only animations */}
        <div className="absolute -top-6 -right-6 w-12 h-12 bg-white/10 dark:bg-primary/20 backdrop-blur-md rounded-full border border-black/10 dark:border-primary/30 flex items-center justify-center shadow-lg shadow-primary/5 dark:shadow-primary/20 z-10 animate-float-slow">
          <span className="text-xl">✨</span>
        </div>

        <div className="absolute -bottom-4 -left-8 w-14 h-14 bg-white/10 dark:bg-secondary/20 backdrop-blur-md rounded-2xl border border-black/10 dark:border-secondary/30 flex items-center justify-center shadow-lg shadow-secondary/5 dark:shadow-secondary/20 z-10 rotate-12 animate-float-slow-reverse">
          <span className="text-sm font-bold text-secondary-container dark:text-secondary font-mono">
            {'</>'}
          </span>
        </div>

        {/* Main Avatar */}
        <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-[2.5rem] md:rounded-[3rem] border border-outline-variant/50 shadow-2xl bg-gradient-to-br from-primary/30 via-surface-container to-secondary/20 flex items-center justify-center overflow-hidden group rotate-3 hover:rotate-0 transition-transform duration-500">
          <Image
            src="/pp.png"
            alt="Ryan Rafilianto"
            fill
            sizes="(max-width: 768px) 192px, 224px"
            className="object-cover"
            priority
          />
        </div>
      </motion.div>

      {/* Name */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.15 }}
        className="font-headline text-5xl md:text-7xl font-bold tracking-tighter mb-6 gradient-text bg-gradient-to-b from-black dark:from-white to-black/60 dark:to-white/60"
      >
        Ryan Rafilianto
      </motion.h1>

      {/* Tagline */}
      <motion.p
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-xl md:text-2xl text-on-surface-variant dark:text-on-surface-variant text-gray-500 max-w-2xl font-light leading-relaxed mb-10"
      >
        {t('subtitle')}
      </motion.p>

      {/* CTA Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.45 }}
        className="flex flex-wrap justify-center gap-6"
      >
        <a
          href="#experience"
          className="px-8 py-4 bg-gradient-to-r from-violet-400 to-violet-600 dark:from-primary dark:to-primary-dim dark:text-on-primary text-white font-bold rounded-xl hover:shadow-[0_8px_25px_rgba(124,58,237,0.3)] dark:hover:shadow-[0_0_25px_rgba(186,158,255,0.4)] transition-all transform active:scale-95"
        >
          {t('viewExperience')}
        </a>
        <a
          href="#contact"
          className="px-8 py-4 border dark:border-outline-variant/30 border-black/10 dark:text-white text-gray-800 font-bold rounded-xl dark:hover:bg-white/5 hover:bg-black/5 transition-all transform active:scale-95 backdrop-blur-sm bg-white/40 dark:bg-transparent"
        >
          {t('contactMe')}
        </a>
      </motion.div>
    </section>
  );
}
