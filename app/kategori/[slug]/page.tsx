import React from "react";
import { getProductsByCategory } from "@/service/get-products";
import { getCategoryById } from "@/service/get-category-by-id";
import { CategoryPageContent } from "./category-page-content";

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
  const partialProducts = products.map((product) => ({
    document: product,
  }));
  return (
    <CategoryPageContent 
      initialProducts={partialProducts}
      category={category}
      categorySlug={slug}
    />
  );
}
