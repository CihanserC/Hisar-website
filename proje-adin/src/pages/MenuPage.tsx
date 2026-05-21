import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import type { Language } from '../i18n/languages';
import { menuData, allergenColors, type MenuCategory, type MenuItem } from '../data/menuData';
import { getCategoryImage, getMenuItemImage } from '../data/menuImages';

const pageCopy = {
  DE: {
    eyebrow: 'Speisekarte',
    title: 'Unsere Küche',
    subtitle: 'Türkische Tradition, deutsches Handwerk – frisch jeden Tag.',
    intro: 'Wählen Sie eine Kategorie, um unsere Produkte zu entdecken. Tippen Sie auf ein Gericht für Zutaten und Allergene.',
    backToCategories: 'Alle Kategorien',
    ingredients: 'Zutaten',
    allergens: 'Allergene',
    showDetails: 'Details anzeigen',
    hideDetails: 'Details ausblenden',
    noIngredients: 'Zutateninformationen folgen in Kürze.',
    menuOnly: 'Nur Speisekarte',
    viewMenu: 'Menü ansehen',
    allergenNote:
      'Alle Produkte werden in einer Küche hergestellt, in der Gluten, Milch, Eier, Sesam und Nüsse verwendet werden.',
  },
  EN: {
    eyebrow: 'Menu',
    title: 'Our Kitchen',
    subtitle: 'Turkish tradition, German craft – fresh every day.',
    intro: 'Choose a category to explore our products. Tap a dish for ingredients and allergens.',
    backToCategories: 'All categories',
    ingredients: 'Ingredients',
    allergens: 'Allergens',
    showDetails: 'Show details',
    hideDetails: 'Hide details',
    noIngredients: 'Ingredient information coming soon.',
    menuOnly: 'Menu only',
    viewMenu: 'View menu',
    allergenNote:
      'All products are made in a kitchen where gluten, milk, eggs, sesame and nuts are used.',
  },
} satisfies Record<Language, Record<string, string>>;

function categoryName(cat: MenuCategory, lang: Language) {
  return cat.name[lang] ?? cat.name.DE;
}

function categoryDesc(cat: MenuCategory, lang: Language) {
  return cat.description[lang] ?? cat.description.DE;
}

function AllergenChip({ label }: { label: string }) {
  const cls = allergenColors[label] ?? 'bg-gray-100 text-gray-700 border-gray-300';
  return (
    <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full border ${cls}`}>{label}</span>
  );
}

function MenuItemCard({
  item,
  categoryId,
  index,
  copy,
}: {
  item: MenuItem;
  categoryId: string;
  index: number;
  copy: (typeof pageCopy)['DE'];
}) {
  const [open, setOpen] = useState(false);
  const imageSrc = getMenuItemImage(item.name, categoryId);

  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay: Math.min(index * 0.03, 0.2) }}
      className="flex flex-col bg-white rounded-2xl border border-outline-variant/40 overflow-hidden shadow-sm hover:shadow-lg hover:border-primary/25 transition-shadow"
    >
      <div className="relative aspect-[5/4] overflow-hidden bg-surface-container">
        <img
          src={imageSrc}
          alt={item.name}
          className="h-full w-full object-cover"
          loading="lazy"
        />
      </div>

      <div className="flex flex-col flex-1 p-4">
        <h3 className="font-headline text-lg font-black text-primary leading-snug">{item.name}</h3>
        <p className="mt-1 text-[10px] font-bold uppercase tracking-widest text-on-surface-variant/70">
          {copy.menuOnly}
        </p>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="mt-3 text-left text-sm font-bold text-tertiary hover:text-primary transition-colors"
        >
          {open ? copy.hideDetails : copy.showDetails}
        </button>

        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden"
            >
              <div className="pt-3 mt-3 border-t border-outline-variant/30 space-y-3">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-primary mb-1">
                    {copy.ingredients}
                  </p>
                  <p className="text-sm text-on-surface-variant leading-relaxed">
                    {item.ingredients || copy.noIngredients}
                  </p>
                </div>
                {item.allergens.length > 0 && (
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-primary mb-1.5">
                      {copy.allergens}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
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
      </div>
    </motion.article>
  );
}

function CategoryCard({
  cat,
  lang,
  viewMenuLabel,
  onSelect,
}: {
  cat: MenuCategory;
  lang: Language;
  viewMenuLabel: string;
  onSelect: (id: string) => void;
}) {
  const imageSrc = getCategoryImage(cat.id);

  return (
    <motion.button
      type="button"
      onClick={() => onSelect(cat.id)}
      whileHover={{ y: -6 }}
      whileTap={{ scale: 0.98 }}
      className="group text-left w-full rounded-2xl border border-outline-variant/40 bg-white overflow-hidden shadow-sm hover:shadow-xl hover:border-primary/30 transition-shadow focus:outline-none focus:ring-2 focus:ring-primary/30"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={imageSrc}
          alt={categoryName(cat, lang)}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="eager"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-5">
          <h2 className="font-headline text-2xl md:text-3xl font-black text-white leading-tight">
            {categoryName(cat, lang)}
          </h2>
        </div>
      </div>
      <div className="p-5 bg-white border-t border-outline-variant/30">
        <p className="text-sm text-on-surface-variant leading-relaxed line-clamp-2">
          {categoryDesc(cat, lang)}
        </p>
        <span className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-primary group-hover:text-tertiary transition-colors">
          {viewMenuLabel}
          <ChevronRight size={16} className="transition-transform group-hover:translate-x-1" />
        </span>
      </div>
    </motion.button>
  );
}

function CategoryProductsView({
  cat,
  lang,
  copy,
  onBack,
}: {
  cat: MenuCategory;
  lang: Language;
  copy: (typeof pageCopy)['DE'];
  onBack: () => void;
}) {
  return (
    <motion.div
      key={cat.id}
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.3 }}
    >
      <button
        type="button"
        onClick={onBack}
        className="inline-flex items-center gap-2 mb-8 px-4 py-2.5 rounded-full border border-outline-variant/50 bg-white text-sm font-bold text-primary hover:bg-primary hover:text-white hover:border-primary transition-colors shadow-sm"
      >
        <ArrowLeft size={18} />
        {copy.backToCategories}
      </button>

      <header className={`mb-10 rounded-2xl border p-6 md:p-8 ${cat.bgColor}`}>
        <h2 className={`font-headline text-3xl md:text-5xl font-black ${cat.color}`}>
          {categoryName(cat, lang)}
        </h2>
        <p className="mt-3 text-on-surface-variant max-w-2xl leading-relaxed text-base md:text-lg">
          {categoryDesc(cat, lang)}
        </p>
      </header>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5">
        {cat.items.map((item, i) => (
          <MenuItemCard key={item.name} item={item} categoryId={cat.id} index={i} copy={copy} />
        ))}
      </div>
    </motion.div>
  );
}

export function MenuPage() {
  const { language } = useLanguage();
  const copy = pageCopy[language];
  const [selectedCategoryId, setSelectedCategoryId] = useState<string | null>(null);

  const selectedCategory = menuData.find((c) => c.id === selectedCategoryId) ?? null;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [selectedCategoryId]);

  function selectCategory(id: string) {
    setSelectedCategoryId(id);
  }

  function backToCategories() {
    setSelectedCategoryId(null);
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-tertiary pt-32 md:pt-40 pb-16 md:pb-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-white/60 mb-4">{copy.eyebrow}</p>
          <h1 className="font-headline text-5xl md:text-7xl font-black text-white tracking-tighter leading-none">
            {copy.title}
          </h1>
          <p className="mt-5 font-headline text-xl md:text-2xl italic text-white/85 max-w-xl">{copy.subtitle}</p>
          <p className="mt-4 text-white/70 max-w-2xl leading-relaxed">{copy.intro}</p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 md:px-12 py-12 md:py-16">
        <AnimatePresence mode="wait">
          {selectedCategory ? (
            <CategoryProductsView
              key="products"
              cat={selectedCategory}
              lang={language}
              copy={copy}
              onBack={backToCategories}
            />
          ) : (
            <motion.div
              key="categories"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 md:gap-6">
                {menuData.map((cat, i) => (
                  <motion.div
                    key={cat.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05, duration: 0.35 }}
                  >
                    <CategoryCard
                      cat={cat}
                      lang={language}
                      viewMenuLabel={copy.viewMenu}
                      onSelect={selectCategory}
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <p className="text-center text-xs text-on-surface-variant/80 max-w-xl mx-auto mt-16 pb-8 leading-relaxed">
          {copy.allergenNote}
        </p>
      </main>
    </div>
  );
}
