import { motion } from 'motion/react';
import { ArrowRight, ChevronDown, Clock, MapPin } from 'lucide-react';
import type { Page } from '../types/page';
import { useLanguage } from '../i18n/LanguageContext';
import { t } from '../i18n/translations';

export function HomePage({ setPage }: { setPage: (p: Page) => void }) {
  const { language } = useLanguage();

  return (
    <>
      {/* Hero */}
      <header className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&q=80&w=1920"
            alt="Fresh Croissants"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
        <div className="relative z-10 text-center px-6">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-body text-sm tracking-[0.4em] text-white mb-6 uppercase font-bold"
          >
            {t(language, 'home.estHamburg')}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="font-headline text-7xl md:text-9xl font-black text-white tracking-tighter mb-8 leading-tight"
          >
            HISAR <br /> BACKHAUS
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="font-headline italic text-2xl md:text-4xl text-white/90 mb-12 max-w-2xl mx-auto"
          >
            {t(language, 'home.artisanBakeryCafe')}
          </motion.p>
          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8 }}
            onClick={() => setPage('menu')}
            className="btn-primary"
          >
            {t(language, 'home.viewOurMenu')}
          </motion.button>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white animate-bounce">
          <ChevronDown size={40} />
        </div>
      </header>

      {/* Story Section */}
      <section className="py-32 px-6 md:px-24 bg-surface overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-20 items-center">
          <div className="md:col-span-5 relative">
            <div className="absolute -top-12 -left-12 w-48 h-48 bg-primary/5 rounded-full blur-3xl"></div>
            <img
              className="w-full aspect-[4/5] object-cover rounded-lg shadow-2xl relative z-10 grayscale hover:grayscale-0 transition-all duration-1000"
              src="https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=800"
              alt="Baker at work"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -bottom-8 -right-8 w-64 h-64 border-4 border-primary/10 rounded-lg -z-0"></div>
          </div>
          <div className="md:col-span-7 space-y-10">
            <h2 className="font-headline text-5xl md:text-7xl text-primary font-bold leading-tight">
              {t(language, 'home.storySoul')} <br />
              <span className="italic text-tertiary">{t(language, 'home.storyFreshBaking')}</span>
            </h2>
            <p className="text-xl text-on-surface-variant leading-relaxed max-w-xl">
              {t(language, 'home.storyParagraph1')}
            </p>
            <p className="text-lg text-on-surface-variant/80 italic border-l-4 border-tertiary pl-8 py-2">
              {t(language, 'home.storyQuote')}
            </p>
            <button
              onClick={() => setPage('about')}
              className="inline-flex items-center gap-4 text-primary font-bold text-xl hover:gap-6 transition-all group"
            >
              {t(language, 'home.readFullStory')}{' '}
              <ArrowRight className="group-hover:text-tertiary" />
            </button>
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="py-32 px-6 md:px-12 bg-surface-container-low">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div>
              <span className="font-body text-tertiary font-bold tracking-widest uppercase text-sm">
                {t(language, 'locations.visitUs')}
              </span>
              <h2 className="font-headline text-5xl text-primary font-black mt-4">
                {t(language, 'locations.hearthHome')}
              </h2>
            </div>
            <p className="max-w-md text-on-surface-variant">{t(language, 'locations.intro')}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                name: 'Billstedt',
                addr: t(language, 'locations.billstedt.addr'),
                hours: t(language, 'locations.billstedt.hours'),
                img: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=600',
              },
              {
                name: 'St. Georg',
                addr: t(language, 'locations.stGeorg.addr'),
                hours: t(language, 'locations.stGeorg.hours'),
                img: 'https://images.unsplash.com/photo-1559925393-8be0ec418cd9?auto=format&fit=crop&q=80&w=600',
              },
              {
                name: 'Altona',
                addr: t(language, 'locations.altona.addr'),
                hours: t(language, 'locations.altona.hours'),
                img: 'https://images.unsplash.com/photo-1521017432531-fbd92d744264?auto=format&fit=crop&q=80&w=600',
              },
            ].map((loc, i) => (
              <div
                key={i}
                className="group bg-white rounded-2xl overflow-hidden editorial-shadow transition-all hover:-translate-y-2"
              >
                <div className="h-72 overflow-hidden relative">
                  <img
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    src={loc.img}
                    alt={loc.name}
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 text-white font-headline font-bold text-3xl">
                    {loc.name}
                  </div>
                </div>
                <div className="p-10 space-y-6">
                  <div className="flex items-start gap-4 text-on-surface-variant">
                    <MapPin className="text-tertiary shrink-0" size={20} />
                    <span>{loc.addr}</span>
                  </div>
                  <div className="flex items-start gap-4 text-on-surface-variant">
                    <Clock className="text-tertiary shrink-0" size={20} />
                    <span>{loc.hours}</span>
                  </div>
                  <button className="w-full mt-6 py-4 border border-outline-variant rounded-xl font-bold text-primary hover:bg-primary hover:text-white transition-all">
                    {t(language, 'locations.getDirections')}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Highlights */}
      <section className="py-32 bg-surface">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="mb-24 text-center max-w-3xl mx-auto">
            <span className="font-body text-tertiary font-bold tracking-widest uppercase">
              {t(language, 'menuHighlights.selection')}
            </span>
            <h2 className="font-headline text-6xl md:text-8xl text-primary font-black mt-6 tracking-tighter">
              {t(language, 'menuHighlights.bakedWithHeart')}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-8 h-auto md:h-[1000px]">
            <div className="md:col-span-2 md:row-span-2 relative group overflow-hidden rounded-3xl">
              <img
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                src="https://images.unsplash.com/photo-1585478259715-876acc5be8eb?auto=format&fit=crop&q=80&w=1200"
                alt="Sourdough"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
              <div className="absolute bottom-12 left-12 text-white">
                <p className="uppercase tracking-widest text-sm mb-4 opacity-80 font-bold">
                  {t(language, 'menuHighlights.signatureLabel')}
                </p>
                <h3 className="font-headline text-6xl font-bold">
                  {t(language, 'menuHighlights.signatureTitle')}
                </h3>
                <p className="mt-6 max-w-xs opacity-90 text-lg">{t(language, 'menuHighlights.signatureDesc')}</p>
                <button
                  onClick={() => setPage('menu')}
                  className="mt-10 bg-white text-primary px-10 py-4 rounded-full font-bold hover:bg-background transition-colors"
                >
                  {t(language, 'menuHighlights.exploreBakery')}
                </button>
              </div>
            </div>

            <div className="md:col-span-2 md:row-span-1 relative group overflow-hidden rounded-3xl">
              <img
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                src="https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&q=80&w=1200"
                alt="Pastries"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors"></div>
              <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-8">
                <h3 className="font-headline text-5xl text-white font-bold">
                  {t(language, 'menuHighlights.pastriesTitle')}
                </h3>
                <p className="text-white mt-4 opacity-90 text-xl">
                  {t(language, 'menuHighlights.pastriesDesc')}
                </p>
              </div>
            </div>

            <div className="md:col-span-1 md:row-span-1 relative group overflow-hidden rounded-3xl">
              <img
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=600"
                alt="Coffee"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/10 transition-colors"></div>
              <div className="absolute bottom-8 left-8 text-white">
                <h3 className="font-headline text-3xl font-bold">
                  {t(language, 'menuHighlights.specialtyBrewsTitle')}
                </h3>
              </div>
            </div>

            <div className="md:col-span-1 md:row-span-1 relative group overflow-hidden rounded-3xl">
              <img
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                src="https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=600"
                alt="Savory"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-tertiary/20 group-hover:bg-tertiary/10 transition-colors"></div>
              <div className="absolute bottom-8 left-8 text-white">
                <h3 className="font-headline text-3xl font-bold">
                  {t(language, 'menuHighlights.savoryPlatesTitle')}
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

