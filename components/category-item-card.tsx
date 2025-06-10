import React from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import {
  ICategory,
  ICategoryFieldName,
  TypesenseCategoriItemHighlight,
  TypesenseCategoriItemHighlightArray,
} from "@/types/api/category";

interface Props {
  category: ICategory;
  highlight?:
    | TypesenseCategoriItemHighlight
    | TypesenseCategoriItemHighlightArray;
  showKeywords?: boolean;
  showSertifikaSayisi?: boolean;
}
export const CategoryItemCard = ({
  category,
  highlight,
  showKeywords = false,
  showSertifikaSayisi = false,
}: Props) => {
  return (
    <Link
      href={`/kategori/${category.id}`}
      key={category.id}
      className={cn(
        "min-h-auto min-w-56 md:min-h-60",
        "flex-row md:flex-col",
        "group flex overflow-hidden rounded-md transition-all duration-300",
        "outline-primary-foreground outline-2 hover:outline-sky-300 active:outline-sky-300",
        "border-sidebar-border border-2 shadow-md hover:shadow-xl",
        "cursor-pointer",
      )}
    >
      <div className="relative flex h-auto w-32 items-center justify-center bg-white md:h-32 md:w-auto">
        <span className="p-4 text-center text-2xl md:text-4xl">
          {category.emoji}
        </span>
      </div>

      <span className={cn("flex flex-1 flex-col gap-1 p-4", "bg-secondary")}>
        <RenderField
          className="text-lg font-semibold wrap-break-word"
          item={category}
          field="name"
          highlight={highlight as TypesenseCategoriItemHighlight}
        />

        {showKeywords && (
          <RenderArrayField
            className="text-muted-foreground ml-4 list-inside list-disc text-xs"
            item={category}
            field="keywords"
            highlight={highlight as TypesenseCategoriItemHighlightArray}
          />
        )}

        {showSertifikaSayisi && (
          <>
            <div className="min-h-4 flex-1"></div>
            <div
              className={cn(
                "text-muted-foreground flex justify-between text-sm",
              )}
            >
              <span>Sertifika Sayısı :</span>
              <span>{category.SertifikaSayisi}</span>
            </div>
          </>
        )}
      </span>
    </Link>
  );
};

function RenderField({
  item,
  field,
  className,
  highlight,
}: {
  item: ICategory;
  field: ICategoryFieldName;
  className?: string;
  highlight?: TypesenseCategoriItemHighlight;
}) {
  // console.log("highlight", highlight);
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

function RenderArrayField({
  item,
  field,
  className,
  highlight,
}: {
  item: ICategory;
  field: ICategoryFieldName;
  className?: string;
  highlight?: TypesenseCategoriItemHighlightArray;
}) {
  // console.log("highlight", highlight);
  if (!highlight) {
    return (
      <ul className={className}>
        {item.keywords.map((k) => (
          <li key={k}>{k}</li>
        ))}
      </ul>
    );
  }
  if (!highlight[field]) {
    return (
      <ul className={className}>
        {item.keywords.map((k) => (
          <li key={k}>{k}</li>
        ))}
      </ul>
    );
  }

  return (
    <ul className={className}>
      {highlight.keywords.map((k, index) => (
        <li key={index} dangerouslySetInnerHTML={{ __html: k.snippet }}></li>
      ))}
    </ul>
  );
}
