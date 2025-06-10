export type ICategory = {
  id: string;
  Id: number;
  KategoriAdi: string;
  SertifikaSayisi: number;
  name: string;
  emoji: string;
  kapsam: string[];
  keywords: string[];
};

export type ICategoryFieldName = keyof ICategory;

export type TypesenseCategoriItemHighlight = {
  [key in ICategoryFieldName]: {
    matched_tokens: Array<string>;
    snippet: string;
  };
};

export type TypesenseCategoriItemHighlightArray = {
  [key in ICategoryFieldName]: {
    matched_tokens: Array<string>;
    snippet: string;
  }[];
};
