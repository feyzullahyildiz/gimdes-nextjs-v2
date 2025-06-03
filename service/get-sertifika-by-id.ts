import { Tag } from "./tag.enum";
import { ISertifikaItem } from "@/types/typesense/ApiRes";

export async function getSertifikaById(id: string) {
  const response = await fetch(
    `${process.env.JSON_SERVER_API}/api/latest/sertifikalar/${id}`,
    {
      next: {
        revalidate: 60,
        tags: [Tag.PRODUCTS],
      },
    },
  );
  const data = await response.json();
  return data as ISertifikaItem;
}
