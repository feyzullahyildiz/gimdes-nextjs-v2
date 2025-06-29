import { type NextRequest } from "next/server";
import { getTypeSenseClient } from "@/lib/typesense/client";
import { NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get("q") || "";
  const result = await getTypeSenseClient()
    // .collections("items")
    .collections("latest_sertifikalar")
    .documents()
    .search({
      q: query,
      query_by: ["unstable_SertifikaKapsami"],
      per_page: 20,
      // limit_hits: 5,
    });
  return NextResponse.json(result);
}
