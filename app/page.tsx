"use client";
import { imgUrl } from "@/util/img-url";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [search, setSearch] = useState("");
  const [data, setData] = useState<any[]>([]);
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
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search"
        className="w-full p-2 border border-gray-300 rounded-md"
      />
      <div className="grid grid-cols-3 gap-4  ">
        {data.map((item) => (
          <div className="bg-gray-800 p-4 rounded-md" key={item.document.id}>
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
                className="flex justify-center items-center object-contain size-32"
                priority={false}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}


function highlight(item: any, fieldName: string) {
  const value = item.highlight[fieldName];
  if (!value)
    return <div className="text-white">{item.document[fieldName]}</div>;
  return (
    <div
      className="text-white"
      dangerouslySetInnerHTML={{ __html: value.snippet }}
    />
  );
}
