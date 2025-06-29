"use client";

import React from "react";
import { ModeToggle } from "./theme-toggle-button";
import { NavLink } from "./nav-link";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerClose,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { useState, useCallback } from "react";
import { Menu } from "lucide-react";

export const Header = ({}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = useCallback(() => setIsMenuOpen(false), []);
  return (
    <>
      <div className="shadow-accent bg-background sticky top-0 z-50 shadow-md">
        <div className="container mx-auto">
          <div className="flex items-center gap-2 py-4 md:gap-8">
            <div className="hidden gap-2 md:flex">
              <NavLink href="/">Ana Sayfa</NavLink>
              <NavLink href="/kategoriler">Kategoriler</NavLink>
              <NavLink href="/kapsam">Detaylı Ara</NavLink>
              <NavLink href="/hakkimizda">Hakkımızda</NavLink>
            </div>
            <div className="visible md:hidden">
              <button
                className="flex items-center gap-2"
                onClick={() => setIsMenuOpen(true)}
              >
                <Menu />
                <span>Menü</span>
              </button>
            </div>
            <div className="flex-1"></div>
            <ModeToggle />
          </div>
        </div>
      </div>
      <Drawer direction="left" open={isMenuOpen} onOpenChange={setIsMenuOpen}>
        <DrawerContent>
          <DrawerHeader className="text-left">
            <DrawerTitle className="mb-4 flex justify-between">
              <div>Menü</div>
              <DrawerClose asChild>
                <Button variant="outline">Kapat</Button>
              </DrawerClose>
            </DrawerTitle>
            <DrawerDescription className="flex flex-col gap-4">
              <NavLink href="/" onClick={closeMenu}>
                Ana Sayfa
              </NavLink>
              <NavLink href="/kategoriler" onClick={closeMenu}>
                Kategoriler
              </NavLink>
              <NavLink href="/kapsam" onClick={closeMenu}>
                Detaylı Ara
              </NavLink>
              <NavLink href="/hakkimizda" onClick={closeMenu}>
                Hakkımızda
              </NavLink>
            </DrawerDescription>
          </DrawerHeader>
          <DrawerFooter className="pt-2">
            <DrawerClose asChild>
              <Button variant="outline">Kapat</Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};
