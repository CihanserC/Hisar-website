import { motion, useInView } from 'motion/react';
import { useRef } from 'react';

import { useLanguage } from '../i18n/LanguageContext';
import { t } from '../i18n/translations';

import foodBorekSlice from '../assets/foods/jpg/IMG_7594.jpg';
import foodCroissantStack from '../assets/foods/jpg/IMG_7610.jpg';
import foodAssortedPastry from '../assets/foods/jpg/IMG_7649.jpg';
import foodBaklavaTray from '../assets/foods/jpg/IMG_7596.jpg';


function StatCard({
  number,
  label,
  delay,
}: {
  number: string;
  label: string;
  delay: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay, ease: 'easeOut' }}
      className="flex flex-col items-center gap-2 py-10 px-6"
    >
      <span className="font-headline text-6xl font-black text-primary leading-none">{number}</span>
      <span className="text-sm font-bold uppercase tracking-[0.22em] text-on-surface-variant text-center">{label}</span>
    </motion.div>
  );
}

function ValueCard({
  title,
  text,
  index,
  accent,
}: {
  title: string;
  text: string;
  index: number;
  accent: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }}
      className={`relative overflow-hidden rounded-3xl p-10 ${accent}`}
    >
      <span className="absolute -right-4 -top-6 font-headline text-[8rem] font-black leading-none opacity-[0.06] select-none pointer-events-none text-current">
        {String(index + 1).padStart(2, '0')}
      </span>
      <h3 className="font-headline text-2xl font-black mb-4 leading-tight">{title}</h3>
      <p className="text-base leading-relaxed opacity-80">{text}</p>
    </motion.div>
  );
}

export function AboutPage() {
  const { language } = useLanguage();

  const stats = [
    { number: t(language, 'about.stat1.number'), label: t(language, 'about.stat1.label') },
    { number: t(language, 'about.stat2.number'), label: t(language, 'about.stat2.label') },
    { number: t(language, 'about.stat3.number'), label: t(language, 'about.stat3.label') },
  ];

  const values = [
    {
      title: t(language, 'about.value1.title'),
      text: t(language, 'about.value1.text'),
      accent: 'bg-primary text-white',
    },
    {
      title: t(language, 'about.value2.title'),
      text: t(language, 'about.value2.text'),
      accent: 'bg-surface-container-high text-on-surface',
    },
    {
      title: t(language, 'about.value3.title'),
      text: t(language, 'about.value3.text'),
      accent: 'bg-tertiary/10 text-tertiary',
    },
  ];

  const galleryRef = useRef<HTMLDivElement>(null);
  const galleryInView = useInView(galleryRef, { once: true, margin: '-80px' });

  const storyRef = useRef<HTMLDivElement>(null);
  const storyInView = useInView(storyRef, { once: true, margin: '-80px' });

  return (
    <div className="bg-background">
      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="relative min-h-[70vh] overflow-hidden pt-28 md:pt-32">
        <div className="absolute inset-0 z-0">
          <img
            className="h-full w-full object-cover"
            src="https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=1920"
            alt=""
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/30" />
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
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.16 }}
            className="mt-10 max-w-2xl space-y-5"
          >
            <p className="text-lg leading-relaxed text-white/90">{t(language, 'about.body.p1')}</p>
            <p className="text-lg leading-relaxed text-white/80">{t(language, 'about.body.p2')}</p>
            <p className="text-lg leading-relaxed text-white/80">{t(language, 'about.body.p3')}</p>
            <p className="text-lg leading-relaxed text-white/80">{t(language, 'about.body.p4')}</p>
          </motion.div>
        </div>
      </section>


      {/* ── Story + Gallery ──────────────────────────────── */}
      <section className="bg-surface px-6 py-24 md:px-12 md:py-32">
        <div className="mx-auto max-w-7xl">

          {/* Eyebrow + heading */}
          <motion.div
            ref={storyRef}
            initial={{ opacity: 0, y: 24 }}
            animate={storyInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, ease: 'easeOut' }}
            className="mb-16"
          >
            <h2 className="font-headline text-4xl font-black leading-tight text-primary md:text-6xl max-w-3xl">
              {t(language, 'about.section.heading')}
            </h2>
          </motion.div>

          {/* Two-column: text + image collage */}
          <div className="grid grid-cols-1 gap-16 md:grid-cols-2 md:gap-20 items-start">
            {/* Pillars */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={storyInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
              className="space-y-6"
            >
              {(
                [
                  ['about.pillar1.title', 'about.pillar1.text'],
                  ['about.pillar2.title', 'about.pillar2.text'],
                  ['about.pillar3.title', 'about.pillar3.text'],
                ] as const
              ).map(([titleKey, textKey], i) => (
                <div key={titleKey} className="flex gap-5 items-start">
                  <div>
                    <h3 className="font-headline text-xl font-black text-primary mb-1">
                      {t(language, titleKey)}
                    </h3>
                    <p className="text-base leading-relaxed text-on-surface-variant">
                      {t(language, textKey)}
                    </p>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Image collage */}
            <motion.div
              ref={galleryRef}
              initial={{ opacity: 0, x: 30 }}
              animate={galleryInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
              className="grid grid-cols-2 gap-3 md:gap-4"
            >
              <img
                src={foodBorekSlice}
                alt=""
                className="col-span-2 h-56 w-full rounded-2xl object-cover md:h-64"
              />
              <img
                src={foodCroissantStack}
                alt=""
                className="h-40 w-full rounded-2xl object-cover md:h-48"
              />
              <img
                src={foodBaklavaTray}
                alt=""
                className="h-40 w-full rounded-2xl object-cover md:h-48"
              />
            </motion.div>
          </div>
        </div>
      </section>


    </div>
  );
}
