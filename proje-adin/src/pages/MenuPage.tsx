import { useLanguage } from '../i18n/LanguageContext';
import { t } from '../i18n/translations';

export function MenuPage() {
  const { language } = useLanguage();

  return (
    <div className="pt-20">
      <header className="px-6 md:px-12 py-24 max-w-7xl mx-auto">
        <span className="text-tertiary font-bold tracking-[0.2em] uppercase text-sm">
          {t(language, 'menuPage.artisanalSelection')}
        </span>
        <h1 className="font-headline text-6xl md:text-8xl font-black tracking-tighter text-primary mt-6 mb-10">
          {t(language, 'menuPage.dailyLine1')} <br />
          <span className="text-tertiary">{t(language, 'menuPage.dailyLine2')}</span>
        </h1>
        <p className="text-xl text-on-surface-variant max-w-2xl leading-relaxed">
          {t(language, 'menuPage.description')}
        </p>
      </header>

      <section className="px-6 md:px-12 pb-32">
        <div className="max-w-7xl mx-auto space-y-24">
          {[
            {
              title: t(language, 'menuPage.breads.title'),
              desc: t(language, 'menuPage.breads.desc'),
              items: [
                {
                  name: t(language, 'menuPage.breads.countrySourdough.name'),
                  price: '€6.50',
                  desc: t(language, 'menuPage.breads.countrySourdough.desc'),
                },
                {
                  name: t(language, 'menuPage.breads.oliveRosemary.name'),
                  price: '€7.20',
                  desc: t(language, 'menuPage.breads.oliveRosemary.desc'),
                },
                {
                  name: t(language, 'menuPage.breads.walnutRye.name'),
                  price: '€6.80',
                  desc: t(language, 'menuPage.breads.walnutRye.desc'),
                },
              ],
              img: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=800',
            },
            {
              title: t(language, 'menuPage.pastries.title'),
              desc: t(language, 'menuPage.pastries.desc'),
              items: [
                {
                  name: t(language, 'menuPage.pastries.classicCroissant.name'),
                  price: '€3.20',
                  desc: t(language, 'menuPage.pastries.classicCroissant.desc'),
                },
                {
                  name: t(language, 'menuPage.pastries.painAuChocolat.name'),
                  price: '€3.80',
                  desc: t(language, 'menuPage.pastries.painAuChocolat.desc'),
                },
                {
                  name: t(language, 'menuPage.pastries.almondDanish.name'),
                  price: '€4.20',
                  desc: t(language, 'menuPage.pastries.almondDanish.desc'),
                },
              ],
              img: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&q=80&w=800',
            },
          ].map((cat, i) => (
            <div
              key={i}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${
                i % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                <img
                  className="w-full aspect-[4/3] object-cover rounded-2xl shadow-xl"
                  src={cat.img}
                  alt={cat.title}
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="space-y-10">
                <h2 className="font-headline text-5xl font-bold text-primary">{cat.title}</h2>
                <p className="text-on-surface-variant text-lg">{cat.desc}</p>
                <div className="space-y-8">
                  {cat.items.map((item, j) => (
                    <div key={j} className="flex justify-between items-start group">
                      <div>
                        <h3 className="font-headline text-2xl font-bold text-primary group-hover:text-tertiary transition-colors">
                          {item.name}
                        </h3>
                        <p className="text-on-surface-variant mt-1">{item.desc}</p>
                      </div>
                      <span className="font-headline text-xl font-bold text-primary">{item.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

