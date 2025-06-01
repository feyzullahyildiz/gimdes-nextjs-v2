import { Tag } from "./tag.enum";
import { getActiveVersion } from "./get-active-version";

import { unstable_cache as cache } from "next/cache";
export interface CategoryItem {
  id: string;
  KategoriAdi: string;
  SertifikaSayisi?: number;
}

export interface CategoryWithEmoji extends CategoryItem {
  name: string;
  emoji: string;
  orjName: string;
}

export async function getCategories(version?: string) {
  const activeVersion = version || (await getActiveVersion());
  console.log("getCategories START", activeVersion);
  const response = await fetch(
    `${process.env.JSON_SERVER_API}/api/${activeVersion}/kategoriler/`,
    {
      next: {
        revalidate: 60,
        tags: [Tag.CATEGORIES],
      },
      // cache: "force-cache",
    },
  );
  const data = await response.json();
  return data as CategoryItem[];
}

export async function getCategoriesWithEmoji(
  version?: string,
): Promise<CategoryWithEmoji[]> {
  console.log("getCategoriesWithEmoji START");
  const categories = await getCategories(version);
  const res = categories.map(withEmoji);
  console.log("getCategoriesWithEmoji DONE");
  return res;
}

export const getCachedCategoriesWithEmoji = cache(getCategoriesWithEmoji, [], {
  revalidate: 60,
  tags: [Tag.CATEGORIES],
});
function withEmoji(category: CategoryItem): CategoryWithEmoji {
  const name = category.KategoriAdi.split("/")[0].trim();

  const emojiMap: { [key: string]: string } = {
    Ambalaj: "📦",
    "Aromalar ve Esanslar": "🌸",
    "Aromatik Yağlar ve Aromatik Çaylar": "🍵",
    Baharat: "🌶️",
    Bakliyat: "🫘",
    Bal: "🍯",
    "Bebek ve Çocuk Beslenmesi": "👶",

    "Beyaz Et": "🐔",
    "Beyaz Et (Tavuk ve Hindi)": "🐔",

    "Bisküvi, Çikolata, Kek, Cips ve Şekerleme": "🍪",
    "Bitkisel Yağ": "🫒",
    "Catering ve Restorant": "🍽️",
    "Dondurma ve Meyveli Buzlar": "🍦",
    "Ekmek Mayası": "🍞",
    "Gıda Dışı Katkı Maddeleri": "🧪",
    "Gıda Katkı Maddeleri": "🧪",
    "Giyim ve Tekstil": "👕",
    "Helva, Reçel, Lokum, Pişmaniye ve Tatlılar": "🍬",
    "İşlenmiş Et Ürünleri": "🥓🌭",
    "Kırmızı Et": "🥩",
    "Kozmetik ve Kişisel Bakım Ürünleri": "💄",
    "Kuruyemiş, Kurutulmuş Meyve ve Sebze": "🥜",
    Makarna: "🍝",

    "Meşrubatlar (Madensuyu, Şıralar, Şerbetler vb.)": "🥤",

    "Meyve Suyu, Konsantre ve Püreleri": "🧃",

    "Mısır Cips": "🌽🍿",
    "Mısır Cips vs": "🌽🍿",

    "Nişasta, Glikoz Şurupları ve Doğal Tatlandırıcılar": "🍯",
    Oyuncak: "🧸",
    "Özel Gıdalar": "🍱",

    "Peynir Mayaları ve Starter Kültürler": "🧫",

    "Salça, Konserve, Turşu, Soslar": "🥫",
    "Siyah Çay, Kahve": "☕",
    "Siyah Çay, Kahve vb.": "☕",
    Su: "💧",
    "Süt ve Süt Ürünleri": "🥛🧀",
    "TAKVİYE EDİCİ GIDALAR": "💊",
    "Temizlik Maddeleri": "🧹",
    Tuz: "🧂",
    Un: "🌾",
    "Unlu Mamuller ve Pastacılık Malzemeleri": "🥖",
    "Üretim Yardımcı Malzemeler": "🔧",
    Yumurta: "🥚",
    "Zeytin ve Çeşitleri": "🫒",
  };

  return {
    ...category,
    name,
    orjName: category.KategoriAdi,
    emoji: emojiMap[name] || "❓",
  };
}
