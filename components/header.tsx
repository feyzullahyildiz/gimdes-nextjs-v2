import Link from "next/link";
import React from "react";
import { ModeToggle } from "./theme-toggle-button";

export const Header = ({}) => {
  return (
    <div className="shadow-accent bg-background sticky top-0 z-50 shadow-md">
      <div className="container mx-auto">
        <div className="flex items-center gap-4 py-4 md:gap-8">
          <Link href="/">Ana Sayfa</Link>
          <Link href="/kategoriler">Kategoriler</Link>
          <Link href="/hakkimizda">Hakkımızda</Link>
          <div className="flex-1"></div>
          <ModeToggle />
        </div>
      </div>
    </div>
  );
};
