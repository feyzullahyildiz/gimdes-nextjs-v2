import React from "react";
import { ISertifikaItem } from "@/types/typesense/ApiRes";
import Link from 'next/link';
import Image from "next/image";
import { imgUrl } from "@/util/img-url";
import { cn } from "@/util/cn";
import { roboto } from "@/util/font";

interface Props {
  item: ISertifikaItem;
}
export const SertifikaItemCard = ({ item }: Props) => {
  return (
    <Link
      href={`/sertifika/${item.id}`}
      
      className={cn(
        "group flex flex-col overflow-hidden rounded-md transition-all duration-300",
        "outline-2 outline-gray-100 hover:outline-sky-300",
        "shadow-md hover:shadow-xl",
        "cursor-pointer",
      )}
      key={item.id}
    >
      {item.MarkaLogosu ? (
        <Image
          src={imgUrl(item.MarkaLogosu)}
          alt={item.MarkaAdi || ""}
          width={160}
          height={100}
          className="flex h-32 w-full items-center justify-center object-contain px-2 py-4"
          priority={false}
        />
      ) : (
        <div className="flex h-32 w-full items-center justify-center bg-gray-200 object-contain px-2 py-4">
          <div className=""></div>
        </div>
      )}
      <div
        className={cn(
          "flex flex-1 flex-col p-4",
          "group-hover:bg-blue-50",
          "transition-all duration-300",
        )}
      >
        <div className={cn("text-2xl font-bold", roboto.className)}>
          {item.MarkaAdi}
        </div>
        <div className={cn("text-xs", "text-gray-500")}>{item.FirmaAdi}</div>
        <div className="min-h-8 flex-1"></div>
        <div className={cn("flex justify-between text-xs", "text-gray-500")}>
          <span>Sertifika Bitiş Tarihi :</span>
          <span>{getDate(item.SertifikaBitisTarihi)}</span>
        </div>
      </div>
    </Link>
  );
};

function getDate(str: string) {
  const date = new Date(str);
  if (date.getFullYear() < 40) {
    return "?";
  }
  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const year = date.getFullYear().toString().padStart(4, "0");
  return `${day}/${month}/${year}`;
}
