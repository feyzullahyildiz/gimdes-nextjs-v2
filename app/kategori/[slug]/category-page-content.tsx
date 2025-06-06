"use client";

// TODO bu componeti bu path'den çıkart
import React, { useState, useEffect, useCallback } from "react";
import { Input } from "@/components/ui/input";
import { SertifikaItemCard } from "@/components/sertifika-item-card";
import type {
  TypesenseApiResponse,
  TypesenseApiResponseItem,
} from "@/types/typesense/ApiRes";
import { ICategory } from "@/types/api/category";

interface CategoryPageContentProps {
  initialProducts: Partial<
    Omit<
      TypesenseApiResponseItem,
      "text_match" | "highlights" | "text_match_info"
    >
  >[];
  category: ICategory;
  categorySlug: string;
}

// Custom debounce hook
function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}

export function CategoryPageContent({
  initialProducts,
  category,
  categorySlug,
}: CategoryPageContentProps) {
  const [products, setProducts] = useState<Partial<TypesenseApiResponseItem>[]>(
    [],
  );
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Debounced search term
  const debouncedSearchTerm = useDebounce(searchTerm, 80);

  // Search function
  const searchProducts = useCallback(
    async (term: string, abortController: AbortController) => {
      if (!term.trim()) {
        setProducts(initialProducts);
        setIsLoading(false);
        return;
      }

      try {
        setIsLoading(true);
        const response = await fetch(
          `/search-api/kategori/${categorySlug}?q=${encodeURIComponent(term)}`,
          {
            signal: abortController.signal,
          },
        );
        const data = await response.json();

        const hits = data.hits as TypesenseApiResponse;

        setProducts(hits);
      } catch (error) {
        console.error("Arama hatası:", error);
        setProducts(initialProducts);
      } finally {
        setIsLoading(false);
      }
    },
    [categorySlug, initialProducts],
  );

  // Effect for debounced search
  useEffect(() => {
    const abortController = new AbortController();
    searchProducts(debouncedSearchTerm, abortController);
    return () => {
      abortController.abort();
    };
  }, [debouncedSearchTerm, searchProducts]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    if (!value.trim()) {
      setProducts(initialProducts);
      setIsLoading(false);
    } else {
      setIsLoading(true);
    }
  };

  return (
    <div className="container mx-auto flex flex-col gap-8 py-8">
      <div className="flex flex-col justify-between gap-4 md:flex-row">
        <h1 className="text-2xl font-semibold">{category.KategoriAdi}</h1>
        <div className="relative max-w-96">
          <Input
            className="w-full"
            placeholder="Arama yapınız..."
            value={searchTerm}
            onChange={handleSearchChange}
          />
          {isLoading && (
            <div className="absolute top-1/2 right-3 -translate-y-1/2">
              <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24">
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                  fill="none"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                />
              </svg>
            </div>
          )}
        </div>
      </div>
      <div className="grid gap-2 md:grid-cols-3 md:gap-8 lg:grid-cols-4 2xl:grid-cols-6">
        {products.map((item) => (
          <SertifikaItemCard
            key={item.document!.id}
            item={item.document!}
            highlight={item.highlight}
          />
        ))}
      </div>
      {products.length === 0 && searchTerm && !isLoading && (
        <div className="py-8 text-center text-gray-500">
          Arama sonucu bulunamadı.
        </div>
      )}
    </div>
  );
}
