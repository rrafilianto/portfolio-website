'use client';

import { motion } from 'framer-motion';
import { Mail, UserPlus, Terminal, Phone } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function Contact() {
  const t = useTranslations('contact');

  const contactCards = [
    {
      titleKey: 'whatsapp',
      handle: '+62 857 2305 6463',
      href: 'https://wa.me/6285723056463',
      icon: <Phone className="w-8 h-8" />,
      hoverBorder:
        'hover:border-emerald-500/40 dark:hover:border-emerald-400/40',
      hoverText:
        'group-hover:text-emerald-600 dark:group-hover:text-emerald-400',
      glowBg: 'bg-emerald-500/20 dark:bg-emerald-400/20',
      iconBg:
        'bg-emerald-500/10 text-emerald-600 dark:bg-emerald-400/20 dark:text-emerald-400',
    },
    {
      titleKey: 'emailMe',
      handle: 'ryanrafilianto@gmail.com',
      href: 'mailto:ryanrafilianto@gmail.com',
      icon: <Mail className="w-8 h-8" />,
      hoverBorder: 'hover:border-primary/40',
      hoverText: 'group-hover:text-primary',
      glowBg: 'bg-primary/20',
      iconBg: 'bg-primary/20 text-primary',
    },
    {
      titleKey: 'linkedin',
      handle: 'linkedin.com/in/ryan-rafilianto',
      href: 'https://linkedin.com/in/ryan-rafilianto',
      icon: <UserPlus className="w-8 h-8" />,
      hoverBorder: 'hover:border-secondary/40',
      hoverText: 'group-hover:text-secondary',
      glowBg: 'bg-secondary/20',
      iconBg: 'bg-secondary/20 text-secondary',
    },
    {
      titleKey: 'github',
      handle: 'github.com/rrafilianto',
      href: 'https://github.com/rrafilianto',
      icon: <Terminal className="w-8 h-8" />,
      hoverBorder: 'hover:border-tertiary/40',
      hoverText: 'group-hover:text-tertiary',
      glowBg: 'bg-tertiary/20',
      iconBg: 'bg-tertiary/20 text-tertiary',
    },
  ];

  return (
    <section className="py-24 px-6 max-w-6xl mx-auto" id="contact">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.8 }}
        className="glass-card rounded-[3rem] overflow-hidden flex flex-col shadow-[0_32px_64px_rgba(0,0,0,0.5)] dark:shadow-[0_32px_64px_rgba(0,0,0,0.5)] shadow-[0_32px_64px_rgba(0,0,0,0.1)]"
      >
        <div className="p-12 md:p-20 w-full flex flex-col items-center text-center bg-gradient-to-br from-primary/5 via-transparent to-secondary/5">
          <div className="max-w-4xl w-full">
            <h2 className="font-headline text-4xl md:text-5xl font-bold mb-6 gradient-text bg-gradient-to-r dark:from-white dark:to-white/60 from-gray-900 to-gray-900/60">
              {t('title')}
            </h2>
            <p className="dark:text-on-surface-variant text-gray-500 text-lg md:text-xl mb-16">
              {t('subtitle')}
            </p>

            {/* Contact Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
              {contactCards.map((card, index) => (
                <motion.a
                  key={card.titleKey}
                  href={card.href}
                  target={card.href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`group relative p-8 rounded-3xl dark:bg-white/5 bg-black/5 border dark:border-white/10 border-black/10 ${card.hoverBorder} dark:hover:bg-white/10 hover:bg-black/5 transition-all duration-500 flex flex-col items-center gap-4 shadow-xl`}
                >
                  <div
                    className={`absolute inset-0 ${card.glowBg} blur-2xl opacity-0 group-hover:opacity-40 transition-opacity rounded-full`}
                  />
                  <div
                    className={`relative w-16 h-16 rounded-2xl ${card.iconBg} flex items-center justify-center mb-2`}
                  >
                    {card.icon}
                  </div>
                  <span
                    className={`relative font-bold dark:text-white text-gray-900 ${card.hoverText} transition-colors`}
                  >
                    {t(card.titleKey)}
                  </span>
                  <span className="relative text-xs dark:text-on-surface-variant text-gray-500">
                    {card.handle}
                  </span>
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
