"use client";

import React from "react";
import { ModeToggle } from "./theme-toggle-button";
import { NavLink } from "./nav-link";

export const Header = ({}) => {
  return (
    <div className="shadow-accent bg-background sticky top-0 z-50 shadow-md">
      <div className="container mx-auto">
        <div className="flex items-center gap-2 py-4 md:gap-8">
          <NavLink href="/">Ana Sayfa</NavLink>
          <NavLink href="/kategoriler">Kategoriler</NavLink>
          <NavLink href="/hakkimizda">Hakkımızda</NavLink>
          <div className="flex-1"></div>
          <ModeToggle />
        </div>
      </div>
    </div>
  );
};
