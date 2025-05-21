import { getCachedCategoriesWithEmoji } from "@/service/get-kategories";
import { getActiveVersion } from "@/service/get-active-version";
import React from "react";
import { cn } from "@/util/cn";
import Link from "next/link";

export default async function Page() {
  const activeVersion = await getActiveVersion();
  const categories = await getCachedCategoriesWithEmoji(activeVersion);
  // console.log("categories", categories);
  return (
    <div className="container mx-auto py-4">
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-6 gap-4">
        {categories.map((category) => (
          <Link
            href={`/kategori/${category.id}`}
            key={category.id}
            className={cn(
              "group rounded-md flex flex-col gap-8 justify-between bg-gray-100",
              "overflow-hidden"
            )}
          >
            <span className="p-4 text-6xl text-center">{category.emoji}</span>
            <span className="p-4 text-center group-hover:bg-gray-400">
              {category.name}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
