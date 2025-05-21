import { Tag } from "./tag.enum";

export async function getVersions() {
  const response = await fetch(`${process.env.JSON_SERVER_API}/api/list`, {
    next: {
      revalidate: 60,
      tags: [Tag.VERSIONS],
    },
  });
  const data = await response.json();
  return data.sort().reverse() as string[];
}
