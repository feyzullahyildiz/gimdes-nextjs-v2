"use client";
import { setVersionCookie } from "@/service/set-version-cookie";
import Link from "next/link";
import React from "react";

interface HeaderProps {
  versions: string[];
  activeVersion: string;
}
export const Header = ({ versions, activeVersion }: HeaderProps) => {
  // console.log("activeVersion", activeVersion);
  return (
    <div className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto">
        <div className="flex items-center gap-8 p-4">
          <Link href="/">Ana Sayfa</Link>
          <Link href="/kategoriler">Kategoriler</Link>
          <div className="flex-1"></div>
          <select
            value={activeVersion}
            onChange={(e) => {
              setVersionCookie(e.target.value);
            }}
          >
            {versions.map((version) => (
              <option key={version} value={version}>
                {getDisplayName(version)}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

function getDisplayName(version: string) {
  // Check if the string matches the expected pattern
  if (version.includes("___")) {
    const datePart = version.split("___")[0];
    const parts = datePart.split("--");

    if (parts.length === 2) {
      const date = parts[0];
      const time = parts[1];

      // Format: YYYY-MM-DD HH:mm
      return `${date} ${time.substring(0, 5).split("-").join(":")}`;
    }
  }

  // Return original string if it doesn't match the pattern
  return version;
}
