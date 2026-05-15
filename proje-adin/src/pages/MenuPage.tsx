import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useInView } from 'motion/react';
import { Search, X, ChevronRight, Wheat, Flame, Leaf, Sparkles } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { t } from '../i18n/translations';
import { menuData, allergenColors, badgeConfig, type MenuCategory, type MenuItem } from '../data/menuData';
import type { Language } from '../i18n/languages';

// ── helpers ──────────────────────────────────────────────────────────────────

function categoryName(cat: MenuCategory, lang: Language) {
  return cat.name[lang] ?? cat.name.DE;
}

function categoryDesc(cat: MenuCategory, lang: Language) {
  return cat.description[lang] ?? cat.description.DE;
}

// ── sub-components ────────────────────────────────────────────────────────────

function AllergenChip({ label }: { label: string }) {
  const cls = allergenColors[label] ?? 'bg-gray-100 text-gray-700 border-gray-300';
  return (
    <span className={`inline-flex items-center gap-1 text-[10px] font-semibold px-2 py-0.5 rounded-full border ${cls}`}>
      {label === 'Gluten' && <Wheat size={9} />}
      {label === 'Milch' && '🥛'}
      {label === 'Ei' && '🥚'}
      {label === 'Sesam' && '🌾'}
      {label === 'Fisch' && '🐟'}
      {label === 'Nüsse' && '🌰'}
      {label === 'Soja' && '🫘'}
      {label}
    </span>
  );
}

function BadgeChip({ type }: { type: keyof typeof badgeConfig }) {
  const cfg = badgeConfig[type];
  return (
    <span className={`inline-flex items-center text-[10px] font-bold px-2 py-0.5 rounded-full ${cfg.className}`}>
      {cfg.label}
    </span>
  );
}

function MenuItemCard({ item, index }: { item: MenuItem; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay: index * 0.04, ease: 'easeOut' }}
      whileHover={{ y: -3, boxShadow: '0 12px 30px -8px rgba(81,51,22,0.15)' }}
      className="group relative bg-white rounded-2xl border border-outline-variant/50 p-5 flex flex-col gap-3 cursor-default transition-colors hover:border-primary/30"
    >
      {/* top row: name + badge */}
      <div className="flex items-start justify-between gap-2">
        <h3 className="font-headline text-base font-bold text-primary leading-snug group-hover:text-tertiary transition-colors">
          {item.name}
        </h3>
        {item.badge && <BadgeChip type={item.badge} />}
      </div>

      {/* ingredients */}
      {item.ingredients && (
        <p className="text-xs text-on-surface-variant leading-relaxed line-clamp-2">{item.ingredients}</p>
      )}

      {/* allergens */}
      {item.allergens.length > 0 && (
        <div className="flex flex-wrap gap-1 mt-auto pt-2 border-t border-outline-variant/30">
          {item.allergens.map((a) => (
            <AllergenChip key={a} label={a} />
          ))}
        </div>
      )}

      {/* subtle hover accent */}
      <motion.div
        className="absolute inset-0 rounded-2xl pointer-events-none"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.2 }}
        style={{
          background: 'linear-gradient(135deg, rgba(81,51,22,0.03) 0%, rgba(116,16,9,0.04) 100%)',
        }}
      />
    </motion.div>
  );
}

function CategorySection({ cat, lang }: { cat: MenuCategory; lang: Language }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px 0px' });

  return (
    <section id={cat.id} ref={ref} className="scroll-mt-36">
      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="mb-8"
      >
        <div className={`inline-flex items-center gap-3 px-5 py-3 rounded-2xl border mb-5 ${cat.bgColor}`}>
          <span className="text-3xl" role="img" aria-label={cat.name.DE}>
            {cat.emoji}
          </span>
          <div>
            <h2 className={`font-headline text-2xl md:text-3xl font-black leading-none ${cat.color}`}>
              {categoryName(cat, lang)}
            </h2>
          </div>
        </div>
        <p className="text-on-surface-variant text-sm max-w-2xl">{categoryDesc(cat, lang)}</p>
      </motion.div>

      {/* Items grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {cat.items.map((item, i) => (
          <MenuItemCard key={item.name} item={item} index={i} />
        ))}
      </div>
    </section>
  );
}

// ── main page ─────────────────────────────────────────────────────────────────

export function MenuPage() {
  const { language } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [showSearch, setShowSearch] = useState(false);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const navRef = useRef<HTMLDivElement>(null);

  // Focus search on open
  useEffect(() => {
    if (showSearch) searchInputRef.current?.focus();
  }, [showSearch]);

  // Filtered data
  const filteredData = menuData
    .filter((cat) => activeCategory === 'all' || cat.id === activeCategory)
    .map((cat) => ({
      ...cat,
      items: searchQuery
        ? cat.items.filter(
            (item) =>
              item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
              item.ingredients?.toLowerCase().includes(searchQuery.toLowerCase()),
          )
        : cat.items,
    }))
    .filter((cat) => cat.items.length > 0);

  function scrollToSection(id: string) {
    if (id === 'all') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  const totalItems = menuData.reduce((acc, cat) => acc + cat.items.length, 0);

  return (
    <div className="pt-20 min-h-screen bg-background">
      {/* ── Hero ── */}
      <header className="relative overflow-hidden px-6 md:px-12 pt-16 pb-12 max-w-7xl mx-auto">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] opacity-[0.04] pointer-events-none select-none">
          <div className="text-[20rem] leading-none font-black text-primary">🥐</div>
        </div>

        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-tertiary font-bold tracking-[0.2em] uppercase text-sm flex items-center gap-2"
        >
          <Flame size={14} />
          {t(language, 'menuPage.artisanalSelection')}
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
          className="font-headline text-6xl md:text-8xl font-black tracking-tighter text-primary mt-4 mb-6 leading-none"
        >
          {t(language, 'menuPage.dailyLine1')} <br />
          <span className="text-tertiary">{t(language, 'menuPage.dailyLine2')}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-lg text-on-surface-variant max-w-2xl leading-relaxed"
        >
          {t(language, 'menuPage.description')}
        </motion.p>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55 }}
          className="flex flex-wrap gap-6 mt-8"
        >
          {[
            { icon: '🍽️', value: `${totalItems}+`, label: language === 'TR' ? 'Ürün' : language === 'DE' ? 'Produkte' : 'Products' },
            { icon: '📂', value: `${menuData.length}`, label: language === 'TR' ? 'Kategori' : language === 'DE' ? 'Kategorien' : 'Categories' },
            { icon: '🌿', value: '100%', label: language === 'TR' ? 'Taze' : language === 'DE' ? 'Frisch' : 'Fresh' },
          ].map((stat) => (
            <div key={stat.label} className="flex items-center gap-2">
              <span className="text-2xl">{stat.icon}</span>
              <div>
                <div className="font-headline text-2xl font-black text-primary leading-none">{stat.value}</div>
                <div className="text-xs text-on-surface-variant font-medium uppercase tracking-wide">{stat.label}</div>
              </div>
            </div>
          ))}
        </motion.div>
      </header>

      {/* ── Sticky category nav ── */}
      <div
        ref={navRef}
        className="sticky top-16 z-30 bg-background/90 backdrop-blur-md border-b border-outline-variant/40 shadow-sm"
      >
        <div className="max-w-7xl mx-auto px-4 md:px-10">
          <div className="flex items-center gap-2 py-3 overflow-x-auto scrollbar-hide">
            {/* All button */}
            <CategoryPill
              label={language === 'TR' ? 'Tümü' : language === 'DE' ? 'Alle' : 'All'}
              emoji="✨"
              active={activeCategory === 'all'}
              onClick={() => { setActiveCategory('all'); scrollToSection('all'); }}
            />
            {menuData.map((cat) => (
              <CategoryPill
                key={cat.id}
                label={categoryName(cat, language)}
                emoji={cat.emoji}
                active={activeCategory === cat.id}
                onClick={() => { setActiveCategory(cat.id); scrollToSection(cat.id); }}
              />
            ))}

            {/* Search toggle */}
            <div className="ml-auto flex-shrink-0">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowSearch((v) => !v)}
                className="flex items-center gap-2 px-4 py-2 rounded-full border border-outline-variant text-on-surface-variant hover:border-primary hover:text-primary transition-colors text-sm font-medium"
              >
                {showSearch ? <X size={15} /> : <Search size={15} />}
                {showSearch
                  ? language === 'TR' ? 'Kapat' : language === 'DE' ? 'Schließen' : 'Close'
                  : language === 'TR' ? 'Ara' : language === 'DE' ? 'Suchen' : 'Search'}
              </motion.button>
            </div>
          </div>

          {/* Search bar */}
          <AnimatePresence>
            {showSearch && (
              <motion.div
                key="searchbar"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="overflow-hidden pb-3"
              >
                <div className="relative">
                  <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant" />
                  <input
                    ref={searchInputRef}
                    type="text"
                    value={searchQuery}
                    onChange={(e) => { setSearchQuery(e.target.value); setActiveCategory('all'); }}
                    placeholder={
                      language === 'TR' ? 'Ürün veya içindekiler ara…' :
                      language === 'DE' ? 'Produkt oder Zutat suchen…' :
                      'Search product or ingredient…'
                    }
                    className="w-full pl-10 pr-10 py-2.5 rounded-xl border border-outline-variant bg-white focus:outline-none focus:border-primary/60 text-sm text-on-surface"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery('')}
                      title="Suche leeren"
                      aria-label="Suche leeren"
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-on-surface-variant hover:text-primary"
                    >
                      <X size={14} />
                    </button>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* ── Main content ── */}
      <main className="max-w-7xl mx-auto px-6 md:px-12 py-12 space-y-20">
        {/* Legend */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="flex flex-wrap gap-3 items-center p-4 bg-surface-container rounded-2xl border border-outline-variant/40"
        >
          <span className="flex items-center gap-1 text-xs font-semibold text-on-surface-variant uppercase tracking-wide">
            <Sparkles size={12} /> Legende:
          </span>
          {Object.entries(badgeConfig).map(([k, v]) => (
            <span
              key={k}
              className={`inline-flex items-center text-[11px] font-bold px-3 py-1 rounded-full ${v.className}`}
            >
              {v.label}
            </span>
          ))}
          <span className="flex items-center gap-1 text-xs text-on-surface-variant">
            <Leaf size={12} className="text-green-600" />
            {language === 'TR' ? 'Etsiz ürünler' : language === 'DE' ? 'Fleischfreie Produkte' : 'Meat-free products'}
          </span>
        </motion.div>

        {/* No results */}
        <AnimatePresence>
          {filteredData.length === 0 && (
            <motion.div
              key="noresults"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className="text-center py-24"
            >
              <div className="text-6xl mb-4">🔍</div>
              <p className="text-xl font-headline font-bold text-primary mb-2">
                {language === 'TR' ? 'Sonuç bulunamadı' : language === 'DE' ? 'Keine Ergebnisse' : 'No results found'}
              </p>
              <p className="text-on-surface-variant text-sm">
                {language === 'TR' ? `"${searchQuery}" için eşleşme yok.` : language === 'DE' ? `Keine Übereinstimmung für „${searchQuery}".` : `No match for "${searchQuery}".`}
              </p>
              <button
                onClick={() => setSearchQuery('')}
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-tertiary hover:underline"
              >
                <X size={14} />
                {language === 'TR' ? 'Aramayı temizle' : language === 'DE' ? 'Suche leeren' : 'Clear search'}
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Category sections */}
        {filteredData.map((cat) => (
          <CategorySection key={cat.id} cat={cat} lang={language} />
        ))}

        {/* Allergen footer note */}
        <footer className="border-t border-outline-variant/40 pt-10 pb-8">
          <div className="flex items-start gap-3 p-5 bg-amber-50 border border-amber-200 rounded-2xl max-w-3xl">
            <span className="text-2xl flex-shrink-0">⚠️</span>
            <div>
              <p className="text-sm font-bold text-amber-900 mb-1">
                {language === 'TR' ? 'Alerjen Bilgisi' : language === 'DE' ? 'Allergeninformation' : 'Allergen Information'}
              </p>
              <p className="text-xs text-amber-800 leading-relaxed">
                {language === 'DE'
                  ? 'Alle Produkte werden in einer Küche hergestellt, in der Gluten, Milch, Eier, Sesam und Nüsse verwendet werden. Kreuzkontaminationen können nicht ausgeschlossen werden. Bei Fragen wenden Sie sich bitte an unser Personal.'
                  : language === 'TR'
                  ? 'Tüm ürünler gluten, süt, yumurta, susam ve kuruyemiş kullanılan bir mutfakta üretilmektedir. Çapraz bulaşma göz ardı edilemez. Sorularınız için lütfen personelimize danışın.'
                  : 'All products are made in a kitchen where gluten, milk, eggs, sesame and nuts are used. Cross-contamination cannot be excluded. Please ask our staff if you have any questions.'}
              </p>
            </div>
          </div>

          {/* Allergen key */}
          <div className="mt-8">
            <p className="text-xs font-bold text-on-surface-variant uppercase tracking-widest mb-4">
              {language === 'TR' ? 'Alerjen Renk Kodu' : language === 'DE' ? 'Allergen-Farbcode' : 'Allergen Color Code'}
            </p>
            <div className="flex flex-wrap gap-2">
              {Object.entries(allergenColors).map(([label, cls]) => (
                <span key={label} className={`text-[11px] font-semibold px-3 py-1 rounded-full border ${cls}`}>
                  {label}
                </span>
              ))}
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}

// ── CategoryPill ──────────────────────────────────────────────────────────────

function CategoryPill({
  label, emoji, active, onClick,
}: {
  label: string;
  emoji: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <motion.button
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.96 }}
      onClick={onClick}
      className={`flex-shrink-0 flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-sm font-semibold transition-all duration-200 border ${
        active
          ? 'bg-primary text-white border-primary shadow-md'
          : 'bg-white text-on-surface-variant border-outline-variant hover:border-primary/50 hover:text-primary'
      }`}
    >
      <span>{emoji}</span>
      <span className="hidden sm:inline max-w-[120px] truncate">{label}</span>
      {active && <ChevronRight size={13} className="opacity-70" />}
    </motion.button>
  );
}
