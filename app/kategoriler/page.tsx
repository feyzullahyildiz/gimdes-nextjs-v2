import React from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { getCategoriesWithEmoji } from "@/service/get-kategories";

export const dynamic = "force-dynamic";

export default async function Page() {
  const categories = await getCategoriesWithEmoji();
  return (
    <div className="container mx-auto py-4">
      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-6">
        {categories.map((category) => (
          <Link
            href={`/kategori/${category.id}`}
            key={category.id}
            className={cn(
              "min-h-60 min-w-56",
              "group flex flex-col overflow-hidden rounded-md transition-all duration-300",
              "outline-2 outline-gray-100 hover:outline-sky-300",
              "shadow-md hover:shadow-xl",
              "cursor-pointer",
            )}
          >
            <div className="relative flex h-32 items-center justify-center">
              <span className="p-4 text-center text-6xl">{category.emoji}</span>
            </div>

            <span
              className={cn(
                "flex flex-1 flex-col p-4",
                "bg-gray-50/80",
                "group-hover:bg-blue-50",
                "transition-all duration-300",
                "text-lg font-semibold wrap-break-word",
              )}
            >
              <div>{category.name}</div>
              <div className="min-h-4 flex-1"></div>
              <div
                className={cn("flex justify-between text-sm", "text-gray-500")}
              >
                <span>Sertifika Sayısı :</span>
                <span>{category.SertifikaSayisi}</span>
              </div>
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
