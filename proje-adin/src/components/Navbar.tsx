import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
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
    if (currentPage === 'contact' || currentPage === 'legal' || currentPage === 'privacy') {
      setIsScrolled(false);
      return;
    }

    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentPage]);

  useEffect(() => {
    if (!isMobileMenuOpen) return;

    const scrollY = window.scrollY;
    document.body.style.position = 'fixed';
    document.body.style.top = `-${scrollY}px`;
    document.body.style.left = '0';
    document.body.style.right = '0';
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.left = '';
      document.body.style.right = '';
      document.body.style.overflow = '';
      window.scrollTo(0, scrollY);
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [currentPage]);

  const navLinks: { label: string; id: Page }[] = [
    { label: t(language, 'nav.menu'), id: 'menu' },
    { label: t(language, 'nav.about'), id: 'about' },
    { label: t(language, 'nav.contact'), id: 'contact' },
  ];

  /** Contact/legal: fixed style, no scroll shrink. Other pages: transparent until scrolled. */
  const navOnContact = currentPage === 'contact';
  const navOnPrimaryBar = currentPage === 'legal' || currentPage === 'privacy';
  const navScrolled = isScrolled && !navOnContact && !navOnPrimaryBar;
  const navTransparent = !navScrolled;
  const navOnLightText = (navTransparent && !navOnContact) || navOnPrimaryBar;

  const navClassName = navOnPrimaryBar
    ? 'bg-primary py-4 sm:py-6 md:py-9 shadow-sm'
    : navOnContact
      ? 'bg-background py-4 sm:py-6 md:py-9 shadow-sm border-b border-outline-variant/30'
      : navScrolled
        ? 'glass-nav py-3 sm:py-4 md:py-6 shadow-sm'
        : 'bg-transparent py-4 sm:py-6 md:py-9';

  return (
    <>
    <nav
      className={`${navOnContact ? 'absolute' : 'fixed'} top-0 w-full z-50 ${navOnContact ? '' : 'transition-all duration-500'} ${navClassName}`}
    >
      <div className="max-w-7xl mx-auto page-x-padding flex justify-between items-center relative min-h-[3.5rem] sm:min-h-[4rem] md:min-h-[4.75rem]">
        <div
          onClick={() => {
            setPage('home');
            setIsMobileMenuOpen(false);
          }}
          className="flex items-center cursor-pointer shrink-0"
        >
          <img src={hisarLogo} alt="Hisar logo" className="h-14 sm:h-16 md:h-24 w-auto" />
        </div>

        <div
          className={`hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center gap-x-8 md:gap-x-12 font-nav font-light uppercase tracking-[0.16em] md:tracking-[0.2em] text-lg md:text-xl ${
            navOnLightText ? 'drop-shadow-[0_1px_2px_rgba(0,0,0,0.45)]' : ''
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
                    : navOnLightText
                      ? 'text-white font-normal'
                      : 'text-black font-normal'
                  : navOnContact
                    ? 'text-tertiary/80'
                    : navOnLightText
                      ? 'text-white/85'
                      : 'text-black/80'
              }`}
            >
              {link.label}
              {currentPage === link.id && (
                <motion.div
                  layoutId="navUnderline"
                  className={`absolute -bottom-1 left-0 w-full h-px ${
                    navOnContact ? 'bg-tertiary' : navOnLightText ? 'bg-white' : 'bg-black'
                  }`}
                />
              )}
            </button>
          ))}
        </div>

        <div className="hidden md:block absolute right-4 top-1/2 -translate-y-1/2">
          <LanguageSelector onDark={navOnLightText} />
        </div>

        <button
          type="button"
          aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMobileMenuOpen}
          className={`md:hidden p-2 -mr-2 ${
            navOnContact ? 'text-tertiary' : navOnLightText ? 'text-white drop-shadow-md' : 'text-black'
          }`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <MenuIcon size={28} />}
        </button>
      </div>
    </nav>

    {createPortal(
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.button
              type="button"
              aria-label="Close menu"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] bg-black/40 md:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ type: 'tween', duration: 0.25 }}
              className="fixed inset-y-0 right-0 z-[110] w-[min(100vw,20rem)] bg-surface shadow-2xl flex flex-col md:hidden pt-[max(1rem,env(safe-area-inset-top))] pb-[max(1.5rem,env(safe-area-inset-bottom))]"
            >
              <div className="flex items-center justify-between px-6 py-4 border-b border-outline-variant/30">
                <span className="font-nav text-xs font-light uppercase tracking-[0.2em] text-on-surface-variant">
                  Menu
                </span>
                <button
                  type="button"
                  aria-label="Close menu"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 -mr-2 text-primary"
                >
                  <X size={24} />
                </button>
              </div>
              <div className="flex flex-col gap-2 px-6 py-8 flex-1 overflow-y-auto">
                {navLinks.map((link) => (
                  <button
                    key={link.id}
                    onClick={() => {
                      setPage(link.id);
                      setIsMobileMenuOpen(false);
                    }}
                    className={`text-2xl sm:text-3xl font-nav font-light uppercase tracking-[0.12em] text-left py-3 border-b border-outline-variant/20 last:border-0 ${
                      currentPage === link.id ? 'text-tertiary font-normal' : 'text-primary'
                    }`}
                  >
                    {link.label}
                  </button>
                ))}
              </div>
              <div className="px-6 pt-4 border-t border-outline-variant/30">
                <LanguageSelector />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>,
      document.body,
    )}
    </>
  );
}

