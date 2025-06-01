import { getProductsByCategory } from "@/service/get-products";
import React from "react";
import { SertifikaItemCard } from "@/components/sertifika-item-card";

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const products = await getProductsByCategory(slug);
  return (
    <div className="container mx-auto py-4">
      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-6">
        {products.map((item) => (
          <SertifikaItemCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
