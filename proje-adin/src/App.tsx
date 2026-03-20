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

export default function App() {
  const [page, setPage] = useState<Page>('home');

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
              <motion.div key="home" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
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
          </AnimatePresence>
        </main>

        <Footer setPage={setPage} />
      </div>
    </LanguageProvider>
  );
}

