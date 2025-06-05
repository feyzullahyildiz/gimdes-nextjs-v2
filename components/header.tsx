import Link from "next/link";
import React from "react";

export const Header = ({}) => {
  return (
    <div className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto">
        <div className="flex items-center gap-8 py-4">
          <Link href="/">Ana Sayfa</Link>
          <Link href="/kategoriler">Kategoriler</Link>
          <Link href="/hakkimizda">Hakkımızda</Link>
          <div className="flex-1"></div>
        </div>
      </div>
    </div>
  );
};
