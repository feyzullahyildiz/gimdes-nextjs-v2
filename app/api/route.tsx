import { type NextRequest } from "next/server";
import { typeSenseClient } from "@/lib/typesense/client";
import { NextResponse } from "next/server";

// export const revalidate = 60;
export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get("q") || "";

  const result = await typeSenseClient
    // .collections("items")
    .collections("2025-05-15--08-21-46___4ac9d3fbbe453a19d661_sertifikalar")
    .documents()
    .search({
      q: query,
      query_by: ["FirmaAdi", "MarkaAdi"],
      // query_by_weights: [2, 2, 1],
      //   sort_by: "_text_match:desc",
      per_page: 10,
      //   prefix: ["marka", "ad"],
      //   prefix: "ad",
      //   prefix: ["ad", "marka", "kat_adi", "sert_kap", "kap_oniz"].join(","),
      //   infix: "fallback",
      //   num_typos: 1,
      //   typo_tokens_threshold: 2,
    });

  // const result = await search(query);
  return NextResponse.json(result);
}

// async function search(query: string) {
//   const queryString = new URLSearchParams({
//     q: query,
//     query_by: ["ad", "marka", "kat_adi", "sert_kap", "kap_oniz"].join(","),
//     query_by_weights: [12, 10, 2, 1, 1].join(","),
//   }).toString();
//   const url = `http://localhost:8108/collections/items/documents/search?${queryString}`;

//   const result = await fetch(url, {
//     headers: {
//       "X-TYPESENSE-API-KEY": "xyz",
//     },
//     next: {
//       revalidate: 60,
//       tags: ["search"],
//     },
//   });

//   return result.json();
// }
