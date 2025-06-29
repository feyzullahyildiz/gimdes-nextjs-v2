// TODO Burası bir elden geçsin....
import { ICategory, TypesenseCategoriItemHighlight } from "../api/category";

export type TypesenseApiResponse = Array<TypesenseApiResponseItem>;

export type ISertifikaItem = {
  BarkodluUrunSayisi: number;
  Durum: string;
  FirmaAdi: string;
  FirmaAdresi: string;
  FirmaId: number;
  FirmaIl: string;
  FirmaIletisimEmail: string;
  FirmaTelefon: string;
  FirmaUlke: string;
  FirmaWebSayfasi?: string;
  GuncellemeTarihi: string;
  HanbeliOk: boolean;
  HanefiOk: boolean;
  IlkSertifikaAlimTarihi: string;
  KapsamDisi?: string;
  KapsamOnizleme: string;
  KategoriAdi: string;
  KategoriId: number;
  MalikiOk: boolean;
  MarkaAdi: string;
  MarkaLogosu: string;
  Rozet: string;
  SafiOk: boolean;
  SertifikaBitisTarihi: string;
  SertifikaId: number;
  SertifikaKapsami: string;
  SertifikaNo: string;
  SertifikaResimleri: Array<{
    Filename: string;
    OriginalName: string;
  }>;
  Tarihce: string;
  YildizSayisi: number;
  id: string;
  unstable_SertifikaKapsami: Array<string>;
  unstable_Tarihce: Array<string>;
  kategori_name: string;
  kategori_emoji: string;
};
export type TypesenseSertifikaItemHighlight = {
  [key in SertifikaItemFieldName]: {
    matched_tokens: Array<string>;
    snippet: string;
  };
};
export type TypesenseApiResponseItem = {
  document: ISertifikaItem;
  highlight: TypesenseSertifikaItemHighlight;
  highlights: Array<{
    field: string;
    matched_tokens: Array<string>;
    snippet: string;
  }>;
  text_match: number;
  text_match_info: {
    best_field_score: string;
    best_field_weight: number;
    fields_matched: number;
    num_tokens_dropped: number;
    score: string;
    tokens_matched: number;
    typo_prefix_score: number;
  };
};

export type TypesenseSertifikaItemHighlightForKapsam = {
  [key in SertifikaItemFieldName]: {
    matched_tokens: Array<string>;
    snippet: string;
  }[];
};
export type TypesenseSertifikaItemHighlightsForKapsam = Array<{
  field: string
  indices: Array<number>
  matched_tokens: Array<Array<string>>
  snippets: Array<string>
}>
export type TypesenseApiResponseItemForKapsam = {
  document: ISertifikaItem;
  highlight: TypesenseSertifikaItemHighlightForKapsam;
  highlights: TypesenseSertifikaItemHighlightsForKapsam;
  text_match: number;
  text_match_info: {
    best_field_score: string;
    best_field_weight: number;
    fields_matched: number;
    num_tokens_dropped: number;
    score: string;
    tokens_matched: number;
    typo_prefix_score: number;
  };
};
export type TypesenseApiResponseCategoryItem = {
  document: ICategory;
  highlight: TypesenseCategoriItemHighlight;
  highlights: Array<{
    field: string;
    matched_tokens: Array<string>;
    snippet: string;
  }>;
  text_match: number;
  text_match_info: {
    best_field_score: string;
    best_field_weight: number;
    fields_matched: number;
    num_tokens_dropped: number;
    score: string;
    tokens_matched: number;
    typo_prefix_score: number;
  };
};

export type SertifikaItemFieldName = keyof Omit<
  TypesenseApiResponseItem["document"],
  | "BarkodluUrunSayisi"
  | "SertifikaResimleri"
  // | "unstable_SertifikaKapsami"
  | "unstable_Tarihce"
>;
