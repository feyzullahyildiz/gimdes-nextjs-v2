import { getCategoriesWithEmoji } from "@/service/get-kategories";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (
  request: NextRequest,
  { params }: { params: { version: string } }
) => {
  const version = params.version;
  const categories = await getCategoriesWithEmoji(version);
  return NextResponse.json(categories);
};
