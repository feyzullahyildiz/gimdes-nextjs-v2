import { ICategory } from "@/types/api/category";
import { Tag } from "./tag.enum";

export async function getCategories() {
  const response = await fetch(
    `${process.env.JSON_SERVER_API}/api/latest/kategoriler/`,
    {
      next: {
        revalidate: 60,
        tags: [Tag.CATEGORIES],
      },
      // cache: "force-cache",
    },
  );
  const data = await response.json();
  return data as ICategory[];
}
