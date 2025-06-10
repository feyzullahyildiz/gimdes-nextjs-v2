import React from "react";
import { getCategories } from "@/service/get-kategories";
import { CategoryItemCard } from "@/components/category-item-card";

export const dynamic = "force-dynamic";

export default async function Page() {
  const categories = await getCategories();
  return (
    <div className="container mx-auto py-4">
      <div className="grid gap-2 md:grid-cols-3 md:gap-8 lg:grid-cols-4 2xl:grid-cols-6">
        {categories.map((category) => (
          <CategoryItemCard
            key={category.id}
            category={category}
            showSertifikaSayisi
          />
        ))}
      </div>
    </div>
  );
}
