import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu as MenuIcon, X } from 'lucide-react';

import hisarLogo from '../assets/hisar-logo.png';
import type { Page } from '../types/page';
import { useLanguage } from '../i18n/LanguageContext';
import { t } from '../i18n/translations';
import { LanguageSelector } from './LanguageSelector';

export function Navbar({
  currentPage,
  setPage,
}: {
  currentPage: Page;
  setPage: (p: Page) => void;
}) {
  const { language } = useLanguage();

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: { label: string; id: Page }[] = [
    { label: t(language, 'nav.menu'), id: 'menu' },
    { label: t(language, 'nav.about'), id: 'about' },
    { label: t(language, 'nav.contact'), id: 'contact' },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? 'glass-nav py-4 shadow-sm' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <div
          onClick={() => setPage('home')}
          className="flex items-center gap-4 text-2xl font-black text-primary tracking-tighter font-headline cursor-pointer"
        >
          <img src={hisarLogo} alt="Hisar logo" className="h-10 w-auto" />
          <span>HISAR BACKHAUS</span>
        </div>

        <div className="hidden md:flex items-center gap-x-10 font-headline font-bold tracking-tight text-lg">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => setPage(link.id)}
              className={`transition-all duration-300 relative group ${
                currentPage === link.id
                  ? 'text-tertiary'
                  : 'text-primary opacity-80 hover:opacity-100 hover:text-tertiary'
              }`}
            >
              {link.label}
              {currentPage === link.id && (
                <motion.div
                  layoutId="navUnderline"
                  className="absolute -bottom-1 left-0 w-full h-0.5 bg-tertiary"
                />
              )}
            </button>
          ))}

          <LanguageSelector />
        </div>

        <button
          className="md:hidden text-primary"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <MenuIcon />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-surface shadow-xl p-8 flex flex-col gap-6 md:hidden"
          >
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => {
                  setPage(link.id);
                  setIsMobileMenuOpen(false);
                }}
                className={`text-2xl font-headline font-bold text-left ${
                  currentPage === link.id ? 'text-tertiary' : 'text-primary'
                }`}
              >
                {link.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

