import { useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import type { Page } from '../types/page';
import { useLanguage } from '../i18n/LanguageContext';
import { t } from '../i18n/translations';
import heroVideo from '../assets/videos/website-hisar.mp4';
import highlightBread from '../assets/foods/jpg/IMG_7924.jpg';
import highlightPastries from '../assets/foods/jpg/IMG_7610.jpg';
import highlightCafe from '../assets/foods/jpg/IMG_7923.jpg';
import highlightSavory from '../assets/foods/jpg/IMG_7656.jpg';
import storyBaker from '../assets/foods/jpg/IMG_7924.jpg';

export function HomePage({ setPage }: { setPage: (p: Page) => void }) {
  const { language } = useLanguage();
  const heroVideoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = heroVideoRef.current;
    if (!video) return;

    const play = () => {
      void video.play().catch(() => {});
    };

    const restartFromStart = () => {
      video.currentTime = 0;
      play();
    };

    const onTimeUpdate = () => {
      if (Number.isFinite(video.duration) && video.currentTime >= video.duration - 0.05) {
        video.currentTime = 0;
      }
    };

    video.addEventListener('ended', restartFromStart);
    video.addEventListener('timeupdate', onTimeUpdate);
    video.addEventListener('canplay', play);

    video.load();
    play();

    return () => {
      video.removeEventListener('ended', restartFromStart);
      video.removeEventListener('timeupdate', onTimeUpdate);
      video.removeEventListener('canplay', play);
    };
  }, []);

  return (
    <>
      {/* Hero */}
      <header className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video
            ref={heroVideoRef}
            className="w-full h-full object-cover"
            src={heroVideo}
            preload="auto"
            autoPlay
            loop
            muted
            playsInline
            aria-hidden
          />
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
        <div className="relative z-10 text-center px-6">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="font-headline text-7xl md:text-9xl font-black text-white tracking-tighter mb-8 leading-none"
          >
            <span className="block">HISAR</span>
            <span className="block -mt-1 md:-mt-2">BACKHAUS</span>
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
        <button
          type="button"
          aria-label="Scroll down"
          onClick={() => window.scrollBy({ top: window.innerHeight, behavior: 'smooth' })}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white animate-bounce cursor-pointer"
        >
          <ChevronDown size={40} />
        </button>
      </header>

      <div className="font-playfair">
      {/* Story Section */}
      <section className="py-32 px-6 md:px-24 bg-surface overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-20 items-center">
          <div className="md:col-span-5 relative">
            <div className="absolute -top-12 -left-12 w-48 h-48 bg-primary/5 rounded-full blur-3xl"></div>
            <img
              className="w-full aspect-[4/5] object-cover rounded-lg relative z-10"
              src={storyBaker}
              alt="Fresh bread rolls with seeds at Hisar Backhaus"
            />
          </div>
          <div className="md:col-span-7 space-y-10">
            <h2 className="text-5xl md:text-7xl font-bold leading-tight">
              <span className="text-black">{t(language, 'home.storySoul')}</span>
              <br />
              <span className="italic text-tertiary">{t(language, 'home.storyFreshBaking')}</span>
            </h2>
            <p className="text-lg text-on-surface-variant/80 italic border-l-4 border-tertiary pl-8 py-2 max-w-xl">
              {t(language, 'home.storyTagline')}
            </p>
            <p className="text-xl text-on-surface-variant leading-relaxed max-w-xl">
              {t(language, 'home.storyParagraph1')}
            </p>
            <p className="text-xl text-on-surface-variant leading-relaxed max-w-xl">
              {t(language, 'home.storyParagraph2')}
            </p>
            <p className="text-xl text-on-surface-variant leading-relaxed max-w-xl">
              {t(language, 'home.storyParagraph3')}
            </p>
            <button
              type="button"
              onClick={() => setPage('about')}
              className="inline-flex items-center gap-4 text-primary font-bold text-xl transition-all hover:gap-6 group"
            >
              {t(language, 'home.readFullStory')}{' '}
              <ArrowRight className="group-hover:text-tertiary" />
            </button>
          </div>
        </div>
      </section>

      {/* Menu Highlights */}
      <section className="py-16 bg-surface">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="mb-12 text-center max-w-3xl mx-auto">
            <h2 className="text-5xl md:text-6xl text-[#7a0d0e] font-black mt-4 tracking-tighter">
              {t(language, 'menuHighlights.bakedWithHeart')}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-6 h-auto md:h-[680px]">
            <div className="md:col-span-2 md:row-span-2 relative group overflow-hidden rounded-3xl">
              <img
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                src={highlightBread}
                alt="Fresh bread selection"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
              <div className="absolute bottom-8 left-8 text-white">
                <p className="uppercase tracking-widest text-xs mb-3 opacity-80 font-bold">
                  {t(language, 'menuHighlights.signatureLabel')}
                </p>
                <h3 className="text-4xl font-bold">
                  {t(language, 'menuHighlights.signatureTitle')}
                </h3>
                <p className="mt-3 max-w-xs opacity-90 text-base">{t(language, 'menuHighlights.signatureDesc')}</p>
                <button
                  onClick={() => setPage('menu')}
                  className="mt-6 bg-white text-primary px-8 py-3 rounded-full font-bold hover:bg-background transition-colors"
                >
                  {t(language, 'menuHighlights.exploreBakery')}
                </button>
              </div>
            </div>

            <div className="md:col-span-2 md:row-span-1 relative group overflow-hidden rounded-3xl">
              <img
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                src={highlightPastries}
                alt="Fresh croissants"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors"></div>
              <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-8">
                <h3 className="text-3xl text-white font-bold">
                  {t(language, 'menuHighlights.pastriesTitle')}
                </h3>
                <p className="text-white mt-3 opacity-90 text-base">
                  {t(language, 'menuHighlights.pastriesDesc')}
                </p>
              </div>
            </div>

            <div className="md:col-span-1 md:row-span-1 relative group overflow-hidden rounded-3xl">
              <img
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                src={highlightCafe}
                alt="Chocolate croissants"
              />
              <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/10 transition-colors"></div>
              <div className="absolute bottom-8 left-8 text-white">
                <h3 className="text-3xl font-bold">
                  {t(language, 'menuHighlights.specialtyBrewsTitle')}
                </h3>
              </div>
            </div>

            <div className="md:col-span-1 md:row-span-1 relative group overflow-hidden rounded-3xl">
              <img
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                src={highlightSavory}
                alt="Savory pide and pastries"
              />
              <div className="absolute inset-0 bg-tertiary/20 group-hover:bg-tertiary/10 transition-colors"></div>
              <div className="absolute bottom-8 left-8 text-white">
                <h3 className="text-3xl font-bold">
                  {t(language, 'menuHighlights.savoryPlatesTitle')}
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>
      </div>
    </>
  );
}

