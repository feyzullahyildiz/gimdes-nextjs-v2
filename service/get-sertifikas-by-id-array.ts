import { Tag } from "./tag.enum";
import { ISertifikaItem } from "@/types/typesense/ApiRes";

export async function getSertifikasByIdArray(ids: string[]) {
  if (ids.length === 0) {
    return [];
  }
  const query = new URLSearchParams();
  ids.forEach((id) => {
    query.append("id", id);
  });
  const params = query.toString();
  const response = await fetch(
    `${process.env.JSON_SERVER_API}/api/latest/sertifikalar?${params}`,
    {
      next: {
        revalidate: 60,
        tags: [Tag.PRODUCTS],
      },
    },
  );
  const data = await response.json();
  return data as ISertifikaItem[];
}
