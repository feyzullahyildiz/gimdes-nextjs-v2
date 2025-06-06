import React from "react";
import { Version } from "./_components_/Version";

export default function Page() {
  return (
    <div className="container mx-auto px-4 py-8 flex flex-col gap-4">
      <h1 className="text-2xl font-bold">Sürüm Notları</h1>
      <Version version="1.0.0" date="2025-06-06" changes={["İlk versiyon"]} />
    </div>
  );
}
