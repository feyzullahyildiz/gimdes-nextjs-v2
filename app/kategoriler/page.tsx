import { getCachedCategoriesWithEmoji } from "@/service/get-kategories";
import { getActiveVersion } from "@/service/get-active-version";
import React from "react";
import { cn } from "@/util/cn";
import Link from "next/link";

export default async function Page() {
  const activeVersion = await getActiveVersion();
  const categories = await getCachedCategoriesWithEmoji(activeVersion);
  return (
    <div className="container mx-auto py-4">
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-6">
        {categories.map((category) => (
          <Link
            href={`/kategori/${category.id}`}
            key={category.id}
            className={cn(
              "group flex flex-col justify-between gap-8 rounded-md bg-gray-100",
              "overflow-hidden",
              "shadow-sm",
            )}
          >
            <span className="p-4 text-center text-6xl">{category.emoji}</span>
            <span className="p-4 text-center group-hover:bg-gray-400">
              {category.name}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
export const revalidate = 60;
