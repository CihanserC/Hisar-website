import { Leaf, Hand, Timer } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { t } from '../i18n/translations';

export function AboutPage() {
  const { language } = useLanguage();

  return (
    <div className="pt-20">
      <section className="relative h-[80vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1517433367423-c7e5b0f35086?auto=format&fit=crop&q=80&w=1920"
            alt="Bakery Tradition"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-surface/80"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-12 grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div>
            <span className="inline-block px-4 py-1 mb-6 text-xs font-bold tracking-[0.2em] uppercase bg-primary text-white rounded-full">
              {t(language, 'about.est1982')}
            </span>
            <h1 className="font-headline text-6xl md:text-8xl font-black text-primary leading-tight mb-8">
              {t(language, 'about.hearthTitle1')} <br /> {t(language, 'about.hearthTitle2')}
            </h1>
            <p className="text-xl text-on-surface-variant leading-relaxed">{t(language, 'about.storyParagraph1')}</p>
          </div>
          <div className="hidden md:block">
            <img
              className="rounded-2xl shadow-2xl aspect-[4/5] object-cover"
              src="https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=800"
              alt="Tradition"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </section>

      <section className="py-32 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { title: t(language, 'about.rawReal.title'), icon: <Leaf />, text: t(language, 'about.rawReal.text') },
              { title: t(language, 'about.handcraftedSoul.title'), icon: <Hand />, text: t(language, 'about.handcraftedSoul.text') },
              { title: t(language, 'about.freshnessFirst.title'), icon: <Timer />, text: t(language, 'about.freshnessFirst.text') },
            ].map((feat, i) => (
              <div key={i} className="bg-white p-12 rounded-2xl editorial-shadow space-y-6">
                <div className="w-16 h-16 rounded-full bg-surface-container flex items-center justify-center text-tertiary">
                  {feat.icon}
                </div>
                <h3 className="font-headline text-3xl font-bold text-primary">{feat.title}</h3>
                <p className="text-on-surface-variant leading-relaxed">{feat.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

