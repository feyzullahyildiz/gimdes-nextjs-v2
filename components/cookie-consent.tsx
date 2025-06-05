"use client";

import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";

const LOCAL_STORAGE_KEY = "cookie-consent-closed";
export const CookieConsent = () => {
  const [closed, setClosed] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (stored === "true") {
      setClosed(true);
    }
  }, []);

  const onClick = () => {
    localStorage.setItem(LOCAL_STORAGE_KEY, "true");
    setClosed(true);
  };

  // Don't render anything until mounted on client side
  if (!mounted || closed) return null;

  return (
    <div className={cn("sticky bottom-0 bg-amber-200")}>
      <div className="container mx-auto flex items-center justify-between p-4">
        <span>Bu uygulama hiçbir şekilde çerez (cookie) kullanmamaktadır</span>
        <Button variant="outline" onClick={onClick}>
          Uyarıyı Kapat
        </Button>
      </div>
    </div>
  );
};
