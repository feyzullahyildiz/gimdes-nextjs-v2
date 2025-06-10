import { type NextRequest } from "next/server";
import { getTypeSenseClient } from "@/lib/typesense/client";
import { NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get("q") || "";
  const result = await getTypeSenseClient().multiSearch.perform({
    searches: [
      {
        collection: "latest_sertifikalar",
        q: query,
        query_by: ["MarkaAdi", "FirmaAdi", "kategori_name"],
        query_by_weights: [6, 4, 1],
        per_page: 16,
      },
      {
        collection: "latest_kategoriler",
        q: query,
        query_by: ["name", "keywords"], // kategoriler için uygun alanları kullanın
        query_by_weights: [3, 1],
        per_page: 4,
      },
    ],
  });
  return NextResponse.json(result);
}
