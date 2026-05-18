import { useMemo, useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useInView } from 'motion/react';
import { Search, X, ChevronRight, Utensils } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { menuData, allergenColors, badgeConfig, type MenuCategory, type MenuItem } from '../data/menuData';
import type { Language } from '../i18n/languages';
import foodDough from '../assets/foods/jpg/IMG_7590.jpg';
import foodAcmaTray from '../assets/foods/jpg/IMG_7593.jpg';
import foodBorekSlice from '../assets/foods/jpg/IMG_7594.jpg';
import foodCroissant from '../assets/foods/jpg/IMG_7595.jpg';
import foodBaklavaTray from '../assets/foods/jpg/IMG_7596.jpg';
import foodRoundPastry from '../assets/foods/jpg/IMG_7598.jpg';
import foodSimit from '../assets/foods/jpg/IMG_7599.jpg';
import foodPogaca from '../assets/foods/jpg/IMG_7601.jpg';
import foodSesamePastry from '../assets/foods/jpg/IMG_7603.jpg';
import foodBorekTray from '../assets/foods/jpg/IMG_7609.jpg';
import foodCroissantStack from '../assets/foods/jpg/IMG_7610.jpg';
import foodPizzaPide from '../assets/foods/jpg/IMG_7611.jpg';
import foodBaklavaPiece from '../assets/foods/jpg/IMG_7612.jpg';
import foodAcmaLong from '../assets/foods/jpg/IMG_7613.jpg';
import foodTwistPastry from '../assets/foods/jpg/IMG_7646.jpg';
import foodMixedRolls from '../assets/foods/jpg/IMG_7647.jpg';
import foodSweetPastry from '../assets/foods/jpg/IMG_7648.jpg';
import foodAssortedPastry from '../assets/foods/jpg/IMG_7649.jpg';
import foodBaklavaLarge from '../assets/foods/jpg/IMG_7653.jpg';
import foodSandwich from '../assets/foods/jpg/IMG_7656.jpg';
import foodPideLong from '../assets/foods/jpg/IMG_7657.jpg';
import foodSeededBread from '../assets/foods/jpg/IMG_7658.jpg';
import foodCroissantCase from '../assets/foods/jpg/IMG_7660.jpg';
import foodPastryCase from '../assets/foods/jpg/IMG_7923.jpg';
import foodBreadBasket from '../assets/foods/jpg/IMG_7924.jpg';
import foodCookie from '../assets/foods/jpg/IMG_7991.jpg';

const fallbackFoodImages = [foodAcmaTray, foodMixedRolls, foodAssortedPastry, foodCroissantCase];

const categoryFoodImages: Record<string, string[]> = {
  acma: [foodAcmaTray, foodAcmaLong, foodTwistPastry, foodMixedRolls],
  'pizza-pide': [foodPizzaPide, foodPideLong],
  borek: [foodBorekSlice, foodBorekTray],
  gozleme: [foodPideLong, foodPizzaPide, foodDough],
  'simit-corek': [foodSimit, foodSeededBread, foodSesamePastry, foodTwistPastry],
  'pogaca-orme': [foodPogaca, foodRoundPastry, foodAssortedPastry, foodMixedRolls],
  brot: [foodBreadBasket, foodSeededBread, foodDough],
  'belegte-brote': [foodSandwich],
  tatlilar: [foodBaklavaTray, foodBaklavaPiece, foodBaklavaLarge],
  'susses-gebäck': [foodSweetPastry, foodCookie, foodCroissant, foodCroissantStack, foodCroissantCase, foodPastryCase],
};

function getFoodImage(categoryId: string, item: MenuItem, index: number) {
  const itemName = item.name.toLowerCase();

  if (itemName.includes('pizza')) return foodPizzaPide;
  if (itemName.includes('pide')) return foodPideLong;
  if (itemName.includes('simit')) return foodSimit;
  if (itemName.includes('baklava')) return foodBaklavaPiece;
  if (itemName.includes('ekler') || itemName.includes('kuchen') || itemName.includes('hörnchen')) return foodSweetPastry;
  if (itemName.includes('somun') || itemName.includes('baguette') || itemName.includes('ekmek')) return foodBreadBasket;
  if (itemName.includes('belegtes')) return foodSandwich;

  const pool = categoryFoodImages[categoryId] ?? fallbackFoodImages;
  return pool[index % pool.length];
}

const pageCopy = {
  DE: {
    eyebrow: 'Hisar Backhaus Menü',
    title: 'Anatolische Spezialitäten',
    subtitle: 'Frisch gebacken. Handgemacht. Direkt aus unserer Backstube.',
    intro:
      'Entdecken Sie unsere Auswahl ohne Online-Bestellung. Tippen Sie auf ein Produkt, um Zutaten und Allergene zu sehen.',
    all: 'Alle',
    search: 'Suchen',
    close: 'Schließen',
    searchPlaceholder: 'Produkt oder Zutat suchen...',
    ingredients: 'Zutaten',
    allergens: 'Allergene',
    showDetails: 'Zutaten anzeigen',
    hideDetails: 'Zutaten ausblenden',
    noIngredients: 'Zutateninformationen folgen in Kürze.',
    noResults: 'Keine Produkte gefunden',
    clearSearch: 'Suche löschen',
    noShopping: 'Nur Speisekarte',
    tapHint: 'Zum Öffnen antippen',
    allergenNoteTitle: 'Hinweis zu Allergenen',
    allergenNote:
      'Alle Produkte werden in einer Küche hergestellt, in der Gluten, Milch, Eier, Sesam und Nüsse verwendet werden. Bitte fragen Sie unser Team bei Unverträglichkeiten.',
  },
  EN: {
    eyebrow: 'Hisar Backhaus Menu',
    title: 'Anatolian Specialties',
    subtitle: 'Freshly baked. Handmade. Straight from our bakery.',
    intro:
      'Explore our selection without online ordering. Tap any product to view ingredients and allergens.',
    all: 'All',
    search: 'Search',
    close: 'Close',
    searchPlaceholder: 'Search product or ingredient...',
    ingredients: 'Ingredients',
    allergens: 'Allergens',
    showDetails: 'Show ingredients',
    hideDetails: 'Hide ingredients',
    noIngredients: 'Ingredient information coming soon.',
    noResults: 'No products found',
    clearSearch: 'Clear search',
    noShopping: 'Menu only',
    tapHint: 'Tap to open',
    allergenNoteTitle: 'Allergen note',
    allergenNote:
      'All products are made in a kitchen where gluten, milk, eggs, sesame and nuts are used. Please ask our team if you have intolerances.',
  },
} satisfies Record<Language, Record<string, string>>;

function categoryName(cat: MenuCategory, lang: Language) {
  return cat.name[lang] ?? cat.name.DE;
}

function categoryDesc(cat: MenuCategory, lang: Language) {
  return cat.description[lang] ?? cat.description.DE;
}

// ── sub-components ────────────────────────────────────────────────────────────

function AllergenIcon({ label }: { label: string }) {
  const commonProps = {
    className: 'h-3.5 w-3.5 flex-shrink-0',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.8,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    'aria-hidden': true,
  };

  switch (label) {
    case 'Gluten':
      return (
        <svg {...commonProps}>
          <path d="M12 21V4" />
          <path d="M8 8c-2.4.4-4 2-4 4.4 2.8 0 4.3-1.5 4-4.4Z" />
          <path d="M16 8c2.4.4 4 2 4 4.4-2.8 0-4.3-1.5-4-4.4Z" />
          <path d="M8 14c-2.2.4-3.6 1.9-3.6 4 2.5 0 3.9-1.4 3.6-4Z" />
          <path d="M16 14c2.2.4 3.6 1.9 3.6 4-2.5 0-3.9-1.4-3.6-4Z" />
        </svg>
      );
    case 'Milch':
      return (
        <svg {...commonProps}>
          <path d="M9 3h6" />
          <path d="M10 3v4l-2 2v10a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V9l-2-2V3" />
          <path d="M8 13h8" />
        </svg>
      );
    case 'Ei':
      return (
        <svg {...commonProps}>
          <path d="M12 21c4 0 7-3.1 7-7.4C19 8.5 15.6 3 12 3s-7 5.5-7 10.6C5 17.9 8 21 12 21Z" />
        </svg>
      );
    case 'Sesam':
      return (
        <svg {...commonProps}>
          <path d="M7.5 15.5c-1.7-2.9-1-6.1 2-8.8 2.9 3.9 2.2 6.9-2 8.8Z" />
          <path d="M16.5 8.5c1.7 2.9 1 6.1-2 8.8-2.9-3.9-2.2-6.9 2-8.8Z" />
        </svg>
      );
    case 'Fisch':
      return (
        <svg {...commonProps}>
          <path d="M3 12s3.2-5 8.4-5c3.7 0 6.4 2.2 8.6 5-2.2 2.8-4.9 5-8.6 5C6.2 17 3 12 3 12Z" />
          <path d="m20 8-3.5 4L20 16" />
          <path d="M8.5 12h.01" />
        </svg>
      );
    case 'Nüsse':
      return (
        <svg {...commonProps}>
          <path d="M12 21c4.2-2 7-5.2 7-9.4C19 7.5 16.1 4 12 3 7.9 4 5 7.5 5 11.6 5 15.8 7.8 19 12 21Z" />
          <path d="M9 8.5c1.7 1 4.3 1 6 0" />
        </svg>
      );
    case 'Soja':
      return (
        <svg {...commonProps}>
          <path d="M8 19c3.7-1 5.8-3.9 5.2-7.5C9.7 11.1 7.2 13.4 8 19Z" />
          <path d="M14 12c3.4-.8 5.3-3.4 4.7-6.7-3.2-.4-5.5 1.7-4.7 6.7Z" />
          <path d="M7 20c3.8-5.3 6.9-9 11-14" />
        </svg>
      );
    case 'Sonnenblumenkerne':
      return (
        <svg {...commonProps}>
          <path d="M12 21c2.4-2.4 3.6-5.1 3.6-8.1S14.2 6.8 12 3c-2.2 3.8-3.6 6.9-3.6 9.9S9.6 18.6 12 21Z" />
          <path d="M12 7v10" />
        </svg>
      );
    default:
      return (
        <svg {...commonProps}>
          <circle cx="12" cy="12" r="7" />
        </svg>
      );
  }
}

function AllergenChip({ label }: { label: string }) {
  const cls = allergenColors[label] ?? 'bg-gray-100 text-gray-700 border-gray-300';
  return (
    <span className={`inline-flex items-center gap-1.5 text-[11px] font-semibold px-2.5 py-1 rounded-full border ${cls}`}>
      <AllergenIcon label={label} />
      {label}
    </span>
  );
}

function BadgeChip({ type }: { type: keyof typeof badgeConfig }) {
  const cfg = badgeConfig[type];
  return (
    <span className={`inline-flex items-center text-[10px] font-bold px-2.5 py-1 rounded-full ${cfg.className}`}>
      {cfg.label}
    </span>
  );
}

function MenuItemCard({
  item,
  index,
  imageSrc,
  copy,
}: {
  item: MenuItem;
  index: number;
  imageSrc: string;
  copy: typeof pageCopy.DE;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const detailsId = `menu-item-${item.name.toLowerCase().replace(/[^a-z0-9]+/gi, '-')}`;

  return (
    <motion.button
      type="button"
      aria-expanded={isOpen}
      aria-controls={detailsId}
      onClick={() => setIsOpen((value) => !value)}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay: index * 0.04, ease: 'easeOut' }}
      whileHover={{ y: -4, boxShadow: '0 22px 50px -24px rgba(81,51,22,0.45)' }}
      className="group text-left bg-white rounded-[1.6rem] border border-outline-variant/50 overflow-hidden transition-colors hover:border-tertiary/40 focus:outline-none focus:ring-2 focus:ring-tertiary/40"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-surface-container">
        <img
          src={imageSrc}
          alt={item.name}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/5 to-transparent" />
        <div className="absolute left-4 top-4">
          {item.badge && <BadgeChip type={item.badge} />}
        </div>
        <div className="absolute bottom-4 left-4 right-4">
          <p className="text-[10px] uppercase tracking-[0.24em] text-white/75 font-bold">{copy.tapHint}</p>
          <h3 className="font-headline text-2xl font-black text-white leading-tight drop-shadow-sm">
            {item.name}
          </h3>
        </div>
      </div>

      <div className="p-5">
        <div className="flex items-center justify-between gap-3">
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-tertiary">
            <Utensils size={14} />
            {copy.noShopping}
          </span>
          <ChevronRight
            size={18}
            className={`text-primary transition-transform duration-300 ${isOpen ? 'rotate-90' : ''}`}
          />
        </div>

        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              id={detailsId}
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="overflow-hidden"
            >
              <div className="mt-5 border-t border-outline-variant/40 pt-5">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary mb-2">
                  {copy.ingredients}
                </p>
                <p className="text-sm leading-relaxed text-on-surface-variant">
                  {item.ingredients || copy.noIngredients}
                </p>

                {item.allergens.length > 0 && (
                  <div className="mt-4">
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary mb-2">
                      {copy.allergens}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {item.allergens.map((a) => (
                        <AllergenChip key={a} label={a} />
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <p className="mt-4 text-sm font-bold text-primary group-hover:text-tertiary transition-colors">
          {isOpen ? copy.hideDetails : copy.showDetails}
        </p>
      </div>
    </motion.button>
  );
}

function CategorySection({
  cat,
  lang,
  copy,
}: {
  cat: MenuCategory;
  lang: Language;
  copy: typeof pageCopy.DE;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px 0px' });

  return (
    <section id={cat.id} ref={ref} className="scroll-mt-40">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="mb-8"
      >
        <div>
          <div className={`inline-flex items-center px-5 py-3 rounded-2xl border mb-5 ${cat.bgColor}`}>
            <div>
              <h2 className={`font-headline text-4xl md:text-5xl font-black leading-none ${cat.color}`}>
                {categoryName(cat, lang)}
              </h2>
            </div>
          </div>
          <p className="text-on-surface-variant text-base max-w-2xl leading-relaxed">{categoryDesc(cat, lang)}</p>
        </div>
      </motion.div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {cat.items.map((item, i) => (
          <MenuItemCard
            key={item.name}
            item={item}
            index={i}
            imageSrc={getFoodImage(cat.id, item, i)}
            copy={copy}
          />
        ))}
      </div>
    </section>
  );
}

// ── main page ─────────────────────────────────────────────────────────────────

export function MenuPage() {
  const { language } = useLanguage();
  const copy = pageCopy[language];
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [showSearch, setShowSearch] = useState(false);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const navRef = useRef<HTMLDivElement>(null);

  // Focus search on open
  useEffect(() => {
    if (showSearch) searchInputRef.current?.focus();
  }, [showSearch]);

  const filteredData = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    return menuData
      .filter((cat) => activeCategory === 'all' || cat.id === activeCategory)
      .map((cat) => ({
        ...cat,
        items: query
          ? cat.items.filter(
              (item) =>
                item.name.toLowerCase().includes(query) ||
                item.ingredients?.toLowerCase().includes(query),
            )
          : cat.items,
      }))
      .filter((cat) => cat.items.length > 0);
  }, [activeCategory, searchQuery]);

  function scrollToSection(id: string) {
    if (id === 'all') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="relative min-h-[620px] overflow-hidden bg-primary pt-36 md:pt-44">
        <div className="absolute inset-0">
          <img src={foodAssortedPastry} alt="" className="h-full w-full object-cover opacity-45" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-primary/70 to-background" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 md:px-12 pb-24">
          <motion.h1
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            className="font-headline text-5xl md:text-8xl font-black tracking-tighter text-white mt-8 mb-6 leading-none max-w-4xl"
          >
            {copy.title}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="max-w-3xl"
          >
            <p className="font-headline text-2xl md:text-3xl italic text-white/90 mb-5">{copy.subtitle}</p>
            <p className="text-base md:text-lg text-white/75 leading-relaxed">{copy.intro}</p>
          </motion.div>
        </div>
      </header>

      <div
        ref={navRef}
        className="sticky top-0 md:top-24 z-30 bg-background/90 backdrop-blur-xl border-b border-outline-variant/30"
      >
        <div className="max-w-7xl mx-auto px-4 md:px-10 py-4">
          <div className="rounded-[1.75rem] border border-outline-variant/40 bg-white/90 p-3 shadow-xl shadow-primary/5">
            <div className="flex flex-wrap items-center gap-2">
              <CategoryPill
                label={copy.all}
                active={activeCategory === 'all'}
                onClick={() => { setActiveCategory('all'); scrollToSection('all'); }}
              />
              {menuData.map((cat) => (
                <CategoryPill
                  key={cat.id}
                  label={categoryName(cat, language)}
                  active={activeCategory === cat.id}
                  onClick={() => { setActiveCategory(cat.id); scrollToSection(cat.id); }}
                />
              ))}
            </div>

            <div className="mt-3 flex justify-start">
              <motion.button
                type="button"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                onClick={() => setShowSearch((v) => !v)}
                className="flex items-center gap-2 px-4 py-2 rounded-full border border-outline-variant bg-background text-on-surface-variant hover:border-primary hover:text-primary transition-colors text-sm font-bold"
              >
                {showSearch ? <X size={15} /> : <Search size={15} />}
                {showSearch ? copy.close : copy.search}
              </motion.button>
            </div>

            <AnimatePresence>
              {showSearch && (
                <motion.div
                  key="searchbar"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  className="overflow-hidden"
                >
                  <div className="relative mt-3">
                    <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant" />
                    <input
                      ref={searchInputRef}
                      type="text"
                      value={searchQuery}
                      onChange={(e) => { setSearchQuery(e.target.value); setActiveCategory('all'); }}
                      placeholder={copy.searchPlaceholder}
                      className="w-full pl-11 pr-11 py-3 rounded-2xl border border-outline-variant bg-background focus:outline-none focus:border-primary/60 text-sm text-on-surface shadow-sm"
                    />
                    {searchQuery && (
                      <button
                        type="button"
                        onClick={() => setSearchQuery('')}
                        aria-label={copy.clearSearch}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-on-surface-variant hover:text-primary"
                      >
                        <X size={15} />
                      </button>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-6 md:px-12 py-16 space-y-24">
        <AnimatePresence>
          {filteredData.length === 0 && (
            <motion.div
              key="noresults"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className="text-center py-24"
            >
              <p className="text-xl font-headline font-bold text-primary mb-2">
                {copy.noResults}
              </p>
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-tertiary hover:underline"
              >
                <X size={14} />
                {copy.clearSearch}
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {filteredData.map((cat) => (
          <CategorySection
            key={cat.id}
            cat={cat}
            lang={language}
            copy={copy}
          />
        ))}


      </main>
    </div>
  );
}

// ── CategoryPill ──────────────────────────────────────────────────────────────

function CategoryPill({
  label, active, onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <motion.button
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.96 }}
      onClick={onClick}
      className={`flex-shrink-0 flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold transition-all duration-200 border ${
        active
          ? 'bg-primary text-white border-primary shadow-md'
          : 'bg-white text-on-surface-variant border-outline-variant hover:border-primary/50 hover:text-primary'
      }`}
    >
      <span className="max-w-[150px] truncate">{label}</span>
      {active && <ChevronRight size={13} className="opacity-70" />}
    </motion.button>
  );
}
