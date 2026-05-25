import { useLanguage } from '../i18n/LanguageContext';
import { t } from '../i18n/translations';
import type { Page } from '../types/page';
import { Mail, Phone } from 'lucide-react';
import bMark from '../assets/logo/B-white.png';

function InstagramBrandIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
    </svg>
  );
}

function FacebookBrandIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M24 12.073C24 5.446 18.627.073 12 .073S0 5.446 0 12.073c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function TikTokBrandIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-5.201 1.743 2.895 2.895 0 0 1 3.183-4.51v-3.5a6.329 6.329 0 0 0-5.394 10.692 6.33 6.33 0 0 0 10.857-4.424V8.687a8.182 8.182 0 0 0 4.773 1.526V6.79a4.831 4.831 0 0 1-1.003-.104z" />
    </svg>
  );
}

export function Footer({
  setPage,
}: {
  setPage: (p: Page) => void;
}) {
  const { language } = useLanguage();
  const currentYear = new Date().getFullYear();
  const copyrightText = t(language, 'footer.copyright').replace(/\b20\d{2}\b/, String(currentYear));

  return (
    <footer className="bg-[#7a0d0e] text-background w-full relative overflow-hidden">
      <img
        src={bMark}
        alt=""
        aria-hidden="true"
        className="pointer-events-none select-none absolute right-0 md:right-10 lg:right-16 top-1/2 -translate-y-1/2 w-40 sm:w-64 md:w-80 lg:w-96 opacity-10 sm:opacity-15 rotate-[11deg]"
      />
      <div className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 page-x-padding py-8 sm:py-10 md:py-12">
        <div className="space-y-4">
          <h4 className="font-extrabold text-base tracking-widest uppercase">
            {t(language, 'footer.locationsTitle')}
          </h4>
          <ul className="text-base sm:text-lg space-y-2 sm:space-y-3">
            <li className="opacity-80">{t(language, 'footer.billstedtLine')}</li>
            <li className="opacity-80">{t(language, 'footer.stGeorgLine')}</li>
            <li className="opacity-80">{t(language, 'footer.altonaLine')}</li>
          </ul>
        </div>

        <div className="space-y-4">
          <h4 className="font-extrabold text-base tracking-widest uppercase">
            {t(language, 'footer.contactTitle')}
          </h4>
          <ul className="text-base sm:text-lg space-y-2 sm:space-y-3">
            <li className="opacity-80 flex items-center gap-3">
              <Phone className="w-5 h-5" /> 040 73673650
            </li>
            <li className="opacity-80 flex items-center gap-3">
              <Mail className="w-5 h-5" /> info@hisarbackhaus.de
            </li>
            <li>
              <button
                onClick={() => setPage('contact')}
                className="underline font-semibold opacity-100 hover:text-white transition-colors"
              >
                {t(language, 'footer.getInTouch')}
              </button>
            </li>
          </ul>
        </div>
      </div>

      <div className="relative border-t border-white/10 py-6">
        <div className="flex items-center justify-center gap-8 md:gap-10">
          <a
            href="https://www.instagram.com/hisar.backhaus"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Instagram"
            className="text-background/80 hover:text-background hover:scale-110 transition-all duration-200"
          >
            <InstagramBrandIcon className="w-6 h-6" />
          </a>
          <a
            href="https://www.facebook.com/HisarBackHaus/"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Facebook"
            className="text-background/80 hover:text-background hover:scale-110 transition-all duration-200"
          >
            <FacebookBrandIcon className="w-6 h-6" />
          </a>
          <a
            href="https://www.tiktok.com/@hisar_backhaus"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="TikTok"
            className="text-background/80 hover:text-background hover:scale-110 transition-all duration-200"
          >
            <TikTokBrandIcon className="w-6 h-6" />
          </a>
        </div>
        <p className="text-xs opacity-40 text-center mt-5 flex flex-wrap items-center justify-center gap-x-2 gap-y-1">
          <span>{copyrightText}</span>
          <span className="opacity-60" aria-hidden="true">
            ·
          </span>
          <button
            type="button"
            onClick={() => setPage('legal')}
            className="underline opacity-70 hover:opacity-100 hover:text-white transition-colors"
          >
            {t(language, 'footer.legalLink')}
          </button>
          <span className="opacity-60" aria-hidden="true">
            ·
          </span>
          <button
            type="button"
            onClick={() => setPage('privacy')}
            className="underline opacity-70 hover:opacity-100 hover:text-white transition-colors"
          >
            {t(language, 'footer.privacyLink')}
          </button>
        </p>
      </div>
    </footer>
  );
}

