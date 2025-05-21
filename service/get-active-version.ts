import { getVersions } from "./get-versions";
import { cookies } from "next/headers";

export async function getActiveVersion() {
  const cookieStore = await cookies();
  if (cookieStore.get("version")?.value) {
    return cookieStore.get("version")?.value;
  }
  const versions = await getVersions();
  return versions[versions.length - 1];
}
