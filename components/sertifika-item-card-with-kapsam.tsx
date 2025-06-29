import React from "react";
import {
  ISertifikaItem,
  SertifikaItemFieldName,
  TypesenseSertifikaItemHighlightForKapsam,
  TypesenseSertifikaItemHighlightsForKapsam,
} from "@/types/typesense/ApiRes";
import Link from "next/link";
import Image from "next/image";
import { getImageUrl } from "@/util/img-url";
import { cn } from "@/lib/utils";
import { toSlug } from "@/util/slug";

interface Props {
  item: ISertifikaItem;
  className?: string;
  showCategory?: boolean;
  highlight?: TypesenseSertifikaItemHighlightForKapsam;
  highlights?: TypesenseSertifikaItemHighlightsForKapsam;
}
export const SertifikaItemCardWithKapsam = ({
  item,
  className,
  highlight,
  highlights,
}: Props) => {
  return (
    <Link
      href={`/sertifika/${toSlug(item.MarkaAdi, item.id)}`}
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
            "flex items-center justify-center object-contain p-4 md:p-4",
            "h-24 w-24 md:h-32 md:w-auto",
          )}
          src={item.MarkaLogosu}
          alt={item.MarkaAdi}
        />
      </div>
      <div
        className={cn(
          "flex flex-1 flex-col p-2 px-4 md:p-4",
          "group-hover:bg-accent",
          "transition-all duration-300",
        )}
      >
        <RenderField
          item={item}
          field="MarkaAdi"
          className={cn("text-lg font-bold wrap-break-word md:text-2xl")}
          highlight={highlight}
        />

        <RenderField
          item={item}
          field="FirmaAdi"
          className={cn("text-xs", "text-muted-foreground")}
          highlight={highlight}
        />

        <div className="min-h-4 flex-1"></div>
        <RenderField
          item={item}
          field="unstable_SertifikaKapsami"
          className={cn("text-xs", "text-muted-foreground")}
          highlight={highlight}
          highlights={highlights}
        />
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
  highlights,
}: {
  item: ISertifikaItem;
  field: SertifikaItemFieldName;
  className?: string;
  highlight?: TypesenseSertifikaItemHighlightForKapsam;
  highlights?: TypesenseSertifikaItemHighlightsForKapsam;
}) {
  if (!highlight) {
    return <div className={className}>{item[field]}</div>;
  }
  // console.log("highlight", highlight);
  if (!highlight[field]) {
    return <div className={className}>{item[field]}</div>;
  }

  if (highlights) {
    const fieldHighlights = highlights?.find((h) => h.field === field);
    if (fieldHighlights) {
      return (
        <ul className={cn(className, "list-disc pl-4")}>
          {fieldHighlights.snippets.map((h, index) => (
            <li
              key={`${field}-${index}`}
              dangerouslySetInnerHTML={{ __html: h }}
            />
          ))}
        </ul>
      );
    }
  }
  return (
    <ul className={cn(className, "list-disc pl-4")}>
      {highlight[field].map((h, index) => (
        <li
          key={`${field}-${index}`}
          dangerouslySetInnerHTML={{ __html: h.snippet }}
        />
      ))}
    </ul>
  );
  // return (
  //   <ul className={cn(className, "list-disc pl-4")}>
  //     {highlight[field].map((h, index) => (
  //       <li
  //         key={`${field}-${index}`}
  //         dangerouslySetInnerHTML={{ __html: h.snippet }}
  //       />
  //     ))}
  //   </ul>
  // );
}
