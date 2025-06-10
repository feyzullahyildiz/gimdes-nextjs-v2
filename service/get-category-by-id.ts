import { ICategory } from "@/types/api/category";
import { Tag } from "./tag.enum";

export async function getCategoryById(categoryId: string) {
  const response = await fetch(
    `${process.env.JSON_SERVER_API}/api/latest/kategoriler/${categoryId}`,
    {
      next: {
        revalidate: 60,
        tags: [Tag.CATEGORIES],
      },
    },
  );
  if (!response.ok) {
    return null;
  }
  const data = await response.json();
  return data as ICategory;
}
