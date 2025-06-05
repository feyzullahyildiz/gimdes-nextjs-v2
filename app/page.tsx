"use client";
import { SertifikaItemCard } from "@/components/sertifika-item-card";
import { Input } from "@/components/ui/input";
import { TypesenseApiResponse } from "@/types/typesense/ApiRes";
import { cn } from "@/util/cn";
import { useEffect, useState } from "react";

export default function Home() {
  const [search, setSearch] = useState("");
  const [data, setData] = useState<TypesenseApiResponse>([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`/search-api?q=${search}`);
      const data = await response.json();
      setData(data.hits);
    };
    fetchData();
  }, [search]);
  return (
    <div className={cn("container mx-auto", "flex flex-col gap-4 pt-4")}>
      <Input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Arama yapınız..."
      />
      <div className="grid flex-wrap gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-6">
        {data.map((item) => (
          <SertifikaItemCard
            key={item.document.id}
            item={item.document}
            highlight={item.highlight}
            showCategory
          />
        ))}
      </div>
    </div>
  );
}
