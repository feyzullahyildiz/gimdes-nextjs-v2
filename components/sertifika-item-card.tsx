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
        "min-h-auto min-w-56 md:min-h-60",
        "group overflow-hidden rounded-md transition-all duration-300",
        "flex flex-row md:flex-col",
        "outline-secondary outline-2 hover:outline-sky-300 active:outline-sky-300",

        "shadow-md hover:shadow-xl",
        "cursor-pointer",
        className,
      )}
    >
      <div
        className={cn(
          "relative flex bg-white",
          "items-center md:items-start",
          "justify-start md:justify-center",
        )}
      >
        <MainLogo
          className={cn(
            "flex items-center justify-center object-contain px-2 py-4",
            "h-32 w-32 md:h-32 md:w-full",
          )}
          src={item.MarkaLogosu}
          alt={item.MarkaAdi}
        />
      </div>
      <div
        className={cn(
          "flex flex-1 flex-col p-4",
          "group-hover:bg-accent",
          "transition-all duration-300",
        )}
      >
        <RenderField
          item={item}
          field="MarkaAdi"
          className={cn("text-2xl font-bold wrap-break-word")}
          highlight={highlight}
        />

        <RenderField
          item={item}
          field="FirmaAdi"
          className={cn("text-xs", "text-muted-foreground")}
          highlight={highlight}
        />

        {showCategory && (
          <>
            <div className="min-h-4 flex-1"></div>
            <RenderField
              item={item}
              field="kategori_name"
              className={cn("text-xs", "text-muted-foreground")}
              highlight={highlight}
            />
          </>
        )}
      </div>
    </Link>
  );
};

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

function RenderField({
  item,
  field,
  className,
  highlight,
}: {
  item: ISertifikaItem;
  field: SertifikaItemFieldName;
  className?: string;
  highlight?: TypesenseSertifikaItemHighlight;
}) {
  if (!highlight) {
    return <div className={className}>{item[field]}</div>;
  }
  if (!highlight[field]) {
    return <div className={className}>{item[field]}</div>;
  }

  return (
    <div
      className={cn(className)}
      dangerouslySetInnerHTML={{ __html: highlight[field].snippet }}
    ></div>
  );
}
