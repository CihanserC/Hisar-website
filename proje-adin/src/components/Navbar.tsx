import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu as MenuIcon, X } from 'lucide-react';

import hisarLogo from '../assets/logo/hisar-logo.png';
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
    if (currentPage === 'contact') {
      setIsScrolled(false);
      return;
    }

    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentPage]);

  const navLinks: { label: string; id: Page }[] = [
    { label: t(language, 'nav.menu'), id: 'menu' },
    { label: t(language, 'nav.about'), id: 'about' },
    { label: t(language, 'nav.contact'), id: 'contact' },
  ];

  /** Contact page: no scroll shrink/glass. Other pages: transparent until scrolled. */
  const navScrolled = isScrolled && currentPage !== 'contact';
  const navTransparent = !navScrolled;
  const navOnContact = currentPage === 'contact';
  const navOnDarkHero = navTransparent && !navOnContact;

  const navClassName = navOnContact
    ? 'bg-background py-9 shadow-sm border-b border-outline-variant/30'
    : navScrolled
      ? 'glass-nav py-6 shadow-sm'
      : 'bg-transparent py-9';

  return (
    <nav
      className={`${navOnContact ? 'absolute' : 'fixed'} top-0 w-full z-50 ${navOnContact ? '' : 'transition-all duration-500'} ${navClassName}`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center relative min-h-[4.25rem] md:min-h-[4.75rem]">
        <div
          onClick={() => setPage('home')}
          className="flex items-center cursor-pointer"
        >
          <img src={hisarLogo} alt="Hisar logo" className="h-20 md:h-24 w-auto" />
        </div>

        <div
          className={`hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center gap-x-8 md:gap-x-12 font-nav font-light uppercase tracking-[0.16em] md:tracking-[0.2em] text-lg md:text-xl ${
            navOnDarkHero ? 'drop-shadow-[0_1px_2px_rgba(0,0,0,0.45)]' : ''
          }`}
        >
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => setPage(link.id)}
              className={`transition-all duration-300 relative group hover:text-[#d40304] ${
                currentPage === link.id
                  ? navOnContact
                    ? 'text-tertiary font-normal'
                    : navOnDarkHero
                      ? 'text-white font-normal'
                      : 'text-black font-normal'
                  : navOnContact
                    ? 'text-tertiary/80'
                    : navOnDarkHero
                      ? 'text-white/85'
                      : 'text-black/80'
              }`}
            >
              {link.label}
              {currentPage === link.id && (
                <motion.div
                  layoutId="navUnderline"
                  className={`absolute -bottom-1 left-0 w-full h-px ${
                    navOnContact ? 'bg-tertiary' : navOnDarkHero ? 'bg-white' : 'bg-black'
                  }`}
                />
              )}
            </button>
          ))}
        </div>

        <div className="hidden md:block absolute right-4 top-1/2 -translate-y-1/2">
          <LanguageSelector onDark={navOnDarkHero} />
        </div>

        <button
          className={`md:hidden ${
            navOnContact ? 'text-tertiary' : navOnDarkHero ? 'text-white drop-shadow-md' : 'text-black'
          }`}
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
                className={`text-4xl font-nav font-light uppercase tracking-[0.12em] text-left ${
                  currentPage === link.id ? 'text-tertiary font-normal' : 'text-primary'
                }`}
              >
                {link.label}
              </button>
            ))}
            <div className="pt-4 border-t border-outline-variant/30">
              <LanguageSelector />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

