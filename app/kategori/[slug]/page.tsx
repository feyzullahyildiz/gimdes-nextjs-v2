import React from "react";
import { getProductsByCategory } from "@/service/get-products";
import { SertifikaItemCard } from "@/components/sertifika-item-card";
import { getCategoryById } from "@/service/get-category-by-id";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const [products, category] = await Promise.all([
    getProductsByCategory(slug),
    getCategoryById(slug),
  ]);
  return (
    <div className="container mx-auto flex flex-col gap-8 py-8">
      <div className="flex gap-4 justify-between">
        <h1 className="text-2xl font-semibold">{category.KategoriAdi}</h1>
        {/* <input placeholder="Arama yapınız..." /> */}
      </div>
      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-6">
        {products.map((item) => (
          <SertifikaItemCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
