import { getCategoriesWithEmoji } from "@/service/get-kategories";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (
  request: NextRequest,
  { params }: { params: Promise<{ version: string }> },
) => {
  const { version } = await params;
  const categories = await getCategoriesWithEmoji(version);
  return NextResponse.json(categories);
};
