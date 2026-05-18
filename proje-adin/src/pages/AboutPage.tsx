import { motion } from 'motion/react';
import { Hand, Leaf, Timer } from 'lucide-react';

import { useLanguage } from '../i18n/LanguageContext';
import { t } from '../i18n/translations';

export function AboutPage() {
  const { language } = useLanguage();

  const pillars = [
    { title: t(language, 'about.rawReal.title'), icon: <Leaf className="h-8 w-8" />, text: t(language, 'about.rawReal.text') },
    {
      title: t(language, 'about.handcraftedSoul.title'),
      icon: <Hand className="h-8 w-8" />,
      text: t(language, 'about.handcraftedSoul.text'),
    },
    {
      title: t(language, 'about.freshnessFirst.title'),
      icon: <Timer className="h-8 w-8" />,
      text: t(language, 'about.freshnessFirst.text'),
    },
  ];

  return (
    <div className="bg-background">
      <section className="relative min-h-[70vh] overflow-hidden pt-28 md:pt-32">
        <div className="absolute inset-0 z-0">
          <img
            className="h-full w-full object-cover"
            src="https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=1920"
            alt=""
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/55 to-black/35" />
        </div>
        <div className="relative z-10 mx-auto flex min-h-[70vh] max-w-7xl flex-col justify-center px-6 py-20 md:px-12 md:py-28">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08 }}
            className="mt-6 max-w-3xl font-headline text-5xl font-black leading-tight tracking-tighter text-white md:text-7xl md:leading-[1.05]"
          >
            {t(language, 'about.hearthTitle1')} <br />
            <span className="italic text-white/90">{t(language, 'about.hearthTitle2')}</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.16 }}
            className="mt-10 max-w-2xl text-xl leading-relaxed text-white/85"
          >
            {t(language, 'about.storyParagraph1')}
          </motion.p>
        </div>
      </section>

      <section className="border-t border-outline-variant/30 bg-surface px-6 py-24 md:px-12 md:py-32">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-3 md:gap-10">
          {pillars.map((item, i) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: i * 0.08 }}
              className="group rounded-2xl border border-outline-variant/40 bg-surface-container-low p-10 shadow-sm transition-shadow hover:shadow-lg text-center"
            >
              <h2 className="font-headline text-2xl font-bold text-primary md:text-3xl">{item.title}</h2>
              <p className="mt-4 text-on-surface-variant leading-relaxed">{item.text}</p>
            </motion.article>
          ))}
        </div>
      </section>
    </div>
  );
}
