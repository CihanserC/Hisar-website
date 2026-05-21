export interface MenuItem {
  name: string;
  ingredients?: string;
  allergens: string[];
  badge?: 'veg' | 'spicy' | 'sweet' | 'new';
}

export interface MenuCategory {
  id: string;
  name: { DE: string; EN: string; TR: string };
  description: { DE: string; EN: string; TR: string };
  color: string;
  bgColor: string;
  items: MenuItem[];
}

const kahvaltiItems: MenuItem[] = [
  { name: 'Belegtes Somun Gouda', ingredients: 'Gouda, Lolo Salat, Remoulade, Tomate, Gurke', allergens: ['Gluten', 'Milch', 'Ei'], badge: 'veg' },
  { name: 'Belegtes Somun Camembert', ingredients: 'Camembert, Lolo Salat, Remoulade, Tomate, Gurke', allergens: ['Gluten', 'Milch', 'Ei'], badge: 'veg' },
  { name: 'Belegtes Somun Weißer Käse', ingredients: 'Weißer Käse, Lolo Salat, Remoulade, Tomate, Gurke', allergens: ['Gluten', 'Milch', 'Ei'], badge: 'veg' },
  { name: 'Belegtes Somun Mozzarella', ingredients: 'Mozzarella, Lolo Salat, Remoulade, Tomate, Gurke', allergens: ['Gluten', 'Milch', 'Ei'], badge: 'veg' },
  { name: 'Belegtes Somun Salami', ingredients: 'Salami, Lolo Salat, Remoulade, Tomate, Gurke', allergens: ['Gluten', 'Milch', 'Ei'] },
  { name: 'Belegtes Somun Pute', ingredients: 'Pute, Lolo Salat, Remoulade, Tomate, Gurke', allergens: ['Gluten', 'Milch', 'Ei'] },
  { name: 'Belegtes Somun Ei', ingredients: 'Ei, Lolo Salat, Remoulade, Tomate, Gurke', allergens: ['Gluten', 'Milch', 'Ei'] },
  { name: 'Belegtes Somun Sucuk', ingredients: 'Sucuk, Lolo Salat, Remoulade, Tomate, Gurke', allergens: ['Gluten', 'Milch', 'Ei'], badge: 'spicy' },
  { name: 'Belegtes Somun Hähnchen Schnitzel', ingredients: 'Hähnchen Schnitzel, Lolo Salat, Remoulade, Tomate, Gurke', allergens: ['Gluten', 'Milch', 'Ei'] },
  { name: 'Belegtes Acma Pute', ingredients: 'Pute, Lolo Salat, Remoulade, Tomate, Gurke', allergens: ['Gluten', 'Milch', 'Ei'] },
  { name: 'Belegtes Acma Salami', ingredients: 'Salami, Lolo Salat, Remoulade, Tomate, Gurke', allergens: ['Gluten', 'Milch', 'Ei'] },
  { name: 'Belegtes Acma Gouda', ingredients: 'Gouda, Lolo Salat, Remoulade, Tomate, Gurke', allergens: ['Gluten', 'Milch', 'Ei'], badge: 'veg' },
  { name: 'Belegtes Acma Mozzarella', ingredients: 'Mozzarella, Lolo Salat, Remoulade, Tomate, Gurke', allergens: ['Gluten', 'Milch', 'Ei'], badge: 'veg' },
  { name: 'Belegtes Acma Camembert', ingredients: 'Camembert, Lolo Salat, Remoulade, Tomate, Gurke', allergens: ['Gluten', 'Milch', 'Ei'], badge: 'veg' },
  { name: 'Belegtes Acma Weißer Käse', ingredients: 'Weißer Käse, Lolo Salat, Remoulade, Tomate, Gurke', allergens: ['Gluten', 'Milch', 'Ei'], badge: 'veg' },
  { name: 'Belegtes Acma Ei', ingredients: 'Ei, Lolo Salat, Remoulade, Tomate, Gurke', allergens: ['Gluten', 'Milch', 'Ei'] },
];

const hamurIsleriItems: MenuItem[] = [
  { name: 'Acma Gouda', ingredients: 'Grundzutaten, Käse', allergens: ['Gluten', 'Milch', 'Ei'] },
  { name: 'Acma Weißer Käse', ingredients: 'Grundzutaten, Weißer Käse', allergens: ['Gluten', 'Milch', 'Ei'] },
  { name: 'Acma Rinderhack', ingredients: 'Grundzutaten, Rinderhackfleisch', allergens: ['Gluten', 'Milch', 'Ei'] },
  { name: 'Acma Kartoffel', ingredients: 'Grundzutaten, Kartoffeln, Zwiebeln, Tomatenmark, Petersilie, Paprikapulver', allergens: ['Gluten', 'Milch', 'Ei'], badge: 'veg' },
  { name: 'Acma Spinat', ingredients: 'Grundzutaten, Spinat, Weißer Käse, Tomatenmark, Zwiebeln', allergens: ['Gluten', 'Milch', 'Ei'], badge: 'veg' },
  { name: 'Acma Käse & Oliven', ingredients: 'Grundzutaten, Weißer Käse, Oliven', allergens: ['Gluten', 'Milch', 'Ei'], badge: 'veg' },
  { name: 'Acma Gouda & Geflügelwurst', ingredients: 'Grundzutaten, Gouda, Geflügelwurst', allergens: ['Gluten', 'Milch', 'Ei'] },
  { name: 'Acma Sade', ingredients: 'Grundzutaten', allergens: ['Gluten', 'Milch', 'Ei'], badge: 'veg' },
  { name: 'Acma Simit', ingredients: 'Grundzutaten, Sesam', allergens: ['Gluten', 'Milch', 'Ei', 'Sesam'], badge: 'veg' },
  { name: 'Acma Caglar', ingredients: 'Grundzutaten, Mohn, Kürbiskerne, Sonnenblumenkerne', allergens: ['Gluten', 'Milch', 'Ei'], badge: 'veg' },
  { name: 'Peynirli Üçgen / Dörtgen', ingredients: 'Grundzutaten, Sesam, Petersilie', allergens: ['Gluten', 'Milch', 'Ei', 'Sesam'], badge: 'veg' },
  { name: 'Peynirli Papatya', ingredients: 'Grundzutaten, Sesam, Petersilie', allergens: ['Gluten', 'Milch', 'Ei', 'Sesam'], badge: 'veg' },
  { name: 'Börek Hackfleisch', ingredients: 'Rinderhack, Salz, schwarzer Pfeffer, Chiliflocken', allergens: ['Gluten', 'Milch'] },
  { name: 'Börek Käse', ingredients: 'Weißer Käse, Speisequark, Sesam', allergens: ['Gluten', 'Milch', 'Sesam'], badge: 'veg' },
  { name: 'Börek Spinat', ingredients: 'Weißer Käse, Speisequark, Spinat, Schwarzkümmel', allergens: ['Gluten', 'Milch'], badge: 'veg' },
  { name: 'Börek Kartoffeln', ingredients: 'Kartoffeln, Salz, schwarzer Pfeffer, Sesam, Schwarzkümmel', allergens: ['Gluten', 'Milch', 'Sesam'], badge: 'veg' },
  { name: 'Saray Börek', ingredients: 'Börek-Grundzutaten', allergens: ['Gluten', 'Milch'], badge: 'veg' },
  { name: 'Vera Börek Hackfleisch', ingredients: 'Rinderhack, Gouda, Weißer Käse, Schwarzkümmel, Ei', allergens: ['Gluten', 'Milch', 'Ei'] },
  { name: 'Vera Börek Spinat Minze', ingredients: 'Spinat, Minze, Weißer Käse, Sonnenblumenkerne, Ei', allergens: ['Gluten', 'Milch', 'Ei', 'Sonnenblumenkerne'], badge: 'veg' },
  { name: 'Vera Börek Spinat Zwiebeln', ingredients: 'Spinat, Zwiebel, Weißer Käse, Sesam, Ei', allergens: ['Gluten', 'Milch', 'Ei', 'Sesam'], badge: 'veg' },
  { name: 'Vera Schnecke Spinat Minze', ingredients: 'Spinat, Minze, Weißer Käse, Sonnenblumenkerne, Ei', allergens: ['Gluten', 'Milch', 'Ei', 'Sonnenblumenkerne'], badge: 'veg' },
  { name: 'Vera Schnecke Spinat Zwiebeln', ingredients: 'Spinat, Zwiebel, Weißer Käse, Sesam, Ei', allergens: ['Gluten', 'Milch', 'Ei', 'Sesam'], badge: 'veg' },
  { name: 'Simit', ingredients: 'Mehl, Milch, Rapsöl, Hefe, Salz, Zucker, Traubensirup, Sesam', allergens: ['Gluten', 'Milch', 'Sesam'], badge: 'veg' },
  { name: 'Caglar Simit', ingredients: 'Mehl, Butter, Eier, Milch, Mohn, Kürbiskerne, Sonnenblumenkerne', allergens: ['Gluten', 'Milch', 'Ei'], badge: 'veg' },
  { name: 'Sucuklu Simit', ingredients: 'Mehl, Eier, Milch, Sucuk, Sesam', allergens: ['Gluten', 'Milch', 'Ei', 'Sesam'] },
  { name: 'Peynirli Simit', ingredients: 'Mehl, Eier, Milch, Weißer Käse, Petersilie, Speisequark, Sesam', allergens: ['Gluten', 'Milch', 'Ei', 'Sesam'], badge: 'veg' },
  { name: 'Ay Çöregi Gouda', ingredients: 'Mehl, Salz, Zucker, Hefe, Margarine, Öl, Eier, Milch, Gouda', allergens: ['Gluten', 'Milch', 'Ei'], badge: 'veg' },
  { name: 'Ay Çöregi Käse', ingredients: 'Weißer Käse, Petersilie, Speisequark, Sesam', allergens: ['Gluten', 'Milch', 'Ei', 'Sesam'], badge: 'veg' },
  { name: 'Ay Çöregi Hack', ingredients: 'Rinderhack, Petersilie, Zwiebel, Sesam, Schwarzkümmel', allergens: ['Gluten', 'Milch', 'Ei'] },
  { name: 'Ay Çöregi Kartoffel', ingredients: 'Kartoffeln, Petersilie, Zwiebel, Tomatenmark, Sesam', allergens: ['Gluten', 'Milch', 'Ei'], badge: 'veg' },
  { name: 'Hashashli', ingredients: 'Pogaca-Grundzutaten, Graumohn', allergens: ['Gluten', 'Milch', 'Ei'], badge: 'veg' },
  { name: 'Poğaça Käse', ingredients: 'Weißer Käse, Petersilie, Speisequark, Sesam', allergens: ['Gluten', 'Milch', 'Ei', 'Sesam'], badge: 'veg' },
  { name: 'Poğaça Gouda', ingredients: 'Gouda', allergens: ['Gluten', 'Milch', 'Ei'], badge: 'veg' },
  { name: 'Poğaça Hack', ingredients: 'Rinderhack, Petersilie, Zwiebel, Tomatenmark, Sesam, Schwarzkümmel', allergens: ['Gluten', 'Milch', 'Ei'] },
  { name: 'Poğaça Oliven', ingredients: 'Oliven, Petersilie', allergens: ['Gluten', 'Milch', 'Ei'], badge: 'veg' },
  { name: 'Poğaça Kartoffeln', ingredients: 'Kartoffeln, Petersilie, Zwiebel, Tomatenmark, Sesam', allergens: ['Gluten', 'Milch', 'Ei'], badge: 'veg' },
  { name: 'Poğaça Sade', ingredients: 'Sesam', allergens: ['Gluten', 'Milch', 'Ei', 'Sesam'], badge: 'veg' },
  { name: 'Mini Örme Hack', ingredients: 'Rinderhack, Petersilie, Zwiebel, Tomatenmark, Sesam', allergens: ['Gluten', 'Milch', 'Ei'] },
  { name: 'Mini Örme Käse', ingredients: 'Weißer Käse, Petersilie, Speisequark, Sesam', allergens: ['Gluten', 'Milch', 'Ei', 'Sesam'], badge: 'veg' },
  { name: 'Örme Gouda', ingredients: 'Gouda', allergens: ['Gluten', 'Milch', 'Ei'], badge: 'veg' },
  { name: 'Örme Käse', ingredients: 'Weißer Käse, Petersilie, Speisequark, Sesam', allergens: ['Gluten', 'Milch', 'Ei', 'Sesam'], badge: 'veg' },
  { name: 'Örme Käse & Oliven', ingredients: 'Weißer Käse, Petersilie, Speisequark, Sesam, Oliven', allergens: ['Gluten', 'Milch', 'Ei', 'Sesam'], badge: 'veg' },
  { name: 'Örme Gouda & Sucuk', ingredients: 'Gouda, Sucuk', allergens: ['Gluten', 'Milch', 'Ei'] },
  { name: 'Sosis Dürüm (mit Tomatensoße)', ingredients: 'Geflügelwurst, Tomatensoße, Petersilie', allergens: ['Gluten', 'Milch', 'Ei'] },
  { name: 'Sosis Dürüm mit Gouda', ingredients: 'Geflügelwurst, Gouda', allergens: ['Gluten', 'Milch', 'Ei'] },
];

const sicakYemekItems: MenuItem[] = [
  { name: 'Pizza Sucuk', ingredients: 'Sucuk, Gouda, Peperoni, Champignons', allergens: ['Gluten', 'Milch', 'Ei'], badge: 'spicy' },
  { name: 'Pizza Pute', ingredients: 'Putenwurst, Gouda, Peperoni, Champignons', allergens: ['Gluten', 'Milch', 'Ei'] },
  { name: 'Pizza Thunfisch', ingredients: 'Thunfisch, Gouda, Peperoni, Champignons', allergens: ['Gluten', 'Milch', 'Ei', 'Fisch'] },
  { name: 'Sosispizza', ingredients: 'Geflügelwurst, Gouda, Peperoni, Champignons', allergens: ['Gluten', 'Milch', 'Ei'] },
  { name: 'Pizza Hack', ingredients: 'Rinderhack, Gouda, Zwiebeln', allergens: ['Gluten', 'Milch', 'Ei'] },
  { name: 'Pizza Käse', ingredients: 'Mozzarella, Tomaten, Petersilie', allergens: ['Gluten', 'Milch', 'Ei'], badge: 'veg' },
  { name: 'Karadeniz Pide Hack', ingredients: 'Rinderhack, Zwiebeln, Petersilie', allergens: ['Gluten', 'Milch', 'Ei'] },
  { name: 'Karadeniz Pide Sucuk', ingredients: 'Sucuk, Gouda', allergens: ['Gluten', 'Milch', 'Ei'], badge: 'spicy' },
  { name: 'Karadeniz Pide Kartoffeln', ingredients: 'Kartoffel, Petersilie, Zwiebel, Tomatenmark', allergens: ['Gluten', 'Milch', 'Ei'], badge: 'veg' },
  { name: 'Karadeniz Pide Käse', ingredients: 'Weißer Käse, Petersilie, Speisequark', allergens: ['Gluten', 'Milch', 'Ei'], badge: 'veg' },
  { name: 'Karadeniz Pide Spinat', ingredients: 'Weißer Käse, Petersilie, Zwiebel, Tomatenmark, Spinat', allergens: ['Gluten', 'Milch', 'Ei'], badge: 'veg' },
  { name: 'Gözleme Hack', ingredients: 'Zwiebeln, Weißer Käse, Butter, Rinderhack, Petersilie, schwarzer Pfeffer', allergens: ['Gluten', 'Milch', 'Ei'] },
  { name: 'Gözleme Spinat', ingredients: 'Zwiebeln, Weißer Käse, Butter, Spinat', allergens: ['Gluten', 'Milch', 'Ei'], badge: 'veg' },
  { name: 'Gözleme Kartoffeln', ingredients: 'Zwiebeln, Weißer Käse, Butter, Kartoffeln, Petersilie, Tomatenmark', allergens: ['Gluten', 'Milch', 'Ei'], badge: 'veg' },
  { name: 'Gözleme Käse', ingredients: 'Zwiebeln, Weißer Käse, Butter, Speisequark, Petersilie', allergens: ['Gluten', 'Milch', 'Ei'], badge: 'veg' },
  { name: 'Mini-Pizza Olive', ingredients: 'Oliven, Tomate, Weißer Käse', allergens: ['Gluten', 'Milch', 'Ei'], badge: 'veg' },
  { name: 'Mini-Pizza Sosis', ingredients: 'Geflügelwurst', allergens: ['Gluten', 'Milch', 'Ei'] },
];

const ekmeklerItems: MenuItem[] = [
  { name: 'Somun', ingredients: 'Mehl, Wasser, Salz, Eisstarmalz, Hefe', allergens: ['Gluten'], badge: 'veg' },
  { name: 'Kücük Somun', ingredients: 'Mehl, Wasser, Salz, Eisstarmalz, Hefe', allergens: ['Gluten'], badge: 'veg' },
  { name: 'Pide', ingredients: 'Mehl, Wasser, Salz, Weizenaktiv, Hefe, Weizensteuerkleie', allergens: ['Gluten'], badge: 'veg' },
  { name: 'Kücük Pide', ingredients: 'Mehl, Wasser, Salz, Weizenaktiv, Hefe, Sesam, Schwarzkümmel', allergens: ['Gluten', 'Sesam'], badge: 'veg' },
  { name: 'Ekmek', ingredients: 'Mehl, Wasser, Salz, Weizenaktiv, Hefe', allergens: ['Gluten'], badge: 'veg' },
  { name: 'Kücük Ekmek', ingredients: 'Mehl, Wasser, Salz, Weizenaktiv, Hefe', allergens: ['Gluten'], badge: 'veg' },
  { name: 'Mısır Ekmek', ingredients: 'Mehl, Wasser, Salz, Weizenaktiv, Hefe', allergens: ['Gluten'], badge: 'veg' },
  { name: 'Baguette', ingredients: 'Mehl, Wasser, Salz, Weizenaktiv, Hefe, Sesam', allergens: ['Gluten', 'Sesam'], badge: 'veg' },
];

const turkTatlilariItems: MenuItem[] = [
  { name: 'Baklava mit Pistazien', ingredients: 'Mehl, Zucker, Wasser, Eier, Pistazie, Butterfett', allergens: ['Gluten', 'Milch', 'Ei', 'Nüsse'], badge: 'sweet' },
  { name: 'Walnuss Baklava', ingredients: 'Mehl, Zucker, Wasser, Eier, Walnuss, Butterfett', allergens: ['Gluten', 'Milch', 'Ei', 'Nüsse'], badge: 'sweet' },
  { name: 'Baklava Kokos', ingredients: 'Mehl, Zucker, Wasser, Eier, Walnuss, Butterfett, Kokosraspeln', allergens: ['Gluten', 'Milch', 'Ei', 'Nüsse'], badge: 'sweet' },
  { name: 'Shakerpare mit Haselnuss', ingredients: 'Mehl, Ei, Milch, Zucker, Vanillearoma, Grieß, Haselnuss', allergens: ['Gluten', 'Milch', 'Ei', 'Nüsse'], badge: 'sweet' },
  { name: 'Shakerpare mit Pistazie', ingredients: 'Mehl, Ei, Milch, Zucker, Vanillearoma, Grieß, Pistazie', allergens: ['Gluten', 'Milch', 'Ei', 'Nüsse'], badge: 'sweet' },
  { name: 'Revani', ingredients: 'Mehl, Ei, Milch, Zucker, Vanillearoma, Grieß, Kokosraspeln', allergens: ['Gluten', 'Milch', 'Ei'], badge: 'sweet' },
  { name: 'Milchreis', ingredients: 'Milch, Reis, Speisestärke, Zucker', allergens: ['Milch'], badge: 'sweet' },
  { name: 'Tahinli Çörek', ingredients: 'Acma-Grundzutaten, Sesampaste, Sesam', allergens: ['Gluten', 'Milch', 'Ei', 'Sesam'], badge: 'sweet' },
];

const almanTatlilariItems: MenuItem[] = [
  { name: 'Ekler mit Pudding', ingredients: 'Mehl, Butter, Milch, Ei, Vanille Pudding, Mandel, Schokokonfitüre', allergens: ['Gluten', 'Milch', 'Ei', 'Nüsse'], badge: 'sweet' },
  { name: 'Ekler mit Schokocreme', ingredients: 'Mehl, Butter, Milch, Ei, Nussnougat-Creme, Schokostreusel', allergens: ['Gluten', 'Milch', 'Ei', 'Nüsse'], badge: 'sweet' },
  { name: 'Ekler mit Karamell', ingredients: 'Mehl, Butter, Milch, Ei, Callebaut Schokolade, Haselnuss', allergens: ['Gluten', 'Milch', 'Ei', 'Nüsse', 'Soja'], badge: 'sweet' },
  { name: 'Ekler mit Buttercreme', ingredients: 'Mehl, Butter, Milch, Ei, Pistazie, Nussnougat-Creme', allergens: ['Gluten', 'Milch', 'Ei', 'Nüsse'], badge: 'sweet' },
  { name: 'Ekler mit Haselnusscreme', ingredients: 'Mehl, Butter, Milch, Ei, Nussnougat-Creme, Haselnuss', allergens: ['Gluten', 'Milch', 'Ei', 'Nüsse'], badge: 'sweet' },
  { name: 'Napoleon', ingredients: 'Butter, Zucker, Milch, Vanillearoma, Eier, Mehl', allergens: ['Gluten', 'Milch', 'Ei'], badge: 'sweet' },
  { name: 'Schokokuchen', ingredients: 'Milch, Zucker, Mehl, Rapsöl, Ei, Kakaopulver, Schokolade', allergens: ['Gluten', 'Milch', 'Ei', 'Nüsse'], badge: 'sweet' },
  { name: 'Mohnkuchen', ingredients: 'Mehl, Ei, Milch, Blaumohn, Zucker, Vanillearoma, Grieß', allergens: ['Gluten', 'Milch', 'Ei'], badge: 'sweet' },
  { name: 'Süß ohne Füllung', ingredients: 'Mehl, Zucker, Hefe, Eier, Margarine, Milch, Vanille Aroma', allergens: ['Gluten', 'Milch', 'Ei'], badge: 'sweet' },
  { name: 'Rosinenzopf / Schnecke', ingredients: 'Grundzutaten, Rosinen', allergens: ['Gluten', 'Milch', 'Ei'], badge: 'sweet' },
  { name: 'Mohntasche', ingredients: 'Grundzutaten, Mohn, Vanille Aroma', allergens: ['Gluten', 'Milch', 'Ei'], badge: 'sweet' },
  { name: 'Lokum Hörnchen', ingredients: 'Grundzutaten, Rosengele, Kokosraspeln', allergens: ['Gluten', 'Milch', 'Ei'], badge: 'sweet' },
  { name: 'Erdbeermarmeladenhörnchen', ingredients: 'Grundzutaten, Erdbeermarmelade', allergens: ['Gluten', 'Milch', 'Ei'], badge: 'sweet' },
  { name: 'Schokohörnchen', ingredients: 'Grundzutaten, Nussnougat-Creme, Schokostreusel', allergens: ['Gluten', 'Milch', 'Ei', 'Nüsse'], badge: 'sweet' },
];

const kahveItems: MenuItem[] = [
  { name: 'Türk Kahvesi', ingredients: 'Arabica-Kaffee, Zucker optional', allergens: [], badge: 'new' },
  { name: 'Espresso', ingredients: 'Frisch gemahlener Espresso', allergens: [] },
  { name: 'Doppelter Espresso', ingredients: 'Zwei Espresso-Shots', allergens: [] },
  { name: 'Cappuccino', ingredients: 'Espresso, aufgeschäumte Milch', allergens: ['Milch'] },
  { name: 'Latte Macchiato', ingredients: 'Espresso, viel Milchschaum', allergens: ['Milch'] },
  { name: 'Milchkaffee', ingredients: 'Filterkaffee, warme Milch', allergens: ['Milch'] },
  { name: 'Filterkaffee', ingredients: 'Frisch gebrühter Filterkaffee', allergens: [] },
  { name: 'Americano', ingredients: 'Espresso, heißes Wasser', allergens: [] },
];

const iceceklerItems: MenuItem[] = [
  { name: 'Türkischer Tee', ingredients: 'Schwarzer Tee', allergens: [], badge: 'veg' },
  { name: 'Ayran', ingredients: 'Joghurt, Wasser, Salz', allergens: ['Milch'], badge: 'veg' },
  { name: 'Orangensaft', ingredients: 'Frisch gepresster Orangensaft', allergens: [], badge: 'veg' },
  { name: 'Apfelsaft', ingredients: 'Apfelsaft', allergens: [], badge: 'veg' },
  { name: 'Hausgemachte Limonade', ingredients: 'Zitrone, Zucker, Wasser, Minze', allergens: [], badge: 'veg' },
  { name: 'Cola', ingredients: '0,33 l', allergens: [], badge: 'veg' },
  { name: 'Fanta', ingredients: '0,33 l', allergens: [], badge: 'veg' },
  { name: 'Sprite', ingredients: '0,33 l', allergens: [], badge: 'veg' },
  { name: 'Mineralwasser still', ingredients: '0,5 l', allergens: [], badge: 'veg' },
  { name: 'Mineralwasser sprudelnd', ingredients: '0,5 l', allergens: [], badge: 'veg' },
];

export const menuData: MenuCategory[] = [
  {
    id: 'kahvalti',
    color: 'text-red-900',
    bgColor: 'bg-red-50 border-red-200',
    name: { TR: 'Kahvaltı', DE: 'Frühstück', EN: 'Breakfast' },
    description: {
      TR: 'Taze somun ve açma ile hazırlanan kahvaltılık sandviçler.',
      DE: 'Frische Frühstückssandwiches mit Somun und Açma.',
      EN: 'Fresh breakfast sandwiches on somun and açma rolls.',
    },
    items: kahvaltiItems,
  },
  {
    id: 'hamur-isleri',
    color: 'text-red-950',
    bgColor: 'bg-red-50 border-red-200',
    name: { TR: 'Hamur İşleri', DE: 'Gebäck', EN: 'Pastries' },
    description: {
      TR: 'Açma, börek, poğaça, simit ve örme – fırından taze.',
      DE: 'Açma, Börek, Poğaça, Simit und Örme – frisch aus dem Ofen.',
      EN: 'Açma, börek, poğaça, simit and braided rolls – fresh from the oven.',
    },
    items: hamurIsleriItems,
  },
  {
    id: 'sicak-yemek',
    color: 'text-red-900',
    bgColor: 'bg-red-50 border-red-200',
    name: { TR: 'Sıcak Yemek', DE: 'Warme Gerichte', EN: 'Hot Dishes' },
    description: {
      TR: 'Pizza, Karadeniz pide ve gözleme – sıcak servis.',
      DE: 'Pizza, Karadeniz-Pide und Gözleme – heiß serviert.',
      EN: 'Pizza, Black Sea pide and gözleme – served hot.',
    },
    items: sicakYemekItems,
  },
  {
    id: 'ekmekler',
    color: 'text-black',
    bgColor: 'bg-gray-50 border-gray-300',
    name: { TR: 'Ekmekler', DE: 'Brote', EN: 'Breads' },
    description: {
      TR: 'Günlük taze somun, pide ve ekmek çeşitleri.',
      DE: 'Täglich frische Somun-, Pide- und Brotvariationen.',
      EN: 'Daily fresh somun, pide and bread varieties.',
    },
    items: ekmeklerItems,
  },
  {
    id: 'turk-tatlilari',
    color: 'text-red-900',
    bgColor: 'bg-red-50 border-red-200',
    name: { TR: 'Türk Tatlıları', DE: 'Türkische Süßigkeiten', EN: 'Turkish Desserts' },
    description: {
      TR: 'Baklava, şekerpare, revani ve geleneksel tatlılar.',
      DE: 'Baklava, Şekerpare, Revani und traditionelle Süßspeisen.',
      EN: 'Baklava, şekerpare, revani and traditional sweets.',
    },
    items: turkTatlilariItems,
  },
  {
    id: 'alman-tatlilari',
    color: 'text-red-900',
    bgColor: 'bg-red-50 border-red-200',
    name: { TR: 'Alman Tatlıları', DE: 'Deutsche Süßigkeiten', EN: 'German Pastries' },
    description: {
      TR: 'Ekler, kek ve Avrupa tarzı tatlı hamur işleri.',
      DE: 'Ekler, Kuchen und europäische Süßgebäck-Klassiker.',
      EN: 'Éclairs, cakes and European-style sweet pastries.',
    },
    items: almanTatlilariItems,
  },
  {
    id: 'kahve',
    color: 'text-[#7a0d0e]',
    bgColor: 'bg-gray-50 border-gray-200',
    name: { TR: 'Kahve', DE: 'Kaffee', EN: 'Coffee' },
    description: {
      TR: 'Türk kahvesinden espresso çeşitlerine.',
      DE: 'Vom Türkischen Kaffee bis zum Espresso.',
      EN: 'From Turkish coffee to espresso specialties.',
    },
    items: kahveItems,
  },
  {
    id: 'icecekler',
    color: 'text-black',
    bgColor: 'bg-gray-50 border-gray-200',
    name: { TR: 'İçecekler', DE: 'Getränke', EN: 'Drinks' },
    description: {
      TR: 'Çay, ayran, meyve suları ve soğuk içecekler.',
      DE: 'Tee, Ayran, Säfte und Erfrischungsgetränke.',
      EN: 'Tea, ayran, juices and soft drinks.',
    },
    items: iceceklerItems,
  },
];

export const allergenColors: Record<string, string> = {
  Gluten: 'bg-red-50 text-red-900 border-red-200',
  Milch: 'bg-blue-100 text-blue-800 border-blue-300',
  Ei: 'bg-gray-100 text-gray-900 border-gray-300',
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
