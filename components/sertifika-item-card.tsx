import React from "react";
import {
  ISertifikaItem,
  SertifikaItemFieldName,
  TypesenseSertifikaItemHighlight,
} from "@/types/typesense/ApiRes";
import Link from "next/link";
import Image from "next/image";
import { getImageUrl } from "@/util/img-url";
import { cn } from "@/lib/utils";
import parse from "html-react-parser";

interface Props {
  item: ISertifikaItem;
  className?: string;
  showCategory?: boolean;
  highlight?: TypesenseSertifikaItemHighlight;
}
export const SertifikaItemCard = ({
  item,
  className,
  showCategory = false,
  highlight,
}: Props) => {
  return (
    <Link
      href={`/sertifika/${item.id}`}
      className={cn(
        "min-h-72 min-w-56",
        "group flex flex-col overflow-hidden rounded-md transition-all duration-300",
        "outline-2 outline-gray-100 hover:outline-sky-300",
        "shadow-md hover:shadow-xl",
        "cursor-pointer",
        className,
      )}
    >
      <div className="relative">
        <MainLogo
          className="flex h-32 w-full items-center justify-center object-contain px-2 py-4"
          src={item.MarkaLogosu}
          alt={item.MarkaAdi}
        />
        {/* <div
          className={cn(
            "absolute top-0 right-0",
            "flex items-center justify-center",
            "size-8 rounded-bl-full bg-amber-300/30 pb-2 pl-2 text-xs font-bold",
            "transition-all duration-300",
            "group-hover:size-12 group-hover:bg-amber-300/100 group-hover:pb-4 group-hover:pl-4",
          )}
        >
          {item.YildizSayisi}
        </div> */}
      </div>
      <div
        className={cn(
          "flex flex-1 flex-col p-4",
          "bg-gray-50/80",
          "group-hover:bg-blue-50",
          "transition-all duration-300",
        )}
      >
        {renderField(
          item,
          "MarkaAdi",
          cn("text-2xl font-bold wrap-break-word"),
          highlight,
        )}
        {renderField(
          item,
          "FirmaAdi",
          cn("text-xs", "text-gray-500"),
          highlight,
        )}
        <div className="min-h-8 flex-1"></div>

        {showCategory && (
          <>
            <div
              className={cn("flex justify-between text-sm", "text-gray-500")}
            >
              <span>{item.KategoriAdi}</span>
            </div>
            <br />
          </>
        )}
        <div className={cn("flex justify-between text-sm", "text-gray-500")}>
          <span>Sertifika Bitiş :</span>
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

function MainLogo({
  src,
  alt,
  className,
}: {
  src?: string;
  alt: string;
  className?: string;
}) {
  if (!src) {
    return <div className={cn(className, "bg-gray-200")}></div>;
  }
  return (
    <Image
      src={getImageUrl(src)}
      alt={alt}
      width={160}
      height={100}
      className={className}
      priority={false}
    />
  );
}

function renderField(
  item: ISertifikaItem,
  field: SertifikaItemFieldName,
  className?: string,
  highlight?: TypesenseSertifikaItemHighlight,
) {
  if (!highlight) {
    return <div className={className}>{item[field]}</div>;
  }
  if (!highlight[field]) {
    return <div className={className}>{item[field]}</div>;
  }
  return <div className={className}>{parse(highlight[field].snippet)}</div>;
}
