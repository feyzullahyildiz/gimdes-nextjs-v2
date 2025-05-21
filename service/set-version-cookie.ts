"use server";

import { cookies } from "next/headers";

export async function setVersionCookie(version: string) {
  const cookieStore = await cookies();
  cookieStore.set("version", version);
}

