export interface MenuItem {
  name: string;
  ingredients?: string;
  allergens: string[];
  badge?: 'veg' | 'spicy' | 'sweet' | 'new';
}

export interface MenuCategory {
  id: string;
  emoji: string;
  name: { DE: string; EN: string; TR: string };
  description: { DE: string; EN: string; TR: string };
  color: string;
  bgColor: string;
  items: MenuItem[];
}

export const menuData: MenuCategory[] = [
  {
    id: 'acma',
    emoji: '🥐',
    color: 'text-amber-800',
    bgColor: 'bg-amber-50 border-amber-200',
    name: {
      DE: 'Açma',
      EN: 'Açma Rolls',
      TR: 'Açma',
    },
    description: {
      DE: 'Traditionelle türkische Hefebrötchen – fluffig, goldbraun und frisch aus dem Ofen.',
      EN: 'Traditional Turkish yeast rolls – fluffy, golden and fresh from the oven.',
      TR: 'Geleneksel Türk açmaları – kabarık, altın rengi ve fırından taze.',
    },
    items: [
      { name: 'Acma Gouda', ingredients: 'Grundzutaten, Käse', allergens: ['Gluten', 'Milch', 'Ei'] },
      { name: 'Acma Weißer Käse', ingredients: 'Grundzutaten, Weißer Käse', allergens: ['Gluten', 'Milch', 'Ei'] },
      { name: 'Acma Rinderhack', ingredients: 'Grundzutaten, Rinderhackfleisch', allergens: ['Gluten', 'Milch', 'Ei'] },
      {
        name: 'Acma Kartoffel',
        ingredients: 'Grundzutaten, Kartoffeln, Zwiebeln, Tomatenmark, Petersilie, Paprikapulver',
        allergens: ['Gluten', 'Milch', 'Ei'],
        badge: 'veg',
      },
      {
        name: 'Acma Spinat',
        ingredients: 'Grundzutaten, Spinat, Weißer Käse, Tomatenmark, Zwiebeln',
        allergens: ['Gluten', 'Milch', 'Ei'],
        badge: 'veg',
      },
      {
        name: 'Acma Käse & Oliven',
        ingredients: 'Grundzutaten, Weißer Käse, Oliven',
        allergens: ['Gluten', 'Milch', 'Ei'],
        badge: 'veg',
      },
      {
        name: 'Acma Gouda & Geflügelwurst',
        ingredients: 'Grundzutaten, Gouda, Geflügelwurst',
        allergens: ['Gluten', 'Milch', 'Ei'],
      },
      { name: 'Acma Sade', ingredients: 'Grundzutaten', allergens: ['Gluten', 'Milch', 'Ei'], badge: 'veg' },
      {
        name: 'Acma Simit',
        ingredients: 'Grundzutaten, Sesam',
        allergens: ['Gluten', 'Milch', 'Ei', 'Sesam'],
        badge: 'veg',
      },
      {
        name: 'Acma Caglar',
        ingredients: 'Grundzutaten, Mohn, Kürbiskerne, Sonnenblumenkerne',
        allergens: ['Gluten', 'Milch', 'Ei'],
        badge: 'veg',
      },
      {
        name: 'Peynirli Üçgen / Dörtgen',
        ingredients: 'Grundzutaten, Sesam, Petersilie',
        allergens: ['Gluten', 'Milch', 'Ei', 'Sesam'],
        badge: 'veg',
      },
      {
        name: 'Peynirli Papatya',
        ingredients: 'Grundzutaten, Sesam, Petersilie',
        allergens: ['Gluten', 'Milch', 'Ei', 'Sesam'],
        badge: 'veg',
      },
    ],
  },
  {
    id: 'pizza-pide',
    emoji: '🍕',
    color: 'text-red-800',
    bgColor: 'bg-red-50 border-red-200',
    name: {
      DE: 'Pizza & Karadeniz Pide',
      EN: 'Pizza & Black Sea Pide',
      TR: 'Pizza & Karadeniz Pide',
    },
    description: {
      DE: 'Knusprige Pizzen und traditionelle Karadeniz-Pide – mit frischen Zutaten belegt.',
      EN: 'Crispy pizzas and traditional Black Sea pide – topped with fresh ingredients.',
      TR: 'Çıtır pizzalar ve geleneksel Karadeniz pideleri – taze malzemelerle.',
    },
    items: [
      {
        name: 'Pizza Sucuk',
        ingredients: 'Sucuk, Gouda, Peperoni, Champignons',
        allergens: ['Gluten', 'Milch', 'Ei'],
        badge: 'spicy',
      },
      {
        name: 'Pizza Pute',
        ingredients: 'Putenwurst, Gouda, Peperoni, Champignons',
        allergens: ['Gluten', 'Milch', 'Ei'],
      },
      {
        name: 'Pizza Thunfisch',
        ingredients: 'Thunfisch, Gouda, Peperoni, Champignons',
        allergens: ['Gluten', 'Milch', 'Ei', 'Fisch'],
      },
      {
        name: 'Sosispizza',
        ingredients: 'Geflügelwurst, Gouda, Peperoni, Champignons',
        allergens: ['Gluten', 'Milch', 'Ei'],
      },
      { name: 'Pizza Hack', ingredients: 'Rinderhack, Gouda, Zwiebeln', allergens: ['Gluten', 'Milch', 'Ei'] },
      {
        name: 'Pizza Käse',
        ingredients: 'Mozzarella, Tomaten, Petersilie',
        allergens: ['Gluten', 'Milch', 'Ei'],
        badge: 'veg',
      },
      {
        name: 'Karadeniz Pide Hack',
        ingredients: 'Rinderhack, Zwiebeln, Petersilie',
        allergens: ['Gluten', 'Milch', 'Ei'],
      },
      {
        name: 'Karadeniz Pide Sucuk',
        ingredients: 'Sucuk, Gouda',
        allergens: ['Gluten', 'Milch', 'Ei'],
        badge: 'spicy',
      },
      {
        name: 'Karadeniz Pide Kartoffeln',
        ingredients: 'Kartoffel, Petersilie, Zwiebel, Tomatenmark',
        allergens: ['Gluten', 'Milch', 'Ei'],
        badge: 'veg',
      },
      {
        name: 'Karadeniz Pide Käse',
        ingredients: 'Weißer Käse, Petersilie, Speisequark',
        allergens: ['Gluten', 'Milch', 'Ei'],
        badge: 'veg',
      },
      {
        name: 'Karadeniz Pide Spinat',
        ingredients: 'Weißer Käse, Petersilie, Zwiebel, Tomatenmark, Spinat',
        allergens: ['Gluten', 'Milch', 'Ei'],
        badge: 'veg',
      },
    ],
  },
  {
    id: 'borek',
    emoji: '🫓',
    color: 'text-orange-800',
    bgColor: 'bg-orange-50 border-orange-200',
    name: {
      DE: 'Börek',
      EN: 'Börek',
      TR: 'Börek',
    },
    description: {
      DE: 'Knuspriges Blätterteiggebäck mit herzhaften Füllungen – eine anatolische Tradition.',
      EN: 'Crispy layered pastry with savory fillings – an Anatolian tradition.',
      TR: 'Çıtır yufkalı, lezzetli dolgulu börekler – Anadolu geleneği.',
    },
    items: [
      {
        name: 'Börek Hackfleisch',
        ingredients: 'Rinderhack, Salz, schwarzer Pfeffer, Chiliflocken',
        allergens: ['Gluten', 'Milch'],
      },
      {
        name: 'Börek Käse',
        ingredients: 'Weißer Käse, Speisequark, Sesam',
        allergens: ['Gluten', 'Milch', 'Sesam'],
        badge: 'veg',
      },
      {
        name: 'Börek Spinat',
        ingredients: 'Weißer Käse, Speisequark, Spinat, Schwarzkümmel',
        allergens: ['Gluten', 'Milch'],
        badge: 'veg',
      },
      {
        name: 'Börek Kartoffeln',
        ingredients: 'Kartoffeln, Salz, schwarzer Pfeffer, Sesam, Schwarzkümmel',
        allergens: ['Gluten', 'Milch', 'Sesam'],
        badge: 'veg',
      },
      { name: 'Saray Börek', ingredients: 'Börek-Grundzutaten', allergens: ['Gluten', 'Milch'], badge: 'veg' },
      {
        name: 'Vera Börek Hackfleisch',
        ingredients: 'Rinderhack, Gouda, Weißer Käse, Schwarzkümmel, Ei',
        allergens: ['Gluten', 'Milch', 'Ei'],
      },
      {
        name: 'Vera Börek Spinat Minze',
        ingredients: 'Spinat, Minze, Weißer Käse, Sonnenblumenkerne, Ei',
        allergens: ['Gluten', 'Milch', 'Ei', 'Sonnenblumenkerne'],
        badge: 'veg',
      },
      {
        name: 'Vera Börek Spinat Zwiebeln',
        ingredients: 'Spinat, Zwiebel, Weißer Käse, Sesam, Ei',
        allergens: ['Gluten', 'Milch', 'Ei', 'Sesam'],
        badge: 'veg',
      },
      {
        name: 'Vera Schnecke Spinat Minze',
        ingredients: 'Spinat, Minze, Weißer Käse, Sonnenblumenkerne, Ei',
        allergens: ['Gluten', 'Milch', 'Ei', 'Sonnenblumenkerne'],
        badge: 'veg',
      },
      {
        name: 'Vera Schnecke Spinat Zwiebeln',
        ingredients: 'Spinat, Zwiebel, Weißer Käse, Sesam, Ei',
        allergens: ['Gluten', 'Milch', 'Ei', 'Sesam'],
        badge: 'veg',
      },
    ],
  },
  {
    id: 'gozleme',
    emoji: '🫔',
    color: 'text-green-800',
    bgColor: 'bg-green-50 border-green-200',
    name: {
      DE: 'Gözleme',
      EN: 'Gözleme',
      TR: 'Gözleme',
    },
    description: {
      DE: 'Türkische Fladenbrotpfannen, heiß auf dem Sac gegrillt mit frischen Füllungen.',
      EN: 'Turkish flatbreads grilled on the sac with fresh fillings.',
      TR: 'Sac üzerinde pişirilen, taze dolgulu geleneksel gözlemeler.',
    },
    items: [
      {
        name: 'Gözleme Hack',
        ingredients: 'Zwiebeln, Weißer Käse, Butter, Rinderhack, Petersilie, schwarzer Pfeffer',
        allergens: ['Gluten', 'Milch', 'Ei'],
      },
      {
        name: 'Gözleme Spinat',
        ingredients: 'Zwiebeln, Weißer Käse, Butter, Spinat',
        allergens: ['Gluten', 'Milch', 'Ei'],
        badge: 'veg',
      },
      {
        name: 'Gözleme Kartoffeln',
        ingredients: 'Zwiebeln, Weißer Käse, Butter, Kartoffeln, Petersilie, Tomatenmark',
        allergens: ['Gluten', 'Milch', 'Ei'],
        badge: 'veg',
      },
      {
        name: 'Gözleme Käse',
        ingredients: 'Zwiebeln, Weißer Käse, Butter, Speisequark, Petersilie',
        allergens: ['Gluten', 'Milch', 'Ei'],
        badge: 'veg',
      },
    ],
  },
  {
    id: 'simit-corek',
    emoji: '🥯',
    color: 'text-yellow-800',
    bgColor: 'bg-yellow-50 border-yellow-200',
    name: {
      DE: 'Simit & Çörek',
      EN: 'Simit & Çörek',
      TR: 'Simit & Çörek',
    },
    description: {
      DE: 'Goldene Sesamringe und luftige Hefebrötchen – Hamburgs türkische Bäckerei-Ikonen.',
      EN: 'Golden sesame rings and airy yeast rolls – iconic Turkish bakery staples.',
      TR: 'Altın susam halkaları ve kabarık çörekler – ikonik Türk fırın ürünleri.',
    },
    items: [
      {
        name: 'Simit',
        ingredients: 'Mehl, Milch, Rapsöl, Hefe, Salz, Zucker, Traubensirup, Sesam',
        allergens: ['Gluten', 'Milch', 'Sesam'],
        badge: 'veg',
      },
      {
        name: 'Caglar Simit',
        ingredients: 'Mehl, Butter, Eier, Milch, Mohn, Kürbiskerne, Sonnenblumenkerne',
        allergens: ['Gluten', 'Milch', 'Ei'],
        badge: 'veg',
      },
      {
        name: 'Sucuklu Simit',
        ingredients: 'Mehl, Eier, Milch, Sucuk, Sesam',
        allergens: ['Gluten', 'Milch', 'Ei', 'Sesam'],
      },
      {
        name: 'Peynirli Simit',
        ingredients: 'Mehl, Eier, Milch, Weißer Käse, Petersilie, Speisequark, Sesam',
        allergens: ['Gluten', 'Milch', 'Ei', 'Sesam'],
        badge: 'veg',
      },
      {
        name: 'Ay Çöregi Gouda',
        ingredients: 'Mehl, Salz, Zucker, Hefe, Margarine, Öl, Eier, Milch, Gouda',
        allergens: ['Gluten', 'Milch', 'Ei'],
        badge: 'veg',
      },
      {
        name: 'Ay Çöregi Käse',
        ingredients: 'Weißer Käse, Petersilie, Speisequark, Sesam',
        allergens: ['Gluten', 'Milch', 'Ei', 'Sesam'],
        badge: 'veg',
      },
      {
        name: 'Ay Çöregi Hack',
        ingredients: 'Rinderhack, Petersilie, Zwiebel, Sesam, Schwarzkümmel',
        allergens: ['Gluten', 'Milch', 'Ei'],
      },
      {
        name: 'Ay Çöregi Kartoffel',
        ingredients: 'Kartoffeln, Petersilie, Zwiebel, Tomatenmark, Sesam',
        allergens: ['Gluten', 'Milch', 'Ei'],
        badge: 'veg',
      },
      {
        name: 'Hashashli',
        ingredients: 'Pogaca-Grundzutaten, Graumohn',
        allergens: ['Gluten', 'Milch', 'Ei'],
        badge: 'veg',
      },
    ],
  },
  {
    id: 'pogaca-orme',
    emoji: '🧆',
    color: 'text-stone-700',
    bgColor: 'bg-stone-50 border-stone-200',
    name: {
      DE: 'Poğaça & Örme',
      EN: 'Poğaça & Örme',
      TR: 'Poğaça & Örme',
    },
    description: {
      DE: 'Weiche Hefebrötchen und geflochtene Spezialitäten – vielfältig gefüllt.',
      EN: 'Soft yeast buns and braided specialties – filled with variety.',
      TR: 'Yumuşak poğaçalar ve örgü hamur spesiyaliteleri – çeşitli dolgularla.',
    },
    items: [
      {
        name: 'Poğaça Käse',
        ingredients: 'Weißer Käse, Petersilie, Speisequark, Sesam',
        allergens: ['Gluten', 'Milch', 'Ei', 'Sesam'],
        badge: 'veg',
      },
      { name: 'Poğaça Gouda', ingredients: 'Gouda', allergens: ['Gluten', 'Milch', 'Ei'], badge: 'veg' },
      {
        name: 'Poğaça Hack',
        ingredients: 'Rinderhack, Petersilie, Zwiebel, Tomatenmark, Sesam, Schwarzkümmel',
        allergens: ['Gluten', 'Milch', 'Ei'],
      },
      {
        name: 'Poğaça Oliven',
        ingredients: 'Oliven, Petersilie',
        allergens: ['Gluten', 'Milch', 'Ei'],
        badge: 'veg',
      },
      {
        name: 'Poğaça Kartoffeln',
        ingredients: 'Kartoffeln, Petersilie, Zwiebel, Tomatenmark, Sesam',
        allergens: ['Gluten', 'Milch', 'Ei'],
        badge: 'veg',
      },
      {
        name: 'Poğaça Sade',
        ingredients: 'Sesam',
        allergens: ['Gluten', 'Milch', 'Ei', 'Sesam'],
        badge: 'veg',
      },
      {
        name: 'Mini Örme Hack',
        ingredients: 'Rinderhack, Petersilie, Zwiebel, Tomatenmark, Sesam',
        allergens: ['Gluten', 'Milch', 'Ei'],
      },
      {
        name: 'Mini Örme Käse',
        ingredients: 'Weißer Käse, Petersilie, Speisequark, Sesam',
        allergens: ['Gluten', 'Milch', 'Ei', 'Sesam'],
        badge: 'veg',
      },
      { name: 'Örme Gouda', ingredients: 'Gouda', allergens: ['Gluten', 'Milch', 'Ei'], badge: 'veg' },
      {
        name: 'Örme Käse',
        ingredients: 'Weißer Käse, Petersilie, Speisequark, Sesam',
        allergens: ['Gluten', 'Milch', 'Ei', 'Sesam'],
        badge: 'veg',
      },
      {
        name: 'Örme Käse & Oliven',
        ingredients: 'Weißer Käse, Petersilie, Speisequark, Sesam, Oliven',
        allergens: ['Gluten', 'Milch', 'Ei', 'Sesam'],
        badge: 'veg',
      },
      { name: 'Örme Gouda & Sucuk', ingredients: 'Gouda, Sucuk', allergens: ['Gluten', 'Milch', 'Ei'] },
      {
        name: 'Sosis Dürüm (mit Tomatensoße)',
        ingredients: 'Geflügelwurst, Tomatensoße, Petersilie',
        allergens: ['Gluten', 'Milch', 'Ei'],
      },
      { name: 'Sosis Dürüm mit Gouda', ingredients: 'Geflügelwurst, Gouda', allergens: ['Gluten', 'Milch', 'Ei'] },
      {
        name: 'Mini-Pizza Olive',
        ingredients: 'Oliven, Tomate, Weißer Käse',
        allergens: ['Gluten', 'Milch', 'Ei'],
        badge: 'veg',
      },
      { name: 'Mini-Pizza Sosis', ingredients: 'Geflügelwurst', allergens: ['Gluten', 'Milch', 'Ei'] },
    ],
  },
  {
    id: 'brot',
    emoji: '🍞',
    color: 'text-amber-900',
    bgColor: 'bg-amber-50 border-amber-300',
    name: {
      DE: 'Brot',
      EN: 'Breads',
      TR: 'Ekmek',
    },
    description: {
      DE: 'Frisch gebackene Brote aus traditionellen Rezepten – täglich ab 3:00 Uhr morgens.',
      EN: 'Freshly baked breads from traditional recipes – daily from 3:00 AM.',
      TR: 'Geleneksel tariflerle taze pişirilen ekmekler – sabah 3\'ten itibaren günlük.',
    },
    items: [
      { name: 'Somun', ingredients: 'Mehl, Wasser, Salz, Eisstarmalz, Hefe', allergens: ['Gluten'], badge: 'veg' },
      { name: 'Kücük Somun', ingredients: 'Mehl, Wasser, Salz, Eisstarmalz, Hefe', allergens: ['Gluten'], badge: 'veg' },
      {
        name: 'Pide',
        ingredients: 'Mehl, Wasser, Salz, Weizenaktiv, Hefe, Weizensteuerkleie',
        allergens: ['Gluten'],
        badge: 'veg',
      },
      {
        name: 'Kücük Pide',
        ingredients: 'Mehl, Wasser, Salz, Weizenaktiv, Hefe, Sesam, Schwarzkümmel',
        allergens: ['Gluten', 'Sesam'],
        badge: 'veg',
      },
      {
        name: 'Ekmek',
        ingredients: 'Mehl, Wasser, Salz, Weizenaktiv, Hefe',
        allergens: ['Gluten'],
        badge: 'veg',
      },
      {
        name: 'Kücük Ekmek',
        ingredients: 'Mehl, Wasser, Salz, Weizenaktiv, Hefe',
        allergens: ['Gluten'],
        badge: 'veg',
      },
      {
        name: 'Mısır Ekmek',
        ingredients: 'Mehl, Wasser, Salz, Weizenaktiv, Hefe',
        allergens: ['Gluten'],
        badge: 'veg',
      },
      {
        name: 'Baguette',
        ingredients: 'Mehl, Wasser, Salz, Weizenaktiv, Hefe, Sesam',
        allergens: ['Gluten', 'Sesam'],
        badge: 'veg',
      },
    ],
  },
  {
    id: 'belegte-brote',
    emoji: '🥪',
    color: 'text-lime-800',
    bgColor: 'bg-lime-50 border-lime-200',
    name: {
      DE: 'Belegte Brote',
      EN: 'Filled Sandwiches',
      TR: 'Dolgulu Ekmekler',
    },
    description: {
      DE: 'Frisch belegte Somunbrote und Acma – mit Salat, Remoulade, Tomate und Gurke.',
      EN: 'Freshly filled somun bread and acma – with salad, remoulade, tomato and cucumber.',
      TR: 'Taze dolgulu somun ve açma – salata, remulad, domates ve salatalık ile.',
    },
    items: [
      {
        name: 'Belegtes Somun Gouda',
        ingredients: 'Gouda, Lolo Salat, Remoulade, Tomate, Gurke',
        allergens: ['Gluten', 'Milch', 'Ei'],
        badge: 'veg',
      },
      {
        name: 'Belegtes Somun Camembert',
        ingredients: 'Camembert, Lolo Salat, Remoulade, Tomate, Gurke',
        allergens: ['Gluten', 'Milch', 'Ei'],
        badge: 'veg',
      },
      {
        name: 'Belegtes Somun Weißer Käse',
        ingredients: 'Weißer Käse, Lolo Salat, Remoulade, Tomate, Gurke',
        allergens: ['Gluten', 'Milch', 'Ei'],
        badge: 'veg',
      },
      {
        name: 'Belegtes Somun Mozzarella',
        ingredients: 'Mozzarella, Lolo Salat, Remoulade, Tomate, Gurke',
        allergens: ['Gluten', 'Milch', 'Ei'],
        badge: 'veg',
      },
      {
        name: 'Belegtes Somun Salami',
        ingredients: 'Salami, Lolo Salat, Remoulade, Tomate, Gurke',
        allergens: ['Gluten', 'Milch', 'Ei'],
      },
      {
        name: 'Belegtes Somun Pute',
        ingredients: 'Pute, Lolo Salat, Remoulade, Tomate, Gurke',
        allergens: ['Gluten', 'Milch', 'Ei'],
      },
      {
        name: 'Belegtes Somun Ei',
        ingredients: 'Ei, Lolo Salat, Remoulade, Tomate, Gurke',
        allergens: ['Gluten', 'Milch', 'Ei'],
      },
      {
        name: 'Belegtes Somun Sucuk',
        ingredients: 'Sucuk, Lolo Salat, Remoulade, Tomate, Gurke',
        allergens: ['Gluten', 'Milch', 'Ei'],
        badge: 'spicy',
      },
      {
        name: 'Belegtes Somun Hähnchen Schnitzel',
        ingredients: 'Hähnchen Schnitzel, Lolo Salat, Remoulade, Tomate, Gurke',
        allergens: ['Gluten', 'Milch', 'Ei'],
      },
      {
        name: 'Belegtes Acma Pute',
        ingredients: 'Pute, Lolo Salat, Remoulade, Tomate, Gurke',
        allergens: ['Gluten', 'Milch', 'Ei'],
      },
      {
        name: 'Belegtes Acma Salami',
        ingredients: 'Salami, Lolo Salat, Remoulade, Tomate, Gurke',
        allergens: ['Gluten', 'Milch', 'Ei'],
      },
      {
        name: 'Belegtes Acma Gouda',
        ingredients: 'Gouda, Lolo Salat, Remoulade, Tomate, Gurke',
        allergens: ['Gluten', 'Milch', 'Ei'],
        badge: 'veg',
      },
      {
        name: 'Belegtes Acma Mozzarella',
        ingredients: 'Mozzarella, Lolo Salat, Remoulade, Tomate, Gurke',
        allergens: ['Gluten', 'Milch', 'Ei'],
        badge: 'veg',
      },
      {
        name: 'Belegtes Acma Camembert',
        ingredients: 'Camembert, Lolo Salat, Remoulade, Tomate, Gurke',
        allergens: ['Gluten', 'Milch', 'Ei'],
        badge: 'veg',
      },
      {
        name: 'Belegtes Acma Weißer Käse',
        ingredients: 'Weißer Käse, Lolo Salat, Remoulade, Tomate, Gurke',
        allergens: ['Gluten', 'Milch', 'Ei'],
        badge: 'veg',
      },
      {
        name: 'Belegtes Acma Ei',
        ingredients: 'Ei, Lolo Salat, Remoulade, Tomate, Gurke',
        allergens: ['Gluten', 'Milch', 'Ei'],
      },
    ],
  },
  {
    id: 'tatlilar',
    emoji: '🍰',
    color: 'text-pink-800',
    bgColor: 'bg-pink-50 border-pink-200',
    name: {
      DE: 'Baklava & Kuchen',
      EN: 'Baklava & Cakes',
      TR: 'Baklava & Pastane',
    },
    description: {
      DE: 'Orientalische Süßigkeiten und meisterhafte Kuchen – für jeden Anlass.',
      EN: 'Oriental sweets and masterful cakes – for every occasion.',
      TR: 'Doğu tatlıları ve ustalıkla hazırlanmış pastalar – her an için.',
    },
    items: [
      {
        name: 'Baklava mit Pistazien',
        ingredients: 'Mehl, Zucker, Wasser, Eier, Pistazie, Butterfett',
        allergens: ['Gluten', 'Milch', 'Ei', 'Nüsse'],
        badge: 'sweet',
      },
      {
        name: 'Walnuss Baklava',
        ingredients: 'Mehl, Zucker, Wasser, Eier, Walnuss, Butterfett',
        allergens: ['Gluten', 'Milch', 'Ei', 'Nüsse'],
        badge: 'sweet',
      },
      {
        name: 'Baklava Kokos',
        ingredients: 'Mehl, Zucker, Wasser, Eier, Walnuss, Butterfett, Kokosraspeln',
        allergens: ['Gluten', 'Milch', 'Ei', 'Nüsse'],
        badge: 'sweet',
      },
      {
        name: 'Shakerpare mit Haselnuss',
        ingredients: 'Mehl, Ei, Milch, Zucker, Vanillearoma, Grieß, Haselnuss',
        allergens: ['Gluten', 'Milch', 'Ei', 'Nüsse'],
        badge: 'sweet',
      },
      {
        name: 'Shakerpare mit Pistazie',
        ingredients: 'Mehl, Ei, Milch, Zucker, Vanillearoma, Grieß, Pistazie',
        allergens: ['Gluten', 'Milch', 'Ei', 'Nüsse'],
        badge: 'sweet',
      },
      {
        name: 'Ekler mit Pudding',
        ingredients: 'Mehl, Butter, Milch, Ei, Vanille Pudding, Mandel, Schokokonfitüre',
        allergens: ['Gluten', 'Milch', 'Ei', 'Nüsse'],
        badge: 'sweet',
      },
      {
        name: 'Ekler mit Schokocreme',
        ingredients: 'Mehl, Butter, Milch, Ei, Nussnougat-Creme, Schokostreusel',
        allergens: ['Gluten', 'Milch', 'Ei', 'Nüsse'],
        badge: 'sweet',
      },
      {
        name: 'Ekler mit Karamell',
        ingredients: 'Mehl, Butter, Milch, Ei, Callebaut Schokolade, Haselnuss',
        allergens: ['Gluten', 'Milch', 'Ei', 'Nüsse', 'Soja'],
        badge: 'sweet',
      },
      {
        name: 'Ekler mit Buttercreme',
        ingredients: 'Mehl, Butter, Milch, Ei, Pistazie, Nussnougat-Creme',
        allergens: ['Gluten', 'Milch', 'Ei', 'Nüsse'],
        badge: 'sweet',
      },
      {
        name: 'Ekler mit Haselnusscreme',
        ingredients: 'Mehl, Butter, Milch, Ei, Nussnougat-Creme, Haselnuss',
        allergens: ['Gluten', 'Milch', 'Ei', 'Nüsse'],
        badge: 'sweet',
      },
      {
        name: 'Napoleon',
        ingredients: 'Butter, Zucker, Milch, Vanillearoma, Eier, Mehl',
        allergens: ['Gluten', 'Milch', 'Ei'],
        badge: 'sweet',
      },
      {
        name: 'Schokokuchen',
        ingredients: 'Milch, Zucker, Mehl, Rapsöl, Ei, Kakaopulver, Schokolade',
        allergens: ['Gluten', 'Milch', 'Ei', 'Nüsse'],
        badge: 'sweet',
      },
      {
        name: 'Mohnkuchen',
        ingredients: 'Mehl, Ei, Milch, Blaumohn, Zucker, Vanillearoma, Grieß',
        allergens: ['Gluten', 'Milch', 'Ei'],
        badge: 'sweet',
      },
      {
        name: 'Revani',
        ingredients: 'Mehl, Ei, Milch, Zucker, Vanillearoma, Grieß, Kokosraspeln',
        allergens: ['Gluten', 'Milch', 'Ei'],
        badge: 'sweet',
      },
      {
        name: 'Milchreis',
        ingredients: 'Milch, Reis, Speisestärke, Zucker',
        allergens: ['Milch'],
        badge: 'sweet',
      },
    ],
  },
  {
    id: 'susses-gebäck',
    emoji: '🥨',
    color: 'text-rose-800',
    bgColor: 'bg-rose-50 border-rose-200',
    name: {
      DE: 'Süßes Gebäck',
      EN: 'Sweet Pastries',
      TR: 'Tatlı Hamur İşleri',
    },
    description: {
      DE: 'Verführerische Süßigkeiten aus dem Ofen – mit Vanille, Schokolade und Früchten.',
      EN: 'Irresistible sweets from the oven – with vanilla, chocolate and fruits.',
      TR: 'Fırından çıkan nefis tatlılar – vanilyalı, çikolatalı ve meyveli.',
    },
    items: [
      {
        name: 'Tahinli Çörek',
        ingredients: 'Acma-Grundzutaten, Sesampaste, Sesam',
        allergens: ['Gluten', 'Milch', 'Ei', 'Sesam'],
        badge: 'sweet',
      },
      {
        name: 'Süß ohne Füllung',
        ingredients: 'Mehl, Zucker, Hefe, Eier, Margarine, Milch, Vanille Aroma',
        allergens: ['Gluten', 'Milch', 'Ei'],
        badge: 'sweet',
      },
      {
        name: 'Rosinenzopf / Schnecke',
        ingredients: 'Grundzutaten, Rosinen',
        allergens: ['Gluten', 'Milch', 'Ei'],
        badge: 'sweet',
      },
      {
        name: 'Mohntasche',
        ingredients: 'Grundzutaten, Mohn, Vanille Aroma',
        allergens: ['Gluten', 'Milch', 'Ei'],
        badge: 'sweet',
      },
      {
        name: 'Lokum Hörnchen',
        ingredients: 'Grundzutaten, Rosengele, Kokosraspeln',
        allergens: ['Gluten', 'Milch', 'Ei'],
        badge: 'sweet',
      },
      {
        name: 'Erdbeermarmeladenhörnchen',
        ingredients: 'Grundzutaten, Erdbeermarmelade',
        allergens: ['Gluten', 'Milch', 'Ei'],
        badge: 'sweet',
      },
      {
        name: 'Schokohörnchen',
        ingredients: 'Grundzutaten, Nussnougat-Creme, Schokostreusel',
        allergens: ['Gluten', 'Milch', 'Ei', 'Nüsse'],
        badge: 'sweet',
      },
    ],
  },
];

export const allergenColors: Record<string, string> = {
  Gluten: 'bg-amber-100 text-amber-800 border-amber-300',
  Milch: 'bg-blue-100 text-blue-800 border-blue-300',
  Ei: 'bg-orange-100 text-orange-800 border-orange-300',
  Sesam: 'bg-green-100 text-green-800 border-green-300',
  Fisch: 'bg-cyan-100 text-cyan-800 border-cyan-300',
  Nüsse: 'bg-yellow-100 text-yellow-900 border-yellow-300',
  Soja: 'bg-purple-100 text-purple-800 border-purple-300',
  Sonnenblumenkerne: 'bg-lime-100 text-lime-800 border-lime-300',
};

export const badgeConfig = {
  veg: { label: '🌿 Veg', className: 'bg-green-100 text-green-700 border border-green-300' },
  spicy: { label: '🌶️ Scharf', className: 'bg-red-100 text-red-700 border border-red-300' },
  sweet: { label: '🍯 Süß', className: 'bg-yellow-100 text-yellow-700 border border-yellow-300' },
  new: { label: '✨ Neu', className: 'bg-blue-100 text-blue-700 border border-blue-300' },
};
