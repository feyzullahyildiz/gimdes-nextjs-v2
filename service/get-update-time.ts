import { Tag } from "./tag.enum";
import { VersionResponse } from "@/types/api/version";
export async function getUpdateTime() {
  const response = await fetch(`${process.env.JSON_SERVER_API}/api/latest/version`, {
    next: {
      revalidate: 60,
      tags: [Tag.VERSIONS],
    },
  });
  const data = await response.json() as VersionResponse;
  return data;
}
