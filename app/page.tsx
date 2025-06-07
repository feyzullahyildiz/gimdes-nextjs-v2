"use client";
import { SertifikaItemCard } from "@/components/sertifika-item-card";
import { Input } from "@/components/ui/input";
import { TypesenseApiResponse } from "@/types/typesense/ApiRes";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { useDebounce } from "@/util/use-debounce";

export default function Home() {
  const [search, setSearch] = useState("");
  const [data, setData] = useState<TypesenseApiResponse>([]);
  const debouncedSearch = useDebounce(search, 100);
  useEffect(() => {
    if (debouncedSearch.trim().length === 0) {
      setData([]);
      return;
    }
    const abortController = new AbortController();
    const fetchData = async () => {
      try {
        const response = await fetch(`/search-api?q=${debouncedSearch}`, {
          signal: abortController.signal,
        });
        const data = await response.json();
        setData(data.hits);
      } catch (error) {
        console.log("Arama hatası:", error);
      }
    };
    fetchData();
    return () => {
      abortController.abort("hızlı arama");
    };
  }, [debouncedSearch]);
  return (
    <div className={cn("container mx-auto flex flex-1 flex-col gap-4 pt-4")}>
      <Input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Arama yapınız..."
        autoFocus
        className="text-primary !bg-background sticky top-22 z-10 w-full border-2 border-sky-50 px-4 py-6"
      />
      <div className="grid flex-wrap gap-2 md:grid-cols-3 md:gap-6 lg:grid-cols-4 2xl:grid-cols-6">
        {data.map((item, index) => (
          <SertifikaItemCard
            key={index + item.document.id}
            item={item.document}
            highlight={item.highlight}
            // showCategory
          />
        ))}
      </div>
      {data.length === 0 && (
        <div className="flex flex-1 flex-col items-center justify-center opacity-50 select-none">
          <h1 className="text-muted-foreground text-8xl">GİMDES</h1>
          <p className="text-muted-foreground text-3xl">
            Sertifika arama motoru.
          </p>
          <p className="text-muted-foreground text-lg">
            Üçüncü parti uygulama.
          </p>
        </div>
      )}
    </div>
  );
}
