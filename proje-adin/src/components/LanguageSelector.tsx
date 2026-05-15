import { useLanguage } from '../i18n/LanguageContext';
import { languages } from '../i18n/languages';

type LanguageSelectorProps = {
  /** Light text for dark backgrounds (e.g. home hero under transparent nav). */
  onDark?: boolean;
};

export function LanguageSelector({ onDark = false }: LanguageSelectorProps) {
  const { language, setLanguage } = useLanguage();

  return (
    <div
      className={`flex items-center gap-4 text-sm md:text-base font-nav font-light uppercase tracking-[0.18em] ${
        onDark ? 'text-white/70' : 'text-on-surface/70'
      }`}
    >
      {languages.map((l) => (
        <button
          key={l}
          onClick={() => setLanguage(l)}
          className={`transition-colors cursor-pointer drop-shadow-sm ${
            language === l
              ? onDark
                ? 'text-white font-normal'
                : 'text-tertiary font-normal'
              : onDark
                ? 'hover:text-white'
                : 'hover:text-tertiary'
          }`}
        >
          {l}
        </button>
      ))}
    </div>
  );
}

