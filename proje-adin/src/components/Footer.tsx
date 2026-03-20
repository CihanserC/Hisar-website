import { useLanguage } from '../i18n/LanguageContext';
import { t } from '../i18n/translations';
import type { Page } from '../types/page';
import { Facebook, Mail, Phone } from 'lucide-react';

export function Footer({
  setPage,
}: {
  setPage: (p: Page) => void;
}) {
  const { language } = useLanguage();
  const currentYear = new Date().getFullYear();
  const copyrightText = t(language, 'footer.copyright').replace(/\b20\d{2}\b/, String(currentYear));

  return (
    <footer className="bg-primary-container text-background w-full">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16 px-12 py-24">
        <div className="space-y-8">
          <div className="font-headline text-2xl font-black tracking-tighter">
            HISAR BACKHAUS
          </div>
          <p className="text-sm leading-relaxed opacity-80 max-w-xs">
            {t(language, 'footer.tagline')}
          </p>
          <div className="flex gap-6">
            <a
              href="https://www.facebook.com/HisarBackHaus/"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Facebook"
              className="opacity-60 hover:opacity-100 transition-opacity"
            >
              <Facebook className="w-5 h-5 cursor-pointer" />
            </a>
          </div>
        </div>

        <div className="space-y-8">
          <h4 className="font-bold text-sm tracking-widest uppercase opacity-60">
            {t(language, 'footer.locationsTitle')}
          </h4>
          <ul className="text-sm space-y-4">
            <li className="opacity-80">{t(language, 'footer.billstedtLine')}</li>
            <li className="opacity-80">{t(language, 'footer.stGeorgLine')}</li>
            <li className="opacity-80">{t(language, 'footer.altonaLine')}</li>
          </ul>
        </div>

        <div className="space-y-8">
          <h4 className="font-bold text-sm tracking-widest uppercase opacity-60">
            {t(language, 'footer.contactTitle')}
          </h4>
          <ul className="text-sm space-y-4">
            <li className="opacity-80 flex items-center gap-3">
              <Phone className="w-4 h-4" /> 040 73673650
            </li>
            <li className="opacity-80 flex items-center gap-3">
              <Mail className="w-4 h-4" /> info@hisar-backhaus.com
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

      <div className="border-t border-white/10 py-10 text-center">
        <p className="text-xs opacity-40">{copyrightText}</p>
      </div>
    </footer>
  );
}

