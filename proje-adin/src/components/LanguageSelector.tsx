import { useLanguage } from '../i18n/LanguageContext';
import { languages } from '../i18n/languages';

export function LanguageSelector() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-4 ml-4 text-sm opacity-60">
      {languages.map((l) => (
        <button
          key={l}
          onClick={() => setLanguage(l)}
          className={`transition-colors cursor-pointer ${
            language === l ? 'text-tertiary font-bold' : 'hover:text-tertiary'
          }`}
        >
          {l}
        </button>
      ))}
    </div>
  );
}

