"use client";
import { Input } from "@/components/ui/input";
import type { TypesenseApiResponseItemForKapsam } from "@/types/typesense/ApiRes";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { useDebounce } from "@/util/use-debounce";
import { SertifikaItemCardWithKapsam } from "@/components/sertifika-item-card-with-kapsam";

export default function Home() {
  const [search, setSearch] = useState("");
  const [sertifikaResults, setSertifikaResults] = useState<
    TypesenseApiResponseItemForKapsam[]
  >([]);
  const debouncedSearch = useDebounce(search, 100);
  useEffect(() => {
    if (debouncedSearch.trim().length === 0) {
      setSertifikaResults([]);
      return;
    }
    const abortController = new AbortController();
    const fetchData = async () => {
      try {
        const response = await fetch(
          `/search-api/kapsam?q=${debouncedSearch}`,
          {
            signal: abortController.signal,
          },
        );
        const data = await response.json();
        console.log(data);

        setSertifikaResults(data.hits);
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
        placeholder="Sertifika kapsamına göre arama..."
        autoFocus
        className="text-primary !bg-background sticky top-22 z-10 w-full border-2 border-sky-50 px-4 py-6"
      />
      <div className="grid flex-wrap gap-2 md:grid-cols-3 md:gap-6 lg:grid-cols-4 2xl:grid-cols-6">
        {sertifikaResults.map((item, index) => (
          <SertifikaItemCardWithKapsam
            key={index + item.document.id}
            item={item.document}
            highlight={item.highlight}
            highlights={item.highlights}
            showCategory
          />
        ))}
      </div>
      {sertifikaResults.length === 0 && (
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
