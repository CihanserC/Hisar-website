import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

import { LanguageProvider } from './i18n/LanguageContext';
import type { Page } from './types/page';

import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';

import { HomePage } from './pages/HomePage';
import { MenuPage } from './pages/MenuPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { LegalNoticePage } from './pages/LegalNoticePage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import heroVideo from './assets/videos/website-hisar.mp4';
import aboutHeroBgWebp from './assets/about-us/about-us-top.webp';

export default function App() {
  const [page, setPage] = useState<Page>('home');

  useEffect(() => {
    const videoLink = document.createElement('link');
    videoLink.rel = 'preload';
    videoLink.as = 'video';
    videoLink.href = heroVideo;
    videoLink.type = 'video/mp4';
    document.head.appendChild(videoLink);

    const aboutHeroLink = document.createElement('link');
    aboutHeroLink.rel = 'preload';
    aboutHeroLink.as = 'image';
    aboutHeroLink.href = aboutHeroBgWebp;
    aboutHeroLink.type = 'image/webp';
    document.head.appendChild(aboutHeroLink);

    return () => {
      document.head.removeChild(videoLink);
      document.head.removeChild(aboutHeroLink);
    };
  }, []);

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [page]);

  return (
    <LanguageProvider>
      <div className="min-h-screen flex flex-col">
        <Navbar currentPage={page} setPage={setPage} />

        <main className="flex-grow">
          <AnimatePresence mode="wait">
            {page === 'home' && (
              <motion.div key="home" initial={{ opacity: 1 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <HomePage setPage={setPage} />
              </motion.div>
            )}
            {page === 'menu' && (
              <motion.div key="menu" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <MenuPage />
              </motion.div>
            )}
            {page === 'about' && (
              <motion.div key="about" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <AboutPage />
              </motion.div>
            )}
            {page === 'contact' && (
              <motion.div
                key="contact"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <ContactPage />
              </motion.div>
            )}
            {page === 'legal' && (
              <motion.div
                key="legal"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <LegalNoticePage />
              </motion.div>
            )}
            {page === 'privacy' && (
              <motion.div
                key="privacy"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <PrivacyPolicyPage />
              </motion.div>
            )}
          </AnimatePresence>
        </main>

        <Footer setPage={setPage} />
      </div>
    </LanguageProvider>
  );
}

