import { Tag } from "./tag.enum";
import { ISertifikaItem } from "@/types/typesense/ApiRes";

export async function getProductsByCategory(categoryId: string) {
  const query = new URLSearchParams();
  // query.set("_sort", "MarkaAdi,FirmaAdi");
  // query.set("_order", "desc,desc");
  query.set("_tr_sort", "MarkaAdi,FirmaAdi");
  // query.set("_tr_order", "desc,desc");
  query.set("KategoriId", categoryId);
  const response = await fetch(
    `${process.env.JSON_SERVER_API}/api/latest/sertifikalar?${query.toString()}`,
    {
      next: {
        revalidate: 60,
        tags: [Tag.PRODUCTS],
      },
    },
  );
  if (!response.ok) {
    return null;
  }
  const data = await response.json();
  return data as ISertifikaItem[];
}
