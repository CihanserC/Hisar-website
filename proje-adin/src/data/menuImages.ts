import imgKahvalti from '../assets/categories/kahvalti.jpg';
import imgHamurIsleri from '../assets/categories/hamur-isleri.jpg';
import imgSicakYemek from '../assets/categories/sicak-yemek.jpg';
import imgEkmekler from '../assets/categories/ekmekler.jpg';
import imgTurkTatlilari from '../assets/categories/turk-tatlilari.jpg';
import imgAlmanTatlilari from '../assets/categories/alman-tatlilari.jpg';
import imgKahve from '../assets/foods/jpg/menu-kahve.jpg';
import imgIcecekler from '../assets/foods/jpg/menu-icecekler.jpg';

import imgPastry from '../assets/foods/jpg/IMG_7649.jpg';
import imgBorek from '../assets/foods/jpg/IMG_7594.jpg';
import imgBread from '../assets/foods/jpg/IMG_7924.jpg';
import imgBaklava from '../assets/foods/jpg/IMG_7596.jpg';
import imgGermanSweet from '../assets/foods/jpg/IMG_7610.jpg';
import imgHot from '../assets/foods/jpg/IMG_7657.jpg';
import imgSandwich from '../assets/foods/jpg/IMG_7656.jpg';
import imgPizza from '../assets/foods/jpg/IMG_7611.jpg';
import imgCroissant from '../assets/foods/jpg/IMG_7660.jpg';
import imgEclair from '../assets/foods/jpg/IMG_7648.jpg';
import imgDefault from '../assets/foods/jpg/IMG_7593.jpg';

/** Category card images – themed photos in assets/categories. */
const categoryImages: Record<string, string> = {
  kahvalti: imgKahvalti,
  'hamur-isleri': imgHamurIsleri,
  'sicak-yemek': imgSicakYemek,
  ekmekler: imgEkmekler,
  'turk-tatlilari': imgTurkTatlilari,
  'alman-tatlilari': imgAlmanTatlilari,
  kahve: imgKahve,
  icecekler: imgIcecekler,
};

export function getCategoryImage(categoryId: string): string {
  return categoryImages[categoryId] ?? imgDefault;
}

const photos = {
  breakfast: imgSandwich,
  sandwich: imgSandwich,
  turkishPastry: imgPastry,
  borek: imgBorek,
  bread: imgBread,
  pizza: imgPizza,
  pide: imgHot,
  baklava: imgBaklava,
  turkishSweet: imgBaklava,
  cake: imgGermanSweet,
  croissant: imgCroissant,
  eclair: imgEclair,
  coffee: imgKahve,
  tea: imgIcecekler,
  juice: imgIcecekler,
  default: imgDefault,
} as const;

const categoryDefault: Record<string, string> = {
  kahvalti: imgKahvalti,
  'turk-tatlilari': imgTurkTatlilari,
  'alman-tatlilari': imgAlmanTatlilari,
  'hamur-isleri': imgHamurIsleri,
  ekmekler: imgEkmekler,
  'sicak-yemek': imgSicakYemek,
  kahve: imgKahve,
  icecekler: imgIcecekler,
};

export function getMenuItemImage(name: string, categoryId: string): string {
  const n = name.toLowerCase();

  if (n.includes('baklava') || n.includes('shakerpare') || n.includes('revani')) return photos.baklava;
  if (n.includes('milchreis') || n.includes('tahinli')) return photos.turkishSweet;
  if (n.includes('ekler') || n.includes('napoleon')) return photos.eclair;
  if (n.includes('kuchen') || n.includes('mohnkuchen')) return photos.cake;
  if (n.includes('hörnchen') || n.includes('mohntasche') || n.includes('rosinenzopf')) return photos.croissant;
  if (n.includes('süß') || n.includes('lokum')) return photos.croissant;

  if (n.includes('espresso') || n.includes('cappuccino') || n.includes('latte') || n.includes('macchiato'))
    return photos.coffee;
  if (n.includes('türk') && n.includes('kaffee')) return photos.coffee;
  if (n.includes('kaffee') || n.includes('filter')) return photos.coffee;

  if (n.includes('çay') || n.includes('tee')) return photos.tea;
  if (n.includes('ayran') || n.includes('saft') || n.includes('limonade')) return photos.juice;
  if (n.includes('cola') || n.includes('fanta') || n.includes('sprite') || n.includes('wasser'))
    return photos.juice;

  if (n.includes('belegtes')) return photos.sandwich;
  if (n.includes('pizza') || n.includes('sosispizza')) return photos.pizza;
  if (n.includes('pide') || n.includes('karadeniz')) return photos.pide;
  if (n.includes('gözleme')) return photos.pide;
  if (n.includes('börek')) return photos.borek;
  if (n.includes('baguette') || n.includes('somun') || n.includes('ekmek')) return photos.bread;
  if (n === 'pide') return photos.bread;

  if (n.includes('acma') || n.includes('poğaça') || n.includes('örme') || n.includes('hashashli'))
    return photos.turkishPastry;

  return categoryDefault[categoryId] ?? photos.default;
}
