import { Tag } from "./tag.enum";
import { getActiveVersion } from "./get-active-version";

export interface ProductItem {
  id: string
  FirmaId: number
  FirmaAdi: string
  FirmaAdresi: string
  FirmaTelefon: string
  FirmaIletisimEmail: string
  FirmaIl: string
  FirmaUlke: string
  SertifikaId: number
  KategoriId: number
  KategoriAdi: string
  MarkaAdi: string
  MarkaLogosu: string
  SertifikaNo: string
  IlkSertifikaAlimTarihi: string
  SertifikaBitisTarihi: string
  YildizSayisi: number
  GuncellemeTarihi: string
  SertifikaKapsami: string
  Durum: string
  HanefiOk: boolean
  HanbeliOk: boolean
  SafiOk: boolean
  MalikiOk: boolean
  SertifikaResimleri: SertifikaResimleri[]
  KapsamOnizleme: string
  Rozet: string
  BarkodluUrunSayisi: number
  Tarihce?: string
  unstable_SertifikaKapsami: string[]
  unstable_Tarihce: string[]
  KapsamDisi?: string
  FirmaWebSayfasi?: string
  IptalAciklamasi?: string
}
interface SertifikaResimleri {
  Filename: string
  OriginalName: string
}


export async function getProductsByCategory(categoryId: string, version?: string) {
  const activeVersion = version || (await getActiveVersion());
  const response = await fetch(
    `${process.env.JSON_SERVER_API}/api/${activeVersion}/sertifikalar?KategoriId=${categoryId}`,
    {
      next: {
        revalidate: 60,
        tags: [Tag.PRODUCTS],
      },
      
    }
  );
  const data = await response.json();
  return data as ProductItem[];
}

