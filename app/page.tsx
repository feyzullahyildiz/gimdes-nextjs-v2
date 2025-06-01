"use client";
import {
  SertifikaItemFieldName,
  TypesenseApiResponse,
  TypesenseApiResponseItem,
} from "@/types/typesense/ApiRes";
import { cn } from "@/util/cn";
import { imgUrl } from "@/util/img-url";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [search, setSearch] = useState("");
  const [data, setData] = useState<TypesenseApiResponse>([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`/api?q=${search}`);
      const data = await response.json();
      setData(data.hits);
    };
    fetchData();
  }, [search]);
  console.log(data);
  return (
    <div className={cn("container mx-auto", "flex flex-col gap-4 pt-4")}>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Arama yapınız..."
        className="w-full rounded-md border border-gray-800 p-4"
      />
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
        {data.map((item) => (
          <div className="rounded-md bg-gray-800 p-4" key={item.document.id}>
            {highlight(item, "MarkaAdi")}
            {highlight(item, "FirmaAdi")}
            {/* <div className="text-white">{item.document.marka}</div>
            <div className="text-white">{item.document.ad}</div> */}

            {item.document.MarkaLogosu && (
              <Image
                src={imgUrl(item.document.MarkaLogosu)}
                alt={item.document.MarkaAdi || ""}
                width={100}
                height={100}
                className="flex size-32 items-center justify-center object-contain"
                priority={false}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function highlight(
  item: TypesenseApiResponseItem,
  fieldName: SertifikaItemFieldName,
) {
  const value = item.highlight[fieldName];
  if (!value) {
    return <div className="text-white">{item.document[fieldName]}</div>;
  }
  return (
    <div
      className="text-white"
      dangerouslySetInnerHTML={{ __html: value.snippet }}
    />
  );
}
