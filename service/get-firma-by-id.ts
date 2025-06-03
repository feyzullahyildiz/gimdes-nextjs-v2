import { Tag } from "./tag.enum";
import { FirmaItem } from "@/types/api/firma";

export async function getFirmaById(id: string) {
  const response = await fetch(
    `${process.env.JSON_SERVER_API}/api/latest/firmalar/${id}`,
    {
      next: {
        revalidate: 60,
        tags: [Tag.PRODUCTS],
      },
    },
  );
  // await new Promise((resolve) => setTimeout(resolve, 1000));
  const data = await response.json();
  return data as FirmaItem;
}
