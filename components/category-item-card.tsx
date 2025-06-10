import React from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import {
  ICategory,
  ICategoryFieldName,
  TypesenseCategoriItemHighlight,
  TypesenseCategoriItemHighlightArray,
} from "@/types/api/category";
import { toSlug } from "@/util/slug";

interface Props {
  category: ICategory;
  highlight?:
    | TypesenseCategoriItemHighlight
    | TypesenseCategoriItemHighlightArray;
  showKeywords?: boolean;
  showSertifikaSayisi?: boolean;
  showHelperText?: boolean;
}
export const CategoryItemCard = ({
  category,
  highlight,
  showKeywords = false,
  showSertifikaSayisi = false,
  showHelperText = false,
}: Props) => {
  return (
    <Link
      href={`/kategori/${toSlug(category.name, category.id)}`}
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
      <div
        className={cn(
          "relative flex items-center justify-center bg-white",
          "h-24 w-24 md:h-32 md:w-auto",
          "flex flex-col items-stretch justify-evenly",
        )}
      >
        <span className={cn("text-center text-2xl md:text-4xl", "p-2 md:p-4")}>
          {category.emoji}
        </span>
        {showHelperText && (
          <span
            className={cn(
              "bg-destructive text-accent-foreground py-0 text-center text-sm",
            )}
          >
            Kategori
          </span>
        )}
      </div>

      <span
        className={cn(
          "flex flex-1 flex-col gap-1 px-4 py-2 md:p-4",
          "bg-secondary",
        )}
      >
        <div className="flex items-center justify-between">
          <RenderField
            className="text-lg font-semibold wrap-break-word"
            item={category}
            field="name"
            highlight={highlight as TypesenseCategoriItemHighlight}
          />
        </div>

        {showKeywords && (
          <RenderArrayField
            className={cn(
              "text-muted-foreground ml-4 list-inside list-disc text-xs",
              "grid grid-cols-2 sm:grid-cols-3 md:block",
            )}
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
