import Link from "next/link";
import React from "react";
import { getUpdateTime } from "@/service/get-update-time";
import { formatDate } from "@/util/format-date";
export const Header = async ({}) => {
  const { latest } = await getUpdateTime();
  return (
    <div className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto">
        <div className="flex items-center gap-8 py-4">
          <Link href="/">Ana Sayfa</Link>
          <Link href="/kategoriler">Kategoriler</Link>
          <div className="flex-1"></div>

          <span>Son Güncelleme tarihi: {formatDate(latest)}</span>
        </div>
      </div>
    </div>
  );
};
